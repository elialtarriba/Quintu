# Bingo navideño de Elisabeth · V7

**Estado actual:** V7 preparada localmente. Seguir [ACTIVAR_V7.md](ACTIVAR_V7.md) para publicar las reglas y actualizar GitHub. El historial anterior se conserva; prevalece la sección V7 al final.

Documentación del estado de la aplicación a 8 de noviembre de 2026.

## Qué es esta app

Una web de bingo navideño de 90 bolas, con 27 cartones, preparada para móvil, tableta y ordenador. Se puede publicar como web estática e instalar como acceso de aplicación donde el navegador lo permita. No necesita cuentas ni servidor de partidas.

Una persona maneja el bombo y los jugadores marcan sus cartones manualmente. Cada dispositivo conserva su propio estado: no hay sincronización entre jugadores ni asignación centralizada de cartones.

## Diseño y portada

- Estética inspirada en las referencias de Elisabeth: duende con gorro rojo, abrigo verde y barba blanca; bola de nieve con casa y árbol; bombo dorado y cartones tradicionales.
- Colores principales: blanco marfil, rojo navideño, verde abeto y oro cálido. Guirnaldas, nieve, luces y ventanas con ribetes dorados.
- Duende y bola de nieve de bienvenida alineados como una pareja centrada, con tamaños visualmente equilibrados.
- Tres pulsaciones para entrar. La primera inicia el vídeo de Pruna y la música; la segunda mantiene la bienvenida; la tercera abre el bingo. Hay tres indicadores de progreso.
- Vídeo siempre silenciado, en bucle y con reproducción dentro de la página.
- Etiqueta discreta **V1** debajo de los créditos de bienvenida para identificar esta primera versión.
- Créditos: «Creado por Elisabeth. Disfruta de esta app y comparte la alegría. Si la utilizas, menciona a Elisabeth».

## Bombo, tablero y sorteo

El título BINGO tiene letras grandes, colores coordinados y movimientos suaves. El bombo conserva la fotografía dorada de referencia, con soporte, salida y bol coherentes. El giro se representa mediante animación de la jaula sobre su eje horizontal: es un efecto gráfico, no una simulación mecánica tridimensional completa.

1. Arrastrar sobre el bombo lo hace girar.
2. Un toque en la manivela abre las instrucciones. Se espera brevemente para distinguirlo de un doble toque.
3. Dos toques extraen un número aleatorio de los que quedan y lo depositan en el bol.
4. Tocar el bol amplía la bola y anuncia su número y frase.
5. Tocar la bola ampliada la lleva a su posición en el tablero.
6. Para sacar la siguiente bola hay que volver a tocar dos veces la manivela; no se extrae automáticamente.

No se puede sacar otra bola mientras queda una pendiente. Las transiciones bloquean acciones incompatibles. Las bolas colocadas son de tono miel/ámbar, más oscuro que el tablero, para distinguirlas mejor; la última se destaca.

«Repetir número» vuelve a mostrar y anunciar la última bola colocada tantas veces como se quiera, sin modificar el sorteo. Está desactivado antes de colocar el primer número.

Al colocar las 90 bolas aparece «¡Se acabó el bingo!». Al pulsarlo se prepara una nueva partida y se limpian las fichas de los cartones. También existe reinicio con confirmación en configuración.

Cada extracción elige entre los números restantes, sin duplicados en una partida. Los órdenes no están prefijados. La aleatoriedad no garantiza matemáticamente que nunca coincidan dos partidas, aunque repetir un orden completo es extraordinariamente improbable.

## Los 27 cartones

- Cartones estables, distintos y numerados, en un catálogo vertical.
- Cada uno tiene 3 filas, 9 columnas y 15 números: cinco por fila.
- Columnas por decenas, números ordenados verticalmente y sin repeticiones dentro de un mismo cartón.
- Entre los 27 aparecen todos los números del 1 al 90. Puede haber un mismo número en distintos cartones, como en un bingo normal.
- Al escoger uno se muestra ampliado para jugar.
- Doble toque en una casilla numerada: ficha redonda, resplandor y golpe grave breve.
- Un toque sobre una casilla marcada retira la ficha y la luz.
- Las casillas vacías son decorativas.
- Paleta con colores propuestos y selector personalizado; cada cartón conserva su propio color.
- Bola de nieve a la izquierda y duende a la derecha, **dentro de la cabecera donde aparece el número del cartón**. Ambos siguen siendo interactivos al ampliar el cartón y en horizontal.
- Botón Salir para volver al bombo sin perder marcas.

