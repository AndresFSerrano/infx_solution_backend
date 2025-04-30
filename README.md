# 🛠️ Backend - Prueba Técnica Full Stack Junior

Este proyecto corresponde al backend para la prueba técnica solicitada por INFX Solution. Consiste en una API RESTful para gestionar productos, incluyendo funcionalidades de búsqueda, detalle, creación y calificación de productos.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- Zod (validación de datos)
- dotenv
- uuid (identificadores únicos por calificación)

---

## 📦 Instalación

### 1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instala las dependencias:

```bash
npm install
```

### 3. Crea un archivo `.env` en la raíz con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/infx_db
NODE_ENV=development
```

### 4. Inicia el servidor:

```bash
npm run dev
```

---

## 📡 Endpoints disponibles

| Método | Ruta                            | Descripción                                                        |
|--------|----------------------------------|--------------------------------------------------------------------|
| GET    | `/api/items?q=teclado`          | Busca productos por título, descripción o categoría                |
| GET    | `/api/items/:id`                | Obtiene los detalles de un producto específico                     |
| POST   | `/api/create`                   | Crea un nuevo producto con validación de campos                    |
| POST   | `/api/items/:id/ratings`        | Registra una calificación para un producto                        |

---

## 🧪 Validación

La validación se realiza con **Zod**, devolviendo errores en español y en estructura clara.

### Producto

- `title`, `price`, `category`: obligatorios
- `stock`: entero no negativo
- `image`: URL válida
- `rating`: número entre 0 y 5 (promedio calculado luego)

### Calificación

- `value`: obligatorio, número entre 0 y 5
- `userId`: generado automáticamente con UUID

---

## 🗂️ Estructura del proyecto

```
src/
├── config/          # Conexión a base de datos
├── controllers/     # Lógica de negocio (productos y calificaciones)
├── models/          # Esquemas de Mongoose (Product, Rating)
├── routes/          # Definición de endpoints
├── validators/      # Validaciones con Zod
├── app.ts           # Aplicación Express
└── index.ts         # Punto de entrada
```

---

## 📥 Ejemplo de creación de producto

**POST** `/api/create`

```json
{
  "title": "Teclado mecánico",
  "description": "RGB y switches rojos",
  "price": 150,
  "category": "Accesorios",
  "stock": 25,
  "image": "https://example.com/image.jpg"
}
```

---

## ⭐ Ejemplo de calificación

**POST** `/api/items/661e0b7f3cc302a4b14d8e73/ratings`

```json
{
  "value": 4.5
}
```

🔄 Devuelve:

```json
{
  "message": "Calificación registrada",
  "userId": "uuid-generado",
  "rating": {
    "_id": "...",
    "productId": "...",
    "value": 4.5,
    "createdAt": "...",
    "__v": 0
  }
}
```

---

## 🧪 Tests

Este proyecto incluye pruebas con Jest + Supertest. Puedes ejecutarlas con:

```bash
npm test
```

---

## 👤 Autor

**Andrés Felipe Serrano Barrios**  
📧 andresfserrano1@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/afsb/)

---

## 📝 Licencia

Este proyecto se entrega como parte de una prueba técnica para INFX Solution. Su uso es privado, exclusivo para revisión técnica.
