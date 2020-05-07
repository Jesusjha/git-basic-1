const git = require("../../utils/git");

describe("exercise-08", () => {
  test("create a new stash entry with a message", async () => {
    let stashList = await git.stashList();

    expect(stashList.total).toBe(1);
    expect(stashList.latest.message).toMatch(/my stash message/i);
  });
});
