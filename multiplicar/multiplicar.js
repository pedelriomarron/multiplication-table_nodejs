const fs = require('fs');
const colors = require("colors")


crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base introducida, ${base},no es un es un numero`)
            return false;
        }


        let data = ``;

        for (let i = 1; i < limite + 1; i++) {
            data += `${base} x ${i} = ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}-al-${limite}.txt`)
        });
    })
}


listarTabla = (base, limite = 10) => {

    console.log("======================".green)
    console.log(`======Tabla de ${base}======`.green)
    console.log("======================".green)

    for (let i = 1; i < limite + 1; i++) {
        console.log(`${base} x ${i} = ${base * i}`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}

