function filterBooksByYear(n) {
  let filterbooks = [];
  const Book = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel Garcia Marquez",
      year: 1967,
    },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  ];
  for (i = 0; i < Book.length; i++) {
    if (Book[i].year <= n) {
      console.log(Book[i]);
    }
  }
}

filterBooksByYear(1813);
