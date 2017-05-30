<?php
// connect to database
try {
  $db = new PDO('mysql:host=plancarolina.cqcy2bsld8rk.us-east-1.rds.amazonaws.com;dbname=PlanCarolina', 'PlanCarolina', 'planCarolina110');
} catch (PDOException $e) {
?>
<script>alert("Couldn't connect: <?= $e->getMessage() ?>");</script>
<?php
}
// if not logged in...
if (!isset($_POST['username'])) {
  echo('<br><br><h1>please log in :)</h1>');
} else if (!isset($_SESSION['username'])){ // if trying to log in...
  session_start();
  // get the user's row from the database
  $q = $db->query("SELECT * FROM Users WHERE username='$_POST[username]'"); // dot (.) is how you do string concatenation in php
  $rows = $q->fetchAll();
  if ($rows == FALSE) {
    echo('<br><br><h1>Invalid username :(</h1>');
  } else {
  $_SESSION['username'] = $rows[0]['username'];
    echo('<br><br><h1>logged in! Welcome, ' . $_SESSION['username'] . '</h1>');
  }
} 
?>
<!DOCTYPE html>
<html>

<head>
  <script type="text/javascript" src="scripts/jquery-3.1.1.min.js"> </script>
  <!sortable added in dragability and deletability of course items >
  <script type="text/javascript" src="scripts/Sortable.js"> </script> 
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link href="styles/style.css" rel="stylesheet" type="text/css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plan Carolina</title>
</head>
<body>
<div id="toolbar">
<div class="toolbar-item" onclick="location.href = './index.php';">
<img id="logo" src="images/pc_logo.png" style="height: 50px;">
</div>
<div class="toolbar-item" onclick="location.href = './index.php';">
Start Planning
</div>
<!--<div class="toolbar-item" onclick="showLogin();">Login</div>-->
<div class="toolbar-item" id="loginButton" onclick="toggleLogin();">Login</div>
</div>
  <form id="loginForm" action="index.php" method="post">
    Username:
    <input type="text" name="username">
    Password:
    <input type="text" name="password"><br>
    <input type="submit">
  </form>
<div class="titles">
<h1 class="title"> Plan Carolina </h1>
<hr>

</div>
<br>
<!--Here's where the form is-->
<div id="about">
    <div id="aboutText">
        <p id = "aboutPara"> At UNC there are endless opportunities; however, those endless options can be overwhelming especially with only
            four years to seize them. We found ourselves rewriting our four-year plans over and over again on pieces of paper each time 
            we took that art history or philosophy class and instantly wanted to add another major or minor. Could we fit it in? What about study abroad?
            The erasing and reoutlining became onerous, especially with the confusing UNC academic worksheets. Out of this frustration grew PlanCarolina, a tool 
            that we hope will help you explore your indecisiveness efficiently. We are a team of three Juniors studying Computer Science, Linguistics, Economics, Math, and... who knows? 
            We hope PlanCarolina will help you plan out your four years at this school of national champions! 
            Cheers to planning!
              Kate, Hank, and Brooks
        </p>
    </div>
    <div id= "profiles">
        <div class = "gallery" id = "kate">
            <img src="images/kate.jpeg" width = "300" height = "200">
            <div class = "overlay">
                <div class ="overText"> Kate Goldenring </div>
            </div>
        </div>
        <div class = "gallery" id ="hank">
            <img src="images/hank.jpg" width = "300" height = "200">
            <div class = "overlay">
                <div class ="overText"> Hank Hester </div>
            </div>
        </div>
        <div class = "gallery" id = "brooks">
            <img src="images/brooks.jpg" width = "300" height = "200">
            <div class = "overlay">
                <div class ="overText"> Brooks Townsend </div>
            </div>
        </div> 
    </div>
</div>
<script src="scripts/main.js"></script>
</body>

</html>