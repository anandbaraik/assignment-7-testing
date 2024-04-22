import bookshelfReducer from "./bookshelf.reducer";

describe("testing bookshelf Reducer", () => {
  it("test to handle add book to bookshelf", () => {
    const initialState = {
      books: [],
      categories: []
    };
    const action = {
      type: "ADD_BOOK",
      payload: {
        id: 1,
        title: "Book 1",
        author: "Book 1",
        category: null
      }
    };
    const updatedState = bookshelfReducer(initialState, action);
    expect(updatedState.books).toHaveLength(1);
    expect(updatedState.books[0]).toEqual({
      id: 1,
      title: "Book 1",
      author: "Book 1",
      category: null
    });
  });
  it("test to handle add category", () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: "Book 1",
          author: "Book 1",
          category: null
        }
      ],
      categories: []
    };
    const action = {
      type: "ADD_CATEGORY",
      payload: {
        id: 1,
        name: "Book 1"
      }
    };
    const updatedState = bookshelfReducer(initialState, action);

    expect(updatedState).toEqual({
      books: [
        {
          id: 1,
          title: "Book 1",
          author: "Book 1",
          category: null
        }
      ],
      categories: [
        {
          id: 1,
          name: "Book 1"
        }
      ]
    });
  });
  it("test to assign category", () => {
    const initialState = {
      books: [
        {
          id: 1,
          title: "Book 1",
          author: "Book 1",
          category: null
        }
      ],
      categories: [
        {
          id: 1,
          name: "Book 1"
        }
      ]
    };

    const action = {
      type: "ASSIGN_CATEGORY",
      payload: {
        bookId: 1,
        categoryId: 1
      }
    };

    const updatedState = bookshelfReducer(initialState, action);

    expect(updatedState).toEqual({
      books: [
        {
          author: "Book 1",
          category: 1,
          id: 1,
          title: "Book 1"
        }
      ],
      categories: [
        {
          id: 1,
          name: "Book 1"
        }
      ]
    });
  });
});
