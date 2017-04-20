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
  <script type="text/json" src="majors/hankTesting.json"></script>
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link href="styles/style.css" rel="stylesheet" type="text/css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plan Carolina</title>
</head>
<body>
<div id="toolbar">
<div class="toolbar-item">
<img id="logo" src="images/pc_logo.png" style="height: 43px;">
</div>
<div class="toolbar-item" onclick="addClassButton();">Add Class</div>
<div class="toolbar-item dropbtn" onclick="chooseMajor();">
Select A Major
  <div class="dropdown">
    <div class="dropdown-content" id="myDropdown">
      <a onclick='selectMajor("BIOL_BS");'>Biology BS</a>
      <a onclick='selectMajor("CS_BA");'>Computer Science BA</a>
      <a onclick='selectMajor("CS_BS");'>Computer Science BS</a>
      <a onclick='selectMajor("ECON");'>Economics BA</a>
      <a onclick='selectMajor("LING");'>Linguistics BA</a>
      <a onclick='selectMajor("GEN_ED");'>General Education</a>
      <!--<a href="./addMajor.php">Add Major</a>-->
    </div>
  </div>
</div>
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
<h2> Everybody's Shufflin' </h2>
</div>
<br>
  <div class="large_box">
    
    <div class ="rows">
    <div class="semester_box" id="sem1">
     <p> Semester 1 </p>
    </div>
    <div class="semester_box" id="sem2">
     <p> Semester 2 </p>
    </div>
    <div id="sum1">
    <button class = 'sButton' id ="summerButton1" onclick = "addSummer1()"> Add Summer </button>
    <p id="summer1label"> </p>
    </div>
</div>

 <div class ="rows">
    <div class="semester_box" id="sem3">
    <p> Semester 3 </p>
    </div>
    <div class="semester_box" id="sem4">
    <p> Semester 4 </p>
    </div>
    <div id="sum2">
    <button class = 'sButton' id ="summerButton2" onclick = "addSummer2()"> Add Summer </button>
    <p id="summer2label"> </p>
    </div>
    
 </div>

  <div class ="rows">
    <div class="semester_box" id="sem5">
     <p> Semester 5 </p>
    </div>
    <div class="semester_box" id="sem6">
    <p> Semester 6 </p>
    </div>
    <div id="sum3">
    <button class = 'sButton' id ="summerButton3" onclick = "addSummer3()"> Add Summer </button>
    <p id="summer3label"> </p>
    </div>
    
  </div>
   <div class ="rows">
    <div class="semester_box" id="sem7">
    <p> Semester 7 </p>
    </div>
    <div class="semester_box" id="sem8">
     <p> Semester 8 </p>
    </div>
    </div>

  </div>
  <br>
  <div class="saveButtonDiv">
    <button class="saveButton" id="saveButton" onclick = "saveSchedule()"> Save Schedule </button>
  </div>
<script src="scripts/main.js"></script>
</body>

</html>