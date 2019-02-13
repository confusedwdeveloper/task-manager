const accounts = [
  {id: 1,
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
// added the initial template and the function to add accounts.. Now I will add a function to remove accounts
const deleteAccount = function (i) {
  let x = accounts.findIndex( function (item, index) {
    return item.id === i
  })
  if ( x >= 0) {
    return accounts.splice(x,1)
  } else {
    console.log(`Account with id ${i} not found`)
  }
}
deleteAccount(6)
//Successfully added a function to delete account

//console.log(accounts)
