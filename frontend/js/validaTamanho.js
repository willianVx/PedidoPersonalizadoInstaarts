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
						tamanhos_possiveis(tamanho1, tamanho2, tamanhoY);
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

		function tamanhos_possiveis(tamanho1, tamanho2, tamanhoY){
			
			var dpi = 59.055;
			var xcm = tamanho1 / dpi;
			var ycm = tamanho2 / dpi;
			var tamanhoX = [20, 30, 40, 50, 60, 70, 80, 90];
			var max_tamanho = [0];
			tamanhoX.forEach(compara_Tamanho_largura);
			//tamanhoY.forEach(compara_Tamanho_comprimento);
			show_tamanho_max();

			function compara_Tamanho_largura(element, index, array) {
				if (element <= xcm) {
					var i = 0;
					max_tamanho[i] = element;
					i++;
				}
			}

			function get_tamanho_max() {
				for (var index = 0; index < max_tamanho.length; index++) {
					const element = max_tamanho[index];
					return element;
				}
			}

			function show_tamanho_max() {
				key = get_tamanho_max();
				hide_color();
				$("input[name~='tamanho']").prop("disabled", false);
				switch (key) {
					case 20:
						$("#tamanho1").css("color","green");
						$("input[value~='30x27']").prop("disabled", true);
						$("input[value~='40x36']").prop("disabled", true);
						$("input[value~='50x45']").prop("disabled", true);
						$("input[value~='60x54']").prop("disabled", true);
						$("input[value~='70x64']").prop("disabled", true);
						$("input[value~='80x72']").prop("disabled", true);
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 30:
						$("#tamanho2").css("color","green");
						$("input[value~='40x36']").prop("disabled", true);
						$("input[value~='50x45']").prop("disabled", true);
						$("input[value~='60x54']").prop("disabled", true);
						$("input[value~='70x64']").prop("disabled", true);
						$("input[value~='80x72']").prop("disabled", true);
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 40:
						$("#tamanho3").css("color","green");
						$("input[value~='50x45']").prop("disabled", true);
						$("input[value~='60x54']").prop("disabled", true);
						$("input[value~='70x64']").prop("disabled", true);
						$("input[value~='80x72']").prop("disabled", true);
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 50:
						$("#tamanho4").css("color","green");
						$("input[value~='60x54']").prop("disabled", true);
						$("input[value~='70x64']").prop("disabled", true);
						$("input[value~='80x72']").prop("disabled", true);
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 60:
						$("#tamanho5").css("color","green");
						$("input[value~='70x64']").prop("disabled", true);
						$("input[value~='80x72']").prop("disabled", true);
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 70:
						$("#tamanho6").css("color","green");
						$("input[value~='80x72']").prop("disabled", true);
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 80:
						$("#tamanho7").css("color","green");
						$("input[value~='90x82']").prop("disabled", true);
						break;
					case 90:
						$("#tamanho8").css("color","green");
						break;									
					default:
						break;
				}
			}

			function hide_color() {
				$("#tamanho1").css("color","black");
				$("#tamanho2").css("color","black");
				$("#tamanho3").css("color","black");
				$("#tamanho4").css("color","black");
				$("#tamanho5").css("color","black");
				$("#tamanho6").css("color","black");
				$("#tamanho7").css("color","black");
				$("#tamanho8").css("color","black");
			}

			/*function compara_Tamanho_comprimento(element, index, array) {
				if (element <= ycm) {
					console.log(element);
				}
			}
			*/

		}
});