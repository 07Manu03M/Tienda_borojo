// Consultar todos los productos con stock mayor a 20
print("--- Productos con stock mayor a 20 ---");
db.productos.find({ "stock": { "$gt": 20 } }).forEach(printjson);

// Encontrar los clientes que no han comprado aún ningún producto
print("\n--- Clientes sin compras ---");
db.clientes.find({ "compras": { "$size": 0 } }).forEach(printjson);