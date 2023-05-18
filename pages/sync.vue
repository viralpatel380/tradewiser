<template>
  <div class="m-5">
    <pre>{{ z }}</pre>
    <pre>{{ storeToken(JSON.parse(data, null, 2).data) }}</pre>
  </div>
</template>
<script setup>
const route = useRoute()
const router = useRouter();
const z = useCookie('z',{watch: true})
const user = useCookie('u',{watch: true})
const time = useCookie('st',{watch: true})

const {data} =await useFetch(`https://api.ghosters.tech/callback?request_token=${route.query.request_token}`,
  {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "no-cors",
    method: "GET",
  })

//  let data = JSON.parse(response);
//  z.value = resp.data.data.access_token
function storeToken(data) {
  z.value = data.access_token
  time.value = Date.now()
  user.value = data
  router.push({ path: "/dashboard" });
}

  

  


// const res = await $fetch(`http://localhost:5000/callback?request_token=${this.$route.query.request_token}`,{
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     mode: "no-cors",
//     method: "GET",
//   })
</script>
