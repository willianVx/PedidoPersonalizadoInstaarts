<?php get_header(); ?>

<div class="container" onload="formulaTotal()">
  <div class="row">
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
    </div>

    <div class="col-md-10">
    
      <input type="hidden" name="image_url" id="image_url">
      <input type="hidden" name="image_id" id="image_id">
      <input type="hidden" name="edited_image_url" id="edited_image_url">
      <input type="hidden" name="edited_image_id" id="edited_image_id">

      <!--<input id="click-upload" type="file" >-->
      <div id="drop-area" class="drop-zone" data-toggle="modal" data-target="#modalUpload">
        <span>
          <img src="<?php echo plugins_url( 'img/imagem-1.jpg', __FILE__ ); ?>" border="0" />
        </span>
        <p>Click para fazer o Upload da sua imagem</p>
        </span>
      </div>
      <img id="editable-image" class="img-responsive img-upload">
      <div class="container">
        <!-- Modal upload de arquivos por click -->
        <div class="modal fade" id="modalUpload" role="dialog">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Faça o Upload da Sua Imagem</h4>
              </div>
              <div class="modal-body">
                <p>Sua Imagem deve estar nos formatos: JPEG ou PNG</p>

                <form method="post" action="" id="myForm" enctype="multipart/form-data">
                  Click no Botão para escolher a imagem:
                  <input type="file" name="fileToUpload" id="fileToUpload">
                  <br>
                  <!--<input type="submit" name="submit" value="upload-image" class="btn btn-success">-->
                  <input type="hidden" name="image-submission" value="1" />
                  <?php wp_nonce_field( 'wp-img-nonce-iap', 'wp-img-nonce' ); ?>
                </form>

              </div>
              <br>
              <div class="progress">
                <div id="progress-bar" class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"
                  style="width:0%">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hud-produtos">
        <div class="somaProdutos well well-sm">
          <span id="s-tamanho" class="hud-calcularPreco">40x60cm </span>
          <span class="badge">+</span>
          <span id="s-metacrilato" class="hud-calcularPreco">Metacrilato 3mm </span>
          <span id="s-moldura" class="hud-calcularPreco badge">Esolha sua moldura</span>
          <span id="s-preco">Preço</span>
        </div>
        <div class="tamanhoMaterial">
          <div class="b_tamanho col-sm-4">
            <!-- Trigger the modal with a button -->
            <button type="button" class="btn btn-default btn-lg hud-botao" data-toggle="modal" data-target="#tamanho">Tamanho</button>
            <!-- Modal -->
            <div class="modal fade" id="tamanho" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Escolha o tamanho do seu quadro</h4>
                    <nav class="navbar navbar-inverse">
                      <div class="container-fluid">
                        <ul class="nav navbar-nav">
                          <li>
                            <a href="#" id="b-tamanhoPadrao">Padrão</a>
                          </li>
                          <li>
                            <a href="#" id="b-tamanhoPersonalizado">Personalizado</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                  <div class="modal-body">
                    <div class="checkbox">
                      <form id="tamanhoPadrao">
                        <div id="retangulares" class="col-sm-4">
                          <p>Retangulares</p>
                          <label onclick="T12x18()">
                            <input type="radio" name="tamanho" value="12x18"> 12x18</label>
                          <br>
                          <label onclick="T20x30()">
                            <input type="radio" name="tamanho" value="20x30"> 20x30</label>
                          <br>
                          <label onclick="T30x45()">
                            <input type="radio" name="tamanho" value="30x45"> 30x45</label>
                          <br>
                          <label onclick="T40x60()">
                            <input type="radio" name="tamanho" value="40x60" checked> 40x60</label>
                          <br>
                          <label onclick="T60x90()">
                            <input type="radio" name="tamanho" value="60x90"> 60x90</label>
                          <br>
                          <label onclick="T90x45()">
                            <input type="radio" name="tamanho" value="90x45"> 90x45</label>
                          <br>
                        </div>
                        <div id="quadrados" class="col-sm-4">
                          <p>Quadrados</p>
                          <label onclick="T20x20()">
                            <input type="radio" name="tamanho" value="20x20"> 20x20</label>
                          <br>
                          <label onclick="T30x30()">
                            <input type="radio" name="tamanho" value="30x30"> 30x30</label>
                          <br>
                          <label onclick="T45x45()">
                            <input type="radio" name="tamanho" value="45x45"> 45x45</label>
                          <br>
                          <label onclick="T60x60()">
                            <input type="radio" name="tamanho" value="60x60"> 60x60</label>
                          <br>
                          <label onclick="T90x90()">
                            <input type="radio" name="tamanho" value="90x90"> 90x90</label>
                          <br>
                        </div>
                        <div id="panoramicos" class="col-sm-4">
                          <p>Panoramicos</p>
                          <label onclick="T18x12()">
                            <input type="radio" name="tamanho" value="18x12"> 18x12</label>
                          <br>
                          <label onclick="T20x30()">
                            <input type="radio" name="tamanho" value="20x30"> 20x30</label>
                          <br>
                          <label onclick="T30x45()">
                            <input type="radio" name="tamanho" value="30x45"> 30x45</label>
                          <br>
                          <label onclick="T40x60()">
                            <input type="radio" name="tamanho" value="40x60"> 40x60</label>
                          <br>
                        </div>

                      </form>
                    </div>
                  </div>
                  <div id="tamanhoPersonalizado">
                    <form class="col-sm-6">
                      <h4>Tamanho personalizado</h4>
                      <div class="form-group">
                        <label>X:</label>
                        <input type="number" id="x" class="form-control" placeholder="Largura em cm">
                      </div>
                      <div class="form-group">
                        <label>Y:</label>
                        <input type="number" id="y" class="form-control" placeholder="Altura em cm">
                      </div>
                      <button type="button" class="btn btn-default" data-dismiss="modal" onclick="tamanhoUsuario()">Usar tamanho personalizado</button>
                    </form>
                  </div>
                  <div class="modal-footer"></div>
                  <button type="button" class="btn btn-default ok-modal-tamanho" data-dismiss="modal">OK</button>
                </div>
              </div>
            </div>
          </div>
          <!-- tamanho material e moldura -->
          <div class="container m_material col-sm-4">
            <!-- Trigger the modal with a button -->
            <button type="button" class="btn btn-default btn-lg hud-botao" data-toggle="modal" data-target="#material">Acabamento</button>

            <!-- Modal -->
            <div class="modal fade" id="material" role="dialog">
              <div class="modal-dialog">

                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Acabamento</h4>
                  </div>
                  <div class="modal-body col-sm-12">
                    <div class="checkbox">
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
                        <div class="col-sm-3 m-thumb" onclick="meta7()">
                          <div class="thumbnail" id="meta7-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta7mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 7mm</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-3 m-thumb" onclick="meta5()">
                          <div class="thumbnail" id="meta5-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta5mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 5mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="meta4()">
                          <div class="thumbnail" id="meta4-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta4mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 4mm PS</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="meta3()">
                          <div class="thumbnail" id="meta3-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta3mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 3mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="acm5()">
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

                        <div class="col-sm-3 m-thumb" onclick="papelAlgodao()">
                          <div class="thumbnail" id="algodao-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/algodao.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel algodão</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="acetinato()">
                          <div class="thumbnail" id="acetinato-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/acetinato.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Acetinato</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="brilhante()">
                          <div class="thumbnail" id="brilhante-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/brilhante.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Brilhante</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="fosco()">
                          <div class="thumbnail" id="fosco-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/fosco.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Fosco</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-sm-3 m-thumb" onclick="canvas()">
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

                        <div class="col-sm-3 m-thumb" onclick="uvPs()">
                          <div class="thumbnail" id="uv-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/uvps.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>impressão UV sobre PS</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-sm-3 m-thumb" onclick="uvAcm()">
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
                    <button type="button" class="btn btn-default ok-modal-acabamento" data-dismiss="modal">Ok</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="moldura col-sm-4">
            <!-- Trigger the modal with a button -->
            <button type="button" class="btn btn-default btn-lg hud-botao" data-toggle="modal" data-target="#moldura">Moldura</button>
            <button id="comprar-botao" type="button" class="btn btn-success btn-lg hud-botao b-comprar">Comprar</button>
            <!-- Modal -->
            <div class="modal fade" id="moldura" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Moldura</h4>
                  </div>
                  <div class="modal-body col-sm-12">
                    <div class="checkbox">
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
                      <div id="bMoldura">

                        <div id="m-contemporanea">
                          <div class="col-md-4 t-thumb" onclick="atenas()">
                            <div class="thumbnail" id="atenas-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/atenas.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Atenas</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="basel()">
                            <div class="thumbnail" id="basel-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/basel.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Basel</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="berlim()">
                            <div class="thumbnail" id="berlim-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/berlim.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Berlim</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="miami()">
                            <div class="thumbnail" id="miami-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/miami.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Miami</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="novaYork()">
                            <div class="thumbnail" id="novayork-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/novayork.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Nova York</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="saoPaulo()">
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

                          <div class="col-md-4 t-thumb" onclick="amazonas()">
                            <div class="thumbnail" id="amazonas-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amazonas.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amazonas</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="amsterdam()">
                            <div class="thumbnail" id="amsterdam-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/amsterdam.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Amsterdam</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="buenosAires()">
                            <div class="thumbnail" id="buenosaires-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/buenosaires.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Buenos Aires</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="londres()">
                            <div class="thumbnail" id="londres-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/londres.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Londres</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="santiago()">
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
                          <div class="col-md-4 t-thumb" onclick="florenca()">
                            <div class="thumbnail" id="florenca-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/florenca.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Florença</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="instambul()">
                            <div class="thumbnail" id="istambul-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/istambul.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Istambul</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="paris()">
                            <div class="thumbnail" id="paris-select-color">
                              <label>
                                <img src="<?php echo plugins_url( 'img/paris.png', __FILE__ ); ?>" border="0" />
                                <div>
                                  <p>Paris</p>
                                </div>
                              </label>
                            </div>
                          </div>

                          <div class="col-md-4 t-thumb" onclick="roma()">
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
                    <span onclick="semMoldura()" class="btn btn-default">Sem Moldura</span>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Ok</button>
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

  <style type="text/css">
    body {
      min-height: 100vh;
    }
    
    .padleft {
      padding: 0px 0px 0px 20px;
    }

    .button-panel {
      margin-bottom: 10px;
      border-radius: 0;
    }

    .drop-zone {
      border-style: solid;
      border-width: 1px;
      border-color: #b3b3b3;
      border-radius: 12px;
      text-align: center;
      color: lightgray;
      font-size: 24px;
    }

    .drop-zone.dragover {
      opacity: 0.5;
    }

    #click-upload {
      display: none;
    }

    .hud-botao {
      position: relative;
      top: 10px;
    }

    .b-comprar {
      position: relative;
      left: 30%;
    }

    .hud-calcularPreco {
      position: relative;
      padding: 1%;
    }

    .somaProdutos {
      position: relative;
      text-align: center;
      width: 55%;
      left: 35%;
      top: 10px;
      bottom: 20px;
    }

    .ok-modal-tamanho {
      position: relative;
      left: 540px;
      bottom: 5px;
    }

    .thumbnail {
      font-size: 10px;
    }

    .t-thumb {
      position: relative;
      width: 120px;
    }

    .m-thumb {
      position: relative;
      width: 150px;
    }

    .green {
      border-style: solid;
      border-color: green;
    }

    .img-upload {
      position: relative;
      max-width: 1000px;
      max-height: 800px;
      z-index: 10;
    } 

    body.loading {
      position: relative;
    }
    body.loading:before {
      content: ' ';
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0,0,0,0.5);
      position: absolute;
      z-index: 20;
      display: block;
    }
  </style>
</div>

<?php
//call the wp foooter
get_footer();
?>