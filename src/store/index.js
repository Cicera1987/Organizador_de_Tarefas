import { createStore } from 'vuex'

export default createStore({
  state: { // Dados que temos, ex; nome, idade,  array de produtos
    tarefas:[],
    loading: false,
  },
  getters: {

  },
  mutations: {// funções que alteram os dados do state, ex: alterar o nome, idade, adicionar um produto no array de produtos
    addTarefa(state, payload){
      state.tarefas.push(payload)
    },
    setLoading(state, payload){
      state.loading = payload
    },
    toggleTarefa(state, payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
      if(index > -1){
        const checked = !state.tarefas[index].checked;
        state.tarefas[index].checked = checked;
      }
    },
    removeTarefa(state, payload){
      const index = state.tarefas.findIndex(item => item.id === payload.id)
      if(index > -1){
        state.tarefas.splice(index, 1)
      }

    }

  },
  actions: {// funções assincronas, ou seja que demoram para serem executadas, ex: buscar dados de uma api, ou salvar dados no banco de dados
    addTarefa({commit}, tarefa){
    commit('setLoading', true)

      return new Promise((resolve) => {
        setTimeout(() => {
          tarefa.id = Date.now()
          commit('addTarefa', tarefa)
          commit('setLoading', false)
          resolve()
        }, 500)
      })
    },

    toggleTarefa({commit}, tarefa){
      commit('toggleTarefa', tarefa)
    },

    removeTarefa({commit}, tarefa){
      commit('removeTarefa', tarefa)
    }
  },


  modules: {
  }

  
})

  
