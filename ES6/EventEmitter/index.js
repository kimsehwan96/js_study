'use strict'

const EventEmitter = require('events');

class ChatManager extends EventEmitter {

}

const chatManager = new ChatManager();

chatManager.on("join", () => {
    console.log("new user joined");
})

chatManager.emit("join") //특정 이름의 이벤트를 발생시키는 것. on 메서드에서 이것을 감지했을떄의 콜백 펑션이 있으므로 수행된다.