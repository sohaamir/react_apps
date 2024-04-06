from flask import Flask, send_file
from flask_socketio import SocketIO, emit
import pygame
import io
import base64

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key'
socketio = SocketIO(app)

# Initialize Pygame
pygame.init()

# Set up the game window
width, height = 800, 600
screen = pygame.display.set_mode((width, height))
pygame.display.set_caption("My Python Game")

# Define the player's initial position
player_x, player_y = 400, 300
player_size = 50

# Game loop
running = True
while running:
    # Handle events
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    # Handle player movement
    keys = pygame.key.get_pressed()
    if keys[pygame.K_LEFT]:
        player_x -= 5
    if keys[pygame.K_RIGHT]:
        player_x += 5
    if keys[pygame.K_UP]:
        player_y -= 5
    if keys[pygame.K_DOWN]:
        player_y += 5

    # Clear the screen
    screen.fill((0, 0, 0))

    # Draw the player
    pygame.draw.rect(screen, (255, 255, 255), (player_x, player_y, player_size, player_size))

    # Update the display
    pygame.display.flip()

# Quit Pygame
pygame.quit()

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')

@socketio.on('keypress')
def handle_keypress(data):
    global player_x, player_y
    if data['key'] == 'left':
        player_x -= 5
    elif data['key'] == 'right':
        player_x += 5
    elif data['key'] == 'up':
        player_y -= 5
    elif data['key'] == 'down':
        player_y += 5
    emit('update_player', {'x': player_x, 'y': player_y})

if __name__ == '__main__':
    socketio.run(app)