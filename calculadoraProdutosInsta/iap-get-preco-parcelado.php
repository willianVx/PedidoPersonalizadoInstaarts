<?php 
    class CalculaPrecoParcelado extends CalculaPreco{

        public function parcelas($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY){
            $preco = $this -> formula_pedido_instaarts($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY);
            $lista_parcelas = array();
            $resultado_parcial;
            for ($i=1; $i <= 6; $i++) {
               $resultado_parcial = $preco / $i;
               if ($resultado_parcial >= 30) {
                    $lista_parcelas[$i] = number_format($resultado_parcial, 2, ',', '.');
               }
            }
            return $lista_parcelas;
        }

    }
?>
