<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
$name = $decodedData['username'];
$pass = ($decodedData['password']);
$city = ($decodedData['city']);
$state = ($decodedData['state']);
$vehicle = ($decodedData['vehicle']);
$vehicleno = ($decodedData['vehicleno']);
$no = ($decodedData['phoneno']);


$SQL = "SELECT custname FROM customer WHERE custname = '$name'";

$exeSQL = mysqli_query($con, $SQL);
$check =  mysqli_num_rows($exeSQL);


if ($check == 0&&$name) {

    $SQL = "SELECT state,city FROM location WHERE state='$state' and city='$city'";
    $exeSQL = mysqli_query($con, $SQL);
    $check1 =  mysqli_num_rows($exeSQL);
    if($check1==0)
    {
        $SQL = "INSERT INTO location (state,city) VALUES('$state','$city')";
        $exeSQL = mysqli_query($con, $SQL);
        $SQL = "SELECT id FROM location WHERE state='$state' and city='$city'";
        $exeSQL = mysqli_query($con, $SQL);
        $row = mysqli_fetch_array($exeSQL);
        $locid=$row['id'];
        $SQL = "SELECT id FROM vehicle WHERE type='$vehicle' ";
        $exeSQL = mysqli_query($con, $SQL);
        $row = mysqli_fetch_array($exeSQL);
        $vid=$row['id'];
        $SQL = "INSERT INTO customer (custname,locid,vehicletype,vehicleno,phoneno,password) VALUES('$name','$locid','$vid','$vehicleno','$no','$pass')";
        if (mysqli_query($con, $SQL)) {
            $Message = "ok";
        } else {
            $Message = "fail. " . mysqli_error($con);
        }

    }
    else
    {
        $SQL = "SELECT id FROM location WHERE state='$state' and city='$city'";
        $exeSQL = mysqli_query($con, $SQL);
        $row = mysqli_fetch_array($exeSQL);
        $locid=$row['id'];
        $SQL = "SELECT id FROM vehicle WHERE type='$vehicle' ";
        $exeSQL = mysqli_query($con, $SQL);
        $row = mysqli_fetch_array($exeSQL);
        $vid=$row['id'];
        $SQL = "INSERT INTO customer (custname,locid,vehicletype,vehicleno,phoneno,password) VALUES('$name','$locid','$vid','$vehicleno','$no','$pass')";
        if (mysqli_query($con, $SQL)) {
            $Message = "ok";
        } else {
            $Message = "fail. " . mysqli_error($con);
        }

    }
    
    
} else {
    $Message = "Username already taken";
}

$response[] = array("Message" => $Message);

echo json_encode($response);
