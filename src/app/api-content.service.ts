import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiContentService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('https://services.err.ee/api/v2/category/getByUrl?url=video&domain=jupiter.err.ee')
  }
}
