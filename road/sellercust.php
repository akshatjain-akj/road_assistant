<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
    $encodedData = file_get_contents('php://input');
$decodedData = json_decode($encodedData, true);
$name = $decodedData['username'];

$SQL = "SELECT sellerid as id from seller WHERE name='$name'";
$exeSQL = mysqli_query($con, $SQL);
$row = mysqli_fetch_array($exeSQL);
$id=$row['id'];
$SQL = "SELECT c.custname as name,l.city as city,l.state as state,p.type as type FROM seller_alloc s,location l,parts p,customer c WHERE s.cid=c.cid and s.pid=p.id and s.sid='$id'and l.id=s.lid";
$exeSQL = mysqli_query($con, $SQL);
$response[]=array();
    while($row = mysqli_fetch_array($exeSQL))
    {
        $response[]=array("name"=>$row['name'],"city"=>$row['city'],"state"=>$row['state'],"type"=>$row['type']);
    }
array_shift($response);

echo json_encode($response);
?>