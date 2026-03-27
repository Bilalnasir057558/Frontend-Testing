// mock db module
jest.mock("./db", () => ({
  db: {
    fetchPosts: jest.fn(),
  },
}));

const { db } = require("./db");
const { postService } = require("./postService");

test("should return simplified posts (stubbed)", async () => {
  // fake data
  const fakePosts = [
    {
      id: 1,
      title: "Async JS",
      content: "Some content",
    },
    {
      id: 2,
      title: "Clean Code",
      content: "More content",
    },
  ];

  // STUB -> control what db returns
  db.fetchPosts.mockResolvedValue(fakePosts);

  const result = await postService.getPosts();

  const expected = [
    { id: 1, title: "Async JS" },
    { id: 2, title: "Clean Code" },
  ];

  expect(result).toEqual(expected);
});
