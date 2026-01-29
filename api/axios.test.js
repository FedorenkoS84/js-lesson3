const apiClient = require("./jsonconfig");

describe("JSONPlaceholder API tests", () => {
  test("GET /posts", async () => {
    const response = await apiClient.get("/posts");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("GET /posts/1", async () => {
    const response = await apiClient.get("/posts/1");

    expect(response.status).toBe(200);
    expect(response.data.id).toBe(1);
  });

  test("GET /users", async () => {
    const response = await apiClient.get("/users");

    expect(response.status).toBe(200);
    expect(response.data.length).toBeGreaterThan(0);
  });

  test("POST /posts", async () => {
    const response = await apiClient.post("/posts", {
      title: "Test title",
      body: "Test body",
      userId: 1,
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
  });

  test("POST /comments", async () => {
    const response = await apiClient.post("/comments", {
      name: "Test comment",
      email: "test@test.com",
      body: "Some comment",
      postId: 1,
    });

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty("id");
  });
});
