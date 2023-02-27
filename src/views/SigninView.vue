<template lang="">
    <div>
        <sign_in></sign_in>
        <router-view></router-view>
    </div>
</template>
<script>
import sign_in from '../components/SignIn.vue'
export default {
    components : {
        sign_in
    }
}
</script>
<style lang="">
    
</style>