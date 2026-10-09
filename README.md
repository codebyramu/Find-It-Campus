# Findir

Findir is a simple Lost & Found platform where users can report lost or found items and submit issues.

## Architecture

The project is structured with a distinct frontend and backend architecture:

- **Frontend**: A static Single Page Application (SPA) utilizing HTML, CSS, and vanilla JavaScript. It is designed to be highly responsive and includes modern animations via GSAP. In a containerized environment, the frontend is served via an `nginx` web server. The frontend also serves static assets like `hero.mp4` for the hero section background.
- **Backend**: A RESTful API built with Node.js and Express. It acts as a JSON API server for processing requests.
- **Database / Storage**: The backend stores its data in a simple JSON file (`server/data.json`). This avoids the overhead of a dedicated database system for this simple use-case. A Docker volume mapping ensures that data is persisted across container restarts.

### Ports Overview
- **Frontend**: Serves traffic on HTTP port `8080`.
- **Backend**: Serves API requests on HTTP port `3001`.

## How to Run

### Prerequisites
- Docker and Docker Compose installed on your machine.

### Running with Docker Compose
The easiest way to start the whole application stack is using Docker Compose. It will build the backend image, set up the frontend NGINX server, and link the services together.

1. Clone or download this project directory.
2. Navigate to the project root directory:
   ```bash
   cd /path/to/findir
   ```
3. Start the containers in detached mode:
   ```bash
   docker compose up -d
   ```
   *(Note: You might need `sudo` depending on your Docker installation.)*

4. **Access the application**:
   - Open your browser and navigate to: `http://localhost:8080`
   - The backend API will be available at: `http://localhost:3001`

### Running Manually (without Docker)

If you prefer to run the services separately:

1. **Start the Backend**:
   ```bash
   cd server
   npm install
   node index.js
   ```
   *The API will be available at http://localhost:3001*

2. **Start the Frontend**:
   You can serve the frontend files using any static HTTP server. For example, using Python 3:
   ```bash
   # From the project root (where index.html is located)
   python3 -m http.server 8080
   ```
   *The website will be available at http://localhost:8080*

## Stopping the Application

If you started the application via Docker Compose, you can stop and remove the containers with:
```bash
docker compose down
```
