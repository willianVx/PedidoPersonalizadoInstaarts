jQuery(document).ready(function($) {

    //exibe de acordo com os parametros um modal com informações relevantes
    var  modal_info = {

        $modal : $('#modal_info'),
        $modal_title: $('.info_titulo')["0"].children["0"],
        $info_x_button: $('.info_x_button'),
        $info_body: $('.info_body'),
        $info_footer: $('.info_footer'),
        $info_ok: $('.info_ok'),
        $loading: $('#main_carregando'),
        $info_carregando: $('#main_carregando'),

        constructor: function(info, tipo){
            if(tipo == 'loading'){
                this.loading();
                return
            }
            this.info = info;
            this.tipo = tipo;

            if (this.tipo == 'delete_reload') {
                this.dialogo();
            }
            if (this.tipo == 'aviso') {
                this.$info_footer.html(this.$info_ok);
            }
            this.change_text();
            this.open_modal();
        },
        open_modal: function(){
            this.$modal.modal('show');
        },
        change_text: function(){
            this.$info_body.html(this.info); 
        },
        dialogo(){
            info_delete_button = document.createElement('button');
            info_delete_button.setAttribute('class', 'btn btn-danger');
            info_delete_button.innerText = "Apagar";

            info_continue_button = document.createElement('button');
            info_continue_button.setAttribute('class', 'btn btn-success');
            info_continue_button.innerText = "Continuar";

            this.$info_footer.html(info_delete_button);
            this.$info_footer.append(info_continue_button);

            $(info_delete_button).click(delete_imagens);
            $(info_continue_button).click(continuar);
        },
        loading(){
            this.$info_x_button.hide();
            this.$info_ok.hide();
            this.$info_body.html(this.$loading);
            this.$loading.show();
            this.open_modal();
        }

    }

    function delete_imagens(){
        location.reload();
    }

    function continuar(){
        modal_info.$modal.modal('hide');
    }
    return window.modal_info = modal_info;
});