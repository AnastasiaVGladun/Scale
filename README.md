# Scale
Team: Scale  
Karen, Anastasia, Silvia, James, Saula, Yousuf

Recreational Fishing App - collecting data for good!

## Team Organisation 
* Scrum and Vibes Lead - Silvia
* Git Lead - Yousuf
* Product Owner - Karen
* Tech Lead - agile/shared team approach due to our small team.

## Project Management

![20210716_184236](https://user-images.githubusercontent.com/81403368/125923078-663ef9ae-e7e7-4c96-ad1d-a25e414502de.jpg)
![Screenshot_20210716-183709_Gallery](https://user-images.githubusercontent.com/81403368/125923101-e0a7d2c3-8166-4371-a30d-c09d8de974cf.jpg)

**Tool**

* Kanban board

![Screenshot_20210716-183957_Gallery](https://user-images.githubusercontent.com/81403368/125923113-f7e49a12-2af3-44a1-8ad2-e404bd7025de.jpg)

* Wireframes

![Screenshot_20210716-183820_Gallery](https://user-images.githubusercontent.com/81403368/125923107-e2a7800c-4488-41b8-ba55-5980b0bbc095.jpg)
![Screenshot_20210716-183859_Gallery](https://user-images.githubusercontent.com/81403368/125923111-2c7bc7c9-3515-4c34-8406-998620fbafb8.jpg)

* Scrums and check-ins

***Daily ***  
**Morning**
* Mindfulness - 5 mins
* Team check-ins - how are you feeling today
* Standup - what you did (if done anything in the evening), what you will do, what blockages

**Afternoon**
* Standup - what you did, what you will do, what blockages

**Evening**
* Standup - what you did, what you will do, what blockages
* Retro/check ins - what you learned, what went well today, what didnt go well, what would make tomorrow better

**Approach to work**
* People over product
* Pick of kanban board
* Pair as needed / review when solo
* If stuck - leave no longer than 15 mins - Ask for help
* Check in on each other as needed - if recognised group is stressed - all just go out for a walk/coffee

**Stress**
* Individual - red wine, go for a walk, exercise, talk fast

**Well-being/Team**
* Let each other know if you need anything, if you have any issues - communicate it. There are plenty opportunities during team get togethers but also just go for it anytime int the day.
* Shared lunch one day.


## The Tech
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [JWT Auth (Local)](https://jwt.io/)


## Views (Client Side)
**MVP**
  All users
  * Homepage  
  * Fish info - General info of fish for users to help them with ID 
  * Statistics - Show collective data of fish caught by location
  * Login - View for user to enter their login credentials 
  * Register - View for user to sign up for the App 
   
  Registered User 
  * User Page - a snippet / landing page for users
  * Log Catch (Form) - ability for users to log catch to populate own diary
  * Diary - Show users own data of fish caught
 
**STRETCH**
  All users
  * Rules - Link to different MPI pages based on region 
  * Statistics - Add view by time 

  Registered User 
  * Diary - add filter by location and time
  * User statistics - show users stats based on their diary info
  * Achievements - Gamefication - show user badges based on their own stats
  * Pot a Poacher (form) - upload images and info and share with fish cops to help build a trend/picture of suspicious behaviour
  * Weather - show weather for fishing
  * Log an observation (form) - upload images and info of observed environmental events
  * Share a photo (form) - upload images to share with others
  * Boat Uber (form) - user can upload info seeking for people to go fishing with 
  * Seabirds Handling Info - show users how to handle seabirds issues
  * User Page - add additional stretch features as they are built 


## Reducers (Client Side)
**MVP**
  * FishInfo - Store images of fish with their description 
  * RulesInfo - Store links for rules for each fishing region
  * Stats - Store information of all catch events for all users i.e location, fish name, quantity
  * Locations - Store a list of locations
  * Diary - Store information of user specific catch events
  * Users - Store information regarding user logins, auth status and auth errors
  
**STRETCH**
  * RulesInfo - Store links to different MPI pages based on region
  * Achievements - Store information of indivdual user achievements
  * Weather - show weather for fishing
  * Share a photo (form) - store images from users to render in user's own page
  * Boat Uber (form) - store info from users to render
  * Seabirds Handling Info - store seabirds handling info
  * User Page - add additional stretch features as they are built 

**OPTIONAL REDUCERS (may just be a post)**
  * Pot a Poacher (form) - upload images and info and share with fish cops to help build a trend/picture of suspicious behaviour
  * Log an observation (form) - upload images and info of observed environmental events


## Actions (Client Side)
**MVP**
  * FishInfo - SET_FISHINFO - fishinfo - to get all the fishinfo to render
  * RulesInfo - SET_RULESINFO - rulesinfo - to get all the rulesinfo to render
  * Stats - SET_STATS - stats - to get all the stats data to render
  * Locations - SET_LOCATIONS - locations - used in dropdown fields as they are needed in log catch form, stats
  * Diary - SET_DIARY - diary - to get all the fishcatches to render information of user specific catch events 
         * - ADD_CATCH - diary - to add fishcatches to user specific catch events 
  * Users - 
  
**STRETCH**
  * RulesInfo - SET_RULESINFO - rulesinfo - to get all the rulesinfo to render
  * Achievements - SET_ACHIEVEMENTS - to get all information of indivdual user achievements
  * Weather - SET_WEATHER - to get all weather info to render
  * Pot a poacher (form) - ADD_POACHER - poachers - to add photo and description
  * Log an observation (form) - ADD_OBS - observations - to add photo and description  
  * Share a photo (form) - SET_PHOTO - photo - to get all the photos to render information for user
                       * - ADD_PHOTO - photo - to add photo  
  * Boat Uber (form)  - SET_UBER - uber - to get all the info to render information for users
                       * - ADD_UBER - uber - to add info from users
  * Seabirds Handling Info - SET_RULESINFO - seabirds - to get all seabirds info to render seabirds handling info



## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
MVP
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/v1/statistics | No | Get the list of all users statistics | Array of Objects (object = a fish event) |
| Get | /api/v1/fish-info | No | Get the list of fish info | Array of Objects (object = A fish species) |
| Get | /api/v1/diary | Yes | Get the list of user own catches | Array of Objects (object = A fish catch event) |
| Post | /api/v1/diary | Yes | Add a fish catch to the db |  The catch that was added (as an object) |
STRETCH
| Get | /api/v1/diary/achievements | Yes | Get the list of user own achievements | Array of Objects (object = A achievement) |
| Get | /api/v1/rules-info | No | Get the list of rules info | Array of Objects (object = A region link) |
| Get | /api/v1/weather | Yes | Get the weather info | Array of Objects (object = A region's weather) |
| Get | /api/v1/photo | Yes | Get a list of user added photo |  Array of Objects (object = A photo and description (as an object) |
| Post | /api/v1/photo | Yes | Add a photo to the db |  The photo that was added (as an object) |
| Post | /api/v1/poacher | Yes | Add a suspicious behaviour/photo to the db |  The suspicious behaviour/photo that was added (as an object) |
| Get | /api/v1/observation | Yes | Add an observation to the db |   Array of Objects (object = An observation) |
| Post | /api/v1/observation | Yes | Add an observation to the db |  The observation was added (as an object) |
| Get | /api/v1/uber | Yes | Get a list of users uber requests|  Array of Objects (object = An uber request)) |
| Post | /api/v1/uber | Yes | Add a uber request to the db |  The request that was added (as an object) |
| Get | /api/v1/seabirds | No | Get the list of seabirds info | Array of Objects (object = A seabird (as an object) |


## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!