### Cartón fijado durante la partida

El cartón elegido queda fijado al extraer la primera bola o al marcar su primer número. Si se elige después de empezar el sorteo, queda fijado al elegirlo. Ya no puede cambiarse hasta iniciar una nueva partida. Recargar la página conserva este bloqueo.

## Duende y bola de nieve interactivos

Se reutilizan los mismos personajes interactivos en la bienvenida, junto al bombo y en las cabeceras de los cartones. Algunas decoraciones laterales se ocultan en pantallas bajas para dejar espacio al juego.

### Duende

Al tocarlo felicita la Navidad y saluda. Se reemplazaron los primeros intentos de brazo y boca superpuestos, que parecían piezas separadas, por una secuencia de ocho poses completas del personaje. Así el brazo forma parte del cuerpo y el gesto facial es más sutil. La felicitación también aparece escrita.

### Bola de nieve

- Un toque: nieve dentro del cristal durante **30 segundos**, con campanitas.
- Dos toques rápidos: se iluminan las ventanas de la casa y las luces de colores del árbol.
- Tres toques rápidos: brillo mucho más intenso, con resplandor dorado y luces reforzadas.
- Nuevas pulsaciones renuevan la duración del efecto. Los toques múltiples deben ser seguidos, no separados por una pausa larga.

## Música, voz y frases

La melodía instrumental de Jingle Bells se sintetiza en la app, junto con campanitas y golpes de fichas. No se utiliza el sonido original del vídeo. La música baja de volumen mientras se anuncia un número.

Configuración incluye sonido general, música y voz de los números. Se utiliza una voz española del dispositivo cuando está disponible; si no, el número sigue siendo visible y la app informa de la limitación.

Hay una frase inicial para cada uno de los 90 números, combinando dichos y frases divertidas. En **Configuración → Frases de los números** se puede seleccionar un número, escribir una frase, escucharla y guardarla. Se puede recuperar la original. Una frase vacía deja únicamente el anuncio del número. Los cambios también se usan al repetirlo y se conservan en ese dispositivo.

## Guardado

La app guarda localmente el sorteo, bola pendiente, cartón seleccionado, bloqueo de cartón, fichas, colores, frases y preferencias de sonido. Cambiar de pantalla o recargar no borra estos datos.

Iniciar una nueva partida limpia el sorteo y las fichas y permite cambiar de cartón; mantiene las preferencias, colores y frases. Borrar los datos del navegador puede eliminar el estado guardado. No existe copia de seguridad en una cuenta ni sincronización automática.

## Adaptación e instalación

Se han preparado diseños para móvil vertical y horizontal, tableta y ordenador. En horizontal se aprovecha más espacio para el cartón. Hay controles de teclado y adaptación a la preferencia de movimiento reducido.

El icono de instalación es el duende con **fondo marrón claro cálido inspirado en sus botas**. Ese cambio de fondo corresponde al icono; la web mantiene su ambiente marfil navideño.

La aplicación incluye manifiesto y service worker para instalación y caché. Tras una primera carga completa mediante HTTPS puede funcionar sin conexión, siempre que el navegador conserve los recursos. Las voces del dispositivo pueden tener requisitos propios de conexión. No se ha certificado su funcionamiento en todos los modelos físicos de iPhone, Android, iPad, PC y Mac.

## Archivos de entrega

Los archivos necesarios para jugar están directamente en la carpeta Bingo. La carpeta `md` es la excepción solicitada expresamente para guardar esta documentación.

| Archivo | Función |
| --- | --- |
| `index.html` | Entrada de la web |
| `bingo.js` | Aplicación compilada, lógica y audio |
| `bingo.css` | Diseño y adaptaciones de pantalla |
| `pruna.mp4` | Vídeo de bienvenida intercambiable |
| `bombo.png` | Imagen del bombo |
| `duende-animado.png` | Secuencia de poses completas del duende |
| `globo.png` | Bola de nieve |
| `guirnalda.png` | Decoración navideña |
| `icon-duende.png` | Icono de instalación |
| `manifest.webmanifest` | Datos de instalación |
| `sw.js` | Caché y recursos sin conexión |
| `.nojekyll` | Archivo auxiliar para publicación estática |
| `README.md` | Instrucciones rápidas |
| `md/DOCUMENTACION_BINGO.md` | Este documento |

## Cambiar el vídeo

Sustituir **pruna.mp4**, al lado de index.html, conservando exactamente el nombre en minúsculas. Se recomienda MP4 con vídeo H.264. No hace falta recompilar para cambiarlo.

