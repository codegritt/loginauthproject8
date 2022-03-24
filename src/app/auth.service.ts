import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;

  constructor(private http: HttpClient,
              private _router: Router) {
                this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
                this.currentUser = this.currentUserSubject.asObservable();
               }

               public get currentUserValue(): User {
                return this.currentUserSubject.value;
            }

  registerUser(user: {}) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: {}) {
    return this.http.post<any>(this._loginUrl, user)

    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
    this.currentUserSubject.next(null);
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
