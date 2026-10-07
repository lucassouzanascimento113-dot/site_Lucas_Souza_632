/* 1 — CURSOR PERSONALIZADO */


const cursor = document.querySelector(".cursor");

if (cursor) {

  document.addEventListener("mousemove", (event) => {

    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";

  });

  const elementosInterativos = document.querySelectorAll(
  "a, img, button, p, h1, h2, h3, .conquista, .subtitulo"
);

  elementosInterativos.forEach((elemento) => {

    elemento.addEventListener("mouseenter", () => {

      cursor.classList.add("ativo");

    });

    elemento.addEventListener("mouseleave", () => {

      cursor.classList.remove("ativo");

    });

  });

}


/* 2 — TEXTO A APARECER AO FAZER SCROLL */

const elementosRevelar =
  document.querySelectorAll(".revelar");


const observador =
  new IntersectionObserver(

    (entradas) => {

      entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

          entrada.target.classList.add("visivel");

        }

      });

    },

    {
      threshold: 0.15
    }

  );


elementosRevelar.forEach((elemento) => {

  observador.observe(elemento);

});


/* 3 — NAVEGAÇÃO */

const linksNavegacao =
  document.querySelectorAll(
    'nav a[href^="#"]'
  );


linksNavegacao.forEach((link) => {

  link.addEventListener("click", (evento) => {

    evento.preventDefault();


    const destino =
      document.querySelector(
        link.getAttribute("href")
      );


    if (!destino) {
      return;
    }


    document.body.classList.add("saindo");


    setTimeout(() => {

      destino.scrollIntoView({
        behavior: "smooth"
      });

      document.body.classList.remove("saindo");

    }, 200);


    linksNavegacao.forEach((item) => {

      item.classList.remove("ativo");

    });


    link.classList.add("ativo");

  });

});


/* 4 — BOTÃO ATIVO DURANTE O SCROLL */

const secoesNavegacao = [

  {
    secao: document.querySelector("#inicio"),
    link: document.querySelector(
      'nav a[href="#inicio"]'
    )
  },

  {
    secao: document.querySelector("#historia"),
    link: document.querySelector(
      'nav a[href="#historia"]'
    )
  },

  {
    secao: document.querySelector("#conquistas"),
    link: document.querySelector(
      'nav a[href="#conquistas"]'
    )
  }

];


const observadorSecoes =
  new IntersectionObserver(

    (entradas) => {

      entradas.forEach((entrada) => {

        if (!entrada.isIntersecting) {
          return;
        }


        secoesNavegacao.forEach((item) => {

          if (item.link) {

            item.link.classList.remove("ativo");

          }

        });


        const secaoAtual =
          secoesNavegacao.find(
            (item) =>
              item.secao === entrada.target
          );


        if (
          secaoAtual &&
          secaoAtual.link
        ) {

          secaoAtual.link.classList.add("ativo");

        }

      });

    },

    {
      threshold: 0.45
    }

  );


secoesNavegacao.forEach((item) => {

  if (item.secao) {

    observadorSecoes.observe(
      item.secao
    );

  }

});


/* 5 — LOGOTIPO → CAPA */

const logotipo =
  document.querySelector(".logotipo");


if (logotipo) {

  logotipo.addEventListener("click", (evento) => {

    evento.preventDefault();


    const inicio =
      document.querySelector("#inicio");


    if (inicio) {

      inicio.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

}


/* 6 — COMEÇAR SEMPRE NO TOPO */

if ("scrollRestoration" in history) {

  history.scrollRestoration = "manual";

}


window.addEventListener("load", () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });

});