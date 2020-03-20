conexion.php
----------------------------
<?php
    class Conexion{
        var $conn;
	
        function conectar(){
            $this->conn = mysqli_connect('localhost','root', '')
                            or die("Conexion fallida" . mysql_error());
            
            mysqli_select_db($this->conn,'iot')
            or die("No se pudo conectar a la base de datos");

            return $this->conn;
        }

        function buscarUsuario($user,$pass){
            $this->conectar();
            if(!$this->conn){
                exit("<h1> Error en la conexion... </h1>");
            }else{
                
                $consulta = "SELECT * FROM usuario WHERE usuario='"
                .$user."' AND pass='".$pass."'";
				$result = mysqli_query($this->conn,$consulta);
				$num = mysqli_num_rows($result);
				return $num;
            }
        }

	function registrarUsuario($consulta){
	   $this->conectar();
	   
 	   if(!$this->conn){
	     exit("<h1> Error en la consulta...</h1>");
      }else{
              $result = mysqli_query($this->conn, $consulta);
 	      return $result;
           }
	}
    }
?>
-----------------------------------------------------
login.php
----------------------------------
<?php


    header('Content-Type: application/json');

    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $usuario = $jsonObj["pUsuario"];
    $pass = $jsonObj["pPass"];
    

    $json = file_get_contents('php://input');


    $res = $obj->buscarUsuario($usuario,$pass);

    if($res == 1){
        $response = 1;
    }else{
        $response = 0;
    }

    echo json_encode($response, JSON_FORCE_OBJECT);
?>
----------------------------
registrar.php
------------------------------
<?php
    header('Content-Type: application/json');

    include("conexion.php");

    $obj = new Conexion;
    $response = array();

    $json = file_get_contents('php://input');
    $jsonObj = json_decode($json, true);

    $usuario = $jsonObj["pUsuario"];
    $email = $jsonObj["pEmail"];
    $pass = $jsonObj["pPass"];

    $json = file_get_contents('php://input');



    $consulta = "INSERT INTO usuario(usuario,email,pass)
                VALUES  ('" . $usuario ."',
                         '" . $email ."',
                         '".$pass."');";

    $res = $obj->registrarUsuario($consulta);

    if($res == 1){
        $response['status'] = 1;
    }else{
        $response['status'] = 0;
    }

    echo json_encode($response, JSON_FORCE_OBJECT);
?> 
