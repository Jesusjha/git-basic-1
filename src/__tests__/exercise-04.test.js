const git = require("../../utils/git");

describe("exercise-04-a", () => {
  test("make a change and add it to the staging index", async () => {
    let status = await git.status();

    expect(status.staged).toContain("src/exercises/exercise-03-a.txt");
    expect(status.modified).toContain("src/exercises/exercise-03-a.txt");
  });
});

describe("exercise-04-b", () => {
  test("use git reset HEAD to unstage the changes", async () => {
    let status = await git.status();

    expect(status.staged).not.toContain("src/exercises/exercise-03-a.txt");
    expect(status.modified).toContain("src/exercises/exercise-03-a.txt");
  });
});
