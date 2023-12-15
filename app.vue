<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <Header />
    <main>
        <NuxtPage />
    </main>
    <Footer />
</template>
<script>
import('bootstrap/dist/js/bootstrap.bundle.min.js')
    .then(() => {
        console.log('Bootstrap JS loaded');
    })
    .catch((error) => {
        console.error('Error loading Bootstrap:', error);
    });
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