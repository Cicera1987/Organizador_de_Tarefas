<template>
  <div class="tile flex-centured" :class="{ checked: tarefa.checked }">

    <dir class="tile-content">
      <div class="tile-subtitle">{{ tarefa.description }}</div>

    </dir>

    <div class="tile-action">
      <button @click="$emit('toggle', tarefa)" class="btn btn-primary">
        <span v-if="tarefa.checked"><i class=" icon icon-refresh" /></span>
        <span v-else><i class=" icon icon-check" /></span>
      </button>
      <button @click="$emit('remove', tarefa)" class="btn btn-error"><i class=" icon icon-delete" /></button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'TarefaView',
  props: {
    tarefa: { type: Object, required: true }
  }

};


</script>

<style scoped>
.checked {
  text-decoration: line-through;
  color: lightslategray;
}

.tile-action {
  width: 100px;
  display: flex;
  justify-content: space-between;

}
</style>
