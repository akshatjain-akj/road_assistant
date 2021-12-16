<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    $encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
$name = $decodedData['mechusername'];

$SQL = "SELECT mechid as id from mechanic WHERE mechname='$name'";
$exeSQL = mysqli_query($con, $SQL);
$row = mysqli_fetch_array($exeSQL);
$id=$row['id'];
$SQL = "SELECT c.custname as name,l.city as city,l.state as state,v.type as type FROM mechanic_alloc m,location l,vehicle v,customer c WHERE m.cid=c.cid and m.vid=v.id and m.mid='$id'and l.id=m.lid";
$exeSQL = mysqli_query($con, $SQL);
$response[]=array();
    while($row = mysqli_fetch_array($exeSQL))
    {
        $response[]=array("name"=>$row['name'],"city"=>$row['city'],"state"=>$row['state'],"type"=>$row['type']);
    }
array_shift($response);

echo json_encode($response);
?>