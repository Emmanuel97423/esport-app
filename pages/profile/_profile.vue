<template>
  <!-- Structure principale page profile-->
  <div class="box">
    <!-- Pseudo ou gamerTag du joueur-->
    <div class="box__fullname">
      <h1>Epok</h1>
      <span>Epok</span>
    </div>
    <!-- Titre des statistiques-->
    <div class="box__stats--title">
      <h2>Statistiques et records</h2>
    </div>
    <!-- Statistique des résultats TOP3-->
    <div class="box__stats">
      <div class="box__stats--result">
        <div class="box__stats--result-data">1</div>
        <div class="box__stats--result-label">Première place</div>
      </div>
      <div class="box__stats--result">
        <div class="box__stats--result-data">6</div>
        <div class="box__stats--result-label">Seconde place</div>
      </div>
      <div class="box__stats--result">
        <div class="box__stats--result-data">3</div>
        <div class="box__stats--result-label">Troisième place</div>
      </div>
    </div>
    <!-- Affiche les statistiques du taux de victoires-->
    <div class="box__stats">
      <div class="box__stats--winrate">
        <div class="box__stats--winrate-data">
          <span>35%</span>
          <p>Winrate</p>
        </div>
        <div class="box__stats--winrate-label">
          <div class="box__stats--winrate-text">
            <p v-if="!plural">Victoire</p>
            <p v-if="plural">Victoires</p>
            <span>10</span>
          </div>
          <div class="box__stats--winrate-text">
            <p v-if="!plural">Défaite</p>
            <p v-if="plural">Défaites</p>
            <span>6</span>
          </div>
        </div>
      </div>
      <!-- Nombre de tournoi participé-->
      <div class="box__stats--winrate">
        <div class="box__stats--winrate-data">
          <span>15</span>
          <p v-if="!plural">Tournoi participé</p>
          <p v-if="plural">Tournois participés</p>
        </div>
        <div class="box__stats--winrate-label">
          <div class="box__stats--winrate-text">
            <p>Local</p>
            <span>9</span>
          </div>
          <div class="box__stats--winrate-text">
            <p>International</p>
            <span>6</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Coordonnées du profile-->
    <div class="box__profile">
      <!-- Coordonnées du profile section de gauche-->
      <div class="box__profile--left">
        <img src="~/assets/images/users/avatar-1.png" alt="" />
        <h3>Suivre</h3>
        <div class="box__profile--social">
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fab', 'twitter']"
          ></font-awesome-icon>
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fab', 'discord']"
          ></font-awesome-icon>
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fab', 'facebook']"
          ></font-awesome-icon>
          <font-awesome-icon
            class="font-awesome-icon"
            :icon="['fab', 'twitch']"
          ></font-awesome-icon>
        </div>
      </div>
      <!-- Coordonnées du profile section de droite-->
      <div class="box__profile--right">
        <div class="box__profile--status line">
          <h3>Status</h3>
          <span>Actif</span>
        </div>
        <div class="box__profile--location line">
          <h3>Ville</h3>
          <span>Saint-Paul, Réunion</span>
        </div>
        <div class="box__profile--support line">
          <div>
            <h3>Hardware</h3>
            <span>Pc </span><span>Ps4 </span><span>Ps5 </span>
          </div>
          <div>
            <h3>Style</h3>
            <span>Versus Fighting </span><span>Fps</span>
          </div>
        </div>
        <div class="box__profile--since line">
          <h3>Début dans l'arène</h3>
          <span>16 Juin 2021</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  components: {
    'font-awesome-icon': FontAwesomeIcon,
  },
  asyncData() {
    return {
      plural: true,
    }
  },
}
</script>

<style lang="scss" scoped>
//Configuration icon
.font-awesome-icon {
  font-size: 2rem;
  cursor: pointer;
}
.line {
  border-bottom: 0.5px solid #d1d1d1;
  padding: 0 0 3rem 0;
}
//Conteneur principale
.box {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    text-transform: uppercase;
    font-size: 2rem;
  }
  //Gamer tag en Top
  &__fullname {
    width: 100%;
    height: auto;
    display: flex;

    h1 {
      font-size: 8rem;
      z-index: 2;
    }
    span {
      font-size: 18rem;
      position: absolute;
      color: #ebebeb;
      z-index: -1;
      transform: translateY(-15%);
    }
  }
  //Statistiques de classement ou ranking
  &__stats {
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &--title {
      text-align: center;
      font-weight: bold;
    }
    &--result {
      display: flex;
      flex-direction: column;
      align-items: center;
      &-data {
        font-size: 3rem;
      }
      &-label {
        text-transform: uppercase;
        font-size: 0.7rem;
        color: #9999a9;
      }
    }
    //Données de winrate
    &--winrate {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 2rem 0 0 0;
      width: 40%;
      height: 30vh;
      padding: 1rem;
      box-shadow: 0 2px 10px rgba(201, 201, 201, 1);
      &-label {
        width: 50%;
      }
      &-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          text-transform: uppercase;
          font-size: 0.9rem;
          color: #333333;
          margin: 0 0 2rem 0;
        }

        span {
          font-size: 4rem;
          font-weight: bold;
        }
      }
      &-text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        font-size: 0.7rem;
        color: #9999a9;
        span {
          color: #464646;
        }
      }
    }
  }
  //Coordonnées du profile
  &__profile {
    width: 100%;
    display: flex;
    &--left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h3 {
        width: 70%;
        text-align: center;
        margin: 2.5rem 0;
        padding: 1.5rem 0 1.5rem 0;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.7rem;
        border-top: 1px solid #d1d1d1;
        border-bottom: 1px solid #d1d1d1;
      }
    }
    &--right {
      width: 50%;
      padding: 4rem;
      margin: 3rem 0 0 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      h3 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.7rem;
        color: #afafaf;
      }
      span {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.3rem;
      }
    }

    &--social {
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
    &--support {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
