import { Component, OnInit } from '@angular/core';
import * as Const_text_fr from './menu/utils/const_text_fr';
import * as Const_variables from './menu/utils/const_variables';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  const_text_fr = Const_text_fr;
  const_variables = Const_variables;
  title = this.const_text_fr.TTTRE


  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  toggleActive(elem, id) {
    var target = elem.target

    $(this.const_variables.TAG_RM).removeClass(this.const_variables.C_ACTIVE)
    $(id).addClass(this.const_variables.C_ACTIVE)
    console.log($(this.const_variables.TAG_A))
  }

  scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $("#Go_top").css("display","block");
    } else {
      $("#Go_top").css("display","none");
    }
  }

  topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
}
