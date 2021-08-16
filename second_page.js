Player1 = localStorage.getItem("player1");
Player2 = localStorage.getItem("player2");

Player1_score = 0;
Player2_score  = 0;

document.getElementById("player1_name").innerHTML = Player1 + " : ";
document.getElementById("player2_name").innerHTML = Player2 + " : ";

document.getElementById("player1_score").innerHTML = Player1_score;
document.getElementById("player2_score").innerHTML = Player2_score;

document.getElementById("player_question").innerHTML = "Question turn : " + Player1;
document.getElementById("player_answer").innerHTML = "Answer turn : " + Player2; 