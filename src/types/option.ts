export enum EMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  TRACE = "TRACE",
  CONNECT = "CONNECT",
}

export enum EResponseStatus {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NOT_FOUND = 404,
  FROM_CACHE = 304,
  INTERNAL_SERVER_ERROR = 500,
  SERVER_ERROR = 503
}

export interface IOptions<T> {
  method: EMethod;
  url: string;
  data: T;
  headers?: { [key: string]: string };
  timeout?: number;
  baseURL?: string;
  withCredentials?: boolean;
  responseType?: XMLHttpRequestResponseType;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  [key: string]: any;
}

export interface IResponse<T> {
  data: T;
  status: EResponseStatus;
  statusText: string;
  headers: { [key: string]: string };
  config: IOptions<T>;
  request: any;
}
