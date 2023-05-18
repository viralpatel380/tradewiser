// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-lodash', 'nuxt-vuefire'],
    vuefire: {
        auth: true,
        config: {
            apiKey: "AIzaSyCJB1qARbsbfUvH5kA88cLDotxJJ1Jzmdo",
            authDomain: "tradewiser-dev.firebaseapp.com",
            projectId: "tradewiser-dev",
            storageBucket: "tradewiser-dev.appspot.com",
            messagingSenderId: "1014752709424",
            appId: "1:1014752709424:web:93a495fe43bb69218156f5",
            measurementId: "G-GK29E11JS4"
        },
      },

})
