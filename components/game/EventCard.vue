<template>
  <div class="box">
    <ul class="box__title">
      <li id="event__soon" class="box__title--label">A venir</li>
      <li id="event__past" class="box__title--label">Passé</li>
    </ul>
    <div class="box__subtitle--label">7 Tournois</div>
    <div class="box__content">
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
                  :src="require('@/assets/images/users/avatar_1.png')"
                  alt=""
                />
                <img
                  :src="require('@/assets/images/users/avatar_2.png')"
                  alt=""
                />
              </div>
              <button class="slick__forward"></button>
            </div>
          </div>
        </div>
      </div>
      <div class="box__event--infos">
        <h3>Mr5000 VS ValveOverKil</h3>
        <span>Sun, May 9 / 4:00 AM +04 / Main Card</span>
      </div>
      <div class="box__event--link">
        <Button type="red-gradient"> Regarder</Button>
        <Button> Regarder</Button>
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
    width: 85%;
    height: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 5rem;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      margin-top: 2rem;
    }
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
</style>
