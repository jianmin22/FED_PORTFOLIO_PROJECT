"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   CA2 Assignment

   Table for Career option
   Author: Soh Jian Min
   Date:  04 August 2022

   Filename:   table.js
*/

/* Write the table to the element with the "table1"*/ 
document.getElementById("table1").innerHTML = createTable();

/* Function to generate the table*/ 
function createTable(){
    var createTableHTML = "<table class='table table-bordered' id='border'>";
    createTableHTML += "<thead>";
    createTableHTML += headerRow();
    createTableHTML += "</thead>";
    createTableHTML += "<tbody>";
    createTableHTML += bodyRow();
    createTableHTML += "</tbody>";
    createTableHTML += "<tfoot>";
    createTableHTML += footerRow();
    createTableHTML += "</tfoot>";
    createTableHTML += "</table>";
    return createTableHTML;
}

/* Function to write the header row of the table*/ 
function headerRow() {
    // Array of header elements
    var header = ["Choice", "Name of Career", "Description", "Estimated Salary"];
    var headerHTML = "<tr class='border-table' id='tablehead'>";
    // Loop through the header array
    for (var i = 0; i < header.length; i++){
        headerHTML += "<th>" + header[i] + "</th>";
     }
     headerHTML += "</tr>";

     return headerHTML;
}

/* Function to write all the array for body elements */
function rowArray(){
    var row1 = ["1", 
    "Web Development <br>(Web Programmer,Website Developer,Front End Developer)", 
    "Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.", 
    "$3000-$6500 <br>/per month"];
    var row2 = ["2",
    "UI/UX Design <br>(User Experience Designer,UI/UX Engineer,UX Researcher)",
    "UI/UX Design is the design of user interfaces for software applications and electronic devices based on its utility and user experience. It requires good understanding of users needs and focuses on helping them accomplish their goals in the simplest and most efficient manner."];
    var row3 = ["3",
    "Mobile App Development <br>(iOS App Developer,Android Software Engineer,Mobile Application Engineer)",
    "Mobile Application Development involves the design, implementation and user testing of applications on mobile devices such as mobile phones, tablets or other handheld devices."]
    var rowList = [row1, row2, row3];
    return rowList;
}

/* Function to write the body row of the table*/
function bodyRow() {
    var rowArrays = rowArray();
    var bodyRowHTML = "";
    // nested for loop for the body rows
    // Goes through the row List Array that stores all the body row array
    for (var i = 0; i < rowArrays.length; i++){
        bodyRowHTML += "<tr class='table-light border-table'>";
        // goes through all the body row array to write the body elements
        for (var j = 0; j < rowArrays[i].length; j++){
            if (j === 0){
                bodyRowHTML += "<th scope='row' class='text-center'>" + rowArrays[i][j] + "</th>"
            }
            else if(j === 3){
                bodyRowHTML += "<td rowspan='3'>" + rowArrays[i][j] + "</td>"
            }
            else{
                bodyRowHTML += "<td>" + rowArrays[i][j] + "</td>"
            }
    
        }
        bodyRowHTML += "</tr>"
    }
    return bodyRowHTML;
}

/* Function to write the footer row of the table*/
function footerRow(){
    var footerRow = ["Diploma in Information Technology fullfill the job requirements"];
    var footerRowHTML = "<tr class='border-table' id='tablefooter'>";
    footerRowHTML += "<td colspan='4'>" + footerRow[0] + "</td>";
    footerRowHTML += "</tr>"
    return footerRowHTML
}
