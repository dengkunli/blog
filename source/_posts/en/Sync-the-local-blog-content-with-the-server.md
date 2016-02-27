title: Sync the local content with the S3 bucket
date: 2015-12-14 21:32:28
categories:
- Learn to use Amazon Web Service
tags:
- AWS
- blog
---
To sync the local content with the S3 bucket is easy through one command. I assumed that you have configured AWS CLI, if not, read my post [Setting up AWS Command Line Interface](http://dengkunli.com/en/Setting-up-AWS-Command-Line-Interface/index.html). 

Let’s say we’re trying to sync our Hexo blog data with S3 bucket, we simply type the following command and everything is synced with amazon taking care of everything, remember to replace example.com with our own doamin name :
```
aws s3 sync public s3://example.com --exclude *.tmp
```
