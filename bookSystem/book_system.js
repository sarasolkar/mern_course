let books=[];
function addBook(){
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value
    const bookDescription  = document.getElementById("bookDescription").value
    const pagesNumber = document.getElementById("pagesNumber").value
    if(bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book ={
            name : bookName,
            authorName : authorName,
            bookDescription : bookDescription,
            pagesNumber : pagesNumber

        }
        books.push(book)
        showbooks();
        clearInputs();
        
    }
    else 
    {
        alert("please fill all details correctly")
    }
}

function showbooks(){
    const booksdiv = books.map((book,index)=>
    `<h1>Book Number: ${index + 1}</h1>
    <p><strong>Book Name: </strong> ${book.name}</p>
    <p><strong>Book Description:</strong> ${book.bookDescription}</p>
    <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
    <button onclick="editbook(${index})">edit</button>
    <button onclick="deleteBook(${index})">Delete</button>
    `
)
document.getElementById("books").innerHTML = booksdiv.join('')

}

function editbook(index){
    const book = books[index];
    document.getElementById("bookName").value = book.name
    document.getElementById("authorName").value = book.authorName
    document.getElementById("bookDescription").value = book.bookDescription
    document.getElementById("pagesNumber").value = book.pagesNumber
    books.splice(index,1);
    showbooks();
}

function clearInputs(){
    document.getElementById("bookName").value = ''
    document.getElementById("authorName").value = ''
    document.getElementById("bookDescription").value = ''
    document.getElementById("pagesNumber").value = ''

}

function deleteBook(index){
    books.splice(index,1)
    showbooks()
}
