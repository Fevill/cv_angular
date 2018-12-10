/** La légende du module compétence */
export class Legende {

    //Déclarion des Variables
    private num: number;
    private nom: string;
    private desc: string;

    //Accesseurs
    public getNum(): number {
        return this.num
    }
    public getNom(): string {
        return this.nom
    }
    public getDesc(): string {
        return this.desc
    }

    //les constructeurs
    public constructor();
    public constructor(num?: number, nom?: string, desc?: string) {
        num === null ? this.num = 0 : this.num = num
        nom === null ? this.nom = "" : this.nom = nom
        desc === null ? this.desc = "" : this.desc = desc
    }
    
    //Mise à jour des propriétées
    public setProperties(num?: number, nom?: string, desc?: string) {
        num === null ? this.num = 0 : this.num = num
        nom === null ? this.nom = "" : this.nom = nom
        desc === null ? this.desc = "" : this.desc = desc
    }
}

/** Une ligne de compétances */
class Competence_Ligne {

    //Déclarion des Variables
    private nom: string;
    private niveau: number;

    //Accesseurs
    public getNiveau(): number {
        return this.niveau
    }
    public getNom(): string {
        return this.nom
    }

    //les constructeurs
    constructor();
    constructor(nom?: string, niveau?: number) {
        nom === null ? this.nom = "" : this.nom = nom
        niveau === null ? this.niveau = 0 : this.niveau = niveau
    }

    //Mise à jour des propriétées
    public setProperties(nom?: string, niveau?: number): void {
        nom === null ? this.nom = "" : this.nom = nom
        niveau === null ? this.niveau = 0 : this.niveau = niveau
    }
}


/** Bloc de compétences */
export class Competence_Bloc {

    //Déclarion des Variables
    private titre: string;
    private comp_L: Competence_Ligne[];

    //Accesseurs
    public getComp_L(): Competence_Ligne[] {
        return this.comp_L
    }
    public getTitre(): string {
        return this.titre
    }

    //Mutateurs
    public setTitre(titre: string): void {
        this.titre = titre
    }
    public addComp_L(item: Competence_Ligne): void {
        this.comp_L.push(item)
    }

    //les constructeurs
    constructor();
    constructor(titre?: string) {
        titre === null ? this.titre = "" : this.titre = titre
        this.comp_L = []
    }

}

