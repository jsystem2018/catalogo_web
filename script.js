/* ============================================================
   🟦 PANTALLA DE BIENVENIDA CON TIPEO Y CORTINAS
============================================================ */
window.addEventListener("load", () => {
  const texto = "Bienvenido a tu web de confianza, donde encontrarás los mejores productos";
  const textoTipeado = document.getElementById("textoTipeado");
  const izquierda = document.querySelector(".izquierda");
  const derecha = document.querySelector(".derecha");
  const bienvenida = document.getElementById("bienvenida");
  let i = 0;

  function escribir() {
    if (i < texto.length) {
      textoTipeado.textContent += texto.charAt(i);
      i++;
      setTimeout(escribir, 40); // velocidad del tipeo
    } else {
      textoTipeado.classList.add("cursor-off");

      // Abre las cortinas luego de terminar el texto
      setTimeout(() => {
        izquierda.classList.add("abierta");
        derecha.classList.add("abierta");

        // Luego oculta la pantalla de bienvenida y muestra el catálogo
        setTimeout(() => {
          bienvenida.style.display = "none";
          iniciarCatalogo();
        }, 600);
      }, 800);
    }
  }

  escribir();
});

/* ============================================================
   🛍️ FUNCIÓN PRINCIPAL PARA MOSTRAR EL CATÁLOGO
============================================================ */
function iniciarCatalogo() {
// ===== CONTADOR LOCAL ACUMULATIVO (INICIA EN 1500) =====
const contadorElemento = document.getElementById("contador");

// Obtener visitas desde localStorage, si no existe, empieza en 1500
let visitas = parseInt(localStorage.getItem("visitas")) || 1500;

// Sumar +1 cada vez que se carga la página
visitas++;

// Guardar el nuevo valor
localStorage.setItem("visitas", visitas);

// Mostrar el valor en pantalla
contadorElemento.textContent = visitas.toLocaleString();


  // Datos de los productos
const productosData = [
  { nombre: "Licuadora Portatil", descripcion: "LICUADORA 6 ASPAS 👉🏼 MATERIAL: PVC + ACERO 👉🏼 CAPACIDAD: 400 ml 👉🏼 ARTÍCULO RECARGABLE 👉🏼 COLORES: ROSADO,CELESTE , VERDE Y LILA",  precio: "S/ 15", imagenes: ["img/licuadora1.jpg", "img/licuadora2.jpg", "img/licuadora3.jpg"] },
  { nombre: "Reloj Moderno", descripcion: "Reloj moderno, colores disponibles Negro, azul marino, marron, beige.", precio: "S/ 15",imagenes: ["img/reloj1.jpg", "img/reloj2.jpg", "img/reloj3.jpg"] },
  { nombre: "Cooler Laptop", descripcion: "✅Material del producto: plástico de ingeniería + malla de hierro ✅Velocidad del ventilador: 1200 +-10% rpm ✅Voltaje nominal: 4,5-5V DC ✅Tamaño aplicable: equipo de ordenador hasta 16 pulgadas ✅Tamaño del ventilador: 120x120x20mm (2 uds.) ✅Tamaño: 00x290x50mm", precio: "S/ 45", imagenes: ["img/cooler1.jpg", "img/cooler2.jpg", "img/cooler3.jpg"] },
  { nombre: "Palito Selfie", descripcion: "Selfie Stick 2 en 1 con Trípode: ✅ Diseño versátil: de selfie stick a trípode en segundos ✅ Rotación 360° para fotos y videos en cualquier ángulo ✅ Compacto, ligero y fácil de llevar ✅ Ideal para selfies, fotos grupales y grabación de videos ¡Captura tus mejores momentos con comodidad y estabilidad!", precio: "S/ 11", imagenes: ["img/palitoselfie1.jpg", "img/palitoselfie2.jpg", "img/palitoselfie3.jpg"] },
  { nombre: "Pad Mouse", descripcion: "-Pad Mouse con Gel -Precios por MAYOR y MENOR -Variedad de colores", precio: "S/ 14", imagenes: ["img/padmouse1.jpg", "img/padmouse2.jpg", "img/padmouse3.jpg"] },
  { nombre: "Adaptador de Enchufe", descripcion: "Adaptador de viaje plegable 3 en 1, 2 piezas, con enchufe japonés, rotación de 180 grados, 2500W, opciones de color rosa, blanco o azul, para hogar y viajes", precio: "S/ 9",imagenes: ["img/enchufe1.jpg", "img/enchufe2.jpg", "img/enchufe3.jpg"] },
  { nombre: "Reloj Elegante", descripcion: "Seduce con un reloj elegante, ideal para regalos ",precio: "S/ 15", imagenes: ["img/reloj4.jpg", "img/reloj5.jpg", "img/reloj5.jpg"] },
  { nombre: "Auriculares Bluetooth Inalambricos", descripcion: "SON AUDÍFONOS BLUETOOTH INALAMBRICOS LAS LUCES CAMBIAN DE COLORES, TIENE RADIO FM, TIENE ENTRADA TARJETA MICRO SD, TIENE MICRÓFONO INCORPORADO PARA RECIBIR LLAMADAS, EXCELENTE SONIDO EXTRABASS ENVOLVENTE", precio: "S/ 29.90",imagenes: ["img/audi1.jpg", "img/audi2.jpg", "img/audi3.jpg"] },
  { nombre: "Audifonos Bluetooth", descripcion: "Fácil transporte, pequeños y cómodos.", precio: "S/ 35",imagenes: ["img/audifonos1.jpg", "img/audifonos2.jpg", "img/audifonos3.jpg"] },
  { nombre: "Audifonos Bluetooh", descripcion: "Distancia de trabajo 10m, Estuche de Carga para 3 cargas adicionales, Entrada tipo C ", precio: "S/ 35",imagenes: ["img/audifonos4.jpg", "img/audifonos5.jpg", "img/audifonos6.jpg"] },
  { nombre: "Skin personalizados", descripcion: "Diseños Unicos, diseños tematicos", precio: "S/ 129",imagenes: ["img/skin1.jpg", "img/skin2.jpg", "img/skin3.jpg"] },
  { nombre: "Skin Personalizados", descripcion: "Diseños Unicos, diseños tematicos", precio: "S/ 129", imagenes: ["img/skin4.jpg", "img/skin5.jpg", "img/skin6.jpg"] },
  { nombre: "skin personalizados", descripcion: "Diseños Unicos, diseños tematicos.", precio: "S/ 129", imagenes: ["img/skin7.jpg", "img/skin8.jpg", "img/skin9.jpg"] },
  { nombre: "Audifono Bluetooth", descripcion: "Por mayor y Menor", precio: "S/ 35", imagenes: ["img/audifonos9.jpg", "img/audifonos10.jpg", "img/audifonos11.jpg"] },
  { nombre: "RELOJ + PULSERA", descripcion: "Elegantes relojes para cualquier ocasión, color: marrón", precio: "S/ 15", imagenes: ["img/reloj8.jpg", "img/reloj9.jpg", "img/reloj10.jpg"] },
 { nombre: "RELOJ + PULSERA", descripcion: "Elegantes relojes para cualquier ocasión, color: negro", precio: "S/ 15", imagenes: ["img/reloj11.jpg", "img/reloj12.jpg", "img/reloj13.jpg"] },
   { nombre: "RELOJ + PULSERA", descripcion: "Elegantes relojes para cualquier ocasión, color: beige", precio: "S/ 15", imagenes: ["img/reloj14.jpg", "img/reloj15.jpg", "img/reloj16.jpg"] },
 { nombre: "RELOJ + PULSERA", descripcion: "Elegantes relojes para cualquier ocasión, color: Azul Marino", precio: "S/ 15",imagenes: ["img/reloj17.jpg", "img/reloj18.jpg", "img/reloj19.jpg"] },
  { nombre: "RELOJ SPORT", descripcion: "Relojes deportivos, color: Verde caña", precio: "S/ 15", imagenes: ["img/reloj20.jpg", "img/reloj25.jpg", "img/reloj26.jpg"] },
    { nombre: "RELOJ SPORT", descripcion: "Relojes deportivos, color: Azul", precio: "S/ 15", imagenes: ["img/reloj22.jpg", "img/reloj25.jpg", "img/reloj26.jpg"] },
  { nombre: "RELOJ SPORT", descripcion: "Relojes deportivos, color: Verde", precio: "S/ 15", imagenes: ["img/reloj21.jpg", "img/reloj25.jpg", "img/reloj26.jpg"] },
  { nombre: "RELOJ SPORT", descripcion: "Relojes deportivos, color: Rojo", precio: "S/ 15", imagenes: ["img/reloj23.jpg", "img/reloj25.jpg", "img/reloj26.jpg"] },
  { nombre: "RELOJ SPORT", descripcion: "Relojes deportivos, color: Negro", precio: "S/ 15", imagenes: ["img/reloj24.jpg", "img/reloj25.jpg", "img/reloj26.jpg"] }
];


  const catalogo = document.getElementById("catalogo");

  // Generar dinámicamente las tarjetas de producto
  productosData.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("producto");

  div.innerHTML = `
  <div class="producto-img-container">
    <img src="${p.imagenes[0]}" alt="${p.nombre}" class="img-producto">
  </div>
  <h2 class="titulo-producto">${p.nombre}</h2>
  <div class="estrellas">⭐⭐⭐⭐⭐</div>
  <div class="precio">${p.precio}</div>
  <p class="descripcion-producto">${p.descripcion}</p>
  <a href="https://wa.me/950125155?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(p.nombre)}"
     target="_blank" class="btn-comprar">Lo quiero</a>
`;


    // Eventos para abrir el modal desde la imagen o el título
    div.querySelector(".img-producto").addEventListener("click", () => abrirModal(p));
    div.querySelector(".titulo-producto").addEventListener("click", () => abrirModal(p));

    catalogo.appendChild(div);
  });

  // Activar animación de aparición de productos
  activarAnimacionProductos();
}

