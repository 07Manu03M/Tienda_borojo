// consultas_regex.js
// Buscar productos cuyo nombre empiece por "Boro"
print("--- Productos cuyo nombre empieza por 'Boro' ---");
db.productos.find({ "nombre": /^Boro/ }).forEach(printjson);

// Encontrar productos cuyo nombre contenga la palabra "con"
print("\n--- Productos cuyo nombre contiene 'con' ---");
db.productos.find({ "nombre": /con/i }).forEach(printjson); // 'i' para insensible a mayúsculas/minúsculas

// Encontrar clientes cuyo nombre tenga la letra "z" (insensible a mayúsculas/minúsculas)
print("\n--- Clientes cuyo nombre contiene 'z' ---");
db.clientes.find({ "nombre": /z/i }).forEach(printjson);