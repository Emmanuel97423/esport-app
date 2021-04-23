<template>
  <div class="flex justify-end sub-menu w-full h-11 text-white bg-blueGray">
    <div class="transform -skew-x-12 w-5/6 h-11 ml-5 bg-ligthBlue">
      <div class="flex w-3/6 h-full items-center gap-8 ml-10">
        <NuxtLink class="link" to="#">{{ game.name }}</NuxtLink>
        <NuxtLink to="#">{{ game.tournament }}</NuxtLink>
        <NuxtLink to="#">{{ game.ranking }}</NuxtLink>
        <NuxtLink to="#">{{ game.vods }}</NuxtLink>
        <NuxtLink to="#">{{ game.news }}</NuxtLink>
      </div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubMenuGame',
  props: {
    game: { type: Object, required: true },
  },
}
</script>

<style scoped>
.link {
  font-weight: 400;
}
</style>
