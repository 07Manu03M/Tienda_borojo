// eliminacion.js
// Eliminar el cliente con el correo "juan@email.com"
db.clientes.deleteOne({ "email": "juan@email.com" });
print("Cliente 'juan@email.com' eliminado.");

// Eliminar todos los productos con stock menor a 5
db.productos.deleteMany({ "stock": { "$lt": 5 } });
print("Productos con stock menor a 5 eliminados.");