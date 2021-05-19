<template>
  <div class="box">
    <Signup></Signup>
  </div>
</template>

<script>
import Signup from '@/components/auth/Signup'
export default {
  components: {
    Signup,
  },
  layout(context) {
    return 'auth'
  },
}
</script>
