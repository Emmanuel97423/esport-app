<template>
  <div class="box box__opened">
    <ul class="box__nav box__menu">
      <li class="box__menu--main">
        <div>
          <NuxtLink class="box__menu--link uppercase" to="/game/mk11"
            >Mk11</NuxtLink
          >
        </div>
        <ul class="box__menu--dropdown">
          <li class="box__menu--item"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
// register the component
export default {
  name: 'TopNavBarResponsive',
  components: {},
  asyncData() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
}
</style>
