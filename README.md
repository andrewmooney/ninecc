# Nine Coding Challenge

A small API which takes POST data in JSON format, filters and returns it in the following format.

```
{
  "image" : "imageUrl",
  "slug" : "slug",
  "title": "title"
}
```

### Technology used

- AWS Lambda and API Gateway
- NodeJS 14.x
- AWS SAM
- AWS SAM Local for local development
- Jest

### Tests

Tested the API using Postman's built in test functionality. I have included a ready made collection,Just Import the 'Nine Coding Challenge.postman_collection.json' file in to the Postman application.

### Local Development

Local development was done using AWS SAM. This allowed for rapid development prior to deployment.

To start the api locally:

```
npm install
sam build
sam local start-api
```

To deploy to your AWS account:

```
sam build
sam deploy --guided
```

and follow the prompts.
