import HTTPTransport from '../utils/httpTransport';

const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export default abstract class BaseApi {
  protected http: HTTPTransport;

  protected constructor(endpoint: string) {
    this.http = new HTTPTransport(`${BASE_URL}${endpoint}`);
  }

  public abstract create?(data: unknown): Promise<unknown>;

  public abstract read?(identifier: string): Promise<unknown>;

  public abstract update?(identifier: string, data: unknown): Promise<unknown>;

  public abstract delete?(identifier: string): Promise<unknown>;
}
