# Linked List
The one stop solution to managing all your social media links on a single platform.

## 📃 About The Folder

![API GIF][gif]

This Folder is called Miko named after Hololive character Sakura Miko. This folder contains the official Backend API for Linked List.

## 🧩 Getting Started

To get a local copy up and running follow these simple steps.

### Starting the development server with docker 🐳

#### Prerequisites

Make sure you have Docker and docker-compose installed on your machine.

#### Steps to start the server

1. Run the following command in the root directory itself to build the Docker Environment and lateron use the same command to spin the Docker Environment without the build flag.

      ```sh
      docker-compose -f ./docker-compose.debug.yml up --build
      ```

2. Your server should be running on port [5000](http://localhost:5000).

### Starting the development server without docker 📡

#### Prerequisites

Make sure you have Node and TypeScript installed on your machine.

> **_NOTE:_**
>
>_The project was made with node version 14.15.1

#### Steps to start the server

1. Add environment file.

      `.env` file

      ```env
      NODE_ENV=development
      PORT=5000
      PG_PORT=<postgres port number>
      HOST=<hostname>
      USERNAME=<username>
      PASSWORD=<password>
      ```

2. To install all the dependencies run the following command.

      ```sh
      yarn install
      ```

3. Run the following command in to buid the dist directory.

      ```sh
      yarn watch
      ```

4. Run the following command in to start server.

      ```sh
      yarn dev
      ```

5. Your server should be running on port [5000](http://localhost:5000).

## 🔐 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- MARKDOWN LINKS & IMAGES -->
[gif]: docs/api.gif