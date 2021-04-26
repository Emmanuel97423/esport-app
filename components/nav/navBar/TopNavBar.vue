<template>
  <div class="flex justify-around w-full bg-primary">
    <div class="flex w-auto h-16">
      <VulcainLogo class="self-center w-12"></VulcainLogo>
      <div class="flex place-content-between w-auto h-full gap-7">
        <div class="flex gap-7">
          <NuxtLink class="link uppercase" to="/game/allGame"
            >Tous les jeux</NuxtLink
          >
          <NuxtLink class="link uppercase" to="/game/mk11/home">Mk11</NuxtLink>
          <NuxtLink class="link uppercase" to="/game/dbfz">dbfz</NuxtLink>
          <NuxtLink class="link uppercase" to="/game/game-vote"
            >Future jeu</NuxtLink
          >
        </div>
        <div id="game-vote"><span>VOTE</span></div>
        <div class="flex justify-self-end items-center gap-4 ml-32">
          <input
            type="search"
            class="self-center h-8 border bg-gray-700 focus:border border-gray-600 outline-none p-2 text-white appearance-none"
            placeholder="Tournoi, joueurs..."
          />
          <button class="self-center text-white">search</button>
          <icon class="self-center text-white">icon</icon>
          <div class="flex gap-2">
            <Button>Connexion</Button>
            <Button type="red-gradient">S'inscrire</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VulcainLogo from '@/components/Logo'
import Button from '@/components/buttons/Button'
export default {
  name: 'TopNavBar',
  components: {
    VulcainLogo,
    Button,
  },
  data() {
    return {
      menuGames: {
        allGame: {
          name: 'Jeux',
          type: 'linkAllGame',
        },
        game1: {
          name: 'dbfz',
          type: 'versus',
        },
        game2: {
          name: 'Mk11',
          type: 'versus',
        },
        game3: {
          name: 'Cod',
          type: 'versus',
        },
        game4: {
          name: 'Fortnite',
          type: 'versus',
        },
        linkVote: {
          name: 'Futur jeu',
          url: '#',
          backgroundImage: '',
        },
      },
    }
  },
}
</script>

<style scoped>
li,
.link {
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
  margin: 8px 0 0 -15px;
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
input {
  font-weight: 200;
}
</style>
