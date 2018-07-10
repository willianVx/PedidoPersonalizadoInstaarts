jQuery(document).ready(function($) {

	//direciona para galaria de imagens
	$(".iap_galeria").click(function() {
		$(".envelope-pedido-personalizado").hide();
		$(".iap_acervo").show();
	});

	//adiciona contorno verde a opcao selecionada
	$(".thumbnail").click(function(){
		$(".thumbnail").removeClass("green");
        $(this).addClass("green");
	});
	//esconde opcoes nao padrao
	$("#tPapel").hide();
	$("#tUv").hide();
	$("#m-classica").hide();
	$("#m-moderna").hide();

	$("#bMeta").click(function() {
		$("#tPapel").hide();
		$("#tUv").hide();
		$("#tMeta").fadeIn();
		hud_produtos($(this));
	});
	$("#bPrints").click(function() {
		$("#tMeta").hide();
		$("#tUv").hide();
		$("#tPapel").fadeIn();
		hud_produtos($(this));
	});
	$("#bUv").click(function() {
		$("#tPapel").hide();
		$("#tMeta").hide();
		$("#tUv").fadeIn();
		hud_produtos($(this));
	});
	$("#b-classica").click(function() {
		$("#m-contemporanea").hide();
		$("#m-moderna").hide();
		$("#m-classica").fadeIn();
		hud_produtos($(this));
	});
	$("#b-contemporanea").click(function() {
		$("#m-classica").hide();
		$("#m-moderna").hide();
		$("#m-contemporanea").fadeIn();
		hud_produtos($(this));
	});
	$("#b-moderna").click(function() {
		$("#m-classica").hide();
		$("#m-contemporanea").hide();
		$("#m-moderna").fadeIn();
		hud_produtos($(this));
	});
	$("#b-tamanhoPadrao").click(function() {
		$("#tamanhoPersonalizado").hide();
		$("#tamanhoPadrao").fadeIn();
		hud_produtos($(this));
	});
	//efeitos para botoes dos produtos 

	$('.iap_box_upload').hover(function(){
		$(this).css('background-color', '#3B9D4E');
	});
	$('.iap_box_upload').mouseout(function(){
		$(this).css('background-color', '#45b75b');
	});

	function hud_produtos(produto){
		$("#bMeta").removeClass("navbar_click");
		$("#bPrints").removeClass("navbar_click");
		$("#bUv").removeClass("navbar_click");
		$("#b-classica").removeClass("navbar_click");
		$("#b-contemporanea").removeClass("navbar_click");
		$("#b-moderna").removeClass("navbar_click");
		$("#b-moderna").removeClass("navbar_click");
		produto.addClass("navbar_click");
	}

});
