<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input'); 
$decodedData = json_decode($encodedData, true);
$Username = $decodedData['Username'];
$UserPW = ($decodedData['password']);
$User = ($decodedData['identity']);
$Message='no account';
if($User=='mechanic')
{
    $Message='hi1';
    $SQL = "SELECT password FROM mechanic WHERE MechName = '$Username'";
    $exeSQL = mysqli_query($con, $SQL);
    $check=  mysqli_num_rows($exeSQL);
    if ($check) 
    {
        $row = mysqli_fetch_array($exeSQL);
         
          if($row['password']==$UserPW){
              $Message = 'mechlog';
          } else{
              $Message = 'wrong password.';
          }
    }


}
else if($User=='seller')
{
    $SQL = "SELECT password FROM seller WHERE Name = '$Username'";
    $exeSQL = mysqli_query($con, $SQL);
    $check=  mysqli_num_rows($exeSQL);
    if ($check) 
    {
        $row = mysqli_fetch_array($exeSQL);
         
          if($row['password']==$UserPW){
              $Message = 'selllog';
          } else{
              $Message = 'wrong password.';
          }
    }


}
else if($User=='customer')
{
    $SQL = "SELECT password FROM customer WHERE CustName = '$Username'";
    $exeSQL = mysqli_query($con, $SQL);
    $check=  mysqli_num_rows($exeSQL);
    if ($check) 
    {
        $row = mysqli_fetch_array($exeSQL);
         
          if($row['password']==$UserPW){
              $Message = 'custlog';
          } else{
              $Message = 'wrong password.';
          }
    }


}
else {
$Message = "No account";

}










$response[] = array("Message" => $Message);

echo json_encode($response);
?>