Después de publicar el cambio, abrir la app con conexión y dejar cargar el vídeo para renovar su copia local. Seguirá silenciado y en bucle con la música de la app.

## Publicación

La carpeta Bingo contiene una versión ya compilada para alojamiento estático. No hay que instalar React en el servidor ni ejecutar npm para subirla.

Para probarla en GitHub, subir el contenido de Bingo a la raíz del repositorio y activar GitHub Pages siguiendo el README. Subir los archivos al repositorio, por sí solo, no equivale a publicar la web. La publicación en el GitHub de Elisabeth queda a su cargo; no se ha realizado desde esta carpeta.

Existe una publicación privada anterior en Sites:
https://bingo-navideno-elisabeth-pruna.peachypark12.chatgpt.site

La entrega local y esa publicación son copias distintas; una modificación local no actualiza por sí sola el enlace de Sites. La etiqueta V1 se incorpora a la entrega local para GitHub.

## Código fuente y mantenimiento

La app está desarrollada con React 18 y Vite 5. El código editable se conserva fuera de la entrega para evitar incluir dependencias y carpetas de desarrollo en Bingo:

`/Users/elisabeth/.codex/visualizations/2026/11/08/01a1b9f6-cf41-7ee2-9c0c-682fb7cd7df5/bingo-source`

Los módulos principales son `src/main.jsx`, `src/style.css`, `src/game.mjs`, `src/audio.mjs`, `src/ChristmasFriends.jsx`, `src/RollingCage.jsx` y `src/sayings.mjs`.

Desde esa carpeta de código, `npm test` ejecuta las pruebas y `npm run build` genera la web. `scripts/flatten.mjs` prepara los archivos de nombres estables en Bingo. Se ha ajustado para ignorar las carpetas de documentación al crear la caché y copiar la entrega, conservando `md`.

Para futuros cambios, editar el código fuente y regenerar la entrega; evitar editar únicamente el JavaScript compilado. Actualizar la etiqueta de portada y este documento al cambiar de versión.

## Verificaciones realizadas durante el desarrollo

- Pruebas automáticas de los 27 cartones: forma, orden, distribución, estabilidad, diferencias y cobertura del 1 al 90.
- Simulación de 20 sorteos completos de 90 números sin duplicados, con bloqueo de bola pendiente y agotamiento.
- Pruebas de guardado, recuperación y reinicio; frases personalizadas; bloqueo y desbloqueo del cartón.
- Compilación de producción y comprobación de sintaxis del service worker.
- Comprobaciones en navegador de entrada de tres toques, vídeo silenciado en bucle, extracción, ampliación, colocación y repetición.
- Comprobaciones de marcar/desmarcar, colores, frases y conservación del estado.
- Revisiones de personajes compartidos, nieve, luces, triple toque y cartón fijado.
- Revisiones de tamaños de pantalla representativos: 390 × 844, 844 × 390, 820 × 1180 y 1366 × 900, sin desbordamiento lateral en los estados revisados.

Estas comprobaciones no sustituyen una prueba en cada dispositivo físico. El sorteo completo se verificó mediante pruebas automáticas de lógica, no recorriendo manualmente las 90 animaciones en todos los navegadores. La voz, la instalación y la persistencia de la caché dependen también del navegador y del sistema operativo.

## Historial resumido de V1

Se construyeron la bienvenida, bombo, tablero, cartones, sonido, guardado e instalación. Después se mejoraron el contraste de las bolas, el giro vertical del bombo y su coherencia visual; se equilibraron los personajes de portada; se integró la animación completa del duende; se añadieron nieve de 30 segundos, campanitas, luces normales e intensas; se extendieron los personajes a las cabeceras de cartones; se incorporaron las frases editables y el bloqueo de cartón. Finalmente se añadió el icono marrón del duende, se preparó la entrega para GitHub y se identificó la portada como V1.

### Corrección de V1 tras prueba en iPhone

Se corrigieron las rutas de las imágenes CSS del duende y la guirnalda al preparar la entrega plana para GitHub Pages. Apuntaban por error al directorio superior. También se añadió separación entre el botón Salir y el borde del cartón, tanto en vertical como en horizontal. Compilación y resolución local de todas las imágenes CSS comprobadas; pendiente de confirmar en el iPhone tras actualizar GitHub.

## V2 · Colores del cartón

