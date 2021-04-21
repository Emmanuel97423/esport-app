<template>
  <div class="flex justify-center bg-primary w-full h-16">
    <div class="flex bg-primary w-5/6 h-16">
      <VulcainLogo class="self-center w-12"></VulcainLogo>
      <div class="flex justify-start justify-items-center w-full h-full ml-6">
        <ul class="flex gap-8">
          <li>JEUX</li>
          <li>DBFZ</li>
          <li>MK11</li>
          <li>COD</li>
          <li>FORTNITE</li>
          <li>FUTURE JEU</li>
          <div id="game-vote"><span>VOTE</span></div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import VulcainLogo from '@/components/Logo'
export default {
  name: 'TopNavBar',
  components: {
    VulcainLogo,
  },
}
</script>

<style scoped>
li {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
#game-vote {
  margin: 10px 0 0 -25px;
  text-align: center;
  font-size: 0.6rem;
  font-weight: 700;
  color: white;
  background-color: rgb(55, 6, 23);
  width: 40px;
  height: 17px;
  align-self: center;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(
      45deg,
      rgb(157, 2, 8, 0.6),
      rgb(244, 140, 6, 0.6)
    )
    1;
  transform: skew(-12deg);
}
</style>
