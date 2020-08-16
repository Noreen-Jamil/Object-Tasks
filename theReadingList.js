function theReadingList(){
	console.clear();
// 	Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book 
// and has properties for the title (a string), author (a string), and alreadyRead 
// (a boolean indicating if you read it yet).

// Iterate through the array of books. For each book,
// log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// Now use an if/else statement to change the output depending on whether 
// you read it yet or not. If you read it, 
// log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, 
// log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

	const books = [
		{
			title:"The Hobbit",
			author:"J.R.R. Tolkien",
			alreadyRead: true
		},
		{
			title:"The Lord of the Rings",
			author:"J.R.R. Tolkien",
			alreadyRead: false
		},
		{
			title:"All The Light We Cannot see",
			author:"Anthony Doerr",
			alreadyRead: false
		},
		{
			title:"The House On The Lake",
			author:"Nuala Ellwood",
			alreadyRead: true
		}
	];

	console.log("The Reading List");
	console.log(" ");
	books.forEach(book => console.log(`${book.title} by ${book.author}`));

	console.log(" ");
	console.log("Read / Still Need To Read ");
	console.log(" ");
	books.forEach(book => {
		if(book.alreadyRead == true){
			console.log(`You Already Read ${book.title} by ${book.author}`);
		}else{
			console.log(`You Still Need To Read ${book.title} by ${book.author}`);
		}
	});

}