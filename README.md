# Calidad Competitiva — Sitio web corporativo

Sitio web institucional de **Calidad Competitiva**, empresa de servicios tecnológicos especializada en infraestructura y seguridad de equipos de cómputo, desarrollo de software, y análisis y desarrollo de procesos.

El sitio presenta la oferta de servicios de la empresa y canaliza el contacto comercial, principalmente a través de WhatsApp.

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Ejecución en entorno local](#ejecución-en-entorno-local)
- [Accesibilidad y rendimiento](#accesibilidad-y-rendimiento)
- [Créditos y licencias](#créditos-y-licencias)

## Características

- Cuatro páginas: Inicio, Servicios, Nosotros y Contáctanos.
- Diseño adaptable a computadora, tableta y teléfono móvil.
- Barra de navegación fija que se oculta al desplazarse hacia abajo y reaparece al subir.
- Pie de página con secciones desplegables en dispositivos móviles.
- Acceso directo a WhatsApp desde la navegación, el encabezado y las secciones de cierre.
- Mapa de ubicación integrado mediante Google Maps.
- Enlaces a redes sociales con íconos monocromáticos.

## Tecnologías

El sitio está construido con tecnologías web estándar, sin dependencias ni proceso de compilación:

| Componente | Tecnología |
| --- | --- |
| Estructura | HTML5 semántico |
| Estilos | CSS3 con variables personalizadas (design tokens) y color OKLCH |
| Interacción | JavaScript nativo (ES2015+) |
| Tipografías | Wix Madefor Display y Wix Madefor Text, vía Google Fonts |
| Íconos | Simple Icons, vía jsDelivr |
| Mapas | Google Maps (inserción mediante iframe) |
| Alojamiento | GitHub Pages |

## Estructura del proyecto

```
.
├── index.html          Página de inicio
├── servicios.html      Detalle de los seis servicios
├── nosotros.html       Presentación, misión, visión y valores
├── contacto.html       Datos de contacto, formulario y mapa
├── assets/
│   ├── css/
│   │   ├── tokens.css  Variables de diseño: colores, tipografía, espaciado
│   │   ├── base.css    Estilos base y reglas generales
│   │   └── site.css    Estilos de componentes y secciones
│   ├── js/
│   │   └── site.js     Comportamiento de la navegación y del pie de página
│   └── img/            Imágenes propias del sitio
└── README.md
```

## Ejecución en entorno local

Al tratarse de un sitio estático, basta con abrir `index.html` en un navegador. Para reproducir con mayor fidelidad el comportamiento del servidor, se recomienda utilizar un servidor local:

```bash
# Con Node.js
npx serve .

# Con Python 3
python -m http.server 8000
```

Luego, acceder a `http://localhost:8000` (o al puerto indicado por la herramienta).


### Colores y tipografía

Todos los colores y fuentes se definen como variables en `assets/css/tokens.css`. Modificar una variable actualiza su uso en todo el sitio. No se recomienda declarar colores directamente en `assets/css/site.css`.

## Accesibilidad y rendimiento

- Estructura semántica con encabezados jerárquicos y regiones identificadas.
- Indicadores de foco visibles en todos los elementos interactivos.
- Animaciones desactivadas cuando el usuario solicita movimiento reducido.
- Contenido visible y navegable sin JavaScript.
- Carga diferida de imágenes y mapas fuera de la primera pantalla.
- Imágenes responsivas mediante `srcset`.

## Créditos y licencias

### Fotografías

Obtenidas de Wikimedia Commons:

- Edificio de oficinas: Dietmar Rabich, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Centro de datos: Daoducquan, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
- Switches de red: ShakataGaNai, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

### Recursos de terceros

- Tipografías Wix Madefor: [SIL Open Font License 1.1](https://openfontlicense.org/)
- Íconos Simple Icons: [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Las marcas representadas pertenecen a sus respectivos titulares.

### Derechos

© 2026 Calidad Competitiva. Todos los derechos reservados sobre el contenido textual.
