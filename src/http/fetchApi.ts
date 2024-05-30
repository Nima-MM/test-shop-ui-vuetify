export class FetchApi {
    public baseUrl: string;
    public complete: boolean = false;
  
    public constructor(baseUrl: string) {
      this.baseUrl = baseUrl;
    }
  
    getRequest<T>(url: string): Promise<T> {
      // console.log("Tescht Link: ", this.baseUrl + url);
      return fetch(this.baseUrl + url).then(
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