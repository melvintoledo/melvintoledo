<?php
    session_start();
    if (!isset($_SESSION['usernameInput'])) {
        $_SESSION['msg'] = "You have to log in first";
        header("location:/Webshop/Features/Registration/signInPage.php");
        }
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='buyingProcess.css'>
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
        <form action="/Webshop/Features/paymentProcess/paymentProcess.php" method="post" enctype="multipart/form-data">
        <div class="thirdContainer">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div class="pictureSignIn">
                <div>
                    <button class="backButton">&lt; BACK</button>
                </div>
            </div>
            <div></div>
            <div class="contentsContainer">
                <div class="yourDesignText">
                    your <br> design
                </div>
                <div class="uploadImageContainer">
                    <input type="file" name="file" class="uploadImage" style="z-index: 1;" required>
                </div>
                <div class="inputsContainer">
                    <div class="textInputLabel"><label>Color:</label></div>
                    <div>
                        <select name="colorWheel" id="colorText" required>
                            <option value="" disabled selected>Choose Color...</option>
                            <option value="colorRed">Red</option>
                            <option value="colorOrange">Orange</option>
                            <option value="colorYellow">Yellow</option>
                            <option value="colorGreen">Green</option>
                            <option value="colorBlue">Blue</option>
                            <option value="colorIndigo">Indigo</option>
                            <option value="colorViolet">Violet</option>
                            <option value="colorBlack">Black</option>
                            <option value="colorWhite">White</option>
                            <option value="colorGray">Gray</option>
                            <option value="colorBrown">Brown</option>
                        </select>
                    </div>
                    <div class="textInputLabel"><label>Size:</label></div>
                    <div>
                        <select name="selectSize" id="colorText" required>
                            <option value="" disabled selected>Choose Size...</option>
                            <option value="sizeSmall">Small</option>
                            <option value="sizeMedium">Medium</option>
                            <option value="sizeLarge">Large</option>
                            <option value="sizeExtraLarge">Extra Large</option>
                        </select>
                    </div>
                    <div class="textInputLabel"><label>Quantity:</label></div>
                    <div>
                        <input type="number" id="colorText" name = "quantitySize" required>
                    </div>
                </div>
                <div class="preOrderContainer">
                    <button class="preOrderButton" name="submit">
                        <div class="buttonContents">
                            <div class="preOrderText">PRE<br>ORDER</div>
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