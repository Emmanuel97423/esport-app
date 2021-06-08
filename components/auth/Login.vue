<template>
  <div class="box">
    <div class="box__title">
      <div class="box__title--signin">Connexion</div>
      <div class="box__title--logo"></div>
    </div>
    <div class="box__title--input">
      <input type="email" />
      <input type="password" />
    </div>
    <div class="box__btn--signin">
      <Button class="btn__red"></Button>
      <div class="signup__text">Pas de compte ?</div>
      <Button class="btn__white"></Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/buttons/Button'
export default {
  name: 'Login',
  components: {
    Button,
  },
}
</script>
<style lang="scss" scoped>
<<<<<<< HEAD

=======
.box {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 100vh;

  padding: 0;

  overflow: auto;
  //Responsive
  @include media-max('phone-up') {
    width: 80%;
    margin: 0;
  }
  @include media-max('tablet-up') {
    width: 80%;
    margin: 0;
  }
  &__title {
    width: 60%;
    height: 25vh;
    color: white;
    margin: 0 0 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    @include media-max('phone-up') {
    }
    &--logo {
      width: 100px;
    }
  }
  &__input {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 70%;

    input {
      padding: 10px;
      margin: 2px 0 0 0;
      width: 100%;
      border-radius: 3px;
    }
    &--link {
      margin: 0.5rem 0 0 0;
      a {
        color: rgba(255, 255, 255, 0.2);
        font-size: 0.8rem;
      }
    }
  }
  &__label {
    color: white;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  &__btn--signin {
    margin: 4rem 0 4rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    @include media-max('phone-up') {
      margin: 2rem 0 0 0;
    }
  }
}

.signup__text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin: 1.5rem 0 1.5rem 0;
  font-weight: normal;
  font-size: 0.8rem;
  font-family: resident-secondary-font, Roboto-Regular, arial;
  &::before {
    content: '';
    flex: 1;
    border-bottom: 1px solid #838383;
    margin: 0 20px 0 0;
  }
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #838383;
    margin: 0 0 0 20px;
  }
}
>>>>>>> ede59cedaff99e20d7768a7ab62167bd033ceb9c
</style>
