const table = document.querySelector(".table");
let libraryBooks = [];
let tableBooks = [];

addBook("Harry Potter","J K Rowling", 340,true);
addBook("Lord of the rings","J R Tolken", 900, false);
addBook("The hitchhiker's guide to the galaxy","Douglas Adams",400,true);
updateTable();


function book(name,author,pages,readStatus = false){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.isRead = readStatus;
}

function addBook(name,author,pages,readStatus = false){
    let nbook = new book(name,author,pages,readStatus);
    libraryBooks.push(nbook);
}

function updateTable(){
    for(book of libraryBooks)
    {
        if(!tableBooks.includes(book.id)){
            let tr = document.createElement("tr");
            let dName = document.createElement("td");
            let dAuthor = document.createElement("td");
            let dPages = document.createElement("td");
            let dStatus = document.createElement("td");
            dName.textContent = book.name;
            dAuthor.textContent = book.author;
            dPages.textContent = book.pages;
            dStatus.textContent = book.isRead?"Read":"Not read";
            tr.appendChild(dName);
            tr.appendChild(dAuthor);
            tr.appendChild(dPages);
            tr.appendChild(dStatus);
            table.appendChild(tr);
            tr.setAttribute("data-id",book.id);
        
            tableBooks.push(book.id);
        }
    }
}