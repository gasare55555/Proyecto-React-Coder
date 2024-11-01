# Gaming World

**Gaming World** es una aplicación creada en React para la venta de videojuegos, asegurando una experiencia responsive y accesible para todos los usuarios. La app proporciona una interfaz intuitiva para navegar por distintas categorías de videojuegos, acceder a los detalles de cada producto, y gestionar el carrito de compras.

## Características principales

### 1. **Componente `NavBar`**
   - Barra de navegación que incluye:
     - `CartWidget` con el número dinámico de ítems agregados al carrito y acceso a la vista del carrito.
     - Lista de categorías (`NavCategory`), con las opciones: Popular, Anticipated, y Educational.
     - `NavLogo` con el logo de la tienda.
     - `NavToggler` con un botón responsive para desplegar las categorías en dispositivos móbiles.

### 2. **Componente `ItemListContainer`**
   - Componente que puede mostrar:
     - **Vista principal (Home)**, que contiene el listado general de productos de videojuegos.
     - **Categorías**, para navegar por:
       1. Popular
       2. Anticipated
       3. Educational

### 3. **Componente `Item`**
   - Muestra una descripción breve de cada videojuego, incluyendo:
     - Nombre del juego
     - Precio
     - Botón para ver detalles del videojuego

### 4. **Componente `ItemDetailContainer`**
   - Vista de detalle de cada videojuego seleccionado:
     - Incluye calificación, resumen, géneros, plataformas, y enlaces a videos relacionados.
   - **Funcionalidad adicional**:
     - Componente `SelectAddContainer`, que engloba el contador para definir la cantidad de ítems con un límite establecido por el stock, y el botón de agregar al carrito.

### 5. **Componente `Checkout`**
   - Vista del carrito de compras, organizada en tres secciones:
     1. **Resumen de productos (`CartItem`)**: lista de cada ítem con su cantidad y un contador interactivo para agregar o quitar ítems.
     2. **`cartTotalPrice`**: calcula automáticamente el precio total en función de la cantidad de productos.
     3. **`cartForm`**: formulario para completar los datos de compra (nombre, teléfono y email). Al enviar el formulario, se genera un ID de orden único mediante 
     Firestore.

### 6. **Indicador de carga**

- **`FourSquare`**: Indicador gráfico de carga implementado con la librería `react-loading-indicators` para mejorar la experiencia de usuario mientras se cargan componentes pesados.

## Configuración de rutas con React Router DOM

- **React Router DOM**:  
  Configurado en el componente `App` con `BrowserRouter`, abarcando toda la aplicación y definiendo cuatro rutas:
  - La ruta por defecto (`/`), que apunta a `ItemListContainer` para mostrar la vista principal.
  - La ruta dinámica (`/category/:id`), que apunta a `ItemListContainer`, renderizando la categoría correspondiente según el `id`.
  - La ruta dinámica de detalles (`/item/:id`), que apunta a `ItemDetailContainer` para mostrar los detalles del videojuego seleccionado.
  - La ruta `/cart`, que apunta al componente `Checkout` para acceder al carrito.

## Integración de React Hooks

- **`useState`**: utilizado para almacenar información dinámica que se renderiza en pantalla y para activar la carga de ciertos componentes mediante renderizado condicional.
- **`useEffect`**: permite cargar datos desde Firestore en el momento del montaje del componente, o ejecutar funciones específicas cuando cambian ciertas variables de estado.
- **`useContext`**: proporciona estado, información del carrito y funciones para modificarlo a los componentes especificados.
- **`useParams`**: utilizado para obtener los ID dinámicos de categorías e ítems en componentes determinados.

## Custom Hooks

`Gaming World` utiliza dos custom hooks para funcionalidad específica:
- **`useCount`**: implementa la funcionalidad del contador interactivo para manejar las cantidades de productos.
- **`useLoad`**: maneja el indicador de carga `FourSquare` de la librería `react-loading-indicators`.

## Datos y almacenamiento

La recopilación de datos sobre los videojuegos se realizó mediante la **IGDB API** de Twitch Developer. Estos datos fueron luego almacenados en **Firestore** (Firebase) y usados para cargar las vistas de productos en la tienda. Las órdenes de compra también son almacenadas en una colección de Firestore.

## Librerías adicionales

- **Bootstrap**: se utilizaron componentes visuales básicos como Navbar, Card, Buttons, Form control, etc.
- **SweetAlert**: utilizado para mostrar alertas interactivas y mensajes de confirmación en la app.
- **FourSquare (react-loading-indicators)**: Indicador de carga visual para componentes pesados, implementado con renderizado condicional.

## Preprocesadores

- **SASS**: se utilizó para personalizar los estilos de Bootstrap y optimizar la presentación visual.

## Hosting

La aplicación está alojada en Netlify, con **Continuous Deployment** activado para actualizar automáticamente los cambios del repositorio de GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT.

## Contacto

Para consultas, puedes escribir a: gasare5555@gmail.com

## Agradecimientos

Agradecemos el uso de la IGDB API y de herramientas de código abierto como React, Firebase y Bootstrap que permiten que `Gaming World` sea una plataforma funcional y escalable.
