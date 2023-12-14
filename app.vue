<template>
    <Header />
    <main>
        <NuxtPage />
    </main>
    <Footer />
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>
<style>
/* Your styles here */
</style>