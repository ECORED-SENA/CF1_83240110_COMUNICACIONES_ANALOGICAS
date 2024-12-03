<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.overflow-hidden
      .titulo-principal__numero
        span 3
      h1 Espectro electromagnético
    

    p(data-aos="fade-up") El espectro electromagnético incluye todas las longitudes de onda de radiaciones electromagnéticas, clasificado por frecuencia y longitud de onda. Los principales rangos de frecuencia:


    .bg-full-width.bg-fondo-slider(data-aos="fade-down").mb-5
      .p-4.p-md-5.p-4.p-lg-5.pb-lg-4.shadow-soft(data-aos="fade-up")
        SlyderA(tipo='b').tarjeta.bg-color-white.p-4
          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .p-4
                h4 Ondas de radio
                p.mt-4 Utilizadas en telecomunicaciones, con frecuencias que van desde unos pocos hercios hasta mil millones de hercios.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-1.png', style="max-width: 440px").mx-auto


          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .pe-4
                h4 Microondas
                p.mt-4 Empleadas en comunicaciones de banda UHF y en hornos microondas.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-2.png', style="max-width: 419px").mx-auto
          
          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .p-4
                h4 Infrarrojos
                p.mt-4 Emitidos por cuerpos calientes y detectables mediante visores nocturnos; frecuencia de 1011 Hz a 1014 Hz.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-3.png', style="max-width: 440px").mx-auto


          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .p-4
                h4 Luz visible
                p.mt-4 Rango perceptible por el ojo humano, con frecuencias entre 4 * 1014 Hz a 1014 Hz.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-4.png', style="max-width: 419px").mx-auto
          
          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .p-4
                h4 Luz ultravioleta
                p.mt-4 Frecuencia entre 8 * 1014 Hz a 1017 Hz, siendo el sol la principal fuente de radiación UVA.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-5.png', style="max-width: 440px").mx-auto


          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .p-4
                h4 Rayos X
                p.mt-4 Frecuencia de 1.1 * 1014 Hz a 1019 Hz, cuya exposición prolongada puede provocar cáncer.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-6.png', style="max-width: 419px").mx-auto              

          .row.pt-lg-4
            .col-lg-8.mb-4.mb-lg-0
              .p-4
                h4 Rayos Gamma
                p.mt-4 Frecuencia superior a 1* 1019 Hz, generados en la estabilización nuclear de emisiones radiactivas.
            .col-lg-4
              img(src='@/assets/curso/tema3/slider-7.png', style="max-width: 419px").mx-auto   


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura3.
          span Espectro electromagnético

        .tarjeta.bg-color-1.p-4.p-md-5(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/tema3/fig3.png', style="max-width: 821px", alt="La figura  presenta  el espectro electromagnético, con ejemplos de ondas en diferentes rangos, como radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y rayos gamma. Se representan objetos de escala correspondiente a cada tipo de radiación, desde trenes para ondas de radio hasta átomos para rayos gamma. En la parte inferior, un diagrama ilustra la onda electromagnética con sus componentes: la onda magnética (E) y la onda eléctrica (B), indicando la longitud de onda (λ) y el periodo (T).").mx-auto

    .titulo-tres: h3 Multiplexación en frecuencia

    p(data-aos="fade-up").mb-5 La multiplexación permite combinar múltiples canales de información en un solo medio de transmisión mediante un multiplexor. Los tipos principales incluyen:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Tipo de multiplexación


        .tabla-a.color-acento-contenido
          table
            caption Referencia Tabla - Norma APA
            thead
              tr
                th Tipo de multiplexación
                th Descripción
            tbody
              tr
                td División de frecuencia (FDM)
                td Separa el canal en sub-bandas de frecuencias paralelas.
              tr
                td División de longitud de onda (WDM)
                td Utiliza señales análogas sobre fibra óptica.
              tr
                td División de tiempo (TDM)
                td Asigna el ancho de banda en intervalos de tiempo.
              tr
                td División en código (CDM)
                td Se utiliza en comunicaciones inalámbricas y telefonía celular para la transmisión de voz.


    .titulo-tres: h3 Espectro radioeléctrico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p(data-aos="fade-up") Medio de transmisión por el cual se propagan las ondas electromagnéticas que permiten los servicios de telecomunicaciones, como la radio, la televisión, el internet y la telefonía móvil, y que son supervisadas y reguladas por los gobiernos y normas de cada país. Este espectro se distribuye en las bandas UHF, VHF y HF.

        .row.mb-4
          .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
            .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/tema3/2.png")
              h5.mb-3.text-center UHF
              p.mb-0 Fijo terrestre, móvil terrestre, radiodifusión, fijo satelital.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
            .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/tema3/3.png")
              h5.mb-3.text-center VHF
              p.mb-0 Móvil terrestre, móvil aeronáutico, aficionados, fijo terrestre.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-down")
            .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/tema3/4.png")
              h5.mb-3.text-center HF
              p.mb-0 Móvil aeronáutico, aficionados, móvil terrestre.

      .col-lg-3
        figure
          img(src='@/assets/curso/tema3/1.png', style="max-width: 295px").mx-auto

    
    .titulo-tres: h3 Cuadro de atribución de frecuencias en Colombia

    p(data-aos="fade-up").mb-5 El cuadro nacional de atribución de bandas de frecuencias es un instrumento que organiza y establece el espectro radioeléctrico, en el que se evidencian los principales servicios de telecomunicaciones prestados en las bandas UHF, VHF y HF.

    .row.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.bg-color-2
          img.custom-image-card__image(src="@/assets/curso/tema3/5.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 #[strong Banda UHF]
            p.mb-0 En este segmento se ubican las ondas electromagnéticas que son utilizadas por las compañías de telefonía fija y móvil.
      .col-lg-4.mb-4(data-aos="zoom-in")
        .custom-image-card.bg-color-2
          img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 #[strong Banda VHF]
            p.mb-0 Rango utilizado por las compañías de telefonía móvil y terrestre, las emisoras radiales, los sistemas de radio de onda corta y los sistemas de telefonía móvil en aparatos voladores.
      .col-lg-4.mb-4(data-aos="zoom-in-left")
        .custom-image-card.bg-color-1
          img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0 #[strong Banda HF]               
            p.mb-0 Más envolvente que la banda VHF, ya que algunas de sus emisiones residuales o fragmentos de ondas trasladadas fuera del aire terrestre pueden chocar con las ondas espaciales, lo que produce una mayor cobertura de transmisión.

    .bg-full-width.bg-fondo-1
      .px-4.px-lg-5.py-lg-0
        p(data-aos="fade-up").mb-5 Las asignaciones de frecuencia permiten organizar el espectro electromagnético en Colombia, optimizando su uso para servicios como radiocomunicación, telefonía móvil y televisión análoga, y reservando espacio para futuras tecnologías.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4
            .tarjeta--boton.bg-color-3.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema3/8.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-4.d-inline-block.p-2.mb-3
                h6.text-center.mb-0 #[strong Radiocomunicación]
              p.text-center 9 kHz hasta 40 GHz
          .col-lg-3.mb-4
            .tarjeta--boton.bg-color-3.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema3/9.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-4.d-inline-block.p-2.mb-3
                h6.text-center.mb-0 #[strong Planeación]
              p.text-center 40.0 GHz hasta 1000 GHz (banda asignada para servicios futuros)

          .col-lg-3.mb-4
            .tarjeta--boton.bg-color-3.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema3/10.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-4.d-inline-block.p-2.mb-3
                h6.text-center.mb-0 #[strong Telefonía móvil y fija]
              p.text-center 29.7 MHz hasta 44 MHz

          .col-lg-3.mb-4
            .tarjeta--boton.bg-color-3.p-4.text-center.h-100(data-aos="flip-up")
              img(src='@/assets/curso/tema3/11.svg', alt='', style="max-width: 90px").mx-auto.mb-4
              .bg-color-4.d-inline-block.p-2.mb-3
                h6.text-center.mb-0 #[strong Servicio de radiodifusión de la televisión análoga]
              p.text-center 54 MHz – 72 MHz, 76 MHz – 108 MHz, 174 MHz – 216 MHz

        br
        br
        br  
</template>

<script>
export default {
  name: 'Tema3',
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
