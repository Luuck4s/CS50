const o = {
    a: 'a',
    b: 'b', 
};

const o2 = o;

o.a = 'novo valor';

/**
 * Quando foi criado o 'const o2 = o' na verdade foi criado
 * um novo objeto mas com a mesma referência então quando o 
 * valor nesta referência mudar, qualquer lugar que esteja pegando
 * desta referência será alterado também.
 */
console.log(o2.a); // novo valor


/** Para se copiar um objeto com o mesmo valor mas com referências 
 *  diferentes pode ser feito como abaixo
*/

const o3 = {
    a: 'a',
    b: 'b'
};

const o4 = Object.assign({}, o);

/**
 * Destas forma em cima o objeto é copiado sem a mesma referência,
 * porem abaixo oque pode ocorrer
*/

const a = {
    a: 'a',
    b: 'b',
    obj: {
        chave: 'chave'
    }
}

const b = Object.assign({}, a);

b.obj.chave = 'novo valor';

/**
 * O que ocorreu foi que o Object.assign(...) cria um shallow copy
 * então se o objeto que foi copiado tiver outro objeto dentro dele a referência
 * em memoria será a mesma para ambos.
 */
console.log(a.obj.chave); // novo valor 

/**
 * Para resolver este problema o objeto precisa ser copiado com o deep copy 
 */

function deepCopy(obj){
    const chaves = Object.keys(obj);
    const novoObjeto = {};

    for(let i = 0; i < chaves.length; i++){
        const chave = chaves[i];

        if(typeof obj[chave] === 'object'){
            novoObjeto[chave] = deepCopy(obj[chave])
        }else{
            novoObjeto[chave] = obj[chave]
        }
    }

    return novoObjeto;
}

const c = {
    a: 'a',
    b: 'b',
    obj: {
        chave: 'chave'
    }
}

const d = deepCopy(c);

c.obj.chave = 'novo valor';

console.log(d.obj.chave); // chave