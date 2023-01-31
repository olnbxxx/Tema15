const nombre = "oscar";
const apellido = "nicolas";

const persona = {
    name: nombre,
    surname: apellido
}

sessionStorage.setItem("nombre", nombre);
console.log(sessionStorage.getItem("nombre"));

localStorage.setItem("apellido", apellido);
console.log(localStorage.getItem("apellido"));

localStorage.setItem("person", JSON.stringify { nome: "luis", anni: 46 })
console.log(JSON.parse(localStorage.getItem("person")))

document.cookie = "personcookie;expires="
expires="  + new Date
console.log(document.cookie)