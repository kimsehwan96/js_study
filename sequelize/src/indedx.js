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
            console.log(task);
        });
    } catch(err) {
        console.log(err);
    }
};


async function getTask(id) {
    const task = await db.Task.findOne({where : { id }});
    return task;
    //새로운 프로미스 객체를 리턴하는것이니까
    //이 getTask 함수를 제대로 사용하기 위해서는 역시 await getTask 를 활용하여 다른 async function 안에서
    // 호출하는게 맞구나 !
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
    return "done"
  }

  //밑에 async 함수로 기존것들을 wrapping 하니까 되긴 되는데
  //이게 올바른 코딩인가? 이런 비동기적 함수들을 사용해서 또 비동기 처리를 하려면
  //async 함수를 임의로 만들어주어야 하나? 익명함수로도 테스트해보자.
  
  async function test(){
      const task = await getTask(1);
      const user = await getUser("kim")
      const assign = await assignTaskToUser(task, user);
      console.log(assign);   
  }

  test();

const test2 = async () => {
    const task = await getTask(2);
    const user = await getUser("kim")
    const assign = await assignTaskToUser(task, user);
    console.log(assign);   
}

 test2();


 async function listAllUserTasks(user) { // user object
    tasks = await user.getTasks()
    tasks.forEach((task) => {
      console.log(user + "has below task");
      console.log(task.taskName)
    })
  }


 const allUserTask = async () => {
     const user = await getUser("kim");
     listAllUserTasks(user);
 }

 allUserTask();
  