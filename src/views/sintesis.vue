<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.  
    .row.justify-content-center
      .col-lg-11.mb-5
        figure.bg-color-sintesis.p-5.brounded
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis de señales analógicas muestra sus componentes clave: las ondas electromagnéticas, que incluyen elementos como longitud de onda, frecuencia, amplitud y periodo; el espectro radioeléctrico, compuesto por bandas como UHF, VHF y HF y radiaciones tales como ondas de radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y rayos gamma; los medios de transmisión, que pueden ser guiados o no guiados; y el ruido, que puede presentarse en bandas ancha y base.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
