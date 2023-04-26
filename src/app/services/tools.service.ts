import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    return this.http.get<toolType>(`${url}/${id}`)
  }

  addTool(tool: toolType): Observable<{}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<toolType>(`${url}/new`,tool,httpOptions);
  }

  updateTool(tool:toolType) {
    return this.http.put<toolType>(`${url}/${tool._id}`,tool)
    
  }
}
