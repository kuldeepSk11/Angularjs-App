
<?php
//register.php
include('php_data_connection.php');

$data = json_decode(file_get_contents('php://input')); 
//print_r($data);
$name = $data->name;       
$phone = $data->phone;  
$email = $data->email;  
$password = $data->password;

//echo "Name:".$name;       
//echo "Phone:".$phone;  
//echo "Email:".$email;  
//echo "PWD:".$password;

//$error = array();
//if(empty($name)){
//    $error[]='Name is Required';
//}
//
//if(empty($phone)){
//    $error[]='Name is Phone';
//}
//
//if(empty($email)){
//    $error[]='Name is Email';
//}
//
//if(empty($password)){
//    $error[]='Name is Password';
//}

mysql_query("INSERT INTO `user_register`(`name`,`phone`,`email`, `password`) VALUES ('".$name."','".$phone."','".$email."', '".$password."')")or die(mysql_error()); 


//validation code start here 
//$message = '';
//$validation_error = '';
//$error = array();
//if(empty($name)){
//    
//    $error[]='Name is Required';
//    
//}
//else{
//    $data[':name']= $data->name;
//}
//
//if(empty($data->phone)){    
//    $error[]='Phone is Required';
//}else{    
//    $data[':phone']= $data->phone;
//}
//
//if(empty($data->email)){
//    $error[]='Email is Required';
//}else{
//    
//    if(!filter_var($data->email, FILTER_VALIDATE_EMAIL)){
//        $error[]='Email is Required'; 
//    }else{
//        $data[':email']= $data->email;
//        }  
//}
//
//if(empty($data->password)){    
//    $error[]='Name is Required';
//}else{
//    $data[':password']= password_hash($data->password, PASSWORD_DEFAULT);  
//}
//print_r($error);
//if(empty($error)){
//    mysql_query("INSERT INTO `user_register`(`name`,`phone`,`email`, `password`) VALUES ('".$name."','".$phone."','".$email."', '".$password."')");
//}


//print_r($form_data);
//print_r($_POST);
//die;

?>