La cabecera del cartón incorpora un botón de configuración con engranaje y área táctil de 44 píxeles. Abre una paleta de 14 colores variados más blanco puro, con nombres, selección indicada y botón Cerrar. Se mantiene el selector personalizado y el guardado individual por cartón. El acabado blanco utiliza fondo blanco y letras verdes oscuras para conservar la legibilidad. La portada identifica esta actualización como V2. Compilación de producción completada; entrega local lista para actualizar GitHub.

### V2 · Cartón horizontal en navegador

Añadido botón Pantalla completa, con salida Reducir y aviso si el navegador no admite la petición. Se solicita únicamente al pulsar el botón, como exige el navegador. En horizontal el cartón ajusta sus filas al alto visible comunicado por Visual Viewport, manteniendo cabecera, personajes, color y salida. Se ocultan instrucciones y controles secundarios para ganar espacio. Las pestañas de Safari no se pueden ocultar mediante CSS: el modo de pantalla completa depende del soporte y permiso del navegador. Compilación verificada; pendiente de prueba física en el iPhone de Elisabeth.

### Preferencias de fichas y siguiente fase compartida

Añadidos ajustes de fichas por cartón: a juego con el color del cartón, color personalizado independiente y ficha transparente con borde visible. El número se mantiene por encima de la ficha. La preferencia se conserva al recargar y al reiniciar; compilación y conservación de estas preferencias verificadas.

La autenticación del administrador y la separación segura de permisos aún NO están implementadas. Tampoco se ha implementado la sincronización entre participantes, reclamaciones de línea/bingo ni aprobación compartida. Se ha solicitado elegir el servicio de autenticación y sincronización antes de conectar esa fase: ocultar controles en una web estática no constituye protección del administrador.

### Reinicio con confirmación y regreso de bolas

Añadido botón Reiniciar partida junto a las acciones del bombo. La ventana navideña ofrece cancelar o confirmar y explica que se limpian números y fichas locales, conservando preferencias. Al confirmar se abre una compuerta gráfica superior y las bolas del tablero, incluida la pendiente del bol, vuelan de forma escalonada hasta ella. Durante la transición se bloquea la extracción; al terminar se reinicia el estado. Se ofrece transición reducida si el dispositivo solicita menos movimiento. Compilación y cinco pruebas de lógica aprobadas; la nueva animación todavía requiere revisión visual en dispositivo.

Decisión para la siguiente fase compartida: mantener GitHub y añadir autenticación por correo y contraseña para el administrador mediante un servicio externo. Los jugadores no necesitarán cuenta. Ese servicio y la protección del reinicio para el administrador siguen pendientes; el reinicio actual afecta únicamente al estado local.

### Saludo y campanillas

Añadido botón ilustrado del duende en el bombo: abre una felicitación animada local, con voz cuando está disponible y cierre mediante tres toques consecutivos (o botón accesible Cerrar). No se transmite aún a otros dispositivos. Cambiado el sonido de la bola de nieve por una frase de Jingle Bells sintetizada con campanillas resonantes; la música de fondo deja de emitir notas durante ese efecto y las pulsaciones nuevas reinician la secuencia sin apilar melodías. Compilación completada; pendiente de escuchar y revisar en dispositivo.

Elisabeth ha elegido Firebase como servicio para la siguiente fase. Se requiere configuración guiada paso a paso antes de implementar y verificar autenticación del administrador y avisos compartidos.

### Configuración de Firebase realizada por Elisabeth

Proyecto `bingo-de-eli`; app web registrada; correo/contraseña y acceso anónimo activados; usuario administrador UID `YRpJxetC1sVRqrd1W6S2IsM9yms2`; Firestore `(default)` creado en Madrid (`europe-southwest1`) en modo producción; dominio `elialtarriba.github.io` autorizado.

Se entrega `md/FIREBASE_REGLAS_INICIALES.txt` como paso inicial: acceso exclusivamente a ese UID. Estas reglas aún NO habilitan a invitados y deberán sustituirse por reglas específicas de partidas/cartones al conectar la aplicación. No implican que la app esté ya sincronizada. Publicación de reglas pendiente de confirmación por Elisabeth.

### Catálogo ampliado a 37 cartones

Añadidos diez cartones conservando los primeros 27. El conjunto de 37 cubre todos los números del 1 al 90; cada cartón tiene 15 números únicos, cinco por fila y orden por decenas. Se comprobaron también las combinaciones, no solo su colocación: no hay dos conjuntos iguales. Dos cartones comparten como máximo ocho números y una media de 2,18. Seis pruebas automáticas aprobadas y entrega local recompilada.

### Integración compartida en desarrollo (no activada en la entrega)

