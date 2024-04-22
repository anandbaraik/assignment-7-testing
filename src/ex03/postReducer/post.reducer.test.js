import postReducer from "./post.reducer";

describe("testing post reducer", () => {
  it("test create post", () => {
    const initialState = {
      posts: []
    };
    const action = {
      type: "CREATE_POST",
      payload: {
        id: 1,
        author: "Post 1",
        content: "Post 1",
        likes: 0
      }
    };
    const updatedState = postReducer(initialState, action);

    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "Post 1",
          likes: 0
        }
      ]
    });
  });
  it("test to edit post", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "Post 1",
          likes: 0
        }
      ]
    };
    const action = {
      type: "EDIT_POST",
      payload: {
        id: 1,
        newContent: "post 1 content.."
      }
    };
    const updatedState = postReducer(initialState, action);

    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "post 1 content..",
          likes: 0
        }
      ]
    });
  });
  it("test to delete", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "post 1 content..",
          likes: 0
        },
        {
          id: 2,
          author: "test2..",
          content: "test2..",
          likes: 0
        }
      ]
    };
    const action = {
      type: "DELETE_POST",
      payload: { id: 2 }
    };
    const updatedState = postReducer(initialState, action);
    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "post 1 content..",
          likes: 0
        }
      ]
    });
  });
  it("test to like a post", () => {
    const initialState = {
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "post 1 content..",
          likes: 0
        }
      ]
    };
    const action = {
      type: "LIKE_POST",
      payload: { id: 1 }
    };
    const updatedState = postReducer(initialState, action);

    expect(updatedState).toEqual({
      posts: [
        {
          id: 1,
          author: "Post 1",
          content: "post 1 content..",
          likes: 1
        }
      ]
    });
  });
});
