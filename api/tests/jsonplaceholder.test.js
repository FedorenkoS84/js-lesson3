const api = require("../src/services/jsonplaceholder.service");

describe("JSONPlaceholder API tests", () => {
  test("GET /posts", async () => {
    const response = await api.getPosts();
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
  });

  test("GET /posts/1", async () => {
    const response = await api.getPostById(1);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
  });
});
