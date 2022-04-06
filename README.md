#  Typescript mock server example

Example project for the [Typescript mock server package](https://github.com/GuyT07/typescript-mock-server).

# Usage
Run `npm i`

Run `npm start`

Following endpoints should be available:

- `curl localhost:3000/users`
- `curl localhost:3000/users/1`
- `curl localhost:3000/users/profile/1`
- `curl localhost:3000/users/1/profile`
- `curl localhost:3000/flights`
- `curl localhost:3000/flights/1/details`
- `curl -X POST localhost:3000/users/1`
- `curl -X PUT localhost:3000/users/1`
- `curl -X DELETE localhost:3000/users/1`
- `curl -X OPTIONS localhost:3000/users/1`
- `curl -X HEAD localhost:3000/users/1`
- `curl -X PATCH localhost:3000/users/1`

Change the models and play around ;)
