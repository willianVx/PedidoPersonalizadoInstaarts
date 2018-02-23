jQuery(document).ready(function($) {

	$("#fileToUpload").on("change", function(e){
		$("#s-tamanho").html(" ");
		$("#s-preco").html(" ");
		window.escolherPreco = true;
	});

	$("#b-tamanho").click(function() {
		if (imgWidth == 0 | imgHeight == 0) {
			return;
		}
		tamanahoProporcional();
	});

		function tamanahoProporcional() {
			$("#tamanhoY1").html("...");
			var tamanho1 = imgWidth;
			var tamanho2 = imgHeight;

			$.ajax({
				type: "POST",
				url: comprar.ajax_url,
				data: {
					d3: "d3",
					action: "iap_order",
					x: tamanho1,
					y: tamanho2
				},
				success: function(data) {
					if (data == "0") {
						alert("Erro no processamento. Tente mais tarde.");
					} else {
						tamanhoY = data.split("z");
						$("#tamanhoY1").html(parseInt(tamanhoY[0], 10));
							window.ylistaA = parseInt(tamanhoY[0], 10);
						$("#tamanhoY2").html(parseInt(tamanhoY[1], 10));
							window.ylistaB = parseInt(tamanhoY[1], 10);
						$("#tamanhoY3").html(parseInt(tamanhoY[2], 10));
							window.ylistaC = parseInt(tamanhoY[2], 10);
						$("#tamanhoY4").html(parseInt(tamanhoY[3], 10));
							window.ylistaD = parseInt(tamanhoY[3], 10);
						$("#tamanhoY5").html(parseInt(tamanhoY[4], 10));
							window.ylistaE = parseInt(tamanhoY[4], 10);
						$("#tamanhoY6").html(parseInt(tamanhoY[5], 10));
							window.ylistaF = parseInt(tamanhoY[5], 10);
						$("#tamanhoY7").html(parseInt(tamanhoY[6], 10));
							window.ylistaG = parseInt(tamanhoY[6], 10);
						$("#tamanhoY8").html(parseInt(tamanhoY[7], 10));
							window.ylistaH = parseInt(tamanhoY[7], 10);
					}
				},
				error: function(data) {
					alert("Erro no processamento. Tente mais tarde.");
				}
			});
		
		}
});
