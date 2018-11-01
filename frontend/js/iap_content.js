jQuery(document).ready(function($){
    //funcionamento do bullet da imagem do conteúdo 
    $('#b_01').click(function(){
        $(this).addClass('bullet_color_active');
        $('#b_02').removeClass('bullet_color_active');

        $('#product_content_img_02').hide();
        $('#product_content_img_01').show();
    });
    $('#b_02').click(function(){
        $(this).addClass('bullet_color_active');
        $('#b_01').removeClass('bullet_color_active');

        $('#product_content_img_01').hide();
        $('#product_content_img_02').show();
    });

    //carrega conteúdo sobre informações dos metacrilatos 
    load_iap_content = function(content){
        $product_content_text = $('#iap_products_content_text');
        switch (content) {
            case "meta7mm":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/metacrilato-7-mm-galeria-square-1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Metacrilato 7MM');
                $product_content_text
                    .find('p')
                    .html('Com a maior espessura possível, este é sem dúvidas um dos nossos melhores produtos. Suas fotos ganham profundidade a ainda contam com a qualidade de impressão presente em todos os quadros produzidos por nós.');
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/metacrilato/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Metacrilato');    
                break;
            case "meta5mm":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/meta5mm.jpg");
                $product_content_text
                    .find('h5')
                    .html('Metacrilato 5MM');
                $product_content_text
                    .find('p')
                    .html('O Padrão galeria é uma excelente escolha para quem quer levar a qualidade das galerias de arte pra dentro de casa.');
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/metacrilato/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Metacrilato'); 
                break;
            case "meta3mm":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/metacrilato-3-mm-decor-300x300-1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Metacrilato 3MM');
                $product_content_text
                    .find('p')
                    .html('Mais leve e fino que os outros sem deixar de ser resistênte e carregar incrível qualidade de impressão presente em todos os nossos produtos.');
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/metacrilato/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Metacrilato'); 
                break;
            case "meta4mm":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/metacrilato-4-mm-galeria-300x300-a-1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Metacrilato 4MM');
                $product_content_text
                    .find('p')
                    .html('Com material de Poliestireno na parte traseira mais maleável que o acrilico ou ACM é ideal para quadros de tamanho intermediários de até 80cm.');
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/metacrilato/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Metacrilato');     
                break;
            case "acm5mm":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/metacrilato-5-mm-ACM-300x300-1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Metacrilato 5MM ACM');
                $product_content_text
                    .find('p')
                    .html('Com material de ACM (folhas de alumínio ligadas ao núcleo de polietileno) na parte traseira é recomendado para pessoas que desejam um quadro super rígido.'); 
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/metacrilato/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Metacrilato'); 
                      
                break;    
            case "papelAlgodao":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/Papel-algodao-1x1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Papel algodão');
                $product_content_text
                    .find('p')
                    .html('O papel algodão Fine Art Canson atende as necessidades de fotografos mais exigentes ao entregar qualidade e durabilidade. ');  
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/prints/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão');       
                break;    
            case "papelAcetinato":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/Papel-brilhante-1x1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Papel acetinato');
                $product_content_text
                    .find('p')
                    .html('O papel acetinato Fine Art Canson é mais indicado para quem deseja atingir cores próximas ao papel fotográfico, muito vivas e vibrantes.');  
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/prints/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão');     
                break;
            case "papelBrilhante":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/Papel-brilhante-1x1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Papel brilhante');
                $product_content_text
                    .find('p')
                    .html('O papel brilhante Fine Art Canson garante cotraste, cores fortes e nítidas. Perfeito para imprimir exatamente o que se vê em monitores Ultra HD.');  
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/prints/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão');     
                break;    
            case "papelFosco":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/Papel-fosco-1x1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Papel fosco');
                $product_content_text
                    .find('p')
                    .html('O papel brilhante Fine Art Canson garante cotraste, cores fortes e nítidas. Perfeito para imprimir exatamente o que se vê em monitores Ultra HD.'); 
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/prints/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão');      
                break;
            case "papelCanvas":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/canvas-espelhado-1.jpg");
                $product_content_text
                    .find('h5')
                    .html('Canvas montado');
                $product_content_text
                    .find('p')
                    .html('A impressão em canvas simula a pintura nesse material, indicada para quem deseja fazer impressões com tons clássicos e que remetam a pintura.');  
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/prints/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão');     
                break;    
            case "uvPS":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/UV-em-Poliestireno-2.jpg");
                $product_content_text
                    .find('h5')
                    .html('Impressão em UV PS');
                $product_content_text
                    .find('p')
                    .html('Impressão feita direto em uma chapa de poliestireno, indicada para quem procura nossa qualidade de impressão sem o acrilico na parte frontal.');  
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/impressao-uv/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão UV');       
                break;    
            case "uvACM":
                $('#product_content_img_01').attr("src","https://instaarts.com/wp-content/uploads/2018/10/impressao-UV-em-ACM-detalhe-2.jpg");
                $product_content_text
                    .find('h5')
                    .html('Impressão em UV ACM');
                $product_content_text
                    .find('p')
                    .html('Impressão feita direto em uma chapa de ACM (folhas de alumínio ligadas ao núcleo de polietileno), indicada para quem procura nossa qualidade de impressão sem o acrilico na parte frontal com a rigidez do ACM.');
                $product_content_text
                    .find('a')
                    .attr('href', 'https://instaarts.com/impressao-uv/');
                $product_content_text
                    .find('button')
                    .html('Mais sobre Impressão UV'); 
                break;      

            default:
                break;
        }
    }
    window.load_iap_content = load_iap_content;

    //carrega outras imagens (pexels)
    var imagens_galeria = {
        img_1: {
            src_baixa: 'https://images.pexels.com/photos/733174/pexels-photo-733174.jpeg?auto=compress&cs=tinysrgb&h=350',
            src_alta: 'https://images.pexels.com/photos/733174/pexels-photo-733174.jpeg',
            menor_preco: 'R$ 92,96',
            parcelas: '3x de R$ 30,99'
        },
        img_2: {
            src_baixa: 'https://images.pexels.com/photos/1263397/pexels-photo-1263397.jpeg?auto=compress&cs=tinysrgb&h=350',
            src_alta: 'https://images.pexels.com/photos/1263397/pexels-photo-1263397.jpeg',
            menor_preco: 'R$ 84,81',
            parcelas: '2x de R$ 42,41'
        },
        img_3:{
            src_baixa: 'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg?auto=compress&cs=tinysrgb&h=350',
            src_alta: 'https://images.pexels.com/photos/534757/pexels-photo-534757.jpeg',
            menor_preco: 'R$ 92,96',
            parcelas: '3x de R$ 30,99'
        },
        img_4:{
            src_baixa:'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg?auto=compress&cs=tinysrgb&h=350',
            src_alta:'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
            menor_preco: 'R$ 92,96',
            parcelas: '3x de R$ 30,99'
        }
    }

    iap_content_recomendacoes_load = function(){

        var div     = document.createElement('div');
        var img     = document.createElement('img');
        var p       = document.createElement('p');
        var span_1  = document.createElement('span');
        var span_2  = document.createElement('span');
        var span_3  = document.createElement('span');
        var br      = document.createElement('br');

        div.setAttribute('class', 'col-lg-3');
        span_1.setAttribute('class', 'iap_content_texto_img');
        span_2.setAttribute('class', 'iap_content_preco');
        span_3.setAttribute('class', 'iap_content_parcelas');

        for (let index = 1; index <= 4; index++) {
            img.setAttribute('src', imagens_galeria.img_+index.src_baixa);
            span_1.append('A partir de:');
            span_2.append(imagens_galeria.img_+index.menor_preco);
            span_3.append(imagens_galeria.img_+index.parcelas);

            div.append(img)
            /*
                .append(p)
                .append(span_1)
                .append(br)
                .append(span_2)
                .append(br)
                .append(span_3)
            */
            $('.iap_content_recomendacoes_load').append(div);
        }
    };

});