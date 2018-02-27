
<?php get_header(); ?>

<div class="container" onload="formulaTotal()">
 
  <div class="row container-b">
    <!-- botoes editar - voltar - limpar --> 
    <div class="col-md-2">
      <div class="row">
        <div class="col-md-12">
          <button id="edit-image-button" class="btn btn-primary btn-block button-panel">
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
          <a href="#"><img src="<?php echo plugins_url( 'img/imagem-1.jpg', __FILE__ ); ?>" border="0" /></a>
        </span>
        <span>
        <p>Click para fazer o Upload da sua imagem</p>
        </span>
      </div>
      <img id="editable-image" class="img-responsive img-upload">

      <div class="container">
        <!-- Modal upload de arquivos por click -->
        <div class="modal fade" id="modalUpload" role="dialog" style="position: absolute; top: 10px;">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Faça o Upload da Sua Imagem</h4>
              </div>
              <div class="modal-body">

                <p>Ela deve estar nos formatos: JPEG ou PNG</p>

                <form method="post" action="" id="myForm" enctype="multipart/form-data">
                  Click no Botão para escolher apartir do seu computador:
                  <input type="file" name="fileToUpload" id="fileToUpload">
                  <br>
                  <!--<input type="submit" name="submit" value="upload-image" class="btn btn-success">-->
                  <input type="hidden" name="image-submission" value="1"/>
                  <?php wp_nonce_field( 'wp-img-nonce-iap', 'wp-img-nonce' ); ?>
                </form>
              </div>
              <br>
              <div class="progress">
                <div id="progress-bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                  style="width:0%">
                </div>
              </div>
              <div class="linha_div_vertical">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hud-produtos">
        <div class="col-lg-12 col-sm-12 col-xs-12">
          <div class="col-lg-3 col-sm-3 col-xs-6">
            <button type="button" id="b-tamanho" class="btn btn-default btn-lg hud-botao" data-toggle="modal" data-target="#tamanho">Tamanho: <span id="s-tamanho"> </span> </button>
          </div>
          <div class="col-lg-3 col-sm-3 col-xs-6">
            <!-- Trigger the modal with a button -->
            <button type="button" id="b-acabamento" class="btn btn-default btn-lg hud-botao" data-toggle="modal" data-target="#material"><span id="s-metacrilato"> Acabamento</span></button>
          </div>

          <div class="col-lg-3 col-sm-3 col-xs-6">
             <!-- Trigger the modal with a button -->
            <button type="button" id="b-moldura" class="btn btn-default btn-lg hud-botao" data-toggle="modal" data-target="#moldura"><span id="s-moldura">Moldura</span></button>
          </div>

          <div class="col-lg-3 col-sm-3 col-xs-6">
            <button id="comprar-botao" type="button" class="btn btn-default btn-lg hud-botao b-comprar">Comprar: <span id="s-preco" class="s-preco"></span> </button>
            <span id="s-preco"></span>
          </div>
        </div>
      <div id="teste_tamanho_proporcional"></div>

        <div class="tamanhoMaterial" >
          <div class="b_tamanho col-sm-4">
            <!-- Trigger the modal with a button -->

            <!-- Modal -->
            <div class="modal fade" id="tamanho" role="dialog" >
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content" style="position: relative; top: 200px;">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Escolha o tamanho do seu quadro</h4>
                    <nav class="navbar navbar-inverse n-tamanhoPadrao">
                      <div class="container-fluid">
                        <ul class="nav navbar-nav">
                          <li>
                            <a href="#" id="b-tamanhoPadrao">Padrão</a>
                          </li>
                          <li>
                            <a href="#" id="#"></a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div class="modal-body">
                    <div id="msg_img_not"></div>
                    <div class="checkbox">
                      <form id="tamanhoPadrao">
                        <div id="retangulares" class="col-sm-4">
                          
                          <label  id="tamanho1">
                            <input type="radio" name="tamanho" value="20x18" checked> 20x<span id="tamanhoY1">18</span>cm</label>
                          <br>
                          <label id="tamanho2">
                            <input type="radio" name="tamanho" value="30x27"> 30x<span id="tamanhoY2">27</span>cm</label>
                          <br>
                          <label id="tamanho3">
                            <input type="radio" name="tamanho" value="40x36"> 40x<span id="tamanhoY3">36</span>cm</label>
                          <br>
                          <label id="tamanho4">
                            <input type="radio" name="tamanho" value="50x45" > 50x<span id="tamanhoY4">45</span>cm</label>
                          <br>
                          <label id="tamanho5">
                            <input type="radio" name="tamanho" value="60x54"> 60x<span id="tamanhoY5">54</span>cm</label>
                          <br>
                          <label id="tamanho6">
                            <input type="radio" name="tamanho" value="70x64"> 70x<span id="tamanhoY6">64</span>cm</label>
                          <br>
                          <label id="tamanho7">
                            <input type="radio" name="tamanho" value="80x72"> 80x<span id="tamanhoY7">72</span>cm</label>
                          <br>
                          <label id="tamanho8">
                            <input type="radio" name="tamanho" value="90x82"> 90x<span id="tamanhoY8">82</span>cm</label>
                          <br>
                        </div>
                        <div id="quadrados" class="col-sm-4">
                          
                          <br>
                        </div>
                        <div id="panoramicos" class="col-sm-4">
                          
                          <br>
                        </div>

                      </form>
                    </div>
                  </div>
                  
                  <div id="tamanhoPersonalizado">
                    
                  </div>

                  <div class="modal-footer"></div>
                  <button type="button" class="btn btn-default ok-modal-tamanho" data-dismiss="modal">Voltar</button>
                </div>
              </div>
            </div>
          </div>
          <!-- tamanho material e moldura -->
          <div class="container m_material col-sm-4">

            <!-- Modal -->
            <div class="modal fade" id="material" role="dialog"> 
              <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content" style="position: relative; top: 200px;">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Acabamento</h4>
                  </div>
                  <div class="modal-body col-sm-12">
                    <div id="acabamento_modal_body"></div>
                    <div class="checkbox acabamento_modal_body_op">
                      <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                          <div class="navbar-header"></div>
                          <ul class="nav navbar-nav">
                            <li id="bMeta">
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
                        <div class="col-sm-3 m-thumb" id="meta7mm">
                          <div class="thumbnail" id="meta7-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta7mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 7mm</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-3 m-thumb" id="meta5mm">
                          <div class="thumbnail" id="meta5-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta5mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 5mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="meta4mm">
                          <div class="thumbnail" id="meta4-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta4mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 4mm PS</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="meta3mm">
                          <div class="thumbnail" id="meta3-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta3mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 3mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="acm5mm">
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

                        <div class="col-sm-3 m-thumb" id="papelAlgodao">
                          <div class="thumbnail" id="algodao-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/algodao.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel algodão</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="papelAcetinato">
                          <div class="thumbnail" id="acetinato-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/acetinato.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Acetinato</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="papelBrilhante">
                          <div class="thumbnail" id="brilhante-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/brilhante.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Brilhante</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="papelFosco">
                          <div class="thumbnail" id="fosco-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/fosco.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Fosco</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-3 m-thumb" id="papelCanvas">
                          <div class="thumbnail" id="canvas-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/canvas.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Impressão em Canvas</p>
                              </div>
                            </label>
                          </div>
                        </div>

                      </div>

                      <div id="tUv">

                        <div class="col-sm-3 m-thumb" id="uvPS">
                          <div class="thumbnail" id="uv-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/uvps.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>impressão UV sobre PS</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" id="uvACM">
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
                    <button type="button" class="btn btn-default ok-modal-acabamento" data-dismiss="modal">Voltar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="moldura col-sm-4">
           
            <!-- Modal -->
            <div class="modal fade" id="moldura" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content" style="position: relative; top: 200px;">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Moldura</h4>
                  </div>
                  <div class="modal-body col-sm-12">
                  <div id="moldura_modal_body"></div>
                    <div class="checkbox moldura_modal_body_op">
                      
                      <nav class="navbar navbar-inverse">
                        <div class="container-fluid">
                          <div class="navbar-header"></div>
                          <ul class="nav navbar-nav">
                            <li id="b-contemporanea">
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
                          <div class="col-md-4 t-thumb" id="m_atenas">
                            <div class="thumbnail" id="atenas-select-color" >
                              <label>
                                <img src="<?php echo plugins_url( 'img/atenas.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Atenas</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_basel">
                            <div class="thumbnail" id="basel-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/basel.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Basel</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_berlim">
                            <div class="thumbnail" id="berlim-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/berlim.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Berlim</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_miami">
                            <div class="thumbnail" id="miami-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/miami.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Miami</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_nova_york">
                            <div class="thumbnail" id="novayork-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/novayork.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Nova York</p>
                                </div>
                              </label>
                            </div>
                          </div>
                         
                          <div class="col-md-4 t-thumb" id="m_sao_paulo">
                            <div class="thumbnail" id="saopaulo-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/saopaulo.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>São Paulo</p>
                                </div>
                              </label>
                            </div>
                          </div>
                         
                        </div>
                        <div id="m-moderna">

                          <div class="col-md-4 t-thumb" id="m_amazonas">
                            <div class="thumbnail" id="amazonas-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amazonas.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amazonas</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_amsterdam">
                            <div class="thumbnail" id="amsterdam-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amsterdam.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amsterdam</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_buenosaires">
                            <div class="thumbnail" id="buenosaires-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/buenosaires.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Buenos Aires</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_londres">
                            <div class="thumbnail" id="londres-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/londres.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Londres</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_santiago">
                            <div class="thumbnail" id="santiago-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/santiago.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Santiago</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                       
                        <div id="m-classica">
                          <div class="col-md-4 t-thumb" id="m_florenca">
                            <div class="thumbnail" id="florenca-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/florenca.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Florença</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_istambul">
                            <div class="thumbnail" id="istambul-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/istambul.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Istambul</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_paris">
                            <div class="thumbnail" id="paris-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/paris.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Paris</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" id="m_roma">
                            <div class="thumbnail" id="roma-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/roma.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Roma</p>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <span id="n_moldura" class="btn btn-default">Sem Moldura</span>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Voltar</button>
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
</div>

  <?php
  //call the wp foooter
  get_footer();
  ?>
