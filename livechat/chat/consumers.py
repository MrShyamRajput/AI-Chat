import json,os
from channels.generic.websocket import WebsocketConsumer
from google import genai

class MyConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
    
    def disconnect(self, code):
        self.send("Websocket Disconnetd")

    def receive(self, text_data):
        api_key = os.getenv("GOOGLE_API_KEY")
        text_data=json.loads(text_data)
        client = genai.Client(api_key=api_key)
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