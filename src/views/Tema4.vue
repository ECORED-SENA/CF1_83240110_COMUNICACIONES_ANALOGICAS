<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Medios de transmisión de las señales analógicas


    .bg-color-5.p-4.p-md-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          img(src='@/assets/curso/tema4/1.svg', alt='', style="max-width: 205px").mx-auto.px-4

        .col-lg
          .bg-color-white.p-4.p-md-5
            p.mb-0 El medio de transmisión es el entorno físico (agua, aire o vacío) por el cual se desplaza la información entre sistemas de comunicación que procesan señales analógicas. Los medios de transmisión pueden clasificarse en dos tipos: guiados y no guiados.


    .titulo-tres: h3 Medios no guiados

    p(data-aos="fade-up").mb-5 Los medios no guiados son utilizados para señales que no requieren un material físico para propagarse y se desplazan a través del aire. La transmisión se realiza mediante antenas, que pueden ser direccionales (en un solo sentido) u omnidireccionales (dispersando la señal en 360° y a grandes distancias). Estos medios son sensibles a interferencias causadas por cambios climáticos.

    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-9
        LineaTiempoD.color-acento-contenido
          .row(numero="1" titulo="Cable coaxial")
            .col-lg
              p.mb-0 Compuesto por un hilo de cobre central, recubierto por una malla y elementos conductores separados por aislantes plásticos. Requiere adaptadores con conectores apropiados en los extremos y es común en redes de televisión, con una velocidad de transmisión de hasta 10 Mbps (106 bits por segundo).
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema4/3.png", alt="")
          .row(numero="2" titulo="Fibra óptica")
            .col-lg
              p.mb-0 La información se transmite en forma de pulsos de luz. Un extremo tiene un emisor de luz (LED o láser) y el otro un detector de luz. Alcanza velocidades de varios Gbps (109 bits por segundo), aunque su instalación y mantenimiento son costosos.
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema4/4.png", alt="")
          .row(numero="3" titulo="Par trenzado")
            .col-lg
              p.mb-0 Similar al cable telefónico, tiene 8 hilos y conectores RJ 45. Clasificado en categorías según el número de trenzas por unidad de longitud, donde más trenzas implican mayor velocidad de transferencia. Dos tipos principales: UTP (sin apantallamiento) y STP (con apantallamiento).
            .col-lg-auto
              figure
                img(src="@/assets/curso/tema4/5.png", alt="")
      .col-sm-12.col-lg-3.d-none.d-lg-block
        img(src="@/assets/curso/tema4/2.png", alt="")


    .titulo-tres: h3 Adaptación de impedancias para alta frecuencia y alta potencia

    p(data-aos="fade-up").mb-5 La adaptación de impedancias busca igualar la resistencia de salida de la fuente y la resistencia de entrada de la carga, permitiendo una transferencia óptima de potencia.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bg-color-1(data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/6.png", style="max-width: 400px", alt="").m-auto.mt-lg-0.mt-4
            .col-lg
              .p-4
                figure.mb-4
                  img(src="@/assets/curso/tema4/7.svg", alt="", style="max-width: 63px").ml-auto


                p.mb-0 #[strong Se debe adaptar la impedancia de salida de una fuente de señal análoga con la impedancia de entrada de la carga para maximizar la transferencia de potencia]


    p(data-aos="fade-up").mb-5 Para evitar reflexiones en la carga, las impedancias deben ser completamente resistivas, lo cual facilita la emisión de señales con gran ancho de banda.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Clasificación de las ondas analógicas por frecuencia


        .tabla-a.color-acento-contenido
          table
            caption Referencia Tabla - Norma APA
            thead
              tr
                th Sigla
                th Rango de frecuencia
                th Denominación
                th Empleo
            tbody
              tr
                td #[strong VLF]
                td #[strong 10 kHz a 30 kHz]
                td Muy baja frecuencia
                td Radio de gran alcance
              tr
                td #[strong LF]
                td #[strong 30 kHz a 300 kHz]
                td Baja frecuencia
                td Radio, navegación
              tr
                td #[strong MF]
                td #[strong 300 kHz a 3 MHz]
                td Frecuencia media
                td Radio de onda media
              tr
                td #[strong HF]
                td #[strong 3 MHz a 30 MHz]
                td Alta frecuencia
                td Radio de onda corta
              tr
                td #[strong VHF]
                td #[strong 30 MHz a 300 MHz]
                td Muy alta frecuencia
                td TV, radio
              tr
                td #[strong UHF]
                td #[strong 300 MHz a 3 GHz]
                td Ultra alta frecuencia
                td TV, teléfono móvil
              tr
                td #[strong SHF]
                td #[strong 3 GHz a 30 GHz]
                td Super alta frecuencia
                td Radar
              tr
                td #[strong EHF]
                td #[strong 30 GHz a 300 GHz]
                td Extremadamente alta frecuencia
                td Radar

    p(data-aos="fade-up") El uso de altas frecuencias (bandas Ku y Ka) permite transmitir mayor cantidad de información por segundo, aunque requiere mayor potencia y equipos más robustos para evitar bloqueos y mejorar la recepción.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
