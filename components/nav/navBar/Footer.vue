<template>
  <div class="box">
    <div class="box__content">
      <div class="box__content--menu">
        <VulcainLogo class="logo self-center w-12"></VulcainLogo>
      </div>
      <div class="box__content--menu">
        <p>Copyright &copy; 2021 VULCAIN.GG tous droits réservés</p>
      </div>
    </div>
    <div class="box__content--list">
      <div class="box__content--list-child">
        <span>Vulcain.gg</span>
        <ul>
          <li>DBFZ</li>
          <li>Mortal Kombat</li>
          <li>Tekken 7</li>
          <li>Call Of Duty</li>
          <li>Fortnite</li>
        </ul>
      </div>
      <div class="box__content--list-child">
        <span>Vulcain.gg</span>
        <ul>
          <li>DBFZ</li>
          <li>Mortal Kombat</li>
          <li>Tekken 7</li>
          <li>Call Of Duty</li>
          <li>Fortnite</li>
        </ul>
      </div>
      <div class="box__content--list-child">
        <span>Vulcain.gg</span>
        <ul>
          <li>DBFZ</li>
          <li>Mortal Kombat</li>
          <li>Tekken 7</li>
          <li>Call Of Duty</li>
          <li>Fortnite</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import VulcainLogo from '@/components/Logo'
export default {
  name: 'Footer',
  components: {
    VulcainLogo,
  },
}
</script>
<style lang="scss" scoped>
.box {
  padding: 2rem;
  width: 100%;
  height: 50vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &--list {
      display: flex;
      justify-content: space-between;
      column-gap: 2rem;
    }
  }
}
</style>
