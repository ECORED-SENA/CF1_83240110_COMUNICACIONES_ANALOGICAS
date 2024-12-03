<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Exploración de frecuencias y transmisión en el espectro electromagnético ',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Aplicar los conceptos de asignación de frecuencias y medios de transmisión en el espectro electromagnético, identificando sus usos específicos en radiocomunicaciones, telefonía móvil, televisión y servicios futuros. ',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza principalmente a una señal analógica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Representación continua de una onda con valores fijos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Representación digital en formato binario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Representación continua de una onda con valores variables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Emisión de valores únicamente altos y bajos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de ruido se distribuye uniformemente en todo el rango de frecuencias?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ruido impulsivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ruido de fondo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ruido blanco.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ruido intermitente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes ondas se utiliza en telecomunicaciones y tiene frecuencias desde unos pocos hercios hasta mil millones de hercios?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rayos Gamma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Luz visible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ondas de radio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Microondas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué medio de transmisión permite la propagación de señales sin necesidad de un soporte físico?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cable coaxial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medios no guiados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Par trenzado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fibra óptica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué parámetro se refiere a la distancia entre una cresta y un valle en una onda?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Amplitud.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Longitud de onda.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Período.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué servicio utiliza principalmente el rango de 29.7 MHz a 44 MHz?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Radiodifusión de televisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Telefonía móvil y fija.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Radar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Radio de onda corta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es una característica específica de los medios guiados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'No requieren material físico para propagarse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'No experimentan pérdidas de información.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usan soporte físico para transmisión de señales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Transmiten señales exclusivamente digitales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de multiplexación asigna el ancho de banda en intervalos de tiempo específicos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'División de frecuencia (FDM).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'División de longitud de onda (WDM).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'División de tiempo (TDM).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'División en código (CDM).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es el rango de frecuencia de los rayos X?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De 30 GHz a 300 GHz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De 1.1×10^17 Hz a 1.1×10^19 Hz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'De 1×10^14 Hz a 8×10^14 Hz.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'De 54 MHz a 72 MHz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué frecuencia se asigna a la planeación de servicios futuros?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '9 kHz a 40 GHz.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '40 GHz a 1000 GHz.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '3 MHz a 30 MHz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '300 MHz a 3 GHz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál de las siguientes es una aplicación de las ondas de muy alta frecuencia (VHF)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Radar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'TV y radio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fibra óptica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Telefonía fija.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué tipo de onda es perceptible por el ojo humano?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Rayos gamma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Microondas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Luz visible.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Rayos X.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es la función de los amplificadores en medios guiados?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la frecuencia de la señal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar completamente el ruido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Regenerar la señal para evitar pérdidas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificar la velocidad de transmisión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿En qué frecuencia se encuentra la radiodifusión de la televisión análoga en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '54 MHz -- 72 MHz, 76 MHz -- 108 MHz, 174 MHz -- 216 MHz.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '9 kHz hasta 40 GHz.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '29.7 MHz hasta 44 MHz.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '40.0 GHz hasta 1000 GHz.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué medio de transmisión está compuesto por un hilo de cobre central recubierto por una malla?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fibra óptica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medios no guiados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cable coaxial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Par trenzado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
