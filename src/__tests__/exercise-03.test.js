const git = require("../../utils/git");

describe("exercise-03-a", () => {
  test("create 2 new files and add all of them to the staging area", async () => {
    let status = await git.status();

    expect(status.created).toHaveLength(2);
    expect([
      "src/exercises/exercise-03-a.txt",
      "src/exercises/exercise-03-b.txt",
    ]).toEqual(expect.arrayContaining(status.created));
  });
});

describe("exercise-03-b", () => {
  test("create a new commit with the new files", async () => {
    let status = await git.status();

    let raw = await git.raw([
      "log",
      "--oneline",
      "-n",
      "1",
      "--grep",
      "exercise-03",
    ]);

    expect(status.created).not.toContain("src/exercises/exercise-03-a.txt");
    expect(status.created).not.toContain("src/exercises/exercise-03-b.txt");

    expect(raw).toMatch(/exercise-03 commit/);
  });
});
