let consumoDeCarne;
let usoDiario;
let pregunta;
let pregunta2;
let opciones;

function mensajeParaTransporte(usoDiario, consumoDeCarne) {
    if (pregunta === "diario" && pregunta2 === "si") {
        alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡EXCELENTE! 🌍🚍Cada vez que eliges el transporte público en lugar de conducir tu propio vehículo, contribuyes directamente a reducir las emisiones de CO2 que están dañando nuestro medio ambiente. 🌱Evita el consumo de carnes rojas para mitigar asi msimo el impacto ambiental`);
        opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
    }
    if (pregunta === "diario" && pregunta2 != "si") {
        alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡EXCELENTE! 🌍🚍Cada vez que eliges el transporte público en lugar de conducir tu propio vehículo, contribuyes directamente a reducir las emisiones de CO2 que están dañando nuestro medio ambiente. 🌱 Es perfecto que no consumas carnes rojas, asi contribuyes al medio ambiente`);
        opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
    }
    if (pregunta === "semanal" && pregunta2 === "si") {
        alert(`tu huella de carbono es de ${usoDiario + consumoDeCarne}  Esta bien usar el transporte publico una vez por semana, pero podriamos hacerlo mas seguido, 🌱 Evita el consumo de carnes rojas para mitigar asi msimo el impacto ambiental `);
        opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
    }
    if (pregunta === "semanal" && pregunta2 != "si") {
        alert(`tu huella de carbono es de ${usoDiario + consumoDeCarne}  Esta bien usar el transporte publico una vez por semana, pero podriamos hacerlo mas seguido,🌱 Es perfecto que no consumas carnes rojas, asi contribuyes al medio ambiente `);
        opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
    }
    if (pregunta === "nunca" && pregunta2 === "si") {
        alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍Cada vez que eliges el transporte público en lugar de conducir tu propio vehículo, contribuyes directamente a reducir las emisiones de CO2 que están dañando nuestro medio ambiente, 🌱Evita el consumo de carnes rojas para mitigar asi msimo el impacto ambiental`);
        opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
    }
    if (pregunta === "nunca" && pregunta2 != "si") {
        alert(`Su huella de Co2 es de:  ${usoDiario + consumoDeCarne} kilos pos año \n ¡Haz tu parte por el planeta! 🌍🚍Cada vez que eliges el transporte público en lugar de conducir tu propio vehículo, contribuyes directamente a reducir las emisiones de CO2 que están dañando nuestro medio ambiente, 🌱Es perfecto que no consumas carnes rojas, asi contribuyes al medio ambiente  `);
        opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
    }
}

function calcularHuellaTransporte(pregunta) {
    switch (pregunta) {
        case "diario":
            usoDiario = 1250 * 0.09;
            alert(`Se realiza el cálculo teniendo en cuenta un desplazamiento de 5 km diarios durante los 250 días hábiles en Colombia, lo que da como resultado: ${usoDiario} kg CO2 al año`);
            break;
        case "semanal":
            usoDiario = 280 * 0.09;
            alert(`Se realiza el cálculo teniendo en cuenta un desplazamiento de 5 km usando una vez a la semana, dando como resultado: ${usoDiario} kg CO2 al año`);
            break;
        case "nunca":
            usoDiario = 0;
            alert("No estás generando contaminación de CO2 en tu desplazamiento diario");
            break;
    }
}
function calcularHuellaCarne(pregunta2) {
    if (pregunta2 === "si") {
        consumoDeCarne = 21 * 27;
        alert(`Se realiza calculo de consumo de carne roja  3 veces por semana consumiendo cada dia 125gr aproximadamente dando como resultado ${consumoDeCarne} , "kg Co2 al año`);

    } else {
        alert(`tu impacto ambiental por consumo de carne es bajo ${consumoDeCarne = 0}`);
    }


}
alert("Hola, somos LagunaViva🏞️ queremos impactar positivamente al medioambiente, concientizandote de la huella de carbono generada diariamente en habitos cotidianos y como se pueden reducir");

alert("Acontinuacion encontrarar un menu de opciones, elige una para que continues la interaccion en el aplicativo");

opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
while (true) {
    switch (opciones) {
        case 1:
            alert("La quema de combustibles fósiles (como petróleo, gas y carbón) para energía, transporte e industria libera dióxido de carbono (CO₂), un gas de efecto invernadero que atrapa el calor en la atmósfera. \n La tala de bosques para obtener madera o crear espacios para cultivos y ganadería reduce la capacidad de la Tierra para absorber CO₂, lo que aumenta los gases de efecto invernadero. \n La sobreexplotación de los recursos naturales también contribuye a la contaminación y al agotamiento de ecosistemas.");
            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;
        case 2:
            pregunta = prompt("¿Con qué frecuencia usas transporte público? (Responde: diario, semanal, nunca)");
            pregunta2 = prompt("¿Consumes carne roja más de 3 veces por semana? (sí/no)");
            calcularHuellaTransporte(pregunta);
            calcularHuellaCarne(pregunta2);
            opciones = parseFloat(prompt("Elige una opcion \n 1 - Introduccion al cambio climatico \n 2- Huella de carbono personal  \n 3- Consejos practicos para reducir tu impacto"));
            break;
        case 3:
            mensajeParaTransporte(usoDiario, consumoDeCarne);
            break;
        default:
            break;
    }
}





