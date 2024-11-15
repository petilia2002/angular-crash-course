import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import { CardComponent } from '../card/card.component';
import { MyFirstService } from '../../services/my-first/my-first.service';

@Component({
  selector: 'app-my-first',
  standalone: true,
  imports: [FormsModule, CommonModule, CardComponent],
  templateUrl: './my-first.component.html',
  styleUrl: './my-first.component.css',
})
export class MyFirstComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  users: Array<User> = [];
  //private service: MyFirstService = inject(MyFirstService);

  constructor(private service: MyFirstService) {
    this.users = this.service.getUsers();
  }

  onSubmit() {
    /*this.isSubmitted = true;
    console.log(this.name);*/
    this.service.insert({
      name: this.name,
      email: this.email,
      message: this.message,
    });

    this.name = '';
    this.email = '';
    this.message = '';
  }

  deleteUser(index: number) {
    this.service.delete(index);
  }
}
