import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,public service:MyServiceService ) { }
 
  goToHome(): void{
    console.log(this.router);
    this.service.isLoggedIn=true;
    localStorage.setItem("username","Admin")
   this.router.navigate(['./home','Koshlendra' ] )
    
  }
  ngOnInit(): void {
  }

}
