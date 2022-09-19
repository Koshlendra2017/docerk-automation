import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServiceService } from 'src/app/service/my-service.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  parentVar: any = 'I am parent';
  directionClass: string = 'row';
  isRow: boolean= false;
  constructor(
    private route: ActivatedRoute,
    public myservice: MyServiceService
  ) {
    this.route.queryParams.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {}

  getOutput(event:boolean): void {
this.directionClass= this.directionClass === 'row' ? 'column':'row' ;
this.isRow=!this.isRow;

  }
}
