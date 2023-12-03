# Messagely App

## Dev Steps

### Part 1: Init

```bash
npm install
npm install bcrypt
createdb messagely
createdb messagely_test

psql messagely < data.sql

```

Familiarize


### Part 2: Fix
#### Fix Users.js 

```bash
psql messagely < data.sql
jest -i
```
TEST


### Part 3: Fix routes files









### Other

#### JWT
```bash
npm install jsonwebtoken
```

```bash
lsof -i :3000
kill -9 <PID>

nodemon app.js
nodemon npm start
nodemon -e js,html,css
```

localhost:3000/
localhost:3000/auth/login/

localhost:3000/auth/register

localhost:3000/users

localhost:3000/messages


{"username": "mew", "password": "hello", "first_name": "joe", "last_name": "schmoe", "phone": "8675309"}

