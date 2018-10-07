//Take me down to Kludge City where the comments are green and the code is spaghetti

var catnip = 0;
var totalDamage = 0;
var defeatCount = 0;
var catHero = 0;


//Amount of things
var supplyDrops = 0;
var farmers = 0;
var generators = 0;
var factories = 0;
var printers = 0;
var knifeCats = 0;
var glockCats = 0;
var fAFCats = 0;
var AWPCats = 0;
var AKCats = 0;
var malkins = 0;


//Cost of things
var supplyDropCost = 10;
var farmerCost = 25;
var generatorCost = 50;
var printerCost = 100;
var factoryCost = 1000;

var knifeCatCost = 15;
var glockCatCost = 50;
var fAFCatCost = 300;
var AWPCatCost = 575;
var AKCatCost = 999;
var malkinCost = 2000;


//Basic Enemy Stats
var enemyHealth = 100;



//Cat change function
function catChange () {
	if (malkins >= 1) {
		document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: M10 Malkin";
		document.getElementById('catPic').src = "images/cats/tank1.jpg";
	}
	else if (AKCats >= 1) {
		document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: AK Kitty";
		document.getElementById('catPic').src = "images/cats/ak.gif";
	}
	
	else if (AWPCats >= 1) {
		document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: AWP Mouser";
		document.getElementById('catPic').src = "images/cats/awp.jpg";
		return;
	}
	else if (fAFCats >= 1) {
		document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: Full Auto Feline";
		document.getElementById('catPic').src = "images/cats/m1919.jpg";
		return;
	}
	
	else if (glockCats >= 1) {
			document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: Glock Cat";
			document.getElementById('catPic').src = "images/cats/glock.jpg";
			return;
	}
	
	else if (knifeCats >= 1) {
		document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: Knife Kitteh";
		document.getElementById('catPic').src = "images/cats/knife.jpg";
		return;
	}
	
	
	else {
		document.getElementById('catName').innerHTML = "Your Toughest Furry Friend: Unarmed Cat";
		document.getElementById('catPic').src = "images/cats/default.png";
	}
	
	switch (catHero) {
		case 0:
			
		case 1:
			
			break;
		
		case 2:
			
			break;
	}
}

//Enemy change function
function enemyChange () {
	if (defeatCount == 1) {
		//Set new enemy
		document.getElementById('enemyPic').src = "images/enemy/box.jpg"
		enemyHealth = 1000;
		document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
		document.getElementById('enemyName').innerHTML = "Current Enemy: Brand New Cardboard Box!!";
		
		//Set new items in shop
		document.getElementById('farmers').style.display = "block";
		document.getElementById('farmerButton').style.display = "block";
		document.getElementById('glockCats').style.display = "block";
		document.getElementById('glockButton').style.display = "block";
		
	}
	else if (defeatCount == 2){
		//Set new enemy
		document.getElementById('enemyPic').src = "images/enemy/post.jpg"
		enemyHealth = 5000;
		document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
		document.getElementById('enemyName').innerHTML = "Current Enemy: Simple Scratching Post";
		
		//Set new items in shop
		document.getElementById('generatorButton').style.display = "block";
		document.getElementById('generators').style.display = "block";
		document.getElementById('fAFButton').style.display = "block";
		document.getElementById('fAFCats').style.display = "block";
	}
	else if (defeatCount == 3) {
		//Set new enemy
		document.getElementById('enemyPic').src = "images/enemy/toymouse.jpeg"
		enemyHealth = 10000;
		document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
		document.getElementById('enemyName').innerHTML = "Current Enemy: SQUEAKY TOY MOUSE OF DOOM!!!";
		
		//Set new items in shop
		document.getElementById('printerButton').style.display = "block";
		document.getElementById('printers').style.display = "block";
	}
	
	else if (defeatCount == 4) {
		//Set new enemy
		document.getElementById('enemyPic').src = "images/enemy/chipzooka.png";
		enemyHealth = 50000;
		document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
		document.getElementById('enemyName').innerHTML = "Current Enemy: Chipmunk with a Rocket Launcher";
		
		//Set new items in shop
		document.getElementById('AKButton').style.display = "block";
		document.getElementById('AKCats').style.display = "block";
	}
	else if (defeatCount == 5) {
		//Set new enemy
		document.getElementById('enemyPic').src = "images/enemy/huntingdog.jpg";
		enemyHealth = 100000;
		document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
		document.getElementById('enemyName').innerHTML = "Current Enemy: The Family Hunting Dog";
		
		//Set new items in shop
		document.getElementById('factories').style.display = "block";
		document.getElementById('factoryButton').style.display = "block";
		document.getElementById('malkins').style.display = "block";
		document.getElementById('malkinButton').style.display = "block";
	}
	else if (defeatCount == 6) {
		//Set new enemy
		document.getElementById('enemyPic').src = "images/enemy/pointer.jpg";
		enemyHealth = 1000000;
		document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
		document.getElementById('enemyName').innerHTML = "Current Enemy: The Green Laser Pointer of Extreme Pointiness!!1!!";
		document.getElementById('finalBoss').style.display = "block";
		
		//Set new items in shop
	}
	else if (defeatCount >= 7){
		location.replace("winner.html");
	}
}


//Basic Functs for catnip and damage
function catnipClick(number) {
	catnip = catnip + number;
	document.getElementById("catnip").innerHTML = "Current Catnip: " + catnip;
}

function attackClick(number) {
	var currentDamage = number;
	enemyHealth = enemyHealth - currentDamage;
	document.getElementById('enemyHealth').innerHTML = "Enemy Health: " + enemyHealth;
	if (enemyHealth <= 0) {
		defeatCount = defeatCount + 1;
		enemyChange();
	};
	
	totalDamage = totalDamage + number;
	document.getElementById("damage").innerHTML = "You have dealt " + totalDamage + " total damage";
}

