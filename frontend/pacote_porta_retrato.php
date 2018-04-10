<?php
//inclui sidebar para o pacote de porta retratos
    function sidebar_porta_retrato(){
        ?>

            <div class="sidebar_container">
                <div id="sidebar_porta_retrato">

                        <div class="info_painel">
                            <canvas id="info_painel_crop" width="69" height="53"></canvas>
                            <div id="info_painel_texto">

                            Porta retrato <br>
                            Decor Cristal 3mm  
                            <span>13x13cm</span>

                            </div>
                            <span class="glyphicon glyphicon-remove retirar_img_da_lista"></span>
                        </div>

                        <div id="info_painel"></div>
                        <div id="info_painel"></div>
                        <div id="info_painel"></div>
                        <div id="info_painel"></div>
                        <img class="img_add_novo_quadro" src="<?php echo plugins_url('img/add_novo_quadro.png', __FILE__ ); ?>" alt="Adicinar novo quadro">
                        <div id="quadros_restantes">+<span id="quadros_restantes_numero">6</span></div>
                </div>
                <button class="btn btn-default b_comprar_porta_retrato">Comprar</button>
            </div>

        <?php
    }

?> 