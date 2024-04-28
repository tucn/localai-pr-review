import { getInput } from "@actions/core";
import { context, getOctokit } from "@actions/github";
import dedent from "dedent";
type GithubContext = typeof context;
const url = getInput("url");
const token = getInput("token");
// chat fucntion
chat(url, getRepoUrl(context));
// Get diff from files
getDiff().then((files) => {
  console.log(
    dedent(`
    Your PR diff:
    ${JSON.stringify(files, undefined, 2)}
    `),
  );
});

function chat(url: string, repoUrl: string) {
  console.log(
    `'You are running a GH Action in ${repoUrl}' that send message to ${url}`,
  );
}

function getRepoUrl({ repo, serverUrl }: GithubContext): string {
  return `${serverUrl}/${repo.owner}/${repo.repo}`;
}

async function getDiff() {
  if (token && context.payload.pull_request) {
    const octokit = getOctokit(token);

    const result = await octokit.rest.repos.compareCommits({
      repo: context.repo.repo,
      owner: context.repo.owner,
      head: context.payload.pull_request.head.sha,
      base: context.payload.pull_request.base.sha,
      per_page: 100,
    });

    return result.data.files || [];
  }
  return [];
}
