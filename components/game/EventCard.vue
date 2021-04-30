<template>
  <div class="box">
    <div class="box__title">
      <div>A VENIR</div>
      <div>PASSE</div>
    </div>
    <div>7 events</div>
    <div>
      <div>
        <img
          :src="require('@/assets/images/game-logo/Mortal-Kombat-Embleme.png')"
          alt=""
        />
      </div>
      <div>
        <img
          :src="require('@/assets/images/slide/kollisionKourse.jpeg')"
          alt=""
        />
      </div>
      <div>
        <h3>Mr5000 VS ValveOverKil</h3>
        <span>Sun, May 9 / 4:00 AM +04 / Main Card</span>
      </div>
      <div>
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
