db.system.js.replaceOne(
  { _id: "calcularDescuento" }, // Filtro para encontrar la función si ya existe
  {
    _id: "calcularDescuento",
    value: function(precio, porcentaje) {
      return precio * (1 - porcentaje / 100);
    }
  },
  { upsert: true } // Si no existe, insértala; si existe, reemplázala.
);
print("Función 'calcularDescuento' definida.");

// Definir función clienteActivo(idCliente)
db.system.js.replaceOne(
  { _id: "clienteActivo" },
  {
    _id: "clienteActivo",
    value: function(idCliente) {
      var cliente = db.clientes.findOne({ "_id": idCliente });
      if (cliente && cliente.compras && cliente.compras.length > 3) { // Añadido cliente.compras para evitar error si no existe
        return true;
      }
      return false;
    }
  },
  { upsert: true }
);
print("Función 'clienteActivo' definida.");

// Definir función verificarStock(productoId, cantidadDeseada)
db.system.js.replaceOne(
  { _id: "verificarStock" },
  {
    _id: "verificarStock",
    value: function(productoId, cantidadDeseada) {
      var producto = db.productos.findOne({ "_id": productoId });
      if (producto && producto.stock >= cantidadDeseada) {
        return true;
      }
      return false;
    }
  },
  { upsert: true }
);
print("Función 'verificarStock' definida.");

// Para usar las funciones (ejemplo):
// Carga las funciones en la sesión actual
// db.loadServerScripts();
// print(calcularDescuento(10000, 10));
// print(clienteActivo(1));
// print(verificarStock(1, 20));