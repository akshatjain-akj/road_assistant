<?php
include('database.php');
header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
    header("Content-type:application/json");
$SQL = "SELECT m.Mechname as name,m.phoneno as phone,l.city as city,l.state as state,v.type as type FROM mechanic m,location l,vehicle v WHERE m.locid=l.id and m.vehicletype=v.id";
$exeSQL = mysqli_query($con, $SQL);
$check =  mysqli_num_rows($exeSQL);

$response[]=array();
    while($row = mysqli_fetch_array($exeSQL))
    {
        $response[]=array("name"=>$row['name'],"phone"=>$row['phone'],"city"=>$row['city'],"state"=>$row['state'],"type"=>$row['type']);
    }
array_shift($response);

echo json_encode($response);
?>