jQuery(document).ready(function($) {
	// The visibility of these 2 elements is toggled by `toggleDragDrop()`
	var imageElement = $("#editable-image").hide();
	var dropArea = $("#drop-area");

	var originalImageSrc; // assigned when image file is dropped
	var currentImage; // assigned when the Edit button is clicked

	$("#b-tamanho").click(function(){
		if (typeof originalImageSrc == "undefined") {
			$("#retangulares").hide();
			$(".n-tamanhoPadrao").hide();
			$("#msg_img_not").html("Click em voltar e escolha uma imagem para visualizar os tamanhos possíveis.");
		}else{
			$("#retangulares").show();
			$(".n-tamanhoPadrao").show();
			$("#msg_img_not").hide();
		}
	});

	$("#b-acabamento").click(function(){
		if (typeof originalImageSrc == "undefined") {
			$(".acabamento_modal_body_op").hide();
			$("#acabamento_modal_body").html("Click em voltar e escolha uma imagem para visualizar os acabamentos.");
		}else{
			$(".acabamento_modal_body_op").show();
			$("#acabamento_modal_body").hide();
		}
	});

	$("#b-moldura").click(function(){
		if (typeof originalImageSrc == "undefined") {
			$(".moldura_modal_body_op").hide();
			$("#n_moldura").hide();
			$("#moldura_modal_body").html("Click em voltar e escolha uma imagem para visualizar nossas opções de moldura.");
		}else{
			$(".moldura_modal_body_op").show();
			$("#n_moldura").show();
			$("#moldura_modal_body").hide();
		}
	});

	// manda os dados do pedido para o servidor via ajax
	$("#comprar-botao").click(function() {
		//imagemEditada = currentImage.src;
		//console.log(imagemEditada);
		
		if (escolherPreco) {
			alert("Por favor, escolha o tamanho do seu quadro!");
			return;
		}
		if (escolherAcabamento == 0) {
			alert("Por favor, escolha o acabamento do seu quadro!");
			return;
		}
		console.log(image_url.value);

		var imagemOriginal = image_url.value;
		var editimage = edited_image_url.value;

		if (typeof currentImage == "undefined") {
			console.log("imagem sem edição");

			if (typeof originalImageSrc == "undefined") {
				alert("Escolha uma imagem clicando sobre a área indicada!");
			}
			else {
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
						imagem: imagemOriginal
					},
					success: function(data) {
						if (data == "0") {
							alert("Erro no processamento. Tente mais tarde.");
						} else {
							window.location = comprar.cart_url;
							console.log(comprar.cart_url);
						}
					},
					error: function(data) {
						alert("Erro no processamento. Tente mais tarde.");
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
					imagemAdobe: editimage
				},
				success: function(data) {
					if (data == "0") {
						alert("Erro no processamento. Tente mais tarde.");
					} else {
						window.location = comprar.cart_url;
						console.log(comprar.cart_url);
					}
				},
				error: function(data) {
					alert("Erro no processamento. Tente mais tarde.");
				}
			});
		}
	});

	// Image Editor configuration
	var csdkImageEditor = new Aviary.Feather({
		apiKey: comprar.api_val,
		theme: `light`,
		language: `pt_BR`,
		tools: ["overlays", "orientation", "crop", "resize", "focus", "vignette"],
		onSave: function(imageID, newURL) {
			currentImage.src = newURL;

			//Do the Upload
			if (submittingImage === true) return;
			submittingImage = true;

			var form_data = new FormData();
			form_data.append("file", newURL);
			form_data.append("action", "iap_imageTransfer");

			//Mimc the loading
			csdkImageEditor.close();
			$("body").addClass("loading");

			$.ajax({
				type: "post",
				url: comprar.ajax_url,
				contentType: false,
				processData: false,
				cache: false,
				data: form_data,
				success: function(result) {
					setTamanho();
					if (result == "0") {
						alert(
							"Ocorreu um erro em nosso sistema. Por favor, tente novamente mais tarde."
						);
					} else {
						results = result.split("|", 2);
						$("#edited_image_url").val(results[1]);
						$("#edited_image_id").val(results[0]);
					}
					$("body").removeClass("loading");
					submittingImage = false;
				},
				error: function(response) {
					alert(
						"Ocorreu um erro em nosso sistema. Por favor, atualize a página e tente novamente."
					);
					$("body").removeClass("loading");
					submittingImage = false;
				}
			});
			setTamanho();
		},
		onError: function(errorObj) {
			console.log(errorObj.code);
			console.log(errorObj.message);
			console.log(errorObj.args);
		}
	});
	// Edit
	$("#edit-image-button").click(function() {
		launchImageEditor();
		//console.log(image_url);
		setTamanho();
		//console.log(imageElement.naturalHeight);
	});
	// Reset
	$("#reset-image-button").click(function() {
		if (
			$("#editable-image").attr("src") === originalImageSrc ||
			!originalImageSrc
		) {
			alert("Você ainda não fez alterações");
		} else {
			$("#editable-image").attr("src", originalImageSrc);
		}
	});
	// Clear
	$("#clear-image-button").click(function() {
		if (imageElement.attr("src")) {
			clearImage();
			toggleDragDrop();
		} else {
			alert("Nada para limpar");
		}
	});

	// Drop
	//// Prevent defaults on drag/drop events
	dropArea
		.on("drag dragstart dragend dragover dragenter dragleave drop", function(
			e
		) {
			if (e.preventDefault) e.preventDefault();
			if (e.stopPropagation) e.stopPropagation();
		})
		/*.on('click', function(e) {
		//Click anywhere in Droparea to upload file
	  	$('#fileToUpload').click();
	})*/
		.on("drop", function(e) {
			// Get the dropped file
			var file = e.originalEvent.dataTransfer.files[0];
			validateFileType(file);
		});
	dropArea.on("dragover", function(e) {
		this.className = "drop-zone dragover";
		return false;
	});
	dropArea.on("dragleave", function(e) {
		this.className = "drop-zone";
		return false;
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
			alert("A imagem precisa estar em formato JPG ou PNG");
			submittingImage = false;
			return;
		}
		if (file["size"] > "32000000") {
			alert("A imagem não pode ser maior que 30 MB");
			submittingImage = false;
			return;
		}

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
					}
				};
				return myXhr;
			},
			success: function(result) {
				$(".hud-botao").css("color","black");
				switch (result) {
					case "0":
						alert(
							"Ocorreu um erro ao enviar a imagem. Por favor tente novamente."
						);
						break;
					case "1":
						alert("A imagem precisa estar no formato JPG ou PNG.");
						break;
					case "2":
						alert("A imagem não pode ser maior que 32 MB");
						break;
					default:
						results = result.split("|", 2);
						$("#image_url").val(results[1]);
						$("#image_id").val(results[0]);
						imageElement.attr("src", results[1]);
						originalImageSrc = imageElement.attr("src");
						toggleDragDrop();
						$(".modal .close").click();
						break;
				}
				submittingImage = false;
				$("#progress-bar").css("width", "0%");
			},
			error: function(response) {
				alert("Ocorreu um erro ao enviar a imagem. Por favor tente novamente.");
				submittingImage = false;
				$("#progress-bar").css("width", "0%");
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
			//launchImageEditor();
			return true;
		} else {
			alert("Por favor, tente nos formatos JPEG ou PNG");
			return false;
		}
	}

	function launchImageEditor() {
		if (!originalImageSrc) {
			alert("Faça o upload de alguma imagem primeiro!");
			return false;
		}

		// Get the image to be edited
		// `[0]` gets the image itself, not the jQuery object

		currentImage = $("#editable-image")[0];
		csdkImageEditor.launch({
			image: currentImage.id
			//url: currentImage.src
		});
	}

	//send data to PHP By Drop
	function upload(files) {
		var formData = new FormData(),
			xhr = new XMLHttpRequest(),
			x;
		for (x = 0; x < files.length; x = x + 1) {
			formData.append("file[]", files[x]);
		}
		xhr.onload = function() {
			var data = this.responseText;
		};
		xhr.open("post", "upload.php");
		xhr.send(formData);
	}

	//upload by drop (quando o usuario arrasta a imagem para o dropzone)
	(function TheDrop() {
		var dropzone = document.getElementById("drop-area");
		dropzone.ondrop = function(e) {
			e.preventDefault();
			this.className = "drop-zone";
			upload(e.dataTransfer.files);
		};
	})();

	$("#b-tamanho").click(function(){
		setTamanho();
	});

	function setTamanho(){
			console.log(imageElement["0"].naturalHeight,imageElement["0"].naturalWidth);
			console.log(imageElement.width(),imageElement.height());
			window.imgWidth = imageElement.width();
			window.imgHeight = imageElement.height();
	}

});
