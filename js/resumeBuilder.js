/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#main").append("May M");

// var awesomeThoughts="I am May and I am AWESOME";
// console.log(awesomeThoughts);

// var funthoughts=awesomeThoughts.replace("AWESOME","FUN");
//  $("#main").append(funthoughts);



// $("#main").append(bio.Skills);
// var work={
// 	"position":"Analyst"
// }
// var education={
// 	"name":"UWaterloo"
// }
// $("#main").append(work["position"]);
// $("#main").append(education.name);


var bio={
	"contacts":{
		"name":"May mmm",
		"role":"Analyst",
		"location":"Toronto, ON, Canada",
		"Contact Info":"guess",
		"Skills":["CAS exams","js"]
	}
}

var education=
{
	"schools":[
	{
		"name":"UWaterloo",
		"location":"Waterloo, ON, Canada"
	},
	{
		"name":"SWUFE",
		"location":"Chengdu, Sichuan, China"
	}
	],
	"OnlineCourse":[
	{
		"Edx":"Python"
	},
	{
		"Udacity":"JS"
	}
	]
}

var work=
{
	"jobs":[
	{
		"position":"Analyst",
		"employer":"WRBC",
		"location":"Greenwich, CT"
	},
	{
		"position":"TA",
		"employer":"UWaterloo",
		"location":"Waterloo, ON, Canada"
	}
	]
}

var projects=
{
	"projects":[
	{"name":"FMCSA"},
	{"name":"BLS"}
	]
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%","Analyst");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if(bio.contacts.Skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.contacts.Skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.contacts.Skills[1]);
	$("#skills").append(formattedSkill);
}

function displayWork(){
	for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].position);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
}
}

displayWork();

$(document).click(function(loc) {
  var x=loc.pageX;
  var y=loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(oldName) {
	var finalName = oldName;
	var split=finalName.trim().split(" ");
    var first=split[0].toLowerCase();
    var first1=first.substring(0,1);
    var first1big=first1.toUpperCase();
    var first2=first.substring(1,first.length);
    var last=split[1].toUpperCase();    
    finalName=first1big.concat(first2," ",last);
    return finalName;
}

// console.log(inName("seb thrun")==="Seb THRUN");

projects.display=function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProjectTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].name);
		$(".project-entry:last").append(formattedProjectTitle);
	}
}
projects.display();

$("#mapDiv").append(googleMap);