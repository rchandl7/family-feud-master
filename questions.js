// Configuration file, change the contents to your needs. The contents of this
// file are in the public domain.

// The number of rounds can be changed:
//  * add/remove questions in questions_rounds
//  * add/remove rows in answers_rounds
//  * add/remove entries in multiplicator

// The number of answers per question can be changed:
//  * add/remove entries in the correct row of answers_rounds

// The number of questions in the finals can be changed:
//  * add/remove rows in questions_finals
//  * add/remove rows in answers_finals

// The number of valid answers in the finals can be changed:
//  * add/remove entries in the correct row of answers_finals

// questions for rounds
var questions_rounds = [
	'Name somewhere that Thomas or Ricky has lived',
	'Name a job or role Thomas or Ricky has had in NCAA Digital',
	'Name a country Thomas or Ricky has visited',
	'Name a sports team they are a fan of…',
	'Name something Thomas or Ricky might do on a weekend…',
	'High school activities',
	'Name a clothing brand you might see them wearing around the office…',
	'Favorite foods',
	'Favorite sports to watch',
	'Name a fear of either Thomas or Ricky…',
	'Final Results',
];

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
	[
		['Atlanta [T,R]', 50],
		['Boston [T]', 25],
		['New York City [T]', 15],
		['Cherokee County GA [R]', 10]
	],[
		['Business Operations [T]', 30],
		['Tech Product Manager [R]', 30],
		['Associate Prod Manager [T]', 15],
		['Quality Assurance [R]', 15],
		['Intern', 10]
	],[
		['Germany [T]', 20],
		['France [T]', 20],
		['Bahamas [R]', 20],
		['Belgium [T]', 10],
		['Netherlands [T]', 15],
		['Argentina [T]', 10],
		['St. Lucia [R]', 5]
	],[
		['Atlanta United [T]', 25],
		['Atlanta Braves [R]', 25],
		['NE Patriots [T]', 20],
		['US Soccer [T]', 15],
		['Atlanta Falcons [R]', 15]
	],[
		['Play Tennis [T,R]', 30],
		['Go for a run [T]', 25],
		['Play Golf [R]', 25],
		['Drink Beer [T,R]', 10],
		['Movies [R]', 10]
	],[
		['Debate team [T]', 35],
		['Basketball [R]', 20],
		['Video Games [R]', 20],
		['Soccer [T]', 15],
		['Newspaper [T]', 10]
	],[
		['Barbecue [R]', 30],
		['Ice Cream [T]', 20],
		['Hummus [T]', 20],
		['Chic-Fil-A [R]', 15],
		['French fries [T]', 15]
	],[
		['Under Armour [R]', 30],
		['Patagonia [T]', 25],
		['LL Bean [T]', 25],
		['Nike [R]', 10],
		['NCAA/MML Swag [T,R]', 10]
	],[
		['Football [T, R]', 30],
		['Soccer [T]', 25],
		['Basketball [R]', 20],
		['Tennis [T]', 15],
		['Golf [R]', 10]
	],[
		['Heights/Falling [T, R]', 30],
		['Public Speaking [R]', 25],
		['Bugs [T]', 15],
		['Being Wrong [T]', 15],
		['Tight/Dark Places [R]', 15]
	],[
		['show final results', 34],
		['TBD', 29],
		['TBD', 19],
		['TBD', 10]
	]
];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2];
		

// questions for finals
var questions_finals = [
	'Name a common NCAA mascot',
	'Name an NCAA sport',
	'Name a ',
	'Name something that can be shattered'
];


// answers to the questions for the finals	
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five answers
var answers_finals = [
	[
		['Eagles', 35],
		['Tigers', 26],
		['Bulldogs', 10],
		['Knights', 10],
		['Bears', 9]
	],[
		['Football', 30],
		['Basketball', 31],
		['Soccer', 26],
		['Ice Hockey', 9],
		['Track and Field', 3]
	],[
		['', 37],
		['', 24],
		['', 23],
		['', 16],
		['', 2],
	],[
		['Vase', 29],
		['Glass', 28],
		['Economy', 16],
		['Building', 15],
		['Myth', 12],
	]
];


// timer duration for first and second player in finals, given in seconds
var timers = [30, 45];

