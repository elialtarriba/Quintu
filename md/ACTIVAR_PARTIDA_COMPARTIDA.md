> Document històric. Per a l’entrega actual segueix [ACTIVAR_V7.md](ACTIVAR_V7.md).

# Activar el bingo compartido

La carpeta Bingo ya contiene la versión conectada a Firebase. No necesitas instalar npm ni Firebase en tu ordenador para subirla a GitHub.

## 1. Publicar las reglas definitivas

Abre `md/FIREBASE_REGLAS_DEFINITIVAS.txt`, selecciona todo y copia su contenido. En Firebase → Bingo de Eli → Firestore → Reglas, sustituye TODO el código anterior por el contenido del archivo y pulsa Publicar. No mezcles las reglas iniciales y las definitivas.

Estas reglas se han compilado y probado en el emulador oficial. Solo la cuenta de administradora indicada por su UID puede controlar el sorteo, reiniciar, publicar saludos y aprobar premios. Los invitados solo pueden modificar su propio registro y reservar un cartón libre; reclamar un premio no permite aprobarlo.

## 2. Actualizar GitHub

Sube los archivos de Bingo a la raíz del mismo repositorio, sustituyendo los anteriores. Mantén GitHub Pages activado en la rama y carpeta habituales. Espera a que termine la publicación y abre tu enlace con conexión. Si conservas una pestaña antigua, ciérrala y vuelve a abrirla.

El enlace privado de Sites corresponde a una publicación anterior y no se actualiza al subir los archivos a GitHub.

## 3. Crear y compartir la partida

Tras los tres toques de bienvenida, pulsa Administradora e introduce el correo y contraseña que creaste en Firebase. Pulsa Crear una partida. Aparecerá un código de ocho caracteres y el botón Copiar invitación. Envía ese enlace a los jugadores.

Los invitados entran con su nombre y el código, sin contraseña. Pueden escoger nombres Invitado 1 a Invitado 10. Hay 37 cartones: al reservar uno deja de estar disponible para los demás. La lista Participantes está en la barra superior y también en Configuración de la administradora. Muestra nombre, cartón y última actividad; no representa una detección exacta de si el dispositivo está encendido.

## 4. Jugar y comprobar premios

El bombo funciona como antes. Los cartones se marcan manualmente con doble toque; un toque quita la ficha. Al empezar el sorteo o marcar por primera vez se fija el cartón hasta el siguiente reinicio. Las preferencias de cartón y fichas se guardan en Firebase para ese invitado.

¡LÍNEA! y ¡BINGO! envían una reclamación y pausan el sorteo. Todos los cartones ven el aviso. La administradora abre Comprobar aviso: se muestran el cartón, las marcas y los números cantados. La comprobación es humana. Dar por bueno envía la felicitación; Continuar sin validar rechaza el aviso y permite seguir. Solo se tramita una reclamación a la vez.

Saludo del duende envía la animación a los jugadores. Cada persona puede cerrarla con tres toques seguidos o con Cerrar aviso. La voz depende del navegador y de las voces españolas disponibles; el texto siempre se muestra.

Reiniciar partida pide confirmación, devuelve las bolas al bombo e inicia otra ronda. Las fichas anteriores dejan de mostrarse en todos los cartones y vuelven a permitir cambiar de cartón; los colores se conservan.

## 5. Primera prueba real

Entra como administradora desde un dispositivo y como invitado desde otro. Prueba elegir cartón, marcar, sacar una bola, cantar línea, rechazar o aceptar el aviso, enviar el saludo y reiniciar. No hace falta instalar la app. La partida compartida necesita Internet.

Se han probado permisos, reservas simultáneas, avisos, aprobación y reinicio con datos ficticios en el emulador oficial. También se ha revisado en navegador el login, la entrada anónima, el cartón 37, la extracción y el aviso de línea con revisión. Falta la primera prueba en el Firebase real después de publicar estas reglas y actualizar GitHub; no se ha utilizado ni solicitado tu contraseña.

## Recuperar una partida

La administradora puede volver a entrar usando el código. Un invitado conserva su identidad en el mismo navegador y puede volver a entrar al mismo código para recuperar su cartón. No borrar los datos del navegador ni usar una sesión privada si se quiere conservar esa identidad. Cambiar de dispositivo no recupera automáticamente el cartón de un invitado sin cuenta.
