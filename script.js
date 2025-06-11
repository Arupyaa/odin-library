
let libraryBooks = [];

function book(name,author,readStatus = false){
    this.name = name;
    this.author = author;
    this.id = crypto.randomUUID();
    this.isRead = readStatus;
}

function addBook(name,author,readStatus = false){
    let nbook = new book(name,author,readStatus);
    libraryBooks.push(nbook);
}