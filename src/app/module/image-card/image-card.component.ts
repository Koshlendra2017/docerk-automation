import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ImageCard } from 'src/app/model/image-card';
import { MyServiceService } from 'src/app/service/my-service.service';
import { TruncatePipe } from 'src/app/truncate.pipe';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() imageCard: ImageCard;
  @Output() eventOutput= new EventEmitter();
  fullDescription:string;
  //list: any = [];
  constructor(private  myservice: MyServiceService,private truncate:TruncatePipe) { }

  public ngOnInit(): void {
this.fullDescription=this.imageCard.description;
this.imageCard.description=this.truncate.transform(this.imageCard.description,40);
//this.list=this.myservice.list;
 


  }
  showDescription(){
this.imageCard.description=this.fullDescription;
  }

}
