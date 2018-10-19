jQuery(document).ready(function($) {
	//carrega imagens favoritadas uploads passados 
	fav();
	// The visibility of these 2 elements is toggled by `toggleDragDrop()`
	var imageElement = $("#editable-image").hide();
	var dropArea = $("#drop-area");

	var originalImageSrc; // assigned when image file is dropped
	var currentImage; // assigned when the Edit button is clicked
	

	$(".img-upload-line").hide();

	$("#b-photobloco").click(function(){
		if (!imageElement.attr("src")) {
			hide_elements();
		}else{
			show_elements();
		}
	});

	$("#b-tamanho").click(function(){
		if (!imageElement.attr("src")) {
			modal_info.constructor('Volte e escolha uma imagem para visualizar os tamanhos possíveis','aviso');
			$('#tamanho').modal('toggle');
		}else{
			show_elements();
		}
	});

	$("#b-acabamento").click(function(){
		if (!imageElement.attr("src")) {
			modal_info.constructor('Volte e escolha uma imagem para visualizar os acabamentos','aviso');
			$('#material').modal('toggle');
		}else{
			show_elements();
		}
	});

	$("#b-moldura").click(function(){
		if (!imageElement.attr("src")) {
			modal_info.constructor('Volte e escolha uma imagem para visualizar nossas opções de moldura','aviso');
			$('#moldura').modal('toggle');
		}
		if (nome_acabamento == "papelAlgodao" || nome_acabamento == "papelAcetinato" || nome_acabamento == "papelBrilhante" || nome_acabamento == "papelFosco") {
			modal_info.constructor('Não é possível escolher moldura para o acabamento selecionado!','aviso');
			$('#moldura').modal('toggle');
		}else{
			show_elements();
		}
	});

	function hide_elements(){
		$(".iap_photo_content").hide();
		$("#iap_texto_n_img").html("Volte e escolha uma imagem para visualizar os tamanhos possíveis.");

		$("#tamanhoPadrao").hide();
		$(".n-tamanhoPadrao").hide();
		$("#msg_img_not").html("Volte e escolha uma imagem para visualizar os tamanhos possíveis.");

		$(".acabamento_modal_body_op").hide();
		$("#acabamento_modal_body").html("Volte e escolha uma imagem para visualizar os acabamentos.");

		$(".moldura_modal_body_op").hide();
		$("#n_moldura").hide();
		$("#moldura_modal_body").html("Volte e escolha uma imagem para visualizar nossas opções de moldura.");
	}

	function show_elements(){
		$(".iap_photo_content").show();
		$(".iap_tp_botao").show();
		$("#iap_texto_n_img").hide();

		$("#tamanhoPadrao").show();
		$(".n-tamanhoPadrao").show();
		$("#msg_img_not").hide();

		$(".acabamento_modal_body_op").show();
		$("#acabamento_modal_body").hide();

		$(".moldura_modal_body_op").show();
		$("#n_moldura").show();
		$("#moldura_modal_body").hide();
	}

//salva a imagem cropada e envia os dados do pedido para o servidor
$("#comprar-botao-photobloco").click(function(){
	$("#body_loading").show();
	var imagemOriginal = image_url.value;
	var canvas = document.getElementById('iap_crop_image');
	var dataUrl = canvas.toDataURL("image/png");

	//faz o tratamento da resposta da imagem cropada e envia o pedido 
		var crop_image_data = JSON.stringify(window.meta_data_canvas);
		$.ajax({
			type: "POST",
			url: comprar.ajax_url,
			data: {
				action: "iap_order",
				d_photobloco: "d_photobloco",
				acabamento: iap_photobloco.tipo_photobloco,
				largura: iap_photobloco.tamanho_x,
				altura: iap_photobloco.tamanho_y,
				imagem: imagemOriginal,

				cropper_x: metadata_canvas.lista["0"][1][1],
				cropper_y: metadata_canvas.lista["0"][2][1],
				cropper_width: metadata_canvas.lista["0"][3][1],
				cropper_height: metadata_canvas.lista["0"][4][1],
				cropper_dx: metadata_canvas.lista["0"][5][1],
				cropper_dy: metadata_canvas.lista["0"][6][1],
				cropper_dWidth: metadata_canvas.lista["0"][7][1],
				cropper_dHeight: metadata_canvas.lista["0"][8][1],
				canvas_width: metadata_canvas.lista["0"][9][1],
        		canvas_height: metadata_canvas.lista["0"][10][1],
				image_width: metadata_canvas.lista["0"][11][1],
				image_height: metadata_canvas.lista["0"][12][1]

			},
			success: function(data) {
				if (data == "0") {
					modal_info.constructor("Erro no processamento. Tente mais tarde.", "aviso");
				} else {
					window.location = comprar.cart_url;
					console.log(comprar.cart_url);
				}
			},
			error: function(data) {
				modal_info.constructor("Erro no processamento. Tente mais tarde.", "aviso");
			}
		});
});

	// manda os dados do pedido para o servidor via ajax
	$("#comprar-botao").click(function() {

		var imagemOriginal = image_url.value;
		var editimage = edited_image_url.value;

		if (typeof originalImageSrc == 'undefined') {
			modal_info.constructor("Por favor, escolha uma imagem clicando sobre a área indicada!", "aviso");
			return;
		}

		if (escolherPreco == 0) {
			modal_info.constructor("Por favor, escolha o tamanho do seu quadro!", "aviso");
			return;
		}
		if (escolherAcabamento == 0) {
			modal_info.constructor("Por favor, escolha o acabamento do seu quadro!", "aviso");
			return;
		}
		
		if (typeof currentImage == "undefined") {
			
			if (iap_resolve_url_acervo()) {
				imagemOriginal = iap_resolve_url_acervo();
			}
			if (typeof originalImageSrc == "undefined") {
				modal_info.constructor("Escolha uma imagem clicando sobre a área indicada!", "aviso");
				return;
			}
			
			else {
				modal_info.constructor("...", "loading");
				$.ajax({
					type: "POST",
					url: comprar.ajax_url,
					data: {
						action: "iap_order",
						d2: "d2",
						moldura: nome_moldura,
						acabamento: nome_acabamento,
						tipoMoldura: tipo_moldura,
						largura: x,
						altura: y,
						imagem: imagemOriginal,
						cod_autor: localiza_autor.init(iap_resolve_url_acervo())
					},
					success: function(data) {
						if (data == "0") {
							modal_info.constructor("Erro no processamento. Tente mais tarde.", "aviso");
						} else {
							window.location = comprar.cart_url;
							console.log(comprar.cart_url);
						}
					},
					error: function(data) {
						modal_info.constructor("Erro no processamento. Tente mais tarde.", "aviso");
					}
				});
			}
		} else {
			$.ajax({
				type: "POST",
				url: comprar.ajax_url,
				data: {
					action: "iap_order",
					d2: "d2",
					moldura: nome_moldura,
					acabamento: nome_acabamento,
					tipoMoldura: tipo_moldura,
					largura: x,
					altura: y,
					imagem: imagemOriginal,
					imagemAdobe: editimage,
					cod_autor: localiza_autor.init(iap_resolve_url_acervo())
				},
				success: function(data) {
					if (data == "0") {
						modal_info.constructor("Erro no processamento. Tente mais tarde.", "aviso");
					} else {
						window.location = comprar.cart_url;
					}
				},
				error: function(data) {
					modal_info.constructor("Erro no processamento. Tente mais tarde.", "aviso");
				}
			});
		}
	});

	// Reset
	$("#reset-image-button").click(function() {
		
		if (
			$("#editable-image").attr("src") === originalImageSrc ||
			!originalImageSrc
		) {
			modal_info.constructor('Você ainda não fez alterações"','aviso');
		} else {
			$("#editable-image").attr("src", originalImageSrc);
		}
	});
	// Clear
	$("#clear-image-button").click(function() {
		window.editar_unlock = 0;
		if (imageElement.attr("src")) {
			$("#s-tamanho").html(" ");
			$("#s-metacrilato").html("Acabamento");
			$("#s-moldura").html("Moldura");
			$("#s-preco").html(" ");
			escolherAcabamento = 0;
			escolherPreco = 0;
			clearImage();
			toggleDragDrop();
			if (iap_define_tipo() == 'photobloco') {
				window.location.assign("https://instaarts.com/produto/photobloco/");
			}else{
				window.location.assign("https://instaarts.com/produto/quadro-personalizado-iap");
			}
		} else {
			modal_info.constructor("Nada para limpar.", "aviso");
		}
	});

	// Click
	//Hold the submission
	var submittingImage = false;
	//// Takes file from file chooser
	$("#fileToUpload").on("change", function(e) {
		var file = e.originalEvent.target.files[0];
		
		//Do the Upload

		if (submittingImage === true) return;
		submittingImage = true;

		var form_data = new FormData();

		if (
			file !== undefined &&
			file["type"] != "image/png" &&
			file["type"] != "image/jpg" &&
			file["type"] != "image/jpeg"
		) {
			modal_info.constructor("A imagem precisa estar em formato JPG ou PNG", "aviso");
			submittingImage = false;
			return;
		}
		/*
		if (file["size"] > "32000000") {
			modal_info.constructor("A imagem não pode ser maior que 30 MB", "aviso");
			submittingImage = false;
			return;
		}
		*/

		form_data.append("file", $(this).prop("files")[0]);
		form_data.append("action", "iap_imageUpload");
		form_data.append("wp-img-nonce", $("#wp-img-nonce").val());

		$.ajax({
			type: "post",
			url: comprar.ajax_url,
			contentType: false,
			processData: false,
			cache: false,
			data: form_data,
			xhr: function() {
				var myXhr = $.ajaxSettings.xhr();
				// For handling the progress of the upload
				myXhr.upload.onprogress = function(ev) {
					if (ev.lengthComputable) {
						var percentComplete = parseInt(ev.loaded / ev.total * 100);
						$("#progress-bar").css("width", percentComplete + "%");
						$(".percent").html(percentComplete + "%");
					}
				};
				return myXhr;
			},
			success: function(result) {
				$(".hud-botao").css("color","black");
				switch (result) {
					case "0":
						modal_info.constructor('Ocorreu um erro ao enviar a imagem. Por favor tente novamente.', 'aviso');
						break;
					case "1":
						modal_info.constructor('A imagem precisa estar no formato JPG ou PNG.', 'aviso');
						break;
					case "2":
						modal_info.constructor('A imagem não pode ser maior que 32 MB.', 'aviso');
						break;
					default:
						results = result.split("|", 2);
						$("#image_url").val(results[1]);
						$("#image_id").val(results[0]);
						imageElement.attr("src", results[1]);
						originalImageSrc = imageElement.attr("src");
						
						if(fav().length == 8){
							modal_info.constructor('Você já salvou muitas imagens!', 'aviso');
						}else{
							add_fav(originalImageSrc);
						}

						if (!window.porta_retrato_upload_controlador){
							toggleDragDrop();
						}
						
						cliente_imagem_url.add_lista(originalImageSrc);
						//console.log(originalImageSrc);
						if (iap_define_tipo() == "photobloco") {
							iap_show_photobloco();
						}
						$(".modal .close").click();

						if (typeof cropper == "undefined") {	
							//console.log("cropper ainda não definido!");
						}else{
							cropper.replace(cliente_imagem_url.ultimo_item());
							cropper.cropBoxData.minHeight = imagem_atual_info.minCropBoxHeight(1000);
						}
						init_quadro_na_parede(originalImageSrc);
						break;
				}
				submittingImage = false;
				$("#progress-bar").css("width", "0%");
				$(".percent").html(" ");
			},
			error: function(response) {
				modal_info.constructor('Ocorreu um erro ao enviar a imagem. Por favor tente novamente.', 'aviso');
				submittingImage = false;
				$("#progress-bar").css("width", "0%");
				$(".percent").html(" ");
			}

		});
	});
	// Checks if the file type is in the array of supported types
	function fileIsSupported(file) {
		var supportedFileTypes = ["image/jpeg", "image/png"];
		return supportedFileTypes.indexOf(file.type) >= 0 ? true : false;
	}
	// Toggle visibility of the drag/drop div and img element
	function toggleDragDrop() {
		dropArea.toggle();
		imageElement.toggle();
		$(".img-upload-line").toggle();
	}
	function setImage(file) {
		imageElement.attr("src", window.URL.createObjectURL(file));
		originalImageSrc = imageElement.attr("src");
		upload(file);
	}
	function clearImage() {
		imageElement.attr("src", "");
	}
	function validateFileType(file) {
		if (fileIsSupported(file)) {
			setImage(file);
			toggleDragDrop();
			return true;
		} else {
			modal_info.constructor('Por favor, tente nos formatos JPEG ou PNG', 'aviso');
			return false;
		}
	}

	$("#b-tamanho").click(function(){
		setTamanho();
	});

	function setTamanho(){
		window.imgWidth = imageElement["0"].naturalWidth;
		window.imgHeight = imageElement["0"].naturalHeight;
	}

	if (iap_define_tipo() == "imagem_acrilico") {
        $("#img_acrilico").show();
        $("#main_carregando").hide();
    }
    
    if (iap_define_tipo() == "photobloco") {
		$("#img_photobloco").show();

        $("#main_carregando").hide();
        $("#b-tamanho").hide();
        $("#b-acabamento").hide();
        $("#b-moldura").hide();
        $("#comprar-botao").hide();
        $("#edit-image-button").hide();
		$(".b_quadro_na_parede").hide();
		$(".hud-botao").css("left","200px");
		
		$(".drop-zone").css("background-color","#fbffff");

		if ($(window).width() <= 768) {
			$("#img_photobloco").hide();
			$("#img_photobloco_2").show();
		}
	}

	if(iap_define_tipo() == "porta_retrato") {
		
		$("#img_porta_retrato").show();
		
		$("#main_carregando").hide();
		$("#drop-area").addClass("col-lg-8");
		$(".img-upload-line").addClass("col-lg-8");
		$("#sidebar").show();
		$("#reset-image-button").hide();
		$("#clear-image-button").hide();
		$(".hud-botoes-mat").hide();

		$(".drop-zone").css("background-color","#fbffff");

		if (porta_retrato_13x13_config.d_porta_retrato_tamanho == "13x18cm") {
			$(".ret-resize-horizontal").show();
			$(".ret-resize-vertical").show();
		}

		$("#iap_crop_porta_retrato").show();
		$("#iap_reiniciar_porta_retrato").show();
		$(".iap_box_upload").css('display', 'block');
		if ($(window).width() > 768) {
			$("#iap_crop_porta_retrato").show();
			$("#iap_reiniciar_porta_retrato").show();

			$(".drop-zone").css("width","500px");

			$("#editable-image").css("width","500px");
			$(".img-upload").css("width","500px");
			$(".img-upload-line").css("width","500px");
			$("#img_porta_retrato").css("height","450px");

		}

		if ($(window).width() <= 768) {
			$("#img_porta_retrato_1").show();
			$("#img_porta_retrato").hide();

			var $portaRetrato = $("#porta_retrato");
			$portaRetrato.find("li");

		}

		if ($(window).width() <= 425) {

			var $sidebar = $("#sidebar");

		}

	}

	$(".iap_box_upload").show();
	//mostra os botões photobloco e cortar quando a imagem é definida 
	function  iap_show_photobloco(){
        $(".iap_crop_div").show();
        $("#comprar-botao-photobloco").show();
	}
	/*
	*
	*
	*
	*/
	if (iap_resolve_url_acervo()) {
		imageElement.attr('src', iap_resolve_url_acervo());
		$(".hud-botao").css("color","black");
		originalImageSrc = iap_resolve_url_acervo();
		toggleDragDrop();
		if(iap_define_tipo() == 'photobloco'){
			iap_show_photobloco();
			console.log('isso eh um photobloco com imagem para ser renderizada');
		}
	}
});

