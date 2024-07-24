export class FetchApi {
  public baseUrl: string;
  public complete: boolean = false;

  /**
   * @constructor
   * @argument baseUrl pass the root/basic URL
   * */
  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * @argument route pass in the Endpoint/Resource Path e.g. /products
   * */
  async requestGet<T>(route: string): Promise<T> {
    return fetch(this.baseUrl + route)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `HTTP error! status: ${response.status} - ${response.statusText}`
          );
        }
        return response.json() as Promise<T>;
      }) // why to assign with another then the respone to data instead of just return???
      .then((data) => {
        return data;
      });
  }
}
