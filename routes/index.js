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
