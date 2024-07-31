<?php
    session_start();
    if (!isset($_SESSION['usernameInput'])) {
        $_SESSION['msg'] = "You have to log in first";
        header("location:/Webshop/Features/Registration/signInPage.php");
        }
    $selectSize = '';
    $quantityTotal = '';
    $quantitySize = '';
    $quantityPayment  = '';
    if(isset($_POST['submit'])){
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
        $colorWheel = $_POST['colorWheel'];
        $selectSize = $_POST['selectSize'];
        $quantitySize = $_POST['quantitySize'];
        $usernameInput = $_SESSION['usernameInput'];
        $passwordInput = $_SESSION['passwordInput'];

        if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])){
            // Allow certain file formats
            $allowTypes = array('jpg','png','jpeg','gif','pdf');
            if(in_array($fileType, $allowTypes)){
                // Upload file to server
                if(in_array($fileType, $allowTypes)){
                    // Insert image file name into database
                    $pdoQuery = "UPDATE dpstable SET file_name = :fileName, colorWheel = :colorWheel , selectSize = :selectSize, quantitySize = :quantitySize WHERE usernameInput = '{$_SESSION['usernameInput']}' AND passwordInput = '{$_SESSION['passwordInput']}'";
                    $pdoResult = $pdoConnect->prepare($pdoQuery);
                    $pdoExec = $pdoResult->execute(array(":fileName"=>$fileName,":colorWheel"=>$colorWheel,":selectSize"=>$selectSize, ":quantitySize"=>$quantitySize));
                    
                    if($pdoExec){
                        header("location:/Webshop/Features/paymentProcess/paymentProcess.php");
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


<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='paymentProcess.css'>
    <script src='main.js'></script>
</head>
<body>
    <div class="wholeContainer">
        <div></div>
        <div class="buttonSignInContainer">
            <div></div>
            <div class="linksSignInContainer">
                <div><a href="/Webshop/Features/homePageSignIn/homePageSignIn.html" style="color: black;text-decoration: none;">HOME</a></div>
                <div><a href="/Webshop/Features/aboutWebpage/aboutWebpage.html" style="color: black;text-decoration: none;">ABOUT</a></div>
                <div><a href="/Webshop/Features/productsPage/productsPage.html" style="color: black;text-decoration: none;">PRODUCTS</a></div>
                <div><a href="orderPage.html" style="color: white;text-decoration: none;">ORDERS</a></div>
            </div>
            <div></div>
            <div>
                <img src="/Webshop/Images/profile.png" class="iconProfile">
            </div>
        </div>
        <div class="secondContainer">
            <div class="digitalText">
                Digital Printing Shop
            </div>
            <div class="desireText">
                print your design
            </div>
        </div>
        <form  action="processingPay.php" method="post" enctype="multipart/form-data">
        <div class="thirdContainer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="barcodeImageContainer">
                <div>
                    <img src="/Webshop/Images/gcashBarcode.png" class="gcashBarcode">
                </div>
                <div class="scanMeText">
                    SCAN ME
                </div>
            </div>
            <div></div>
            <div class="contentsContainer">
                <div>
                    <button class="backButton">&lt; BACK</button>
                </div>
                <div class="yourDesignText">
                    PAYMENT <br> METHOD
                </div>
                <div class="inputsContainer">
                    <div class="paymentContainer">
                        <div>
                            <span class="totalText">Total Price:</span>
                            <div class="showTotal">
                                <?php
                                    try {
                                        $pdoConnect = new PDO("mysql:host=localhost;dbname=dpsdb","root","");
                                    } catch (PDOException $exc) {
                                        echo $exc->getMessage();
                                        exit();
                                    }
                             
                                $usernameInput = $_SESSION['usernameInput'];
                                $passwordInput = $_SESSION['passwordInput'];
                                $pdoQuery = "SELECT * FROM dpstable WHERE usernameInput = :usernameInput AND passwordInput = :passwordInput";    
                                $pdoResult =  $pdoConnect->prepare($pdoQuery);
                                $pdoExec = $pdoResult->execute(array(":usernameInput"=>$usernameInput, ":passwordInput" => $passwordInput));
                                if($pdoExec)
                                {
                                        // if id exist 
                                        // show data in inputs
                                    if($pdoResult->rowCount()>0)
                                    {
                                        while($row=$pdoResult->fetch(PDO::FETCH_ASSOC)) {
                                            extract($row);
                                            if($selectSize == "sizeSmall"){
                                                $quantityTotal = 110 * $quantitySize;
                                                echo $quantityTotal, ".00";
                                            }
                                            elseif($selectSize == "sizeMedium"){
                                                $quantityTotal = 120 * $quantitySize;
                                                echo $quantityTotal, ".00";
                                            }
                                            elseif($selectSize == "sizeLarge"){
                                                $quantityTotal = 130 * $quantitySize;
                                                echo $quantityTotal, ".00";
                                            }
                                            elseif($selectSize == "sizeExtraLarge"){
                                                $quantityTotal = 140 * $quantitySize;
                                                echo $quantityTotal, ".00";
                                            }
                                        }
                                        
                                    } else {
                                        echo '<br><br><br><br><br>';
                                        echo 'No Data';
                                }
                            }
                                ?>
                            </div>
                        </div>
                        <div>
                            <span class="totalText">Required Down Payment:</span>
                            <div class="requiredPayment">
                            <?php
                                    if($selectSize == "sizeSmall"){
                                        $quantityPayment = $quantityTotal / 2;
                                        echo $quantityPayment, ".00";
                                    }
                                    elseif($selectSize == "sizeMedium"){
                                        $quantityPayment = $quantityTotal / 2;
                                        echo $quantityPayment, ".00";
                                    }
                                    elseif($selectSize == "sizeLarge"){
                                        $quantityPayment = $quantityTotal / 2;
                                        echo $quantityPayment, ".00";
                                    }
                                    elseif($selectSize == "sizeExtraLarge"){
                                        $quantityPayment = $quantityTotal / 2;
                                        echo $quantityPayment, ".00";
                                    }


                                ?>
                            </div>
                        </div>
                    </div>
                    <div class="gcashInfosContainer">
                        <div>
                            <span class="infosText">Upload your Receipt Here:</span>
                            <input type="file" class="gcashReceipt" name = "file" required>
                        </div>
                        <div class="referenceContainer">
                            <span class="referenceText">Reference Number:</span>
                            <input type="text" class="referenceInput" name = "referenceNumber" required>

                        </div>
                    </div>
                </div>
                <div class="preOrderContainer">
                    <button class="preOrderButton" name = "submitPay">
                        <div class="buttonContents">
                            <div class="preOrderText">SUBMIT</div>
                            <div>
                                <img class="handSignWhite" src="/Webshop/Images/handSignWhite.png">
                            </div>
                        </div>   
                    </button>
                </div>
            </div>
        </div>
    </form>
    </div>
        
    
</body>
</html>