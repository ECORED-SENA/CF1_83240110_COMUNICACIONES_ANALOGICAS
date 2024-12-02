<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Señales analógicas
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4 Las señales analógicas se originan a partir de fenómenos electromagnéticos y se caracterizan por ser una representación continua de una onda, cuya amplitud y período cambian en función del tiempo. A diferencia de las señales digitales, las señales analógicas pueden tomar un rango completo de valores dentro de un intervalo de tiempo, mientras que las digitales solo adoptan dos valores posibles: alto (1) o bajo (0).
        .rounded-3.p-4(style="background-color: #e0f7fb")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/5.png', alt='')
            .col-lg-6(data-aos="fade-left")
              p.mb-0 Este tipo de señal suele aparecer en ondas sinusoidales de una sola frecuencia y se manifiesta en fenómenos como la luz, la energía y el sonido, presentando variaciones continuas.
      .col-lg-3(data-aos="fade-left"): img(src='@/assets/curso/temas/6.svg', alt='')
    .titulo-tres: h3 Características y parámetros
    p.mb-4 Entre las características de las señales analógicas se destacan:
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        SlyderF.mb-5(columnas="col-lg-4 col-xl-4").my-5
          .tarjeta.bg-white.p-4.shadow
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center 
            p.text-center 
    
          .tarjeta.bg-white.p-4.shadow
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center 
            p.text-center 
    
          .tarjeta.bg-white.p-4.shadow
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center 
            p.text-center 
    
          .tarjeta.bg-white.p-4.shadow
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/componentes/ej-05.svg' alt='AvatarTop')
            h2.text-center 
            p.text-center 
    









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
