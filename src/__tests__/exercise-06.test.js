const git = require("../../utils/git");

describe("exercise-06", () => {
  test("create a new branch named develop", async () => {
    let branches = await git.branch();

    expect(branches.current).toMatch(/master/);

    expect(branches.all).toContain("master");
    expect(branches.all).toContain("develop");
  });
});
