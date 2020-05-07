const git = require("../../utils/git");

describe("exercise-14", () => {
  test("remove the branch feature", async () => {
    let branches = await git.branch();

    expect(branches.current).toMatch(/master/);
    expect(branches.all).toContain("develop");
    expect(branches.all).not.toContain("feature");
    expect(branches.all).toContain("master");
  });
});
