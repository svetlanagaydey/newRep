let grade = prompt('Enter you grade, please!');
function gradeAssigner(grade) {
    
    if (grade < 65) {
        console.log('F');
    } else if (65 <= grade <=69) {
        console.log ('D');
    } else if (70 <= grade <= 79){
        console.log('C');
    } else if (80 <= grade <= 89) {
        console.log('B')
    } else if (90 <= grade <=100) {
        console.log('A')
    }
}
gradeAssigner(grade);