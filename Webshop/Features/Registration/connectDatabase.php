<?php
try {

  // connect to mysql
 $pdoConnect = new PDO("mysql:host=localhost;dbname=dpsdb","root","");
	// set the PDO error mode to exception
 $pdoConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } 
    catch (PDOException $exc) {
        echo $exc->getMessage();   
    }
?>
