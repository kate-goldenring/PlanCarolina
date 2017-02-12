
//button to add one class
var addClassButton = document.querySelector('button');
addClassButton.onclick = function () {
  var myName = prompt("Enter a class departmet and number like ECON 101");
  addClass(myName);
}
// button to load in a list of classes

var select = document.getElementById('major');
select.onchange = function () {
  var selIndex = select.selectedIndex;
  var selValue = select.options[selIndex].innerHTML;
  console.log(selValue);

  var greenColor = 'hsl(120, 80%, 80%)';
  var purpleColor = 'hsl(260, 80%, 80%)';
  var yellowColor = 'hsl(60, 80%, 80%)';
  var redColor = 'hsl(0, 80%, 70%)';

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
    
  }


    var CS_BS = ["MATH 231", "PHYS 116/188", "MATH 232", "MATH 233", "COMP283/MATH 381", "COMP 401", "COMP 410", "COMP 411",  "COMP 455", "COMP 550", "MATH 547/577", "STOR 435", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426"];
    var CS_BA = ["MATH 231", "STOR 155/435", "MATH 231", "COMP 283/MATH 381", "STOR 155/435", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP >= 426", "COMP 401", "COMP 41", "COMP 411"];
    var LING = ["LING 101", "LING ELEC", "LING ELEC", "LING ELEC", "LING 200/520", "LING 201/537", "LING 202/541", "LING 203/540"];
    var ECON = ["MATH 231/152", "ECON 400", "STOR 155", "ECON 410", "ECON 420", "ECON >= 400", "ECON >= 400", "ECON >= 400", "ECON >= 500", "ECON 101"];
    var majors = [CS_BS, CS_BA, LING, ECON];

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



    function addClass(name, color) {
      var semesters = document.querySelectorAll('.semester_box');
      for (i = 0; i < semesters.length; i++) {
        if ($(semesters[i]).children().length < 4) {
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

