<template>
  <div>
    <NuxtLink to="/"
      ><img src="@/assets/images/logo.png" alt="logo"
    /></NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'VulcainLogo',
}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
