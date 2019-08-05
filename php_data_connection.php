<?php

// database connection
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = 'data_test';
// Create new other way to connection by mysql
//$connect = new PDO("mysql:host=$servername;dbname=data_test", $username, $password);
mysql_connect("localhost", "root", "root") or die(mysql_error()); 
mysql_select_db("data_test")or die(mysql_error());

// Create new other way to connection by mysqli
//$conn = mysqli_connect($servername, $username, $password);

// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//} 
//echo "Connected successfully";


//try {
//    $conn = new PDO("mysql:host=$servername;dbname=angular_mysql", $username, $password);
//    // set the PDO error mode to exception
//    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//    echo "Connected successfully"; 
//    }
//catch(PDOException $e)
//    {
//    echo "Connection failed: " . $e->getMessage();
//    }

?>