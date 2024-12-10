import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { type User } from './user.model';



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({ required: true }) user!: User;  // Decoratar approach (older)
  @Input() selected?: boolean;

  // avatar = input.required<string>(); // signal inputs
  // name = input.required<string>();

  @Output() select = new EventEmitter<string>();
  // select = output<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar);

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
