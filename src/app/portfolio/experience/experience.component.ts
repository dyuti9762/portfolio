import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  toggleDetails(event: Event) {
    const header = event.currentTarget as HTMLElement;
    const content = header.nextElementSibling as HTMLElement;
    if (content) {
      content.classList.toggle("show");
      const button = header.querySelector(".toggle-btn") as HTMLElement;
      if (button) {
        button.textContent = content.classList.contains("show") ? "−" : "+";
      }
    }
  }
  
}
