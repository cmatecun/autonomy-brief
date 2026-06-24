---
source: stratechery
from: Ben Thompson <email@stratechery.com>
subject: "My Vibe Coding Adventure, The App and the Experience, Ten Takeaways (Stratechery Update 6-24-2026)"
date: 2026-06-24T10:02:50.000Z
extracted: 2026-06-24T13:08:12.976Z
---

# My Vibe Coding Adventure, The App and the Experience, Ten Takeaways (Stratechery Update 6-24-2026)

**From:** Ben Thompson <email@stratechery.com>  
**Date:** 2026-06-24T10:02:50.000Z

---

My experience and reflections on vibe coding an app that I plan on actually using regularly.

View in browser ( https://stratechery.com/2026/my-vibe-coding-adventure-the-app-and-the-experience-ten-takeaways/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L215LXZpYmUtY29kaW5nLWFkdmVudHVyZS10aGUtYXBwLWFuZC10aGUtZXhwZXJpZW5jZS10ZW4tdGFrZWF3YXlzLyJdfSwiZXhwIjoxNzg0ODg3MzcwLCJpYXQiOjE3ODIyOTUzNzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.ExcBzkpY_h71Ne6BA2yWaSQ1EZ_5IHyjJ-llRHaH3DkmuOC0idTcOv1WX6Z8N0GBFM1F4kTWeZQJa7O1Y9RfzyRP1KXIDcpZSfgFuUjkGS0iflFUg0pf5u8UVzTjDafauRJhpdWmeBBnYckZs1QF4EqJFVeRqXyeIsl4uaRj3FJ57OG2MXjfdVUPEtV42Dt_kHu4PPEW-N0y0GKzceElXiIJyJD44O1I_9vY67WgvEx9tL4kbgsEcam3Xw_VgJiEDa2-a6N7xsl-4_td6UhytDZcenx7lKDTHanMRQwKAuW4Ngf46oh9IkzkwmzfSdlNjZ6JmQQwSVkpohWHlHaCBw ) | Listen in your podcast player ( https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Frss.stratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 )

( https://stratechery.com )

*******************************************************************
My Vibe Coding Adventure, The App and the Experience, Ten Takeaways
*******************************************************************

( https://stratechery.com/2026/my-vibe-coding-adventure-the-app-and-the-experience-ten-takeaways/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L215LXZpYmUtY29kaW5nLWFkdmVudHVyZS10aGUtYXBwLWFuZC10aGUtZXhwZXJpZW5jZS10ZW4tdGFrZWF3YXlzLyJdfSwiZXhwIjoxNzg0ODg3MzcwLCJpYXQiOjE3ODIyOTUzNzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.ExcBzkpY_h71Ne6BA2yWaSQ1EZ_5IHyjJ-llRHaH3DkmuOC0idTcOv1WX6Z8N0GBFM1F4kTWeZQJa7O1Y9RfzyRP1KXIDcpZSfgFuUjkGS0iflFUg0pf5u8UVzTjDafauRJhpdWmeBBnYckZs1QF4EqJFVeRqXyeIsl4uaRj3FJ57OG2MXjfdVUPEtV42Dt_kHu4PPEW-N0y0GKzceElXiIJyJD44O1I_9vY67WgvEx9tL4kbgsEcam3Xw_VgJiEDa2-a6N7xsl-4_td6UhytDZcenx7lKDTHanMRQwKAuW4Ngf46oh9IkzkwmzfSdlNjZ6JmQQwSVkpohWHlHaCBw ) Wednesday, June 24, 2026

Good morning,

Today is the last Update before Stratechery’s annual summer break and the beginning of the summer schedule ( https://stratechery.com/stratechery-plus/schedule?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS9zdHJhdGVjaGVyeS1wbHVzL3NjaGVkdWxlIl19LCJleHAiOjE3ODQ4ODczNzAsImlhdCI6MTc4MjI5NTM3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.cJH5JQdQC06GCoj2ulKb99STzyFaI-ZyO2cb6mTJRzyYHw9KdOfTOSU3CnAFps9SNwuL5x1SLTRC7JHxqtyX3WSVKgrztMZFtBCXr4ORZ6DNFaKNPyV1k3-jAVKNUoteDLgXSrsWgXFcZSQS45KPOuaxcf9mDrqOy_wVWUJAwLlr2CahIPy-f-13PwHRdK_ElDHiOyTimZF9f3TkDjy2oZueZGyaKsnfjt2RKXX_WdZtXg7ZqxLgjLdEwqUef-tGw56YUwHF0LTkbG2oURYBOd_rdiUqo8mq-C4U4YjDmTZSRFAyeYDO7Y_w0uWCBlYKFYSJz1yGkCVkRUhEVWFDSA ) ; there will be a Stratechery Interview tomorrow and then the next Update will be Monday, July 6.

On this week’s episode of Sharp China ( https://sharpchina.fm/member/episode/party-building-and-xis-dominance-memory-chips-and-asml-accusations-germanys-puzzling-push-for-plaza-accords ) , Andrew and Bill discuss the current state of Xi Jinping and his hold on power, the memory opportunity for Chinese firms, and the U.S. government’s concerns about ASML.

On to the Update:

My Vibe Coding Adventure
------------------------

Three years ago I spent this exact same Update — the last one before a summer break — talking about my personal experience using a Starlink ( https://stratechery.com/2023/starlink-solution-starlink-experience-starlink-implications/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDIzL3N0YXJsaW5rLXNvbHV0aW9uLXN0YXJsaW5rLWV4cGVyaWVuY2Utc3RhcmxpbmstaW1wbGljYXRpb25zLyJdfSwiZXhwIjoxNzg0ODg3MzcwLCJpYXQiOjE3ODIyOTUzNzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.UOZclra6a5Zygyz54HEmGzcug3HBcRJEexCCkdp2KV7Y0yBKrzsMtRrZ9MIifNfRywgv5lMUvn0SaXPx7Mfs9LzCOF7PFnVpEEKzjz2ZpURuOG7O6BZp2_vJNvjyOvWqhAz_JcAoEiOQbXzSX5t-Q_Mm8e_BFsdbLO_6UznJq86LpRtr-SEKZRLNSeZBsiihjwlDPEYQfRk0_3R0owO_YFYJf3w-R8adSAy6xmVEBkgxMOEw6hltteUWVWk3bodPmVcJIQwaIYqPqAb17K-t9yGUo-_KpFZECisS-ry87FM8nno4hyZ4RJkPPgDXlV8DcsEIcKpDiWkQOk4_9OvpZw ) in the boonies of northern Canada. Well, I’m headed back to the same general vicinity (different lake, though), and thank goodness I have a Starlink, because I would hate to waste a single opportunity to vibe code!

I’m kidding, mostly. I do, however, want to write about the current state of vibe coding from a personal level, as someone who hasn’t programmed in 25 years, but who does generally know his way around an app of some complexity — that’s an important distinction, because I have used AI to write a good number of shell scripts and tiny one-off apps for doing things like de-duplication, file syncing, etc. What I really needed was a use case, and as I was preparing for this upcoming trip, an obvious one occurred to me.

I am, if you haven’t noticed, pretty busy: I write multiple Updates and/or Articles a week, record a Stratechery Interview, an episode of Sharp Tech, and two episodes of Dithering, and also run a bootstrapped software business on the side; most importantly, to me anyway, I am a baseball and basketball dad, which consumes most of my weekends most of the year.

One unfortunate side effect of this is that, a year on, I’m not fully unpacked from my move back from Taiwan. The house looks ok, but that’s mostly because lots of stuff was fairly randomly put on a bunch of shelves in my garage and basement; that, unfortunately, means I can’t actually find anything, as I discovered while preparing for this year’s fishing trip.

One way I cope with my schedule is by having assistants. Anyone listening to this as a podcast knows Daman, who reads out excerpts I quote in my Updates; I also have someone who works with me here on the ground in Wisconsin. That should provide the obvious solution to my stuff-on-shelves problem: let him organize it. The problem, however, is that if he organizes everything, then I still don’t know where anything is; my intention has been for me to put everything in its place, and then even if he maintains it, I still know where everything is.

What I need is not AI, but software: specifically, I need to let go of being organizer-in-chief (or be fired for negligence), and fully entrust my assistant to completely organize the house and put everything away in a place that makes sense to him. The way to bridge the gap to me being able to find things is by having an app that makes it easy to record where something is placed and even easier to find out where that is.

There are, to be clear, a ton of home inventory apps. A lot of them, however, are made for a single person or are way too complicated or don’t use obvious AI affordances; the new breed of AI-centric apps, meanwhile, trust AI too much, promising to identify objects from a picture of a room and getting half of them wrong (if lucky!). In truth, however, I didn’t really do a deep dive on what was out there: I knew that AI afforded the opportunity to build exactly what I wanted — and no more! — specifically for a situation where I had an assistant who I could deputize to do a lot of grunt work. That right there is the biggest factor: on one hand, I feel a little sheepish writing about having an assistant; on the other hand, people with home assistants aren’t generally a big market for developers to target, which is precisely why the vibe-coding route was appealing to me.

The App and the Experience
--------------------------

I can’t yet report whether or not my inventory app changed my life; we have to actually catalog everything and see if we can maintain it (which again, is easier if it is someone’s job). What I will say is that yesterday I felt good enough about what I had built that I split the app into a production version and a development version because I think the former is far enough along to start ingesting real data; I’m confident in the workflows and think it is going to make my life better.

To briefly summarize the app, the house has rooms, rooms have storage structures (a set of shelves or drawers, for example), and structures have locations (a specific shelf or drawer). Every location has a QR code. For the initial catalog building you can choose a location and take a photo of each object; AI identifies the object using the camera, which you can edit and add to the catalog. In the long run, when new objects arrive, you can identify them with the camera, then place them wherever you want and scan the QR code to record where they are. Then, on the other end, to find something you simply ask, and you’re told the location (this is, admittedly, the least developed part of the app, and the highest risk in terms of it not working well enough; I’m pretty confident though).

Again, this isn’t the most complicated app in the world, but it’s not the simplest either. It’s also not something that the AI could one-shot — or if it could, I’m pretty sure I wouldn’t like the results. I put in a lot of work considering the data model and the UI, but not in isolation. I had an assistant whose biggest flaw was over-eagerness: I was working in Codex and my biggest frustration was when it would start coding while I was still giving feedback, or when it failed to make a plan that I approved first.

At the same time, I have an app that is perfectly suited to my exact needs, and I have it in a matter of days (at least the current state — there is a lot more work to be done). Moreover, I didn’t write a single line of code, or hire anyone to do so. It really does just work, at least for me.

I do, I should note, have a fair number of advantages in terms of making this work. First, while I’m not a programmer, I do have a pretty good handle on how software works, what is possible and what isn’t, where pitfalls may occur, etc. I’m already used to breaking down a problem into its component parts and working on one thing at a time, building an app piece by piece and not asking for things that are at odds with the underlying data model. The AI will try and give you what you want, and that’s not always a good thing!

I also happened to have the right compute infrastructure to make this work. One concern about vibe-coded apps is security, and you might think that would be particularly pressing for an app that is listing all of my belongings. Fortunately, however, I have both a Mac mini in my rack (for running Codex) and an Intel NUC running Linux (for running Docker containers in production); I can limit access to the app to my local network, without ever having to expose anything to the public Internet (I do have remote access via Tailscale). I also have a local NAS to store the photos I take.

As an aside, there is a part of me that is absolutely delighted at how Codex and Claude Code actually work, because it feels like such a throwback. Both Codex and Code are very much local applications, in that they need to run on one computer; that’s where all of their documents are, whether that be the instruction docs you make for them or the actual code and database. Moreover, this is a computer that you want to have connected and running all of the time. In other words, what you want is a desktop computer; the portability and convenience of laptops are actually a detriment when it comes to running the most exciting new technology.

What you can do, however, is access whatever computer is running Codex or Code from another computer or your phone using OpenAI or Anthropic’s apps. In other words, even if you don’t realize it, you’re running your own little server, and it’s very much a thin client architecture: the apps for each simply stream in whatever is displayed on the host computer. There is basically no computation that happens on your remote device.

Of course a huge portion of the computation doesn’t happen on your remote device either: the heavy lifting happens on OpenAI or Anthropic’s servers, and there is a lot of it. I would regularly have plans that took 20 to 30 minutes to execute, particularly during early development when we were building out the scaffolding of the app; what is great about this time is that you can do literally whatever you want and feel very productive! I cleaned my kitchen, watched some baseball, drove my car, all while doing work!

Ten Takeaways
-------------

There isn’t anything groundbreaking about this story; vibe coding has been a thing for over a year, and something that clearly works for right around six months. There is, however, something very tangible about diving deeply into it for yourself.

The first takeaway is an optimistic one: I am making software that (1) is only ever going to be for my personal use and (2) it is software that was never going to be made otherwise. There were no software engineers unemployed in the writing of this Update!

The second takeaway runs in the opposite direction: I have been firmly in the camp that no human is going to be writing software in the very near future, but that was an intellectual conclusion; once you’ve experienced vibe coding the conclusion is visceral. It seems absolutely insane and nigh on unthinkable to me that anyone would even want to code by hand ever again. It’s frankly kind of nuts to think about the tedious work people did for decades to bring technology to this point without AI

The third takeaway lands somewhere in the middle: perhaps I am flattering myself, but I don’t think that just anyone could have built my app as effectively as I did, in the relatively short amount of time that I did so, and have it work as well as it does. As I noted above, I’m not a programmer, but I understand at a decently deep level how software works, which I think helped me move a lot faster without ending up in dead ends that made the app unwieldy. In other words, you still need a developer, just maybe not a coder.

My fourth takeaway goes further than that: this exercise left me feeling pretty bullish about the designer and architect archetypes. In terms of design, there is the surface level stuff — specifically, AI is hilariously bad at UI. More importantly, however, there were a few important decisions in terms of how the user engaged with the app where there were multiple options, and often the AI went in a direction that worked and made sense technically but was actually terrible to use; actually thinking through use cases and the user experience was a huge value-add from me, in the same way that I’ve seen good designers help excellent engineers avoid getting stuck in the technical details and stay in touch with actual users. Similarly, planning matters: it’s really easy to get started, which is to say it’s easy to accumulate a lot of architectural debt; getting your data model wrong up front makes everything harder in the long run, for example.

The fifth takeaway is that I was, at the end of the day, making software, not AI. Or, to put it another way, the AI is a means to an end, which is a product. What is unique is that I can make a product just for me, not hope that I can bend someone else’s product to my use cases.

The sixth takeaway is that the AI still very much matters in terms of the desirability and usability of the product. Even if I could make this inventory app, it would be a drag to use without AI-driven photo identification, or natural language search. The AI features aren’t just there for AI’s sake: being usable is just as much a barrier to viability as is being makeable.

The seventh takeaway is another visceral feeling: I’ve made the case that AI is less compelling for consumers than enterprises because only the latter want to pay for productivity; the former want to be entertained. Well, let me tell you, I was pretty entertained making this app, and I already have a bunch of new ideas of stuff I want to do, just because I can. I’m hardly the typical consumer, to be sure, but I understand why all of the vibe coding apps and services are taking off. And, on the flip side, it’s easy to see why AI can make you feel productive without actually being productive. The measurement challenge for enterprises is real.

The eighth takeaway is that I’m extremely excited about an entirely new avenue for hackers and makers. I remember being in high school and college and spinning quaint business plans about building websites for small businesses and whatnot; after all, I knew my way around GeoCities! I can imagine an entirely new generation of mini-entrepreneurs building little custom apps for friends and family, and that delights me. I also love the fact that owning your own hardware and controlling your own networking is clearly the best way to benefit from this stuff: so much tech stuff was becoming appliance-like that it felt like my generation was going to be the only one that actually understood how stuff worked; we’re back in a world where the greatest benefit will accrue to those who like to tinker.

My ninth takeaway is that I think that everyone needs to try and vibe code an app. I actually don’t think I changed any of my big picture conclusions — loosely held though they may be — because of this experience; I do feel some of them, as I noted, much more viscerally. It’s simply incredible what is possible, and it’s amazing that I feel late having done something that really was only viable six months ago.

My tenth takeaway is that fishing feels like the perfect vibe code activity: you get to feel productive sitting on a boat with the line in the water, approving a pull request right after you pull a big one out. What a world!

This Update is also available as a podcast. To receive it in your podcast player, visit Stratechery ( https://stratechery.passport.online/member ).

The Stratechery Update is intended for a single recipient, but occasional forwarding is totally fine! If you would like to order multiple subscriptions for your team with a group discount (minimum 5), please contact me directly.

Thanks for being a subscriber, and have a great day!

Listen to this update and other Stratechery Plus content in your podcast player:
Stratechery ( https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Fstratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Sharp Tech ( https://sharptech.fm/member/podcast?url=https%3A%2F%2Fsharptech.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Dithering ( https://dithering.passport.online/member/podcast?url=https%3A%2F%2Fdithering.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Sharp China ( https://sharpchina.fm/member/podcast?url=https%3A%2F%2Fsharpchina.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 )
Greatest Of All Talk ( https://goat.passport.online/member/podcast?url=https%3A%2F%2Fgoat.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Asianometry ( https://asianometry.passport.online/member/podcast?url=https%3A%2F%2Fasianometry.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 )

Subscription Information

You are receiving this email because you are subscribed to Stratechery ( https://stratechery.com ).

Click here ( https://stratechery.passport.online/member/login?email= ) to view your account and manage your subscriptions.
Click here ( https://stratechery.passport.online/member/unsubscribe?unsub=https%3A%2F%2Fstratechery.passport.online%2Fapi%2F1.0.0%2Fusers%2FCLKjCtDhPT8bsKnDAgUcu%2FchannelOptOut%3Faccess_token%3DeyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZS9hcGkvMS4wLjAvdXNlcnMvQ0xLakN0RGhQVDhic0tuREFnVWN1L2NoYW5uZWxPcHRPdXQ_Y2hhbm5lbD1lbWFpbFx1MDAyNnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSUyRm1lbWJlciUyRnVuc3Vic2NyaWJlIl19LCJleHAiOjE3ODQ4ODczNzAsImlhdCI6MTc4MjI5NTM3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJtZW1iZXI6d3JpdGUiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.a5K3rwMJnFgaT2WWfU1Hfn3IlI8W1_azmCuy-j3Y9OtrB2JZwWJUXzyr4DTxhuk9RTlLUpXh3IUrVWLntecP1uFW1Yk8UAjEdZlEgR3U9UhqoLz-nsx6GFZ91Ip0dpz1ahQUFL2oPNHMubHsWn_-trR0smcn4mii4lVe89xPQ-0JVe6I_V7LGlCVS5vMBLFeHV1xund4C-XuGw9nl4bq6O-3ZS-PRrLWy3UHdPva6kLhvb0Vl1jsu_w-zvjkGtm8Wq49jWldwGhjta5HngXjUsZUklWfSOp0p8ytDrc9fXYky06h2J3OPbnQvixXhFT7rusRSkooSr9i_FmlbnWrQw%26channel%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstratechery.passport.online%252Fmember%252Funsubscribe ) to unsubscribe.

© 2026 Stratechery LLC ( https://www.stratechery.com ) , 2093 Philadelphia Pike #9930, Claymont DE 19703

---

## Links found in email

- https://stratechery.com/2026/my-vibe-coding-adventure-the-app-and-the-experience-ten-takeaways/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L215LXZpYmUtY29kaW5nLWFkdmVudHVyZS10aGUtYXBwLWFuZC10aGUtZXhwZXJpZW5jZS10ZW4tdGFrZWF3YXlzLyJdfSwiZXhwIjoxNzg0ODg3MzcwLCJpYXQiOjE3ODIyOTUzNzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.ExcBzkpY_h71Ne6BA2yWaSQ1EZ_5IHyjJ-llRHaH3DkmuOC0idTcOv1WX6Z8N0GBFM1F4kTWeZQJa7O1Y9RfzyRP1KXIDcpZSfgFuUjkGS0iflFUg0pf5u8UVzTjDafauRJhpdWmeBBnYckZs1QF4EqJFVeRqXyeIsl4uaRj3FJ57OG2MXjfdVUPEtV42Dt_kHu4PPEW-N0y0GKzceElXiIJyJD44O1I_9vY67WgvEx9tL4kbgsEcam3Xw_VgJiEDa2-a6N7xsl-4_td6UhytDZcenx7lKDTHanMRQwKAuW4Ngf46oh9IkzkwmzfSdlNjZ6JmQQwSVkpohWHlHaCBw
- https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Frss.stratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://stratechery.com
- https://stratechery.com/stratechery-plus/schedule?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS9zdHJhdGVjaGVyeS1wbHVzL3NjaGVkdWxlIl19LCJleHAiOjE3ODQ4ODczNzAsImlhdCI6MTc4MjI5NTM3MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.cJH5JQdQC06GCoj2ulKb99STzyFaI-ZyO2cb6mTJRzyYHw9KdOfTOSU3CnAFps9SNwuL5x1SLTRC7JHxqtyX3WSVKgrztMZFtBCXr4ORZ6DNFaKNPyV1k3-jAVKNUoteDLgXSrsWgXFcZSQS45KPOuaxcf9mDrqOy_wVWUJAwLlr2CahIPy-f-13PwHRdK_ElDHiOyTimZF9f3TkDjy2oZueZGyaKsnfjt2RKXX_WdZtXg7ZqxLgjLdEwqUef-tGw56YUwHF0LTkbG2oURYBOd_rdiUqo8mq-C4U4YjDmTZSRFAyeYDO7Y_w0uWCBlYKFYSJz1yGkCVkRUhEVWFDSA
- https://sharpchina.fm/member/episode/party-building-and-xis-dominance-memory-chips-and-asml-accusations-germanys-puzzling-push-for-plaza-accords
- https://stratechery.com/2023/starlink-solution-starlink-experience-starlink-implications/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDIzL3N0YXJsaW5rLXNvbHV0aW9uLXN0YXJsaW5rLWV4cGVyaWVuY2Utc3RhcmxpbmstaW1wbGljYXRpb25zLyJdfSwiZXhwIjoxNzg0ODg3MzcwLCJpYXQiOjE3ODIyOTUzNzAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.UOZclra6a5Zygyz54HEmGzcug3HBcRJEexCCkdp2KV7Y0yBKrzsMtRrZ9MIifNfRywgv5lMUvn0SaXPx7Mfs9LzCOF7PFnVpEEKzjz2ZpURuOG7O6BZp2_vJNvjyOvWqhAz_JcAoEiOQbXzSX5t-Q_Mm8e_BFsdbLO_6UznJq86LpRtr-SEKZRLNSeZBsiihjwlDPEYQfRk0_3R0owO_YFYJf3w-R8adSAy6xmVEBkgxMOEw6hltteUWVWk3bodPmVcJIQwaIYqPqAb17K-t9yGUo-_KpFZECisS-ry87FM8nno4hyZ4RJkPPgDXlV8DcsEIcKpDiWkQOk4_9OvpZw
- https://stratechery.passport.online/member
- https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Fstratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://sharptech.fm/member/podcast?url=https%3A%2F%2Fsharptech.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://dithering.passport.online/member/podcast?url=https%3A%2F%2Fdithering.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://sharpchina.fm/member/podcast?url=https%3A%2F%2Fsharpchina.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://goat.passport.online/member/podcast?url=https%3A%2F%2Fgoat.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://asianometry.passport.online/member/podcast?url=https%3A%2F%2Fasianometry.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://stratechery.passport.online/member/login?email=
- https://www.stratechery.com
