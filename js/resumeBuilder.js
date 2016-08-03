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
"name":"May",
"role":"Analyst",
"Contact Info":"guess",
"Skills":["CAS exams","js"]
}

var education=
{
	"schools":[
	{
		"name":"UWaterloo"
	},
	{
		"name":"SWUFE"
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
		"employer":"WRBC"
	},
	{
		"position":"TA",
		"employer":"UWaterloo"
	}
	]
}

var projects={
	"name":"FMCSA"
}

var formattedName=HTMLheaderName.replace("%data%",bio.name);
var formattedRole=HTMLheaderRole.replace("%data%","Analyst");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if(bio.Skills.length > 0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.Skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.Skills[1]);
	$("#skills").append(formattedSkill);
}

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].position);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
}