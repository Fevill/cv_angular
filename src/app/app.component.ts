import { Component, OnInit } from '@angular/core';
import { CvService } from './service/service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cv';
  public CvData: any;
  constructor(private service: CvService) {
    service.GetData().then(res => {
      this.CvData = res
    })
  }

  topFunction(): void {
    window.scrollTo(0, 0);
    console.log('UT')
  }

  X() {
    console.log('X')
  }

  /*ngOnInit() {
    $(window).scroll(function () {
      if (($(window)[0].scrollY) > 50) {
        $("#BtTop").css("display", "block")
      } else {
        $("#BtTop").css("display", "none")
      }

      if ($(window)[0].scrollY === $("#Resumé").position().top) {
        console.log($("#Resumé").position().top)

      } else if ($(window)[0].scrollY >= $("#Lang-Lois").position().top) {
        console.log($("#Lang-Lois").position().top)
      }
      else if ($(window)[0].scrollY >= $("#Formations").position().top) {
        console.log($("#Formations").position().top)
      } else if ($(window)[0].scrollY >= $("#Expériences").position().top) {
        console.log($("#Expériences").position().top)
      } else if ($(window)[0].scrollY >= $("#Compétences").position().top) {
        console.log($("#Compétences").position().top)
        this.ActiveLi(2)
      }
      else {
        console.log('...')
      }

      /*switch ($(window)[0].scrollY) {
        case $("#Resumé").position().top:
        console.log($("#Resumé").position().top)
          break;
        case $("#Compétences").position().top:
        console.log($("#Compétences").position().top)
          break;
      }*/
  /*console.log($("#Resumé").position().top)
  console.log($("#Compétences").position().top
});
}*/

  ngOnInit() {
    $(window).scroll(() => {
      if (($(window)[0].scrollY) > 50) {
        $("#BtTop").css("display", "block")
      } else {
        $("#BtTop").css("display", "none")
      }

      if ($(window)[0].scrollY === $("#Resumé").position().top) {
        this.ActiveLi(0)
      } else if ($(window)[0].scrollY >= $("#Lang-Lois").position().top - 80) {
        this.ActiveLi(4)
      } else if ($(window)[0].scrollY >= $("#Formations").position().top - 50) {
        this.ActiveLi(3)
      } else if ($(window)[0].scrollY >= $("#Expériences").position().top - 50) {
        this.ActiveLi(2)
      } else if ($(window)[0].scrollY >= $("#Compétences").position().top - 50) {
        this.ActiveLi(1)
      }
    })
  }

  ActiveLi(element) {
    $(".nav-item a").removeClass("navitem")
    console.log($(".nav-item a:eq(" + element + ")").addClass("navitem"))
  }
}
