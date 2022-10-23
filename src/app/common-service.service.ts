import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http: HttpClient) { }
apiUrl:any="https://dev.greenkoncepts.com/gktest/node-hierarchy"
  getAll() {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  register(user: User) {
    return this.http.post(`${this.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
