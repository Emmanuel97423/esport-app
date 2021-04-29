<template>
  <div class="flex justify-center w-full carrousel">
    <div>
      <button class="btn--prev" @click="showPrev">show me the previous</button>
    </div>
    <VueSlickCarousel
      ref="carousel"
      class="slickCar flex"
      v-bind="slideSettings"
    >
      <div
        v-for="phase in phases"
        :key="phase.id"
        class="box box--result__section w-full h-full"
      >
        <div class="box--title__event">
          <img
            class="game--logo"
            :src="
              require('@/assets/images/game-logo/Mortal-Kombat-Embleme.png')
            "
            alt=""
          />
          <span class="box--slider__title">{{ phase.event }}</span>
        </div>
        <div class="box--participant__details">
          <div class="box--participant">
            <div>
              <div class="box--participant__1 participant">
                <img
                  class="flag"
                  :src="require('@/assets/images/flag/flag-za.png')"
                  alt=""
                />
                <p class="style--name">{{ phase.slot.seed1.participant }}</p>
              </div>
              <div class="box--participant__2 participant">
                <img
                  class="flag"
                  :src="require('@/assets/images/flag/flag-zambia.jpg')"
                  alt=""
                />
                <p class="style--name">{{ phase.slot.seed2.participant }}</p>
              </div>
            </div>
          </div>
          <div class="box--details">
            <div class="box--details__grid">
              <div class="box--details__label">
                <div class="box--details__date">Apr 4, 2021</div>
              </div>
              <div class="box--details__score winner">
                <span>3</span>
                <div
                  class="box--participant__score box--participant__winner"
                ></div>
              </div>
              <div class="box--details__score">
                <span>0</span>
                <div class="box--participant__score"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VueSlickCarousel>
    <div>
      <button class="btn--next" @click="showNext">Next</button>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'FlashResultComponent',
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      phases: {
        match1: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'Illusion MarkTheShark',
              score: 3,
            },
            seed2: {
              participant: 'Gematrix Mr5000',
              score: 2,
            },
          },
        },
        match2: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'ValveOverKil',
              score: 3,
            },
            seed2: {
              participant: 'BOG',
              score: 2,
            },
          },
        },
        match3: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'TBK KillJoy',
              score: 3,
            },
            seed2: {
              participant: 'AtrocityZA',
              score: 2,
            },
          },
        },
        match4: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'ParaSurama',
              score: 3,
            },
            seed2: {
              participant: 'PandaBarre',
              score: 2,
            },
          },
        },
        match5: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'Im Grooty',
              score: 3,
            },
            seed2: {
              participant: 'BloodLine',
              score: 2,
            },
          },
        },
        match6: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'Epok',
              score: 3,
            },
            seed2: {
              participant: 'Legwati',
              score: 2,
            },
          },
        },
        match7: {
          id: '123',
          event: 'Salt Series by CharlieWolff Gaming',
          slot: {
            seed1: {
              participant: 'Ai Cortex',
              score: 3,
            },
            seed2: {
              participant: 'Uchiha Lebo',
              score: 2,
            },
          },
        },
      },
      slideSettings: {
        centerMode: false,
        centerPadding: '20px',
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 6,
        speed: 500,

        responsive: [
          {
            breakpoint: 1530,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 4,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>

<style scoped>
.box--result__section {
  margin-right: 0;
  border-right: 1px solid #37364c;
}
.flag {
  width: 1.3125rem;
  height: 1rem;
}
.game--logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
}

.box {
  width: 100%;
  min-width: 16rem;
  max-width: 19rem;
  padding: 1rem;
}
.box--title__event {
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1rem 1fr;
  grid-gap: 0.5rem;
}
.box--slider__title {
  line-height: 1.333;
  font-size: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #9999a9;
}
.box--participant__details {
  display: grid;
  position: relative;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
  width: 100%;
}
.box--participant {
  display: grid;
  position: relative;
  grid-template-columns: 1fr auto;
  grid-column-gap: 1rem;
  width: 100%;
}
.participant {
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
  align-items: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -webkit-justify-content: flex-start;
  -moz-box-pack: start;
  justify-content: flex-start;
}
.box--participant__1 {
  margin-bottom: 1rem;
}
.style--name {
  line-height: 1;
  font-size: 0.875rem;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
  font-weight: bold;
}
.box--details {
  display: block;
}
.box--details__grid {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-auto-flow: column;
  grid-row-gap: 1rem;
  grid-column-gap: 0.5rem;
  -webkit-align-items: center;
  -moz-box-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  justify-content: center;
  line-height: 1.33333333;
  font-size: 0.75rem;
  text-align: right;
}
.box--details__label {
  grid-row: 1/3;
  grid-column: 1;
}
.box--details__date {
  color: #9999a9;
}
.box--details__score {
  padding-right: 1rem;
  grid-column: 2;
  line-height: 1;
  font-size: 0.875rem;
  margin-left: 1rem;
  position: relative;
  min-width: 1.5rem;
  font-weight: bold;
  color: #9999a9;
}
.box--participant__winner {
  width: 0.5rem;
  height: 0.875rem;
  position: absolute;
  top: 0;
  right: 0;
  overflow: hidden;
}
.box--participant__winner:after {
  width: 100%;
  height: 0.875rem;
  display: block;
  position: relative;
  left: 0.125rem;
  -webkit-transform: skew(-10deg);
  -moz-transform: skew(-10deg);
  transform: skew(-10deg);
  background: red;
  content: '';
}
.winner {
  color: black;
}
.btn--next {
  outline: none;
  background: transparent;
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 6%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0 0 0 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
  right: 1.5rem;
}
.btn--next::before {
  margin: 0 10px 0 0;
  color: black;
  opacity: 1;
  content: '→';
  font-family: Roboto;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  opacity: 0.75;
  text-decoration: inherit;
  vertical-align: inherit;
  transform: translateY(-50%);
}
.btn--prev {
  outline: none;
  background: transparent;
  font-size: 0;
  line-height: 0;
  position: absolute;
  top: 6%;
  display: block;
  width: 20px;
  height: 20px;
  padding: 0 15px 0 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
  border: none;
  left: 1.5rem;
}
.btn--prev::before {
  color: black;
  opacity: 1;
  content: '←';
  font-family: roboto;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  opacity: 0.75;
  text-decoration: inherit;
  vertical-align: inherit;
  transform: translateY(-50%);
}
.slickCar {
  width: 95%;
}
</style>
