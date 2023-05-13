<template>
  <div class="m-5">
    <pre
      >{{ JSON.parse(data) }}
    </pre>
  </div>
</template>
<script setup>
const route = useRoute()
const { data } = await useFetch(`http://localhost:5000/callback?request_token=${route.query.request_token}`,
  {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    mode: "no-cors",
    method: "GET",
  }
);

// const res = await $fetch(`http://localhost:5000/callback?request_token=${this.$route.query.request_token}`,{
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//     },
//     mode: "no-cors",
//     method: "GET",
//   })
</script>
