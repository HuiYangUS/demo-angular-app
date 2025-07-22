import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  base_url: string = "https://fake-store-api.mock.beeceptor.com";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${this.base_url}/api/users`);
  }

  rxResourceData = rxResource({
    loader: () => this.httpClient.get(`${this.base_url}/api/users`)
  });

  resourceData = resource({
    // 1. fetch data from API endpoint
    // 2. return result as JSON
    // 3. convert JSON as 'Promise' object
    loader: () => fetch(`${this.base_url}/api/users`).then(result => result.json() as Promise<any>)
  });

}
