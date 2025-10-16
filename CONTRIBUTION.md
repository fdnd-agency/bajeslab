# Contribution
All code is created according to the conventions of [FDND Agency](https://github.com/fdnd-agency/.github/wiki/Workflow-conventions).

## `Git workflow`
We use the FDND [gitflow](https://www.gitkraken.com/learn/git/git-flow#the-git-flow-workflow):
- Nobody works directly on the `development branch`!
- Every team member works in their own `feature branch` that starts from `development`.
- Once the work is done, you open a `Pull Request` tot `merge` your `feature branch` back into `development`.
- Teammates `review and test` your work before it is merged.
- The `development branch` collects all approved work and serves as the `integration branch`.
- only after `teacher approval`, the code from development will be `merged into the main branch` as a `release`.
- The `main branch` is alway the `stable production branch`.

### How to create a branch
![image](https://github.com/user-attachments/assets/28d0b538-718e-4b91-a93c-a337127818d4)
- Use the `development tool` for creating new branches. Here Github automatically creates a new branch from a created issue.
- This tool can be seen in the right column menu of an issue.

### Branch naming convention
The name of a branch is: `feature-component-name` (feature-navbar)

### How to make commits (e.g. “Use clear commit messages in the form of: [type]: [description]”).
"At FDND Agency, because of Semantic Versioning, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Conventional commit is a specification, a set of rules that have to be followed when writing commit messages."

**Allowed Commit types:**
- `build: ...` Changes that affect the build system or external dependencies
- `chore: ...` Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci: ...` Changes to CI configuration files and scripts (GitHub Actions, netlify.toml)
- `docs: ...` Changes to documentation, eg: Readme.md, Handover.md or Figma files or design rationale in the Wiki
- `feat: ...` Implementing a new feature
- `fix: ...` Fix for a bug, style or layout issue
- `perf: ...` A code change that improves performance
- `refactor: ...` A code change that neither fixes a bug nor adds a feature but improves structure or readability
- `style: ...` Changes that affect readability but not the working of the code (source formatting, adding tabs or newline)
- `test: ...` Adding missing or correcting existing tests

> Bron: [Conventional conventions](https://github.com/fdnd-agency/.github/wiki/Workflow-conventions#conventional-commits) - FDND Agency conventions

## How to create and review pull requests.
Use the pull request template which you automagically get when creating a PR in one of our repositories.

Please make sure you follow the following rules:
- Write small PR's
- Review your own PR first
- Provide context and guidance

> Bron: [Pull request](https://github.com/fdnd-agency/.github/wiki/Workflow-conventions#pull-request) - FDND Agency conventions

## `Workflow`

### Issues
We work based on issues in the projectboard.
`An issue can be:`
- a `feature` (new functionality or component),
- a `bug` (fixing errors),
- a `task` (supporting work such as refactoring or styling),
- or `documentation` (README, design notes, handover).

We use `epics --> user stories --> tasks` to break work into manageable parts. Each issue is small, clear, and `assigned to at least one team member with a deadline`.

### MoSCoW prioritisation
We prioritise issues with the `MoSCoW` method:
- `Must have:` essential for delivery.
- `Should have:` important but not critical.
- `Could have:` nice to have extras.
- `Wont have (for now):` not included this sprint.

## Definition of Ready (DoR)
- The story has a clear title and description  
- Includes a checklist with acceptance criteria
- All required information and files are available
- Poker planning has been completed
- Everyone in the team understands the story

## Definition of Done (DoD)
- Code runs without errors
- All acceptance criteria of the story are met
- Code has been reviewed by a team member
- Functionally tested
- Merged into the `dev` branch
- Deployed to the test environment

## `Teamcanvas & collaboration rules`
<img width="912" height="649" alt="Scherm­afbeelding 2025-09-24 om 14 25 34" src="https://github.com/user-attachments/assets/82b8100d-b7d3-4d11-a189-2e93a2eb660e" />

### Shared goals
- Work with frameworks and CMS through the FDND Gitflow.
- Share knowledge within the group and apply it in the project
- Support each other in achieving personal learning goals

### `Personal learning goals`
1. [Branco:](https://github.com/Brancovanbeek)
- How do i structure a well organized SvelteKit project?
- How can i apply JavaScript independently?
- How can i combine and manage all the work efficiently?
   
2. [Nadira:](https://github.com/Naddybsx)
- How can i keep overview and control of my daily tasks?
- Which learning strategies can i use to acquire new knowledge quickly and purposefully without getting stuck in theory?
- How can i learn to recognize when i am stuck and communicate this in time?
  
3. [Saif:](https://github.com/Saif8599)
- How can I breakdown a big task in smaller pieces?
- How can i get more productive and focusing on quality work?

### Core values
> Respect diffrences within the team

> Help each other

> Listen actively to teammates

### Team agreements
- Stand-ups at the start of every class day (mon/wed/fri).
- Keep track of tasks and progress in the [projectboard](https://github.com/orgs/fdnd-agency/projects/92/views/1).
- Ask questions openly (Teams, github, school).
- Communicate clearly: share progress and blockers(also if absent).
- Follow coding conventions.
- Ask and give feedback regularly.
- Share and discuss learning goals.

## `Delivery checklist`
Before delivery, make sure:
- README.md is complete.
- Projectboard is up-to-date with all issues (closed,prioritised).
- All code reviewed and tested (lighthouse-, accessibility-, browser/device-, usertests).
- No open pull requests remain.
- Code is clean: unused files/code removed, structure refactored.

# Retrospective
- [Campfire session 10-10-20025](https://github.com/orgs/fdnd-agency/projects/92/views/8?pane=issue&itemId=133149085&issue=fdnd-agency%7Cbajeslab%7C126)
