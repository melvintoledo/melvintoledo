<?php
// php pdo insert data to mysql database 
if(isset($_POST['insert']))
{
    try {
        // connect to mysql
    $pdoConnect = new PDO("mysql:host=localhost;dbname=dpsdb","root","");
    // set the PDO error mode to exception
    $pdoConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $exc) {
        echo $exc->getMessage();
        exit();
    }
    // get values form input text and number
    $fullName = $_POST['fullName'];
    $emailAddress = $_POST['emailAddress'];
    $contactNumber = $_POST['contactNumber'];
    $usernameInput = $_POST['usernameInput'];
    $passwordInput = $_POST['passwordInput'];
    $confirmPassword = $_POST['confirmPassword'];


   
    // mysql query to insert data
    $pdoQuery = "INSERT INTO `dpstable`(`fullName`, `emailAddress`, `contactNumber`, `usernameInput`, `passwordInput`) VALUES (:fullName,:emailAddress,:contactNumber,:usernameInput,:passwordInput)";
    $pdoResult = $pdoConnect->prepare($pdoQuery);
    $pdoExec = $pdoResult->execute(array(":fullName"=>$fullName,":emailAddress"=>$emailAddress,":contactNumber"=>$contactNumber,":usernameInput"=>$usernameInput,":passwordInput"=>$passwordInput));
    
    // check if mysql insert query successful
    if($pdoExec AND ($passwordInput == $confirmPassword))
    {
        // retrieve all files and display
        $pdoQuery = 'SELECT * FROM dpstable';
        $pdoResult =  $pdoConnect->prepare($pdoQuery);
        $pdoResult->execute();
            while ($row = $pdoResult->fetch()){
                echo  $row['fullName'] . " | " .$row['emailAddress'] . " | " . $row['contactNumber'] . " | " . $row['usernameInput'] . " | " . $row['passwordInput'] . "<br/>";
            }
            header("Location: signInPage.php");
            exit;
        } else {
            echo 'Data Not Inserted';
    }
}
$pdoConnect = null;
?>
