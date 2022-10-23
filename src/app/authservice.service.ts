// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { BehaviorSubject, config, map, Observable } from 'rxjs';
// import { User } from './user';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   private currentUserSubject: BehaviorSubject<User>;
//   public currentUser?: Observable<User>;
//   apiUrl: any;

//   constructor(private http: HttpClient) {
//       this.currentUserSubject = new BehaviorSubject<User>());
//       this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): User {
//       return this.currentUserSubject.value;
//   }

//   login(username:any, password:any) {
//       return this.http.post<any>(`${this.apiUrl}/users/authenticate`, { username, password })
//           .pipe(map((user:any) => {
//               // store user details and jwt token in local storage to keep user logged in between page refreshes
//               localStorage.setItem('currentUser', JSON.stringify(user));
//               this.currentUserSubject.next(user);
//               return user;
//           }));
//   }

//   logout() {
//       // remove user from local storage and set current user to null
//       localStorage.removeItem('currentUser');
//       // this.currentUserSubject.next();
//   }
// }
