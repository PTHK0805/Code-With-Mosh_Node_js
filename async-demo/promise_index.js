console.log('Before');
// Callback Hell
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});

// Solve Callback Hell with Promise
getUser(1)
  .then(user => getRepositories(user))
  .then(repos => getCommits(repos))
  .then(commit => console.log('Commits: ', commit))
  .catch(err => console.log('Error: ', err));

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('Reading a user from a database...');

      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  })

}

function getRepositories(username) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('Calling GitHub API...');

      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  })

}

function getCommits(repo, callback) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log('Calling GitHub API...');

      resolve(['commit']);
    }, 2000);
  })

}