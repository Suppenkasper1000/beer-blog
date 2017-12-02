import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { BeerComponent } from './content/beer/beer.component';
import {HttpService} from './service/http.service';
import {HttpModule} from '@angular/http';
import { AddRatingComponent } from './content/add-rating/add-rating.component';
import {RouterModule, Routes} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  { path: 'add-rating', component: AddRatingComponent },
  { path: 'Overview',      component: BeerComponent },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BeerComponent,
    AddRatingComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
  FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
