/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
/**
*filename: app.js
*
@author Nidhi Thakkar
@date 10/06/2016
*
*student id:300872151
*website  
@description This is the main java script file for the website.
*/
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");
    paragraphElements[3] = document.getElementById("paragraphFour");
    
    // define your paragraphs array;
    var paragraphs = [];

    // Create a reference to the send button;
    var sendButton = document.getElementById("sendButton");
    sendButton.addEventListener("click",function(event) {
        event.preventDefault
    });
    
    // data for my pages
    paragraphs[0] = "Hello I am Nidhi Thakkar.I am studying Software Engeering Technology at Centennial College progress campus.My mission is to  build a network of companies related to software, which will contribute to the development and wide spread usage of the company's software packages..for this mission i have come to canada leaving back my home country ";
    paragraphs[1] = "My hobby is to play volleyball.In my school days i played a lot.I even got a change to play in the inter school competition.However, thesedays i do not get time to play but would continue in future.My favourite volleyball player is Jimmy George. He is the first Indian volleyball player to become a professional and played club volleyball in Italy  ";
    paragraphs[2] = "Secondly i am fond of travelling .Travelling helps me connect with new people, which helps to improve my interpersonal skills.For a year full of work, projects, ratings, traffic, tensions travel is like a fresh dose of much needed oxygen!";
    paragraphs[3]="I am too much fond of doing volunteer service.In my hometown there were too many people who did not even get meal.This was the reason i joined a campaign called change vadodara campaign esspecially to educate children and provide proper food to needy people.I did this work with full love and devotion"
    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();