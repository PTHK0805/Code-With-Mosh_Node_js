console.log('Before');

getUser(1, getRepositories)

function getRepositories(user) {
  getRepositories(user.gitHubUsername, getcommit);
}

function getcommit(repo) {
  getcommit(repo, displayCommits)
}

function displayCommits(commits) {
  console.log(commits);
}





