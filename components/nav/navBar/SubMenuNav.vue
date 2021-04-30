<template>
  <div class="box flex justify-end w-full h-11 text-white bg-black">
    <div class="box--leftSide self-center">
      <img
        :src="require('@/assets/images/game-logo/Mortal-Kombat-Embleme.png')"
        alt=""
        class="w-14 h-auto"
      />
    </div>
    <div class="flex justify-start w-10/12 bg-white -pr-24">
      <div class="flex z-10 w-10/12 h-11 ml-5">
        <div class="sub-menu flex relative w-11/12 h-full items-center gap-8">
          <NuxtLink class="link" to="#">{{ game.menu.home }}</NuxtLink>
          <NuxtLink class="link" to="#">{{ game.menu.events }}</NuxtLink>
          <NuxtLink class="link" to="#">{{ game.menu.ranking }}</NuxtLink>
          <NuxtLink class="link" to="#">{{ game.menu.vods }}</NuxtLink>
          <NuxtLink class="link" to="#">{{ game.menu.news }}</NuxtLink>
        </div>
        <div class="w-2/12 self-center justify-self-start">
          <SocialBlock></SocialBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SocialBlock from '@/components/social/SocialBlock'
export default {
  name: 'SubMenuNav',
  components: {
    SocialBlock,
  },
  props: {
    game: { type: Object, required: true },
  },
}
</script>

<style scoped>
.link {
  font-weight: 400;
  color: black;
}
.box {
  width: 100%;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
</style>
