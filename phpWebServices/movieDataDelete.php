
<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = 'data_test';

$connect = mysqli_connect($servername, $username, $password,$dbname);

//// Check connection
//if (!$con) {
// die("Connection failed: " . mysqli_connect_error());
//}
//$result=mysqli_query($conn, "delete from movie_card_data where id=id"); 

//if($_SERVER['REQUEST_METHOD'] == 'POST') {
//        $ajax_data = json_decode(file_get_contents('php://input'), true);
//        //$id = ($ajax_data!="") ? $db->real_escape_string($ajax_data) : '';
//        if($id!="") :
//            $query = "DELETE FROM movie_card_data WHERE id=id";
//            $sql = $db->query($query);
//            $msg = "Successfully Deleted Your Record";
//        else:  
//            $msg = "Something went wrong Please Check Reload your File.";
//        endif;
//        echo $msg;
//    } 

$form_data = json_decode(file_get_contents("php://input"));

if($form_data->action == 'Delete')
{
 $query = "DELETE FROM movie_data_card WHERE id='".$form_data->id."'";
 $statement = $connect->prepare($query);
 if($statement->execute())
 {
  $output['message'] = 'Data Deleted';
 }
}

echo json_encode($output);

?>