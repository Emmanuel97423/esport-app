<template>
  <div class="box flex justify-center w-full bg-primary">
    <div class="box__content flex h-16">
      <font-awesome-icon
        v-if="$mq === 'sm'"
        class="font-awesome-icon"
        icon="bars"
      ></font-awesome-icon>
      <VulcainLogo class="logo self-center w-12"></VulcainLogo>
      <div class="flex place-content-between w-auto h-full gap-7">
        <div v-if="$mq === 'lg'" class="box__menu flex gap-7">
          <NuxtLink class="link uppercase" to="/game/allGame">Arène</NuxtLink>
          <NuxtLink class="link uppercase" to="/game/mk11/">Mk11</NuxtLink>
          <NuxtLink class="link uppercase" to="/game/dbfz">dbfz</NuxtLink>
          <NuxtLink class="link uppercase" to="/game/game-vote"
            >Future jeu</NuxtLink
          >
        </div>
        <div v-if="$mq === 'lg'" id="game-vote" class="game-vote">
          <span>VOTE</span>
        </div>
        <div
          class="box__button flex justify-self-center items-center gap-4 ml-32"
        >
          <input
            v-if="$mq === 'lg'"
            type="search"
            class="self-center h-8 border bg-white focus:border border-gray-600 outline-none p-2 text-white appearance-none"
            placeholder="Tournoi, joueurs..."
          />
          <button class="self-center text-white">search</button>
          <icon class="self-center text-white">icon</icon>
          <div class="flex gap-2">
            <Button>Connexion</Button>
            <Button v-if="$mq === 'lg'" type="red-gradient">S'inscrire</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VulcainLogo from '@/components/Logo'
import Button from '@/components/buttons/Button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'TopNavBar',
  components: {
    VulcainLogo,
    Button,
    'font-awesome-icon': FontAwesomeIcon,
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

<style lang="scss" scoped>
.box {
  @media (max-width: 1250px) {
    width: 100%;
    padding: 0 10px 0 10px;
  }
}
.box__content {
  @media (max-width: 1250px) {
    width: 100%;
    padding: 0 10px 0 10px;
    display: flex;
    justify-content: space-between;
  }
}
.logo {
  @media (max-width: 1250px) {
    justify-self: start;
    left: 0;
    transform: translateX(-65%);
    width: 40px;
    transition: 1s ease-in-out;
  }
}
.box__button {
  @media (max-width: 40rem) {
    margin: 0;
  }
}
.box__menu,
.game-vote {
  @media (max-width: 40rem) {
    display: none;
  }
}
li,
.link {
  font-family: 'Roboto';
  font-style: italic;
  font-weight: 900;
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
  appearance: none;
  border: none;
}
.burger__btn {
  color: white;
}
.font-awesome-icon {
  color: white;
  align-self: center;
  justify-self: flex-start;
  left: 0;
}
</style>
