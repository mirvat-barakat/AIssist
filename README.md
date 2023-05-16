<img src="./readme/assets/Titles/title1.svg"/>

<br><br>

<!-- project philosophy -->
<img src="./readme/assets/Titles/title2.svg"/>

> A mobile application for assisting parents of children with special needs using AI.
>
> 

### User Stories
- As a user, I want to be able to join a parent's community for support and connection.
- As a user, I want to be able to ask any question related to my child's condition and receive relevant and accurate information.
- As a user, I want to be able to view a list of specialists in my area who can assist me and my child.
- As a user, I want to be able to submit a form with information about my child's situation and behaviors and get tailored activities for my child.
- As a user, I want to be able to provide feedback to enhance recommendations and support.


### Admin Stories
-  As an admin, I want to be able to manage users' accounts and profiles.
-  As an admin, I want to be able to monitor and moderate the community discussion.
-  As an admin, I want to be able to update and maintain the list of specialists in the domain.
<br><br>

<!-- Prototyping -->
<img src="./readme/assets/Titles/title3.svg"/>

> We designed AIssist using wireframes and mockups, iterating on the design until we reached the ideal layout for easy navigation and a seamless user experience.

### Wireframes
| Register screen  | Login screen |  Questions screen | 
| ---| ---| ---|
| ![Landing](./readme/assets/Mockups/Registration.w.png) | ![fsdaf](./readme/assets/Mockups/Login.w.png) | ![fsdaf](./readme/assets/Mockups/Questions.w.png) |

### Mockups
| Register screen  | Login Screen | Questions Screen |
| ---| ---| ---|
| ![Landing](./readme/assets/Mockups/Register-w.png) | ![fsdaf](./readme/assets/Mockups/Login-w.png) | ![fsdaf](./readme/assets/Mockups/Questions-w.png) |
| Activities screen  | Feedbacks Screen | Feed Screen |
| ---| ---| ---|
| ![Landing](./readme/assets/Mockups/Activities-w.png) | ![fsdaf](./readme/assets/Mockups/Feedbacks-w.png) | ![fsdaf](./readme/assets/Mockups/Feed-w.png) |

<br><br>

<!-- Implementation -->
<img src="./readme/assets/Titles/title4.svg"/>

> Using the wireframes and mockups as a guide, we implemented the AIssist app with the following features:

### User Screens (Mobile)
| Launch screen  | Login screen | Register screen | Specialists screen |
| ---| ---| ---| ---|
| ![Landing](./readme/assets/Implementation/Launch.jpeg) | ![fsdaf](./readme/assets/Implementation/Login.jpeg) | ![fsdaf](./readme/assets/Implementation/Register.jpeg) | ![fsdaf](./readme/assets/Implementation/Feed.jpeg) |
| Feed screen  | Comments Screen | Questions Screen | Activities1 Screen |
| ![Landing](./readme/assets/Implementation/Questions.jpeg) | ![fsdaf](./readme/assets/Implementation/Comments.jpeg) | ![fsdaf](./readme/assets/Implementation/Q&A.jpeg) | ![fsdaf](./readme/assets/Implementation/Activities1.jpeg) |
| Activities2 screen  | Activities2 Screen | Feedbacks1 Screen | Feedbacks2 Screen |
| ![Landing](./readme/assets/Implementation/Activities2.jpeg) | ![fsdaf](./readme/assets/Implementation/Activities3.jpeg) | ![fsdaf](./readme/assets/Implementation/Feedbacks1.jpeg) | ![fsdaf](./readme/assets/Implementation/Feedbacks2.jpeg) |

### Users Screens (Demo)
| Login& Register screens  | Community Screens | Share Post Screen |
| ---| ---| ---| 
| ![Landing](./readme/assets/Demo/Users/Launch.gif) | ![fsdaf](./readme/assets/Demo/Users/Community.gif) | ![fsdaf](./readme/assets/Demo/Users/SharePost.gif)  
| Specialists screen  | Questions Screen | Activities Screen |
|![Landing](./readme/assets/Demo/Users/Specialists.gif) | ![fsdaf](./readme/assets/Demo/Users/Questions.gif)| ![fsdaf](./readme/assets/Demo/Users/Activities.gif)

