import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: null,
})
export class MyFirstService {
  users: Array<User> = [];

  constructor() {
    this.init();
  }

  init() {
    this.insert({
      name: 'Ilya Petrenckov',
      email: 'ilya.petrenckov@gmail.com',
      message: 'Hello, this is my first Angular application!',
    });
  }

  getUsers(): Array<User> {
    return this.users;
  }

  insert(user: User) {
    this.users.push(user);
  }

  delete(index: number) {
    this.users.splice(index, 1);
  }
}
