import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Legende } from '../../class/skill';

@Component({
  selector: 'app-skill',
  templateUrl: './app.skill.html',
  styleUrls: ['./app.skill.css']
})
export class Skill {

  private legendListe: Legende[] = [];
  private competenceBlocListe: Competence_Bloc[] = [];

  constructor(private http: HttpClient) { }

  test() {
    this.http.get("./assets/data/skill_text.json").subscribe((data: any) => {
   
      for (let element of data.Legende) {
        this.legendListe.push(new Legende(element.num, element.nom, element.desc))
      }
      this.competenceBlocListe = data.skill
      console.log(this.legendListe)
      console.log(this.legendListe[1].getNom())
    });
  }
}
