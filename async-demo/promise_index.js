console.log('Before');
// Callback Hell
// 1:: Callback approach
getUser(1, (user) => {
  getRepositories(user.gitHubUsername, (repos) => {
    getCommits(repos[0], (commits) => {
      console.log(commits);
    })
  })
});

// Solve Callback Hell with Promise

// 2:: Promise-based approach
getUser(1)
  .then(user => getRepositories(user))
  .then(repos => getCommits(repos))
  .then(commit => console.log('Commits: ', commit))
  .catch(err => console.log('Error: ', err));


// 3:: Async and Await approach

async function displayCommits() {

  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  }

  catch (err) {
    console.log('Error : ', err);
  }
  
}
displayCommits();

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