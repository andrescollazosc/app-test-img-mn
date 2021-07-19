import { ImageModel } from '../models/image.model';

export class ImageMock {
  public static getImages(): ImageModel[] {
    return [
      {
        image: '../../../assets/img/img1.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img2.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img3.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img4.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img5.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img6.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img7.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img8.jpg',
        typeImage: 1,
      },
      {
        image: '../../../assets/img/img5.jpg',
        typeImage: 3,
      },
    ];
  }
}
