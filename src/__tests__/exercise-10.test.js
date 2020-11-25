const git = require("../../utils/git");

describe("exercise-10", () => {
  test("create merge commit with main and develop", async () => {
    let branches = await git.branch();
    let count = await git.raw([
      "rev-list",
      "develop",
      "main",
      "--merges",
      "--count",
    ]);

    let n = Number(count);

    expect(n).toEqual(1);
    expect(branches.current).toMatch(/main/);
    expect(branches.all).toContain("develop");
    expect(branches.all).toContain("main");
  });
});
