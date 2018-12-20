// Licensed to the Apache Software Foundation (ASF) under one or more contributor
// license agreements; and to You under the Apache License, Version 2.0.

/**
  *
  * main() will be invoked when you Run This Action.
  *
  * @param OpenWhisk actions accept a single parameter,
  *         which must be a JSON object.
  *
  * In this case, the params variable will look like:
  *         { "message":  Webhook POST payload}
  *
  * @return which must be a JSON object.
  *         It will be the output of this action.
  *         returns commit history
  *
  */
function main(params) {

    console.log("Display GitHub Commit Details for GitHub repo test04: ", params.repository.url);
    for (var commit of params.commits) {
        console.log(params.head_commit.author.name + " added code changes with commit message: " + commit.message);
    }

    console.log("Commit logs are: ")
    console.log(params.commits)

    return { message: params };
}
