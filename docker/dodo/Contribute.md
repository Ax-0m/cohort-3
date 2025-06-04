## Docker Installation
- Install docker
- Start postgres
    - docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
- Build the image - `docker build -t user-project`
- Start the image - `docker run -p 3000:3000 user-project`

## Docker Compose Installation Steps
- Install docker, docker-compose
- Run `docker-compose up`