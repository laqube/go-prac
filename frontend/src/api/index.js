var socket = new WebSocket("ws://localhost:5050/ws")

let connect= ()=>{
  console.log("Attempting connection....");
  socket.onopen=()=>{
    console.log("Success!");
  };
  socket.onmessag = msg =>{
    console.log(msg);
  };
  socket.onclose = e =>{
    console.log("Socket Closed Connetion: ", e);
  };
  socket.onerror = err=>{
    console.log("Error paida boly: ", err);
  }; 
}

let sendMsg= msg=>{
  console.log("Sending a message: ", msg);
  socket.send(msg);
}

export {connect, sendMsg};