import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router,Event } from '@angular/router';
import {Observable} from 'rxjs';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
 isLoggedIn:boolean =false;
  constructor(private router:Router,public service:MyServiceService ) { }

  ngOnInit(): void {
// this.router.events.subscribe((routerEvent: Event)=>{  
// if(routerEvent instanceof NavigationStart||routerEvent instanceof NavigationEnd ){
//   this.isLoggedIn=true;
}//});




  

 // }
}
