import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIconButton} from '@angular/material/button';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  imports: [
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem,
    MatIconButton,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.css',
})
export class BurgerMenu {

}
