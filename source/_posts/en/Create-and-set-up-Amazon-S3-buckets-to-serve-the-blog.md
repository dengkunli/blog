title: Set up Amazon S3 buckets and domain routing
date: 2015-12-14 19:33:21
categories:
- Learn to use Amazon Web Service
tags:
- AWS
- Hexo
- blog
---
In this artical, we will go through the following:
1. How to create and configure S3 Buckets
2. How to set up and configure Route 53
3. How to point your domain name to Amazon S3

## Create and configure S3 Buckets
First we log in to console and go the [S3 service](https://console.aws.amazon.com/s3/home). We’ll create 2 buckets here. Let’s say our domain name is example.com, then we’ll create a bucket named example.com and another bucket named www.example.com, be sure that the bucket name conrresponds EXACTLY with the domain name that you OWN ! We create a bucket by click the create bucket button and choose our bucket name and region. We can leave the region by default, of course selecting another region works just fine as well. Then we click on create.

After creation of 2 buckets, we do the configuration one by one. First we click the example.com bucket and open its properties by clicking on the Properties tab. In the Permissions section, click “Edit bucket policy” and paste the following code :
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "PublicReadForGetBucketObjects",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::dengkunli.com/*"
		}
	]
}
```
And we click save the policy and the change to permissions.

Next we open the Static Website Hosting section, choose to enable website hosting and enter index.html for Index Document field and 404.html for Error Document field, of course if you plan to use some other names it’s possible. Then we save the configuration.

For the bucket www.example.com, we don’t need to configure permissions, what we need to do is only to open the Static Web Hosting section and choose Redirect all requests to another host name, and in the field we specify “example.com”. This way we redirects all requests of www.example.com to example.com. If you prefer redirects example.com to www.example.com, just reverse the configuration we said above. Note the endpoint down because we are going to use it in the next section.

Finally, you can upload your data into the bucket. Click on the bucket name and we enter a page shows the content of our bucket. Il should be empty by now until we click on the upload button and uploads data. If we already configures a static blog site data like Hexo, we simply uploads it and we shall see the welcome page by entering the endpoints of our buckets.

## Set up and configure Route 53

First we go [Route 53 service](https://console.aws.amazon.com/route53/home). We go to “Hosted zones” and create a hosted zone by specifying the domain name to example.com and leave out the comment and type, then select create.

Once created, click “Go to Record Sets” and we can see there already have two records, the NS and SOA.

Next we are going to create 2 record sets.

First we create a A record for example.com. Click “Create Record Set”, leave out the Name field, select the Type to A (this should be the default), select Alias to “Yes” and click on the Alias Target field, a dropdown list should appear now, and we simply select the S3 bucket that we just created.

Second we create a CNAME record for www.example.com. In the Name field, enter www. Change the type to CNAME, and change TTL to 7200. We then paste the endpoint (the very long url) that we copy from the last section into the value field. And it’s done.

## Point your to Amazon S3

Technically speaking, we cannot point directly to S3 bucket address because its ip address doesn’t exists. We need to replace the nameservers of our domain. In our registrat’s domain’s DNS management tool, we do exactly the following :
1. Delete A record
2. Create a CNAME record making www points to the www.example.com bucket address (the long url again)
3. Disable the default nameservers provided by your registrat and enter the four nameservers of Amazon which you can find in the record sets of hosted zones in Route 53. You should see the four nameservers in the NS record set. Simply copy them.
4. Wait for DNS updates to take effect ! This is normally quick for some registrat like GoDaddy but it’s also possible that it takes hours or even 2 days to take effect.

**Note** If you don’t have a domain name, you can go to a registrat’s website and buy one for yourself. I currently use GoDaddy and it works fine for me, and the DNS update are real quick.

## Conclusion

Now the domain name should be pointing to our S3 bucket and we can see our website just by typing our domain name ! 
Enjoy yourselves !