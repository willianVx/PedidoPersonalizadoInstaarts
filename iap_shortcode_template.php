<?php 
//renderiza template para shortcodes de produtos 
class shortcode_template{
    //retorna template de acordo com o parametro passado 
    public function construct($type){
        switch ($type) {
            case $type = 'PedidoPersonalizado':
                
                return self::produto_pedido_personalizado();

                break;
            
            default:
                # code...
                break;
        }
    }
    //template para pedido personalizado IAP 
    private function produto_pedido_personalizado(){
        ?> 
        <div class="row produto_home">
            <a href="#">
                <img src="<?php echo plugins_url('/frontend/img/produtos/metacrilato-7-mm-galeria-square.jpg', __FILE__ ); ?>" border="0" />
                <h5>Metacrilato 7mm</h5>
                <p>A partir de: R$ 00,00</p>
                <p>Envie sua imagem!</p>
            </a>
        </div>
        <?php
    }
}