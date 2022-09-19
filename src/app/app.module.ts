import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { HomeResolver } from './resolver/home.resolver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageCardModule } from './module/image-card/image-card.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactUsComponent,
    GalleryComponent,
    NotFoundComponent,
    TopNavComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ImageCardModule,
    MatToolbarModule
    
    
    
   
  ],
  providers: [HomeResolver,TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
