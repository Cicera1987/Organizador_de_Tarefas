<template>
    <div class="container grid-xs py-2">
        <header class="navbar">

            <section class="navbar-section">
                <router-link class="btn btn-link" to="/">Início</router-link>
                <router-link class="btn btn-link" to="/display">Tarefas</router-link>
                <img class="img-responsive" src="@/assets/task.png" alt="coffeeTagTodo">
                <router-link class="btn btn-link" to="#">Linkedin</router-link>
                <router-link class="btn btn-link" to="#">GitHub</router-link>
            </section>
        </header>
    </div>
    <router-view />
</template>

<script>

export default {
    name: 'HeaderView',
}
</script>



<style scoped>
img {
    max-width: 100px;
    margin: 0 auto;
}
</style>
