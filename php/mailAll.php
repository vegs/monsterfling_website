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


$sql = "SELECT email FROM users";


$result = mysqli_query($conn, $sql);


if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
		$to      = $row["email"];
    	$subject = "Monsterfling Update";
    	$message = "This is a test mail for updates";
		$headers = array("From: from@example.com",
		    "Reply-To: replyto@example.com",
		    "X-Mailer: PHP/" . PHP_VERSION
		);
		$headers = implode("\r\n", $headers);

		if (mail ($to, $subject, $message, $headers)) { 
            echo 'Your message has been sent!';
        } else { 
            echo 'Something went wrong, go back and try again!'; 
        }

    	//bool mail ( string $row["email"] , string $subject , string $message [, string $additional_headers [, string $additional_parameters ]] )
        echo "id: " . $row["id"]. " - Name: " . $row["username"]. " " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();

?>