jQuery(document).ready(function($){
    //recupera lista de porta retratos (imagens) adicionados e implementa método para adicionar item
    var lista_id = [];
    $lista_retratos = $('#porta_retrato');
    var porta_retrato = {
        cachedom : function(){
            this.quadros_restantes = $("#quadros_restantes_numero");
        },
        create_li : function(canvas_w, canvas_h, objeto_canvas){
            var li     = document.createElement('li');
            var canvas = document.createElement('canvas');
            var div    = document.createElement('div');
            var br     = document.createElement('br')
            var span2  = document.createElement('span');
            var x      = document.createElement('i');

            canvas.width  = canvas_w;
            canvas.height = canvas_h;

            canvas.setAttribute('id', define_canvas_id());
            
            div.setAttribute('id','info_painel_texto');
            div.innerText = "Porta retrato ";

            span1 = "Decor Cristal 3mm" ;
            span2.innerText = porta_retrato_13x13_config.d_porta_retrato_tamanho

            div.append(span1);
            div.append(br);
            div.append(span2);

            x.setAttribute('class', 'del glyphicon glyphicon-remove');

            $(li).append(canvas);
            $(li).append(div);
            $(li).append(x);

            $lista_retratos.append($(li));
            create_canvas(objeto_canvas, canvas.id);
            this.quadros_restantes.html($lista_retratos["0"].children.length + " ");
        }
    }
    //inicia e adiciona mais um elemento na lista de porta retratos 
    var init_porta_retrato = function(width, height, objeto_canvas){
        porta_retrato.cachedom();
        porta_retrato.create_li(width, height, objeto_canvas);
    }
    //deleta porta retrato de acordo com o botão clicado
    var delete_porta_retrato = function(){
        var i      = parseInt($(this)["0"].parentElement.childNodes["0"].id);
        var indice = lista_id.indexOf(i);
        
        lista_id.splice(indice, 1);
        cliente_imagem_url.lista.splice(indice, 1);
        metadata_canvas.lista.splice(indice, 1);
       
        $(this)["0"].parentElement.remove();
        $("#quadros_restantes_numero").html($lista_retratos["0"].children.length + " ");
        $('#add_novo_quadro').show();
        
    }
    $('#porta_retrato').on('click', '.del', delete_porta_retrato);

    //add a imagem recortada no canvas
    var create_canvas = function(objeto_canvas, canvas_id){
        var canvas = document.getElementById(canvas_id);
        var ctx = canvas.getContext('2d');
        ctx.drawImage(objeto_canvas.imagem, objeto_canvas.x, objeto_canvas.y, objeto_canvas.swidth, objeto_canvas.sheight, objeto_canvas.a, objeto_canvas.b, objeto_canvas.c, objeto_canvas.d);
        metadata_canvas.add_lista(objeto_canvas.x, objeto_canvas.y, objeto_canvas.swidth, objeto_canvas.sheight, objeto_canvas.a, objeto_canvas.b, objeto_canvas.c, objeto_canvas.d, canvas.width, canvas.height, objeto_canvas.imagem.naturalWidth, objeto_canvas.imagem.naturalHeight);
    }

    //recebe o objeto com as informações para adicionar um item na lista
    var add_porta_retrato = function(objeto_canvas){
        if($lista_retratos["0"].children.length == 4){
            altera_botao_comprar();
        }
        if ($lista_retratos["0"].children.length == 5) {
            modal_info.constructor('Você já pode comprar o seu kit.', 'aviso');
            return
        }
        if ($lista_retratos["0"].children.length == 4) {
            $('#add_novo_quadro').hide();
        }
        init_porta_retrato(objeto_canvas.c, objeto_canvas.d, objeto_canvas);
    }
    //define o ID do canvas
    var define_canvas_id = function(){
        var n = $lista_retratos["0"].children.length + 1;
        if (n >= 2) {
            n = Math.max.apply(null, lista_id ) + 1;
        }
        lista_id.push(n);
        return n;
    }
    /*
    *
    * Tratamento das respostas dos botoes do componente porta-retratos 
    *
    */

    //botao comprar
    var $botao_comprar =  $('.b_comprar_porta_retrato');

    var altera_botao_comprar = function(){
        $botao_comprar.addClass('btn-success');
        $botao_comprar["0"].children["0"].innerText = porta_retrato_13x13_config.valor;
    }

    var botao_comprar = function(){
        if ($lista_retratos["0"].children.length < 5) {
            modal_info.constructor('É preciso adicionar 5 imagens para comprar o Kit.', 'aviso');
        }else{
            modal_info.constructor('...', 'loading');
            upload_canvas.upload();
        }
    }
    $botao_comprar.click(botao_comprar);

    //botao reload 
    var $botao_reload = $('#iap_reiniciar_porta_retrato');

    var botao_reload = function(){
        modal_info.constructor('Você tem certeza que deseja apagar as imagens e reiniciar?', 'delete_reload');
    }

    $botao_reload.click(botao_reload);
    
    //add novo quadro
    $add_novo_quadro = $('#add_novo_quadro');

    var add_novo_quadro = function(){
        if (cliente_imagem_url.lista.length > metadata_canvas.lista.length) {
            modal_info.constructor('Aperte o botao cortar mais uma vez, para poder adicionar outra imagem', 'aviso');
            return
        }
        $('#modalUpload').modal('show');
        if($lista_retratos["0"].children.length >= 1){
            window.porta_retrato_upload_controlador = "uploadOK";
        }
    }
    $add_novo_quadro.click(add_novo_quadro);

    return window.add_porta_retrato = add_porta_retrato;   
});