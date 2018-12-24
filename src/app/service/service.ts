import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable()
export class CvService {

    constructor(private http: HttpClient) { }

    /** Récuperation des compétences */
    GetData(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get("./assets/données/cv.json")
                .toPromise()
                .then((res: any) => {
                    resolve(res);
                }, msg => { // Error
                    reject(msg);
                })
        })

    }

}