const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      slides: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],

      activeSlide: 0,
    };
  },

  methods: {
    //creo il comando next e lo lego nell'html con il @click
    nextSlide() {
      //faccio in modo che il ciclo non si blocchi ma che si ripeta da capo.
      //SE activeSlides (+1) è minore di 4 (la lunghezza dell'array)
      ///ALLORA incremento l'index e passo alla successiva
      //ALTRIMENTI la activeSlide torna ad essere la prima slide dell'array (index 0)
      if (this.activeSlide + 1 < this.slides.length) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0;
      }
    },
    //creo il comando prev e lo lego nell'html con il @click
    prevSlide() {
      //vado a ritroso con le slide
      //SE activeSlides (-1) è maggiore di 0 (la prima slide dell'array)
      ///ALLORA decremento l'index e passo alla precedente
      //ALTRIMENTI se il numero diventa negativo (non ci sono index negativi) la activeSlide torna ad essere l'ultima slide dell'array (index 4)
      if (this.activeSlide - 1 >= 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.slides.length - 1;
      }
    },

    //creo il comando click e lo lego all'html con il @click sulle thumb e nel v-for aggiusto la sintassi per specificare index (  (slide, index) in slides)
    clickSlide(i) {
      //activeSlide acquisirà il valore dell'index cliccato
      this.activeSlide = i;
    },
  },
});

app.mount("#carousel");
