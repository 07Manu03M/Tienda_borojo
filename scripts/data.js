db.productos.insertMany([
  { "_id": 1, "nombre": "Borojó fresco", "categoria": "Fruta", "precio": 5000, "stock": 30, "tags": ["natural", "orgánico"] },
  { "_id": 2, "nombre": "Jugo de borojó", "categoria": "Bebida", "precio": 7000, "stock": 50, "tags": ["refrescante", "natural"] },
  { "_id": 3, "nombre": "Mermelada de borojó", "categoria": "Alimento", "precio": 8500, "stock": 25, "tags": ["dulce", "desayuno"] },
  { "_id": 4, "nombre": "Galletas con borojó", "categoria": "Snack", "precio": 6000, "stock": 40, "tags": ["dulce", "snack"] },
  { "_id": 5, "nombre": "Compota de borojó", "categoria": "Bebé", "precio": 6500, "stock": 20, "tags": ["suave", "saludable"] },
  { "_id": 6, "nombre": "Helado de borojó", "categoria": "Postre", "precio": 10000, "stock": 10, "tags": ["frío", "postre"] },
  { "_id": 7, "nombre": "Concentrado de borojó", "categoria": "Bebida", "precio": 12000, "stock": 15, "tags": ["energético", "fuerte"] },
  { "_id": 8, "nombre": "Borojó deshidratado", "categoria": "Fruta", "precio": 9000, "stock": 18, "tags": ["natural", "conservado"] },
  { "_id": 9, "nombre": "Aceite de borojó", "categoria": "Cosmético", "precio": 15000, "stock": 8, "tags": ["piel", "cuidado"] },
  { "_id": 10, "nombre": "Cerveza artesanal de borojó", "categoria": "Bebida", "precio": 13000, "stock": 12, "tags": ["artesanal", "alcohol"] }
]);

db.clientes.insertMany([
  { "_id": 1, "nombre": "Carlos Ramírez", "email": "carlos@email.com", "compras": [1, 2], "preferencias": ["natural", "bebida"] },
  { "_id": 2, "nombre": "Diana Suárez", "email": "diana@email.com", "compras": [2, 4], "preferencias": ["dulce", "snack"] },
  { "_id": 3, "nombre": "Juan Torres", "email": "juan@email.com", "compras": [1, 7], "preferencias": ["energético"] },
  { "_id": 4, "nombre": "Ana López", "email": "ana@email.com", "compras": [3, 5], "preferencias": ["bebe", "desayuno"] },
  { "_id": 5, "nombre": "Luis Martínez", "email": "luis@email.com", "compras": [6], "preferencias": ["frío", "postre"] },
  { "_id": 6, "nombre": "Sofía Gómez", "email": "sofia@email.com", "compras": [2, 3, 4], "preferencias": ["dulce"] },
  { "_id": 7, "nombre": "Felipe Castro", "email": "felipe@email.com", "compras": [7, 8], "preferencias": ["fuerte", "natural"] },
  { "_id": 8, "nombre": "Laura Pérez", "email": "laura@email.com", "compras": [9], "preferencias": ["cuidado"] },
  { "_id": 9, "nombre": "Camilo Rojas", "email": "camilo@email.com", "compras": [10], "preferencias": ["artesanal"] },
  { "_id": 10, "nombre": "Valentina Ortiz", "email": "valentina@email.com", "compras": [1, 2, 3], "preferencias": ["natural", "dulce"] }
]);

db.ventas.insertMany([
  { "_id": 1, "clienteId": 1, "productos": [{ "productoId": 1, "cantidad": 2 }], "fecha": ISODate("2025-06-01T10:30:00Z"), "total": 10000 },
  { "_id": 2, "clienteId": 2, "productos": [{ "productoId": 2, "cantidad": 1 }, { "productoId": 4, "cantidad": 2 }], "fecha": ISODate("2025-06-03T12:00:00Z"), "total": 19000 },
  { "_id": 3, "clienteId": 3, "productos": [{ "productoId": 7, "cantidad": 1 }], "fecha": ISODate("2025-06-05T08:45:00Z"), "total": 12000 },
  { "_id": 4, "clienteId": 4, "productos": [{ "productoId": 3, "cantidad": 2 }], "fecha": ISODate("2025-06-07T14:20:00Z"), "total": 17000 },
  { "_id": 5, "clienteId": 5, "productos": [{ "productoId": 6, "cantidad": 1 }], "fecha": ISODate("2025-06-10T17:00:00Z"), "total": 10000 },
  { "_id": 6, "clienteId": 6, "productos": [{ "productoId": 2, "cantidad": 1 }, { "productoId": 3, "cantidad": 1 }], "fecha": ISODate("2025-06-12T09:15:00Z"), "total": 15500 },
  { "_id": 7, "clienteId": 7, "productos": [{ "productoId": 8, "cantidad": 1 }], "fecha": ISODate("2025-06-13T11:45:00Z"), "total": 9000 },
  { "_id": 8, "clienteId": 8, "productos": [{ "productoId": 9, "cantidad": 2 }], "fecha": ISODate("2025-06-14T13:00:00Z"), "total": 30000 },
  { "_id": 9, "clienteId": 9, "productos": [{ "productoId": 10, "cantidad": 1 }], "fecha": ISODate("2025-06-15T19:30:00Z"), "total": 13000 },
  { "_id": 10, "clienteId": 10, "productos": [{ "productoId": 1, "cantidad": 1 }, { "productoId": 2, "cantidad": 1 }, { "productoId": 3, "cantidad": 1 }], "fecha": ISODate("2025-06-16T16:00:00Z"), "total": 20500 }
]);

db.proveedores.insertMany([
  { "_id": 1, "nombre": "Frutas del Chocó", "contacto": "0987654321", "productos": ["Borojó fresco", "Borojó deshidratado"] },
  { "_id": 2, "nombre": "Jugos Naturales S.A.", "contacto": "0987654322", "productos": ["Jugo de borojó", "Concentrado de borojó"] },
  { "_id": 3, "nombre": "Dulces Pacífico", "contacto": "0987654323", "productos": ["Mermelada de borojó", "Galletas con borojó"] },
  { "_id": 4, "nombre": "Baby Foods", "contacto": "0987654324", "productos": ["Compota de borojó"] },
  { "_id": 5, "nombre": "Postres Fríos", "contacto": "0987654325", "productos": ["Helado de borojó"] },
  { "_id": 6, "nombre": "Cosmética Natural", "contacto": "0987654326", "productos": ["Aceite de borojó"] },
  { "_id": 7, "nombre": "Cervecería Artesanal", "contacto": "0987654327", "productos": ["Cerveza artesanal de borojó"] }
]);

db.inventario.insertMany([
  { "_id": 1, "productoId": 1, "lote": "L001", "cantidad": 100, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 2, "productoId": 2, "lote": "L002", "cantidad": 80, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 3, "productoId": 3, "lote": "L003", "cantidad": 60, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 4, "productoId": 4, "lote": "L004", "cantidad": 70, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 5, "productoId": 5, "lote": "L005", "cantidad": 50, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 6, "productoId": 6, "lote": "L006", "cantidad": 30, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 7, "productoId": 7, "lote": "L007", "cantidad": 40, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 8, "productoId": 8, "lote": "L008", "cantidad": 25, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 9, "productoId": 9, "lote": "L009", "cantidad": 15, "entrada": ISODate("2025-06-01T08:00:00Z") },
  { "_id": 10, "productoId": 10, "lote": "L010", "cantidad": 20, "entrada": ISODate("2025-06-01T08:00:00Z") }
]);