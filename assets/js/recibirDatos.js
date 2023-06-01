

let email = [];
let respuesta;

export const recibirDatos = (para,titulo,mensaje,de,...argRest) => {            
    
    email.push({para,titulo,mensaje,de,argRest});

    for (let item of email) {    
        respuesta = `PARA: ${item.para} \nTITULO: ${item.titulo} \nMENSAJE: ${item.mensaje} \nFROM: ${item.de} \nCC: ${item.argRest}`;    
     }
    console.log(respuesta);
}