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
<div class="toolbar-item">
<img id="logo" src="images/pc_logo.png" style="height: 50px;">
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
<h2> Add your own Major </h2>
<h2> Thank you for helping out! </h2>
</div>
<br>
  
<script src="scripts/main.js"></script>
</body>

</html>