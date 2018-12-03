import { Component,OnInit } from '@angular/core';
import * as Const_text_fr from './menu/utils/const_text_fr'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cv NOUGLOZEH Gerard';
  const_text_fr = Const_text_fr;

  //window.onscroll = function () { scrollFunction() };
  ngOnInit(){
    this.scrollFunction 
  }

  scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("logo").style.fontSize = "25px";
    } else {
      document.getElementById("navbar").style.padding = "80px 10px";
      document.getElementById("logo").style.fontSize = "35px";
    }
  }
}
