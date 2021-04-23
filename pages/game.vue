<template>
  <div>
    <div><subMenu :game="game"></subMenu></div>
    Game page {{ game.name }}
  </div>
</template>

<script>
import subMenu from '@/components/nav/navBar/SubMenuNav'
export default {
  components: {
    subMenu,
  },
  data() {
    return {
      game: {
        name: 'Accueil',
        tournament: 'Tournament',
        ranking: 'Ranking',
        vods: 'VODs',
        news: 'News',
      },
    }
  },
}
</script>

<style></style>
