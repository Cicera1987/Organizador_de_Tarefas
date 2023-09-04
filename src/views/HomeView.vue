<template>
  <div class="container">


    <form @submit.prevent="addTarefa(tarefa)">
      <div class="input-group">
        <input type="text" v-model="tarefa.description" class="form-input" id="task" placeholder="Adicionar uma tarefa">
        <button class="btn btn-success input-group-btn" :class="{ loading }"><i
            class="icon icon-arrow-right"></i>Adicionar</button>
      </div>
      <div class="container-step">
        <ul class="step">
          <li class="step-item active">
            <a href="#" class="tooltip" data-tooltip="Step 1">Não iniciado</a>
          </li>
          <li class="step-item ">
            <a href="#" class="tooltip" data-tooltip="Step 2">Concluido</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 3">Obsevarções</a>
          </li>
          <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 4">Aprovado</a>
          </li>
        </ul>
      </div>
    </form>

    <div class="tarefa-list">
      <tarefa v-for="item in tarefas" :key="item.id" @toggle="toggleTarefa" @remove="removeTarefa" :tarefa="item">
      </tarefa>

    </div>

  </div>
</template>

<script>

import Tarefa from '@/components/Tarefa.vue';

export default {
  name: 'HomeView',

  components: {
    Tarefa
  },
  data() {
    return { tarefa: { checked: false } };
  },

  computed: {
    tarefas() {
      return this.$store.state.tarefas;
    },
    loading() {
      return this.$store.state.loading;
    }
  },

  methods: {
    async addTarefa(tarefa) {
      await
        this.$store.dispatch('addTarefa', tarefa);
      this.tarefa = { checked: false };
    },

    toggleTarefa(tarefa) {
      this.$store.dispatch('toggleTarefa', tarefa);
    },
    removeTarefa(tarefa) {
      this.$store.dispatch('removeTarefa', tarefa);
    }
  }
};

</script>

<style scoped>
.container{
  max-width: 1000px;
}
input {
  border-radius: 5px;

}

button {
  border-radius: 5px;
}

.container-step {
  margin-top: 20px;
}

.tarefa-list {
  padding-top: 2rem;
}
</style>
