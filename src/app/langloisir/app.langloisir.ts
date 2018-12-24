import { Component } from '@angular/core';
import { CvService } from '../service/service';

import * as $ from 'jquery';

@Component({
  selector: 'app-langloisir',
  templateUrl: './app.langloisir.html',
  styleUrls: ['./app.langloisir.css']
})
export class Langloisir {
  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res;
    })
  }
}
