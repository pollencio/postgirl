export type RequestType = {
  customData?: any;
  method?: string;
  url?: string;
};

export type ResponseType = {
  customData?: any;
  config?: any;
  data?: any;
  headers?: any;
};

export type StateType = {
  request: RequestType;
  response: ResponseType;
  error: string | null;
  isLoading: boolean;
};
