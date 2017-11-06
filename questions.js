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
	'Name a job Thomas or Ricky has had on MML',
	'Name a country Thomas or Ricky has visited',
	'Question 4',
	'Question 5',
	'Question 6',
	'Question 7',
	'Question 8',
	'Question 9',
	'Question 10',
];

// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = [
	[
		['Atlanta', 49],
		['test2', 22],
		['test3', 15],
		['test4', 7],
		['test5', 4], 
		['test6', 3]
	],[
		['Senior Manager, Business Operations', 50],
		['Technical Product Manager', 36],
		['TBD', 7],
		['TBD', 4],
		['TBD', 3]
	],[
		['USA', 34],
		['TBD', 29],
		['TBD', 19],
		['TBD', 10]
	],[
		['4', 50],
		['TBD', 36],
		['TBD', 7],
		['TBD', 4],
		['TBD', 3]
	],[
		['5', 34],
		['TBD', 29],
		['TBD', 19],
		['TBD', 10]
	],[
		['6', 50],
		['TBD', 36],
		['TBD', 7],
		['TBD', 4],
		['TBD', 3]
	],[
		['7', 34],
		['TBD', 29],
		['TBD', 19],
		['TBD', 10]
	],[
		['8', 50],
		['TBD', 36],
		['TBD', 7],
		['TBD', 4],
		['TBD', 3]
	],[
		['9', 34],
		['TBD', 29],
		['TBD', 19],
		['TBD', 10]
	],[
		['10', 34],
		['TBD', 29],
		['TBD', 19],
		['TBD', 10]
	]
];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2];
		

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

