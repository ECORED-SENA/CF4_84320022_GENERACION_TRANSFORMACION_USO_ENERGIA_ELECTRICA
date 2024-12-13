<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-4.pb-md-4
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Ley de Ohm
    
    .fondo-personalizado-1.f2.pt-5.mb-5
      .fondo-personalizado-1__contenido
        p.mb-4(data-aos="fade-down") Esta ley, considerada fundamental para resolver matemáticamente circuitos, fue descubierta por el físico alemán Georg Simon Ohm, quien encontró la relación existente entre las tres magnitudes fundamentales de un circuito eléctrico: #[b el voltaje, la corriente y la resistencia], considerando esta relación en la siguiente fórmula:

        .row.justify-content-center.mb-4(data-aos="fade-down")
          .col-lg-8
            .borde-11.fondo-color-sistema-l.px-5.py-4
              .row.align-items-center
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 87px;")
                .col
                  h4.mb-2.text-white Importante
                  p.mb-0.text-white Cuando se resuelven problemas de la Ley de Ohm se debe despejar cada una de las variables en función de cuál sea la incógnita preguntada.
        
        p.mb-4(data-aos="fade-down") El siguiente gráfico detalla estas operaciones. Oculte la variable que desea despejar y, entre las que permanezcan visibles, si están a la misma altura, colóquelas con un signo de multiplicar; si una está sobre otra, utilice un signo de dividir.

        .row.justify-content-center(data-aos="fade-down")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 3.] Triángulos de Ohm
            .fondo-color-sistema-i.p-4.py-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 490px;",alt="Representación visual de la Ley de Ohm con sus fórmulas básicas.")
  
        .titulo-decorativo.mt-5(data-aos="fade-down")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Ejercicios prácticos
    
    p.fw-bold.mb-4 Ejemplo 1(data-aos="fade-down")
    
    p.mb-5(data-aos="fade-down") Un circuito eléctrico está formado por una pila de petaca de 4.5 V, una bombilla que tiene una resistencia de 90 Ω, un interruptor y los cables necesarios para unir todos ellos. Se pide una representación gráfica del circuito y que se calcule la intensidad de la corriente que circulará cada vez que cerremos el interruptor.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 4.] Circuito básico con lámpara y batería
        .fondo-color-sistema-i.p-4.py-lg-5
          figure
            img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 511px;",alt="Circuito eléctrico simple compuesto por una batería como fuente de energía, un interruptor que controla el flujo de corriente y una bombilla que se ilumina cuando el circuito está cerrado.")
    
    .row(data-aos="fade-down")
      .col-lg-6.mb-4.borde-p-1
        p.fw-bold.mb-4 Ejemplo 2
        p.mb-5 En un circuito con una resistencia y una pila de 20 V circula una corriente de 0.2 A. Calcular el valor de dicha resistencia.
        .fondo-color-sistema-i.p-5.d-inline-flex
          figure
            img(src="@/assets/curso/temas/19.svg",style="max-width: 176px;")
      .col-lg-6.mb-4.ps-4
        p.fw-bold.mb-4 Ejemplo 3
        p.mb-5 ¿Cuál será la tensión que suministra una pila sabiendo que al conectarla a un circuito que tiene una resistencia de 45 Ω, la intensidad es de 0.1 A?
        .fondo-color-sistema-i.p-5.d-inline-flex
          figure
            img(src="@/assets/curso/temas/20.svg",style="max-width: 204px;")
    
    .titulo-decorativo.mb-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Resolución de circuitos en serie

    p.mb-5(data-aos="fade-down") Para calcular ya sea la corriente o el voltaje en un circuito con cargas en serie, primero se suman todas las cargas o resistencias para formar una resistencia total o equivalente y a partir de ahí calcular las demás variables mediante la Ley de Ohm. Por lo tanto, la resistencia total de un circuito en serie se calcula de la siguiente forma:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Circuito en serie con resistencias y fuente de 90 V
        .fondo-color-sistema-i.p-4
          .row
            .col-lg-5
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 338px;",alt="Circuito serie con varias resistencias y una fuente de 90 V")
            .col-lg-7
              p.fw-bold.mb-2 Ejemplo
              p.mb-4 Calcular la corriente total que circula en el siguiente circuito con cargas en serie, considerando que la fuente es de 90 volts.
              p.fw-bold.mb-2 Solución:
              p.mb-2 #[b Paso 1:] se suman todas las resistencias para obtener la equivalente:
              p.mb-3 #[em R total = 10Ω + 5Ω + 2Ω + 8Ω + 20Ω = 45Ω]
              p.mb-3 #[b Paso 2:] como la incógnita es la corriente, se despeja I de la ecuación de la Ley de Ohm y se sustituye:
              math
                mi I
                mo =
                mfrac
                  mrow
                    mi V
                  mi R
                mo =
                mfrac
                  mrow
                    mn 90
                    mi V
                  mrow
                    mn 45
                    mo &#x2126;
                mo =
                mn 2
                mi A
    
    .titulo-decorativo.my-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Fuentes de voltaje en serie
    
    p.mb-4(data-aos="fade-down") Las fuentes de voltaje también pueden colocarse en serie, por lo tanto, el voltaje total en un circuito donde existen dos o más fuentes en serie es la suma de los voltajes individuales de cada fuente. Cuando las polaridades de las fuentes se encuentran hacia la misma dirección, su voltaje se suma. Cuando sus polaridades se encuentran en direcciones opuestas, se restan.

    .fondo-personalizado-1.f3(data-aos="fade-down")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.p-4.borde-20
          SlyderA.slider-personalizado-1.pt-lg-3(tipo="b")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Ejemplo 1
                p.mb-4 Para el siguiente circuito, calcular la corriente aportada por las dos fuentes en serie:
                p.fw-bold.mb-0 Solución:
                p.mb-3 #[b Paso 1:] se debe obtener el voltaje total del circuito, por lo cual se debe sumar o restar las fuentes de voltajes:
                p.mb-3 𝐕 𝐭𝐨𝐭𝐚𝐥 = 12V + 5V = 17V
                p.mb-3 #[b Paso 2:] una vez obtenido el voltaje total, se puede despejar I de la ecuación de la Ley de Ohm y obtener la corriente total aportada por las dos fuentes:
                math(style="font-weight: bold")
                  mi I
                  mo =
                  mfrac
                    mi V
                    mi R
                  mo =
                  mfrac
                    mrow
                      mn 17
                      mi V
                    mrow
                      mn 1
                      mi K
                      mo &#x2126;
                  mo =
                  mn 17
                  mi m
                  mi A
              .col-lg-5
                figure.pt-3
                  img.mx-auto(src="@/assets/curso/temas/22.svg",style="max-width: 400px;",alt="Circuito con dos fuentes de 12 V y 5 V en serie y resistencia de 1.0 kΩ.")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Ejemplo 2
                p.mb-4 Obtener el valor de la resistencia del circuito para que circule una corriente de 2.5 A si se tienen dos fuentes en serie con su valor respectivo:
                p.fw-bold.mb-0 Solución:
                p.mb-2 #[b Paso 1:] obtener el voltaje total:
                p.mb-3 𝐕 𝐭𝐨𝐭𝐚𝐥 = 25V − 5V = 20V
                p.mb-3 #[b Paso 2:] calcular la resistencia a partir de la Ley de Ohm con los datos conocidos:
                math(style="font-weight: bold")
                  mi R
                  mo =
                  mfrac
                    mi V
                    mi I
                  mo =
                  mfrac
                    mrow
                      mn 20
                      mi V
                    mrow
                      mn 2.5
                      mi A
                  mo =
                  mn 8
                  mo &#x2126;
              .col-lg-5
                figure.pt-3
                  img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 400px;",alt="Circuito con fuentes de 25 V y 5 V en serie y resistencia desconocida.")
            .row.justify-content-center.pt-2
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Ejemplo 3
                p.mb-0 Calcular la corriente que circula por un circuito en serie que tiene una resistencia de carga de 1 Ω y dos fuentes de voltaje directo dispuestas como se observa en el circuito mostrado:
                p.fw-bold.mb-0 Solución:
                p.mb-2 #[b Paso 1:] calcular el voltaje total del circuito. Para ello se observa la disposición de las fuentes; se puede ver que las dos son del mismo valor, sin embargo, los puntos en donde se unen son del mismo polo, por lo tanto, se están restando:
                p.mb-2 𝐕 𝐭𝐨𝐭𝐚𝐥 = 6V − 6V = 0V
                p.mb-3.fw-bold Sustituyendo:
                math(style="font-weight: bold")
                  mi I
                  mo =
                  mfrac
                    mi V
                    mi R
                  mo =
                  mfrac
                    mrow
                      mn 2
                      mi V
                    mrow
                      mn 1
                      mo &#x2126;
                  mo =
                  mn 0
                  mi A
              .col-lg-5
                figure.pt-3
                  img.mx-auto(src="@/assets/curso/temas/24.svg",style="max-width: 400px;",alt="Circuito con fuentes de 6 V y 6 V en serie y resistencia de 1.0 Ω.")

    .titulo-decorativo.mt-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Resolución de circuitos en paralelo
    
    .fondo-personalizado-1.bottom-1.f2.mb-4(data-aos="fade-down")
      .fondo-personalizado-1__contenido.pt-5
        p.mb-4 Para las resistencias en paralelo se pueden observar tres reglas principales para calcular la resistencia equivalente:

        .row.justify-content-center
          .col-lg-4.mb-4
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/25.svg",style="max-width: 77px;")
              p.mb-0 Para un determinado número de resistencias en paralelo y del mismo valor, la resistencia total se calcula dividiendo el valor de una sola resistencia entre el número de ellas.
          .col-lg-4.mb-4
            .fondo-color-secundario.p-4.h-100
              figure.mb-4
                img.mx-auto(src="@/assets/curso/temas/26.svg",style="max-width: 77px;")
              p.mb-0 La resistencia total de dos resistencias en paralelo de igual o distinto valor se puede calcular con la fórmula:
              p.mb-0 Rt = (R1*R2) / (R1 + R2).
        
        p.mb-4.fw-bold Para calcular la resistencia equivalente de cualquier número de resistencias con diferentes o igual valor se usa la siguiente fórmula:

        figure.mb-4
          img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 400px;")
        
        p.fw-bold Ejemplo 1
        p.mb-4 Encontrar la corriente que circula por el circuito mostrado, suponiendo que se tiene una fuente de 12 V.

        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 6.] Circuito en paralelo con resistencias y fuente de 12 V
            .fondo-color-sistema-i.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/28.svg",style="max-width: 584px;",alt="Circuito paralelo con resistencias de 1.5 kΩ, 10 kΩ, 4.7 kΩ y 100 kΩ conectadas a una fuente de 12 V")
    
    p.fw-bold.mb-4(data-aos="fade-down") Solución

    p.mb-4(data-aos="fade-down") Este ejemplo puede resolverse de dos maneras: calculando la corriente que circula por cada resistencia y sumándolas, o determinando la resistencia equivalente para obtener la corriente total. A continuación, se resolverá utilizando ambos métodos para comprobar que los resultados coinciden.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .fondo-color-sistema-i.p-4.p-lg-5.mb-3
          p.fw-bold.mb-4 Método 1. Calculando corrientes individuales
          p.fw-bold.mb-0 Paso 1.
          p.mb-4 En un circuito en paralelo el voltaje se mantiene constante entre cada división o rama, por lo que a partir del voltaje y resistencia se puede calcular la corriente que circula por cada rama mediante la Ley de Ohm.
          figure.mb-4
            img.me-auto.d-none.d-lg-block(src="@/assets/curso/temas/29.svg",style="max-width: 470px;",alt="Fórmula Matemática")
            img.me-auto.d-lg-none(src="@/assets/curso/temas/30.svg",style="max-width: 470px;",alt="Fórmula Matemática")
          p.fw-bold.mb-0 Paso 2.
          p.mb-4 Puesto que la corriente total es la suma de las corrientes individuales, se obtiene la corriente que circula en el circuito:
          p.mb-1 I total = I1 + I2 + I3 + I4
          p.mb-0 I total = 8 mA + 1.2 mA + 2.55 mA + 0.12 mA = 11.87 mA
        .fondo-color-sistema-i.p-4.p-lg-5
          p.fw-bold.mb-4 Método 2. Calculando la resistencia total
          p.fw-bold.mb-0 Paso 1.
          p.mb-4 Utilizar la suma de recíprocos, se calcula la resistencia total:
          p.mb-4 [Ecuación]
          p.fw-bold.mb-0 Paso 2.
          p.mb-4 Ahora utilizando la Ley de Ohm se calcula la corriente total:
          p.mb-2 [Ecuación]
          p puede identificar  utilizando los dos métodos se llega al mismo resultado.
    
    p.fw-bold.mb-4(data-aos="fade-down") Ejemplo 2
    p.mb-4(data-aos="fade-down") Calcular el voltaje que proporciona la fuente para que exista una corriente de 6 amperes que fluye por todo el circuito de acuerdo al diagrama.

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 7.] Circuito con resistencias en paralelo y fuentes desconocidas
        .fondo-color-sistema-i.p-4
          figure
            img.mx-auto(src="@/assets/curso/temas/31.svg",style="max-width: 654px;",alt="Circuito mixto con resistencias de 3 kΩ en paralelo y 1 kΩ en serie, junto con una fuente desconocida.")
    
    .fondo-personalizado-1.bottom-2.f2.pt-3
      .fondo-personalizado-1__contenido
        .row.mb-5(data-aos="fade-down")
          .col-lg-6.borde-p-1
            p.fw-bold.mb-4 Solución
            p.fw-bold.mb-4 Paso 1.
            p.mb-4 Calcular la resistencia equivalente. Revise que cada par de resistencias tiene un mismo valor. Por lo tanto, se puede aplicar la fórmula de producto/suma para calcular la resistencia equivalente de cada par o la fórmula para resistencias del mismo valor.
            figure.mb-4.mb-lg-0
              img.me-auto(src="@/assets/curso/temas/32.svg",style="max-width: 400px;",alt="Fórmula Matemática")
          .col-lg-6.ps-lg-4
            p.fw-bold.mb-4(style="opacity: 0;") .
            p.fw-bold.mb-4 Paso 2.
            p.mb-4 Calcular el par del lado izquierdo de la fuente:
            figure.mb-4.mb-lg-0
              img.me-auto(src="@/assets/curso/temas/33.svg",style="max-width: 210px;",alt="Fórmula Matemática")
        
        .row.align-items-center.mb-5(data-aos="fade-down")
          .col-lg-6
            p.fw-bold.mb-4 Paso 3.
            p.mb-4 Una vez que se tiene el circuito reducido a dos resistencias como se evidencia en el diagrama, se calcula la resistencia equivalente:
            figure.mb-4.mb-lg-0
              img.me-auto(src="@/assets/curso/temas/34.svg",style="max-width: 505px;",alt="Fórmula Matemática")
          .col-lg-6
            figure
              img.mx-auto(src="@/assets/curso/temas/35.png",style="max-width: 610px;")
        
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 8.] Circuito reducido con resistencias en paralelo
            .fondo-color-sistema-i.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 542px;",alt="Circuito paralelo con dos resistencias de 10 kΩ y 5 kΩ, y una fuente desconocida.")
    
    .fondo-personalizado-1.f2
      .fondo-personalizado-1__contenido.py-5
        p.fw-bold.mb-4(data-aos="fade-down") Paso 4.
        p.mb-4(data-aos="fade-down") Una vez calculada la resistencia total, procedemos a obtener el voltaje de la fuente mediante la Ley de Ohm:
        figure.mb-4(data-aos="fade-down")
          img.me-auto(src="@/assets/curso/temas/37.svg",style="max-width: 295px;")
        .row.justify-content-center(data-aos="fade-down")
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 9.] Circuito equivalente con resistencia total y fuente de 1.99 kV.
            .fondo-color-sistema-i.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 542px;",alt="Circuito con una resistencia total de 333.33 Ω y una fuente de 1.99 kV.")
    .titulo-decorativo.mb-5(data-aos="fade-down")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Resolución de circuitos mixtos
    
    p.fw-bold.mb-4 Ejemplo 1
    p.mb-4 Determinar el voltaje que provee la fuente en el siguiente circuito, si existe una corriente circulando de 60 mA.

    .fondo-personalizado-1.top-1.f2
      .fondo-personalizado-1__contenido.pb-5
        .row.justify-content-center.mb-5(data-aos="fade-down")
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 10.] Circuito complejo con resistencias en serie y paralelo
            .fondo-color-sistema-i.p-4
              figure
                img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 718px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
        
        p.fw-bold.mb-4 Solución

        .fondo-personalizado-1.f3(data-aos="flip-up")
          .fondo-personalizado-1__contenido.py-5
            .bg-white.p-4.borde-20
              LineaTiempoC.linea-tiempo-c-1.color-acento-contenido(text-small)
                .row.justify-content-center.align-items-center.py-5(titulo="Paso 1")
                  .col-lg-6.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 1.
                    p.mb-0 Se empieza por reducir desde la parte más alejada de la fuente, primeramente por los paralelos, en este caso R6 y R7:
                
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 467px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
                .row.justify-content-center.align-items-center.py-5(titulo="Paso 2")
                  .col-lg-6.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 2.
                    p.mb-0 Ahora que ha quedado en serie la resistencia equivalente de R6 y R7, se suma con las resistencias en serie R4 y R5:
                
                  .col-lg-4
                    figure
                      img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 467px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
                .row.justify-content-center.py-5(titulo="Paso 3")
                  .col-lg-5.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 3.
                    p.mb-4 Enseguida se suma las resistencias en serie R3 y R8 para posteriormente sumarlas en paralelo con RA:
                    figure
                      img.me-auto(src="@/assets/curso/temas/43.svg",style="max-width: 295px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
                
                  .col-lg-6
                    .titulo-sexto.color-acento-contenido
                      p.mb-0 #[b Figura 11.] Circuito simplificado tras la reducción de resistencias en paralelo
                    .fondo-color-sistema-i.p-4.d-inline-flex
                      figure
                        img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 306px;",alt="Variación del circuito complejo, simplificado eliminando algunas resistencias.") 
                .row.justify-content-center.py-5(titulo="Paso 4")
                  .col-lg-5.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 4.
                    p.mb-0 Ahora se hace el paralelo entre las resistencias RA y RB:
                  .col-lg-6
                    figure
                      img.mx-auto(src="@/assets/curso/temas/44.svg",style="max-width: 467px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
                .row.justify-content-center.py-5(titulo="Paso 5")
                  .col-lg-5.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 5.
                    p.mb-0 Se realiza el paralelo de R9 y R10:
                  .col-lg-6
                    figure
                      img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 505px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
                .row.justify-content-center.py-5(titulo="Paso 6")
                  .col-lg-5.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 6.
                    p.mb-0 Ahora que todas las resistencias están en serie, nos disponemos a sumarlas para obtener la resistencia total equivalente:
                  .col-lg-6
                    figure
                      img.mx-auto(src="@/assets/curso/temas/46.svg",style="max-width: 505px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
                .row.justify-content-center.py-5(titulo="Paso 7")
                  .col-lg-5.mb-4.mb-lg-0
                    p.fw-bold.mb-4 Paso 7.
                    p.mb-0 Por último se calcula el voltaje de la fuente mediante la Ley de Ohm:
                  .col-lg-6
                    figure
                      img.mx-auto(src="@/assets/curso/temas/47.svg",style="max-width: 315px;",alt="Circuito complejo con resistencias en paralelo y en serie, con valores entre 1 Ω y 160 Ω.")
          



    

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
