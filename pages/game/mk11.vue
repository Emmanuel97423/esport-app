<template>
  <div>
    <SubMenu :game="game" class="subMenu"></SubMenu>
    <Slide :event="event"></Slide>
    <div>
      <EventCard></EventCard>
    </div>
  </div>
</template>
<script>
import SubMenu from '@/components/nav/navBar/SubMenuNav'
import EventCard from '@/components/game/EventCard'
//  import FlashResult from '@/components/game/FlashResult'
import Slide from '@/components/slide/SlideShow'
export default {
  name: 'Mk11Section',
  components: {
    SubMenu,
    Slide,
    EventCard,
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
        mainCard: 'MarkTheShark Vs. KillJoy',
        fightCard: '#',
        organizer: 'Charlie Wolff Gaming',
      },
    }
  },
}
</script>
<style lang="scss" scoped></style>
