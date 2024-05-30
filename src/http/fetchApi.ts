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
      // console.log("Tescht Link: ", this.baseUrl + url);
      return fetch(this.baseUrl + route).then(
        response => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          // console.log("Tescht Reschpone: ", response.json);
        return response.json() as Promise<T>;
        })
        .then( data => {
          // console.log("Tescht DATA:", data);
          return data
        })    
    }
  }