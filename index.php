<?php
session_start();
$_SESSION['user'] = 'Hank';
?>
<!DOCTYPE html>
<html>

<head>
  <script type="text/javascript" src="scripts/jquery-3.1.1.min.js"> </script>
  <!sortable added in dragability and deletability of course items >
  <script type="text/javascript" src="scripts/Sortable.js"> </script> 
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link href="styles/style.css" rel="stylesheet" type="text/css">
  <title>Plan Carolina</title>
</head>
<body>
  <img id="logo" src="images/pc_logo.png" style="position: absolute; height: 100px; padding: 20px;">
<div class="titles">
<h1 class="title"> Plan Carolina </h1>
<?php
if (isset($_SESSION['user'])) {
  echo("<h1>SESSIONS!!!!</h1>");
} else {
  echo("<h1>You're not logged in :(</h1>");
}
?>
<h2> Everybody's Shufflin' </h2>
</div>
<div class="options">
<button class= 'cButton' id ='classButton'  onclick="addClassButton();"> Add Class </button>
<input type="file" id="fileInput">
<select name="select" id = 'major'>
  <option value="value0">SELECT_A_MAJOR</option>
  <option value="value1">CS_BA</option> 
  <option value="value2">CS_BS</option>
  <option value="value3">LING</option>
  <option value="value4">ECON</option>
  <option value ="value5">BIOL_BS</option>
</select>
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
<script src="scripts/main.js"></script>
</body>

</html>