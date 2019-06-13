<template>
    <div id="contact-container">
        <h2>Contact</h2>
    </div>
</template>

<script>
export default {
    created(){
            this.$store.commit("changePage","Contact");

    }
}
</script>

<style>

</style>
