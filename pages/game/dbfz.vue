<template>
  <div>
    <SubMenu :game="game" v-if="$mq === 'lg'" class="subMenu"></SubMenu>
    <Slide :event="event"></Slide>
    <div>
      <EventCard :event="event"></EventCard>
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
  data() {
    return {
      game: {
        menu: {
          home: 'Accueil',
          events: 'Tournois',
          ranking: 'Ranking',
          vods: 'VODs',
          news: 'News',
          logoUrl: ' DBFZ_Logo.png',
        },
      },
      event: {
        name: 'DBFZ Utimate Fire',
        mainCard: 'Kobi Vs. Actunoon',
        fightCard: '#',
        organizer: 'Shapeless E-Sport',
        bannerUrl: 'dbfz_banner_shapless.jpg',
        eventPhase: {
          phase: {
            mainCard: {
              slots: {
                id1234: {
                  participant1: {
                    name: 'Mr.5000',
                  },
                  participant2: {
                    name: 'ValveOverKill',
                  },
                  match: 'Main Event',
                },
                id12345: {
                  participant1: {
                    name: 'MarkTheShark',
                  },
                  participant2: {
                    name: 'KillJoy',
                  },
                  match: 'Prélims',
                },
                id123456: {
                  participant1: {
                    name: 'Epok',
                  },
                  participant2: {
                    name: 'ParaSurama',
                  },
                  match: 'Prélims',
                },
                id1234567: {
                  participant1: {
                    name: 'Atrocy ZA',
                  },
                  participant2: {
                    name: 'Bliono',
                  },
                  match: 'Prélims',
                },
              },
            },
          },
        },
      },
    }
  },
}
</script>
<style lang="scss" scoped></style>