/* ============================================================
   🪟 MODAL DE PRODUCTO
============================================================ */
const modal = document.getElementById("modal");
const modalNombre = document.getElementById("modalNombre");
const modalDescripcion = document.getElementById("modalDescripcion");
const modalImagen = document.getElementById("modalImagen");
const btnWhatsApp = document.getElementById("btnWhatsApp");

let indiceImagen = 0;
let imagenesActuales = [];

// Abrir modal
function abrirModal(producto) {
  modal.classList.add("mostrar");
  modal.style.display = "flex";

  modalNombre.textContent = producto.nombre;
  modalDescripcion.textContent = producto.descripcion;

  imagenesActuales = producto.imagenes;
  indiceImagen = 0;
  modalImagen.src = imagenesActuales[indiceImagen];

  // Configura el enlace de WhatsApp
  btnWhatsApp.href = `https://wa.me/950125155?text=Hola!%20Estoy%20interesado%20en%20${encodeURIComponent(producto.nombre)}`;

  // Evita scroll en el fondo
  document.body.style.overflow = "hidden";
}

// Cerrar modal
function cerrarModal() {
  modal.classList.remove("mostrar");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }, 400);
}

// Eventos para cerrar modal
document.getElementById("cerrarModal").onclick = cerrarModal;
modal.addEventListener("click", (e) => {
  if (e.target === modal) cerrarModal();
});

