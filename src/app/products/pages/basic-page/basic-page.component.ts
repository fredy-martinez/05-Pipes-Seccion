import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'fredy';
  public nameUpper: string = 'FREDY';
  public titleName: string = 'FrEdY MaRTinEZ';

  public customDate: Date = new Date();

}
