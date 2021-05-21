# LinkedList
The one stop solution to managing all your social media links on a single platform

## About 
Ever felt the need for adding more links to your Social Media bio? LinkList was made just for that! It gathers all of your social links into one page that is easy to navigate. LinkedList is an open-source alternative to paid, limited tools like [Linktree](https://linktr.ee/).

## Why use LinkedList?

Social Media like Instagram, Twitter, e.t.c does not provide support for multiple clickable links on post captions or on your bio. To help you overcome this limitation, tools like Linktree were made, providing users the ability to use their one stop URL field to direct viewers to multiple destinations.

While these tools are simple by design, we consider them to be more expensive and less customizable than they should. Using Linktree as an example is very limiting ike the free version doesn't even provide a proper theme and UI customization options.

## Features
-
* [ ] Display all your social media links in a single place
* [ ] Custom Logo
* [ ] Custom Favicon
* [ ] Customizable Link tabs
* [ ] Customizable UI and themes templates
* [ ] Auto Update
* [ ] Link Scheduling
* [ ] Private Links
* [ ] Analytics
* [ ] Custom Watermark

live preview all your changes while you work on them.

### 🏗️ Built With

* [<img src="https://img.shields.io/badge/-Svelte-FD5602?style=for-the-badge&labelColor=black&logo=svelte&logoColor=FD5602">](https://svelte.dev/)

* [<img="https://img.shields.io/badge/-SCSS-cc6699?style=for-the-badge&labelColor=black&logo=sass&logoColor=cc6699">](https://sass-lang.com/)

* [<img src="https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A">](https://nodejs.org/en/)

* [<img src="https://img.shields.io/badge/-MongoDB-3fa037?style=for-the-badge&labelColor=black&logo=mongodb&logoColor=3fa037">](https://www.mongodb.com/1)

* [<img src="https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc">](https://www.typescriptlang.org/)

---

## 🧩 Getting Started

To get a local copy up and running follow these simple steps.

### Starting the development server with docker 🐳

#### Prerequisites

Make sure you have Docker and docker-compose installed on your machine.

#### Steps to start the server

1. Add environment variable `MONGO_URI` in backend directory.
2. Run the following command in  the project directory itself.

      ```sh
      docker-compose up --build
      ```

3. Open <http://localhost:8080> to view it in the browser.

### Starting the development server without docker 📡

#### Prerequisites

Make sure you have Node and TypeScript installed on your machine.

> **_NOTE:_**
>
>_The project was made with node version 14.15._

#### Steps to start the server

1. Add environment files in both backend and frontend/web directories.

      `backend/.env` file

      ```env
      NODE_ENV = development
      PORT = 5000
      MONGO_URI = <URI>
      JWT_SECRET = <Secret Key>
      ```

      `frontend/web/.env` file

      ```env
      NODE_ENV = "development"
      REACT_APP_PRODUCTION_API_ENDPOINT = "production_url"
      REACT_APP_DEVELOPMENT_API_ENDPOINT = "http://localhost:5000"
      ```

2. To install all the dependencies run the following command in both backend and frontend/web directory.

      ```sh
      yarn install
      ```

3. Change the import in `index.css` file to default ant design styles or customize your css in the `theme.less` file and generate your css with the following command in the `frontend/web/src/styles` directory.

      ```sh
      lessc --js theme.less theme.css
      ```

      > **_NOTE:_** _Make sure you have installed `less` globally_

4. Run the following command in  the backend directory to start both server and React app.

      ```sh
      yarn dev
      ```

5. Open <http://localhost:3000> to view it in the browser.

## 🔐 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Suggestions and Bug Reports
Since this is an open source project all suggestions, requests and bug reports are always welcomed. If you have any don't forget to leave them in the issues section. But we recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

Don't forget to checkout the [CONTRIBUTING.md](CONTRIBUTING.md) for more info on how to contribute to this project.

## Branches

- staging -> pr this branch for everything
- prod -> don't even think of touching it, this is what's running in prod

<br>
<h2 id="credits">Credits</h2>
LinkedList was built by the following individuals.<br><br>
<ul>
    <li>Utkarsh Agarwal (<a target="_blank" href="https://github.com/agarwal222">@agarwal222</a>)</li>
    <li>Sudeep Deysarker (<a target="_blank" href="https://github.com/Lunaticsatoshi">@Lunaticsatoshi</a>)</li>
</ul>

Currently LinkedList has only two active contributors and we would really love your help.V isit the <a target="_blank" href="https://github.com/OtakuStanYoutube/LinkedList/issues">issues page</a> today and create your first pull request!