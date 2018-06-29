<?php
//inclui sidebar para o pacote de porta retratos
    function sidebar_porta_retrato(){
        ?>
            
            <div class="sidebar_container">
           
            <div id="sidebar_porta_retrato">
           
            <div id="porta_retrato_module">
                <ul id="porta_retrato">
                </ul>
                <!-- 
                <ul id="porta_retrato">
                    <script id="porta_retrato_template" type="text/template">
                        {{#portaRetrato}}
                            
                            <li>    
                                    <canvas id={{.}} width="69" height="53"></canvas>

                                    <div id="info_painel_texto">
                                        {{texto1}}<br>
                                        {{texto2}}
                                        <span>{{tamanho}}</span>
                                    </div>
                                
                                <! <span>{{.}}</span> --> <!--
                                 <i class="del glyphicon glyphicon-remove"></i> 

                            </li>
                        {{/portaRetrato}}
                    </script>
                </ul>
                -->
            </div>
                        <div id="add_novo_quadro">
                            <img class="img_add_novo_quadro" src="<?php echo plugins_url( 'img/add_novo_quadro.png', __FILE__ ); ?>" border="0" />
                            <div id="quadros_restantes">Adicionar imagem <span id="quadros_restantes_numero">0 </span>de 5</div>
                        </div>
                        
            </div>
                <button class="btn btn-default b_comprar_porta_retrato">Comprar<span></span></button>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="porta_retrato_loading" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content" style="position: relative; top: 200px;">
                    <div class="modal-header">
                    </div>
                    <div class="modal-body">
                        <img class="iap_porta_retrato_carregando" src="<?php echo plugins_url( 'img/carregando.gif', __FILE__ ); ?>" border="0" />
                        Carregando imagem <span class="contador_carregando_pr"> 0 </span> de 5
                        <div id="iap_user_img"></div>
                    </div>
                    <div class="modal-footer"></div>
                    </div>
                </div>
            </div>

        <?php
    }
//versao sidebar porta retrato mobile

    function sidebar_porta_retrato_mobile(){
        ?>  
            <div class="m_botton_menu">
                <div id="m_iap_crop_porta_retrato" class="m_cortar_adicionar"><span class="glyphicon glyphicon-scissors"></span><span class="crop_texto"> Cortar e adicionar</span></div>

                <div class="m_grupo_ret">
                    <div class="m_ret_horizontal">

                        <img src="<?php echo plugins_url( 'img/iap_paisagem.png', __FILE__ ); ?>" border="0">
                        <div class="m_ret_horizontal_icone"></div>

                    </div>

                    <div class="m_ret_vertical">
                        <img src="<?php echo plugins_url( 'img/iap_retrato.png', __FILE__ ); ?>" border="0">
                        <div class="m_ret_vertical_icone"></div>
                    </div>
                </div>

                <div id="m_add_novo_quadro" class="m_add_novo_quadro">
                    <img id="add_novo_quadro_2" class="iap_mobile_c" src="<?php echo plugins_url( 'img/add_novo_quadro.png', __FILE__ ); ?>" border="0" />    
                    <div class="contador_bolinha">0</div>
                </div>

                <div class="m_reiniciar_porta_retrato glyphicon glyphicon-trash"></div>

            </div>
           
        <?php
    }

?> 