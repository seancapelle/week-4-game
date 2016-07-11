$(document).ready(function(){

// var names = ["Bulbasaur", "Charmander", "Pikachu", "Squirtle"];
// var images = ["assets/images/Bulbasaur.png", "assets/images/Charmander.png", "assets/images/Pikachu.png", "assets/images/Squirtle.png"];

// for (i = 0; i < names.length; i++){
// 		var character = $('<img>');
// 		character.addClass('character');
// 		character.attr('data-let', names[i]);
// 		character.attr('src', images[i]);
// 		character.text(names[i]);
// 		$('<img>').append(names[i]);
// 		$('#pick').append(character);
// }
// $('.character').on('click', function(){
// 		var attacker = $('<img>');
// 		attacker.addClass('character').text($(this).data('let'));
// 		// attacker.attr($(this).find('img'));
// 		// attacker.attr('src', images[i]);
// 		attacker.appendTo("#attacker");

// 	})

//Bulbasaur stats
var bulbHP = 100;
var bulbAttack = 10;
document.querySelector('#bulbHP').innerHTML = bulbHP;
document.querySelector('#bulbAttack').innerHTML = bulbAttack;

//Charmander stats
var charHP = 100;
var charAttack = 20;
document.querySelector('#charHP').innerHTML = charHP;
document.querySelector('#charAttack').innerHTML = charAttack;

//Pikachu stats
var pikHP = 100;
var pikAttack = 30;
document.querySelector('#pikHP').innerHTML = pikHP;
document.querySelector('#pikAttack').innerHTML = pikAttack;

//Squirtle stats
var squirtHP = 100;
var squirtAttack = 40;
document.querySelector('#squirtHP').innerHTML = squirtHP;
document.querySelector('#squirtAttack').innerHTML = squirtAttack;


//Attacker stats
var attackerName = [];
var attackerHP = 0;
var attackerAttack = 0;
var attackerArray = [];
var attackerHPArray = [];
var attackerAttackArray = [];

//Defender stats
var defenderName = [];
var defenderHP = 0;
var defenderAttack = 0;
var defenderArray = [];
var defenderHPArray = [];
var defenderAttackArray = [];


// var attack = 0;

//Reset button
$('#resetButton').on('click', function(){
	
	$('#console').empty();
	$('#console').append("<p>Reset!</p>");
	
	//Reset characters to #Pick
	var bulbReset = $('#Bulbasaur');
	bulbReset.appendTo("#pick");
	var charReset = $('#Charmander');
	charReset.appendTo("#pick");
	var pikReset = $('#Pikachu');
	pikReset.appendTo("#pick");
	var squirtReset = $('#Squirtle');
	squirtReset.appendTo("#pick");

	//Reset stats
	var bulbHP = 100;
	var bulbAttack = 10;
	document.querySelector('#bulbHP').innerHTML = bulbHP;
	document.querySelector('#bulbAttack').innerHTML = bulbAttack;
	var charHP = 100;
	var charAttack = 20;
	document.querySelector('#charHP').innerHTML = charHP;
	document.querySelector('#charAttack').innerHTML = charAttack;
	var pikHP = 100;
	var pikAttack = 30;
	document.querySelector('#pikHP').innerHTML = pikHP;
	document.querySelector('#pikAttack').innerHTML = pikAttack;
	var squirtHP = 100;
	var squirtAttack = 40;
	document.querySelector('#squirtHP').innerHTML = squirtHP;
	document.querySelector('#squirtAttack').innerHTML = squirtAttack;

	//Zero out arrays
	attackerName = 0;
	attackerArray = 0;
	attackerHPArray = 0;
	attackerAttackArray = 0;

	defenderName = 0;
	defenderArray = 0;
	defenderHPArray = 0;
	defenderAttackArray = 0;
	
	//Start over
	attackerPick();
	})

//When Defender is defeated
var nextDefender = function(){
	console.log("In nextDefender");
	
}

//When Defender attacked
var defendMode = function(attackerAttack){
	
	//DEFENDER HP IS ALWAYS 100!!!

	defenderHP = defenderHPArray[0];
	console.log("In defendMode, defenderHP is " + defenderHP);

	var lifeTotal =  defenderHP - attackerAttack;
	document.querySelector(defenderArray[0]).innerHTML = lifeTotal;
	console.log("Defender HP is " + lifeTotal);

	if(lifeTotal < 1){

		$('#defender .profile').remove();
		defenderArray = 0;
		defenderHPArray = 0;
		defenderAttackArray = 0;

		//Pick new Defender
		nextDefender();
	}
}

//How User attacks
var attackMode = function(){
	attackerAttack = attackerAttackArray[0];

	// $("#console").clear();
	$('#console').append("<p>Click Attack!</p>");

	$('#attackButton').on('click', function(){
		attackerAttack +=5;
		document.querySelector(attackerArray[0]).innerHTML = attackerAttack;
		
		// $("#console").clear();
		$('#console').append(attackerName[0] + "<p> hit </p>" + defenderName[0] + "<p> for </p>" + attackerAttack + "<p> damage!</p>");

		attackMode.delay(800);
		
		defendMode(attackerAttack);
	})
}

//User picks Attacker
var attackerPick = function(){

	$('#console').append("<p>Choose your Pok&eacutemon!</p>");

	//Whichever Pokemon not picked as Attacker go to Bench
	var benchPush = function(){
		var benched = $('#pick .profile');
		benched.appendTo('#bench');

		// benchPush.delay(800);

		//User then picks Defender
		defenderPick();
	}

	//If Bulbasaur picked as Attacker
	$('#Bulbasaur').on('click', function(){
		var attacker = $('#Bulbasaur');
		attackerName.push("Bulbasaur");
		attackerArray.push('#bulbAttack');
		attackerHPArray.push(bulbHP);
		attackerAttackArray.push(bulbAttack);
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked </p>" + attackerName[0] + "!");
		
		benchPush();
	})

	//If Charmander picked as Attacker
	$('#Charmander').on('click', function(){
		var attacker = $('#Charmander');
		attackerName.push("Charmander");
		attackerArray.push('#charAttack');
		attackerHPArray.push(charHP);
		attackerAttackArray.push(charAttack);
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked </p>" + attackerName[0] + "!");
		
		benchPush();
	})

	//If Pikachu picked as Attacker
	$('#Pikachu').on('click', function(){
		var attacker = $('#Pikachu');
		attackerName.push("Pikachu");
		attackerArray.push('#pikAttack');
		attackerHPArray.push(pikHP);
		attackerAttackArray.push(pikAttack);
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked </p>" + attackerName[0] + "!");
		
		benchPush();
	})

	//If Squirtle picked as Attacker
	$('#Squirtle').on('click', function(){
		var attacker = $('#Squirtle');
		attackerName.push("Squirtle");
		attackerArray.push('#squirtAttack');
		attackerHPArray.push(squirtHP);
		attackerAttackArray.push(squirtAttack);
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked </p>" + attackerName[0] + "!");
		
		benchPush();
	})
}

//User picks Defender
var defenderPick = function(){

	
	$('#console').append("<p>Who will </p>" + attackerName[0] + "<p> fight?")

	// defenderPick.delay(200);

	//If Bulbasaur picked as Defender
	$('#Bulbasaur').on('click', function(){
		var defender = $('#Bulbasaur.profile');
		defenderName.push("Bulbasaur");
		defenderArray.push('#bulbHP');
		defenderHPArray.push(bulbHP);
		defenderAttackArray.push(bulbAttack);
		defender.appendTo('#defender');
	})

	//If Charmander picked as Defender
	$('#Charmander').on('click', function(){
		var defender = $('#Charmander');
		defenderName.push("Charmander");
		defenderArray.push('#charHP');
		defenderHPArray.push(charHP);
		defenderAttackArray.push(charAttack);
		defender.appendTo('#defender');
	})

	//If Pikachu picked as Defender
	$('#Pikachu').on('click', function(){
		var defender = $('#Pikachu');
		defenderName.push("Pikachu");
		defenderArray.push('#pikHP');
		defenderHPArray.push(pikHP);
		defenderAttackArray.push(pikAttack);
		defender.appendTo('#defender');
	})

	//If Squirtle picked as Defender
	$('#Squirtle').on('click', function(){
		var defender = $('#Squirtle');
		defenderName.push("Squirtle");
		defenderArray.push('#squirtHP');
		defenderHPArray.push(squirtHP);
		defenderAttackArray.push(squirtAttack);
		defender.appendTo('#defender');
	})

	attackMode();
}

//User picks Attacker/ Starts game
attackerPick();



//End below
})


//1. Use jQuery to capture HTML elements 
//2. Tie element to a jQuery method to capture events
//3. Finally, tie the element to a jQuery method to change the element


//.appendTo adds onto

//data-let

//.attr adds attribute


//var benchPick = function(){}

//$("HTML element").on("click", function(){

//})