//Shop functions
function buySupplyDrop() {
	var supplyDropCost = Math.floor(10 * Math.pow(1.1, supplyDrops));
	if (catnip >= supplyDropCost) {
		supplyDrops = supplyDrops + 1;
		catnip = catnip - supplyDropCost;
		document.getElementById('supplyDrops').innerHTML ="Catnip Supply Drops:" + supplyDrops;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1, supplyDrops));
	document.getElementById('supplyDropCost').innerHTML = nextCost;
}

function buyFarmer() {
	var farmerCost = Math.floor(25 * Math.pow(1.12, farmers));
	if (catnip >= farmerCost) {
		farmers = farmers + 1;
		catnip = catnip - farmerCost;
		document.getElementById('farmers').innerHTML ="Catnip Farmers:" + supplyDrops;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	var nextCost = Math.floor(25 * Math.pow(1.1, farmers));
	document.getElementById('farmerCost').innerHTML = nextCost;
}

function buyCatnipGenerator(){
	var generatorCost = Math.floor(50 * Math.pow(1.1, generators));
	if(catnip >= generatorCost){
		generators = generators + 1;
		catnip = catnip - generatorCost;
		document.getElementById('generators').innerHTML ="Catnip Generators:" + generators;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	var nextCost = Math.floor(50 * Math.pow(1.1, generators));
	document.getElementById('generatorCost').innerHTML = nextCost;
};

function buyPrinter() {
	var printerCost = Math.floor(100 * Math.pow(1.12, printers));
	if(catnip >= printerCost){
		printers = printers + 1;
		catnip = catnip - printerCost;
		document.getElementById('printers').innerHTML ="Catnip 3D Printers:" + generators;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	var nextCost = Math.floor(100 * Math.pow(1.12, printers));
	document.getElementById('printerCost').innerHTML = nextCost;
}

function buyFactory() {
	var factoryCost = Math.floor(1000 * Math.pow(1.1, factories));
	if(catnip >= factoryCost){
		factories = factories + 1;
		catnip = catnip - factoryCost;
		document.getElementById('factories').innerHTML ="Catnip Factories:" + factories;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	var nextCost = Math.floor(100 * Math.pow(1.12, factories));
	document.getElementById('factoryCost').innerHTML = nextCost;
}

function buyKnifeCat() {
	var knifeCatCost = Math.floor(20 * Math.pow(1.1, knifeCats));
	if (catnip >= knifeCatCost) {
		knifeCats = knifeCats + 1;
		catnip = catnip - knifeCatCost;
		document.getElementById('knifeCats').innerHTML = "Knife Kittehs: " + knifeCats;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	//var nextCost = Math.floor(20 * Math.pow(1.1, knifeCats));
	//document.getElementById('knifeCost').innerHTML = nextCost;
	catChange();
}

function buyGlockCat () {
	var glockCatCost = Math.floor(50 * Math.pow(1.1, glockCats));
	if (catnip >= glockCatCost) {
		glockCats = glockCats + 1;
		catnip = catnip - glockCatCost;
		document.getElementById('glockCats').innerHTML = "Glock Cats: " + glockCats;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	//var nextCost = Math.floor(50 * Math.pow(1.2, glockCats));
	//document.getElementById('glockCost').innerHTML = nextCost;
	catChange;
}

function buyfAFCat () {
	var fAFCatCost = Math.floor(300 * Math.pow(1.1, fAFCats));
	if (catnip >= fAFCatCost) {
		fAFCats = fAFCats + 1;
		catnip = catnip - fAFCatCost;
		document.getElementById('fAFCats').innerHTML = "Full Auto Felines: " + fAFCats;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	//var nextCost = Math.floor(300 * Math.pow(1.12, fAFCats));
	//document.getElementById('fAFCatCost').innerHTML = nextCost;
	catChange;
}

function buyAWPCat () {
	var AWPCatCost = Math.floor(575 * Math.pow(1.1, AWPCats));
	if (catnip >= AWPCatCost){
		AWPCats = AWPCats + 1;
		catnip = catnip - AWPCatCost;
		document.getElementById('AWPCats').innerHTML = "AWP Mousers: " + AWPCats;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	};
	catChange();
}

function buyAKCat () {
	var AKCatCost = Math.floor(999 * Math.pow(1.1, AKCats));
	if (catnip >= AKCatCost){
		AKCats = AKCats + 1;
		catnip = catnip - AKCatCost;
		document.getElementById('AKCats').innerHTML = "AK Kitties: " + AKCats;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	}
}

function buyMalkin() {
	var malkinCost = Math.floor(2000 * Math.pow(1.1, AKCats));
	if (catnip >= malkinCost){
		malkins = malkins + 1;
		catnip = catnip - malkinCost;
		document.getElementById('malkins').innerHTML = "M10 Malkins: " + malkins;
		document.getElementById('catnip').innerHTML ="Current Catnip: " + catnip;
	}
}

//Window Refresher per 2 seconds
window.setInterval(function(){
	catnipClick(supplyDrops);
	catnipClick(generators * 10);
	catnipClick(printers * 25);
}, 2000);

//Window Refresher per 1 seconds
window.setInterval(function(){
	catChange();
	
	attackClick(knifeCats * 1);
	attackClick(glockCats * 5);
	attackClick(fAFCats * 10);
	attackClick(AWPCats * 125);
	attackClick(AKCats * 300);
	attackClick(malkins * 1000);
	
	catnipClick(farmers * 2);
	
}, 1000);