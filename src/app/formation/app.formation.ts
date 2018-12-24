import { Component } from '@angular/core';
import { CvService } from '../service/service';

import * as $ from 'jquery';

@Component({
  selector: 'app-formation',
  templateUrl: './app.formation.html',
  styleUrls: ['./app.formation.css']
})
export class Formation  {

  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res;
      setTimeout(function () {
        $('div ul li:even').addClass("timeline-inverted")
      }, 5);
    })
  }


}
