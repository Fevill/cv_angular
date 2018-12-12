import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Legende, Competence_Bloc, Competence_Ligne } from '../class/skill';
import * as Const_text_fr from '../menu/utils/const_text_fr';
import * as Const_variables from '../menu/utils/const_variables';


@Injectable()
export class Service {
    private legendListe: Legende[] = [];
    private competenceBlocListe: Competence_Bloc[] = [];
    public const_text_fr = Const_text_fr;
    public const_variables = Const_variables;

    constructor(private http: HttpClient) { 
        
    }

    GetLegend() {

        let promise = new Promise((resolve, reject) => {
            this.http.get("./assets/data/skill_text.json")
                .toPromise()
                .then(
                    (res: any) => { 
                        let legendListe: Legende[] = [];
                        for (let element of res.Legende) {
                            let item =  new Legende
                            item.setProperties(element.num, element.nom, element.desc)
                            legendListe.push(item)
                        }
                        resolve(legendListe);
                    }
                );
        });

        return promise;
    }

    GetSkill() {

        let promise = new Promise((resolve, reject) => {
            this.http.get("./assets/data/skill_text.json")
                .toPromise()
                .then(
                    (res: any) => { 
                        let competence_Bloc: Competence_Bloc[] = [];
                        for (let element of res.skill) {
                            let item =  new Competence_Bloc
                            item.setTitre(element.titre)
                          
                            for (let element2 of element.comp_L) {
                                let item2 =  new Competence_Ligne
                                item2.setProperties(element2.nom,element2.niveau)
                                item.addComp_L(item2)
                            }
                            competence_Bloc.push(item)
                        }
                        console.log( competence_Bloc)
                        resolve(competence_Bloc);
                    }
                );
        });

        return promise;
    }
}