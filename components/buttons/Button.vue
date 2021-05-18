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
  border: 1px solid black;
}
.button.white__large--login {
  color: white;
  background-color: transparent;
  border: 1px solid white;
  width: 100%;
  height: 50px;
  border-radius: 3px;
  transition: 0.5s ease-in-out;
}
.button.white__large--login:hover {
  color: black;
  background: white 100%;
}
.button.red__large--login {
  color: white;
  background: linear-gradient(45deg, rgb(157, 2, 8, 0.6), rgb(208, 0, 0, 0.9))
    100%;
  width: 100%;
  border-radius: 3px;
  height: 50px;
  transition: 0.8s ease-in-out;
}
.button.red__large--login:hover {
  color: black;
  background: white 100%;
}
</style>
