const git = require("../../utils/git");

describe("exercise-01", () => {
  test("create a new file and add it to the staging area", async () => {
    let status = await git.status();

    expect(status.created).toHaveLength(1);
    expect(status.created).toContain("src/exercises/exercise-01.txt");
  });
});
