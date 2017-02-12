
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

    if (selValue== "CS_BS") {
      for(j =0; j< CS_BS.length; j++){

        addClass(CS_BS[j], 'purple');
      }
    }
 if (selValue== "CS_BA") {
      for(j =0; j< CS_BA.length; j++){

        addClass(CS_BA[j], 'red');
      }
    }

     if (selValue== "LING") {
      for(j =0; j< LING.length; j++){

        addClass(LING[j], 'green');
      }
    }

     if (selValue== "ECON") {
      for(j =0; j< ECON.length; j++){

        addClass(ECON[j], 'yellow');
      }
    }
    
  }


    var CS_BS = ["COMP 110", "COMP 410", "COMP 411", "COMP 401", "MATH 233"];
    var CS_BA = ["COMP 110", "COMP 410", "COMP 411", "COMP 401", "MATH 233"];
    var LING = ["LING 101", "LING 222", "LING 300"];
    var ECON = ["ECON 101", "ECON 300", "ECON 222"];
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





