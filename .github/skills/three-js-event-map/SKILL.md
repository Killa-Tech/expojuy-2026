---
name: three-js-event-map
description: "Diseña e implementa mapas, planos y maquetas 3D interactivas con React y Three.js para eventos, predios, ferias y lugares. Usar cuando haya que mostrar sectores, stands, escenarios, recorridos o puntos de interés seleccionables en una escena 3D moderna y responsive."
argument-hint: "Describe el predio, los sectores y la interacción que debe tener el mapa 3D"
user-invocable: true
disable-model-invocation: false
---

# Mapas 3D de eventos con React

## Objetivo

Crear una escena 3D usable para explorar la ubicación de un evento: sectores del predio, stands, escenarios, accesos, servicios y puntos de interés. La escena debe comunicar orientación espacial, permitir seleccionar lugares y funcionar en escritorio y móvil sin convertir el canvas en una imagen decorativa.

## Cuándo usar esta skill

- Planos conceptuales 3D de predios, centros de convenciones o ferias.
- Mapas de eventos con stands, pabellones, escenarios, accesos y servicios.
- Visualizaciones de sectores que necesitan cámara orbital, zoom, selección o foco.
- Recorridos y puntos de interés que deben abrir información contextual.
- Maquetas 3D estilizadas donde un mapa 2D o MapLibre no expresa bien la relación espacial.

No usar Three.js para una geografía real, calles o navegación GPS. En esos casos conservar MapLibre y, si hace falta, superponer una visualización 3D independiente para el plano del predio.

## Investigación y decisión inicial

1. Leer la arquitectura existente antes de instalar dependencias o crear componentes.
2. Identificar si el proyecto ya usa `three`, `@react-three/fiber`, `@react-three/drei`, MapLibre, un sistema de estado o una librería de UI.
3. Elegir el motor:
   - Usar `@react-three/fiber` para renderizar Three.js declarativamente dentro de React.
   - Usar `@react-three/drei` para controles, `Html`, `Text`, `Environment`, `Bounds`, `Float` y utilidades probadas.
   - Usar Three.js directo solo si la escena necesita una integración imperativa que R3F no cubre.
   - Usar MapLibre para mapa geográfico; no reemplazarlo por una escena 3D sin justificación.
4. Confirmar la fuente de datos: coordenadas locales, polígonos, niveles, etiquetas, categoría, descripción y estado de cada lugar.
5. Formular una hipótesis visual comprobable: por ejemplo, “una vista isométrica con sectores extruidos y hotspots permitirá localizar stands más rápido que una grilla plana”. Validarla con una captura inicial en escritorio y móvil.

## Dependencias

Si no están instaladas, agregar solo las necesarias con el gestor del repositorio:

```bash
pnpm add three @react-three/fiber @react-three/drei
pnpm add -D @types/three
```

No instalar una segunda librería de cámara, controles o tooltips si `drei` y la UI existente cubren el caso. Mantener `lucide-react` para controles de interfaz, no usar SVG manuales para iconos comunes.

## Modelo de datos recomendado

Separar los datos del renderizado. Para un plano de evento usar una forma similar a esta:

```ts
export type EventMapPoint = {
  id: string;
  name: string;
  category: "stand" | "stage" | "food" | "service" | "access";
  position: [number, number, number];
  size?: [number, number, number];
  description?: string;
  href?: string;
  status?: "open" | "busy" | "closed";
};
```

- Mantener `position` en coordenadas locales del plano, no en píxeles de pantalla.
- Definir una convención clara: `x` horizontal, `y` altura y `z` profundidad.
- Normalizar escalas para que el predio completo quepa en la escena.
- Evitar que el componente conozca textos hardcodeados de cada stand.
- Usar identificadores estables para selección, URL y analítica.

## Estructura de componentes

Preferir una separación como esta, adaptada a la arquitectura existente:

```text
components/event-map/
  index.tsx
  scene.tsx
  controls.tsx
  map-legend.tsx
  point-of-interest.tsx
  event-map.types.ts
  event-map.css (solo si CSS es realmente necesario)
```

Responsabilidades:

- `index.tsx`: estado de selección, panel de detalle y composición del canvas.
- `scene.tsx`: luces, suelo, geometría, sectores y cámara.
- `point-of-interest.tsx`: mesh seleccionable, hover, estado visual y etiqueta.
- `controls.tsx`: reset, zoom, vista superior y orientación; usar botones con iconos y tooltip.
- `map-legend.tsx`: categorías y estados, con contraste suficiente.

No meter la escena completa en una card decorativa dentro de otra card. El mapa debe tener un contenedor estable, amplio y claramente interactivo.

## Construcción de la escena

