<template>
    <div class="home">
        <section>
            <div><h5 id="head" class="display-5 text-liter">Timeless style, timeless moments Seize them with our watches. <span class="text">Watchmen the keepers of time</span></h5></div>
        </section>
    </div>
</template>

<script>
 export default {
   name: 'home_due'
 }
</script>
<style scoped>

.home {
    background-image: url(https://i.postimg.cc/sXHf1Gd1/landscape-1460054425-clock.gif);
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
#head {
    position: relative;
    margin-right: 40%;
    justify-content: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
    color: black;
}
.text {
    color: rgb(57, 52, 47);
    
}
</style>