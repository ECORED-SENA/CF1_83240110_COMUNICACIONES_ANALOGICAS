<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Señales analógicas
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-4(data-aos="fade-up") Las señales analógicas se originan a partir de fenómenos electromagnéticos y se caracterizan por ser una representación continua de una onda, cuya amplitud y período cambian en función del tiempo. A diferencia de las señales digitales, las señales analógicas pueden tomar un rango completo de valores dentro de un intervalo de tiempo, mientras que las digitales solo adoptan dos valores posibles: alto (1) o bajo (0).
        .rounded-3.p-4(style="background-color: #e0f7fb" data-aos="fade-right")
          .row.justify-content-center.align-items-center
            .col-lg-6.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/5.png', alt='')
            .col-lg-6(data-aos="fade-left")
              p.mb-0 Este tipo de señal suele aparecer en ondas sinusoidales de una sola frecuencia y se manifiesta en fenómenos como la luz, la energía y el sonido, presentando variaciones continuas.
      .col-lg-3(data-aos="fade-left"): img(src='@/assets/curso/temas/6.svg', alt='')

    .titulo-tres: h3 Características y parámetros
    p.mb-4(data-aos="fade") Entre las características de las señales analógicas se destacan:

    .fondo-personalizado-1.f1.mb-1
      .fondo-personalizado-1__contenido
        .row.align-items-center.mb-5
          .col-lg-8
            SlyderF.slider-personalizado-2(columnas="col-lg-4 py-4",data-aos="flip-up")
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/2.svg",style="max-width: 100px;")
                p.text-center.mb-4 Contienen una gran cantidad de información, independientemente de su tamaño y contenido.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/3.svg",style="max-width: 100px;")
                p.text-center.mb-4 Incrementan el ruido conforme se amplifica la señal.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/4.svg",style="max-width: 100px;")
                p.text-center.mb-4 Pueden ampliarse mediante el uso de amplificadores.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/5.svg",style="max-width: 100px;")
                p.text-center.mb-4 Son más fáciles de procesar en comparación con las señales digitales.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/6.svg",style="max-width: 100px;")
                p.text-center.mb-4 Se manejan exclusivamente con componentes analógicos, sin necesidad de conversiones.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/7.svg",style="max-width: 100px;")
                p.text-center.mb-4 Suelen experimentar pérdidas durante su generación.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/8.svg",style="max-width: 100px;")
                p.text-center.mb-4 Son más vulnerables al ruido y a la interferencia.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/9.svg",style="max-width: 100px;")
                p.text-center.mb-4 Predominan en la naturaleza.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/10.svg",style="max-width: 100px;")
                p.text-center.mb-4 Poseen una mayor resolución en la señal.
              .sombra-p-1.p-4.borde-14.h-100.bg-white
                figure.mb-4
                  img.mx-auto(src="@/assets/curso/temas/tema1/11.svg",style="max-width: 100px;")
                p.text-center.mb-4 Presentan variaciones en su propagación conforme aumenta la distancia.

          .col-lg-4
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/tema1/1.png",style="max-width: 295px;")
        
        .titulo-tres: h3 Parámetros fundamentales que definen una forma de onda
    
    p.mb-4 Para comprender el concepto de onda, es fundamental identificar los parámetros que la configuran: longitud de onda, cresta, valle, amplitud y período, componentes que se ilustran en la figura 1.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 1.] Componentes de la onda
        .fondo-color-sistema-i.p-4.p-lg-5.borde-10(data-aos="zoom-in-out")
          figure
            img.mx-auto(src="@/assets/curso/temas/tema1/13.svg",style="max-width: 610px;",alt="La figura  ilustra una onda y sus componentes principales: la longitud de onda (λ), que es la distancia entre dos puntos equivalentes consecutivos de la onda; la amplitud de onda (A), que indica la altura desde la línea base hasta una cresta; el periodo (A), que representa el tiempo de una oscilación completa; la cresta, el punto más alto de la onda; el valle, el punto más bajo; y el nodo, el punto donde la onda cruza la línea base")
    
    .titulo-tres: h3 Generación de ondas

    .row.mb-4
      .col-lg-9(data-aos="fade-right")
        p.mb-0 Las #[b ondas electromagnéticas], representan alteraciones simultáneas en los campos eléctricos y magnéticos en una misma región. A diferencia de otros tipos de ondas, no necesitan un medio físico para propagarse, ya que se desplazan por el ambiente y están presentes en la vida cotidiana. Algunos ejemplos de ondas electromagnéticas incluyen:
      .col-lg-3.order-first.order-lg-last(data-aos="fade-left")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/tema1/14.svg",style="max-width: 295px;")
    
    .row.mb-4
      .col-lg-3.col-md-6.mb-4(data-aos="fade-right")
        .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/tema1/15.png")
          h4.mb-0.text-center La luz visible de la luna
      .col-lg-3.col-md-6.mb-4(data-aos="fade-up")
        .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/tema1/16.png")
          h4.mb-0.text-center La luz del sol
      .col-lg-3.col-md-6.mb-4(data-aos="fade-down")
        .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/tema1/17.png")
          h4.mb-0.text-center Ondas de televisión
      .col-lg-3.col-md-6.mb-4(data-aos="fade-left")
        .fondo-color-sistema-i.borde-10.p-4.hov-p-1.h-100
          figure.mb-4
            img.mx-auto(src="@/assets/curso/temas/tema1/18.png")
          h4.mb-0.text-center Señales de telefonía y radio

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2.] Onda electromagnética
        .fondo-color-sistema-i.p-4.p-lg-5.borde-10(data-aos="flip-up")
          figure
            img.mx-auto(src="@/assets/curso/temas/tema1/19.svg",style="max-width: 800px;",alt="La  figura  representa una onda electromagnética, destacando sus componentes principales: el campo eléctrico y el campo magnético, que son perpendiculares entre sí y a la dirección de propagación de la onda. La longitud de onda se muestra como la distancia entre dos puntos equivalentes de la onda. También se indica la frecuencia, definida como el número de oscilaciones por segundo, y la dirección e intensidad del campo.")
    









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
