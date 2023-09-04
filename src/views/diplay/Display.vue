<template>
    <ul class="step">
        <li class="step-item ">
            <a href="#" class="tooltip" data-tooltip="Step 1">Não iniciado</a>
        </li>

        <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 3">Concluido</a>
        </li>
        <li class="step-item">
            <a href="#" class="tooltip" data-tooltip="Step 4">Obsevarções</a>
        </li>
    </ul>

    <!-- seção a fazer -->
    <div class="container-board">
        <div class="columns">

            <div class="column col4">
                <div class="panel">

                    <div class="panel-header">
                        <div class="panel-title">A fazer</div>
                    </div>

                    <div class="panel-nav">
                        <!-- navigation components: tabs, breadcrumbs or pagination -->
                    </div>

                    <div class="panel-body">
                        <!-- contents -->
                    </div>

                    <div class="panel-footer">
                        <!-- buttons or inputs -->
                    </div>

                </div>
            </div>
            <!-- seção Concluido -->
            <div class="column col4">
                <div class="panel">

                    <div class="panel-header">
                        <div class="panel-title">Concluído</div>
                    </div>

                    <div class="panel-nav">
                        <!-- navigation components: tabs, breadcrumbs or pagination -->
                    </div>

                    <div class="panel-body">
                        <!-- contents -->
                    </div>

                    <div class="panel-footer">
                        <!-- buttons or inputs -->
                    </div>

                </div>
            </div>

            <!-- seção Análise -->
            <div class="column col4">
                <div class="panel">

                    <div class="panel-header">
                        <div class="panel-title">Obsevarções</div>
                    </div>

                    <div class="panel-nav">
                        <!-- navigation components: tabs, breadcrumbs or pagination -->
                        <div class="input-group">
                            <input type="text" class="form-input" id="task" placeholder="Adicionar Lembrete" />
                            <button class="btn btn-success input-group-btn">
                                <i class="icon icon-arrow-right"></i>
                                Adicionar
                            </button>
                        </div>
                    </div>

                    <div class="panel-body">
                        <!-- contents -->
                    </div>

                    <div class="panel-footer">
                        <!-- buttons or inputs -->
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DisplayView',
}
</script>


<style scoped>
.container-board {
    height: calc(100vh - 100px);
    padding: 5px;
    margin: 0px 100px 0px 0px 100px;

}

.columns {
    height: 100%;

}

.columns .column .panel {
    height: 100%;
    margin: 0px;
    box-shadow: 0 0.25rem 1rem rgba(63, 127, 191, 1);
}

.input-group {
    padding: 0px 10px;
}
</style>


