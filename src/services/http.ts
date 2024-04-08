/* eslint-disable @typescript-eslint/no-explicit-any */
type RequestOptions = {
  method: string;
  mode?: string;
  cache?: string;
  credentials?: string;
  body?: any;
  headers?: Headers;
};

class Http {
  private requestOptions: RequestOptions | any = {
    method: 'GET',
    //credentials: 'same-origin',
    headers: new Headers({
      'content-type': 'application/json',
    }),
  };

  get(baseURL: string, options = {}): Promise<any> {
    return fetch(`${process.env.REACT_APP_SOCKET}${baseURL}`, {
      ...this.requestOptions,
      ...options,
    });
  }

  post(baseURL: string, options = {}): Promise<any> {
    return fetch(`${process.env.REACT_APP_SOCKET}${baseURL}`, {
      ...this.requestOptions,
      method: 'POST',
      ...options,
    });
  }
}

export default new Http();
