<?php
//inclui sidebar para o pacote de porta retratos
    function sidebar_porta_retrato(){
        ?>
            
            <div class="sidebar_container">
           
                <div id="sidebar_porta_retrato">
           
            <div id="porta_retrato_module">

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
                                
                                <!-- <span>{{.}}</span> -->
                                <!-- <i class="del glyphicon glyphicon-remove"></i> -->

                            </li>
                        {{/portaRetrato}}
                    </script>
                </ul>

            </div>
                        <div id="add_novo_quadro">
                            <img class="img_add_novo_quadro" src="<?php echo plugins_url( 'img/add_novo_quadro.png', __FILE__ ); ?>" border="0" />
                            <div id="quadros_restantes">Adicionar imagem <span id="quadros_restantes_numero">0 </span>de 6</div>
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
                        Carregando imagem <span class="contador_carregando_pr"> 0 </span> de 6
                        <div id="iap_user_img"></div>
                    </div>
                    <div class="modal-footer"></div>
                    </div>
                </div>
            </div>

        <?php
    }

?> 