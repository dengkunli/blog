title: Install and set up Hexo
date: 2015-12-13 22:55:01
categories:
- Learn to use Amazon Web Service
tags:
- Hexo
- blog
---
In order to install [Hexo](http://hexo.io), we’ll first need to install [Git](http://git-scm.com) and [Node.js](http://nodejs.org). Then we can proceed to install Hexo with the following command (for Mac and Linux, add sudo before the command, because the parameter -g telling npm to install the package globally, which requires root privilege) :
```
$ npm install -g hexo-cli
```

Once installed, navigate to the folder where you want to place your blog date, and type the following command to initialize Hexo in a target folder (if the specified folder not exists, Hexo will create one) :
```
$ hexo init <folder>
$ cd <folder>
$ npm install
```

Now we should notice that a lot of files and folders have been generated in the folder, one of which is the <code>source</code> folder. We place all our blog posts in the <code>source/_posts<code> folder.

Next we generate our website with the following command :
```
$ hexo generate
```

Finally we launch our blog site in local machine :
```
$ hexo server
```

And if we go to localhost:4000 in navigator now, we should see the blog.