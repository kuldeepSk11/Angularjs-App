<?php
header('Access-Control-Allow-Orgins:*');
header('Content-Type:Application/json');
if(!isset($_POST))die;
session_start();
    
$response = [];
$con=mysqli_connect('localhost','root','root','user_register');  
  
$email =  mysql_real_escape_string($con, $_POST['email']);       
password =  mysql_real_escape_string($con, $_POST['password']);       
//$email =  $data->email;       
//$password =  $data->password; 
echo $email;
echo $password;


$query="SELECT * FROM user_register WHERE email='$email' AND password='$password'"; 

$result=mysqli_query($query); 

if(mysql_num_rows($result)>0){  
   $data['status'] = 'loggedIn';
   $data['user'] = 'admin';
    }else{  
    $data['status'] = 'error';
}
echo json_encode($response);
print_r($Data);
die;

?>