<template>
  <div>
    <div class="navBar">
      <flashResult v-if="$mq === 'md'" class="flashResult"></flashResult>
      <flashResult v-if="$mq === 'lg'" class="flashResult"></flashResult>
      <TopNavBar></TopNavBar>
      <TopNavBarResponsive v-if="$mq === 'sm'"></TopNavBarResponsive>
      <TopNavBarResponsive v-if="$mq === 'md'"></TopNavBarResponsive>
    </div>

    <Nuxt />
    <Footer></Footer>
  </div>
</template>
<script>
import FlashResult from '@/components/game/FlashResultComponent'
import TopNavBar from '@/components/nav/navBar/TopNavBar'
import TopNavBarResponsive from '@/components/nav/navBar/TopNavBarResponsive'
import Footer from '@/components/nav/navBar/Footer'
export default {
  components: {
    TopNavBar,
    FlashResult,
    TopNavBarResponsive,
    Footer,
  },
  asyncData() {
    return {
      gameMenu: {
        accueil: 'Accueil',
        tournament: 'Tournament',
        news: 'News',
        vods: 'VODs',
        ranking: '',
      },
    }
  },
}
</script>
<style lang="scss">
html {
  font-family: 'Roboto', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: rgb(255, 255, 255);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.navBar {
  width: 100%;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
