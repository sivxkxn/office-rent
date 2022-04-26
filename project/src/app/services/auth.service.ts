import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from '../models/models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:3000/users';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Array<IUser>>(this.url);
  }

  createUser(User: IUser) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .post<IUser>(this.url, JSON.stringify(User), { headers: myHeaders })
      .subscribe(() => {
        console.log('try to create');
      });
  }

  updateUser(User: IUser) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .put<IUser>(this.url + '/' + User.id, JSON.stringify(User), {
        headers: myHeaders,
      })
      .subscribe(() => {
        console.log('try to update');
      });
  }

  deleteUsers(id: string) {
    return this.http
      .delete(this.url + '/' + id, this.httpOptions)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
