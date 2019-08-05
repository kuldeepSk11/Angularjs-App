
<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = 'data_test';

$connect = mysqli_connect($servername, $username, $password,$dbname);
// Check connection
if (!$connect) {
 die("Connection failed: " . mysqli_connect_error());
}
$form_data = json_decode(file_get_contents("php://input"));


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

//
//if($form_data->action == 'view')
//{
// $query = "DELETE FROM movie_card_data WHERE id='".$form_data->id."'";
// $statement = $connect->prepare($query);
// if($statement->execute())
// {
//  $output['message'] = 'Data Deleted';
// }
//}
//
//echo json_encode($output);

?>