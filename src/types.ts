export interface ErrorReport {
  name: string;
  last: Date;
  error_name: string;
  message: string;
  stack: string;
  occurances: number;
  done?: boolean;
}

export interface Controls {
  orderAsc: boolean;
  orderBy: 'occurances' | 'last';
  groupSubstring: string;
  groupBy: 'none' | 'error_name' | 'stack' | 'message';
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
    }[];
    timestamp: string;
  };
}
