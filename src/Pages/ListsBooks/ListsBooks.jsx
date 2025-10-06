import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utility/addToDb";
import Book from "../Book/Book";

const ListsBooks = () => {
  const [listBook, setListBook] = useState([]);

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    console.log(storedBookData);
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    console.log(convertedStoredBook);
    const myBookList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId)
    );
    setListBook(myBookList);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Listed Book</Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read {listBook.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listBook.map((b) => (
              <Book key={b.BookId} singelBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListsBooks;
