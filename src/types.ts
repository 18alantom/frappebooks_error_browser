export interface ErrorReport {
  name: string;
  last: Date;
  error_name: string;
  message: string;
  stack: string;
  occurances: number;
  version: string;
  done?: boolean;
}

export interface Controls {
  orderAsc: boolean;
  orderBy: 'occurances' | 'last';
  groupSubstring: string;
  groupBy: 'error_name' | 'stack' | 'message' | 'version';
}

export interface ErrorFetchResponse {
  message: {
    data: {
      count: number;
      creation: string;
      error_name: string;
      message: string;
      name: string;
      stack: string;
      version?: string;
    }[];
    timestamp: string;
  };
}
