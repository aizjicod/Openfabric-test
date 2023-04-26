import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export type toolType = {
  name: string,
  image: string,
  description: string,
  category: string,
  price: number,
  _id?: string,
  __v?: number,
  updatedAt?: string,
  createdAt?: string
}

const url = 'https://test-backend-ezzv.onrender.com/tools'
@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  tools:toolType[];
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<toolType>(url)
  }

  getItem(id:number) {
    return this.tools[id - 1]
  }

  addTool(tool: toolType): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<toolType>(`${url}/new`,tool,httpOptions);
  }
}
