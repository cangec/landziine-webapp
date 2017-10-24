import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {OnboardingComponent} from '../onboarding/onboarding.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { ProfileComponent } from '../profile/profile.component';
import { GenralInfoComponent } from '../cms/genral-info/genral-info.component';
import { ProjectsComponent } from '../cms/projects/projects.component';
import { JobsComponent } from '../cms/jobs/jobs.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'onboarding',
    component: OnboardingComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'cms',
    component: GenralInfoComponent,
  },
  {
    path: 'cms/projects',
    component: ProjectsComponent,
  },
  {
    path: 'cms/jobs',
    component: JobsComponent,
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
  },
  {
    // should be at the bottom or routes
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
