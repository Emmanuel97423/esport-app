<template>
  <div class="flex justify-center w-full h-3 bg-blueGray">
    <div class="resultSection flex items-center h-full w-10/12">
      <Result></Result>
    </div>
  </div>
</template>

<script>
import Result from '@/components/game/FlashResultComponent'
export default {
  name: 'FlashResult',
  components: {
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
