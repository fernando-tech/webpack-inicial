import '../css/component.css';


export const saludo = (nombre) => {

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${nombre}, buen día`;
    
    document.body.append(h1);

    console.log('funcion de saludo');
}