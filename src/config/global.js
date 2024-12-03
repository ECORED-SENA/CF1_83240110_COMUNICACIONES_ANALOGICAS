export default {
  global: {
    componenteFormativo: 'Señales analógicas',
    descripcionCurso:
      'Las señales analógicas, originadas en fenómenos electromagnéticos, son continuas y representan ondas variables. Sus características incluyen vulnerabilidad al ruido y alta resolución. Los medios de transmisión pueden ser guiados o no guiados. El espectro electromagnético abarca desde radio hasta rayos gamma, regulado en Colombia, con la multiplexación como método para combinar múltiples canales en un solo medio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Señales analógicas',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El ruido',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Espectro electromagnético',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medios de transmisión de las señales analógicas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Señales analógicas',
      referencia:
        'Educación Activa. (2020). Señales Analógicas y Señales Digitales (Educación Tecnológica - NES 2do año)',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hQ0BJi7cba0',
    },
    {
      tema: 'El ruido',
      referencia:
        'BBC (2017). Qué es el ruido blanco y cuán efectivo puede ser para ayudarte a dormir',
      tipo: 'Documento',
      link: 'https://www.bbc.com/mundo/noticias-40637892',
    },
    {
      tema: 'Espectro electromagnético',
      referencia:
        'KhanAcademyEspañol (2016). Ondas electromagnéticas y espectro electromagnético | Física',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YijfA07slss',
    },
    {
      tema: 'Medios de transmisión de las señales analógicas',
      referencia:
        'Electrónica FP. (2018). ¿Cuál es la diferencia entre electrónica DIGITAL y ANALÓGICA?',
      tipo: 'Video',
      link: 'https://chatgpt.com/c/67341ea0-b3d0-400d-8bfa-99c687e3bedd',
    },
  ],
  glosario: [
    {
      termino: 'Amplitud',
      significado:
        'valor máximo de una onda, indicando la intensidad o potencia de la señal.',
    },
    {
      termino: 'Banda ancha',
      significado:
        'transmisión de datos en varios segmentos simultáneamente, aumentando la velocidad de envío.',
    },
    {
      termino: 'Banda base',
      significado:
        'señales que recorren un canal sin modulación, manteniendo su frecuencia original.',
    },
    {
      termino: 'Espectro electromagnético',
      significado:
        'conjunto de todas las frecuencias de radiación electromagnética, desde radio hasta rayos gamma.',
    },
    {
      termino: 'Frecuencia',
      significado:
        'número de oscilaciones de una onda por segundo, medido en hertzios (HZ).',
    },
    {
      termino: 'Medios guiados',
      significado:
        'soportes físicos (como cables) para la transmisión de señales.',
    },
    {
      termino: 'Medios no guiados',
      significado:
        'transmisión de señales sin soporte físico, desplazándose a través del aire o vacío.',
    },
    {
      termino: 'Multiplexación',
      significado:
        'técnica que permite combinar múltiples señales en un solo medio de transmisión.',
    },
    {
      termino: 'Ruido',
      significado:
        'interferencias que afectan la claridad y calidad de la señal en un sistema de transmisión.',
    },
    {
      termino: 'Señal analógica',
      significado:
        'representación continua de una onda, cuyas amplitud y frecuencia varían en el tiempo.',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Fabio Enrique Combariz',
          cargo: 'Experto Temático',
          centro:
            'Equipo de Adecuación Gráfica y Didáctica de Recursos Educativos - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
