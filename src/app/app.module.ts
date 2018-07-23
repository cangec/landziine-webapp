import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { JoinComponent } from './onboarding/join/join.component';
import { WelcomeComponent } from './onboarding/welcome/welcome.component';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Step3Component } from './onboarding/step-3/step-3.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BgVideoComponent } from './landing-page/bg-video/bg-video.component';
import { VideoOverlayComponent } from './landing-page/video-overlay/video-overlay.component';
import { SearchBoxComponent } from './landing-page/video-overlay/search-box/search-box.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { StudiosCarouselComponent } from './landing-page/studios-carousel/studios-carousel.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { SwiperCardComponent } from './shared/swiper-card/swiper-card.component';
import { TruncateModule } from 'ng2-truncate';
import { ArchitectsCarouselComponent } from './landing-page/architects-carousel/architects-carousel.component';
import { OpenJobsCarouselComponent } from './landing-page/open-jobs-carousel/open-jobs-carousel.component';
import { OpenJobCardComponent } from './landing-page/open-jobs-carousel/open-job-card/open-job-card.component';
import { StudentsCarouselComponent } from './landing-page/students-carousel/students-carousel.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FooterSearchBoxComponent } from './shared/footer/footer-search-box/footer-search-box.component';
import { ProfileComponent } from './profile/profile.component';
import { FullScreenProfileComponent } from './profile/full-screen-profile/full-screen-profile.component';
import { ScrollProfileComponent } from './profile/scroll-profile/scroll-profile.component';
import { ProfileNameComponent } from './shared/profile-name/profile-name.component';
import { GraphComponent } from './profile/full-screen-profile/graph/graph.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import { PortfolioImageComponent } from './shared/portfolio-image/portfolio-image.component';
import { PortfolioTextComponent } from './shared/portfolio-text/portfolio-text.component';
import { AgmCoreModule, AgmMap  } from '@agm/core';
import { MapComponent } from './shared/map/map.component';
import { MapDirectionsDirective } from './directives/map-directions.directive';
import { ProfileInfoComponent } from './shared/map/profile-info/profile-info.component';
import { EmployeesComponent } from './profile/full-screen-profile/employees/employees.component';
import { ProfileDescriptionComponent } from './profile/full-screen-profile/profile-description/profile-description.component';
import { CmsHeaderComponent } from './cms/shared/cms-header/cms-header.component';
import { TaskBarComponent } from './cms/shared/task-bar/task-bar.component';
import { UpdateBtnDropdownComponent } from './cms/shared/update-btn-dropdown/update-btn-dropdown.component';
import { PublicInfoComponent } from './cms/genral-info/public-info/public-info.component';
import { ImageUploadComponent } from './cms/shared/image-upload/image-upload.component';
import { ArchitectsComponent } from './cms/genral-info/architects/architects.component';
import { ArchitectAvatarComponent } from './cms/genral-info/architects/architect-avatar/architect-avatar.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CmsFooterComponent } from './cms/shared/cms-footer/cms-footer.component';
import { GenralInfoComponent } from './cms/genral-info/genral-info.component';
import { ProjectsComponent } from './cms/projects/projects.component';
import { ProjectsListingComponent } from './cms/projects/projects-listing/projects-listing.component';
import { ProjectListItemComponent } from './cms/projects/projects-listing/project-list-item/project-list-item.component';
import { ProjectBlocksComponent } from './cms/projects/project-blocks/project-blocks.component';
import { ProjectBlockComponent } from './cms/projects/project-blocks/project-block/project-block.component';
import { ProjectBuilderComponent } from './cms/projects/project-builder/project-builder.component';
import { ProjectBasicInfoComponent } from './cms/projects/project-builder/project-basic-info/project-basic-info.component';
import { DragulaModule } from 'ng2-dragula';
import { VideoBlockComponent } from './cms/shared/video-block/video-block.component';
import { SanitizePipe } from './shared/pipes/sanitize.pipe';
import { JobsComponent } from './cms/jobs/jobs.component';
import { JobsListingComponent } from './cms/jobs/jobs-listing/jobs-listing.component';
import { JobListItemComponent } from './cms/jobs/jobs-listing/job-list-item/job-list-item.component';
import { JobInfoComponent } from './cms/jobs/job-info/job-info.component';
import { NgDatepickerModule } from 'ng2-datepicker';
import { ApplicantComponent } from './cms/jobs/job-info/applicant/applicant.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ResultMapComponent } from './shared/result-map/result-map.component';
import { AdvancedSearchComponent } from './shared/advanced-search/advanced-search.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TextBlockComponent } from './cms/shared/text-block/text-block.component';
import { GalleryBlockComponent } from './cms/shared/gallery-block/gallery-block.component';
import { MobxAngularModule } from 'mobx-angular';
import { ProjectBuilderServiceService } from './services/project-builder-service.service';
import { GeneralInfoService } from './services/general-info.service';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PublicInfoIndividualComponent } from './cms/genral-info/public-info-individual/public-info-individual.component';
import { PrivateInfoIndividualComponent } from './cms/genral-info/private-info-individual/private-info-individual.component';
import { SkillsComponent } from './cms/genral-info/skills/skills.component';
import { FileUploadModule  } from 'ng2-file-upload';
import { AddTeammateComponent } from './cms/shared/modals/add-teammate/add-teammate.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {SelectModule} from 'ng2-select';
import { AddEducationComponent } from './cms/shared/modals/add-education/add-education.component';
import { PortfolioProjectsComponent } from './shared/portfolio-projects/portfolio-projects.component';
import { ProjectCardComponent } from './shared/project-card/project-card.component';
import { ProjectComponent } from './project/project.component';
import { ProjectHeaderComponent } from './project/project-header/project-header.component';

