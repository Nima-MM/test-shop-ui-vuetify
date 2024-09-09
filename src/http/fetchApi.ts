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
   * @argument endpoint pass in the Endpoint/Resource Path e.g. /products
   * */

  async requestGet<T>(endpoint: string): Promise<T> {
    return fetch(this.baseUrl + endpoint)
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

  /**
   * @argument endpoint pass in the Endpoint/Resource Path e.g. /products
   * */
  async requestPost<T>(endpoint: string, boody: any): Promise<T> {
    return fetch(this.baseUrl + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(boody),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          `POST-HTTP error! status: ${response.status} - ${response.statusText}`
        );
      }
      return response.json() as Promise<T>;
    });
  }

  /**
   * @argument endpoint pass in the Endpoint/Resource Path e.g. /{id}
   * */
  async requestDel<T>(endpoint: number): Promise<T> {
    return fetch(this.baseUrl + endpoint, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(
          `DELETE-HTTP error! status: ${response.status} - ${response.statusText}`
        );
      }
      return response.status as unknown as T;
    });
  }
}
