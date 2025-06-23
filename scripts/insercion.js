// insercion.js
// Insertar un nuevo producto
db.productos.insertOne({
  "_id": 11, // Asignar un ID único para evitar conflictos si ya hay un _id 11
  "nombre": "Chocolatina de borojó",
  "categoria": "Snack",
  "precio": 4000,
  "stock": 35,
  "tags": ["dulce", "energía"]
});
print("Producto 'Chocolatina de borojó' insertado.");

// Insertar un nuevo cliente
db.clientes.insertOne({
  "_id": 11, // Asignar un ID único para evitar conflictos
  "nombre": "Mario Mendoza",
  "email": "mario@email.com",
  "compras": [],
  "preferencias": ["energético", "natural"]
});
print("Cliente 'Mario Mendoza' insertado.");