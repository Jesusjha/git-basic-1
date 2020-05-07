const git = require("../../utils/git");

describe("exercise-02", () => {
  test("create a new commit with the new file", async () => {
    let status = await git.status();

    let raw = await git.raw([
      "log",
      "--oneline",
      "-n",
      "1",
      "--grep",
      "exercise-02",
    ]);

    expect(status.created).not.toContain("src/exercises/exercise-01.txt");
    expect(raw).toMatch(/exercise-02 commit/);
  });
});
