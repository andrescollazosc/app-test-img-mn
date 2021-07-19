import { Component, Input, OnInit } from '@angular/core';
import { ImageModel } from 'src/app/models/image.model';

@Component({
  selector: 'app-image-square',
  templateUrl: './image-square.component.html',
  styleUrls: ['./image-square.component.scss']
})
export class ImageSquareComponent implements OnInit {

  @Input() itemsImages: ImageModel[] = [];

  public arrayImageWithText: ImageModel[] = [];
  public arrayImage: ImageModel[] = [];
  public arrayUpImage: ImageModel[] = [];
  public arrayDownImage: ImageModel[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.itemsImages.length == 0) {
      throw new Error("The property [itemsImage] is riquired.");
    }   

    this.filterArrays();    
  }

  private filterArrays(): void {
    this.validateRules();

    this.arrayImageWithText = this.itemsImages.filter(x => x.typeImage === 3);
    // this.arrayUpImage = this.itemsImages.filter(x => x.typeImage === 2);
    this.arrayImage = this.itemsImages.filter(x => x.typeImage === 1);
    
  }

  private validateRules(): void {
    const quantityimage = this.itemsImages.filter(x => x.typeImage === 1);   

    // Validation For rules 2, 3, 4
    if (quantityimage.length === 3) {
      quantityimage[quantityimage.length - 1].typeImage = 2;      
    }

    // Validation for rule 5, 6, 7, 8
    if (quantityimage.length >= 5 && quantityimage.length <= 8) {
      for (let index = 4; index < quantityimage.length; index++) {
        quantityimage[index].typeImage = 2;
      }   
      this.fillVerticalArrays();
    }
  }

  private fillVerticalArrays(): void {
    const arrayFiltered = this.itemsImages.filter(x => x.typeImage === 2);
    const lengtDownArray = Math.round(arrayFiltered.length / 2);
    const lengtUpArray = arrayFiltered.length - lengtDownArray;

    if (arrayFiltered.length <= 2) {
      this.arrayDownImage = this.iteratorVerticalArrays(0, arrayFiltered.length, arrayFiltered)
    } else {
      this.arrayDownImage = this.iteratorVerticalArrays(0, lengtDownArray, arrayFiltered)
      this.arrayUpImage = this.iteratorVerticalArrays(lengtDownArray, arrayFiltered.length, arrayFiltered)
    }
  }

  private iteratorVerticalArrays(start: number, length: number, arrayFiltered: ImageModel[]): ImageModel[] {
    let resultArray:ImageModel[] = [];
    
    for (let index = start; index < length; index++) {
      resultArray.push(arrayFiltered[index]);
    }

    return resultArray;
  }



}
