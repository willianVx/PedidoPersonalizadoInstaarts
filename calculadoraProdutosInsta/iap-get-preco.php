<?php
    class CalculaPreco
    {
        private $precoBaseAcabamento = array(
        'meta7mm' => 2467, 
        'meta5mm' => 1771,
        'meta4mm' => 1392,
        'meta3mm' => 1265, 
        'acm5mm' => 1518, 
        'uvPS' => 1265, 
        'uvACM' => 1553, 
        'papelAlgodao' => 552, 
        'papelFosco' => 714,
        'papelAcetinato' => 460,
        'papelBrilhante' => 437,
        'papelCanvas' => 633,
        );

        private $precoBaseMoldura;

        private $tamanhoX;
        private $tamanhoY;

        private $total;

        public function get_total_bruto($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY){
            $preco = $this -> setPrecoBaseAcabamento($acabamento, $tipoDeMoldura);
            $v = $this -> validaTamanho($tamanhoX, $tamanhoY);

            $total = $tamanhoX * $tamanhoY * $preco / 10000 + 40;

            if($v){
                return $total;
            }
            else{
                echo "erro";
            }
        }

        public function formula_pedido_instaarts($acabamento, $tipoDeMoldura, $tamanhoX, $tamanhoY){
            $preco = $this -> setPrecoBaseAcabamento($acabamento, $tipoDeMoldura);
            $v = $this -> validaTamanho($tamanhoX, $tamanhoY);

            $total = $tamanhoX * $tamanhoY * $preco / 10000 + 40;
            if($v){
                //echo "tamanhos ". $tamanhoX. " cm por " . $tamanhoY ." acabamento ".$acabamento." Preço: ".$total." ";
                print "R$ ".number_format($total, 2, ',', '.');
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
                
                if($index == 'meta3mm'){
                    $precoBaseMoldura = 0;
                    return $precoBaseMoldura;
                }
                if($index == 'meta4mm'){
                    $precoBaseMoldura = 153;
                    return $precoBaseMoldura;
                }
                else{
                    $precoBaseMoldura = 160;
                    return $precoBaseMoldura;
                }

            }  

            if($tipoDeMoldura == 2){
                
                if($index == 'meta3mm'){
                    $precoBaseMoldura = 160;
                    return $precoBaseMoldura;
                }
                if($index == 'meta4mm'){
                    $precoBaseMoldura = 345;
                    return $precoBaseMoldura;
                }
                else{
                    $precoBaseMoldura = 320;
                    return $precoBaseMoldura;
                }

            }

            if($tipoDeMoldura == 3){
                
                if($index == 'meta3mm'){
                    $precoBaseMoldura = 320;
                    return $precoBaseMoldura;
                }
                if($index == 'meta4mm'){
                    $precoBaseMoldura = 506;
                    return $precoBaseMoldura;
                }
                else{
                    $precoBaseMoldura = 480;
                    return $precoBaseMoldura;
                }
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