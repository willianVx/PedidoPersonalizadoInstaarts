<?php 
    class CalculaPrecoParcelado extends CalculaPreco{

        public function parcelas($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY){
            $preco = $this -> formula_pedido_instaarts($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY);
            $lista_parcelas = array();
            $resultado_parcial;
            for ($i=1; $i <= 12; $i++) {
               //$resultado_parcial = $preco / $i;
               $resultado_parcial = $this->get_parcelas_com_juros($preco, $i);
               if ($resultado_parcial >= 30) {
                    $lista_parcelas[$i] = number_format($resultado_parcial, 2, ',', '.');
               }
            }
            return $lista_parcelas;
        }

        private function get_parcelas_com_juros($orderTotal, $instalmentIndex){
            if ($instalmentIndex <= 3) {
                return $orderTotal / $instalmentIndex;
            }else{
                $n = $instalmentIndex * 0.02 + 1;
                return $n * $orderTotal / $instalmentIndex;
            }
            
        }
    

    }
?>
