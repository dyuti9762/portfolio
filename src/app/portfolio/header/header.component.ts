import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');

    if (this.menuOpen && nav && !nav.contains(event.target as Node) && !burger?.contains(event.target as Node)) {
      this.menuOpen = false;
    }
  }
}
