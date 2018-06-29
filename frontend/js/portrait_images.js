jQuery(document).ready(function($){
    //recupera lista de porta retratos (imagens) adicionados e implementa método para adicionar item
    var porta_retrato = {
        cachedom : function(){
            this.lista_retratos = $('#porta_retrato');
        },
        create_li : function(canvas_w, canvas_h){
            var li     = document.createElement('li');
            var canvas = document.createElement('canvas');
            var div    = document.createElement('div');
            var br     = document.createElement('br')
            var span2  = document.createElement('span');
            var x      = document.createElement('i');

            canvas.width  = canvas_w;
            canvas.height = canvas_h;
            canvas.setAttribute('id', this.lista_retratos["0"].children.length)

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

            this.lista_retratos.append($(li));
        }
    }
    //inicia e adiciona mais um elemento na lista de porta retratos 
    var init_porta_retrato = function(width, height){
        porta_retrato.cachedom();
        porta_retrato.create_li(width, height);
    }
    //deleta porta retrato de acordo com o botão clicado
    var delete_porta_retrato = function(){
        $(this)["0"].parentElement.remove();
    }
    $('#porta_retrato').on('click', '.del', delete_porta_retrato);

    var create_canvas = function(objeto_canvas){

        console.log($('#porta_retrato')["0"].children.length);
        console.log(objeto_canvas);

        var image_teste = document.getElementById("editable-image");
        //var imagem_atual = cliente_imagem_url.elemento_imagem(index_imagem);
        console.log(id,imagens_canvas, index_canvas, index_imagem);

        //var div_img_cropper = document.getElementsByClassName("cropper-canvas")[0];
        //var imagem_atual = div_img_cropper.getElementsByTagName("img")[0];

        var canvas = document.getElementById(id);
        var ctx = canvas.getContext('2d');
        const element = imagens_canvas[index_canvas];
        canvas.width = element.c;
        canvas.height = element.d;
        //ctx.drawImage(cliente_imagem_url.elemento_imagem(index_imagem), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);
        ctx.drawImage(imagem_atual, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

    }

    //recebe o objeto com as informações para adicionar um item na lista
    var add_porta_retrato = function(objeto_canvas){
        init_porta_retrato(objeto_canvas.c, objeto_canvas.d);
        create_canvas(objeto_canvas);    
    }

    return window.add_porta_retrato = add_porta_retrato;

});