import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio.component';
import { AchivementsComponent } from './achivements/achivements.component';
import { ExperienceComponent } from './experience/experience.component';
import { FeatureSkillsComponent } from './feature-skills/feature-skills.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HomeComponent,
    SkillsComponent,
    PortfolioComponent,
    AchivementsComponent,
    ExperienceComponent,
    FeatureSkillsComponent,
    ContactsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    PortfolioComponent  
  ]
})
export class PortfolioModule { }
