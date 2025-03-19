export default {
  global: {
    Name: 'Circuitos eléctricos industriales',
    Description:
      'El componente formativo aborda circuitos eléctricos industriales, definiendo componentes como resistencias y generadores, conexiones en serie, paralelo y mixtas, y aplicando la Ley de Ohm para calcular voltaje, corriente y resistencia. Incluye ejercicios prácticos con ejemplos detallados de resolución paso a paso, destacando la importancia de analizar circuitos eléctricos para resolver problemas cotidianos relacionados con el consumo y diseño eléctrico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Circuitos eléctricos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ley de Ohm',
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
        download: 'downloads/84320022_CF04_DU.pdf',
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
      tema: 'Circuitos eléctricos.',
      referencia:
        'A Cierta Ciencia. (2022, 5 de septiembre). <em>¿Qué son los Circuitos Eléctricos? Y sus tipos: Serie y Paralelo.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GUESpG6inds',
    },
    {
      tema: 'Circuitos eléctricos.',
      referencia:
        'Física para todos. (2021). <em>Circuitos eléctricos en Paralelo - Propiedades y ejemplo resuelto.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o6EFgt_h8io',
    },
    {
      tema: 'Circuitos eléctricos.',
      referencia:
        'Profesor Sergio Llanos. (2015). <em>Circuito en Serie</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xGfa28dja10',
    },
    {
      tema: 'Ley de Ohm.',
      referencia:
        'Charly Labs. (2014). <em>La Ley de Ohm.</em> [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=m7HY1Or01S0&ab_channel=CharlyLabs',
    },
  ],
  glosario: [
    {
      termino: 'Circuito eléctrico',
      significado:
        'conjunto de elementos conectados que permiten el paso de la energía eléctrica.',
    },
    {
      termino: 'Circuito en paralelo',
      significado:
        'conexión donde los receptores están conectados entre dos puntos comunes y tienen el mismo voltaje.',
    },
    {
      termino: 'Circuito en serie',
      significado:
        'conexión donde la corriente que atraviesa todos los elementos es la misma.',
    },
    {
      termino: 'Condensador',
      significado:
        'elemento que almacena energía eléctrica en forma de campo eléctrico.',
    },
    {
      termino: 'Conductor',
      significado:
        'material que permite el paso de corriente eléctrica, como el cobre.',
    },
    {
      termino: 'Generador',
      significado:
        'dispositivo que convierte diferentes formas de energía en energía eléctrica.',
    },
    {
      termino: 'Interruptor',
      significado:
        'dispositivo que abre o cierra un circuito eléctrico de forma manual o automática.',
    },
    {
      termino: 'Ley de Ohm',
      significado:
        'relación entre voltaje, corriente y resistencia en un circuito eléctrico expresada como V = I × R.',
    },
    {
      termino: 'Receptor',
      significado:
        'elemento que consume energía eléctrica y la transforma en otras formas, como luz o calor.',
    },
    {
      termino: 'Resistencia',
      significado:
        'componente que limita el flujo de corriente en un circuito eléctrico.',
    },
  ],
  referencias: [
    {
      referencia: 'Cetina, A. (2001). <em>Electrónica básica</em>. Limusa.',
      link: '',
    },
    {
      referencia:
        'Domínguez, R. (s.f.). <em>Ejercicios resueltos de análisis de circuitos I</em>. Recuperado de',
      link:
        'http://iesrioaguas.files.wordpress.com/2013/03/circuitos-serie-y-paralelo-ejercicios.pdf',
    },
    {
      referencia:
        'Guillén, J. (s.f.). <em>Electricidad</em>. En <em>Portaleso</em>.',
      link: 'http://www.portaleso.com/web_magnetismo_3/magnetismo_indice.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Wilmar Martínez Urrutia',
          cargo: 'Experto temático',
          centro:
            'Centro de Desarrollo Agroempresarial - Regional Cundinamarca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julián Ramírez Benítez',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
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
