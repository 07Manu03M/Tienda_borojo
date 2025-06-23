// consultas_arrays.js
// Buscar clientes que tengan "natural" en sus preferencias
print("--- Clientes con 'natural' en sus preferencias ---");
db.clientes.find({ "preferencias": "natural" }).forEach(printjson);

// Encontrar productos que tengan al menos los tags "natural" y "orgánico"
print("\n--- Productos con tags 'natural' y 'orgánico' ---");
db.productos.find({ "tags": { "$all": ["natural", "orgánico"] } }).forEach(printjson);

// Listar productos que tienen más de un tag
print("\n--- Productos con más de un tag ---");
db.productos.find({ "tags": { "$size": { "$gt": 1 } } }).forEach(printjson); // No se puede usar $gt con $size, se debe usar $where o agregar un campo `numTags`
db.productos.find({ "tags.1": { "$exists": true } }).forEach(printjson);