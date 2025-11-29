// Don't delete code bellow and this code must be at the bottom of the file
type Book = {
  title: string;
  author: string;
  year: number;
};

const books: Book[] = [];

function addBook(title: string, author: string, year: number): void {
  const newBook: Book = { title, author, year };
  books.push(newBook);
  console.log('> Book added: "${title}" by ${author} (${year})');
}

function listBooks(): void {
  console.log("> All Books:");
  books.forEach((book) => {
    console.log(`> - ${book.title} by ${book.author} (${book.year})`);
  });
}

function searchBook(title?: string): void {
  if (!title) {
    console.log("> Please provide a title to search");
    return;
  }
}

const results = books.filter((book) => {
  book.title.toLowerCase();
});

console.log('> Search Result for "${title}":');
results.forEach((book) => {
  console.log(`> - ${book.title} by ${book.author} (${book.year})`);
});

addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
addBook("1984", "George Orwell", 1949);
searchBook("The Great Gatsby");

export { addBook, listBooks, searchBook };
