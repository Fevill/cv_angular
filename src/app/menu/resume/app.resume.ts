import { Component } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
    selector: 'app-resume',
    templateUrl: './app.resume.html',
    styleUrls: ['./app.resume.css']
  })
  export class Resume {
    constructor(private service: Service) {

      
     }
  }
  