<template>
    <div id="mijn-gereserveerde-kamers-container">
        <h2>mijn-Gereserveerde-Kamers</h2>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit("changePage","Mijn gereserveerde kamers");
    }
}
</script>

<style>

</style>