1. Crear un `Canvas` con dimensiones estables (`aspect-ratio`, `min-height` y límites responsive).
2. Usar `orthographicCamera` para un plano conceptual o `PerspectiveCamera` cuando la profundidad sea relevante.
3. Definir cámara inicial, `dpr` limitado y `frameloop` según necesidad.
4. Añadir iluminación simple y predecible: `ambientLight` más una luz direccional; evitar sombras costosas si no comunican información.
5. Crear suelo, pasillos y sectores con geometría simple antes de agregar modelos complejos.
6. Usar colores por categoría y una escala de altura moderada para expresar volumen sin ocultar el plano.
7. Añadir etiquetas con `Text` o `Html` solo cuando sean necesarias. Las etiquetas deben tener límites, contraste y no tapar puntos vecinos.
8. Usar `Suspense` y estados de carga si se cargan modelos o texturas.
9. No usar una imagen de fondo para simular un mapa 3D. La escena debe seguir siendo navegable y legible.

## Interacción

- Hacer cada punto de interés seleccionable mediante pointer events de R3F.
- Cambiar cursor, color, escala o elevación en hover sin alterar el layout.
- Mantener un único `selectedId` y limpiar selección al pulsar el fondo.
- Abrir un panel de detalle accesible fuera del canvas; no depender solo de texto flotante dentro de WebGL.
- Permitir `Escape` para cerrar el detalle y `Enter`/`Space` cuando el punto tenga representación HTML enfocable.
- No depender exclusivamente de hover: debe existir una interacción táctil equivalente.
- Mantener controles de cámara separados de los hotspots para que navegar no seleccione accidentalmente un sector.
- Incluir acciones de volver a vista general y, si aporta valor, “centrar en este lugar”.

## Cámara y móvil

- Usar `OrbitControls` con límites de polar angle, distancia y pan para evitar perder el predio.
- Desactivar o limitar pan en pantallas pequeñas si hace que la escena desaparezca.
- Configurar `touch-action` y comprobar gestos de una y dos manos.
- Ofrecer una vista superior o reset visible.
- Mantener targets táctiles de al menos 44 px cuando haya controles HTML.
- No escalar tipografía con viewport; usar tamaños responsive discretos y contenedores estables.
- Probar ancho estrecho real, orientación horizontal y scroll de la página.

## Accesibilidad y estados

- Proporcionar una leyenda HTML y un listado alternativo de lugares para usuarios que no puedan usar WebGL.
- Añadir `aria-label`, `aria-pressed` o `aria-selected` a controles y elementos HTML.
- Mostrar un estado de WebGL no disponible con el listado alternativo, no una pantalla vacía.
- Respetar `prefers-reduced-motion`: reducir auto-rotación, flotación y transiciones.
- No comunicar categorías solo mediante color; combinar color con texto, forma o icono.
- Mantener contraste WCAG en paneles, etiquetas y controles.

## Rendimiento

- Empezar con geometrías primitivas y pocos materiales.
- Instanciar elementos repetidos con `InstancedMesh` cuando la cantidad lo justifique.
- Evitar crear objetos Three.js dentro de cada render de React.
- No usar `useMemo` o `useCallback` automáticamente; aplicarlos cuando estabilicen objetos pesados o respeten una restricción real del renderer.
- Limitar `dpr` en móviles y reducir sombras, postprocesado y texturas.
- Disponer de una escena de carga y una escena vacía explicativa, nunca un canvas negro sin contexto.
- Liberar geometrías, materiales y texturas de recursos cargados manualmente al desmontar.

## Validación obligatoria

Después de implementar:

1. Ejecutar el typecheck/build del proyecto:

```bash
pnpm build
```

2. Ejecutar lint y separar errores nuevos de errores preexistentes:

```bash
pnpm lint
```

3. Iniciar el servidor de desarrollo y verificar la escena con Playwright o el navegador integrado.
4. Capturar al menos una vista desktop y una mobile.
5. Confirmar en ambas vistas:
   - el canvas no está vacío;
   - el predio está encuadrado inicialmente;
   - los sectores y etiquetas no se superponen de forma incoherente;
   - los controles funcionan con mouse y toque;
   - seleccionar un lugar actualiza el panel correcto;
   - reset y escape funcionan;
   - no hay errores de consola ni assets 404;
   - las fuentes, modelos y texturas cargan desde rutas válidas;
   - el contenido alternativo sigue disponible.
6. Comprobar un canvas-pixel o screenshot para detectar una escena completamente negra o transparente.
7. Revisar rendimiento en un viewport móvil realista antes de añadir detalle visual.

## Criterio de finalización

La tarea está completa cuando el mapa representa datos reales del evento, permite encontrar y seleccionar sectores, tiene un camino alternativo accesible sin WebGL, mantiene encuadre y controles en móvil, compila sin errores nuevos y cuenta con una comprobación visual reproducible. No considerar terminado un mapa solo porque el canvas renderiza: la navegación, la selección y los estados vacíos también deben funcionar.

## Referencias técnicas

- React Three Fiber: https://r3f.docs.pmnd.rs/
- Drei: https://github.com/pmndrs/drei
- Three.js manual: https://threejs.org/manual/
- Three.js docs: https://threejs.org/docs/
- WebGL fundamentals: https://webglfundamentals.org/
