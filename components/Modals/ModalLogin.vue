<template>

    <div class="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="modal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modal-login">{{ params.title }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    {{ params.message }}

                    <br>
                    <small><b> {{ params.info }} </b></small>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                    <button type="button" class="btn btn-primary" data-dismiss="modal" @click="setStorage(responseLogin)">OK</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    
    name: 'CModalLogin',

    props: {
       params: Object
    },

    methods: {
        
        setStorage(data) {

            localStorage.setItem('user', JSON.stringify(data));
            this.$router.push('/areacliente')

        }
    }
}
</script>

