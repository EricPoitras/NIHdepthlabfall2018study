<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "mitutor";

//Public variables for student login including the student code identifier and unique session identifier
//public $student_code ='';
//public $usv =''; 

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$timestamp = $_POST["logtimestamp"];
$webpage = $_POST["logwebpage"];
$logutterrnn = $_POST["logutterrnn"];
$logutterdsf = $_POST["logutterdsf"];
$session = $_POST["session"];
$username = $_POST["username"];

$sql = "INSERT INTO logapidata (timestamp, webpage, session, username, utterrnn, utterdsf)
VALUES ('$timestamp', '$webpage', '$session', '$username', '$logutterrnn', '$logutterdsf')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>