<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='registrationPage.css'>
    <script src='main.js'></script>
</head>
<body>
    
    <div class="wholeContainer">
        <div></div>
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
                    <div><a href = "/Webshop/MainWebshop.html"><button class="buttonDesign">HOME</button></a></div>
                </div>
            </div>
        </div>
        <form action="addRegistration.php" method="post" enctype="multipart/form-data">
        <div class="secondContainer">
            <div></div>
            <div class="registrationContainer">
                <div class="registrationTextIcon">
                    <div>
                        <img src = "profile.png" class="profilePic">
                    </div>
                    <div></div>
                    <div class="registerText">REGISTRATION</div>
                </div>
                <div class="registrationSecond">
                    <div></div>
                    <div class="inputContainer">
                        <div class="classificationText">Name:</div>
                        <div><input type="text" class="inputDesign" name="fullName" required></div>
                        <div class="classificationText">E-mail Address:</div>
                        <div><input type="text" class="inputDesign" name = "emailAddress" required></div>
                        <div class="classificationText">Contact Number/s:</div>
                        <div><input type="text" class="inputDesign"  name = "contactNumber" required></div>
                        <div class="classificationText">Username:</div>
                        <div><input type="text" class="inputDesign" name = "usernameInput" required></div>
                        <div class="classificationText">Password:</div>
                        <div><input type="password" class="inputDesign" name = "passwordInput" required></div>
                        <div class="classificationText">Confirm Password:</div>
                        <div><input type="password" class="inputDesign" name = "confirmPassword" required></div>
                    </div>
                </div>
                <div class="signUpsContainer">
                    <div>
                        <button class="buttonSignUp" name="insert">SIGN UP</button>
                    </div>
                    <div class="alreadyHave"><a href = "signInPage.php">Already have an account? Click here.</a></div>
                </div>
            </div>

        </div>
    </div>
</form>
</body>
</html>