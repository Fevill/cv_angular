import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Legende, Competence_Bloc } from '../class/skill';
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
                            legendListe.push(new Legende(element.num, element.nom, element.desc))
                        }
                        this.competenceBlocListe = res.skill
                        resolve(legendListe);
                    }
                );
        });

        return promise;
    }
}