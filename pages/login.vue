<template>
  <div class="box">
    <Login></Login>
  </div>
</template>

<script>
import Login from '@/components/auth/Login'
export default {
  components: {
    Login,
  },
  layout(context) {
    return 'login'
  },
}
</script>
