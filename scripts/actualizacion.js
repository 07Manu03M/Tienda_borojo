// Aumentar en 10 unidades el stock del producto "Borojó deshidratado"
db.productos.updateOne(
  { "nombre": "Borojó deshidratado" },
  { "$inc": { "stock": 10 } }
);
print("Stock de 'Borojó deshidratado' actualizado.");

// Añadir el tag "bajo azúcar" a todos los productos de la categoría "Bebida"
db.productos.updateMany(
  { "categoria": "Bebida" },
  { "$addToSet": { "tags": "bajo azúcar" } }
);
print("Tag 'bajo azúcar' añadido a productos de categoría 'Bebida'.");