---
layout: post
title:	(deprecated) Web Summary
date:	2020-03-31
draft: false
category: SoftwareDiscovery
author:	Peeyush Singh
---

**AIM:** Read only headlines out of website/article.  

For Public Use; drag [this link](javascript:location.href='http://fosting.in:8080/function/sudoc?selector=h2&url='+location.href) to your bookmarks bar. This will convert any website to headlines. New url will be the format of ; 
nst
```
http://fosting.in:8080/function/sudoc?selector=h2&url=https://pyload.net/
```

Chnage selector to `h1, h2, h3` to select required headlines.

Open source code available [here](https://bitbucket.org/peeyushsrj/sudoc/src/master/)! (usng openfaas to deploy this!)