<?php 
    function quandro_na_parede(){
        ?>
            <!-- Large modal -->
            <button class="b_quadro_na_parede disabled" data-toggle="modal" data-target=".iap_modal_quadro_na_parede" title = "Você pode visualizar o seu quadro em um ambiente aqui!" disabled>
                <img  class="b_quadro_na_parede_img_icon" src="<?php echo plugins_url('img/molduras_quadro_na_parede/couch-icon.svg', __FILE__ ); ?>" alt="">
            </button>

            <div class="modal fade iap_modal_quadro_na_parede" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="loading_img"></div>
                        <img class="iap_img_ambiente img-fluid" src="https://instaarts.com/wp-content/uploads/2018/07/ab_2.jpg" alt="quadro_na_parede">
                        
                            <span class="prev">&#10094;</span>
                            <span class="next">&#10095;</span>
                            
                        <div id = "ipa_canvas_img_a" class="ipa_canvas_img_a" width="300px" height="300px"></div>
                    </div>
                </div>
            </div>

        <?php
}