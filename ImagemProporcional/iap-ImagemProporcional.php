<?php

    class ImagemProporcional
    {
        private $tamanhoX;
        private $tamanhoY;

        private $razao;

        private $tamanhosPadrao = array(20, 30, 40, 50, 60, 70, 80, 90);

        private $tamanhosProporcionais = array();

        public function TamanhosProporcionais($x, $y){

            $this -> tamanhoX = $x;
            $this -> tamanhoY = $y;
            $r = $this -> setRazao($this -> tamanhoX, $this -> tamanhoY);
            //$r_tamanhos = array_combine($this -> tamanhosPadrao, $this -> setTamanhoProporcional($r)); 
            $r_tamanhos = $this -> setTamanhoProporcional($r);
            return $r_tamanhos;
            
        }

        public function setRazao($x, $y){

            if($x == 0 || $y == 0){
                return;
            }

            $this -> tamanhoX = $x; 
            $this -> tamanhoY = $y;

            if($this -> tamanhoX > $this -> tamanhoY){
                $this -> razao = $this -> tamanhoX / $this -> tamanhoY;
                return $this -> razao;
            }

            if($this -> tamanhoX < $this -> tamanhoY){
                $this -> razao = $this -> tamanhoY / $this -> tamanhoX;
                return $this -> razao;
            }

            else{
                $this -> razao = $this -> tamanhoX / $this -> tamanhoY;
                return $this -> razao;
            }
        }

        //$r = $this -> razao

        private function setTamanhoProporcional($r){

            if($r == 0){
                return;
            }
            $cont = 0;
            $tproporcional;
            while ($cont < sizeof($this -> tamanhosPadrao)) {
                $tproporcional = $this -> tamanhosPadrao[$cont] / $r;
                if($tproporcional < 10){
                    $tproporcional = $this -> tamanhosPadrao[$cont] * $r;
                }
                    array_push($this -> tamanhosProporcionais, $tproporcional);
                    $cont++;
            }
            return $this -> tamanhosProporcionais;
        }
    }
?>