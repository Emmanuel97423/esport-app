<template>
  <div class="container">
    <h1>Ranking</h1>
    <div class="box"><Ranking></Ranking></div>
  </div>
</template>

<script>
import Ranking from '@/components/game/Ranking'
export default {
  components: {
    Ranking,
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  margin: 3rem 0 0 0;
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0 0 3rem 0;
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bold;
  }
}
</style>
