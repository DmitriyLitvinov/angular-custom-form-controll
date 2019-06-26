import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { User } from '../../models/user/user.model';
import { UserService } from '../../servises/user/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnDestroy {
  displayedColumns: string[] = ['firstName', 'lastName', 'phone', 'email', 'dateOfBirth', 'age'];
  dataSource: User[] = [];
  iconColor = '#000000';
  dateFormat: string = DATE.FORMAT;
  usersSubscription$: Subscription;

  constructor(private userSrvice: UserService) {
    this.getUsers();
  }

  getUsers(): void {
    this.usersSubscription$ = this.userSrvice.getUsers()
      .subscribe((users: User[]) => {
        this.dataSource = users;
      });
  }

  ngOnDestroy() {
    this.usersSubscription$.unsubscribe();
  }
}
