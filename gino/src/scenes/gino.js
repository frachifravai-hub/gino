function preload(s) {}
function create(s) {}
function update(s) {}
function destroy(s) {}
PP.scenes.add("gino", preload, create, update, destroy);

const TERRA = "0xB96E54";
const A_TERRENO = 96;
const Y_TERRENO = 624;
let terreno;
function create(s) {
terreno = PP.shapes.rectangle_add(s,
LARGHEZZA / 2, Y_TERRENO + A_TERRENO / 2,
LARGHEZZA, A_TERRENO, TERRA, 1);
}

function create(s) {
crea_terreno(s);
}
function crea_terreno(s) {
terreno = PP.shapes.rectangle_add(s,
LARGHEZZA / 2, Y_TERRENO + A_TERRENO / 2,
LARGHEZZA, A_TERRENO, TERRA, 1);
}


const VERDE = "0x72A11D";
const ROSSO = "0xE44A4A";

const X_GINO = 200;
const L_GINO = 81;
const A_GINO = 84;
const L_FUNGO = 90;
const A_FUNGO = 63;

let gino;
let fungo;