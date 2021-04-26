<template>
  <div><SubMenu :game="game"></SubMenu></div>
</template>
<script>
import SubMenu from '@/components/nav/navBar/SubMenuNav'
export default {
  name: 'Mk11Section',
  components: {
    SubMenu,
  },
  data() {
    return {
      game: {
        menu: {
          home: 'Accueil',
          events: 'Tournois',
          ranking: 'Ranking',
          vods: 'VODs',
          news: 'News',
        },
      },
    }
  },
}
</script>
