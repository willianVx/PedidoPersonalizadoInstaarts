<?php
    class CalculaPreco
    {
        private $precoBaseAcabamento = array(
            'meta7mm' => 2837, 
            'meta5mm' => 2037,
            'meta4mm' => 1601,
            'meta3mm' => 1455, 
            'acm5mm' => 1746, 
            'uvPS' => 1455, 
            'uvACM' => 1763, 
            'papelAlgodao' => 635, 
            'papelFosco' => 506,
            'papelAcetinato' => 506,
            'papelBrilhante' => 506,
            'papelCanvas' => 728,
        );

        private $precoBaseMoldura;

        private $tamanhoX;
        private $tamanhoY;

        private $total;

        public function formula_pedido_instaarts($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY){
            $preco = $this -> setPrecoBaseAcabamento($acabamento, $tipoDeMoldura);
            $v = $this -> validaTamanho($tamanhoX, $tamanhoY);

            $total = $tamanhoX * $tamanhoY * $preco / 10000 + 40;
            if($v){
                //return number_format($total, 0, ',', '.');
                return $total;
            }
            else{
                echo "erro";
            }
        }

        public function setPrecoBaseAcabamento($acabamento, $tipoDeMoldura){
            foreach($this -> precoBaseAcabamento as $index => $preco){
                if($acabamento == $index){
                    $precoBaseMoldura = $this -> setPrecoBaseMoldura($acabamento, $preco, $tipoDeMoldura);
                    return $preco + $precoBaseMoldura;
                }
            }    
        }

        public function setPrecoBaseMoldura($index, $preco, $tipoDeMoldura){

            if($index == 'papelAlgodao' || $index == 'papelFosco' || $index == 'papelAcetinato' || $index == 'papelBrilhante'){
                $tipoDeMoldura = 0;
                $precoBaseMoldura = 0;

                return $precoBaseMoldura;
            } 

            if($tipoDeMoldura == 1){
                    $precoBaseMoldura = 180;
                    return $precoBaseMoldura;
            }  

            if($tipoDeMoldura == 2){
                    $precoBaseMoldura = 360;
                    return $precoBaseMoldura;
            }

            if($tipoDeMoldura == 3){
                    $precoBaseMoldura = 540;
                    return $precoBaseMoldura;
            }
        }

        public function validaTamanho($tamanhoX, $tamanhoY){

            if($tamanhoX < 10 || $tamanhoX > 100 || $tamanhoY < 10 || $tamanhoY > 200){
                return false;
            }
            else{
                return true;
            }

        }

    }
?>