# AI-CHAT

## Introduction

Introducing my new AI-integrated project — **AI-CHAT**.

This is a practice-level project built with Django and WebSockets, focusing on full-duplex communication using Django Channels.

The project structure is simple yet clean — the main project is named **livechat**, and inside it, there's an app named **chat** that handles all WebSocket and Channels integration.

On the output screen, you can see the chat interface — where users can send messages and receive instant replies from the AI in real time.

This project was built to practice real-time communication, and it truly helped me explore core networking concepts hands-on.

From understanding socket layers to managing asynchronous connections — I learned a lot!

And yes — this is just the beginning.

AI-CHAT is my first step towards something bigger — a solid, upcoming AI-based project that’s already in the making.

So stay tuned — because real-time AI just got real!

---

## Features

- Real-time chat using Django Channels and WebSockets
- Full-duplex communication between client and server
- AI integration for instant message replies
- Practice with asynchronous networking in Django
- Simple and clean project structure for easy understanding

---

## Installation and Setup
 git clone: https://github.com/MrShyamRajput/AI-Chat.git
   cd AI-CHAT

# Create and activate a virtual environment:
python -m venv env
On Windows: env\Scripts\activate

# Install dependencies:
pip install -r requirements.txt

# Set environment variables (e.g. API keys): in terminal
export GOOGLE_API_KEY='your_api_key_here'

# Apply migrations:
python manage.py migrate

# Collect static files:
python manage.py collectstatic

# Usage
Open your browser at http://localhost:8000 (or your deployed URL).

Use the chat interface to send messages.

Receive instant AI-generated responses via WebSocket communication.

# Technologies Used
Python 3.x
Django 5.x
Django Channels
WebSockets
ASGI server (Daphne or similar)
Google Gemini API (or similar AI API)
JavaScript for frontend WebSocket handling

# Acknowledgements
This project helped me improve my understanding of:
Real-time WebSocket communication
Asynchronous programming in Django
Networking fundamentals for web apps
Integration of AI APIs with web technologies
