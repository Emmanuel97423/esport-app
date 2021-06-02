<template>
  <div class="box h-auto">
    <Nuxt />
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/images/background/login/tekken7.png');
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: space-between;

  //Responsive
  @include media-max('phone-up') {
    justify-content: center;
    align-items: center;
  }
  @include media-max('tablet-up') {
    justify-content: center;
    align-items: center;
  }
}
</style>
