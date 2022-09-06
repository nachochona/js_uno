const dolar_oficial = 147;

alert("Buenos días éste es un cotizador, conteste correctamente cada pregunta y obtendrá un costo aproximado de su viaje.");

let nombrePersona = prompt ("Antes que nada nos gustagía saber su nombre.");
alert("Hola " + nombrePersona + " será un placer ayudarte.");

let destino = prompt("La primera pregunta es la siguiente: ¿A qué continente desea viajar?");



for(let i = 0; i < 2; i++){
    if( destino == "Europa"){
        destino = 100000;
        break;
    }
    else if( destino == "Asia"){
        destino = 200000;
        break;
    }
    else if( destino == "África"){
        destino = 120000;
        break;
    }
    else if( destino == "América"){
        destino = 60000;
        break;
    }
    else if( destino == "Oceanía"){
        destino = 180000;
        break;
    }
    else if( destino == "Antártida"){
        destino = prompt("Lo siento, no te podemos llevar a la Antártida");
        break;
    }
    else{
           destino = prompt("Decime un continente o no te los sabes")
        };
};

/* switch(destino){
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
} */

console.log(destino);
 
let fecha = prompt("¿En qué estación del año quiere viajar?");

for(let i = 0; i < 2; i++){
    if (fecha == "Verano"){
        destino = destino * 1.5
        alert("Perfecto, no olvide llevarse la malla")
        alert("Hasta ahora hemos cotizado su pasaje de avion en: " + destino +" pesos - " + (destino / dolar_oficial).toFixed(2) + " dólares")
        break;
    }
    else if (fecha == "Invierno"){
        destino = destino * 1.2
        alert("Muy bien, no olvide llevarse varias capas de ropa")
        alert("Hasta ahora hemos cotizado su pasaje de avion en: " + destino +" pesos - " + (destino / dolar_oficial).toFixed(2) + " dólares")
        break;
    }
    else if (fecha == "Primavera"){
        destino = destino * 0.9
        alert("Gran elección, el paisaje se verá hermoso")
        alert("Hasta ahora hemos cotizado su pasaje de avion en: " + destino +" pesos - " + (destino / dolar_oficial).toFixed(2) + " dólares")
        break;
    }
    else if (fecha == "Otoño"){
        destino = destino * 0.8
        alert("Muy bien, esperemos que toquen dias soleados")
        alert("Hasta ahora hemos cotizado su pasaje de avion en: " + destino +" pesos - " + (destino / dolar_oficial).toFixed(2) + " dólares")
        break;
    }
    else{
        destino = prompt ("Ah pero no te sabes las estaciones del año?")
    }
}
console.log(destino);




let tiempo = parseInt (prompt("Ahora quiero saber ¿Cuántos dias quieres ir?"));

console.log(tiempo);

let hotel = parseInt(prompt("¿Cuántas estrellas desea que tenga su hotel?"));

if (hotel < 3){
    hotel = 3000;
    alert("Buscaremos el mas baratito para vos");
}
else if (hotel === 3){
    hotel = 5000;
    alert("Buena elección bro");
    
}
else if (hotel > 3 && hotel <= 5){
    hotel = 10000;
    alert("AJA, con que sos una persona de poderes adquisitivos altos ehh, vamos a intentar que gastes lo mas posible uwu");
}
console.log(hotel);

alert("Hemos cotizado su hospedaje en: " + hotel * tiempo +" pesos - " + ((hotel * tiempo)/ dolar_oficial).toFixed(2) + " dólares");

let valorFinal = destino + (hotel * tiempo);
console.log(valorFinal);


alert("Muy bien " + nombrePersona + ", analizados los datos ingresados podemos darle el aproximado de su viaje deseado");
alert("El total es de " + valorFinal + " pesos o " + (valorFinal / dolar_oficial).toFixed(2) + " dólares" );






 



