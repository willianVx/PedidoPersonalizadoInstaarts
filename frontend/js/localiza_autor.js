var localiza_autor = (function(){

        iza_doe_ob1 = {
                cod: 'f25',
                titulo: 'pato donald',
                url: 'https://instaarts.com/wp-content/uploads/2018/07/2356-img1.jpg'
        }
        iza_doe_ob2 = {
                cod: 'f25',
                titulo: 'Fitinhas',
                url: 'https://instaarts.com/wp-content/uploads/2018/06/2389-img2-1.jpg'
        }
        autor_teste_ob1 = {
                cod:'f26',
                titulo: 'teste',
                url: 'http://instaarts.com.br'
        }
        autor_teste_ob2 = {
                cod:'f26',
                titulo: 'teste_2',
                url: 'http://instaarts.com.br/acervo_instaarts'
        }


    var lista_autores = [iza_doe_ob1, iza_doe_ob2, autor_teste_ob1, autor_teste_ob2];

    function init(url_imagem_atual){
        for (let index = 0; index < lista_autores.length; index++) {
            const element = lista_autores[index];
            if (element.url == url_imagem_atual) {
                return element.cod;
            }
        }
    }

    return{
        init: init
    }
})();
