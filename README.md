# Sproutcloud React Project

## Live Site
https://sproutcloud.herokuapp.com/

Sproutcloud is a site to care for your plants through sound. This website is inspired by [Soundcloud](https://soundcloud.com/). Users can join this music platform to create and discover songs for the plant owner community.

<br>
</br>

## Features
[MVP Feature List](https://github.com/jdijaili/w16-sproutcloud-react-solo-project/wiki/MVP-Feature-List)

### 1. New account creation, log in, log out, and guest/demo login.
* Users can sign up, log in, and log out.

### 2. Songs
* Logged in users can view songs to browse through and their playlists.
* Logged in users can upload, edit, and delete songs from sproutcloud.

### 3. Audio Player
* An audio player allows users to listen to all songs uploaded to Sproutcloud

<br>
</br>

## Database Schema
[Sproutcloud-Schema](https://github.com/jdijaili/w16-sproutcloud-react-solo-project/wiki/Database-Schema)

<br>
</br>

## Future Features
- Playlists -so users can curate a list of songs they can listen to
- Genres -to browse songs by genre and create playlists by genres
- Likes -ability to like songs and save them in a central location
- Comments -to build a social platform that allows users to interact with one another

<br>
</br>

<h1> Getting Started </h1>

1. Clone this repo

    * ```https://github.com/jdijaili/w16-sproutcloud-react-solo-project/```

2. Install Frontend and Backend dependencies

    * ```cd frontend > npm install```
    * ```cd backend > npm install```

3. Create a .env file base on the .env.example given in the backend folder

4. Setup your username and database based on what you setup in your .env inside POSTGRES

5. Migrate and Seed models into the DB

    * ```npx dotenv sequelize db:migrate```
    * ```npx dotenv sequelize db:seed:all```

6. You can start the app using frontend and backed need to be started seperately

    * ```cd frontend > npm start```
    * ```cd backend > npm start```
7. You can use the Demo user to log in or create an account of your own.

<br>
</br>

<h1>Technologies Used </h1>
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>
</div>
