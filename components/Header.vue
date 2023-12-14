<template>
    <nav class="header-menu">
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about-us">About us</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
    <header class="header">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo">
        <div class="menu-icon" @click="">
            <span></span>
            <span></span>
        </div>
    </header>
</template>
<script>
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100vw;
    padding-top: 20px;
    padding-bottom: 20px;

}

.logo {

    height: 50px;
    margin-left: 50px;
    /* Adjust as per your logo's size */
}

.menu-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-right: 50px;
}

.menu-icon span {
    display: block;
    width: 45px;
    /* Adjust width as needed */
    height: 5px;
    /* Adjust thickness as needed */
    background-color: white;
}

.header-menu {

    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;

}

.header-menu ul {
    display: flex;
    /* Align menu items horizontally */
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
}

.header-menu ul li {
    margin: 0 1rem;
    /* Spacing between menu items */
}

.header-menu ul li a {
    font-weight: bold;
    text-decoration: none;
}
</style>