Se han añadido en el código fuente `shared.mjs`, `SharedBingo.jsx` y `firestore.rules`: acceso de administradora por UID, acceso anónimo, reserva transaccional de cartones, avisos de línea/bingo, revisión manual, saludo compartido y preferencias individuales. Los formularios de entrada se han revisado en navegador. Faltan las pruebas integrales de permisos y de dos dispositivos y publicar las reglas definitivas. No se han sustituido las reglas iniciales que Elisabeth acaba de publicar.

La entrega de Bingo sigue funcionando en modo local mientras se valida la conexión. La fase compartida está protegida por la opción de compilación `VITE_SHARED_BINGO=true`; no activarla como versión de entrega hasta completar las comprobaciones. Las reglas en el código fuente son un borrador pendiente de validar, no instrucciones para publicar todavía.

## Integración Firebase terminada para entrega

Modo compartido activado. Añadidos login de administradora por UID, invitados anónimos, 37 reservas exclusivas, lista de participantes, marcas y colores por jugador, pausa atómica al reclamar línea/bingo, revisión manual, felicitaciones y saludo compartidos, reinicio con nueva ronda y desbloqueo de cartones. Se mantiene la bienvenida de tres toques con Pruna silenciada. La cuenta anónima se conserva al salir de la partida para recuperar el mismo cartón.

Validación: seis pruebas de lógica aprobadas; suite de permisos del emulador oficial aprobada, incluyendo intentos de modificar otros cartones, autoaprobar premios, reservar dos cartones, reservar fuera de rango, concurrencia y bloqueo tras marcar/desmarcar. Comprobados por clientes independientes los eventos de aprobación, saludo y nueva ronda. Navegador: login ficticio, creación de sala, invitado separado, cartón 37, marcado, extracción, reclamación y pantalla de revisión manual. Compilación de producción y sintaxis del service worker comprobadas.

No se han publicado reglas ni datos de prueba en el Firebase real. Pendientes de Elisabeth: publicar md/FIREBASE_REGLAS_DEFINITIVAS.txt, subir la entrega a GitHub y realizar la primera prueba real. No hace falta cambiar el plan Spark para estas pruebas dentro de sus cuotas. Las partidas compartidas requieren conexión y no son una modalidad sincronizada sin Internet.

### Botón de música accesible y voz del duende

Añadida barra superior con botón Música encendida / Escuchar música en bienvenida, acceso, bombo y cartones. Conserva la preferencia local y se coordina con el ajuste de música de la administradora. El canal de música se silencia de inmediato sin silenciar los efectos ni la voz; al encender desde el botón también se reactiva el sonido general si estaba apagado. Ajustado el espacio del cartón en horizontal para reservar el alto del botón.

La felicitación utiliza ahora menos alteración de velocidad y tono y el texto Ho, ho, ho con una pausa. Sigue siendo síntesis de voz del dispositivo: no se ha incorporado una grabación humana ni se garantiza una risa natural. Para una interpretación de Papá Noel real se necesita una grabación de voz autorizada. Compilación y comprobación de preferencia encendida/apagada correctas; no se ha evaluado de oído en el iPhone de Elisabeth.


## Acceso simplificado y saludo compartido — 8 noviembre 2026

Se sustituyen las pestañas ambiguas Jugar/Administradora por un acceso de jugadores y un enlace explícito «Soy la administradora». El formulario indica «Entrar como administradora». Con la sesión de Elisabeth iniciada se muestra directamente su panel, «Crear una partida nueva» y un apartado plegable «Volver a una partida anterior». Una partida nueva genera su código; no hay que introducirlo. Las invitaciones abren directamente el formulario de nombre, sin acceso administrativo ni campo de código.

Se corrige el selector CSS del duende en el saludo compartido: ahora tiene dimensiones explícitas también dentro del aviso compartido. La sustitución por el nuevo vídeo y audio humano/cantado queda pendiente de recibir el archivo: la ruta temporal del adjunto no estaba disponible. Compilación y seis pruebas de lógica correctas; acceso de jugadores, formulario administrativo e invitación comprobados en navegador local.


