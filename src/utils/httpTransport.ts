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

type OptionsWithoutMethod = Omit<Options, 'method'>;

export default class HTTPTransport {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  public get(endpoint: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.url}${endpoint}`, { ...options, method: Method.GET });
  }

  public post(endpoint: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.url}${endpoint}`, { ...options, method: Method.POST });
  }

  public put(endpoint: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.url}${endpoint}`, { ...options, method: Method.PUT });
  }

  public delete(endpoint: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this.request(`${this.url}${endpoint}`, { ...options, method: Method.DELETE });
  }

  private request(url: string, options: Options = { method: Method.GET }): Promise<XMLHttpRequest> {
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
          console.log(data);
          xhr.send(JSON.stringify(data));
        }
      }
    });
  }
}
