import { Component, OnInit } from '@angular/core';
import { Legende, Competence_Bloc } from '../../class/skill';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-skill',
  templateUrl: './app.skill.html',
  styleUrls: ['./app.skill.css']
})
export class Skill implements OnInit {

  private legendListe: Legende[] = [];
  private competenceBlocListe: Competence_Bloc[] = [];

  constructor(private service: Service) { }

  /** Recuperer la legende */
  legend(): void {
    this.service.GetLegend().then((res: any) => {
      this.legendListe = res
    })
  }

  ngOnInit() {
    this.legend()
  }
}
