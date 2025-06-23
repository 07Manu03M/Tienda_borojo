// transacciones.js (Versión corregida - Usando db.getCollection() en lugar de db.collection())

// Simular una venta (descontar stock e insertar venta)
// Asumiendo que ya tienes un replica set iniciado (rs.initiate())
const session = db.getMongo().startSession();
// Las colecciones se obtienen directamente del objeto 'db'
// y luego la 'session' se pasa como una opción a los métodos de operación (updateOne, insertOne, etc.)
const productosCollectionVenta = db.getCollection("productos"); // CAMBIADO AQUÍ
const ventasCollectionVenta = db.getCollection("ventas");    // CAMBIADO AQUÍ

try {
  session.startTransaction();

  const productoIdVenta = 1; // ID del producto a vender (Borojó fresco)
  const cantidadVenta = 1;
  const clienteIdVenta = 1;
  // Primero, obtenemos el precio actual del producto para calcular el total
  const productoVenta = productosCollectionVenta.findOne({ "_id": productoIdVenta }, { session });
  if (!productoVenta) {
    throw new Error("Producto no encontrado.");
  }
  const nuevoTotalVenta = productoVenta.precio * cantidadVenta;


  // a. Descontar del stock del producto
  const updateResult = productosCollectionVenta.updateOne(
    { "_id": productoIdVenta, "stock": { "$gte": cantidadVenta } },
    { "$inc": { "stock": -cantidadVenta } },
    { session } // Aquí se pasa la sesión
  );

  if (updateResult.modifiedCount === 0) {
    // Si no se modificó nada, o no había stock o el producto no existía con ese ID y stock suficiente
    throw new Error("No hay suficiente stock o el producto no existe o no se pudo actualizar.");
  }

  // b. Insertar la venta en la colección ventas
  const nuevaVenta = {
    // Generar un _id único de forma más robusta, idealmente con ObjectId() si no es _id autoincremental en los datos
    // Para este ejemplo, seguiremos el patrón de tus datos con un simple contador.
    "_id": db.ventas.countDocuments() + 1, // Nota: db.ventas también usa el objeto `db` implícitamente aquí
    "clienteId": clienteIdVenta,
    "productos": [{ "productoId": productoIdVenta, "cantidad": cantidadVenta }],
    "fecha": new ISODate(),
    "total": nuevoTotalVenta
  };
  ventasCollectionVenta.insertOne(nuevaVenta, { session }); // Aquí se pasa la sesión

  session.commitTransaction();
  print("Transacción de venta simulada exitosamente.");
} catch (e) {
  session.abortTransaction();
  print("Transacción de venta abortada: " + e.message);
} finally {
  session.endSession();
}

// --- Simular la entrada de nuevo inventario ---
const session2 = db.getMongo().startSession();
const inventarioCollectionEntrada = db.getCollection("inventario"); // CAMBIADO AQUÍ
const productosCollectionEntrada = db.getCollection("productos");  // CAMBIADO AQUÍ

try {
  session2.startTransaction();

  const productoIdInventario = 1; // ID del producto para aumentar stock
  const cantidadEntrada = 50;
  const nuevoLote = "L011";

  // a. Insertar un documento en inventario
  const nuevoDocumentoInventario = {
    "_id": db.inventario.countDocuments() + 1, // Nota: db.inventario también aquí
    "productoId": productoIdInventario,
    "lote": nuevoLote,
    "cantidad": cantidadEntrada,
    "entrada": new ISODate()
  };
  inventarioCollectionEntrada.insertOne(nuevoDocumentoInventario, { session: session2 }); // Aquí se pasa la sesión

  // b. Aumentar el stock del producto correspondiente
  productosCollectionEntrada.updateOne(
    { "_id": productoIdInventario },
    { "$inc": { "stock": cantidadEntrada } },
    { session: session2 } // Aquí se pasa la sesión
  );

  session2.commitTransaction();
  print("Transacción de entrada de inventario simulada exitosamente.");
} catch (e) {
  session2.abortTransaction();
  print("Transacción de entrada de inventario abortada: " + e.message);
} finally {
  session2.endSession();
}

// --- Hacer una operación de devolución ---
const session3 = db.getMongo().startSession();
const ventasCollectionDevolucion = db.getCollection("ventas");     // CAMBIADO AQUÍ
const productosCollectionDevolucion = db.getCollection("productos"); // CAMBIADO AQUÍ

try {
  session3.startTransaction();

  const ventaIdDevolucion = 1; // ID de la venta a devolver
  const productoIdDevolucion = 1; // ID del producto en esa venta (Asumiendo que es el producto 1 de la venta 1)
  const cantidadDevolucion = 2; // Cantidad a devolver

  // Obtener la venta para verificar la información del producto
  const ventaADevolver = ventasCollectionDevolucion.findOne({ "_id": ventaIdDevolucion }, { session: session3 });
  if (!ventaADevolver) {
    throw new Error("La venta especificada no existe.");
  }

  // a. Aumentar el stock del producto devuelto
  productosCollectionDevolucion.updateOne(
    { "_id": productoIdDevolucion },
    { "$inc": { "stock": cantidadDevolucion } },
    { session: session3 } // Aquí se pasa la sesión
  );

  // b. Eliminar la venta correspondiente (o actualizarla para reflejar la devolución)
  ventasCollectionDevolucion.deleteOne({ "_id": ventaIdDevolucion }, { session: session3 }); // Aquí se pasa la sesión

  session3.commitTransaction();
  print("Transacción de devolución simulada exitosamente.");
} catch (e) {
  session3.abortTransaction();
  print("Transacción de devolución abortada: " + e.message);
} finally {
  session3.endSession();
}