### Admin Screens (Web)
| Login screen  | Users Accounts Screen |
| ---| ---| 
| ![Landing](./readme/assets/Implementation/Admin1.jpg) | ![fsdaf](./readme/assets/Implementation/Admin2.jpg) |
|  View Specialists Screen |Add Specialist screen  |
| ![Landing](./readme/assets/Implementation/Admin3.jpg) | ![fsdaf](./readme/assets/Implementation/Admin4.jpg) |
| Community Moderation Screen | Community Moderation Screen |
| ![Landing](./readme/assets/Implementation/Admin5.jpg) | ![fsdaf](./readme/assets/Implementation/Admin6.jpg) |
| Logout Screen  
| ![Landing](./readme/assets/Implementation/Admin7.jpg)  

### Admin Screens (Demo)
| Login screen  | Users & Specialists Screens |
| ---| ---| 
| ![Landing](./readme/assets/Demo/Admins/Login.gif) | ![fsdaf](./readme/assets/Demo/Admins/Users&Specialists.gif) | 
| Posts Moderation screen  | Community Moderation Screen | Comments Display Screen |
| ![Landing](./readme/assets/Demo/Admins/Posts.gif) | ![fsdaf](./readme/assets/Demo/Admins/Comments.gif)
| Logout Screen |
| ![Landing](./readme/assets/Demo/Admins/Logout.gif) |

<!-- Tech stack -->
<img src="./readme/assets/Titles/title5.svg"/>

###  AIssist is built using the following technologies:

- This project uses the [react-native](https://reactnative.dev/) framework for users mobile application. It is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.
- Also this project uses React.JS along with Electron.JS for the admin panel.React is a JavaScript library for building user interfaces as a single-page application, and it allows the creation of reusable UI components.And For Designing admin we use Tailwind. Tailwind CSS is a framework for quickly building and customizing applications .
- This project uses for backend Laravel web application framework.Laravel is a PHP web framework intended for the development of web applications following the model–view–controller (MVC) architectural pattern.
- For database this project uses MySQL database. MySQL is an open-source relational database management system (RDBMS) that is based on Structured Query Language (SQL). RDBMS is a software or service used to create and manage databases based on a relational model.

<br><br>

<!-- How to run -->
<img src="./readme/assets/Titles/title6.svg"/>

> To set up AIssist locally, follow these steps:

### Prerequisites

- Install NPM from: [NPM](https://nodejs.org/en/download)

- Install composer from: [Composer](https://getcomposer.org/download)

- Database server: Any Apache HTTP Server, MariaDB database server, recommended [XAMPP](https://www.apachefriends.org)

### Installation

1. Get a free API Key at https://platform.openai.com/account/api-keys
2. Clone the repo
   ```sh
   git clone https://https://github.com/mirvat-brkt/AIssist
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
### AIssist Backend 

In `AIssist-backend`:

1. Copy `.env.example` file and rename it `.env`
2. Open your `.env` file and change the database name (DB_DATABASE) to whatever you need or to `assist_db`, username (DB_USERNAME) and password (DB_PASSWORD) field correspond to your configuration if you configured them.
3. Enter your API in `.env`
   ```js
   OPENAI_API_KEY = 'ENTER YOUR API';

3. Run the following command for larval ,JWT and Data Base  (you must have your XAMPP server running)
   ```sh
      php artisan key:generate
   ```
   ```sh
      php artisan jwt:secret
   ```
   ```sh
      php artisan migrate
   ```
   ```sh
      php artisan serve --host <YOUR_LOCAL_IPv4@> 
   ```

### AIssist Admin Panel

Go to `desktop-admins`:

 In The Terminal Run 

   ```sh
     npm run electron:serve
   ```

### AIssist Mobile Application

In `AIssist-mobile` :

1. Copy "or Create" `.env.example` file and rename it `.env` you can run
   ```sh
   cp .env.example .env
   ```
2. In The Terminal Run 

   ```sh
     npm start
   ```
<br> 

