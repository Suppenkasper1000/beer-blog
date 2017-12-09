import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BeerComponent } from './content/beer/beer.component';
import {HttpService} from './service/http.service';
import {HttpModule} from '@angular/http';
import { AddRatingComponent } from './content/add-rating/add-rating.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {UploadFileService} from "./service/upload-file.service";
import {ListUploadComponent} from "./Upload/list-upload.component";
import {DetailsUploadComponent} from "./Upload/details-upload.component";
import {FormUploadComponent} from "./Upload/form-upload.component";
import {HttpClientModule} from "@angular/common/http";



const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/Overview',
    pathMatch: 'full'
  },
  { path: 'add-rating', component: AddRatingComponent },
  { path: 'Overview',      component: BeerComponent },
  { path: '**', component: PageNotFoundComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeerComponent,
    AddRatingComponent,
    PageNotFoundComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    HttpClientModule,
  FormsModule
  ],
  providers: [HttpService, UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
