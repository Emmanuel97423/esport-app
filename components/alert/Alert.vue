<template>
  <div class="box__alert">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Alert',
}
</script>

<style lang="scss" scoped>
.box__alert {
  color: white;

  transition: alert 1s ease-in-out;
  @keyframes alert {
    from {
      transform: translateY(15rem);
    }
    to {
      transform: translateY(0);
    }
  }
}
</style>
