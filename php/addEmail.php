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

$email = $_POST["email"];

$sql = "INSERT INTO users (email)
VALUES ('{$email}')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>