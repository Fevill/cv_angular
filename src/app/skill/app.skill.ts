import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CvService } from '../service/service';

@Component({
  selector: 'app-skill',
  templateUrl: './app.skill.html',
  styleUrls: ['./app.skill.css']
})
export class Skill {

  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res
      console.log(this.CvData);
    })

  }
}
