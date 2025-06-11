const table = document.querySelector(".table");
let libraryBooks = [];

addBook("Harry Potter", "J K Rowling", 340, true);
addBook("Lord of the rings", "J R Tolken", 900, false);
addBook("The hitchhiker's guide to the galaxy", "Douglas Adams", 400, true);
updateTable();

function book(name, author, pages, readStatus = false) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.isRead = readStatus;
}

function addBook(name, author, pages, readStatus = false) {
    let nbook = new book(name, author, pages, readStatus);
    libraryBooks.push(nbook);
}

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function removeBook(id) {
    let index = libraryBooks.indexOf(id);
    libraryBooks.splice(index, 1);
}

function updateTable() {
    //initialize bookRows with all row IDs
    bookRows = [];
    let bookRowNodes = document.querySelectorAll("[data-id]");
    if (bookRowNodes.length > 0)
        bookRows = Array.from(bookRowNodes, (node) => node.dataset.id);

    //loop through library array and add books that doesn't exist in table
    for (book of libraryBooks) {
        if (!bookRows.includes(book.id)) {
            let tr = document.createElement("tr");
            let dName = document.createElement("td");
            let dAuthor = document.createElement("td");
            let dPages = document.createElement("td");
            let dStatus = document.createElement("td");
            let dBtn = document.createElement("td");
            dName.textContent = book.name;
            dAuthor.textContent = book.author;
            dPages.textContent = book.pages;
            dStatus.textContent = book.isRead ? "Read" : "Not read";
            tr.appendChild(dName);
            tr.appendChild(dAuthor);
            tr.appendChild(dPages);
            tr.appendChild(dStatus);

            let btn = document.createElement("button");
            btn.textContent = "X";
            btn.addEventListener("click", function(){
                let parent = this.parentNode.parentNode;
                if (parent) {
                    removeBook(parent.dataset.id);
                }
                removeChildren(parent);
                parent.remove();
            })

            btn.classList.add("remove-button");
            dBtn.appendChild(btn);
            tr.appendChild(dBtn);

            table.appendChild(tr);
            tr.setAttribute("data-id", book.id);
        }
    }
}