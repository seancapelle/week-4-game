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
var bulbHP = 90;
var bulbAttack = 20;
document.querySelector('#bulbHP').innerHTML = bulbHP;
document.querySelector('#bulbAttack').innerHTML = bulbAttack;

//Charmander stats
var charHP = 80;
var charAttack = 30;
document.querySelector('#charHP').innerHTML = charHP;
document.querySelector('#charAttack').innerHTML = charAttack;

//Pikachu stats
var pikHP = 70;
var pikAttack = 40;
document.querySelector('#pikHP').innerHTML = pikHP;
document.querySelector('#pikAttack').innerHTML = pikAttack;

//Squirtle stats
var squirtHP = 100;
var squirtAttack = 10;
document.querySelector('#squirtHP').innerHTML = squirtHP;
document.querySelector('#squirtAttack').innerHTML = squirtAttack;


//Attacker stats
var attackerName = [];
var attackerHP = 0;
var attackerAttack = 0;
var attackerArray = [];
var attackerHPArray = [];
var attackerAttackArray = [];
var attackerHurt = [];

//Defender stats
var defenderName = [];
var defenderHP = 0;
var defenderAttack = 0;
var defenderArray = [];
var defenderHPArray = [];
var defenderAttackArray = [];
var defenderHurt = [];

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
	var bulbHP = 90;
	var bulbAttack = 20;
	document.querySelector('#bulbHP').innerHTML = bulbHP;
	document.querySelector('#bulbAttack').innerHTML = bulbAttack;
	var charHP = 80;
	var charAttack = 30;
	document.querySelector('#charHP').innerHTML = charHP;
	document.querySelector('#charAttack').innerHTML = charAttack;
	var pikHP = 70;
	var pikAttack = 40;
	document.querySelector('#pikHP').innerHTML = pikHP;
	document.querySelector('#pikAttack').innerHTML = pikAttack;
	var squirtHP = 100;
	var squirtAttack = 10;
	document.querySelector('#squirtHP').innerHTML = squirtHP;
	document.querySelector('#squirtAttack').innerHTML = squirtAttack;

	//Zero out arrays
	attackerName = 0;
	attackerArray = 0;
	attackerHPArray = 0;
	attackerAttackArray = 0;
	attackerHurt = 0;

	defenderName = 0;
	defenderArray = 0;
	defenderHPArray = 0;
	defenderAttackArray = 0;
	defenderHurt = 0;
	
	//Start over
	attackerPick();
	})

//When Defender is defeated
var nextDefender = function(){
	console.log("In nextDefender");
	
}

//When Defender attacked
var defendMode = function(attackerAttack){

	console.log("In defendMode, this is defenderHurt " + defenderHurt[0]);
	defenderHP = defenderHPArray[0];
	defenderAttack = defenderAttackArray[0];

	var lifeTotal =  defenderHP - attackerAttack;
	
	defenderHPArray.splice(0,1,lifeTotal);
	document.querySelector(defenderArray[0]).innerHTML = lifeTotal;
	
	//defenderArray[0]

	defenderAttack +=2;

	defenderAttackArray.splice(0,1,defenderAttack);
	document.querySelector(defenderHurt[0]) = defenderAttack;

	$('#console').append("<p>" + defenderName[0] + " hit back with " + defenderAttack + " damage!</p>");

	if(lifeTotal < 1){

		$('#defender .profile').remove();
		defenderArray = 0;
		defenderHPArray = 0;
		defenderAttackArray = 0;

		//Pick new Defender
		nextDefender();
	}

	attackMode();
}

