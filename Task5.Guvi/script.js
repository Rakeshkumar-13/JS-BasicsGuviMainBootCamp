//Resume data in JSON format
  
{
    "name": "Rakesh",
    "title": "Software Developer",
    "contact": {
      "email": "rkshjab@gmail.com",
      "phone": "9840250488",
      "location": "chennai.TN"
    },
    "education": [
      {
        "degree": "Bachelor of Technology in Electronics and communication Engg",
        "school": "MGR University",
        "year": 2019
      },
      {
        "degree": "Master of Science in computer science",
        "school": "University Of Lincoln",
        "year": 2022
      }
    ],
    "experience": [
      {
        "position": "Software Developer",
        "company": "Tech Solutions Inc.",
        "year": "2019-2020",
        "responsibilities": ["Developed and maintained web applications", "Collaborated with cross-functional teams"]
      },
      {
        "position": "Full Stack developer",
        "company": "Guvi",
        "year": "2024",
        "responsibilities": ["Learning", "Coding"]
      }
    ],
    "skills": ["JavaScript", "React", "Node.js", "HTML", "CSS", "Git"],
    "languages": ["English", "Tamil"]
  }

  
  
  //Iterating over all for loops (for, for in, for of, forEach) for the above JSON

  //For loop:

  const resumeData = /* your JSON data */;

for (let i = 0; i < resumeData.education.length; i++) {
  console.log("Education:", resumeData.education[i].degree);
}

for (let i = 0; i < resumeData.experience.length; i++) {
  console.log("Experience:", resumeData.experience[i].position);
}

for (let i = 0; i < resumeData.skills.length; i++) {
  console.log("Skill:", resumeData.skills[i]);
}


//For-in loop:

for (const key in resumeData.contact) {
    console.log(`${key}: ${resumeData.contact[key]}`);
  }
  
  for (const education of resumeData.education) {
    console.log("Education:", education.degree);
  }
  
  for (const experience of resumeData.experience) {
    console.log("Experience:", experience.position);
  }
  
  for (const skill of resumeData.skills) {
    console.log("Skill:", skill);
  }

  //For-of loop:

  for (const education of resumeData.education) {
    console.log("Education:", education.degree);
  }
  
  for (const experience of resumeData.experience) {
    console.log("Experience:", experience.position);
  }
  
  for (const skill of resumeData.skills) {
    console.log("Skill:", skill);
  }

  
//For Each

Object.entries(resumeData.contact).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
  
  resumeData.education.forEach(education => {
    console.log("Education:", education.degree);
  });
  
  resumeData.experience.forEach(experience => {
    console.log("Experience:", experience.position);
  });
  
  resumeData.skills.forEach(skill => {
    console.log("Skill:", skill);
  });
  