## Vídeo del duende con Jingle Bells — 8 noviembre 2026
El archivo duende-baile.MP4 (8,04 segundos, sin audio original) se usa ahora al tocar los duendes, incluidos los cartones y avisos compartidos. El aviso compartido reproduce en bucle hasta cerrarlo. Se ha creado duende-musica.wav, un arreglo instrumental sintetizado del estribillo de Jingle Bells, de la misma duración, con campanillas, acordes y bajo. El reloj del vídeo corrige la sincronización del audio, se detiene al terminar o desmontar el duende y respeta los interruptores de música y sonido. La música de fondo deja de emitir notas mientras baila. Se retira el saludo de voz sintética del componente. No incluye voz humana ni canto. Si el navegador bloquea audio automático en un aviso remoto, tocar el duende permite iniciarlo.
Compilación y seis pruebas de lógica superadas; reproducción del vídeo verificada en navegador local. Subir también duende-baile.MP4 y duende-musica.wav junto con el resto de archivos actualizados.


### Baile en bucle y cierre con dos toques
Todos los duendes repiten el vídeo en bucle. Dos toques rápidos cierran el baile y detienen su música. Los avisos compartidos y el saludo local también se cierran con dos toques (sustituye los tres anteriores). Todavía no se ha incorporado una grabación humana de hohoho.


### Saludo a pantalla completa y separación del bombo
El saludo local y el compartido usan una vista que ocupa toda la ventana, sin encabezado Hohoho. La instrucción se muestra discretamente al pie solo al comenzar a reproducirse el vídeo. El saludo se cierra con tres toques rápidos o con el botón de cierre accesible; los duendes pequeños siguen cerrándose con dos. La administradora ve su propio saludo inmediatamente al enviarlo. En móviles el bombo ocupa el centro y se reserva un espacio lateral para cada adorno, evitando el contacto con el duende. Actualización compilada; pendiente de comprobar en los dispositivos de la partida real.


## Versión V3
Desde el 8 de noviembre de 2026, la versión visible es V3. Se actualizan las etiquetas de bienvenida y acceso y se añade V3 al pie de la pantalla del bombo, alineada a la derecha, en el flujo de la página para no tapar controles.


## Bienvenida de tres páginas — V3
Duende, bola de nieve grande y Pruna. Los puntos cambian de página y el desplazamiento horizontal cambia de escena (sobre la bola se reserva el arrastre para provocar nieve). Solo el duende tiene el botón de entrada al bingo; ahora un toque abre el acceso. Pruna usa pruna.mp4, silenciado y en bucle, sustituible conservando ese nombre. Se elimina el borde CSS heredado por el vídeo del duende.
La bola: un toque ilumina casa y árbol; dos aumentan el brillo; tres activan bola-nieve.MP4 en bucle. Arrastrar produce 100 copos durante 30 segundos. La barra permite parar o reanudar la música. Grabación instrumental Jingle Bells de Kevin MacLeod, piano y vientos, sin voz cantada, sustituye al fondo sintetizado. Archivo navidad.mp3. Créditos y licencia visibles en la barra.
Fuente: https://commons.wikimedia.org/wiki/File:Jingle_Bells.ogg
Autor: Kevin MacLeod (incompetech.com). Licencia CC BY 3.0: https://creativecommons.org/licenses/by/3.0/ . Grabación sin modificar, reproducida en bucle; MP3 transcodificado por Wikimedia.
Comprobados en navegador los puntos, la ausencia de botones de entrada en bola/Pruna, el triple toque y la reproducción de los dos vídeos. Compilación y seis pruebas de lógica correctas. Gestos táctiles reales pendientes de prueba en iPhone.
Actualizar bingo.js, bingo.css, index.html, sw.js y añadir bola-nieve.MP4 y navidad.mp3.


## Versión V4 — 8 noviembre 2026
Se actualizan a V4 las etiquetas visibles de bienvenida, acceso y esquina inferior de la pantalla del bombo. Esta versión incluye las tres páginas de bienvenida y la bola animada descritas arriba.


## Pruna con voz y música — 9 noviembre 2026
Se sustituye pruna.mp4 por la edición de 12,04 segundos. La voz original se conserva solo hasta 4,43 segundos, según el punto indicado por Elisabeth. Jingle Bells (Kevin MacLeod, CC BY 3.0, créditos en la app) suena al 10 % durante la frase y sube al 38 % después, con salida gradual al final. La página de Pruna reproduce el audio del vídeo respetando el botón de música, pausa el fondo mientras se reproduce y ofrece un botón de reproducción si el navegador bloquea el inicio automático. Exportación macOS completada y duración/pistas verificadas.


