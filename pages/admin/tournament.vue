<template>
  <div class="box">
    <h2>Ajouter un jeu</h2>
    <form class="form" @submit.prevent="onSubmit">
      <select id="select-game" v-model="gameSelected" name="select-game">
        <option disabled value="">Selectionnez un jeu</option>
        <option>Dragon Ball Fighterz</option>
        <option>Tekken</option>
        <option>Mortal Kombat 11</option>
        <option>Warzone</option>
        <option>Fifa</option>
        <option>Fortnite</option></select
      ><br />

      <label for="copyrights">Copyright ©</label><br />
      <input v-model="game.copyrights" type="text" name="copyrights" />

      <h2>Selectionnez la ou les plateforme autorisé</h2>
      <input
        id="pc"
        v-model="game.platformsAvailable"
        type="checkbox"
        value="pc"
      />
      <label for="pc">Pc</label>
      <input
        id="ps4/ps5"
        v-model="game.platformsAvailable"
        type="checkbox"
        value="ps4/ps5"
      />
      <label for="ps4">Ps4</label>
      <input
        id="xbox"
        v-model="game.platformsAvailable"
        type="checkbox"
        value="xbox"
      />
      <label for="xbox">Xbox</label>
      <input
        id="switch"
        v-model="game.platformsAvailable"
        type="checkbox"
        value="switch"
      />
      <label for="switch">Switch</label>

      <h2>Taille équipe Minimal</h2>
      <input
        id="teamSizeMin1"
        v-model="game.teamSize.min"
        type="radio"
        value="1"
      />
      <label for="teamSizeMin1">1</label>
      <input
        id="teamSizeMin2"
        v-model="game.teamSize.min"
        type="radio"
        value="2"
      />
      <label for="teamSizeMin2">2</label>
      <input
        id="teamSizeMin3"
        v-model="game.teamSize.min"
        type="radio"
        value="3"
      />
      <label for="teamSizeMin3">3</label>
      <input
        id="teamSizeMin4"
        v-model="game.teamSize.min"
        type="radio"
        value="4"
      />
      <label for="teamSizeMin4">4</label>

      <h2>Taille équipe Maximal</h2>
      <input
        id="teamSizeMax1"
        v-model="game.teamSize.max"
        type="radio"
        value="1"
      />
      <label for="teamSizeMax1">1</label>
      <input
        id="teamSizeMax2"
        v-model="game.teamSize.max"
        type="radio"
        value="2"
      />
      <label for="teamSizeMax2">2</label>
      <input
        id="teamSize3"
        v-model="game.teamSize.max"
        type="radio"
        value="3"
      />
      <label for="teamSize3">3</label>
      <input
        id="teamSizeMax4"
        v-model="game.teamSize.max"
        type="radio"
        value="4"
      />
      <label for="teamSizeMax4">4</label><br />
      <button>Créer</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gameSelected: '',

      game: {
        id: '',
        name: '',
        shortName: '',
        fullName: '',
        copyrights: '',
        platformsAvailable: [],
        teamSize: {
          max: '',
          min: '',
        },
        features: [
          {
            name: '',
            type: '',
            options: {},
          },
        ],
      },
    }
  },
  methods: {
    shortName() {},
    onSubmit() {
      switch (this.gameSelected) {
        case 'Fifa':
          this.game.shortName = 'Fifa'
          this.game.name = 'Fifa'
          break
        case 'Dragon Ball Fighterz':
          this.game.shortName = 'Dbfz'
          this.game.name = 'Dragon Ball Fighterz'
          break
        case 'Tekken':
          this.game.shortName = 'Tekken'
          this.game.name = 'Tekken'

          break
        case 'Mortal Kombat 11':
          this.game.shortName = 'Mk11'
          this.game.name = 'Mortal Kombat 11 Ultimate'
          break
        case 'Warzone':
          this.game.shortName = 'COD WZ'
          this.game.name = 'Call Of Duty Warzone'
          break
        case 'Fortnite':
          this.game.shortName = 'Fortnite'
          this.game.name = 'Fortnite'
          break
        default:
          console.log(`Oups il faut selectionner ${this.gameSelected}`)
      }
      this.$axios
        .$post('http://localhost:8000/api/game', {
          name: this.gameSelected,
          shortName: this.game.shortName,
          fullName: this.game.name,
          copyrights: this.game.copyrights,
          platformsAvailable: this.game.platformsAvailable,
          teamSize: this.game.teamSize,
        })
        .then((res) => {
          console.log(res.response.data.message)
        })
        .catch((res) => {
          console.log(res.response.data.message)
        })
    },
  },
}
</script>
