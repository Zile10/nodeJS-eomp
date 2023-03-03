<template>
    <div>
       <div class="Spinner">
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
       </div> 
    </div>
</template>
<script>
export default {
    name: 'Spinner_component'
}
</script>
<style >
    .Spinner span {
        font: 2px;
        font-weight: 600;
        animation: blur 3s linear infinite;
        line-height: 20px;
        transition: all 0.5s;
        letter-spacing: 0.2em;
    }
    @keyframes blur {
        0%, 90% {
            filter: blur(0);
        }
        50% {
            filter: blur(10px);
        }
    }
</style>