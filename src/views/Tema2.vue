<template lang="pug">
.curso-main-container.pb-3
	BannerInterno
	.container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.overflow-hidden
		.titulo-principal.color-acento-contenido
			.titulo-principal__numero
				span 2
			h1 El ruido
		
		p.mb-4(data-aos="fade-right") El ruido se refiere a interferencias o modificaciones en las señales de un sistema de transmisión, que afectan la claridad de la información y pueden degradarla. En sistemas de comunicación, el ruido representa la alteración de la información en una señal, generando una mezcla aleatoria de longitudes de onda.

		p.mb-4(data-aos="fade-left") Existen distintos tipos de ruido, entre los cuales destacan:

		.row.justify-content-center.mb-4
			.col-lg-5.col-md-6.mb-4(data-aos="fade-right")
				.borde-10.fondo-color-sistema-i.p-4.h-100.hov-p-1
					figure.mb-2
						img.me-auto(src="@/assets/curso/temas/tema1/20.svg",style="max-width: 100px;")
					p.fw-bold.fondo-color-acento-contenido.d-inline-flex.px-3.mb-4 Ruido blanco
					p.mb-0 Su energía se distribuye uniformemente en todo el rango de frecuencias asignado. Ejemplo: el sonido producido por electrodomésticos como lavadoras o secadores.
			.col-lg-5.col-md-6.mb-4(data-aos="fade-left")
				.borde-10.fondo-color-sistema-i.p-4.h-100.hov-p-1
					figure.mb-2
						img.me-auto(src="@/assets/curso/temas/tema1/21.svg",style="max-width: 100px;")
					p.fw-bold.fondo-color-acento-contenido.d-inline-flex.px-3.mb-4 Ruido impulsivo
					p.mb-0 Ocurre en intervalos irregulares, con picos muy pronunciados y de corta duración.
		
		.titulo-tres: h3 Señales de banda base

		.row
			.col-lg-8(data-aos="fade-right")
				p.mb-5 Las señales de banda base son transmisiones únicas que recorren un canal sin pasar por procesos de modulación. Estas señales permanecen en su frecuencia original y no se alteran al salir de su fuente.
				.titulo-tres: h3 Señales de banda ancha
				p.mb-0 En la transmisión de banda ancha, los datos se envían simultáneamente en varios segmentos, lo que incrementa la velocidad de transferencia. Estas señales viajan a través de un canal de alta capacidad, reflejándose en su elevada velocidad de transmisión.

			.col-lg-4.order-first.order-lg-last(data-aos="fade-left")
				figure.mb-4.mb-lg-0
					img.mx-auto(src="@/assets/curso/temas/tema1/22.svg",style="max-width: 400px;")

	
</template>

<script>
export default {
  name: 'Tema2',
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