//How User attacks
var attackMode = function(){
	attackerAttack = attackerAttackArray[0];

	// $("#console").clear();
	$('#console').append("Click Attack!");

	//Attack button clicked
	$('#attackButton').on('click', function(){
		attackerAttack +=2
		document.querySelector(attackerArray[0]).innerHTML = attackerAttack;

		//$("#attack .profile").animate({left: '250px'});
		
		// $("#console").clear();
		$('#console').append("<p>" + attackerName[0] + " hit " + defenderName[0] + " for " + attackerAttack + " damage!</p>");

		// attackMode.delay(1000);
		
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
		attackerAttackArray.push(bulbAttack);
		attackerArray.push('#bulbAttack');
		attackerHPArray.push(bulbHP);
		attackerHurt.push('#bulbHP');
		
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked " + attackerName[0] + "!</p>");
		
		benchPush();
	})

	//If Charmander picked as Attacker
	$('#Charmander').on('click', function(){
		var attacker = $('#Charmander');
		attackerName.push("Charmander");
		attackerAttackArray.push(charAttack);
		attackerArray.push('#charAttack');
		attackerHPArray.push(charHP);
		attackerHurt.push('#charHP');
		
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked " + attackerName[0] + "!</p>");
		
		benchPush();
	})

	//If Pikachu picked as Attacker
	$('#Pikachu').on('click', function(){
		var attacker = $('#Pikachu');
		attackerName.push("Pikachu");
		attackerAttackArray.push(pikAttack);
		attackerArray.push('#pikAttack');
		attackerHPArray.push(pikHP);
		attackerHurt.push('#pikHP');
		
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked " + attackerName[0] + "!</p>");
		
		benchPush();
	})

	//If Squirtle picked as Attacker
	$('#Squirtle').on('click', function(){
		var attacker = $('#Squirtle');
		attackerName.push("Squirtle");
		attackerAttackArray.push(squirtAttack);
		attackerArray.push('#squirtAttack');
		attackerHPArray.push(squirtHP);
		attackerHurt.push('#squirtHP');
		
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked " + attackerName[0] + "!</p>");
		
		benchPush();
	})
}

//User picks Defender
var defenderPick = function(){

	//NEED TO PAUSE HERE!!!
	$('#console').append("<p>Who will " + attackerName[0] + " fight?</p>")

	//If Bulbasaur picked as Defender
	$('#Bulbasaur').on('click', function(){
		var defender = $('#Bulbasaur');
		defenderName.push("Bulbasaur");
		defenderAttackArray.push(bulbAttack);
		defenderHurt.push('#bulbAttack');
		defenderHPArray.push(bulbHP);
		defenderArray.push('#bulbHP');
		
		defender.appendTo('#defender');

		$('#console').empty();
		$('#console').append("<p> " + attackerName[0] + " will fight " + defenderName[0] + "!</p>");

		attackMode();
	})

	//If Charmander picked as Defender
	$('#Charmander').on('click', function(){
		var defender = $('#Charmander');
		defenderName.push("Charmander");
		defenderAttackArray.push(charAttack);
		defenderHurt.push('#charAttack');
		defenderHPArray.push(charHP);
		defenderArray.push('#charHP');
		
		defender.appendTo('#defender');

		$('#console').empty();
		$('#console').append("<p> " + attackerName[0] + " will fight " + defenderName[0] + "!</p>");

		attackMode();
	})

	//If Pikachu picked as Defender
	$('#Pikachu').on('click', function(){
		var defender = $('#Pikachu');
		defenderName.push("Pikachu");
		defenderAttackArray.push(pikAttack);
		defenderHurt.push('#pikAttack');
		defenderHPArray.push(pikHP);
		defenderArray.push('#pikHP');
		
		defender.appendTo('#defender');

		$('#console').empty();
		$('#console').append("<p> " + attackerName[0] + " will fight " + defenderName[0] + "!</p>");

		attackMode();
	})

	//If Squirtle picked as Defender
	$('#Squirtle').on('click', function(){
		var defender = $('#Squirtle');
		defenderName.push("Squirtle");
		defenderAttackArray.push(squirtAttack);
		defenderHurt.push('#squirtAttack');
		defenderHPArray.push(squirtHP);
		defenderArray.push('#squirtHP');
		
		defender.appendTo('#defender');

		$('#console').empty();
		$('#console').append("<p> " + attackerName[0] + " will fight " + defenderName[0] + "!</p>");

		attackMode();
	})
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
