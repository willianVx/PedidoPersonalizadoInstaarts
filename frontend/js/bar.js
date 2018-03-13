jQuery(document).ready(function($) {

	$(".thumbnail").click(function(){
		$(".thumbnail").removeClass("green");
        $(this).addClass("green");
	});

	$("#tPapel").hide();
	$("#tUv").hide();
	$("#m-classica").hide();
	$("#m-moderna").hide();
	$("#bMeta").click(function() {
		$("#tPapel").hide();
		$("#tUv").hide();
		$("#tMeta").fadeIn();
	});
	$("#bPrints").click(function() {
		$("#tMeta").hide();
		$("#tUv").hide();
		$("#tPapel").fadeIn();
	});
	$("#bUv").click(function() {
		$("#tPapel").hide();
		$("#tMeta").hide();
		$("#tUv").fadeIn();
	});
	$("#b-classica").click(function() {
		$("#m-contemporanea").hide();
		$("#m-moderna").hide();
		$("#m-classica").fadeIn();
	});
	$("#b-contemporanea").click(function() {
		$("#m-classica").hide();
		$("#m-moderna").hide();
		$("#m-contemporanea").fadeIn();
	});
	$("#b-moderna").click(function() {
		$("#m-classica").hide();
		$("#m-contemporanea").hide();
		$("#m-moderna").fadeIn();
	});
	$("#tamanhoPersonalizado").hide();
	$("#b-tamanhoPersonalizado").click(function() {
		$("#tamanhoPadrao").hide();
		$("#tamanhoPersonalizado").fadeIn();
	});
	$("#b-tamanhoPadrao").click(function() {
		$("#tamanhoPersonalizado").hide();
		$("#tamanhoPadrao").fadeIn();
	});
	$("#meta7-select-color").click(function() {
		removerClasse();
		$("#meta7-select-color").addClass("green");
	});
	$("#meta5-select-color").click(function() {
		removerClasse();
		$("#meta5-select-color").addClass("green");
	});
	$("#meta4-select-color").click(function() {
		removerClasse();
		$("#meta4-select-color").addClass("green");
	});
	$("#meta3-select-color").click(function() {
		removerClasse();
		$("#meta3-select-color").addClass("green");
	});
	function removerClasse() {
		$("#meta7-select-color").removeClass("green");
		$("#meta5-select-color").removeClass("green");
		$("#meta4-select-color").removeClass("green");
		$("#meta3-select-color").removeClass("green");
		$("#acm-select-color").removeClass("green");
		$("#fosco-select-color").removeClass("green");
		$("#algodao-select-color").removeClass("green");
		$("#acetinato-select-color").removeClass("green");
		$("#brilhante-select-color").removeClass("green");
		$("#canvas-select-color").removeClass("green");
		$("#uv-select-color").removeClass("green");
		$("#uvacm-select-color").removeClass("green");
		$("#florenca-select-color").removeClass("green");
		$("#istambul-select-color").removeClass("green");
		$("#paris-select-color").removeClass("green");
		$("#roma-select-color").removeClass("green");
		$("#atenas-select-color").removeClass("green");
		$("#basel-select-color").removeClass("green");
		$("#berlim-select-color").removeClass("green");
		$("#miami-select-color").removeClass("green");
		$("#novayork-select-color").removeClass("green");
		$("#saopaulo-select-color").removeClass("green");
		$("#amazonas-select-color").removeClass("green");
		$("#amsterdam-select-color").removeClass("green");
		$("#buenosaires-select-color").removeClass("green");
		$("#londres-select-color").removeClass("green");
		$("#santiago-select-color").removeClass("green");
	}
});
