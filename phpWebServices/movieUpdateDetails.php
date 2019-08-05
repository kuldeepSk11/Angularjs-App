<?php
// Including database connections
include('php_data_connection.php');

$data = json_decode(file_get_contents('php://input')); 
//print_r($data);
$id = $data->id;       
$titile = $data->titile;       
$release_date = $data->release_date;  
$rating = $data->rating;  
$popularity = $data->popularity;
$runtime = $data->runtime;
$overview = $data->overview;

echo $id;
echo $titile;
echo $release_date;
echo $rating;
echo $popularity;
echo $runtime;
echo $overview;

mysql_query("UPDATE INTO `movie_data_card`(`titile`,`release_date`,`rating`, `popularity`, `runtime`, `overview`) VALUES ('".$titile."','".$release_date."','".$rating."', '".$popularity."', '".$runtime."', '".$overview."')")or die(mysql_error()); 

// mysqli query to insert the updated data
//$query = "UPDATE emp_details SET emp_name='$name',emp_email='$email',emp_gender='$gender',emp_address='$address' WHERE emp_id=$id";

mysqli_query($con, $query);
echo true;

?>
