<?php

$mysql_host = "mysql16.000webhost.com";
$mysql_database = "a6752197_db";
$mysql_user = "a6752197_monster";
$mysql_password = "brEWa-r3thEkU*R";

// Create connection
$conn = new mysqli($mysql_host, $mysql_user, $mysql_password, $mysql_database);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$id=$_GET["id"];

$sql = "SELECT * FROM users WHERE id = '$id'" ;


$result = mysqli_query($conn, $sql);



if (mysqli_num_rows($result) > 0) {
	echo json_encode(mysqli_fetch_assoc($result));
} else {
    echo "0 results";
}
$conn->close();

?>