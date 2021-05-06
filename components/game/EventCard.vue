<template>
  <div class="box">
    <ul class="box__title">
      <li id="event__soon" class="box__title--label">A venir</li>
      <li id="event__past" class="box__title--label">Passé</li>
    </ul>
    <div class="box__subtitle--label">7 Tournois</div>

    <div
      v-for="slot in event.phase.mainCard.slots"
      :key="slot.id"
      class="box__content"
    >
      <div class="box__event--logo">
        <img
          :src="require('@/assets/images/game-logo/Mortal-Kombat-Embleme.png')"
          alt=""
        />
      </div>
      <div class="box__event--player-container">
        <div class="box__event--fight-narrow">
          <div class="box__event--carrousel">
            <div class="box__event--carrousel-content">
              <button class="slick__prev"></button>
              <div class="slick__list">
                <img
                  :src="require('@/assets/images/users/avatar-1.png')"
                  alt=""
                />
                <div class="slick__list--versus-img">Vs.</div>
                <img
                  :src="require('@/assets/images/users/avatar-2.png')"
                  alt=""
                />
              </div>
              <button class="slick__forward"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="box__event--infos">
        <h3>
          {{ slot.participant1.name }}
          <span class="box__event--infos-versus">Vs.</span>
          {{ slot.participant2.name }}
        </h3>
        <span>Sun, May 9 / 4:00 AM +04 / Main Card</span>
        <p>Online</p>
        <p>Format: FT7</p>
      </div>
      <div class="box__event--link">
        <Button class="btn" type="white"> Regarder</Button>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import Button from '@/components/buttons/Button'
export default {
  name: 'EventCard',
  components: {
    Button,
  },
  data() {
    return {
      text: 'hello',
      event: {
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
              },
              id12345: {
                participant1: {
                  name: 'MarkTheShark',
                },
                participant2: {
                  name: 'KillJoy',
                },
              },
              id123456: {
                participant1: {
                  name: 'Epok',
                },
                participant2: {
                  name: 'ParaSurama',
                },
              },
              id1234567: {
                participant1: {
                  name: 'Atrocy ZA',
                },
                participant2: {
                  name: 'Bliono',
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
<style lang="scss" scoped>
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    display: flex;
    gap: 20px;
    font-size: 3rem;
    text-transform: uppercase;
    font-family: 'Roboto';
    font-weight: 700;
    margin-top: 9rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-top: 3.5rem;
    }
  }
  &__subtitle--label {
    font-size: 1rem;
    text-transform: uppercase;
    margin-top: 3.5rem;
    @media (max-width: 768px) {
      font-size: 0.5rem;
      margin-top: 2rem;
    }
  }
  &__content {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem 0 1rem 0;
    padding: 1rem 0;
    transition: 0.5s ease-in-out;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }
  }
  &__content:hover {
    -webkit-box-shadow: 2px -1px 52px 11px rgba(201, 201, 201, 1);
    -moz-box-shadow: 2px -1px 52px 11px rgba(201, 201, 201, 1);
    box-shadow: 2px -1px 52px 11px rgba(201, 201, 201, 1);
  }
  &__event {
    &--logo {
      width: 150px;
    }
    &--img {
      width: 460px;
      height: 160px;

      @media (max-width: 768px) {
        width: 100%;
      }
    }
    &--infos {
      color: black;
      h3 {
        text-transform: uppercase;
        font-size: 1.5rem;
      }
      p {
        font-size: 0.9rem;
        font-family: 'Open-Sans' 'Condensed';
        font-weight: 400;
        color: #585b63;
        text-transform: capitalize;
      }
      &-versus {
        color: #9999a9;
        text-transform: capitalize;
      }
    }
    &--link {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 768px) {
        width: 88%;
        margin: 1rem 0 0 0;
        text-align: center;
        border: 1px solid #e2e2e2;
      }

      > .btn {
        border: 1px solid #9999a9;
        @media (max-width: 768px) {
          border: none;
        }
      }
    }
  }
}
#event__soon {
  color: #000000;
  border-right: 1px solid #37364c;
  padding: 0 0.85rem 0 0;
  cursor: pointer;
}
#event__past {
  color: #9999a9;
  cursor: pointer;
}
.slick__list {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 230px;
    height: 160px;
    object-fit: contain;
  }
  &--versus-img {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 1.5rem;
  }
}
</style>
