const git = require("../../utils/git");

describe("exercise-06", () => {
  test("create a new branch named develop", async () => {
    let branches = await git.branch();

    expect(branches.current).toMatch(/main/);

    expect(branches.all).toContain("main");
    expect(branches.all).toContain("develop");
  });
});
