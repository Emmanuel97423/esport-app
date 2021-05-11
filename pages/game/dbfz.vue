<template>
  <div>
    <SubMenu v-if="$mq === 'lg'" :apiMenu="apiMenu" class="subMenu"></SubMenu>
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
  name: 'DbfzSection',
  components: {
    SubMenu,
    Slide,
    EventCard,
    //  FlashResult,
  },
  data() {
    return {
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
      apiMenu: '',
    }
  },
  created() {
    this.api()
  },
  methods: {
    api() {
      return (this.apiMenu = this.$store.getters['api/dbfzApi'])
    },
  },
}
</script>
<style lang="scss" scoped></style>