## Espaciado, lectura completa y bombo — 9 noviembre 2026
Se unifican márgenes entre título, imagen/vídeo y controles de las tres páginas. Se elimina el máximo de 160 caracteres tanto del editor como de la recuperación del texto. La lectura conserva todo el párrafo y sus signos, divide por cláusulas y añade pausas para comas y puntos; mantiene referencia a la locución activa. Colocar una bola no corta su lectura. Preguntas y exclamaciones se conservan; la entonación depende de la voz del dispositivo.
El giro usa la zona de jaula del vídeo suministrado (bombo-giro.mp4), excluyendo visualmente la rampa y las bolas extra. La caída de una bola se anima aparte y se bloquea otra extracción mientras haya una pendiente. No se ha reeditado el contenido del archivo fuente; se limita y recorta su reproducción en la app. Control visible de música junto al bombo. Al girar se pausa el fondo, se silencia la voz y se reproducen golpes sintetizados de bolas; después se recupera la música si estaba activada.
Nueve pruebas automáticas correctas, incluyendo textos largos y puntuación. Compilación correcta. Comprobado en navegador local: una bola pendiente y manivela bloqueada tras extraer; control de música visible. Pendiente comprobación de entonación y acabado de animación en el iPhone real.
Archivos para actualizar: bingo.js, bingo.css, sw.js y bombo-giro.mp4; documentación opcional. Sigue V4.

### Ayuda del bombo integrada
Se añade «Cómo usar el bombo» junto al control de música, con título y cuatro pasos en una ventana. Se eliminan las flechas y el indicador ×2 superpuestos y las instrucciones permanentes bajo el bombo. Se conserva únicamente el estado de preparación/bola lista. Controles centrados y adaptados al ancho móvil. Compilación correcta.

## Entrega V5 — 9 de noviembre de 2026

- Inicio blanco con nieve, árbol de estilo artesanal y botón Seguir que activa la música y abre el carrusel.
- Accesos Entrar a jugar y Administradora en la página del gnomo. Deslizar también sobre la zona de puntos cambia de página; arrastrar la bola sigue reservado a la nieve.
- Botones de acceso comprobados dentro de la pantalla, sin desbordamiento horizontal, en vistas de navegador 375×667, 390×740, 844×390, 820×1180 y 1440×900. No equivale a pruebas físicas de todos los dispositivos.
- Icono de instalación sustituido por el bombo aportado por Elisabeth.
- Bombo con columnas independientes para el gnomo, máquina y bola de nieve. Botones visibles de música y ayuda.
- Lectura por fragmentos conservando el texto completo y su puntuación. La entonación concreta depende de la voz instalada.
- Nueve pruebas automáticas correctas: cartones, sorteo, conservación y lectura de textos.
- El vídeo del bombo se usa recortado visualmente en la jaula; la caída de una única bola la controla la app. El archivo original del vídeo no se ha retocado fotograma a fotograma.

### Preferencia permanente de entregas
Cada entrega que requiera actualizar GitHub debe incrementar la versión visible y comunicar a Elisabeth la versión y la lista exacta de archivos para subir. No publicar automáticamente. Agrupar los cambios de una misma entrega bajo una sola versión.

## V6 — familias independientes y administración principal

Elisabeth conserva su UID, correo y contraseña de Firebase. Ninguna cuenta real se ha borrado ni modificado durante el desarrollo. Las partidas antiguas sin ownerId siguen perteneciendo a Elisabeth.

Cada familia solicita una cuenta con correo y contraseña desde Administradora → Soy nuevo. Su registro queda pendiente hasta que Elisabeth lo aprueba. Después puede crear partidas con códigos independientes. Los jugadores siguen entrando con nombre e invitación sin contraseña.

Configuración → Administración general, exclusiva de Elisabeth, muestra administradores activos, solicitudes, partidas y participantes inscritos en cada partida. No mide presencia en línea. Permite aprobar, suspender o retirar administradores y retirar/restaurar partidas, siempre con confirmación. La retirada de un administrador revoca sus permisos de juego, pero no borra su identidad de Firebase Authentication. La retirada de una partida es recuperable; no elimina físicamente sus documentos. La cuenta principal no puede suspenderse ni retirarse desde este panel.

No hay límite programado de diez partidas: pruebas del emulador verifican doce familias coexistentes, aislamiento entre propietarios, prohibición de autoaprobación, suspensión, retirada, recuperación y compatibilidad con partidas anteriores. Esto no es una prueba de carga ni garantiza capacidad ilimitada: Firebase aplica sus cuotas.

Árbol actualizado con más nieve blanca y luces doradas intensas. Se mantiene V6 como única versión de esta entrega.

Validación: nueve pruebas de juego/voz y dos suites de reglas Firebase correctas. Acceso principal, creación local de partida, panel desde configuración y confirmación móvil revisados con cuenta ficticia en emulador; no se usaron credenciales reales.

