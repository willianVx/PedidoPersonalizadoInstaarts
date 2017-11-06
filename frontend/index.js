$(document).ready(function() {
	// The visibility of these 2 elements is toggled by `toggleDragDrop()`
	var imageElement = $('#editable-image').hide();
	var dropArea = $("#drop-area");

	var originalImageSrc; // assigned when image file is dropped
	var currentImage; // assigned when the Edit button is clicked

	// manda os dados do pedido para o servidor via ajax 
	jQuery(function($){
    $("#comprar-botao").click(function(){  
      console.log(originalImageSrc);
      $.ajax({
          type:"POST",
          url: comprar.ajax_url,
          data: {
          action: 'iap_order', 
          moldura: nome_moldura,
          acabamento: nome_acabamento,
          largura: x,
          altura: y,
          preco: preco
         },  
         success: function(data){
         console.log(data);
         }
        });
    	});
	});
	// Image Editor configuration
	var csdkImageEditor = new Aviary.Feather({
		apiKey: configObj.apiKey,
		theme: `light`,
        language: `pt_BR`,
        tools: ['overlays','orientation','crop','resize','focus','vignette'],
		onSave: function(imageID, newURL) {
			currentImage.src = newURL;
			csdkImageEditor.close();
			console.log(currentImage);
		},
		onError: function(errorObj) {
			console.log(errorObj.code);
			console.log(errorObj.message);
			console.log(errorObj.args);
		}
	});
	
	// Edit
	$('#edit-image-button').click(function() {
		launchImageEditor();
	});
	// Reset
	$('#reset-image-button').click(function() {
		if ($('#editable-image').attr('src') === originalImageSrc || !originalImageSrc) {
			alert('Você ainda não fez alterações');
		}
		else {
			$('#editable-image').attr('src', originalImageSrc);
		}
	});
	// Clear
	$('#clear-image-button').click(function() {
		if (imageElement.attr('src')) {
			clearImage();
			toggleDragDrop();
		}
		else {
			alert("Nada para limpar");
		}
	});
	// Download
	/*
	$('#download-image-button').click(function(e) {
		e.preventDefault();
		if (imageElement.attr('src')) {
			downloadImage();
		}
		else {
			alert("Nothing to download.");
		}
	});
	*/
	// Drop
	//// Prevent defaults on drag/drop events
	dropArea.on('drag dragstart dragend dragover dragenter dragleave drop', function(e) {
		if (e.preventDefault) e.preventDefault(); 
		if (e.stopPropagation) e.stopPropagation(); 
	})
	/*.on('click', function(e) {
		//Click anywhere in Droparea to upload file
	  	$('#fileToUpload').click();
	})*/
	.on('drop', function(e) {
		// Get the dropped file
		var file = e.originalEvent.dataTransfer.files[0];
		validateFileType(file);
	});  
	dropArea.on('dragover', function(e){
		this.className = 'drop-zone dragover';
		return false;
	});
	dropArea.on('dragleave', function(e){
		this.className = 'drop-zone';
		return false;
	});
	// Click
	//// Takes file from file chooser
	$('#fileToUpload').on('change', function(e){
		var file = e.originalEvent.target.files[0];	
		validateFileType(file);
	});
	// Checks if the file type is in the array of supported types
	function fileIsSupported(file){
		var supportedFileTypes = ['image/jpeg', 'image/png'];
		return supportedFileTypes.indexOf(file.type) >= 0 ? true : false;
	}
	// Toggle visibility of the drag/drop div and img element
	function toggleDragDrop() {
		dropArea.toggle();
		imageElement.toggle();
	}
	function setImage(file) {
		imageElement.attr('src', window.URL.createObjectURL(file));
		originalImageSrc = imageElement.attr('src');
		upload(file);
	}
	function clearImage() {
		imageElement.attr('src', '');
	}
	function validateFileType(file) {
		if (fileIsSupported(file)) {
			setImage(file);
			toggleDragDrop();
			//launchImageEditor();
			return true;
		}
		else {
			alert('Por favor, tente nos formatos JPEG ou PNG');
			return false;
		}
	}
	function launchImageEditor() {

		if (!originalImageSrc) {
			alert('Faça o upload de alguma imagem primeiro!');
			return false;
		}
		// Get the image to be edited
		// `[0]` gets the image itself, not the jQuery object

		currentImage = $('#editable-image')[0];
		csdkImageEditor.launch({
			image: currentImage.id,
			//url: currentImage.src
		});

	}
	/*function downloadImage() {
		var url = currentImage ? currentImage.src : originalImageSrc;
		var link = document.createElement("a");
		
		link.href = url;
		// Download attr 
		//// Only honored for links within same origin, 
		//// therefore won't work once img has been edited (i.e., S3 URLs)
		link.download = 'my-pic';
		link.click();
	}*/
	//send data to PHP By Drop 
	function upload(files){
				var formData = new FormData(),
					xhr = new XMLHttpRequest(),
					x;
				for(x=0; x<files.length; x = x + 1){
					formData.append('file[]', files[x]);
				}	
				xhr.onload = function(){
					var data = this.responseText;
				}
				xhr.open('post', 'upload.php');
				xhr.send(formData);
	}
	//upload by drop (quando o usuario arrasta a imagem para o dropzone)
	(function TheDrop(){
				var dropzone = document.getElementById('drop-area');
				dropzone.ondrop = function(e){
					e.preventDefault();
					this.className = 'drop-zone';
					upload(e.dataTransfer.files);
				};
			}());
});
	//send data to PHP by click and set progress bar 

$(function(){
	$('#myForm').ajaxForm({
		beforeSend:function(){
			$(".progress").show();
		},
		uploadProgress:function(event,position,total,percentComplete){
			$(".progress-bar").width(percentComplete+"%");
			$(".sr-only").html(percentComplete+"%");
		},
		success:function(){
			$(".progress").hide();
		},
		complete:function(){
			//$("#response").html(event);
			console.log(event);
		}
	});
	$(".progress").hide();
});