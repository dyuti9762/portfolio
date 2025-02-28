import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './portfolio/home/home.component';
import { SkillsComponent } from './portfolio/skills/skills.component';
import { ExperienceComponent } from './portfolio/experience/experience.component';
import { AchivementsComponent } from './portfolio/achivements/achivements.component';
import { FeatureSkillsComponent } from './portfolio/feature-skills/feature-skills.component';
import { ContactsComponent } from './portfolio/contacts/contacts.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'achievements', component: AchivementsComponent },
  { path: 'feature-skills', component: FeatureSkillsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
