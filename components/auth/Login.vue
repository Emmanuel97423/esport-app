<template>
  <div class="box">
    <div class="box__title">
      <div class="box__title--logo">
        <img :src="require('@/assets/images/logo.png')" alt="" />
      </div>
      <div class="box__title--signin">Connexion</div>
    </div>
    <div class="box__input">
      <div class="box__input--label">
        <label class="box__label" for="email">Email *</label>
        <input name="email" type="email" />
      </div>
      <div class="box__input--label">
        <label class="box__label" for="password">Mot de passe *</label>
        <input name="password" type="password" />
        <div class="box__input--link">
          <a href="#">Mot de passe oublié ? Cliquez ici</a>
        </div>
      </div>
    </div>
    <div class="box__btn--signin">
      <Button type="red__large--login" class="box__btn btn__red"
        >Connexion</Button
      >
      <div class="signup__text">Pas de compte ?</div>
      <Button type="white__large--login" class="box__btn btn__white"
        >Créer un compte</Button
      >
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
.box {
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;
  height: 75vh;
  margin: 4rem 0 0 4rem;
  border-radius: 5px;
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
  cursor: pointer;
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
</style>
