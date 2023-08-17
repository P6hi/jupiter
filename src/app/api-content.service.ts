import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiContentService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee')
  }
}
