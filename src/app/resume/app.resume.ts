import { Component } from '@angular/core';
import { CvService } from '../service/service';

@Component({
  selector: 'app-resume',
  templateUrl: './app.resume.html',
  styleUrls: ['./app.resume.css']
})
export class Resume {

  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res
      console.log(this.CvData);
    })

  }


}
