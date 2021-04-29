<template>
<<<<<<< HEAD
  <div>Mk11 Section</div>
</template>

<script>
export default {}
</script>

<style></style>
=======
  <div>
    <SubMenu :game="game" class="subMenu"></SubMenu>
    <Slide :event="event"></Slide>
  </div>
</template>
<script>
import SubMenu from '@/components/nav/navBar/SubMenuNav'
//  import FlashResult from '@/components/game/FlashResult'
import Slide from '@/components/slide/SlideShow'
export default {
  name: 'Mk11Section',
  components: {
    SubMenu,
    Slide,
    //  FlashResult,
  },
  asyncData() {
    return {
      game: {
        menu: {
          home: 'Accueil',
          events: 'Tournois',
          ranking: 'Ranking',
          vods: 'VODs',
          news: 'News',
          logoUrl: ' @/assets/images/game-logo/Mortal-Kombat-Embleme.png',
        },
      },
      event: {
        name: 'SALT SERIES',
        mainCard: 'TBK KillJoy Vs. ILLUSION MarkTheShark',
        fightCard: '#',
        organizer: 'Charlie Wolff Gaming',
      },
    }
  },
}
</script>
<style lang="scss" scoped></style>
>>>>>>> develop
