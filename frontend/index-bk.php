<!--
<div id="tamanho" class="modal fade" role="dialog">
<div class="modal-dialog modal-lg">

            Modal content
            <div class="modal-content col-sm-12" style="position: relative; top: 200px;">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Escolha o tamanho do seu quadro</h4>
              </div>
              <div class="modal-body">
                  <div id="msg_img_not"></div>
                    <div class="checkbox">
                      <form id="tamanhoPadrao">
                          <label  id="tamanho1">
                            <input type="radio" name="tamanho" value="20x18" id="tamanho1_input"> 20x<span id="tamanhoY1">18</span>cm</label>
                          <br>
                          <label id="tamanho2">
                            <input type="radio" name="tamanho" value="30x27" id="tamanho2_input"> 30x<span id="tamanhoY2">27</span>cm</label>
                          <br>
                          <label id="tamanho3">
                            <input type="radio" name="tamanho" value="40x36" id="tamanho3_input"> 40x<span id="tamanhoY3">36</span>cm</label>
                          <br>
                          <label id="tamanho4">
                            <input type="radio" name="tamanho" value="50x45" id="tamanho4_input"> 50x<span id="tamanhoY4">45</span>cm</label>
                          <br>
                          <label id="tamanho5">
                            <input type="radio" name="tamanho" value="60x54" id="tamanho5_input"> 60x<span id="tamanhoY5">54</span>cm</label>
                          <br>
                          <label id="tamanho6">
                            <input type="radio" name="tamanho" value="70x64" id="tamanho6_input"> 70x<span id="tamanhoY6">64</span>cm</label>
                          <br>
                          <label id="tamanho7">
                            <input type="radio" name="tamanho" value="80x72" id="tamanho7_input"> 80x<span id="tamanhoY7">72</span>cm</label>
                          <br>
                          <label id="tamanho8">
                            <input type="radio" name="tamanho" value="90x82" id="tamanho8_input"> 90x<span id="tamanhoY8">82</span>cm</label>
                          <br>

                          <div class="linha_div_vertical2"></div>

                          <div class="texto_tamanho_image"></div>
                          
                      </form>
                </div>
              </div>
              <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Continuar</button>
              </div>
            </div>

          </div>
</div>
-->

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
                          <div class="thumbnail" id="meta7-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta7mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 7mm</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-4 m-thumb" id="meta5mm">
                          <div class="thumbnail" id="meta5-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta5mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 5mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="meta4mm">
                          <div class="thumbnail" id="meta4-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta4mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 4mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="meta3mm">
                          <div class="thumbnail" id="meta3-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/meta3mm.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Metacrilato 3mm</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="acm5mm">
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

                        <div class="col-md-4 m-thumb" id="papelAlgodao">
                          <div class="thumbnail" id="algodao-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/algodao.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel algodão</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="papelAcetinato">
                          <div class="thumbnail" id="acetinato-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/acetinato.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Acetinato</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="papelBrilhante">
                          <div class="thumbnail" id="brilhante-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/brilhante.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Brilhante</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="papelFosco">
                          <div class="thumbnail" id="fosco-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/fosco.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>Papel Fosco</p>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div class="col-md-4 m-thumb" id="papelCanvas">
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

                        <div class="col-md-4 m-thumb" id="uvPS">
                          <div class="thumbnail" id="uv-select-color">
                            <label>
                              <img src="<?php echo plugins_url( 'img/uvps.png', __FILE__ ); ?>" border="0" />
                              <div>
                                <p>impressão UV sobre PS</p>
                              </div>
                            </label>
                          </div>
                        </div>

                        <div class="col-md-4 m-thumb" id="uvACM">
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