# Dreamcode: hoodie-plugin-s3

This document tries to envision what this plugin should be able to do. In the future, it should describe the code like a finished README.md would. This is our first idea, so please let us know what you think and make suggestions in the issues. Thanks in advance.

## Admin Dashboard

* add general credentials (input) so we can at least list available bucket(s)
* list available bucket(s)
* enable (checkbox) list available buckets from frontend
* create a new bucket if credentials allow it
* add a bucket to the bucket list
* optionally add bucket specific credentials only used for this bucket for wider permissions
* enable (checkbox) read or write access to each bucket from frontend if credentials allow it
* grant/revoke access on a per user basis (whitelist/blacklist)

## Backend

All of the below are requests from the frontend and will respond with an error if the general settings, specific user rights or credentials don't permit it.

* create a new bucket
* list available buckets
* list objects in bucket
* read object in bucket
* write object in bucket
* object exists in bucket
* bucket exists
* delete bucket
* and all of the [available API](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/frames.html) for S3...

## Frontend

Provide APIs to do all the things the backend can do.