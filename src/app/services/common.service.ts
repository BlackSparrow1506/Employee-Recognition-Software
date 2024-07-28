import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  AddUpdateUser(addEmp: any): Observable<any> {
    return this.http.post(this.url + "addEmp", addEmp);
  }

  GetAllUsers(): Observable<any> {
    return this.http.get(this.url + "addEmp");
  }

  DeleteUsersById(ID: any): Observable<any> {
    return this.http.delete(this.url + "addEmp/" + ID);
  }

  UpdateEmp(item: any): Observable<any> {
    return this.http.put(this.url + "addEmp/" + item.id, item);
  }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.url + "addEmp");
  }

  uploadImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${this.url}/upload`,formData);
  }
}
