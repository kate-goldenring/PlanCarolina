
//button to add one class

function addClassButton() {
  var myName = prompt("Enter a class department and number like ECON 101");
  if(myName.length>0){addClass(myName);}
  if(classOverload != ""){
    alert("There was not enough space for your class, the following was not added: \n" + classOverload.substring(0, classOverload.length - 3));
    classOverload = "";
  }
}
//Shows dropdown for major choice
function chooseMajor() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//This button toggles the login form

function toggleLogin() {
  var hidden = document.getElementById('loginForm').style.opacity === "0" || document.getElementById('loginForm').style.opacity === ""
  if (hidden) {
    showLogin()
  } else {
    hideLogin()
  }
}

function showLogin() {
  var form = document.getElementById('loginForm')  
  form.style.opacity = '1'
  form.style.top = '60px'
}

function hideLogin() {
  var form = document.getElementById('loginForm')  
  form.style.opacity = '0'
  form.style.top = '0px'
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

//function that creates class div with class name and number as text
 var classOverload = "";
    function addClass(name, color) {
      var semesters = document.querySelectorAll('.semester_box');
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
        } else{
          if(i == semesters.length - 1){
            classOverload += name + " , " ;
          }
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

  //This gets called when you select an item in the toolbar list
  function selectMajor(major){
    loadJSON(function(response) {
      var majorJSON = JSON.parse(response);
      if (major== "BIOL_BS") { loadClasses(majorJSON.BIOL_BS); }
      if (major== "BUSI") { loadClasses(majorJSON.BUSI); }
      if (major=="CHEM_BS") {loadClasses(majorJSON.CHEM_BS); }
      if (major== "CS_BA"){ loadClasses(majorJSON.COMP_BA); }
      if (major== "CS_BS") { loadClasses(majorJSON.COMP_BS); }
      if (major== "ECON") { loadClasses(majorJSON.ECON_BA); }
      if (major== "EXSS_BA") {loadClasses(majorJSON.EXSS_BA); }
      if (major== "LING") { loadClasses(majorJSON.LING_BA); }
      if (major== "PR") { loadClasses(majorJSON.MEJO); loadClasses(majorJSON.PR); }
      if (major== "POLI") { loadClasses(majorJSON.POLI); }
      if (major== "GEN_ED") { loadClasses(majorJSON.GEN_ED); }
    });
  }

  function loadClasses(major){//Checks all the JSON parts and fills them if the category exists
    var color = chooseColor(major);
        if (major.absolute_courses != null){
          for(j = 0; j < major.absolute_courses.length; j++){
            addClass(major.absolute_courses[j], color);
          }
        }
        if (major.choice_courses != null){
          var k = 0;
          for(j = 0; j < major.choice_courses.choices.length; j++){
            var courseToAdd = major.choice_courses.choices[j][0];
            for(k = 1 ; k < major.choice_courses.choices[j].length; k++){
              courseToAdd = courseToAdd + " / " + major.choice_courses.choices[j][k];
            }
            addClass(courseToAdd, color);
          }
        }
        if (major.range_courses != null){
          for(j = 0; j < major.range_courses[0].number_required; j++){
            addClass((major.range_courses[0].department + " " + major.range_courses[0].range), color);
          }
        }
        if (major.free_electives != null){
          for(j = 0; j < major.free_electives; j++){
            addClass("Free "+ major.department +" Elective", color);
          }
        }
        if (classOverload != ""){
          alert("There was not enough space for your classes, the following were not added: \n" + classOverload.substring(0, classOverload.length - 3));
          classOverload = "";
        }
  }

  function chooseColor(major){
    if(major.name == "Biology BS"){
      return 'hsl(166, 53%, 58%)';//Teal
    } else if(major.name == "Business Administration"){ 
      return 'hsl(210, 100%, 60%)';//Light Blue
    } else if(major.name == "Chemistry BS"){
      return 'hsl(88, 100%, 53%)';//Pee green
    } else if(major.name == "Computer Science BA"){
      return 'hsl(260, 80%, 80%)';//Purple
    } else if(major.name == "Computer Science BS"){
      return 'hsl(120, 80%, 80%)';//Green
    } else if(major.name == "Economics BA"){
      return 'hsl(0, 80%, 70%)';//Red
    } else if(major.name == "Exercise and Sports Science BA"){
      return 'hsl(151, 92%, 58%)';//Greenish Teal
    } else if(major.name == "Linguistics BA"){
      return 'hsl(60, 80%, 80%)';//Yellow
    } else if(major.name == "Various MEJO" || major.name == "Public Relations BA"){
      return 'hsl(331, 100%, 83%)';//Light Pink
    } else if(major.name == "Political Science BA"){
      return 'hsl(45, 92%, 58%)';//Orange
    } else{
      return 'hsl(3, 0%, 65%)';//Gray
    }
  }

  //This function grabs the JSON file so we can use it in the addMajor method
  function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './majors/majors.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }