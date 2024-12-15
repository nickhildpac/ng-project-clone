import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  getImagePath(): string {
    return 'assets/users/' + this.selectedUser?.avatar;
  }

  onSelectUser(id: string) {
    // console.log('selected id is ' + id);
    this.selectedUserId = id;
  }

}
