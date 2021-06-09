<template>
  <div class="box">
    <div class="box__title">
      <div class="box__title--logo">
        <VulcainLogo></VulcainLogo>
      </div>
      <div class="box__title--signin">S'inscrire</div>
    </div>
    <div class="box__input">
      <div class="box__input--label">
        <label class="box__label" for="email">Pseudo *</label>
        <input v-model="user.pseudo" name="pseudo" type="text" />
      </div>
      <div class="box__input--label">
        <label class="box__label" for="email">Email *</label>
        <input v-model="user.email" name="email" type="email" />
      </div>
      <div class="box__input--label">
        <label class="box__label" for="password">Mot de passe *</label>
        <input v-model="user.password" name="password" type="password" />
      </div>
    </div>
    <div class="box__btn--signin">
      <Button
        type="red__large--login"
        class="box__btn btn__red"
        @click.native="signup"
        >Inscription</Button
      >

      <div class="signup__text">Déjà un compte ?</div>
      <NuxtLink to="/auth/login">
        <Button type="white__large--login" class="box__btn btn__white"
          >Connexion</Button
        ></NuxtLink
      >
    </div>
    <Alert v-if="alert.active" type="box__alert" class="alert">
      {{ alert.message }}</Alert
    >
  </div>
</template>

<script>
import Button from '@/components/buttons/Button'
import VulcainLogo from '@/components/Logo'
import Alert from '@/components/alert/Alert'
export default {
  name: 'Login',
  components: {
    Button,
    VulcainLogo,
    Alert,
  },
  data() {
    return {
      user: {
        pseudo: '',
        email: '',
        password: '',
      },
      alert: {
        message: '',
        active: false,
      },
    }
  },
  methods: {
    async signup() {
      const userData = await this.$axios
        .$post('http://localhost:8000/api/auth/signup', this.user)
        .then((res) => {
          this.data = userData
          this.$router.push('/')
        })
        .catch((res) => {
          console.log(res.response.data.message)
          this.alert.message = res.response.data.message
          this.alert.active = true
        })
    },
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
  height: 100vh;
  padding: 0;
  overflow: hidden;

  //Responsive
  @include media-max('phone-up') {
    width: 80%;
    margin: 0;
    height: 100vh;
  }
  @include media-max('tablet-up') {
    width: 80%;
    margin: 0;
  }
  &__title {
    width: 60%;
    height: 25vh;
    color: white;
    padding: 0 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    @include media-max('phone-up') {
      gap: 0.5rem;
    }
    &--logo {
      width: 100px;
      @include media-max('tablet-up') {
        width: 100px;
      }
      @include media-max('phone-up') {
        width: 40px;
      }
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
    padding: 4rem 0 2rem 0;
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
