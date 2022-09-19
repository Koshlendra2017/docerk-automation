import { Injectable } from '@angular/core';
import { Router,Event, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ImageCard } from '../model/image-card';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  isLoggedIn:boolean=false;
  constructor(public router:Router,public route:ActivatedRoute) {
this.router.events.subscribe((routerEvent: Event)=>{
  if(this.router.getCurrentNavigation()?.extractedUrl.toString()=="/login" ){
     this.isLoggedIn=false;


}
console.log(this.router.getCurrentNavigation()?.extractedUrl.toString()  );
   })};

   public isAuthenticated(): boolean {
    const user = localStorage.getItem('username');
   
    if(user=="Admin")
    return true;  
    else return false;
    
  
  }
  public list: ImageCard[] = [
    {
      "id": "img1",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      
    },
    {
      "id": "img2",
      "description": "Mango"
      
    }
  ];

}
