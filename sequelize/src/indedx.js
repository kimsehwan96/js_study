const db = require('./db/models');

//Promise 예제.
function getTaskPromise() {
    db.Task.findAll()
    .then((tasks) => {
        tasks.forEach((task) => {
            console.log(task.taskName);
        });
    })
    .catch((err) => {
        console.log(err);
    });
}

//Async await 
async function getTaskAsync() {
    try {
        const tasks =  await db.Task.findAll();
        tasks.forEach((task) => {
            console.log(task.taskName);
        });
    } catch(err) {
        console.log(err);
    }
};

async function getTask(id) {
    const task = await db.Task.findOne({where : { id }});
    return task;
}


async function createUser(name) { // String
    const user = await db.User.create({ name });
  
    return user
  }

  // createUser("kim");
  
  async function getUser(name) {  //String
    const user = await db.User.findOne({ where: { name } });
  
    return user
  }
  
  async function assignTaskToUser(task, user) { // Task Object // user = String || object || int
    await task.setUser(user)
  }

  
  async function listAllUserTasks(user) { // user object
    tasks = await user.getTasks()
    tasks.forEach((task) => {
      console.log(task.taskName)
    })
  }
