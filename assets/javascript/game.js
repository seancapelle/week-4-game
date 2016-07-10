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
var bulbHP = 100;
var charHP = 100;
var pikHP = 100;
var squirtHP = 100;
var attackerHP = 0;
var defenderHP = 0;
var bulbAttack = 10;
var charAttack = 10;
var pikAttack = 10;
var squirAttack = 10;
var attackerAttack = 0;
var defenderAttack = 0;

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
		attackerHP = bulbHP;
		attackerAttack = bulbAttack;
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Charmander picked as Attacker
	$('#Charmander').on('click', function(){
		var attacker = $('#Charmander');
		attackerHP = charHP;
		attackerAttack = charAttack;
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Pikachu picked as Attacker
	$('#Pikachu').on('click', function(){
		var attacker = $('#Pikachu');
		attackerHP = pikHP;
		attackerAttack = pikAttack;
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Squirtle picked as Attacker
	$('#Squirtle').on('click', function(){
		var attacker = $('#Squirtle');
		attackerHP = squirtHP;
		attackerAttack = squirAttack;
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
		defenderAttack = squirAttack;
		defender.appendTo('#defender');
	})

}

//User picks Attacker
attackerPick();
console.log(attackerHP + attackerAttack);


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
