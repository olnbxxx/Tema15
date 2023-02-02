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

localStorage.setItem("person", JSON.stringify(persona))
console.log(JSON.parse(localStorage.getItem("person")))

const now = new Date();
document.cookie = `oscar=${JSON.stringify(persona)};expires=${new Date(now.getTime() + 2 * 60000)}`