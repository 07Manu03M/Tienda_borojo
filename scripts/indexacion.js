// indexacion.js
// Crear un índice en el campo 'nombre' de 'productos'
db.productos.createIndex({ "nombre": 1 });
print("Índice en 'productos.nombre' creado.");

// Crear un índice compuesto sobre 'categoria' y 'precio' de 'productos'
db.productos.createIndex({ "categoria": 1, "precio": 1 });
print("Índice compuesto en 'productos.categoria' y 'productos.precio' creado.");

// Crear un índice en el campo 'email' de 'clientes'
db.clientes.createIndex({ "email": 1 }, { "unique": true }); // Unique para validación de duplicados
print("Índice único en 'clientes.email' creado.");

// Usar explain() en una consulta para mostrar si el índice de 'nombre' está siendo utilizado
print("\n--- Resultado de explain() para búsqueda por nombre ---");
db.productos.find({ "nombre": "Borojó fresco" }).explain("executionStats");