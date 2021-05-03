<template>
  <div class="box box__opened">
    <ul class="box__nav box__menu">
      <li class="box__menu--main">
        <div>
          <NuxtLink class="link uppercase" to="/game/allGame"
            >Tous les jeux</NuxtLink
          >
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </li>
      <li>
        <div>
          <NuxtLink class="link uppercase" to="/game/mk11">Mk11</NuxtLink>
        </div>
        <ul>
          <li>
            <NuxtLink class="link uppercase" to="/game/mk11">Accueil</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link uppercase" to="/game/mk11/event"
              >Tournois</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="link uppercase" to="/game/mk11">Rankings</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link uppercase" to="/game/mk11">Stream</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link uppercase" to="/game/mk11">Blog</NuxtLink>
          </li>
        </ul>
      </li>
      <li></li>
      <li></li>
    </ul>
    <div></div>
  </div>
</template>
<script>
// register the component
export default {
  components: {},
  asyncData() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.box,
.box__opened {
  -moz-transition-duration: 0.2s;
  transition-duration: 0.2s;
  transition-property: -webkit-transform;
  -moz-transition-property: transform, -moz-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform, -moz-transform;
  -moz-transition-timing-function: ease-in-out;
  transition-timing-function: ease-in-out;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.box {
  width: 100%;
  height: -moz-calc(100vh - var(--header-height));
  height: calc(100vh - var(--header-height));
  padding-top: 1.5rem;
  position: absolute;
  top: var(--header-height);
  left: 0;
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
  background-color: var(--grey-950);
}
.box__nav {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-bold);
  font-style: italic;
}
</style>
