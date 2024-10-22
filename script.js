const assignments = [
    { name: "Lab Assignment 1", url: "assignment1.html" },
    { name: "Lab Assignment 2", url: "assignment2.html" },
    { name: "Lab Assignment 3", url: "assignment3.html" }
  { name: "Lab Assignment 4", url: "assignment4.html" }
{ name: "Lab Assignment 5", url: "assignment5.html" }  
{ name: "Lab Assignment 6", url: "assignment6.html" }
{ name: "Lab Assignment 7", url: "assignment7.html" }
{ name: "Lab Assignment 8", url: "assignment8.html" }
];

const assignmentList = document.getElementById('assignment-list');

assignments.forEach(assignment => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = assignment.name;
    a.href = assignment.url;
    li.appendChild(a);
    assignmentList.appendChild(li);
});
