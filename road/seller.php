<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
$state = $decodedData['state'];
$city = $decodedData['city'];
if($state)
{
    $SQL = "SELECT s.name as name,l.city as city,l.state as state,p.type as type FROM seller s,location l,parts p WHERE s.locid=l.id and s.parts=p.id and l.city='$city' and l.state='$state'";
    $exeSQL = mysqli_query($con, $SQL);
    $check =  mysqli_num_rows($exeSQL);
}
else
{
    $SQL = "SELECT s.name as name,l.city as city,l.state as state,p.type as type FROM seller s,location l,parts p WHERE s.locid=l.id and s.parts=p.id";
$exeSQL = mysqli_query($con, $SQL);
$check =  mysqli_num_rows($exeSQL);
}


$response[]=array();
    while($row = mysqli_fetch_array($exeSQL))
    {
        $response[]=array("name"=>$row['name'],"city"=>$row['city'],"state"=>$row['state'],"type"=>$row['type']);
    }
array_shift($response);

echo json_encode($response);
?>