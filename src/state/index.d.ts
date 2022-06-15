export type RequestType = {
  method?: string;
  url?: string;
  data?: any;
  customData?: any;
  headers?: { [key: string]: string | number | boolean };
  params?: { [key: string]: string | number | boolean };
};

export type ResponseType = {
  status?: number;
  time?: number;
  size?: string;
  customData?: any;
  config?: any;
  data?: any;
  headers?: { [key: string]: string };
  cookies?: { [key: string]: string };
};

export type ErrorType = { message: string } | null;

export type StateType = {
  request: RequestType;
  response: ResponseType;
  error: ErrorType;
  isLoading: boolean;
};
