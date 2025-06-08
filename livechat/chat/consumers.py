import json
from channels.generic.websocket import WebsocketConsumer
from google import genai

class MyConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
    
    def disconnect(self, code):
        self.send("Websocket Disconnetd")

    def receive(self, text_data):
        key='AIzaSyAnrPNTEbAuHQW_eesOF3uv3Zy_bMqOTCw'
        text_data=json.loads(text_data)
        client = genai.Client(api_key=key)

        try:
            response = client.models.generate_content(
            model="gemini-2.0-flash",
            contents=text_data["message"],
        )
        except:
            pass
        self.send(text_data=json.dumps({
            "message":response.text
        }))        