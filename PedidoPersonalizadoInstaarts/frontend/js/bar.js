jQuery(document).ready(function($) {
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
	$("#acm-select-color").click(function() {
		removerClasse();
		$("#acm-select-color").addClass("green");
	});
	$("#fosco-select-color").click(function() {
		removerClasse();
		$("#fosco-select-color").addClass("green");
	});
	$("#algodao-select-color").click(function() {
		removerClasse();
		$("#algodao-select-color").addClass("green");
	});
	$("#acetinato-select-color").click(function() {
		removerClasse();
		$("#acetinato-select-color").addClass("green");
	});
	$("#brilhante-select-color").click(function() {
		removerClasse();
		$("#brilhante-select-color").addClass("green");
	});
	$("#canvas-select-color").click(function() {
		removerClasse();
		$("#canvas-select-color").addClass("green");
	});
	$("#uv-select-color").click(function() {
		removerClasse();
		$("#uv-select-color").addClass("green");
	});
	$("#uvacm-select-color").click(function() {
		removerClasse();
		$("#uvacm-select-color").addClass("green");
	});
	$("#florenca-select-color").click(function() {
		removerClasse();
		$("#florenca-select-color").addClass("green");
	});
	$("#istambul-select-color").click(function() {
		removerClasse();
		$("#istambul-select-color").addClass("green");
	});
	$("#paris-select-color").click(function() {
		removerClasse();
		$("#paris-select-color").addClass("green");
	});
	$("#roma-select-color").click(function() {
		removerClasse();
		$("#roma-select-color").addClass("green");
	});
	$("#atenas-select-color").click(function() {
		removerClasse();
		$("#atenas-select-color").addClass("green");
	});
	$("#basel-select-color").click(function() {
		removerClasse();
		$("#basel-select-color").addClass("green");
	});
	$("#berlim-select-color").click(function() {
		removerClasse();
		$("#berlim-select-color").addClass("green");
	});
	$("#miami-select-color").click(function() {
		removerClasse();
		$("#miami-select-color").addClass("green");
	});
	$("#novayork-select-color").click(function() {
		removerClasse();
		$("#novayork-select-color").addClass("green");
	});
	$("#saopaulo-select-color").click(function() {
		removerClasse();
		$("#saopaulo-select-color").addClass("green");
	});
	$("#amazonas-select-color").click(function() {
		removerClasse();
		$("#amazonas-select-color").addClass("green");
	});
	$("#amsterdam-select-color").click(function() {
		removerClasse();
		$("#amsterdam-select-color").addClass("green");
	});
	$("#buenosaires-select-color").click(function() {
		removerClasse();
		$("#buenosaires-select-color").addClass("green");
	});
	$("#londres-select-color").click(function() {
		removerClasse();
		$("#londres-select-color").addClass("green");
	});
	$("#santiago-select-color").click(function() {
		removerClasse();
		$("#santiago-select-color").addClass("green");
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
