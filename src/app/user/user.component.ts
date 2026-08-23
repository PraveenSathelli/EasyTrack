import { Component, computed, input, Input, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // @Input({required:true}) avatar!: string;
  // @Input() name!: string;

  //signal different cases
  // avatar = input.required();
  // avatar = input('');
  // avatar = input<string>();

  avatar = input();
  name = input();

  imagePath = computed(() => { return 'assets/users/' + this.avatar(); })

  // get imagePath() {
  //   return 'assets/users/' + this.avatar();
  // }

  onSelectuser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
