import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    if (window.innerWidth <= 768) { // Apply only on mobile screens
      this.menuOpen = !this.menuOpen;
    }
  }

  @HostListener('document:click', ['$event'])
  closeMenu(event: Event) {
    const clickedElement = event.target as HTMLElement;
    
    // Check if clicked outside the header or burger menu
    if (window.innerWidth <= 768 && !clickedElement.closest('header') && !clickedElement.closest('.burger')) {
      this.menuOpen = false;
    }
  }
}
