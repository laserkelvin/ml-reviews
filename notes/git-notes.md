# git-notes


## A useful collection of Git commands

From [this blogpost](https://github.blog/2015-06-08-how-to-undo-almost-anything-with-git/):

**Reverse a commit/push**: 

`git revert <SHA>`; basically creates a new commit with the inverse of changes already committed.

**Fix a commit message**: 

`git commit --amend or git commit --amend -m "Fixes bug #42"`

**Moving changes to the right branch**:

>Scenario: You made some commits, then realized you were checked out on master. You wish you could make those commits on a feature branch instead.

Undo with: 

`git branch feature, git reset --hard origin/master`, and `git checkout feature`

**Fixing an earlier commit**: 

`git commit --squash <SHA of the earlier commit>` and `git rebase --autosquash -i <even earlier SHA>`

The last one is probably the most nuanced, and so it's probably worth looking at the additional context:

>**Scenario**: You failed to include a file in an earlier commit, it’d be great if that earlier commit could somehow include the stuff you left out. You haven’t pushed, yet, but it wasn’t the most recent commit, so you can’t use commit --amend.
>
> **What’s happening**: `git commit --squash` will create a new commit with a commit message like squash! Earlier commit. (You could manually create a commit with a message like that, but `commit --squash` saves you some typing.)
> 
> You can also use git `commit --fixup` if you don’t want to be prompted to write a new commit message for the combined commit. In this scenario, you’d probably use `commit --fixup`, since you just want to use the earlier commit’s commit message during rebase. `rebase --autosquash -i` will launch an interactive rebase editor, but the editor will open with any squash! and fixup! commits already paired to the commit target in the list of commits, like so:

---

## Semantic Commit Messages

This is copy-pasted from this [gist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716). Mostly so I can always find it :)

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

### Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

### More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

### References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html