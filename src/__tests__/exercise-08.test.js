const git = require("../../utils/git");

describe("exercise-08", () => {
  test("create a new branch named feature based on the develop branch", async () => {
    let branches = await git.branch();
    let count = await git.raw([
      "rev-list",
      "feature",
      "develop",
      "^main",
      "--count",
    ]);

    let n = Number(count);

    expect(n).toEqual(1);
    expect(branches.current).toMatch(/main/);
    expect(branches.all).toContain("develop");
    expect(branches.all).toContain("feature");
    expect(branches.all).toContain("main");
  });
});
