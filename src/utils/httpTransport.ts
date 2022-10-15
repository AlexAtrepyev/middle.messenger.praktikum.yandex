enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

type Options = {
  method: Method;
  data?: any;
};

export default class HTTPTransport {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  public get<Response>(endpoint: string): Promise<Response> {
    return this.request<Response>(`${this.url}${endpoint}`);
  }

  public post<Response>(endpoint: string, data?: any): Promise<Response> {
    return this.request<Response>(`${this.url}${endpoint}`, { ...data, method: Method.POST });
  }

  public put<Response>(endpoint: string, data?: any): Promise<Response> {
    return this.request<Response>(`${this.url}${endpoint}`, { ...data, method: Method.PUT });
  }

  public delete<Response>(endpoint: string, data?: any): Promise<Response> {
    return this.request<Response>(`${this.url}${endpoint}`, { ...data, method: Method.DELETE });
  }

  private request<Response>(url: string, options: Options = { method: Method.GET }):
  Promise<Response> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.withCredentials = true;
      xhr.responseType = 'json';

      if (method === Method.PUT && data instanceof File) {
        const file = new FormData();
        file.append('avatar', data);
        xhr.send(file);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');

        if (method === Method.GET || !data) {
          xhr.send();
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  }
}
