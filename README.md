# Ejercicio de evaluación - Sprint 2
El ejercicio consiste en desarrollar una página web con un juego de "Adivinar el número". Este juego consiste en que el juego genera un número al azar entre 1 y 100, y el jugador tiene que adivinarlo. El juego le da pistas de si el número que prueba es demasiado alto o bajo, y va contabilizando el número de intentos. Hasta que al final el jugador acierta el número.

## 1. Maquetación

Tenemos 2 partes diferenciadas: la parte principal del juego y el histórico de puntuaciones, a la derecha.
En la parte principal, el jugador introduce un número y da al botón de probar. En la parte azul aparecen las pistas sobre si es muy alto o bajo, o si lo ha conseguido. En rojo en la esquina superior derecha aparece el número de intentos realizados. Cuando consigue acertar, aparece una sección sobre las pistas para introducir el nombre y guardar la puntuación en el histórico.

Cuando la pantalla del dispositivo es menor que 900px la sección de histórico se coloba debajo del juego.

### 2. Juego básico

Vamos a realizar primero una versión sencilla del juego. Para ello tenemos que realizar las siguientes funcionalidades desde JavaScript:

- Generar un número aleatorio con la ayuda de Math.random y Math.ceil.
- Al pulsar el botón de prueba comparamos el número que el usuario ha escrito en el input con el número aleatorio, y pintamos el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "acertado").
- Actualizamos el contador de intentos cada que el usuario pruebe.

### 3. Juego con histórico

Para realizar una versión completa del juego nos faltan las siguientes características:
- Cuando el jugador acierte el número, aparece una sección para introducir su nombre y un botón para guardar en el histórico.
- Cuando el jugador escriba su nombre y pulse en guardar, almacenaremos el nombre del jugador y el número de intentos en una estructura de datos; recomendamos usar un objeto para almacenar la información de cada elemento del histórico (nombre e intentos).
- Una vez guardado en el histórico, automáticamente la sección de histórico se repinta para mostrar los nuevos datos
después de lo anterior, también automáticamente, se prepara el juego para una nueva partida.
- Se oculta la sección para introducir el nombre
- Se genera un nuevo número aleatorio
- Se pone el contador de intentos a 0
- Se limpia el campo de feedback
- Se limpian los inputs
- En esta nueva versión del juego podremos jugar varias partidas y ver cómo se genera la información de histórico. Pero esta información se perderá al recargar la página.

### Bonus track

Las siguientes característcas han sido añadidas al proyecto:
- Diseño "Material design".
- Efecto Typewriter en cabecera.
- Pistas con imagenes.
- Sección de puntuaciones desplegable.
- Puntuaciones ordenadas de menor a mayor.
