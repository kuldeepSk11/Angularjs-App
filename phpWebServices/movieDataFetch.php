
<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = 'data_test';

$con = mysqli_connect($servername, $username, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}

$query = "select * from movie_data_card";
$result = mysqli_query($con, $query);

$data = array();

if(mysqli_num_rows($result) != 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}
// Return json array containing data from the databasecon
echo $json_info = json_encode($data);

//print_r($form_data);
//print_r($_POST);
//die;

?>