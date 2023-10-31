function calculateMarks() {
    let marks = 0;

    // Academic - 10th Percentage
    let tenthPerc = parseFloat(document.getElementById('tenthPerc').value);
    if (tenthPerc >= 85) marks += 9;
    else if (tenthPerc >= 75) marks += 8;
    else if (tenthPerc >= 65) marks += 7;
    else if (tenthPerc >= 50) marks += 5;
    else if (tenthPerc < 50) marks += 2;

    // Academic - 12th Percentage
    let twelfthPerc = parseFloat(document.getElementById('twelfthPerc').value);
    if (twelfthPerc >= 85) marks += 9;
    else if (twelfthPerc >= 75) marks += 8;
    else if (twelfthPerc >= 65) marks += 7;
    else if (twelfthPerc >= 50) marks += 5;
    else if (twelfthPerc < 50) marks += 2;

    // Academic - Bachelors Percentage
    let bachelorsPerc = parseFloat(document.getElementById('bachelorsPerc').value);
    if (bachelorsPerc >= 90) marks += 24;
    else if (bachelorsPerc >= 80) marks += 22;
    else if (bachelorsPerc >= 65) marks += 17;
    else if (bachelorsPerc >= 50) marks += 12;
    else if (bachelorsPerc < 50) marks += 7;

    // Academic - Masters Percentage
    let mastersPerc = parseFloat(document.getElementById('mastersPerc').value);
    if (mastersPerc >= 90) marks += 30;
    else if (mastersPerc >= 80) marks += 27;
    else if (mastersPerc >= 65) marks += 22;
    else if (mastersPerc >= 55 && mastersPerc < 65) marks += 17;

    // Rest of the logic remains the same
    // ...

    // Display the result
   

    // Research
    if (document.getElementById('phd').checked) marks += 13;
    if (document.getElementById('mphil').checked) marks += 2;

    let ugcPapers = document.getElementById('ugcPapers').value;
    marks += Math.min(ugcPapers * 0.5, 2);

    let scopusPapers = document.getElementById('scopusPapers').value;
    marks += Math.min(scopusPapers, 2);

    let bookChapters = document.getElementById('bookChapters').value;
    marks += Math.min(bookChapters * 0.5, 1);

    // Other Experience
    let teachingExp = document.getElementById('teachingExp').value;
    if (teachingExp >= 1) {
        marks += Math.min(teachingExp, 2);
    } else if (teachingExp >= (3 / 12)) {
        marks += teachingExp; // Add proportionate marks if needed
    }

    if (document.getElementById('nccC').checked) marks += 1;
    if (document.getElementById('goldMedal').checked) marks += 1;
    if (document.getElementById('sportRep').checked) marks += 1;

    // Display the result
    document.getElementById('result').innerText = "Your total marks are: " + marks;
}
