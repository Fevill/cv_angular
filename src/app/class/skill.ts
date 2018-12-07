class Legende {
    private num: number;
    private nom: string;
    private desc: string;

    public getNum(): number {
        return this.num
    }
    public getNom(): string {
        return this.nom
    }
    public getDesc(): string {
        return this.desc
    }

    constructor();
    constructor(num?: number, nom?: string, desc?: string) {
        num === null ? this.num = 0 : this.num = num
        nom === null ? this.nom = "" : this.nom = nom
        desc === null ? this.desc = "" : this.desc = desc
    }
    public setProperties(num?: number, nom?: string, desc?: string) {
        num === null ? this.num = 0 : this.num = num
        nom === null ? this.nom = "" : this.nom = nom
        desc === null ? this.desc = "" : this.desc = desc
    }
}

class Competence_Ligne {
    private nom: string;
    private niveau: number;

    public getNiveau(): number {
        return this.niveau
    }
    public getNom(): string {
        return this.nom
    }

    constructor();
    constructor(nom?: string, niveau?: number) {
        nom === null ? this.nom = "" : this.nom = nom
        niveau === null ? this.niveau = 0 : this.niveau = niveau
    }
    public setProperties(nom?: string, niveau?: number): void {
        nom === null ? this.nom = "" : this.nom = nom
        niveau === null ? this.niveau = 0 : this.niveau = niveau
    }
}

class Competence_Bloc {
    private titre: string;
    private comp_L: Competence_Ligne[];

    public getComp_L(): Competence_Ligne[] {
        return this.comp_L
    }
    public getTitre(): string {
        return this.titre
    }

    public setTitre(titre: string): void {
        this.titre = titre
    }

    public addComp_L(item: Competence_Ligne): void {
        this.comp_L.push(item)
    }

    constructor();
    constructor(titre?: string) {
        titre === null ? this.titre = "" : this.titre = titre
        this.comp_L = []
    }

}

