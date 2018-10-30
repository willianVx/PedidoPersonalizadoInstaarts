<?php
    function iap_content(){
        ?>
            <div class="container iap_products_content">
                <div class="col-lg-6">

                    <img id="product_content_img_01" src="<?php echo plugins_url( 'img/acabamento_info/meta5mm.jpg', __FILE__ ); ?>" class="img-response" alt="">
                    <img id="product_content_img_02" class="iap_display_none" src="<?php echo plugins_url( 'img/acabamento_info/verso-metacrilato.jpg', __FILE__ ); ?>" class="img-response" alt="">

                    <div class="bullet_group">
                        <div id="b_01" class="bullet bullet_color_active"></div>
                        <div id="b_02" class="bullet bullet_color_deactive"></div>
                    </div>
                    
                </div>

                <div class="col-lg-6">
                    <h5>
                        Metacrilato 5MM
                    </h5>
                    <p>
                    O Padrão galeria é uma excelente
                    escolha para quem quer levar a qualidade das galerias de arte pra dentro de casa.
                    </p>
                    <a href="https://instaarts.com/metacrilato/">
                        <button class="btn justify-content-end">Mais sobre Metacrilato</button>
                    </a>
                </div>
            </div>
        <?php
    }