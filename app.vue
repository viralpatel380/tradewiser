<template>
  <div class="">
    <!-- <NuxtWelcome /> -->
    <Navbar v-if="isRouterName('dashboard')" />
    <router-view class="h-full" />
  </div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const user = useCurrentUser()

    function isRouterName(name) {
      console.log(route.name)
      return route.name === name
    }
    function notRouterName(name) {
      console.log(route.name)
      return route.name !== name
    }

    return {
      isRouterName,
      notRouterName,
    }

    
  },
  onMounted() {
  watch(user, (user, prevUser) => {
    if (prevUser && !user) {
      // user logged out
      // router.push('/auth/login')
    } else if (user && typeof route.query.redirect === 'string') {
      // user logged in
      router.push(route.query.redirect)
    }
  })
  }
}
</script>



