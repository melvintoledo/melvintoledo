<?php
    session_start();
    if (!isset($_SESSION['usernameInput'])) {
        $_SESSION['msg'] = "You have to log in first";
        header("location:/Webshop/Features/Registration/signInPage.php");
        }
    if(isset($_POST['submitPay'])){
        try {
            // connect to mysql
        $pdoConnect = new PDO("mysql:host=localhost;dbname=dpsdb","root","");
        // set the PDO error mode to exception
        $pdoConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $exc) {
            echo $exc->getMessage();
            exit();
        }
        $statusMsg = '';

// File upload path
        $targetDir = "uploads/";
        $fileName = basename($_FILES["file"]["name"]);
        $targetFilePath = $targetDir . $fileName;
        $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
        $referenceNumber = $_POST['referenceNumber'];

        $usernameInput = $_SESSION['usernameInput'];
        $passwordInput = $_SESSION['passwordInput'];

        if(isset($_POST["submitPay"]) && !empty($_FILES["file"]["name"])){
            // Allow certain file formats
            $allowTypes = array('jpg','png','jpeg','gif','pdf');
            if(in_array($fileType, $allowTypes)){
                // Upload file to server
                if(in_array($fileType, $allowTypes)){
                    // Insert image file name into database
                    $pdoQuery = "UPDATE dpstable SET receiptPaper = :receiptPaper, referenceNumber = :referenceNumber WHERE usernameInput = '{$_SESSION['usernameInput']}' AND passwordInput = '{$_SESSION['passwordInput']}'";
                    $pdoResult = $pdoConnect->prepare($pdoQuery);
                    $pdoExec = $pdoResult->execute(array(":receiptPaper"=>$fileName,":referenceNumber"=>$referenceNumber));
                    
                    if($pdoExec){
                        header("location:/Webshop/Features/screenshotPage/screenshotPage.html");
                    }else{
                        $statusMsg = "File upload failed, please try again.";
                    } 
                }else{
                    $statusMsg = "Sorry, there was an error uploading your file.";
                }
            }else{
                $statusMsg = 'Sorry, only JPG, JPEG, PNG, GIF, & PDF files are allowed to upload.';
            }
        }else{
            $statusMsg = 'Please select a file to upload.';
        }

        // Display status message
        echo $statusMsg;
}

?>