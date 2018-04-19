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
                                <i class="del glyphicon glyphicon-remove"></i>

                            </li>
                        {{/portaRetrato}}
                    </script>
                </ul>

            </div>

                        <img class="img_add_novo_quadro" src="<?php echo plugins_url('img/add_novo_quadro.png', __FILE__ ); ?>" alt="Adicinar novo quadro">
                        <div id="quadros_restantes">f<span id="quadros_restantes_numero">6</span></div>
                </div>
                <button class="btn btn-default b_comprar_porta_retrato">Comprar</button>
            </div>

        <?php
    }

?> 