import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/form/form.component';
import { ListingComponent } from './home/listing/listing.component';
import { HomeServiceService } from './common/service/home-service.service';
import { MessageService } from './common/service/message.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
 
  { path: 'home', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomeComponent,
    ListingComponent,
    FormComponent
    
  ],
  imports: [
    HttpModule,
    HttpClientModule,
   
    BrowserModule,    
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HomeServiceService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
