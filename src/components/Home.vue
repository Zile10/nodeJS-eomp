<template>
    <div class="home">
        <section>
            <div><h5 id="head" class="display-5 text-liter">Timeless style, timeless moments Seize them with our watches. <span class="text">Watchmen the keepers of time</span>🖤</h5></div>
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
    background: linear-gradient( rgba(0, 0, 0, 0.526),  rgba(0, 0, 0, 0.526) ), url(https://i.postimg.cc/CM4j7Ydr/542930.jpg);
    height: 90vh;
    background-repeat: none;
    background-size: cover;
    justify-content: center;
    align-items: center;
}
#head {
    position: relative;
    margin-right: 40%;
    justify-content: center;
    padding-bottom: 2rem;
    text-transform: uppercase;
}
.text {
    color: rgb(182, 231, 22);
}
</style>