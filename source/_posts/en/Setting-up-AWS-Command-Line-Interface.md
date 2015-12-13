title: Setting up AWS Command Line Interface
date: 2015-12-13 22:56:47
categories:
- AWS
tags:
- AWS
- cli
---
Amazon offers [complete documentation of AWS CLI](aws.amazon.com/cli), so I will only go through the basics here in order to get AWS CLI set up to work the quickest.

## Prerequisite
1. Have an AWS account
2. Have your access key ID and secret access key

## Process
Now we will go through the process of setting up AWS CLI.

### Install AWS CLI
See [here](http://docs.aws.amazon.com/cli/latest/userguide/installing.html#choosing-an-installation-method) for the latest installation method for different OS.

### Configure
In command line, type
```
$ aws configure
```
And we should see the prompt asking to enter access key ID, secret access key, default region name and default output format. For default region name, check here to see the corresponding regions (format example: us-west-2). For default output format, enter json.

And now we are all set to use AWS CLI !