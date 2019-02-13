const accounts = [{
  id: 1,
  task: 'test',
  completed: true
}]
const addAccount = function (n,t,c){
  if (n=== accounts[accounts.length -1].id +1) {
    accounts.push({
      id: n,
      task: t,
      completed: c
    })
  } else {
    console.log('Please check your ID and try again')
  }
}
addAccount(2,'Go for a walk', true)
addAccount(3,'Manage stress', true)
addAccount(4,'eat healthy', true)
addAccount(5,'complete the project', false)
addAccount(6,'read FCC curriculum', false)
// added the initial template and thr function to add accounts.. Now I will add a function to remove accounts
console.log(accounts)
