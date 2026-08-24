import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User ={
//     id:string;
//     name:string;
//     avatar:string;
//   };

interface User {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar!: string;
  // @Input() name!: string;

  //alias type
  // @Input({required:true}) user! : {
  //   id:string;
  //   name:string;
  //   avatar:string;
  // };

  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectuser() {
    this.select.emit(this.user.id);
  }
}
