console.log('Scripts loaded!');

const myFullName = "Dhruv Satasiya";

const myStudentNumber = 1156460;

const fullString = `${myFullName}-${myStudentNumber}`;    // use of template literals...


const resultsDiv = document.querySelector('#results');
resultsDiv.innerHTML = `
    <div class="container card mt-4">
       <h1 class="classList."><strong>${fullString}</strong></h1>
    </div>
`;
