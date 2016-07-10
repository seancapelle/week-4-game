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

//Character stats
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

var squirtHP = 40;
var squirtAttack = 10;
document.querySelector('#squirtHP').innerHTML = squirtHP;
document.querySelector('#squirtAttack').innerHTML = squirtAttack;


//Attacker stats
var attackerHP = 0;
var attackerAttack = 0;
var attackerArray = [];
var attackerHPArray = [];
var attackerAttackArray = [];

//Defender stats
var defenderHP = 0;
var defenderAttack = 0;
var defenderArray = [];
var defenderHPArray = [];
var defenderAttackArray = [];


//How User attacks
var attackMode = function(){
	attackerAttack = attackerAttackArray[0];

	$('#attack').on('click', function(){
		attackerAttack +=5;
		document.querySelector(attackerArray[0]).innerHTML = attackerAttack;
		console.log("attackerAttack = " + attackerAttack);
	})
}

//User picks Attacker
var attackerPick = function(){

	//Whichever Pokemon not picked as Attacker go to Bench
	var benchPush = function(){
		var benched = $('#pick .profile');
		benched.appendTo('#bench');

		//User then picks Defender
		defenderPick();
	}

	//If Bulbasaur picked as Attacker
	$('#Bulbasaur').on('click', function(){
		var attacker = $('#Bulbasaur');
		attackerArray.push('#bulbAttack');
		attackerHPArray.push(bulbHP);
		attackerAttackArray.push(bulbAttack);
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Charmander picked as Attacker
	$('#Charmander').on('click', function(){
		var attacker = $('#Charmander');
		attackerArray.push('#charAttack');
		attackerHPArray.push(charHP);
		attackerAttackArray.push(charAttack);
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Pikachu picked as Attacker
	$('#Pikachu').on('click', function(){
		var attacker = $('#Pikachu');
		attackerArray.push('#pikAttack');
		attackerHPArray.push(pikHP);
		attackerAttackArray.push(pikAttack);
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Squirtle picked as Attacker
	$('#Squirtle').on('click', function(){
		var attacker = $('#Squirtle');
		attackerArray.push('#squirtAttack');
		attackerHPArray.push(squirtHP);
		attackerAttackArray.push(squirtAttack);
		attacker.appendTo('#attacker');
		benchPush();
	})
}

//User picks Defender
var defenderPick = function(){

	//If Bulbasaur picked as Defender
	$('#Bulbasaur').on('click', function(){
		var defender = $('#Bulbasaur.profile');
		defenderHP = bulbHP;
		defenderAttack = bulbAttack;
		defender.appendTo('#defender');
	})

	//If Charmander picked as Defender
	$('#Charmander').on('click', function(){
		var defender = $('#Charmander');
		defenderHP = charHP;
		defenderAttack = charAttack;
		defender.appendTo('#defender');
	})

	//If Pikachu picked as Defender
	$('#Pikachu').on('click', function(){
		var defender = $('#Pikachu');
		defenderHP = pikHP;
		defenderAttack = pikAttack;
		defender.appendTo('#defender');
	})

	//If Squirtle picked as Defender
	$('#Squirtle').on('click', function(){
		var defender = $('#Squirtle');
		defenderHP = squirtHP;
		defenderAttack = squirtAttack;
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
