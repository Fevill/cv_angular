import { Component } from '@angular/core';
import { CvService } from './service/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';
  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res
    })
  }
}
