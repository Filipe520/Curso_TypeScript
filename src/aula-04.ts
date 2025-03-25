interface ObjetoQualquer {
    funcao: (p1: number, p2?: number) => number;
}


const funcaoTeste2 = (param1: number, param2?: number): number => {
    if (!param2) {
        return param1;
    }
    
    return param1 + param2;
}


const objetoQualquer: ObjetoQualquer = {
    funcao: funcaoTeste2
}

console.log(objetoQualquer.funcao(1, 4));