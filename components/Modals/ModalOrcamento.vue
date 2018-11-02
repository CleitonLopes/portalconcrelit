<template>

    <div class="modal fade" id="modal_order" tabindex="-1" role="dialog" aria-labelledby="modal_order" aria-hidden="true">
        <div v-if="params" class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal_order"><h4>Dados do Orçamento</h4></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p><b>Tipo de Concreto:</b> {{ params.type_concrete }}</p>
                    <p><b>FCK:</b> {{ params.resistence_concrete_selected }}</p>
                    <p><b>Peça a ser concretada:</b> {{ params.piece_concrete_selected }}</p>
                    <p><b>Quantidade:</b> {{ params.quantity_concrete }}</p>
                    <p><b>Mensagem do Cliente:</b> {{ params.message }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal">OK</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {

    name: 'CModalOrcamento',

    props: {
       params: Object
    }
}
</script>

