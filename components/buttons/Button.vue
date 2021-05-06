<template>
  <div>
    <button
      class="button focus:outline-none uppercase py-2 px-4 self-center text-white text-xs"
      :class="type"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    type: String,
    disabled: Boolean,
  },
  data() {
    return {
      buttonMessage: 'Connexion',
    }
  },
}
</script>

<style scoped>
.button {
  font-family: 'Roboto';
  border-width: 0.01em;
  font-weight: 700;
  font-style: italic;
}
.button.login {
  background-color: green;
}

.button.red-gradient {
  background: linear-gradient(45deg, rgb(157, 2, 8, 0.6), rgb(208, 0, 0, 0.9))
    100%;
}
.button.white {
  color: black;
  background-color: transparent;
}
</style>
