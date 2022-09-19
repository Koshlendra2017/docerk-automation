import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SignUpComponent } from './module/sign-up/sign-up.component';
import { HomeResolver } from './resolver/home.resolver';
import { CutomPreloadingService } from './service/cutom-preloading.service';

const routes: Routes = [
  {
    path: 'home/:userName',
    component: HomeComponent,canActivate:[AuthGuardGuard],
    resolve:{data:HomeResolver}  
   },
   {
path: '',
redirectTo: 'login',
pathMatch: 'full'
    
   },
   {
      path: 'contactus',
      component: ContactUsComponent 
     },
     {
      path: 'gallery',
      component: GalleryComponent 
     },
     {
      path: 'login',
      component: LoginComponent 
     },
     {
      path: 'signup',
      data: {preload:true},
      loadChildren: () => import('./module/sign-up/sign-up.module').then(m => m.SignUpModule)
    },
   {
path: '**',
component: NotFoundComponent

   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true,useHash:true,preloadingStrategy:CutomPreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
