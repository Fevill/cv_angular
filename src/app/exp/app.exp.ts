import { Component } from '@angular/core';
import { CvService } from '../service/service';

@Component({
  selector: 'app-exp',
  templateUrl: './app.exp.html',
  styleUrls: ['./app.exp.css']
})
export class Experience {

  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res
    })

  }


}
