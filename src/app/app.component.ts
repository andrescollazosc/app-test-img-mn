import { Component } from '@angular/core';
import { ImageModel } from './models/image.model';
import { ImageMock } from './mocks/image.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-test';

  public arrayImages: ImageModel[] = ImageMock.getImages();
}
