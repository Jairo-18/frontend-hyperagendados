import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatIcon, MatMenuModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss',
})
export class NavBarComponent {
  menuOpen: boolean = false;
  menuClose() {
    this.menuOpen = false;
  }
}
