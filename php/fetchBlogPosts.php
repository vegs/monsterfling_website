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


$sql = "SELECT id, authorId, title, content, timePosted, lastEdited, likes, dislikes FROM blogPost";


$result = mysqli_query($conn, $sql);



if (mysqli_num_rows($result) > 0) {
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {

        // $sql = "SELECT * FROM comment WHERE blogPostId=" . $r['id']. "";
        // $comments_result = mysqli_query($conn, $sql);
        // if (mysqli_num_rows($comments_result) > 0) {
        //     $comments_rows = array();
        //     while($c_row = mysqli_fetch_assoc($comments_result)) {
        //         $comments[] = $c_row;
        //     }
        // }
        // $r[]
        $rows[] = $r;
    }
    echo json_encode($rows);
} else {
    echo "0 results";
}
$conn->close();

?>