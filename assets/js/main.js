import { recibirDatos } from "./recibirDatos.js";

let divPara = document.getElementById("divPara");
divPara.style.marginLeft = "1rem";

let divTitulo = document.getElementById("divTitulo");
divTitulo.style.marginLeft = "0";
divTitulo.style.paddingLeft = "0";


let para = document.getElementById("txtPara");
para.setAttribute('placeholder','email destinatario');
para.style.color = '#575C63';
para.style.fontSize = '1.3rem';
para.style.backgroundColor = "#B0B4B9";
para.style.border = "none";

let titulo = document.getElementById("txtTitulo");
titulo.setAttribute('placeholder',' TITULO');
titulo.style.color = '#575C63';
titulo.style.fontSize = '2rem';
titulo.style.backgroundColor = "#B0B4B9";
titulo.style.border = "none";
titulo.style.paddingLeft = "0";

let mensaje = document.getElementById("txtMensaje");
mensaje.setAttribute('placeholder','Mensaje');
mensaje.style.color = 'black';
mensaje.style.fontSize = '1.3rem';
mensaje.style.fontWeight = "bold";
mensaje.style.backgroundColor = "#B0B4B9";
mensaje.style.border = "none";
mensaje.style.marginLeft = ".5rem";
mensaje.style.paddingLeft = "0";

let idH5De = document.getElementById("idH5De");
idH5De.style.marginLeft = ".5rem";

let de = document.getElementById("txtDe");
de.setAttribute('placeholder','email remitente');
de.style.color = 'black';
de.style.fontSize = '1.3rem';
de.style.backgroundColor = "#B0B4B9";
de.style.border = "none";
de.style.marginLeft = ".5rem";
de.style.paddingLeft = "0";

let idH5CC = document.getElementById("idH5CC");
idH5CC.style.marginLeft = ".5rem";

let txtEmail1 = document.getElementById("txtEmail1");
txtEmail1.style.marginLeft = ".5rem%";
txtEmail1.style.backgroundColor = "#B0B4B9";
txtEmail1.style.border = "none";
txtEmail1.setAttribute('placeholder','Email 1');
txtEmail1.style.color = 'black';
txtEmail1.style.fontSize = '1.3rem';
txtEmail1.style.backgroundColor = "#B0B4B9";
txtEmail1.style.border = "none";
txtEmail1.style.marginLeft = ".5rem";
txtEmail1.style.paddingLeft = "0";

let txtEmail2 = document.getElementById("txtEmail2");
txtEmail2.style.marginLeft = "5%";
txtEmail2.style.backgroundColor = "#B0B4B9";
txtEmail2.style.border = "none";
txtEmail2.setAttribute('placeholder','Email 2');
txtEmail2.style.color = 'black';
txtEmail2.style.fontSize = '1.3rem';
txtEmail2.style.backgroundColor = "#B0B4B9";
txtEmail2.style.border = "none";
txtEmail2.style.marginLeft = ".5rem";
txtEmail2.style.paddingLeft = "0";

let txtEmail3 = document.getElementById("txtEmail3");
txtEmail3.style.marginLeft = ".5rem%";
txtEmail3.style.marginTop = "1rem";
txtEmail3.style.backgroundColor = "#B0B4B9";
txtEmail3.style.border = "none";
txtEmail3.setAttribute('placeholder','Email 3');
txtEmail3.style.color = 'black';
txtEmail3.style.fontSize = '1.3rem';
txtEmail3.style.backgroundColor = "#B0B4B9";
txtEmail3.style.border = "none";
txtEmail3.style.marginLeft = ".5rem";
txtEmail3.style.paddingLeft = "0";

let txtEmail4 = document.getElementById("txtEmail4");
txtEmail4.style.marginLeft = "5%";
txtEmail4.style.marginTop = "1rem";
txtEmail4.style.backgroundColor = "#B0B4B9";
txtEmail4.style.border = "none";
txtEmail4.setAttribute('placeholder','Email 4');
txtEmail4.style.color = 'black';
txtEmail4.style.fontSize = '1.3rem';
txtEmail4.style.backgroundColor = "#B0B4B9";
txtEmail4.style.border = "none";
txtEmail4.style.marginLeft = ".5rem";
txtEmail4.style.paddingLeft = "0";

let txtEmail5 = document.getElementById("txtEmail5");
txtEmail5.style.marginLeft = ".5rem%";
txtEmail5.style.marginTop = "1rem";
txtEmail5.style.backgroundColor = "#B0B4B9";
txtEmail5.style.border = "none";
txtEmail5.setAttribute('placeholder','Email 5');
txtEmail5.style.color = 'black';
txtEmail5.style.fontSize = '1.3rem';
txtEmail5.style.backgroundColor = "#B0B4B9";
txtEmail5.style.border = "none";
txtEmail5.style.marginLeft = ".5rem";
txtEmail5.style.paddingLeft = "0";

let txtEmail6 = document.getElementById("txtEmail6");
txtEmail6.style.marginLeft = "5%";
txtEmail6.style.marginTop = "1rem";
txtEmail6.style.backgroundColor = "#B0B4B9";
txtEmail6.style.border = "none";
txtEmail6.setAttribute('placeholder','Email 6');
txtEmail6.style.color = 'black';
txtEmail6.style.fontSize = '1.3rem';
txtEmail6.style.backgroundColor = "#B0B4B9";
txtEmail6.style.border = "none";
txtEmail6.style.marginLeft = ".5rem";
txtEmail6.style.paddingLeft = "0";



let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    para = para.value;
    para = para.trim();

    titulo = titulo.value;
    titulo = titulo.trim();

    mensaje = mensaje.value;
    mensaje = mensaje.trim();

    de = de.value;
    de = de.trim();    
    
    txtEmail1 = txtEmail1.value;
    txtEmail1 = txtEmail1.trim();

    txtEmail2 = txtEmail2.value;
    txtEmail2 = txtEmail2.trim();

    txtEmail3 = txtEmail3.value;
    txtEmail3 = txtEmail3.trim();

    txtEmail4 = txtEmail4.value;
    txtEmail4 = txtEmail4.trim();

    txtEmail5 = txtEmail5.value;
    txtEmail5 = txtEmail5.trim();

    txtEmail6 = txtEmail6.value;
    txtEmail6 = txtEmail6.trim();
    
    recibirDatos(para,titulo,mensaje,de,txtEmail1,txtEmail2,txtEmail3,txtEmail4,txtEmail5,txtEmail6);
    //console.log(datos);
})