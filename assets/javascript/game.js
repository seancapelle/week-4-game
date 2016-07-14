
//Bulbasaur stats
var bulbAttack = 6;
var bulbHP = 90;
document.querySelector('#bulbHP').innerHTML = bulbHP;
document.querySelector('#bulbAttack').innerHTML = bulbAttack;

//Charmander stats
var charAttack = 8;
var charHP = 80;
document.querySelector('#charHP').innerHTML = charHP;
document.querySelector('#charAttack').innerHTML = charAttack;

//Pikachu stats
var pikAttack = 10;
var pikHP = 70;
document.querySelector('#pikHP').innerHTML = pikHP;
document.querySelector('#pikAttack').innerHTML = pikAttack;

//Squirtle stats	
var squirtAttack = 2;
var squirtHP = 100;
document.querySelector('#squirtHP').innerHTML = squirtHP;
document.querySelector('#squirtAttack').innerHTML = squirtAttack;


//Attacker stats
var attackerName = [];
var attackerHP = 0;
var attackerAttack = 0;
var attackerArray = [];
var attackerHPArray = [];
var attackerAttackArray = [];
var attackerHP = [];

//Defender stats
var defenderName = [];
var defenderHP = 0;
var defenderAttack = 0;
var defenderArray = [];
var defenderHPArray = [];
var defenderAttackArray = [];
var defenderHP = [];


//User picks Attacker
var attackerPick = function(){

	console.log("In attackerPick");
	$('#console').append("<p>Choose your Pok&eacutemon!</p>");

	//If Bulbasaur picked as Attacker
	$('#Bulbasaur').on('click', function(){
		var attacker = $('#Bulbasaur');
		attackerName.push("Bulbasaur");
		attackerAttackArray.push(bulbAttack);
		attackerArray.push('#bulbAttack');
		attackerHPArray.push(bulbHP);
		attackerHP.push('#bulbHP');
		
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
		attackerHP.push('#charHP');
		
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
		attackerHP.push('#pikHP');
		
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
		attackerHP.push('#squirtHP');
		
		attacker.appendTo('#attacker');
		
		$('#console').empty();
		$('#console').append("<p>You picked " + attackerName[0] + "!</p>");
		
		benchPush();
	})
}

//Whichever Pokemon not picked as Attacker go to Bench
var benchPush = function(){

	console.log("In benchPush");

	var benched = $('#pick .profile');
	benched.appendTo('#bench');

	//User then picks Defender
	defenderPick();
	}

//User picks Defender
var defenderPick = function(){

	console.log("In defenderPick");

	$('#console').append("<p>Who will " + attackerName[0] + " fight?</p>")

	//If Bulbasaur picked as Defender
	$('#Bulbasaur').on('click', function(){
		var defender = $('#Bulbasaur');
		defenderName.push("Bulbasaur");
		defenderAttackArray.push(bulbAttack);
		defenderArray.push('#bulbAttack');
		defenderHPArray.push(bulbHP);
		defenderHP.push('#bulbHP');
		
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
		defenderArray.push('#charAttack');
		defenderHPArray.push(charHP);
		defenderHP.push('#charHP');

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
		defenderArray.push('#pikAttack');
		defenderHPArray.push(pikHP);
		defenderHP.push('#pikHP');
		
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
		defenderArray.push('#squirtAttack');
		defenderHPArray.push(squirtHP);
		defenderHP.push('#squirtHP');
		
		defender.appendTo('#defender');

		$('#console').empty();
		$('#console').append("<p> " + attackerName[0] + " will fight " + defenderName[0] + "!</p>");

		attackMode();
	})
}

//How User attacks
var attackMode = function(){

	console.log("In attackMode");
	
	//Set attack values equal to the character stats
	attackerAttack = attackerAttackArray[0];
	defenderAttack = defenderAttackArray[0];

	// $("#console").clear();
	$('#console').append("Click Attack!");

	//Attack button clicked
	$('#attackButton').on('click', function(){
		
		$('#console').empty();

		//Increase attack
		attackerAttack +=2;
		document.querySelector(attackerArray[0]).innerHTML = attackerAttack;

		//Defender hit and update HP display
		var defenderLife = defenderHPArray[0] - attackerAttack;
		defenderHPArray.splice(0,1, defenderLife);
		document.querySelector(defenderHP).innerHTML = defenderLife;
		
		$('#console').append("<p>" + attackerName[0] + " hit " + defenderName[0] + " for " + attackerAttack + " damage!</p>");	

		//Defender attack back
		defenderAttack +=1;
		document.querySelector(defenderArray[0]).innerHTML = defenderAttack;

		//Attacker hit and update HP display
		var attackerLife = attackerHPArray[0] - defenderAttack;
		attackerHPArray.splice(0,1, attackerLife);
		document.querySelector(attackerHP).innerHTML = attackerLife;

		$('#console').append("<p>" + defenderName[0] + " hit back with " + defenderAttack + " damage!</p>");

	if(defenderHPArray[0] < 1){

		$('#console').append("<p>" + defenderName[0] + " fainted! Select a new defender.</p>");
		//Removes Defender from #defender
		$('#defender .profile').remove();
		defender = 0;
		defenderName = 0;
		defenderArray = 0;
		defenderHPArray = 0;
		defenderAttackArray = 0;
		defenderHP = 0;

		//Pick new Defender
		//DEFENDER IS APPENDING TO ATTACKER!!!
		defenderPick();
	}
	
	if(attackerHPArray[0] < 1){

		$('#attacker .profile').remove();
		$('#console').append("<p>" + attackerName[0] + " fainted! Press Reset to try again.</p>");
	}

	})

}

$(document).ready(function(){

	//User picks Attacker/ Starts game
	attackerPick();
	
	//Reset button
	$('#resetButton').on('click', function(){

		location.reload();
	})

})

