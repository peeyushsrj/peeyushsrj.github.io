---
categories: []
date: '2026-04-26T00:15:04.938266'
layout: post
source_url: https://ploum.net/2026-03-20-social-smolnet.html
title: The Social Smolnet
---

# The Social Smolnet

by Ploum on 2026-03-20

It might have been an email thread. Or a lobste.rs comment. It was a discussion about yet another attempt at a new decentralized social protocol. And we reached the conclusion that with blogs and email, we already had a decentralized social network. We only needed to use it.

This was the last push I needed to implement in Offpunk the social features I had imagined years ago. Share and Reply. Available since Offpunk 3.0.

## Share

Are you reading something interesting in Offpunk and want to share it? Well, simply write it:

share

or

share myfriend@example.com

A new mail containing the URL to share will be opened in your email client of choice (as determined by xdg-open). The title will be the title of the page. You only need to add some text to explain why you want to share that page.

## Reply

Ever read a blog post and wanted to send feedback or a simple thank you to the author? Simply write:

reply

Reply will try to find a mailto link by exploring the page, root pages and, since 3.1, potential "contact" pages. It sometimes works really well. Often, the mail address is obscured or hidden. That’s not a problem. You only need to find it once because Offpunk allows you to save it for the page or the whole online space.

If you come across an email address that may be of use in the future but don’t want to react now, use "save":

reply save author@example.com

or, if you want to use autodetection:

reply save

## Yes, it is enough

It looks like nothing. It looks like trivial. But for me, this really transformed Gemini/Gopher and the Small Web into a social network. As I use neomutt+neovim as my mail client, I don’t leave my terminal. I simply write "reply", neovim opens, I write "Thank you for this nice post", :wq, ,and voilà. The mail will be sent during my next synchronization.

Almost as easy as clicking a "like" button but way more personal. Even easier if, like me, you dislike touching a mouse or opening a browser!

## This is the Social SmolNet

In less than two months, I already used this feature to react to 40 different online spaces, not counting that I’ve used it multiple times with some people.

I even started using Offpunk as an address book for my blogger friends. Instead of laboriously autocompleting their email addresses, I go to their blog/gemini capsule/gopher hole and write "reply".

The biggest lesson I take is that "social networks" are not about protocols but about how we use the existing infrastructure. Microsoft and Google are working hard to make sure you hate email and hate building a website. But we don’t have to obey. We can enjoy writing lightweight HTML and sending quick emails to each other. We have the right to read, write, and have social fun without Javascript and centralized platforms. We have the duty to keep this torch lit.

In the meantime, if you receive from me very short emails reacting to some of your posts, now you know why.

But, of course, feel free not to reply!

### About the author

I’m Ploum, a writer and an engineer. I like to explore how technology impacts society. You can subscribe by email or by rss. I value privacy and never share your adress.

I write science-fiction novels in French. For Bikepunk, my new post-apocalyptic-cyclist book, my publisher is looking for contacts in other countries to distribute it in languages other than French. If you can help, contact me!
