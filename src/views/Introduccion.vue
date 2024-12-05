<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-2.pb-md-2
  
    .titulo-principal.color-acento-contenido.mb-4(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.pt-4.pb-5
        .row.align-items-center.mb-4
          .col-lg-8(data-aos="fade-right")
            p.mb-0 Los circuitos eléctricos industriales son fundamentales en la generación, transformación y uso de la energía eléctrica. Estos sistemas se componen de elementos clave como resistencias, condensadores y fuentes de energía, que permiten el funcionamiento eficiente de dispositivos y maquinaria. Entender su estructura y comportamiento es esencial para diseñar y mantener instalaciones eléctricas seguras y funcionales.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/1.png",style="max-width: 417px;")
        
        .fondo-color-sistema-i.p-4.mb-4
          .row.align-items-center
            .col-lg-auto(data-aos="fade-right")
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 246px;")
            .col(data-aos="fade-left")
              p.mb-0 Este componente formativo aborda diferentes tipos de circuitos: en serie, en paralelo y mixtos, explicando sus características y aplicaciones prácticas. Además, se detalla el uso de la Ley de Ohm, herramienta imprescindible para calcular voltaje, corriente y resistencia, facilitando la resolución de problemas eléctricos en diversos contextos.
        
        .row.mb-5
          .col(data-aos="fade-right")
            .fondo-color-sistema-j.h-100.p-4.align-content-center
              p.mb-0 Mediante ejemplos prácticos y ejercicios resueltos, se busca fortalecer la capacidad analítica para modelar y resolver circuitos eléctricos. Este enfoque teórico-práctico permite comprender cómo optimizar los sistemas eléctricos para aplicaciones tanto domésticas como industriales.
          .col-lg-auto.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 295px;")
    
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
