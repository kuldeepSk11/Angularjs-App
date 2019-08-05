
<?php
//register.php
include('../php_data_connection.php');

$data = json_decode(file_get_contents('php://input')); 
//print_r($data);
$titile = $data->titile;       
$release_date = $data->release_date;  
$rating = $data->rating;  
$popularity = $data->popularity;
$runtime = $data->runtime;
$overview = $data->overview;

echo $titile;
echo $release_date;
echo $rating;
echo $popularity;
echo $runtime;
echo $overview;

mysql_query("INSERT INTO `movie_data_card`(`title`,`release_date`,`rating`, `popularity`, `runtime`, `overview`) VALUES ('".$titile."','".$release_date."','".$rating."', '".$popularity."', '".$runtime."', '".$overview."')")or die(mysql_error()); 

//print_r($form_data);
//print_r($_POST);
//die;

?>