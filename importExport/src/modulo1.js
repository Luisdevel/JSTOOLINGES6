export const nome = 'Luis';
export const sobrenome = 'Henrique';
export const idade = 25;
    
export function soma(x, y) {
    return x + y;
}

export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}