var cliente_imagem_url = {

	lista: [],
	controle: 0,
	add_lista: function(url){
		this.lista.push(url);
		this.elemento_imagem();
	},
	remove_lista: function(){
		this.lista.splice(this.lista.length - 1, 1);
	},
	ultimo_item: function(){
		var ultimo = this.lista[this.lista.length - 1];

		return ultimo; 
	},
	elemento_imagem: function(index){
		
		var nova_imagem = document.createElement('img');
		var src = this.lista[index] || this.ultimo_item();
		nova_imagem.src = src;
		nova_imagem.width = 200;
		nova_imagem.id = "user_img"+this.controle;

		var user_img = document.getElementById("iap_user_img");

		user_img.appendChild(nova_imagem);

		++this.controle;		
		return nova_imagem;
	},

}

var metadata_canvas = {
	lista: [],
	add_lista: function(cropper_x, cropper_y, cropper_width,cropper_height,cropper_dx,cropper_dy,cropper_dWidth,cropper_dHeight,canvas_width,canvas_height, image_width,image_height){
		
		this.cropper_x = cropper_x;
		this.cropper_y = cropper_y;
		this.cropper_width = cropper_width;
		this.cropper_height = cropper_height;
		this.cropper_dx = cropper_dx;
		this.cropper_dy = cropper_dy
		this.cropper_dWidth = cropper_dWidth
		this.cropper_dHeight = cropper_dHeight;
		
		this.canvas_width = canvas_width;
		this.canvas_height = canvas_height;
		this.image_width = image_width;
		this.image_height = image_height;

		this.lista.push(["metacanvas",["cropper_x", this.cropper_x],["cropper_y",this.cropper_y],["cropper_width",this.cropper_width],["cropper_height",this.cropper_height],["cropper_dx",this.cropper_dx],["cropper_dy",this.cropper_dy],["cropper_dWidth",this.cropper_dWidth],["cropper_dHeight",this.cropper_dHeight],["canvas_width",this.canvas_width],["canvas_height",this.canvas_height],["image_width",this.image_width],["image_height",this.image_height]]);
	}
}