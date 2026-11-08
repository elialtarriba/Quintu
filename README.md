# Bingo navideño de Elisabeth

Esta carpeta contiene la web terminada. No necesita instalar nada ni compilar: los archivos del juego están juntos. La carpeta md contiene la documentación detallada.

## Publicar en GitHub

1. Crea un repositorio en GitHub y sube TODOS los archivos de esta carpeta, sin meterlos dentro de otra carpeta.
2. Abre **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Elige la rama **main**, la carpeta **/(root)** y pulsa **Save**.
5. Cuando termine la publicación, GitHub mostrará el enlace de tu bingo en esa misma página.

Si antes habías elegido GitHub Actions, cambia ahora a Deploy from a branch. Esta versión ya está compilada y no necesita un flujo de Actions.

Documentación: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Cambiar el vídeo de Pruna

Sustituye **pruna.mp4** por tu nuevo vídeo, conservando el mismo nombre y la extensión en minúsculas. Está al lado de index.html. Para máxima compatibilidad, exporta MP4 con vídeo H.264.

Guarda el cambio en la rama main. GitHub Pages actualizará la web automáticamente. El vídeo seguirá en bucle, silenciado y acompañado de la melodía de Jingle Bells de la app.

Después de publicar, cierra y vuelve a abrir la app con conexión y deja que el vídeo cargue. La app renovará también su copia para usarlo sin conexión.

## Icono del móvil

El icono es el duende sobre un fondo marrón claro cálido. Si ya habías añadido una versión con el icono anterior, elimina el acceso directo y vuelve a añadirlo desde el navegador tras actualizar la web.

## Jugar e instalar

- Tres toques para entrar. El primero inicia la música y el vídeo.
- Desliza sobre el bombo para girarlo. Dos toques en la manivela sacan una bola; un toque muestra ayuda.
- Toca el bol para descubrir el número. Toca la bola grande para colocarla en el tablero.
- Carta de bingo muestra los 27 cartones. Dos toques marcan una casilla; uno retira la ficha. La paleta cambia el color del cartón.
- Gira el móvil a horizontal para ver el cartón más grande. La bola y el duende están dentro de la cabecera y siguen siendo interactivos.
- Al sacar la primera bola o marcar el primer número, el cartón queda fijado hasta iniciar una partida nueva. Si eliges un cartón después de empezar el sorteo, queda fijado al elegirlo.
- Configuración → Frases de los números: elige una bola, escribe tu frase, escúchala y pulsa Guardar frase. Se conservará en este dispositivo y también se dirá al repetir el número.
- Toca la bola de nieve para ver nevar durante 30 segundos y escuchar campanitas. Dos toques encienden las ventanas y las luces de colores del árbol; tres toques rápidos activan un brillo mágico mucho más intenso.
- Toca el duende para escuchar su felicitación y ver cómo saluda con una animación de poses completas. Si el dispositivo no tiene voz española, la felicitación se muestra por escrito.
- iPhone/iPad: Safari → Compartir → Añadir a pantalla de inicio.
- Android: menú del navegador → Instalar aplicación / Añadir a pantalla de inicio.
- En PC/Mac también se puede jugar con ratón y teclado.

Cada dispositivo guarda su propia partida y sus fichas; no se sincronizan entre jugadores. La voz española depende de las voces disponibles en el dispositivo. La app puede funcionar sin conexión tras una primera carga completa en HTTPS; el navegador puede borrar la caché. No abras index.html con doble clic: utiliza el enlace publicado.

## Archivos principales

- index.html: entrada de la web.
- bingo.js: funcionamiento del juego, melodía y efectos.
- bingo.css: diseño adaptable a móvil, tableta y ordenador.
- pruna.mp4: vídeo intercambiable.
- bombo.png, duende-animado.png, globo.png, guirnalda.png: decoración.
- manifest.webmanifest, iconos y sw.js: instalación y uso sin conexión.

Creado por Elisabeth. Disfruta de esta app y comparte la alegría. Si la utilizas, menciona a Elisabeth.

## Documentación de V1

El historial y la explicación completa están en [md/DOCUMENTACION_BINGO.md](md/DOCUMENTACION_BINGO.md). La portada muestra V1 debajo de los créditos.
