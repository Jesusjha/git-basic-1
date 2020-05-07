const git = require("../../utils/git");

describe("exercise-10", () => {
  test("create a new file and store it in a stash entry", async () => {
    let stashList = await git.stashList();
    let raw = await git.raw(["ls-tree", "-r", "stash@{0}^3", "--name-only"]);

    expect(stashList.total).toBe(1);
    expect(stashList.latest.message).toMatch(/stash with untracked files/i);
    expect(raw).toMatch(/src\/exercises\/exercise-10.txt/i);
  });
});
