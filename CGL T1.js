for(var totalMarks=0,s=0;s<4;s++){for(var right=0,notAttempted=0,bonus=0,i=25*s;i<25*s+25;i++){" -- "===document.getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[5].textContent&&notAttempted++;try{document.getElementsByClassName("question-pnl")[i].getElementsByClassName("rightAns")[0].textContent[0]===document.getElementsByClassName("question-pnl")[i].getElementsByClassName("bold")[5].textContent&&right++}catch{bonus++}}wrong=25-notAttempted-right-bonus,marks=2*(right+bonus)-.5*wrong,totalMarks+=marks;var sub=s+1;const sublist=["Reasoning","General Awareness","Quantitative Aptitude","English"];console.log("Subject: "+sublist[sub-1]+"\nAttempted : "+(25-notAttempted)+"\nRight Answers : "+right+"\nWrong Answers : "+wrong+"\nBonus : "+bonus+"\nMarks : "+marks)}console.log("\nTotal Marks : "+totalMarks);

/* CGL T2 

var right = 0;
var notAttempted = 0;
for (var i = 0; i < 130; i++) {
    try{
    if (document.getElementsByClassName('question-pnl')[i].getElementsByClassName("bold")[5].textContent === ' -- ') {
        notAttempted++;
    }
    else if (document.getElementsByClassName('question-pnl')[i].getElementsByClassName("rightAns")[0].textContent[0] == document.getElementsByClassName('question-pnl')[i].getElementsByClassName("bold")[5].textContent) {
        right++;
    }
}catch(e){
    console.log(e)
}
}
    
wrong = 130 - notAttempted - right;
marks = right * 3 - wrong * 1;
console.log("Attempted : " + (130 - notAttempted) + "\nRight Answers : " + right + "\nWrong Answers : " + wrong + "\nMarks : " + marks);

*/