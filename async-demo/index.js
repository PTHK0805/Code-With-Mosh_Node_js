getUser(1, (user) => {
  console.log("User ID: ", user.id);

  getRepositories(user.githubName, (repo) => {
    console.log(repo);
  });
});

function getUser(id, callback) {
  console.log('Reading a user from database');
  setTimeout(() => {
    
    callback({ id: id, githubName: 'PTHK0805' }) ;
  }, 2000);
}

function getRepositories(username, callback) {
  console.log('Getting Repositories.....')
  setTimeout(() => {
    console.log("Github Username : ", username);
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000)
}