// Cambiar imagen dentro del modal
function cambiarImagen(nuevaIndex) {
  modalImagen.classList.add("fade-out");
  setTimeout(() => {
    indiceImagen = (nuevaIndex + imagenesActuales.length) % imagenesActuales.length;
    modalImagen.src = imagenesActuales[indiceImagen];
    modalImagen.classList.remove("fade-out");
  }, 300);
}

document.getElementById("siguiente").onclick = () => cambiarImagen(indiceImagen + 1);
document.getElementById("anterior").onclick = () => cambiarImagen(indiceImagen - 1);

/* ============================================================
   ⬆️ BOTÓN "IR ARRIBA"
============================================================ */
const btnArriba = document.getElementById("btnArriba");

window.addEventListener("scroll", () => {
  btnArriba.style.display = document.documentElement.scrollTop > 200 ? "block" : "none";
});

btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ============================================================
   🧭 EFECTO DEL HEADER AL HACER SCROLL
============================================================ */
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    hero.classList.add("scrolled");
  } else {
    hero.classList.remove("scrolled");
  }
});

/* ============================================================
   ✨ ANIMACIÓN DE PRODUCTOS AL HACER SCROLL
============================================================ */
function activarAnimacionProductos() {
  const productos = document.querySelectorAll(".producto");

  function mostrarProductos() {
    const triggerBottom = window.innerHeight * 0.85;
    productos.forEach(p => {
      const boxTop = p.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        p.classList.add("mostrar");
      } else {
        p.classList.remove("mostrar");
      }
    });
  }

  window.addEventListener("scroll", mostrarProductos);
  mostrarProductos();
}
