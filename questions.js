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
		['Atlanta', 50],
		['Boston', 25],
		['New York City', 15],
		['Cherokee County GA', 10]
	],[
		['Business Operations', 30],
		['Tech Product Manager', 30],
		['Associate Prod Manager', 15],
		['Quality Assurance', 15],
		['Intern', 10]
	],[
		['Germany', 20],
		['France', 20],
		['Bahamas', 20],
		['Belgium', 10],
		['Netherlands', 15],
		['Argentina', 10],
		['St. Lucia', 5]
	],[
		['Atlanta United', 25],
		['Atlanta Braves', 25],
		['NE Patriots', 20],
		['US Soccer', 15],
		['Atlanta Falcons', 15]
	],[
		['Play Tennis', 30],
		['Go for a run', 25],
		['Play Golf', 25],
		['Drink Beer', 10],
		['Movies', 10]
	],[
		['Debate team', 35],
		['Basketball', 20],
		['Video Games', 20],
		['Soccer', 15],
		['Newspaper', 10]
	],[
		['Barbecue', 30],
		['Ice Cream', 20],
		['Hummus', 20],
		['Chic-Fil-A', 15],
		['French fries', 15]
	],[
		['Under Armour', 30],
		['Patagonia', 25],
		['LL Bean', 25],
		['Nike', 10],
		['NCAA/MML Swag', 10]
	],[
		['Football (T, R)', 30],
		['Soccer (T)', 25],
		['Basketball (R)', 20],
		['Tennis', 15],
		['Golf (R)', 10]
	],[
		['Heights/Falling (T, R)', 30],
		['Public Speaking (R)', 25],
		['Bugs (T)', 15],
		['Being Wrong (T)', 15],
		['Tight/Dark Places (R)', 15]
	],[
		['results', 34],
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
	'Name a place where its hot',
	'Name a well known sight in New York',
	'Name something that can be found in a pond',
	'Name something that can be shattered'
];


// answers to the questions for the finals	
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five questions
var answers_finals = [
	[
		['Sahara', 35],
		['Hawaii', 26],
		['Bahamas', 10],
		['Oven', 10],
		['Sauna', 9]
	],[
		['Statue of Liberty', 30],
		['Empire State Building', 31],
		['Central Park', 26],
		['Brooklyn Bridge', 9],
		['Chinatown', 3]
	],[
		['Water Lily', 37],
		['Carp', 24],
		['Water pump', 19],
		['Fountain', 12],
		['Stones', 8],
	],[
		['Vase', 29],
		['Glass', 28],
		['Economy', 16],
		['Building', 15],
		['Myth', 12],
	]
];


// timer duration for first and second player in finals, given in seconds
var timers = [20, 25];