@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    JoinComponent,
    WelcomeComponent,
    Step3Component,
    HeaderComponent,
    LandingPageComponent,
    BgVideoComponent,
    VideoOverlayComponent,
    SearchBoxComponent,
    StudiosCarouselComponent,
    SwiperCardComponent,
    ArchitectsCarouselComponent,
    OpenJobsCarouselComponent,
    OpenJobCardComponent,
    StudentsCarouselComponent,
    FooterComponent,
    FooterSearchBoxComponent,
    ProfileComponent,
    FullScreenProfileComponent,
    ScrollProfileComponent,
    ProfileNameComponent,
    GraphComponent,
    PortfolioImageComponent,
    PortfolioTextComponent,
    MapComponent,
    MapDirectionsDirective,
    ProfileInfoComponent,
    EmployeesComponent,
    ProfileDescriptionComponent,
    CmsHeaderComponent,
    TaskBarComponent,
    UpdateBtnDropdownComponent,
    PublicInfoComponent,
    ImageUploadComponent,
    ArchitectsComponent,
    ArchitectAvatarComponent,
    CmsFooterComponent,
    GenralInfoComponent,
    ProjectsComponent,
    ProjectsListingComponent,
    ProjectListItemComponent,
    ProjectBlocksComponent,
    ProjectBlockComponent,
    ProjectBuilderComponent,
    ProjectBasicInfoComponent,
    VideoBlockComponent,
    SanitizePipe,
    JobsComponent,
    JobsListingComponent,
    JobListItemComponent,
    JobInfoComponent,
    ApplicantComponent,
    SearchResultsComponent,
    ResultMapComponent,
    AdvancedSearchComponent,
    TextBlockComponent,
    GalleryBlockComponent,
    PublicInfoIndividualComponent,
    PrivateInfoIndividualComponent,
    SkillsComponent,
    AddTeammateComponent,
    AddEducationComponent,
    PortfolioProjectsComponent,
    ProjectCardComponent,
    ProjectComponent,
    ProjectHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    SwiperModule,
    TruncateModule,
    ChartsModule,
    Ng2PageScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCzUdXN51_9208Hj5n9Mg1_Mzmlzo4rBpY',
      libraries: ['places']
    }),
    TooltipModule.forRoot(),
    DragulaModule,
    NgDatepickerModule,
    AgmSnazzyInfoWindowModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MobxAngularModule,
    ModalModule.forRoot(),
    FileUploadModule,
    SelectModule


  ],
  providers: [ProjectBuilderServiceService, GeneralInfoService, BsModalService, BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [
    AddTeammateComponent, AddEducationComponent
  ]
})
export class AppModule {

  constructor( ) {

  }

}
