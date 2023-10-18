const EventEmitter = require('events');


const emisorProductos = new EventEmitter();

emisorProductos.on('compra', (total, numProductos) => {
    console.log(`Total de la compra $${total}`);
    console.log(`Número de productos ${numProductos}.`);
});


emisorProductos.on('venta', (total, numProductos) => {
    console.log(`Total de la venta $${total}`);
    console.log(`Número de productos ${numProductos}.`);
});

emisorProductos.emit('compra',500, 10);


emisorProductos.emit('venta', 100, 10);