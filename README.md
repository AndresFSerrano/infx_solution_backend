# 🛠️ Backend - Prueba Técnica Full Stack Junior

Este proyecto corresponde al backend para la prueba técnica solicitada por INFX Solution. Consiste en una API RESTful para gestionar productos, incluyendo funcionalidades de búsqueda, detalle y creación.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- Zod (validación)
- dotenv

---

## 📦 Instalación

1. Clona el repositorio:

git clone https://github.com/tu-usuario/tu-repo.git  
cd tu-repo

2. Instala las dependencias:

npm install

3. Crea un archivo `.env` en la raíz con el siguiente contenido:

PORT=3000  
MONGO_URI=mongodb://localhost:27017/infx_db  
NODE_ENV=development

4. Inicia el servidor en modo desarrollo:

npm run dev

---

## 📡 Endpoints disponibles

GET  `/api/items?q=...` → Busca productos por texto (título, etc.)  
GET  `/api/items/:id` → Obtiene el detalle de un producto específico  
POST `/api/create` → Crea un nuevo producto con validación de campos

---

## 🧪 Validación

La validación se realiza con la librería Zod, y todos los mensajes de error se devuelven estructurados y en español. Se validan campos como:

- `title`, `price`, `category`: obligatorios
- `stock`, `rating`: numéricos
- `image`: debe ser una URL válida

---

## 🗂️ Estructura del proyecto

src/  
├── config/         # Conexión a base de datos  
├── controllers/    # Lógica de negocio  
├── models/         # Definición del esquema Product  
├── routes/         # Rutas de la API  
├── validators/     # Validación con Zod  
├── index.ts        # Punto de entrada principal

---

## 📥 Ejemplo de creación de producto

POST `/api/create`

{
  "title": "Teclado mecánico",
  "description": "RGB y switches rojos",
  "price": 150,
  "category": "Accesorios",
  "stock": 25,
  "image": "https://example.com/image.jpg",
  "rating": 4.5
}

---

## 👤 Autor

**Andrés Felipe Serrano Barrios**  
📧 andresfserrano1@gmail.com  
🔗 https://www.linkedin.com/in/afsb/

---

## 📝 Licencia

Este proyecto se entrega como parte de una prueba técnica para INFX Solution. Su uso es privado, exclusivo para revisión técnica.
