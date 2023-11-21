# CS601_HW4

1
CS601: Module 4 Assignment

Requirements:
Using HTML 5, CSS, and JavaScript (no other languages):
1. Create an HTML form with the following form controls:
  a. text input field with a name and id value of: “firstName” (required)
    i. When you submit the form: enter your first name here
  b. text input field with a name and id value of: “lastName” (required)
    i. When you submit the form: enter your last name here
  c. text input field with a name and id of: “facilitator” (required)
    i. When you submit the form: enter your facilitator’s firstname
  d. a group of radio buttons with your choice of options
  e. a group of check boxes with your choice of values
  f. Style the page with CSS using an external style sheet.
  g. The form action should point to action=https://cs601.bu-course-examples.com/hw4/380a98f5-5191-496f-8aa1-7acc1da83cc5 using the POST method.
2. Use HTML and JavaScript to perform client-side validation based on the following specifications:
  a. Validate both firstName and lastName to ensure:
    i. a minimum length of two (2) characters
    ii. that only alpha characters are used (A-Z and a-z)
  b. Validate facilitator and constrain the possible valid values to be those of the active facilitators for the course during this semester. For example, if we have facilitators with the following first names: “Jen”, “Behdad”, “Chris”, “Christian”, and “Josh” you will nsure that only these values would pass validation
    i. Jen OR Behdad OR Chris OR Christian OR Josh
c. facilitator is a text input, don’t change this into a select or any other type of input.
d. The form should not be permitted to submit unless all fields pass validation.

When you submit your form, you will be taken to a page, and you will be able to
see if your form submission went through successfully or if there was a problem
that needs to be fixed first. The first three field values (firstName, lastName,
and facilitator) that you enter will be recorded in a database on the server.
By including your first name, last name, and facilitator’s name, we will know that
your form worked correctly. And yes, you can test the form submission as much
as you would like, we will remove your duplicate entries from the database
