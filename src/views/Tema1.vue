<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Circuitos eléctricos
    
    .fondo-personalizado-1.f2.mb-3
      .fondo-personalizado-1__contenido.pb-4
        p.mb-4(data-aos="fade-up") Un circuito eléctrico es un conjunto de elementos conectados que permite el paso de energía eléctrica. Sus principales componentes incluyen resistencias, condensadores, y fuentes de tensión y corriente, representados mediante símbolos eléctricos.

        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Componentes eléctricos y sus símbolos
            .fondo-color-sistema-i.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/5.svg",alt="Tabla de componentes eléctricos con ejemplos de símbolos y unidades.")
        
        p.mb-0(data-aos="fade-right") Los circuitos eléctricos se componen de diversos elementos que cumplen funciones específicas para garantizar su correcto funcionamiento. A continuación, se presentan sus principales componentes y características:
    
    .fondo-personalizado-1.f3(data-aos="fade-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Generadores
                p.mb-0 Generan energía eléctrica a partir de otras formas de energía. Ejemplo: pilas, baterías, dinamos y alternadores.
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 417px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Receptores
                p.mb-0 Consumen energía eléctrica y la transforman en calor, luz, movimiento o sonido. Ejemplo: lámparas, timbres, motores, resistencias y radiadores.
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 417px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Elementos de maniobra
                p.mb-4 Controlan la apertura o cierre de circuitos:
                ul.lista-ul.mb-0.pb-0
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.c-color-sistema-k.pe-2
                    span #[b Interruptores:] abren o cierran un circuito de manera permanente.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.c-color-sistema-k.pe-2
                    span #[b Pulsadores:] abren o cierran un circuito mientras están presionados, ya sean normalmente abiertos o cerrados.
                  li.d-flex.mb-0
                    i.fas.fa-check-circle.c-color-sistema-k.pe-2
                    span #[b Conmutadores:] permiten controlar dos o más circuitos desde un mismo punto, como en el caso de lámparas con encendido desde ubicaciones diferentes.
                    
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 417px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Elementos de protección
                p.mb-0 Protegen los circuitos contra cortocircuitos y sobrecargas. Ejemplo: fusibles, diferenciales y magnetotérmicos.
                    
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 417px;")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-5 Conductores
                p.mb-0 Facilitan el paso de la corriente entre los elementos del circuito. Usualmente están hechos de cobre.
                    
              .col-lg-5
                .borde-12.fondo-color-secundario.p-4
                  figure
                    img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 417px;")
    
    .titulo-decorativo.my-5(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Representación gráfica de los componentes
    
    .fondo-personalizado-1.f2.mb-4
      .fondo-personalizado-1__contenido

        p.mb-5(data-aos="fade-left") Cada elemento tiene su símbolo gráfico en los esquemas eléctricos, como interruptores, conmutadores, pulsadores, bombillas, baterías y motores.

        .row.justify-content-center(data-aos="fade-right")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Representación gráfica de los componentes
            .fondo-color-sistema-i.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/12.svg",alt="Representación de elementos de control y salida: interruptor, conmutador, pulsador, bombilla, pila y motor.")
        
        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Conexión de los componentes de un circuito
        
        p.mb-0(data-aos="fade") En un circuito eléctrico, los componentes pueden conectarse de diversas maneras dependiendo de su propósito y diseño. A continuación, se describen las principales formas de conexión:
    
    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
        .borde-23.fondo-color-sistema-j.p-4.h-100
          figure.align-content-end.mb-4(style="min-height: 160px;")
            img.mx-auto(src="@/assets/curso/temas/13.svg",style="max-width: 305px;")
          
          .text-center.mb-4
            h4.mb-0.fondo-color-secundario.d-inline-flex.py-1.px-4 Circuito en serie
          ul.lista-ul.mb-0.pb-0
            li.d-flex.mb-3
              i.fas.fa-check-circle.c-color-sistema-k.pe-2
              span Los elementos están conectados uno tras otro, compartiendo la misma corriente.
            li.d-flex.mb-0
              i.fas.fa-check-circle.c-color-sistema-k.pe-2
              span El voltaje total del circuito se distribuye entre los receptores.
      .col-lg-4.col-md-6.mb-4(data-aos="fade")
        .borde-23.fondo-color-sistema-j.p-4.h-100
          figure.align-content-end.mb-4(style="min-height: 160px;")
            img.mx-auto(src="@/assets/curso/temas/14.svg",style="max-width: 299px;")
          
          .text-center.mb-4
            h4.mb-0.fondo-color-secundario.d-inline-flex.py-1.px-4 Circuito en paralelo
          ul.lista-ul.mb-0.pb-0
            li.d-flex.mb-3
              i.fas.fa-check-circle.c-color-sistema-k.pe-2
              span Los receptores están conectados de manera independiente entre dos puntos del circuito.
            li.d-flex.mb-0
              i.fas.fa-check-circle.c-color-sistema-k.pe-2
              span El voltaje es igual en cada punto, pero la corriente varía según las características de los receptores.
      .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
        .borde-23.fondo-color-sistema-j.p-4.h-100
          figure.align-content-end.mb-4(style="min-height: 160px;")
            img.mx-auto(src="@/assets/curso/temas/15.svg",style="max-width: 302px;")
          
          .text-center.mb-4
            h4.mb-0.fondo-color-secundario.d-inline-flex.py-1.px-4 Circuito mixto
          ul.lista-ul.mb-0.pb-0
            li.d-flex.mb-3
              i.fas.fa-check-circle.c-color-sistema-k.pe-2
              span Combina conexiones en serie y en paralelo.
            li.d-flex.mb-0
              i.fas.fa-check-circle.c-color-sistema-k.pe-2
              span Para resolver este tipo de circuitos, primero se analizan las conexiones en paralelo y luego las de serie.
      
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
