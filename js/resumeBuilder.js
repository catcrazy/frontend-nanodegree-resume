// define all objects for resume

/* bio format
	name : string
    role : string
    contacts : array of objects with
          mobile: string
          email: string 
          github: string
          twitter: string 
          location: string
    welcomeMessage: string 
    skills: array of strings
    biopic: url
    display: function taking no parameters
*/
var bio = {
    "name": "Naho Ito",
    "role": "Technical Account Manager",
    "contacts": [
        {
            "email": "hogehoge@hoge.com",
            "location": "Kyoto",
            "mobile": "080-xxxx-xxxx",
            "github": "catcrazy@",
            "twitter": "xxxx@"
        },
    ],
    "welcomeMessage": "Hi!",
    "skills": [
        "JavaScript",
        "HTML/CSS",
        "Computuer Science",
        "Python"
    ],
    "biopic": "./images/fry.jpg"
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", this.name);
	var formattedRole = HTMLheaderRole.replace("%data%", this.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedContact = [];
	for (var i in bio.contacts) {
		var cnt = bio.contacts[i];
		var formattedMobile = HTMLmobile.replace("%data%", cnt.mobile);
		var formattedEmail = HTMLemail.replace("%data%", cnt.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", cnt.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", cnt.github);
		var formattedLocation = HTMLlocation.replace("%data%", cnt.location);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);
	}
	var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
	$("#header").append(formattedPic);
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%", this.welcomeMessage);
	$("#header").append(formattedWelcome);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (var t in bio.skills) {
			$("#skills").append(HTMLskills.replace("%data%", bio.skills[t]));
		}
	}
};

/** education
    schools: array of objects with
         name: string
         location: string
         degree: string
         majors: array of strings
         dates: integer (graduation date)
         url: string
    onlineCourses: array with
         title: string
         school: string
         date: integer (date finished)
         url: string
    display: function taking no parameters
**/
var education = {
    "schools": [
        {
            "name": "Keio",
            "location": "Tokyo",
            "degree": "Bachelar",
            "majors": [
                "CS",
                "NLP",
                "Artificial Intelligence"
            ],
            "dates": 2011,
            "url": "http://www.keio.ac.jp"
        },
        {
            "name": "Cambridge",
            "location": "Cambridge",
            "degree": "Summer School",
            "majors": [
                "CS"
            ],
            "dates": 2009,
            "url": "http://www.keio.ac.jp"
        },
        {
            "name": "Keio",
            "location": "Tokyo",
            "degree": "Master",
            "majors": [
                "CS"
            ],
            "dates": 2013,
            "url": "http://www.keio.ac.jp"
        }
    ],
    "onlineCourses": [
        {
            "title": "CS 101",
            "school": "Stanford Online",
            "dates": 2014,
            "url": "http://stanford.com"
        }, 
        {
            "title": "Machine Learning",
            "school": "Stanford Online",
            "dates": 2015,
            "url": "http://stanford.com"            
        }
    ]
};

education.display = function() {
	if (this.schools.length > 0) {
		$("#education").append(HTMLschoolStart);

		for (var t in this.schools) {
			var s = "";
			s += HTMLschoolName.replace("%data%", this.schools[t].name);
			s += HTMLschoolDegree.replace("%data%", this.schools[t].degree);
			s += HTMLschoolDates.replace("%data%", this.schools[t].dates);
			s += HTMLschoolLocation.replace("%data%", this.schools[t].location);
			s += HTMLschoolMajor .replace("%data%", this.schools[t].majors.toString());
			$(".education-entry:last").append(s);
		}
	}

	if (this.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);

		for (var t in this.onlineCourses) {
			var s = "";
			s += HTMLonlineTitle.replace("%data%", this.onlineCourses[t].title);
			s += HTMLonlineSchool.replace("%data%", this.onlineCourses[t].school);
			s += HTMLonlineDates.replace("%data%", this.onlineCourses[t].dates);
			s += HTMLonlineURL.replace("%data%", this.onlineCourses[t].url);
			$(".education-entry:last").append(s);
		}
	}
};

/** work
    jobs: array of objects with
         employer: string 
         title: string 
         location: string 
         dates: string (works with a hyphen between them)
         description: string 
    display: function taking no parameters
**/
var work = {
    "jobs": [
        {
            "title": "Technical Account Manager",
            "employer": "Sample Company",
            "dates": "April 2013 - Current",
            "description": "Supporting large publishers in Japan, running online ad business",
            "location": "Tokyo"
        },
        {
            "title": "Network Admin",
            "employer": "Keio University",
            "dates": "April 2010 - March 2013",
            "description": "Managing network infra in University",
            "location": "Tokyo"
        }
    ]
};

work.display = function() {
	if (work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

		for (var t in work.jobs) {
			var s = "";
			s += HTMLworkEmployer.replace("%data%", work.jobs[t].employer);
			s += HTMLworkTitle.replace("%data%", work.jobs[t].position);
			s += HTMLworkDates.replace("%data%", work.jobs[t].dates);
			s += HTMLworkLocation.replace("%data%", work.jobs[t].location);
			s += HTMLworkDescription .replace("%data%", work.jobs[t].description);
			$(".work-entry:last").append(s);
		}
	}
};

/** projects 
    projects: array of objects with
          title: string 
          dates: string (works with a hyphen between them)
          description: string
          images: array with string urls
    display: function taking no parameters
**/
var projects = {
    "projects": [
        {
            "title": "Sample Project",
            "dates": "2012",
            "description": "University Project",
            "images": [
                "http://placekitten.com/g/200/300"
            ]
        }, 
        {
            "title": "Sample Project2",
            "dates": "2012",
            "description": "Udacity Project",
            "images": [
                "http://placekitten.com/g/300/200",
            ]
        }
    ]
};

projects.display = function() {
	if (projects.projects.length > 0) {
		$("#projects").append(HTMLprojectStart);

		for (var t in projects.projects) {
			var s = "";
			s += HTMLprojectTitle.replace("%data%", projects.projects[t].title);
			s += HTMLprojectDates.replace("%data%", projects.projects[t].dates);
			s += HTMLprojectDescription.replace("%data%", projects.projects[t].description);
			$(".project-entry:last").append(s);

			if (projects.projects[t].images.length > 0) {
				for (var image in projects.projects[t].images) {
					var url = HTMLprojectImage.replace("%data%", projects.projects[t].images[image]);
					$(".project-entry:last").append(url);
				}
			}
		}
	}
};

// display all elements
var elm = [work, projects, education, bio];

for (var e in elm) {
	elm[e].display();
};

// internationalizeButton
$("#main").append(internationalizeButton);

var name = bio.name;

var inName = function(oldName) {
    var finalName = oldName;
    words = name.split(" ");
    words[0] = words[0][0].toUpperCase() + words[0].slice(1).toLowerCase();
    words[1] = words[1].toUpperCase();

    finalName = words[0] + " " + words[1];
    return finalName;
}

// Google Map
$("#mapDiv").append(googleMap);
