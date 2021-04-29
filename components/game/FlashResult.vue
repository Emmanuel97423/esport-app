<template>
  <div class="flex justify-center w-full h-3 bg-blueGray">
    <div class="resultSection flex items-center h-full w-10/12">
      <div class="result-btn flex items-center h-full p-5">
        <Button type="red-gradient" class="transform -skew-x-12">Scores</Button>
      </div>
      <Result></Result>
    </div>
  </div>
</template>

<script>
import Button from '@/components/buttons/Button'
import Result from '@/components/game/FlashResultComponent'
export default {
  name: 'FlashResult',
  components: {
    Button,
    Result,
  },
}
</script>

<style>
.result-btn {
  border-left: 1px solid #37364c;
  border-right: 1px solid #37364c;
}
</style>