Activación pendiente por Elisabeth: publicar en Firebase las reglas completas de md/FIREBASE_REGLAS_DEFINITIVAS.txt y actualizar GitHub. No crear de nuevo ni borrar la cuenta principal. Las reglas son imprescindibles para habilitar las nuevas familias y proteger el panel.

Archivos V6 respecto de V5: bingo.js, bingo.css, sw.js, arbol-navidad.png. Actualizar también los documentos md si se conserva la documentación en GitHub. Si aún no se subió V5, añadir index.html, manifest.webmanifest, icon-bombo.png y bombo-giro.mp4.

## V7 · Correccions i manuals — 9 de novembre de 2026

Aquesta secció substitueix les indicacions històriques anteriors que hi entren en contradicció. Entrega local a Bingo; publicació a càrrec d’Elisabeth segons md/ACTIVAR_V7.md.

1. Eliminada l’obertura d’ajuda en tocar una sola vegada la manivela. Es manté el doble toc per extreure i l’activació amb teclat. Botó Cómo usar el bombo al costat de Repetir número.
2. Vídeo del gnomo dibuixat en un canvas amb eliminació del fons clar connectat a les vores, preservant els blancs interiors. El salut compartit té fons transparent, amb el joc visible al darrere. Es conserva el vídeo original. Música activada amb el ball; els navegadors poden exigir un toc per a l’àudio remot.
3. Pruna utilitza un canal independent del control musical: el vídeo no queda silenciat quan s’apaga la música. Pausa la música de fons mentre es reprodueix; manté l’opció de reproducció manual si el navegador bloqueja l’inici. La música ja mesclada dins del vídeo forma part del mateix àudio que la veu.
4. Diagnòstic de la icona: index i manifest apuntaven a icon-bombo.png, absent a l’entrega perquè flatten només copiava icon-duende.png. Corregit el procés de còpia; afegides icones PNG de 512, 192 i 180 píxels. Service worker registrat per a tots els rols en producció; arxius ocults exclosos de la llista de precàrrega.
5. Registre d’administradors amb nom i cognoms; editor de perfil per completar registres antics. Panell general només per al UID principal, amb nom, cognoms i correu. Regles de Firestore permeten editar noms propis o des del principal sense alterar permisos. Retirada de jugador transaccional: elimina registre, reserva i reclamació i desbloqueja el sorteig si aquell jugador tenia l’avís actiu. Es pot tornar a entrar amb invitació; no és un veto permanent. Cap dada real modificada.
6. Retirats els noms suggerits Invitado 1–10 del formulari de jugadors.
7. Manuals en català, amb les etiquetes dels botons en castellà tal com apareixen a l’app. Jugadors: arbre i capçalera del cartró. Administradors: accés i configuració. Elisabeth: versió completa de tots els capítols, més panell general i manteniment. Il·lustracions amb els recursos de l’app i exemples gràfics de cartró/premis, índex clicable, retorn a l’índex, tancament i navegació per teclat. Finestres renderitzades fora del context del cartró perquè no quedin retallades ni sota la barra de música.

Validació: 9 proves de joc i veu; 3 suites Firebase incloent 12 famílies aïllades, privacitat dels perfils, protecció del principal i execució real de la funció transaccional de retirada contra l’emulador. Revisió de navegador amb comptes ficticis: un toc no obre ajuda, doble toc extreu una bola, col·locació, gnomo transparent sobre el joc, Pruna sense silenci amb música apagada, formulari de nom, reserva de cartró, manual i navegació d’índex, confirmació/cancel·lació de retirada, panell principal. Cartró i manual revisats a 390×844 i 844×390. Instal·lació i escolta en dispositius físics pendents després de publicar.

Nou codi font de manteniment: `/Users/elisabeth/.codex/visualizations/2026/11/09/01a1c0fe-3517-7d02-bce9-4fa24342a565/bingo-source`. Inclou src/Manual.jsx, src/TransparentDance.jsx, src/AdminProfile.jsx, src/remove-player.mjs i tests/firebase/v7.test.mjs. No editar només bingo.js compilat.

Arxius web V7: bingo.js, bingo.css, index.html, sw.js, manifest.webmanifest, icon-bombo.png, icon-bombo-192.png, apple-touch-icon.png. Regles i documentació: README.md, md/ACTIVAR_V7.md, md/DOCUMENTACION_BINGO.md, md/FIREBASE_REGLAS_DEFINITIVAS.txt.
