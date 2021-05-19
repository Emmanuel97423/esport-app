<template>
  <div class="box">
    <div v-for="ranks in apiRanking" :key="ranks.id" class="box__content">
      <div class="box__content--title">{{ ranks.game }}</div>
      <div class="box__content--subtitle">{{ ranks.rank[1] }}</div>
      <div class="box__content--text">Champion</div>
      <div class="box__content--img">
        <img :src="require('@/assets/images/users/avatar-1.png')" alt="" />
      </div>
      <div class="box__content--list">
        <ul class="box__content--list-rank">
          <li><span>2</span>{{ ranks.rank[2] }}</li>
          <li><span>3</span>{{ ranks.rank[3] }}</li>
          <li><span>4</span>{{ ranks.rank[4] }}</li>
          <li><span>5</span>{{ ranks.rank[5] }}</li>
          <li><span>6</span>{{ ranks.rank[6] }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Rankingblock',
  data() {
    return {
      apiRanking: '',
    }
  },
  created() {
    this.rankApi()
  },
  methods: {
    rankApi() {
      return (this.apiRanking = this.$store.state.api.ranking)
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  gap: 8rem;
  width: 100%;
  transition: all 1s ease-in-out;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  &__content {
    margin: 2rem 0 0 0;

    @media (max-width: 768px) {
      border-bottom: 1px solid #37364c;
      padding: 0 0 0.2rem 0;
      &--img {
        transition: all 1s ease-in-out;
        transform: translateY(-20%);
      }
    }

    &--title {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: bold;
      color: red;
      margin: 0 0 1rem 0;
      max-width: 100%;
      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
    &--subtitle {
      text-transform: uppercase;
      font-size: 1.5rem;
      font-weight: bold;
      max-width: 50%;
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
    &--text {
      margin: 0.2rem 0 1rem 0;
      text-transform: uppercase;
      color: #abadb1;
      font-size: 12px;
      letter-spacing: 1.2px;
    }
    &--list {
      margin: 1.5rem 0 0 0;
      @media (max-width: 768px) {
        transform: translateY(-30%);
      }
    }
    &--list-rank {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      li {
        display: flex;
        gap: 1rem;
        color: #9999a9;
        font-weight: 400;
        span {
          color: #000000;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
