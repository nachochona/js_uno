const dolar_oficial = 147.05;

alert("Buenos días éste es un cotizador, conteste correctamente cada pregunta y obtendrá un costo aproximado de su viaje.")

let nombrePersona = prompt ("Antes que nada nos gustagía saber su nombre")
alert("Oli " + nombrePersona)

let destino = prompt("La primera pregunta es la siguiente: ¿A qué continente desea viajar?")

 switch(destino){
     case "europa":
         destino = 1000;
        break;
     case "asia":
         destino = 1500;
         break;    
     case "áfrica":
         destino = 1200;
         break;
     case "américa":
         destino = 600;
         break;
     case "oceanía":  
         destino = 1800; 
         break;
     default: alert("Volvé a empezar porfis")     
     break;    
}

console.log(destino)
 
let fecha = prompt("¿En qué estación del año quiere viajar?")

if (fecha == "verano"){
    destino = destino * 1.5
    alert("Perfecto, no olvide llevarse la malla")
}
else if (fecha == "invierno"){
    destino = destino * 1.2
    alert("Muy bien, no olvide llevarse varias capas de ropa")
}
else if (fecha == "primavera"){
    destino = destino * 0.8
    alert("Gran elección, el paisaje se verá hermoso")
}
else if (fecha == "otoño"){
    destino = destino * 0.7
    alert("Muy bien, esperemos que toquen dias soleados")
}
else{
    alert("Ah pero no te sabes las estaciones del año?")
}
console.log(destino)


let tiempo = parseInt (prompt("Ahora quiero saber ¿Cuántos dias quieres ir?"))

console.log(tiempo)

let hotel = parseInt(prompt("¿Cuántas estrellas desea que tenga su hotel?"))

if (hotel < 3){
    hotel = 50;
    alert("Buscaremos el mas baratito para vos");
}
else if (hotel === 3){
    hotel = 100;
    alert("Buena elección bro");
    
}
else if (hotel > 3 && hotel <= 5){
    hotel = 300;
    alert("AJA, con que eres una persona de poderes adquisitivos altos ehh, vamos a intentar que gastes lo mas posible uwu");
}
console.log(hotel)

let valorFinal = destino + (hotel * tiempo)
console.log(valorFinal)


alert("Muy bien, analizados los datos ingresados podemos darle el aproximado de su viaje deseado, el cual es de $" + valorFinal)




 



