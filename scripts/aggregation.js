// aggregation.js
// Mostrar un listado de los productos más vendidos (suma total de unidades vendidas por producto)
print("--- Productos más vendidos ---");
db.ventas.aggregate([
  { "$unwind": "$productos" },
  {
    "$group": {
      "_id": "$productos.productoId",
      "totalVendido": { "$sum": "$productos.cantidad" }
    }
  },
  {
    "$lookup": {
      "from": "productos",
      "localField": "_id",
      "foreignField": "_id",
      "as": "productoInfo"
    }
  },
  { "$unwind": "$productoInfo" },
  {
    "$project": {
      "_id": 0,
      "nombreProducto": "$productoInfo.nombre",
      "totalVendido": 1
    }
  },
  { "$sort": { "totalVendido": -1 } }
]).forEach(printjson);

// Agrupar clientes por cantidad de compras realizadas
print("\n--- Clientes agrupados por cantidad de compras ---");
db.clientes.aggregate([
  {
    "$project": {
      "_id": 0,
      "nombreCliente": "$nombre",
      "cantidadCompras": { "$size": "$compras" }
    }
  },
  {
    "$group": {
      "_id": "$cantidadCompras",
      "clientes": { "$push": "$nombreCliente" }
    }
  },
  { "$sort": { "_id": 1 } }
]).forEach(printjson);

// Mostrar el total de ventas por mes
print("\n--- Total de ventas por mes ---");
db.ventas.aggregate([
  {
    "$group": {
      "_id": { "$month": "$fecha" },
      "totalVentas": { "$sum": "$total" }
    }
  },
  {
    "$project": {
      "_id": 0,
      "mes": "$_id",
      "totalVentas": 1
    }
  },
  { "$sort": { "mes": 1 } }
]).forEach(printjson);

// Calcular el promedio de precios por categoría de producto
print("\n--- Promedio de precios por categoría ---");
db.productos.aggregate([
  {
    "$group": {
      "_id": "$categoria",
      "promedioPrecio": { "$avg": "$precio" }
    }
  },
  { "$sort": { "promedioPrecio": -1 } }
]).forEach(printjson);

// Mostrar los 3 productos con mayor stock
print("\n--- 3 Productos con mayor stock ---");
db.productos.aggregate([
  { "$sort": { "stock": -1 } },
  { "$limit": 3 },
  { "$project": { "_id": 0, "nombre": 1, "stock": 1 } }
]).forEach(printjson);