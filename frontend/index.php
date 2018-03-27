
<?php get_header();?>

<div class="container envelope-pedido-personalizado" onload="formulaTotal()">
  <div class="row container-b">
    <!-- botoes editar - voltar - limpar --> 
    <div class="col-md-2">
      <div class="row">
        <div class="col-md-12">
          <button id="edit-image-button" class="btn btn-primary btn-block button-panel botao_editar">
            <span class="glyphicon glyphicon-pencil pull-left padleft" aria-hidden="true"></span> Editar
          </button>
        </div>
        <div class="col-md-12">
          <button id="reset-image-button" class="btn btn-warning btn-block button-panel">
            <span class="glyphicon glyphicon-repeat pull-left padleft" aria-hidden="true"></span> Voltar
          </button>
        </div>
        <div class="col-md-12">
          <button id="clear-image-button" class="btn btn-danger btn-block button-panel">
            <span class="glyphicon glyphicon-remove pull-left padleft" aria-hidden="true"></span> Limpar
          </button>
        </div>
      </div>
    </div> <!-- fim botoes --> 

    <div class="col-md-10">
    
      <input type="hidden" name="image_url" id="image_url">
      <input type="hidden" name="image_id" id="image_id">
      <input type="hidden" name="edited_image_url" id="edited_image_url">
      <input type="hidden" name="edited_image_id" id="edited_image_id">

      <!-- input id="click-upload" type="file" -->

      <div id="drop-area" class="drop-zone" data-toggle="modal" data-target="#modalUpload">
        <span>
          <img id="main_carregando" src="<?php echo plugins_url('img/carregando.gif', __FILE__ ); ?>" border="0" />
          <a href="#"><img id="img_acrilico" src="<?php echo plugins_url('img/imagem-1.jpg', __FILE__ ); ?>" border="0" /></a>
          <a href="#"><img id="img_photobloco" src="<?php echo plugins_url('img/imagem-2_photobloco.jpg', __FILE__ ); ?>" border="0" /></a>
        </span>
        <span class="iap_box_upload">
        Click para fazer o Upload da sua imagem
        </span>
      </div>

        <div class="img-upload-line">
          <img id="editable-image" class="img-responsive img-upload">
        </div>
      
      <div class="container">
        <!-- Modal upload de arquivos por click -->
        <div class="modal fade" id="modalUpload" role="dialog" tabindex="-1" style="position: absolute; top: 10px;" >
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content col-sm-12">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h5 class="modal-title">Faça o Upload da Sua Imagem</h5>
              </div>
              <div class="modal-body texto_upload col-sm-12">

                <div class="col-xs-12 col-sm-12 col-md-12">

                  <p>A imagem deve estar nos formatos: JPEG ou PNG</p>
                  <p>Formato minimo de 2.000 por 2.000 pixels</p>
                  <form method="post" action="" id="myForm" enctype="multipart/form-data">
                    Click para escolher uma imagem do seu dispositivo:
                    <input type="file" name="fileToUpload" id="fileToUpload">
                    <br>
                    <!--<input type="submit" name="submit" value="upload-image" class="btn btn-success">-->
                    <input type="hidden" name="image-submission" value="1"/>
                    <?php wp_nonce_field( 'wp-img-nonce-iap', 'wp-img-nonce' ); ?>
                  </form>
                </div>
                <br>
                <div class="progress">
                  <div id="progress-bar" class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                    style="width:0%">
                    <span class="percent"></span>
                  </div>
                </div>
                
                </div>
                
                  <div class="linha_div_vertical"></div>
                  <div class="texto_upload_image">
                    <aside>
                      Caso sua imagem não esteja no formato correto ou precise de ajuda, por favor fale conosco pelo chat ou entre em contato pelo e-mail: <a title="mailto:contato@instaarts.com.br" href="mailto:contato@instaarts.com.br" target="_blank" rel="noopener noreferrer">contato@instaarts.com.br</a><br> ou  pelos telefones: </br> <a href="tel:+1146126019">(11) 4612-6019 </a> e <a href="tel:+1130316881">(11) 3031-6881</a>
                    </aside>
                  </div>
                
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Cancelar</button>
              </div>

            </div>
          </div>
        </div>

      </div>
     
        <div class="col-lg-12 hud-botoes-mat">

        <button type="button" id="b-photobloco" class="btn btn-default btn-lg hud-botao col-lg-3" data-toggle="modal" data-target="#photobloco">Photobloco: <span id="s-photobloco"> </span> </button>
        

        <button type="button" id="b-tamanho" class="btn btn-default btn-lg hud-botao col-lg-3" data-toggle="modal" data-target="#tamanho">Tamanho: <span id="s-tamanho"> </span> </button>

        <button type="button" id="b-acabamento" class="btn btn-default btn-lg hud-botao col-lg-3" data-toggle="modal" data-target="#material"><span id="s-metacrilato"> Acabamento</span></button>

        <button type="button" id="b-moldura" class="btn btn-default btn-lg hud-botao col-lg-3" data-toggle="modal" data-target="#moldura"><span id="s-moldura">Moldura</span></button>

        <button id="comprar-botao" type="button" class="btn btn-default btn-lg hud-botao b-comprar col-lg-3">Comprar: <span id="s-preco" class="s-preco"></span> </button>

        <button id="comprar-botao-photobloco" type="button" class="btn btn-default btn-lg hud-botao b-comprar col-lg-3">Comprar: <span id="s-preco-photobloco" class="s-preco-photobloco"></span> </button>

        </div>

        <!-- Modal -->
        <div id="tamanho" class="modal fade" role="dialog" tabindex="-1">
          <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content col-sm-12" style="position: relative; top: 200px;">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h5 class="modal-title">Escolha o tamanho do seu quadro</h5>
              </div>
              <div class="modal-body container-fluid">
              <img id="tamanho_carregando" src="<?php echo plugins_url('img/carregando.gif', __FILE__ ); ?>" border="0" />
                  <div id="msg_img_not"></div>

                    <div class="checkbox">
                      <form id="tamanhoPadrao">
                          <label  id="tamanho1">
                            <input type="radio" name="tamanho" value="20x18" id="tamanho1_input" data-dismiss="modal"> 20x<span id="tamanhoY1">18</span>cm</label>
                          <br>
                          <label id="tamanho2">
                            <input type="radio" name="tamanho" value="30x27" id="tamanho2_input" data-dismiss="modal"> 30x<span id="tamanhoY2">27</span>cm</label>
                          <br>
                          <label id="tamanho3">
                            <input type="radio" name="tamanho" value="40x36" id="tamanho3_input" data-dismiss="modal"> 40x<span id="tamanhoY3">36</span>cm</label>
                          <br>
                          <label id="tamanho4">
                            <input type="radio" name="tamanho" value="50x45" id="tamanho4_input" data-dismiss="modal"> 50x<span id="tamanhoY4">45</span>cm</label>
                          <br>
                          <label id="tamanho5">
                            <input type="radio" name="tamanho" value="60x54" id="tamanho5_input" data-dismiss="modal"> 60x<span id="tamanhoY5">54</span>cm</label>
                          <br>
                          <label id="tamanho6">
                            <input type="radio" name="tamanho" value="70x64" id="tamanho6_input" data-dismiss="modal"> 70x<span id="tamanhoY6">64</span>cm</label>
                          <br>
                          <label id="tamanho7">
                            <input type="radio" name="tamanho" value="80x72" id="tamanho7_input" data-dismiss="modal"> 80x<span id="tamanhoY7">72</span>cm</label>
                          <br>
                          <label id="tamanho8">
                            <input type="radio" name="tamanho" value="90x82" id="tamanho8_input" data-dismiss="modal"> 90x<span id="tamanhoY8">82</span>cm</label>
                          <br>

                          <div class="linha_div_vertical2"></div>

                          <div class="texto_tamanho_image"></div>
                          <div class="texto_aviso_res">
                            * Nosso sistema mostrará os tamanhos de acordo com a resolução da sua imagem. 
                          </div>
                          
                      </form>
                </div>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Continuar</button>
              </div>
            </div>

          </div>
        </div>

  <!-- Modal -->
  <div class="modal fade" id="photobloco" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content" style="position: relative; top: 200px;">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Escolha o tamanho do seu Photobloco</h4>
        </div>

        <div class="modal-body">

          <div class="m-thumb">
            <div class="thumbnail" id="photobloco_10x10" data-dismiss="modal">
              <p>Photobloco 10x10cm</p>
            </div>
            <div class="thumbnail" id="photobloco_10x15" data-dismiss="modal">
              <p>Photobloco 10x15cm</p>
            </div>
          </div>

        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

          <!-- tamanho material e moldura -->
          <div class="container m_material col-sm-4">

            <!-- Modal -->
            <div class="modal fade" id="material" role="dialog"> 
              <div class="modal-dialog modal-lg">

                <!-- Modal content-->
                <div class="modal-content" style="position: relative; top: 200px;">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Acabamento</h4>
                  </div>

                  <div class="modal-body col-sm-12">
                    <div id="acabamento_modal_body"></div>
                    <div class="checkbox acabamento_modal_body_op">
                      <nav class="navbar navbar-light" style="background-color: #47af58;">
                        <div class="container-fluid">
                          <div class="navbar-header"></div>
                          <ul class="nav navbar-nav">
                            <li id="bMeta" class="navbar_click">
                             <a href="#">Metacrilato</a> 
                            </li>
                            <li id="bPrints">
                              <a href="#">Prints</a> 
                            </li>
                            <li id="bUv">
                              <a href="#">UV Print</a> 
                            </li>
                          </ul>
                        </div>
                      </nav>
                      <div id="tMeta">
                        <div class="col-md-4 m-thumb" id="meta7mm">
                          <div class="thumbnail" id="meta7-select-color" data-dismiss="modal">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta7mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 7mm</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-4 m-thumb" id="meta5mm" data-dismiss="modal">
                          <div class="thumbnail" id="meta5-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta5mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 5mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="meta4mm" data-dismiss="modal">
                          <div class="thumbnail" id="meta4-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta4mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 4mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="meta3mm" data-dismiss="modal">
                          <div class="thumbnail" id="meta3-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta3mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 3mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="acm5mm" data-dismiss="modal">
                          <div class="thumbnail" id="acm-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/acm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato ACM 5mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                      </div>

                      <div id="tPapel">

                        <div class="col-md-4 m-thumb" id="papelAlgodao" data-dismiss="modal">
                          <div class="thumbnail" id="algodao-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/algodao.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel algodão</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="papelAcetinato" data-dismiss="modal">
                          <div class="thumbnail" id="acetinato-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/acetinato.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Acetinato</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="papelBrilhante" data-dismiss="modal">
                          <div class="thumbnail" id="brilhante-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/brilhante.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Brilhante</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="papelFosco" data-dismiss="modal">
                          <div class="thumbnail" id="fosco-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/fosco.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Fosco</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-4 m-thumb" id="papelCanvas" data-dismiss="modal">
                          <div class="thumbnail" id="canvas-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/canvas.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Canvas</p>
                              </div>
                            </label>
                          </div>
                        </div>

                      </div>

                      <div id="tUv">

                        <div class="col-md-4 m-thumb" id="uvPS" data-dismiss="modal">
                          <div class="thumbnail" id="uv-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/uvps.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>impressão UV sobre PS</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="uvACM" data-dismiss="modal">
                          <div class="thumbnail" id="uvacm-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/uvacm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>impressão UV sobre ACM</p>
                              </div>
                            </label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-default ok-modal-acabamento" data-dismiss="modal">Continuar</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
          <div class="moldura col-sm-4">
           
            <!-- Modal -->
            <div class="modal fade" id="moldura" role="dialog">
              <div class="modal-dialog modal-lg">
                <!-- Modal content-->
                <div class="modal-content" style="position: relative; top: 200px;">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Moldura</h4>
                  </div>
                  <div class="modal-body col-sm-12">
                  <div id="moldura_modal_body"></div>
                    <div class="checkbox moldura_modal_body_op">
                      
                      <nav class="navbar navbar-light" style="background-color: #47af58;">
                        <div class="container-fluid">
                          <div class="navbar-header"></div>
                          <ul class="nav navbar-nav">
                            <li id="b-contemporanea" class="navbar_click">
                              <a href="#">Contemporanea</a>
                            </li>
                            <li id="b-moderna">
                              <a href="#">Moderna</a>
                            </li>
                            <li id="b-classica">
                              <a href="#">Classica</a>
                            </li>
                          </ul>
                        </div>
                      </nav>

                      <div id="bMoldura" class="bMoldura">
                      <div id="m-contemporanea">

                      <div class="col-md-4 t-thumb" id="m_nova_york_preta" data-moldura="nova-york-preta" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="novayork-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/nova-york-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Nova York Preta</p>
                                </div>
                              </label>
                            </div>
                      </div>

                      <div class="col-md-4 t-thumb" id="m_nova_york_Branca" data-moldura="nova-york-branca" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="novayork-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/nova-york-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Nova York Branca</p>
                                </div>
                              </label>
                            </div>
                      </div>
                      
                      <div class="col-md-4 t-thumb" id="m_nova_york_tabaco" data-moldura="nova-york-tabaco" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="novayork-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/nova-york-tabaco.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Nova York Branca</p>
                                </div>
                              </label>
                            </div>
                      </div>
                      
                      <div class="col-md-4 t-thumb" id="m_basel_preta">
                            <div class="thumbnail b_moldura" id="basel-select-color" data-dismiss="modal">
                              <label>
                                <img src="<?php echo plugins_url( 'img/basel-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Basel Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        
                          <div class="col-md-4 t-thumb" id="m_basel_branca" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="basel-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/basel-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Basel Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>
                          
                          <div class="col-md-4 t-thumb" id="m_basel_tabaco" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="basel-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/basel-tabaco.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Basel Tabaco</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_basel_bege" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="basel-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/basel-bege.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Basel Bege</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_berlim_preta" data-dismiss="modal">
                            <div class="thumbnail b_moldura" id="berlim-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/berlim-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Berlim Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_berlim_branca" data-dismiss="modal">
                            <div class="thumbnail" id="berlim-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/berlim-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Berlim Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_miami_preta" data-dismiss="modal">
                            <div class="thumbnail" id="miami-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/miami-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Miami Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_miami_branca" data-dismiss="modal">
                            <div class="thumbnail" id="miami-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/miami-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Miami Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>
                         
                        </div>
                        <div id="m-moderna">

                          <div class="col-md-4 t-thumb" id="m_amazonas_areia" data-dismiss="modal">
                            <div class="thumbnail" id="amazonas-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amazonas-areia.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amazonas Areia</p>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-md-4 t-thumb" id="m_amazonas_bege" data-dismiss="modal">
                            <div class="thumbnail" id="amazonas-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amazonas-bege.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amazonas Bege</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_amazonas_tabaco" data-dismiss="modal">
                            <div class="thumbnail" id="amazonas-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amazonas-tabaco.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amazonas Tabaco</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_buenosaires_preta" data-dismiss="modal">
                            <div class="thumbnail" id="buenosaires-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/buenos-aires-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Buenos Aires Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_buenosaires_branca" data-dismiss="modal">
                            <div class="thumbnail" id="buenosaires-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/buenos-aires-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Buenos Aires Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          
                          <div class="col-md-4 t-thumb" id="m_londres_preta" data-dismiss="modal">
                            <div class="thumbnail" id="londres-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/londres-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Londres Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_londres_branca" data-dismiss="modal">
                            <div class="thumbnail" id="londres-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/londres-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Londres Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_londres_bege" data-dismiss="modal">
                            <div class="thumbnail" id="londres-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/londres-bege.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Londres Bege</p>
                                </div>
                              </label>
                            </div>
                          </div>

                        </div>
                       
                        <div id="m-classica">
                          <div class="col-md-4 t-thumb" id="m_florenca" data-dismiss="modal">
                            <div class="thumbnail" id="florenca-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/florenca-dourada.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Florença Dourada</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_istambul" data-dismiss="modal">
                            <div class="thumbnail" id="istambul-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/istambul-dourada.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Istambul Dourada</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_paris_preta" data-dismiss="modal">
                            <div class="thumbnail" id="paris-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/paris-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Paris Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_paris_branca" data-dismiss="modal">
                            <div class="thumbnail" id="paris-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/paris-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Paris Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_roma_preta" data-dismiss="modal">
                            <div class="thumbnail" id="roma-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/roma-preta.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Roma Preta</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_roma_branca" data-dismiss="modal">
                            <div class="thumbnail" id="roma-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/roma-branca.jpg', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Roma Branca</p>
                                </div>
                              </label>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <span id="n_moldura" class="btn btn-default" data-dismiss="modal">Sem Moldura</span>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Continuar</button>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
  <!-- end .row -->
  <br>
<div class="wp_footer">
  <?php
    //call the wp foooter
    get_footer();
  ?>
</div>