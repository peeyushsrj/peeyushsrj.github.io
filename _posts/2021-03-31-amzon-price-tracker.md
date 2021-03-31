---
layout: post
title:	Amazon Price Tracker
date:	2020-03-31
draft: false
category: SoftwareDiscovery
author:	Peeyush Singh
---



**AIM:** This utility helps you to alert when a price goes down for a certain item on amazon. You can simply paste `url`, `buy_below` price and `email` to which alert needs to be sent! 

This application can be accessible via this [Google form](https://forms.gle/KbYSJnFPHGvKAZzQ7).

If you want to self host the code (run the  code by yourself). Use the following [repository](https://bitbucket.org/peeyushsrj/amzsc/src/master/), I am using [openfaas](https://www.openfaas.com/) to deploy. (build using given `Dockerfile` & call hook periodically)

*Note - you will continuously receive emails every hour; if the price goes down below the price.

