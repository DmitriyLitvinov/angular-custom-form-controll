import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { User } from '../../models/user/user.model';
import { HttpClient } from '@angular/common/http';

import users from '../../mocks/users.json';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: UserDataApi[] = users as UserDataApi[];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return of(this.users.map((user: UserDataApi) => new User(user)));
  }
}
