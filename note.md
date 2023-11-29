container contain my app and all it's dependencies
think of image is a environment for your app

`docker build -t <image-name> ./`
`docker image list`
`docker container list`
`docker run --rm --name <container_name> <image-name>`
`docker container stop <container_name>`

mount: bind a folder from your local machine to a folder in the container
`docker run --rm --name <container_name> -v <local_folder:container_folder:permissions> <image-name>`

storage:
`-v`, `-mount`, `-volumn`

environment variables:
base on the image, you can set environment variables
`docker run --rm --name <container_name> -e <key=value> <image-name>`
or define in `Dockerfile`

networking and port mapping:
`docker run --rm --name <container_name> -p <local_port:container_port> <image-name>`
`docker run -d -p <local_port:container_port> --name <container_name> <image-name>`
`docker container rm <container_name>`
`docker container restart <container_name>`
`docker logs <container_name>`
`docker login -u "Your dockerhub username" -p "Your dockerhub password"`
`docker push <author/app:version>`

public depository for docker image: DockerHub
private registeries: Amazon ECR, Google Container Registry, Azure Container Registry

Docker Compose

streamr: a decentralized data streaming network, publisher/subscriber model, using ethereum protocol
`sudo chmod -R 777 <folder>`: make all user can read/write/execute files under folder
$(cd <relative folder> && pwd): get current path

`docker run -it` turn terminal into interactive mode
`docker run --restart unless-stopped` restart container unless stopped
`docker run -d` run container in background, detached mode
`docker logs --follow` follow logs if node in detached mode
