<template>
  <div class="box">
    <div class="box__image">
      <img
        :src="require('@/assets/images/slide/mortal-kombat-face-to-face.jpg')"
        alt=""
      />
    </div>
    <div class="box__title">
      <div class="box__credits">
        <p>{{ event.organizer }} presente</p>
        <h1>{{ event.name }}</h1>
      </div>
      <div class="box__subtitle">
        <h2>{{ event.mainCard }}</h2>
      </div>
      <div class="box__button">
        <ButtonComponent class="box__btn btn__figthCard" type="red-gradient"
          >Voir la fight card</ButtonComponent
        >
      </div>
    </div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/buttons/Button'
export default {
  name: 'Slideshow',
  components: {
    ButtonComponent,
  },
  props: {
    event: { type: Object, required: true },
  },
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 70vh;
  display: flex;
  background: black;
  justify-content: center;
  align-items: flex-start;

  &__credits {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 200;
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    font-weight: bold;
    color: white;
    transform: translateY(50%);
    h1 {
      font-family: 'Open Sans Condensed', sans-serif;
      font-size: 3rem;
    }
  }
  &__subtitle {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 5rem;
    text-transform: uppercase;
    text-align: center;
  }
  &__image {
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: 0;
    object-fit: cover;
    overflow: hidden;
  }
  &__btn {
    transform: translateY(100%);
  }
}
</style>
