var express = require('express');
var router = express.Router();



function definifunc()
{
  return [
    {
    id:1,
    term:"DEVOPS",
    definition:'DevOps is a set of practices, tools, and a cultural philosophy that automate and integrate the processes between software development and IT teams.',
    reference:'Atlassian (2016). What is DevOps? | Atlassian. [online] Atlassian. Available at: https://www.atlassian.com/devops.'
  },
  {
    id:2,
    term:"Microservices",
    definition:'Micro service is an architectural and organisational approach to software development where the application is divided into small individual components or services which communicate over api’s.',
    reference:'AWS (2019). What are Microservices? | AWS. [online] Amazon Web Services, Inc. Available at: https://aws.amazon.com/microservices/.'
  }, {
    id:3,
    term:"Sprint",
    definition:'Sprint is a time period typically between one week to a month where the product owner scrum master and the team work together to fix bugs or add new feature to a product  ',
    reference:'SearchSoftwareQuality. (n.d.). What is a Sprint (Agile Software Development)? Definition from WhatIs.com. [online] Available at: https://www.techtarget.com/searchsoftwarequality/definition/Scrum-sprint#:~:text=Sprints%20are%20time%2Dboxed%20periods.'
  },
  {
    id:4,
    term:"Scrum",
    definition:'Scrum is an agile project management framework which helps teams organizing and overseeing their work through a set of values , principles and practices',
    reference:'DRUMOND, C. (2018). Scrum - what it is, how it works, and why it’s awesome. [online] Atlassian. Available at: https://www.atlassian.com/agile/scrum.'
  },
  {
    id:5,
    term:"Waterfall Model",
    definition:'Waterfall Model is alinear project management approach where the stakeholders and customer requirements are gatheread in the begining then then a project plan is created to meet those requirements. Waterfall Model has five phases namely requirements,design, implement,testing and maintenance. One phase must be completed before moving on to the next phase .',
    reference:'ProjectManager (2022). Waterfall Methodology. [online] ProjectManager. Available at: https://www.projectmanager.com/guides/waterfall-methodology.'
  },
  {
    id:6,
    term:"Agile Methedology ",
    definition:'It is a Project Management approach that involves breaking the project into phases and emphasizes on continuos collaboration and improvements, teams follow a cycle of planning executing and evaluating',
    reference:'Atlassian (2019). Agile best practices and tutorials | Atlassian. [online] Atlassian. Available at: https://www.atlassian.com/agile.'
  },
  {
    id:7,
    term:"Cloud Data Migration",
    definition:'It is a process of moving an organizations applications,data,infrastructure security and other objects to a cloud computing environment ',
    reference:'Google Cloud. (n.d.). What Is Cloud Migration? [online] Available at: https://cloud.google.com/learn/cloud-migration.'
  },
  {
    id:8,
    term:"Hotfix",
    definition:'Hotfix is a quick correction to address bugs or defetcs typically bypassing the normal software development life cycle (SDLC). They are typically applied to high priority bugs that require immediate correction.',
    reference:'Applause. (n.d.). What Is a Hotfix? Software Patches Explained. [online] Available at: https://www.applause.com/blog/what-is-hotfix-software-patches-explained.'
  },
  {
    id:9,
    term:"CI/CD",
    definition:'CI/CD is a way of building and updating software in a smart and efficient manner. It uses automation to make sure that new updates to the software are tested thoroughly and delivered to users regularly and reliably. This process involves three main ideas: putting together changes made by different developers seamlessly (continuous integration), delivering those changes to users smoothly (continuous delivery), and automatically releasing updates to users without much manual intervention (continuous deployment). This helps software teams work faster and deliver better products to users ',
    reference:'www.redhat.com. (n.d.). What is CI/CD? [online] Available at: https://www.redhat.com/en/topics/devops/what-is-ci-cd?sc_cid=7013a000003Sd9rAAC&gclid=CjwKCAjwlJimBhAsEiwA1hrp5mI_OGITcCNe-JQWrMKuOVs_5QSNr9PF1HcnRDUgUlT5dudXPuB2PRoC9T4QAvD_BwE .'
  },
  {
    id:10,
    term:"Techinal Debt",
    definition:'It is a result when the development team expedites delivering a peice of code which needs to be refactored later on , in other words priorotizing speed delivery over a perfect peice of code  ',
    reference:'www.productplan.com. (n.d.). What Is Technical Debt? | Definition and Examples. [online] Available at: https://www.productplan.com/glossary/technical-debt/.'
  },
  {
    id:11,
    term:"Team Capacity",
    definition:'It is the total amount of work a team can sustain over a period of time',
    reference:'Adeva. (n.d.). Team Capacity Planning In Scrum Teams: [online] Available at: https://adevait.com/blog/agile-work/how-to-do-agile-capacity-planning .'
  },
  {
    id:12,
    term:"Behaviour Driven Design",
    definition:'It is a result when the development team expedites delivering a peice of code which needs to be refactored later on , in other words priorotizing speed delivery over a perfect peice of code  ',
    reference:'www.productplan.com. (n.d.). What Is Technical Debt? | Definition and Examples. [online] Available at: https://www.productplan.com/glossary/technical-debt/.'
  },
   {
    id:13,
    term:"Test Driven Design",
    definition:'Test-Driven Design is a software development practice where tests for a specific functionality are written before writing the code to implement that functionality. The process begins by writing a failing test, then writing code to make that test pass, and finally refactoring the code to meet quality standards. This process is often repeated in short development cycles',
    reference:'www.pluralsight.com. (n.d.). TDD vs BDD: What’s the difference? | Pluralsight. [online] Available at: https://www.pluralsight.com/blog/software-development/tdd-vs-bdd.'
  },
   {
    id:14,
    term:"Behaviour Driven Design",
    definition:'Behaviour Driven Design is an Agile software development process that encourages collaboration between developers, QA and non-technical or business participants in a software project. It emphasizes the use of a specific language (usually English-like) to describe the behaviour of the system from the users perspective, which helps to clarify the systems behaviour, and the requirements to be implemented. BDD extends TDD by writing test cases in a natural language that non-programmers and domain experts can read',
    reference:'www.pluralsight.com. (n.d.). TDD vs BDD: What’s the difference? | Pluralsight. [online] Available at: https://www.pluralsight.com/blog/software-development/tdd-vs-bdd.'
  },
   {
    id:15,
    term:"Paired Programming",
    definition:'It is a practice where two develpers work on the same peice of code so that they can review them on the go.',
    reference:'Wikipedia. (2020). Pair programming. [online] Available at: https://en.wikipedia.org/wiki/Pair_programming.'
  },
   {
    id:16,
    term:"Kanban",
    definition:'Kanban is a visual management framework which uses a board to represnt the work that is being done thus promoting transperancy and collaboration.',
    reference:'Radigan, D. (2022). What is kanban? [online] Atlassian. Available at: https://www.atlassian.com/agile/kanban.'
  },
   {
    id:17,
    term:"Epic",
    definition:'Epic is a Set of work that can be developed into a story that a scrum team can pick up to develop of fix over a sprint ',
    reference:'www.knowledgehut.com. (n.d.). Here’s what Subject experts say about an Epic in Agile. [online] Available at: https://www.knowledgehut.com/blog/agile/what-is-an-epic-agile.1'
  },
  {
    id:18,
    term:"Continuous Delivery",
    definition:'It is a Software Engineering approach where the application is developed in short cycles enabling the teams tto release a version of the software at regular intervals ',
    reference:'Amazon Web Services, Inc. (n.d.). What is Continuous Delivery? – Amazon Web Services. [online] Available at: https://aws.amazon.com/devops/continuous-delivery/.'
  },
  {
    id:19,
    term:"Continuous Deployment",
    definition:'It is a practice where any change or update on an application that passes the necessary build quaity tests it s released to the customer without the need of an uman approval or intervention',
    reference:'Atlassian (2019). Continuous integration vs. continuous delivery vs. continuous deployment. [online] Atlassian. Available at: https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment.'
  },
  {
    id:20,
    term:"Continuous Integration",
    definition:'It is a software engineering [ractice where the developer working on a feture trie to merge his code to the main branc as often as possible . The changes are validated by creating a build and running a automated tests agains that build',
    reference:'Atlassian (2019). Continuous integration vs. continuous delivery vs. continuous deployment. [online] Atlassian. Available at: https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment.'
  },
  {
    id: 21,
    term: "Registry",
    definition: 'A Docker registry is a system for storing and distributing Docker images with specific names.',
    reference: 'GeeksforGeeks. (2022). What is Docker Registry? [online] Available at: https://www.geeksforgeeks.org/what-is-docker-registry/.'
  },
  {
    id: 22,
    term: "Container",
    definition: 'A Docker container is a lightweight, standalone package that includes all the necessary components to run an application, enabling consistent and portable deployment across different environments',
    reference: 'Docker Documentation. (2020). Glossary. [online] Available at: https://docs.docker.com/glossary/.'
  },
  {
    id: 23,
    term: "Rollback",
    definition: 'It is the process of returning a machine to its previous state.',
    reference: 'www.computerhope.com. (n.d.). What is a Rollback? [online] Available at: https://www.computerhope.com/jargon/r/rollback.htm.'
  },
  {
    id: 24,
    term: "Backword Compatibality",
    definition: 'Backward compatibility means that when you update or upgrade a software or system to a newer version, it should still be able to run older stuff without causing problems, so you dont have to start from scratch.',
    reference: 'www.computerhope.com. (n.d.). What is Backward Compatible? [online] Available at: https://www.computerhope.com/jargon/b/backcomp.htm'
  },
  {
    id: 25,
    term: "Virtual Machine",
    definition: 'A virtual machine is like a computer within your computer. Its a software-based environment that lets you run multiple separate operating systems and applications on the same physical computer, as if they were individual computers themselves',
    reference: 'VMware. (2022). What is a Virtual Machine? | VMware Glossary. [online] Available at: https://www.vmware.com/au/topics/glossary/content/virtual-machine.html.'
  },
  {
    id: 26,
    term: "Docker Image",
    definition: 'A Docker image is similar to a snapshot of your computer setup. Its a prepackaged and portable snapshot of an application, along with all its dependencies and configuration, ready to run consistently on different computers or environments. Just like you can take that snapshot and use it on another computer, Docker images let you run your application in the same way on various systems, making deployment and scaling easier and more predictable',
    reference: 'Docker Documentation. (2020). Glossary. [online] Available at: https://docs.docker.com/glossary/.'
  },
  {
    id: 27,
    term: "Unit Test",
    definition: 'Unit testing is like checking the individual pieces of a puzzle to make sure each one fits perfectly before putting the whole puzzle together. In software, it means testing small parts of a program to make sure they work correctly on their own, helping ensure the entire program will work smoothly when everything is combined',
    reference: 'Smartbear (2022). What Is Unit Testing? [online] smartbear.com. Available at: https://smartbear.com/learn/automated-testing/what-is-unit-testing/.'
  },
  {
    id: 28,
    term: "Regression test",
    definition: 'Regression testing is like double-checking your work after making changes to a document. It involves retesting the parts of a software program that were already working well to make sure they still work correctly after new updates or changes have been made. This helps ensure that recent changes havent unintentionally broken any previously working features',
    reference: 'katalon.com. (n.d.). What is Regression Testing? Definition, Tools & How to Get Started. [online] Available at: https://katalon.com/resources-center/blog/regression-testing.'
  },
  {
    id: 29,
    term: "Integratiopn Testing",
    definition: 'Integration testing is like checking how different parts of a machine work together. In software, its about testing how various components or modules of a program interact with each other to ensure they collaborate correctly and that the entire system functions smoothly when integrated',
    reference: 'Terra, J. (2022). What is Integration Testing? Examples, Challenges, and Approaches | Simplilearn. [online] Simplilearn.com. Available at: https://www.simplilearn.com/what-is-integration-testing-examples-challenges-approaches-article.'
  },
  {
    id: 30,
    term: "Smoke Testing ",
    definition: 'Smoke testing is like quickly sniffing a dish to see if its cooked before diving into a meal. In software, its a simple, preliminary test to make sure the basic functions of a program are working correctly after changes or updates have been made. Its like a quick check to catch any obvious issues before going deeper into more detailed testing',
    reference: 'www.guru99.com. (n.d.). What is Smoke Testing? How to do with EXAMPLES. [online] Available at: https://www.guru99.com/smoke-testing.html.'
  }
];
}

const definitions=definifunc();
console.log(definitions);




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SIT722 Devops Glossary',
    subtitle:'Welcome to my website where we have some DEVOPS terms and their meaning',
    data:definitions 
  });
});

module.exports = router;
