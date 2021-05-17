<template>
  <div class="box">
    <div class="box__content">
      <div class="box__img">
        <img :src="require('@/assets/images/blog/e-sport-news.jpg')" alt="" />
      </div>
      <div class="box__category">Joueurs</div>
      <div class="box__title">
        AFRICAN CHAMPIONS: Mr5000, Actunoon & MarkTheShark
      </div>
      <div class="box__description">
        Suivez la montée historique des trois champions africains de Vulcain.gg:
      </div>
      <Button type="white">Check</Button>
    </div>
    <div class="box__content">
      <div class="box__img">
        <img :src="require('@/assets/images/blog/e-sport-news.jpg')" alt="" />
      </div>
      <div class="box__category">Joueurs</div>
      <div class="box__title">
        AFRICAN CHAMPIONS: Mr5000, Actunoon & MarkTheShark
      </div>
      <div class="box__description">
        Suivez la montée historique des trois champions africains de Vulcain.gg:
      </div>
      <Button type="white">Check</Button>
    </div>
    <div class="box__content">
      <div class="box__img">
        <img :src="require('@/assets/images/blog/e-sport-news.jpg')" alt="" />
      </div>
      <div class="box__category">News</div>
      <div class="box__title">
        AFRICAN CHAMPIONS: Mr5000, Actunoon & MarkTheShark
      </div>
      <div class="box__description">
        Suivez la montée historique des trois champions africains de Vulcain.gg:
      </div>
      <Button class="box__btn" type="white">Check</Button>
    </div>
  </div>
</template>
<script>
import Button from '@/components/buttons/Button'
export default {
  name: 'BlogBlock',
  components: {
    Button,
  },
}
</script>
<style lang="scss" scoped>
.box {
  margin: 10rem 2rem 10rem 2rem;
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  &__img {
    width: 100%;

    img {
      width: 100%;
      height: 13rem;
      object-fit: cover;
    }
  }
  &__content {
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  &__category {
    margin: 1rem 0 1rem 0;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: red;
  }
  &__title {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.3rem;
    text-align-last: 1rem;
  }
  &__description {
    padding: 1rem 0 1rem 0;
    font-size: 0.8rem;
    color: #9999a9;
    font-weight: 400;
  }
}
</style>
