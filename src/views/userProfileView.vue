<template lang="">
    <div>
        <userProfile></userProfile>
        <router-view></router-view>
    </div>
</template>
<script>
import userProfile from '../components/userProfile.vue'
export default {
    components : {
        userProfile
    }
}
</script>
<style lang="">
    
</style>