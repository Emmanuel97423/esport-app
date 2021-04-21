<template>
  <div class="flex justify-center bg-primary w-full h-16">
    <div class="flex bg-primary w-5/6 h-16">
      <VulcainLogo class="self-center w-12"></VulcainLogo>
      <div class="flex justify-between w-full h-full ml-6">
        <ul class="flex gap-8">
          <a href="" class="">JEUX</a>
          <a href="" class="">DBFZ</a>
          <a href="" class="">MK11</a>
          <a href="" class="">COD</a>
          <a href="" class="">FORTNITE</a>
          <a href="" class="">FUTUR JEU</a>
          <div id="game-vote"><span>VOTE</span></div>
        </ul>
        <div class="flex justify-self-end ml-8 gap-5">
          <input
            type="search"
            class="self-center h-8 border bg-gray-700 focus:border border-gray-600 outline-none p-2 text-white appearance-none"
            placeholder="Tournoi, joueurs..."
          />
          <button class="self-center text-white">search</button>
          <icon class="self-center text-white">icon</icon>

          <div
            class="uppercase py-2 px-4 login--button self-center text-white border-gray-700 text-xs"
          >
            Connexion
          </div>
          <div
            class="uppercase -ml-3.5 py-2 px-4 login--button self-center text-white border-gray-700 text-xs"
          >
            S'inscrire
          </div>
        </div>
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
li,
a {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
#game-vote {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0 0 -25px;
  text-align: center;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  background-color: rgb(55, 6, 23);
  width: 40px;
  height: 20px;
  align-self: center;
  border-style: solid;
  border-width: 2px;
  border-image: linear-gradient(
      45deg,
      rgb(157, 2, 8, 0.6),
      rgb(244, 140, 6, 0.9)
    )
    1;
  transform: skew(-12deg);
}
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
.login--button {
  font-family: 'Roboto';
  border-width: 0.01em;
  font-weight: 700;
  font-style: italic;
}
</style>
