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


//User picks Attacker
var attackerPick = function(){

	//Whichever Pokemon not picked as Attacker go to Bench
	var benchPush = function(){
		var benched = $('#pick .character');
		benched.appendTo('#bench');
	}

	//If Bulbasaur picked as Attacker
	$('#Bulbasaur').on('click', function(){
		var attacker = $('#Bulbasaur');
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Charmander picked as Attacker
	$('#Charmander').on('click', function(){
		var attacker = $('#Charmander');
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Pikachu picked as Attacker
	$('#Pikachu').on('click', function(){
		var attacker = $('#Pikachu');
		attacker.appendTo('#attacker');
		benchPush();
	})

	//If Squirtle picked as Attacker
	$('#Squirtle').on('click', function(){
		var attacker = $('#Squirtle');
		attacker.appendTo('#attacker');
		benchPush();
	})
}

//User picks Defender
var defenderPick = function(){
	
}


//User picks Attacker
attackerPick();

//User picks Defender
defenderPick();
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
