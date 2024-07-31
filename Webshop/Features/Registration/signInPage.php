<?php  

 session_start();  

  require_once 'connectDatabase.php';

  
 try  
 {  
      $pdoConnect = new PDO("mysql:host=localhost;dbname=dpsdb","root",""); 
      $pdoConnect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);  
      if(isset($_POST["login"]))  
      {  
           if(empty($_POST["usernameInput"]) || empty($_POST["passwordInput"]))  
           {  
                $message = '<label>All fields are required</label>';  
           }  
           else  
           {  
                $pdoQuery = "SELECT * FROM dpstable WHERE usernameInput = :usernameInput AND passwordInput = :passwordInput";  
                $pdoResult = $pdoConnect->prepare($pdoQuery);  
                $pdoResult->execute(  
                     array(  
                          'usernameInput'     =>     $_POST["usernameInput"],  
                          'passwordInput'     =>     $_POST["passwordInput"]  

                     )  
                );  
                $count = $pdoResult->rowCount();  
                if($count > 0)  
                {  
                     $_SESSION["usernameInput"] = $_POST["usernameInput"];  
                     $_SESSION["passwordInput"] = $_POST["passwordInput"];

                     header("location:/Webshop/Features/homePageSignIn/homePageSignIn.html");  
                }  
                else  
                {  
                     $message = '<label>Wrong Data</label>';  
                }  
           }  
      }  

 }  
 catch(PDOException $error)  
 {  
      $message = $error->getMessage();  
 }  
 ?> 



<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='signInPage.css'>
</head>
<body>
    <form method = "post">
    <div class="wholeContainer">
        <div class="firstContainer">
            <div class="titleStorage">
                <div class="titleContainer">
                    <div class="printingText">
                        Digital Printing Shop
                    </div>
                    <div class="desireText">
                        print your desire
                    </div>
                </div>
            </div>
            <div class="featContainer">
                <div class="buttonContainer">
                    <div></div>
                    <div></div>
                    <div><a href = "/Webshop/MainWebshop.html"><button class="buttonDesign">HOME</button></a></div>
                </div>
            </div>
        </div>
        <div class="secondContainer">
            <div class="registrationContainer">
                <div class="registerText">LOG IN</div>
                <div><img src="profile.png" class="profilePic"></div>
                <div class="inputContainer">
                    <div class="inputHolder">Username:</div>
                    <div><input type="text" name="usernameInput" class="inputText"></div>
                    <div class="inputHolder">Password:</div>
                    <div><input type="password" name="passwordInput" class="inputText"></div>
                </div>
                <div>
                    <button class="buttonSubmit" name = "login">SIGN IN</button>
                </div>
                <div class="noAccount"><a>Don't have an account? Sign up.</a></div>
            </div>
        </div>
    </div>
</form>
</body>
</html>