# Lucky Number Even - A Coding Project
A JavaScript program that displays numbers from 0 to 100 while highlighting even numbers.

# Live Demo
https://jorysmith.github.io/LuckyNumberEven/

# Description
The code is structured in three functions: getValues(), generateNumbers(), and displayNumbers().

The program begins by activating an eventListener on the "Run Loop" button. Once clicked, the getValues() function is called. This function extracts the first and second input values and ensures the input values are stored as integers by using parseInt(). Then validation is performed to ensure the input values were successfully stored as integers. If validation succeeds, the generateNumbers() function is called with both values passed as parameters. 

generateNumbers() takes these parameters, the start and end values, and runs a for loop, pushing each number to an array that is returned once the loop is complete. 

Next, displayNumbers() is called with the new array of numbers passed in as a parameter. Another for loop is run, first storing each index's value, then checking to see if the value is even. If the number is even, the "even" string is assigned to the variable class, which is created in CSS and will be used later. Then a variable is created to store a new table row and table data elements for each value using template literals, which applies the className variable. Finally, this new table row is injected into the DOM by updating the Results section.

The result is now viewable on the page with each value getting its own row and even numbers in bold font weight.
