# Things
NodeJS test exam

# How does it work?
You can run it locally or with *docker-compose up* command.

# Setup .env
You must provide a *.env* file depending on your environment:

  **Docker**
  ```
  MONGO_URL=mongodb://mongo/things
  PORT=80
  ```

  **Local**
  ```
  MONGO_URL=mongodb://localhost:27017/things
  PORT=8080
  ```

# Test
**Docker**

```
curl http://localhost:5001/api/v1/query/{id}
```

**Local**
```
curl http://localhost:8080/api/v1/query/{id}
```
