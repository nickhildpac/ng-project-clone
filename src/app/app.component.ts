import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-user';
@Component({
  selector: 'app-root',
  imports: [TasksComponent, HeaderComponent, UserComponent],
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
