jQuery(document).ready(function($) {

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
						$("#tamanhoY1").html(tamanhoY[0]);
						$("#tamanhoY2").html(tamanhoY[1]);
						$("#tamanhoY3").html(tamanhoY[2]);
						$("#tamanhoY4").html(tamanhoY[3]);
						$("#tamanhoY5").html(tamanhoY[4]);
						$("#tamanhoY6").html(tamanhoY[5]);
						$("#tamanhoY7").html(tamanhoY[6]);
						$("#tamanhoY8").html(tamanhoY[7]);
						$("#tamanhoY9").html(tamanhoY[8]);
					}
				},
				error: function(data) {
					alert("Erro no processamento. Tente mais tarde.");
				}
			});
		
		}

});
