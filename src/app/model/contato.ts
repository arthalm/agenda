import { Relação } from "./tipocontato";

export class Contato {
    private _nome: string;
    private _telefone: string;
    private _email: string;
    private _aniversario: Date;
    private _relacao: Relação;
    private _favorito: boolean;
    
    constructor(nm, tl, em, an, rl, fv) {
        this.nome = nm;
        this.telefone = tl;
        this.email = em;
        this.aniversario = new Date(an);
        this.relacao = rl;
        this.favorito = fv
    };

    public get nome(): string {
        return this._nome;
    };

    public set nome(nm: string) {
        this._nome = nm;
    };
  
    public get telefone(): string {
        return this._telefone;
    };

    public set telefone(tl: string) {
        this._telefone = tl;
    };

    public get email(): string {
        return this._email;
    };

    public set email(em: string) {
        this._email = em;
    };

    public set aniversario(data: Date) {
        this._aniversario = data;
    };

    public get aniversario(): Date {
        return this._aniversario;
    };

    public get relacao(): Relação {
        return this._relacao;
    };

    public set relacao(rl: Relação) {
        this._relacao = rl;
    };

    public get favorito(): boolean {
        return this._favorito;
    };

    public set favorito(fv: boolean) {
        this._favorito = fv;
    };
};