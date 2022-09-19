import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TruncatePipe } from 'src/app/truncate.pipe';


@NgModule({
  declarations: [
    ImageCardComponent,
    TruncatePipe

  ],
  imports: [
    CommonModule,
    MatGridListModule
  ],
  exports:[
ImageCardComponent
  ]
})
export class ImageCardModule { }
