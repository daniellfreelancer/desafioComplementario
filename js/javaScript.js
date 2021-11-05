// Desafio complementario

function valorIva (vlista){ 

const monto_iva = 0.19 ;
const delantales = 30000;
const remera = 15000;
const utencilios = 20000;
const recetarios=12000;
const moneda ='CLP'

 if (vlista == 1) {
   const subtotal = delantales * monto_iva + delantales;
  alert(`El precio de los Delantales, con IVA incluido es de: ${subtotal} ${moneda}` );
} 
else if (vlista == 2) {
  const subtotal = remera * monto_iva + remera;
 alert(`El precio de las Remeras (Camisas), con IVA incluido es de: ${subtotal} ${moneda}`);
} 

else if (vlista == 3) {
  const subtotal = utencilios * monto_iva + utencilios;
 alert(`El precio de los Utencilios de cocina, con IVA incluido es de: ${subtotal} ${moneda}`);
} 

else if (vlista == 4) {
  const subtotal = recetarios * monto_iva + recetarios
 alert(`El precio de los Recetarios con IVA incluido es de: ${subtotal} ${moneda}`);
}
else {
  alert("Actualmente solo tenemos los 4 articulos mencionados");
}
  return vlista;
}

const productosDisponibles=Number(prompt(`¿Qué producto en promocion deseas:
1 - Delantales
2 - Camisas/remeras
3 - Utencilios
4 - Recetario`));


valorIva(productosDisponibles);

