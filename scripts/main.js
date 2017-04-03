
//button to add one class

function addClassButton() {
  var myName = prompt("Enter a class department and number like ECON 101");
  if(!myName.length>0){}else{addClass(myName);
  }
}

function showLogin() {
  document.getElementById("loginForm").style.display = "block";
  console.log('hi this is hank')
}

//add a summer semesters
function addSummer1() {
  document.getElementById('sum1').setAttribute("class", "semester_box");
  var elem = document.getElementById("summerButton1");
  elem.parentNode.removeChild(elem);
  document.getElementById("summer1label").innerHTML = "Summer 1";
  var sortable = Sortable.create(document.getElementById('sum1'), {
        draggable: '.course_box',
        group: "group",
        filter: '.js-remove',
        onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
        }
      });
//add a remove summer button
}
function addSummer2() {
  document.getElementById('sum2').setAttribute("class", "semester_box");
  var elem = document.getElementById("summerButton2");
  elem.parentNode.removeChild(elem);
  document.getElementById("summer2label").innerHTML = "Summer 2";
  var sortable = Sortable.create(document.getElementById('sum2'), {
        draggable: '.course_box',
        group: "group",
        filter: '.js-remove',
        onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
        }
      });
}
function addSummer3() {
  document.getElementById('sum3').setAttribute("class", "semester_box");
  var elem = document.getElementById("summerButton3");
  elem.parentNode.removeChild(elem);
  document.getElementById("summer3label").innerHTML = "Summer 3";
  var sortable = Sortable.create(document.getElementById('sum3'), {
        draggable: '.course_box',
        group: "group",
        filter: '.js-remove',
        onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
        }
      });
}

// dropdown bar for adding majors
var select = document.getElementById('major');
select.onchange = function () {
  var selIndex = select.selectedIndex;
  var selValue = select.options[selIndex].innerHTML;
  console.log(selValue);

  var greenColor = 'hsl(120, 80%, 80%)';
  var purpleColor = 'hsl(260, 80%, 80%)';
  var yellowColor = 'hsl(60, 80%, 80%)';
  var redColor = 'hsl(0, 80%, 70%)';
  var tealColor = 'hsl(166,53%,58%)';
  

    if (selValue== "CS_BS") {
      for(j =0; j< CS_BS.length; j++){

        addClass(CS_BS[j], purpleColor);
      }
    }
 if (selValue== "CS_BA") {
      for(j =0; j< CS_BA.length; j++){

        addClass(CS_BA[j], redColor);
      }
    }

     if (selValue== "LING") {
      for(j =0; j< LING.length; j++){

        addClass(LING[j], greenColor);
      }
    }

     if (selValue== "ECON") {
      for(j =0; j< ECON.length; j++){

        addClass(ECON[j], yellowColor);
      }
    }
    if (selValue== "BIOL_BS") {
      for(j =0; j< BIOL_BS.length; j++){

        addClass(BIOL_BS[j], tealColor);
      }
    }
    
  }

//worksheet arrays
    var CS_BS = ["MATH 231", "PHYS 116/188", "MATH 232", "MATH 233", "COMP283/MATH 381", "COMP 401", "COMP 410", "COMP 411",  "COMP 455", "COMP 550", "MATH 547/577", "STOR 435", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426"];
    var CS_BA = ["MATH 231", "STOR 155/435", "MATH 231", "COMP 283/MATH 381", "STOR 155/435", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP 401", "COMP 41", "COMP 411"];
    var LING = ["LING 101", "LING ELEC", "LING ELEC", "LING ELEC", "LING 200/520", "LING 201/537", "LING 202/541", "LING 203/540"];
    var ECON = ["MATH 231/152", "ECON 400", "STOR 155", "ECON 410", "ECON 420", "ECON >= 400", "ECON >= 400", "ECON >= 400", "ECON >= 500", "ECON 101"];
    var BIOL_BS = ["MATH 231/241", "BIOL 101&L", "CHEM 101&L", "BIOL 201", "BIOL 202", "BIOL 205", "PHYS 104/114/116/118", "PHYS 105/115/117/119", "CHEM 102&L", "CHEM 241&L", "CHEM 261", "CHEM 262&L", "MATH 232/COMP 110/STOR 155", "BIOL_ORGANISMAL_wLAB", "BIOL>205_wLAB", "BIOL>205_wLAB", "BIOL>400", "BIOL>400", "ALLIED_SCI", "ALLIED_SCI"]
    var majors = [CS_BS, CS_BA, LING, ECON, BIOL_BS];

//below for reading in files from input and putting classes onto schedule
    window.onload = function () {
      var fileInput = document.getElementById('fileInput');
      var fileDisplayArea = document.getElementById('fileDisplayArea');

      fileInput.addEventListener('change', function (e) {
        // Put the rest of the demo code here.
        var file = fileInput.files[0];
        var textType = /text.*/;
        if (file.type.match(textType)) {
          var reader = new FileReader();

          reader.onload = function (e) {
            var contents = reader.result;
            var lines = contents.split(/[\r\n]+/g);
            for (var i = 0; i < lines.length; i++) {
              addClass(lines[i], 'orange');
            }
          }

          reader.readAsText(file);
        } else {
          alert("File not supported! Only upload .txt files!");
        }
      });
    }
    /*
document.getElementById("fileInput").addEventListener("mouseover", importExplaination);
function importExplaination(){
   var newDiv = document.createElement("div");
   var content = document.createTextNode("Upload a textfile of your classes, 1 class per entered line such as ECON 101");
   newDiv.appendChild(content);
   var belowDiv = document.getElementById("major"); 
    document.body.insertBefore(newDiv, belowDiv); 
}
*/

//function that creates class div with class name and number as text

    function addClass(name, color) {
      var semesters = document.querySelectorAll('.semester_box');
      // var summers = document.querySelectorAll('.summer_box_clicked');
      // semesters.add(summers);
      for (i = 0; i < semesters.length; i++) {
        if ($(semesters[i]).children().length < 5) {
          var newClass = document.createElement('DIV');
          var xButton = document.createElement('I');
          xButton.classList.add('js-remove');
          xButton.innerHTML = 'X';
          newClass.classList.add('course_box');
          newClass.style.background = color;
          $(newClass).html(name);
          semesters[i].appendChild(newClass);
          newClass.appendChild(xButton);
          break;
        }
      }

    }


    

//using Sortable
    var semesters = document.querySelectorAll('.semester_box');
    semesters.forEach(function (sem, index) {

      var sortable = Sortable.create(sem, {
        draggable: '.course_box',
        group: "group",
        filter: '.js-remove',
        onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
        }
      });
    });
    /*
    var summers = document.querySelectorAll('.summer_box_clicked');
       summers.forEach(function (sem, index) {
      var sortable = Sortable.create(sem, {
        draggable: '.course_box',
        group: "group",
        filter: '.js-remove',
        onFilter: function (evt) {
			evt.item.parentNode.removeChild(evt.item);
		
        }
      });
    });
*/
