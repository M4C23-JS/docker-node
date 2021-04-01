# Basic Configuration Docker with Node (WINDOWS)

## Requeriments

1. Install Docker Desktop for windows
   [here](<(https://www.docker.com/products/docker-desktop)>)
2. Install VSCode Editor [here](<(https://github.com/Microsoft/vscode)>)

## Step 1

Clone this repository

    git clone https://github.com/M4C23-JS/mac.projects.docker-image-container-volumen.node

## Step 2

Build Dockerfile

    docker build . --tag app:v1.0.0 --no-cache

make sure that you are in the directory right

## Step 3

Run docker with one local port and the docker port (3000). Also define the volumen (-v), using the path of our app directory matching with the path defined in WORKDIR/SOURCE in this case is /app (but can be, for example, /app/src)

    docker run --name app_1 -p 3000:3000 -v [FULL_LOCAL_PATH]:/app app:v1.0.0

> IMPORTANT: The FULL_LOCAL_PATH should be, for example:
> "C:\Users\User\Desktop\Docker\app"

## Step 4

Open

    http://localhost:3000

Macking any change in app.js or adding new file(s) in the local path and reload.

Its All!
