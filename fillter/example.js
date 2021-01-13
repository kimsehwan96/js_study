const todos = [
    {
        id: 1,
        text: '첫번째에요',
        done: true
    },
    {
        id: 2,
        text: '두번째에요',
        done: false
    },
    {
        id: 3,
        text: '세번째에요',
        done: true
    },
    {
        id: 4,
        text: '네번째에요',
        done: true
    },
]

// const todo = todos.find(todo => todo.done === false) //조건에 맞는 아이템 찾기
// console.log(todo);

// const taskNotDone = todos.filter(todo => todo.done === false); //조건에 맞는것 찾아서 배열 만들기
const taskNotDone = todos.filter(todo => !todo.done);

console.log(taskNotDone);