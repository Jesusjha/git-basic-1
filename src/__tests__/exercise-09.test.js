const git = require("../../utils/git");

describe("exercise-09", () => {
  test("remove the branch feature", async () => {
    let branches = await git.branch();

    expect(branches.current).toMatch(/main/);
    expect(branches.all).toContain("develop");
    expect(branches.all).not.toContain("feature");
    expect(branches.all).toContain("main");
  });
});
