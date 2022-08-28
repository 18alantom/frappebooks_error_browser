import { Controls, ErrorFetchResponse, ErrorReport } from './types';

export function sortErrorReports(
  controls: Controls,
  errorReports: ErrorReport[]
): void {
  errorReports.sort((a, b) => {
    const valueA = Number(a[controls.orderBy]);
    const valueB = Number(b[controls.orderBy]);

    if (controls.orderAsc) {
      return valueA - valueB;
    }

    return valueB - valueA;
  });
}

export function groupErrorReports(
  { groupBy, groupSubstring }: Controls,
  errorReports: ErrorReport[]
): Record<string, ErrorReport[]> {
  const groups: Record<string, ErrorReport[]> = {};

  for (const er of errorReports) {
    if (groupBy === 'none' || (groupBy === 'message' && !groupSubstring)) {
      groups['all'] ??= [];
      groups['all'].push(er);
      continue;
    }

    const value = er[groupBy];
    if (!groupSubstring) {
      groups[value] ??= [];
      groups[value].push(er);
    } else if (value.includes(groupSubstring)) {
      groups[groupSubstring] ??= [];
      groups[groupSubstring].push(er);
    }
  }

  return groups;
}

export function getGroupHeader(
  { groupBy, groupSubstring }: Controls,
  errorReports: ErrorReport[]
) {
  let total = 0;
  let lastAppeared = new Date(0);

  for (const { last, occurances } of errorReports) {
    total += occurances;
    if (last > lastAppeared) {
      lastAppeared = last;
    }
  }

  let title = '';
  if (groupBy === 'none' || (groupBy === 'message' && !groupSubstring)) {
    title = 'All';
  } else {
    title = errorReports[0][groupBy];
  }

  if (groupSubstring) {
    title = groupSubstring;
  }

  if (title.length > 32) {
    title = title.slice(0, 29) + '...';
  }

  return { title, total, lastAppeared, count: errorReports.length };
}

export async function fetchErrorReports() {
  const jsonData: ErrorFetchResponse = await fetch(
    'https://frappebooks.com/api/method/frappebooks_assist.frappebooks_assist.open.get_error_reports'
  ).then((r) => r.json());

  const errorReports = jsonData.message.data.map((e) => {
    return {
      name: e.name,
      last: new Date(e.creation),
      error_name: e.error_name,
      message: e.message,
      stack: e.stack,
      occurances: e.count,
      done: false,
    } as ErrorReport;
  });
  const timestamp = new Date(jsonData.message.timestamp);
  return { errorReports, timestamp };
}
