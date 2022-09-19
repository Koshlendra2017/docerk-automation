import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';

console.warn("Sign up page is loading");
const routes: Routes = [
  { path: '', component: SignUpComponent }
];


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SignUpModule { }
