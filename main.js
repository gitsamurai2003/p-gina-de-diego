$(document).ready(function(){

  var tema=$("#theme");
  var cargado=localStorage.getItem("color");
  //si no existe color guardado en el localstorage va a retornar null y lo validamos con un if
  if(cargado==null){
      cargado="css/blue.css";
  }
//cargamos el tema
  tema.attr("href",cargado);

   //slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        pager:false

      });

    //posts
    var posts = [
      {
        title:'prueba de titulo 1',
        date: 'publicado el dia ' +  moment().date() + " "+ "de " +  moment().format("MMMM")  +  " "+ "del " +  moment().format("YYYY"),
        content:'Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona,desarrollado por Respawn Entertainment y publicado por Electronic Arts.Fue lanzado para Microsoft Windows, PlayStation 4 y Xbox One el 4 de febrero de 2019.En julio de 2020 se anunció que el título llegaría a Steam a finales de 2020, junto al juego cruzado entre las plataformas.consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el juego sería lanzado en formato de lanzamiento regional limitado para teléfonos inteligentes en algunos países seleccionados, y posteriormente sería lanzado de manera global, este port está desarrollado por Tencent aunque es supervisado por el mismo Respawn'
      },
      {
        title:'prueba de titulo 2',
        date: moment().format("MMM Do YYYY"),
        content: 'Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona,desarrollado por Respawn Entertainment y publicado por Electronic Arts.Fue lanzado para Microsoft Windows, PlayStation 4 y Xbox One el 4 de febrero de 2019.En julio de 2020 se anunció que el título llegaría a Steam a finales de 2020, junto al juego cruzado entre las plataformas.consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el juego sería lanzado en formato de lanzamiento regional limitado para teléfonos inteligentes en algunos países seleccionados, y posteriormente sería lanzado de manera global, este port está desarrollado por Tencent aunque es supervisado por el mismo Respawn'
      },
      {
        title:'prueba de titulo 3',
        date: moment().format("MMM Do YYYY"),
        content: 'Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona,desarrollado por Respawn Entertainment y publicado por Electronic Arts.Fue lanzado para Microsoft Windows, PlayStation 4 y Xbox One el 4 de febrero de 2019.En julio de 2020 se anunció que el título llegaría a Steam a finales de 2020, junto al juego cruzado entre las plataformas.consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el juego sería lanzado en formato de lanzamiento regional limitado para teléfonos inteligentes en algunos países seleccionados, y posteriormente sería lanzado de manera global, este port está desarrollado por Tencent aunque es supervisado por el mismo Respawn'
      },
      {
        title:'prueba de titulo 4',
        date: moment().format("MMM Do YYYY"),
        content:'Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona,desarrollado por Respawn Entertainment y publicado por Electronic Arts.Fue lanzado para Microsoft Windows, PlayStation 4 y Xbox One el 4 de febrero de 2019.En julio de 2020 se anunció que el título llegaría a Steam a finales de 2020, junto al juego cruzado entre las plataformas.consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el consiguió atraer 1 millón de jugadores únicos en ocho horas, 2,5 millones en el primer día y 50 millones en tres días. El 7 de marzo de 2022 el juego sería lanzado en formato de lanzamiento regional limitado para teléfonos inteligentes en algunos países seleccionados, y posteriormente sería lanzado de manera global, este port está desarrollado por Tencent aunque es supervisado por el mismo Respawn'
      },
    ]; 

    posts.forEach((item,idex) => {
      var post = `<article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>
        ${item.content}
    </p>
    <a href="#" class="button-more">Leer mas</a>
  </article>
  `;
     $("#posts").append(post);
    });

    $("#to-yellow").click(function(){
      //cargamos la ruta del css en una variable
      let yellow="css/yellow.css"; 
      tema.attr("href",yellow);
       // lo guardamos en el localStorage
      localStorage.setItem("color",yellow)
    });
 
    $("#to-red").click(function(){
      let red="css/red.css";
      tema.attr("href",red);
      localStorage.setItem("color", red);
    });
 
    $("#to-blue").click(function(){
        let blue="css/blue.css"
        tema.attr("href",blue);
        localStorage.setItem("color", blue);
    });  
});