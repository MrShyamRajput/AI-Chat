const websocket=new websocket("'ws://localhost:8000/chat/'")

websocket.onopen=function(){
    console.log("Websocket connected message from js")
}

websocket.onmessage=function(e){
    console.log(e)
}

websocket.onclose=function(){
    console.log("Websokcet closed..")
}


sendMessage=function(){
    console.log('button clicked')
}