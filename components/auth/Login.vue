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

</style>
