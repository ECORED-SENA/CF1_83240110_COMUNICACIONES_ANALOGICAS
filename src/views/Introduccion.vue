<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 #[b Las señales analógicas] juegan un rol fundamental en la transmisión de información a través de diversos medios y frecuencias. Estas señales, a diferencia de las digitales, representan una variación continua de la onda, permitiendo captar una amplia gama de valores en intervalos específicos de tiempo. Su uso es habitual en fenómenos naturales como el sonido y la luz, los cuales dependen de variaciones constantes para su propagación y captación.
        .tarjeta.p-4(style="background-color: #c2eef6 ")
          .row
              .col-lg-auto
                img(src="@/assets/curso/temas/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El #[b espectro electromagnético], que abarca desde las #[b ondas de radio] hasta los rayos gamma, es el medio en el que se propagan las #[b señales analógicas]. Cada tipo de onda tiene aplicaciones específicas en campos como #[b las telecomunicaciones y la radiodifusión], donde la regulación es esencial para su funcionamiento. En este contexto, la multiplexación permite combinar diferentes canales de información en un mismo medio, optimizando la transmisión de datos en sistemas de comunicación.
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/2.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="zoom-in"): img(src='@/assets/curso/temas/3.png', alt='')
      .col-lg-5.mb-lg-0.mb-3(data-aos="zoom-in")
        p.mb-0 Para transmitir estas señales, se emplean medios guiados (como cables y fibra óptica) y no guiados (como el aire o el vacío), los cuales poseen características propias en cuanto a capacidad, velocidad y vulnerabilidad al ruido. Esta interferencia, o ruido, representa una distorsión que puede afectar la calidad de la señal, razón por la cual se requiere el uso de técnicas y equipos de adaptación para mejorar su recepción y minimizar pérdidas.
      .col-lg-3.col-6(data-aos="zoom-in"): img(src='@/assets/curso/temas/4.png', alt='')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
