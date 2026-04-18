---
source: swl-week-in-review
from: sam lessin <s@wlessin.com>
subject: "SWL Week in Review - Build Your Own Apps"
date: 2026-04-17T23:13:18.000Z
extracted: 2026-04-18T13:08:12.721Z
---

# SWL Week in Review - Build Your Own Apps

**From:** sam lessin <s@wlessin.com>  
**Date:** 2026-04-17T23:13:18.000Z

---

another week in review ....  

More or Less — Who Can Afford to Pay Taxes?! ( https://www.youtube.com/watch?v=FQ5TEs_3Dq8&lc=Ugzak5PHV5nGgxC12dp4AaABAg )

We talk all birds, and a bunch about how the decision to sell / hold these big IPOs with huge markups has more to do with relative valuation than price because of taxes! Also I spent most of the episode locked out of my SF office (I don’t have a key) — also fun with ‘who is making money on allbirds ( https://x.com/lessin/status/2044483374040158319 )’… someone is :)

THE BIG TOPIC - BUILD YOUR OWN APPS …
---------------------------------------

I am going to be honest — I am just basically spending most of my time building apps now, because it is by far the most fun thing to do under the broad heading of ‘work’ (this is why I am actually late to zooms)— and a few of the things are actually really useful / paying off…

* Chat Sucks, Email is the ultimate AI interface - build it yourself ( https://x.com/lessin/status/2045208254511526034 ) — I built a bridge from an email domain I control to my email to my core claude agent running in the cloud… that way I can dispatch requests via email … the app spins up distinct claude workers for each of my requests / processes them to completion, emails back when done (or takes other actions like can write and deploy apps, update databases, etc.) … the parallelism is very useful as is it sitting in email so I can forward notes in, etc. also I have it setup so that I can generate aliases / different addresses for it with different permission scopes (what tools and data sets the distinct instance has access to, etc. — which is quite useful — simple PSQL table to control all the
permissioning and fully synced memory.
* Photos is the ultimate data-source - build your own iOS app to sync it all as data ( https://x.com/lessin/status/2045206688299675697 ) — honestly when I am out in the world, the absolute best way to send data to my AI is simply to take photos… I don’t even want to use it / open an app… so with a simple iOS native app (made by claude) I have it take each photo, upload it, pass it through vision & geo apis, etc. and understand what it is, where it is, OCR it, etc… and store the whole PHOTOS-AS-DATA to a PQSL database… I then have an endpoints API so that I can give different agents AND processes access to scoped data from my photos (i.e. if I take photo of food figure out calories and macros and update my diet… if I take a photo of a product, buy it… (ask or don’t)… if I take a photo of text
scan it and email me back relevant links) — seriously, once your AI is processing all your photos as data, you are never gonna want to open something other than your camera app
* Games are ultimate fun - let your kids build em themselves ( https://x.com/lessin/status/2045207288928210995 ) — I set the kids up with claude code instance hooked into a GitHub repo with a little server running in the cloud just for them — now? They come home with a new game idea and single-shot prompt a v1 into existence in minutes… and then refine it, come up with new items and rules… push and play — they are having a blast / and their mini team meetings are definitely the most joyful AI experiences I have seen….
* I have built a bunch of other stuff recently (like requestclip.com, a terminal iOS app so I can run many claude code instances from one dashboard in one app, etc… it is all a blast to build) — but when you really refine it down just giving your instance all the superpowers / build and deploy apps, manage domains, google maps APIs, vision APIs, AssemblyAI for voice to text, ElevenLabs for speech, etc. and wire it all up with real memory in PSQL & sync all the code in GitHub — that nexus becomes really really powerful (and btw, all totally commodity… this week when cloudflare released their email outbound API I dropped sendgrid in one command — so I get how the power companies make money, and how I have a lot of fun — but suddenly everything in the middle that isn’t a trust and identity layer? Looks like SaaS properly priced?

A FEW OTHER THINGS …
----------------------

* first on this BYO app thing... this is important — for $100 bucks you can get your apple developer account, download xcode -- and then just tell claude to build whatever iOS apps you want (no app review, no testflight, etc) -- this for me was a final frontier becuase i was taught over a decade to be terrified of messing with iOS apps -- but it is SSOOO easy to roll your own apps for your own use claude just does it for you... your phone really is your personal remote control (and how on earth is apple gonna deal with this?)
* Tree Rentals ( https://x.com/TheMaran/status/2033808080044232865?s=20 ) — this is funny - and really actually kinda exactly right… more very exciting foundation farms news soon I am sure :)
* Meritfirst ( https://meritfirst.us/ ) — is getting really exciting… the fact you can now just go there, drop in a role you are looking for (for free), it generates the right TEST for the role, deploys it, let’s candidates take it (and validate they are human) + scores the tests and tells you who are the winners?? The future of hiring is going to be merit / source from anywhere / hire the best and ironically AI is THE unlock (this really works) — you can finally afford to actually source talent at the source and design custom good tests for each role that matter. Game on.
* CAPTCHAS have become impossible ( https://x.com/lessin/status/2044420696017862703 ) — I signed my kids up for GitHub … and man they must have a bot problem… it took me at least 5 minutes to complete what I thought were legitimacy quite difficult and long CAPCHAS… indication of a real problem here… when the bots get smart, it becomes impossible for the HUMANS to pass the tests in a way the bots can’t.
* Responses to my meaning essay? The Rabbis liked it. - I really believe in life in give-to-get… the more you try / put out in the world, the more you get back — and when you put out quality, you get even better responses… the meaning essay clearly hit a chord with folks — and the books, ideas, philosophers I got back were excellent — among lots of good responses, the winning analysis goes to a friend who had a great analysis of historical parallels you can find in late Roman Empire (got wealthier than ever before / flooded with money, bread and circus — but lost meaning and core small farmers… Post-Plauge Europe, Post WWII suburbs… and as I should have remembered from my ‘oil dependent development’ college class… the Gulf States.
* Death of SaaS Calls ( https://x.com/lessin/status/2044518843209728221 ) — I like to point out that I have been calling the death of SaaS for years… and on this one I don’t think it is a broken clock situation… but it was fun that claude now has enough context on me / all the sources wired up to pretty precisely map the evolution of this call / my thinking on these things…
* Broadly Evaluating my ‘Receipts’ from a Decade of Writing for The Information ( https://x.com/lessin/status/2045199943590445115 ) — also fun… the nice part about writing for the information weekly+ for the first decade? … tons of intellectual receipts on calls — and now years later, a pretty interesting analysis of where I am strong / weak on calls and what I got right / wrong… yes on Elon dynamics, yes on speech, etc… I probably should stop titling things ‘the death of X’ … and proposing intentionally absurdist solutions which I know won’t happen (but claude doesn’t get the joke)
* Twitter ‘Eras’ ( https://x.com/lessin/status/2044452688419865034 ) — since we are point at old data sources… funny analysis of Twitter evolution since 2007

Sincerely,

Sam

P.S. Momentous Creatine Chews… lemon lime… best all day snack… they aren’t even paying me.

P.P.S I still really love the internet Corporate Natalie ( https://www.instagram.com/reels/DW3phYzj85m/ ) is funny… so is this guy ( https://www.instagram.com/reels/DXCkN8ogPTr/ ) —

SL ( https://wlessin.com ) | X ( https://twitter.com/lessin ) | MoL Podcast ( https://moreorlesspod.com/ ) | Slow Newsletter ( https://snailmail.slow.co/ ) & State of Venture ( https://x.com/lessin/status/1914450043425427506 ) | 1636 ( https://1636forum.app/ ) & Take on Harvard ( https://docsend.com/view/8pcwk5wx64bhkvvg ) | Lettermeme Sources ( https://lettermeme.com/ ) |
Stop ( https://track.customer.io/unsubscribe/dgTg8AoDAKjdAafdAQGdnbeFLjYWh-uqwu346Ms= ) | Get added to my weekly NL ( https://www.wlessin.com/login )

---

## Links found in email

- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g_dj1GUTVURXNfM0RxOFx1MDAyNmxjPVVnemFrNVBIVjVuR2d4QzEyZHA0QWFBQkFnIiwiaW50ZXJuYWwiOiJlMGYwMGEwMGE3ZGQwMWE4ZGQwMSIsImxpbmtfaWQiOjE2MDg0fQ/25e3a240379cb02e740d839d43f7ba4f82696fd33333c18db3b9ee513cf9ccca
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDQ0ODMzNzQwNDAxNTgzMTkiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwODV9/86fbfc7b53f8e37c9e944a0372196f4ff71ec9dc7b87237ac935882c32feea00
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDUyMDgyNTQ1MTE1MjYwMzQiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwODZ9/8194612a2ed0c2999ab59f601e20f1d01c82f49d51ce518c8c6659ce011c59a6
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDUyMDY2ODgyOTk2NzU2OTciLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwODd9/4d19d27048091999469efce5a2adc5542cba821a389ff6a4c42db400614b4234
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDUyMDcyODg5MjgyMTA5OTUiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwODh9/1f9598efab23f97643dd64a67fc4c96d049255a816262e8ab71e2ea5bb0d6836
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9UaGVNYXJhbi9zdGF0dXMvMjAzMzgwODA4MDA0NDIzMjg2NT9zPTIwIiwiaW50ZXJuYWwiOiJlMGYwMGEwMGE3ZGQwMWE4ZGQwMSIsImxpbmtfaWQiOjE2MDg5fQ/cfb80693860d4ca45a0487cad643d91bf650db1dad384a8294d32e08cf95e8d2
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly9tZXJpdGZpcnN0LnVzLyIsImludGVybmFsIjoiZTBmMDBhMDBhN2RkMDFhOGRkMDEiLCJsaW5rX2lkIjoxNjA5MH0/3e26260af2db7c392a9afef4018d31711b03e3a6688b5468e631deaff2119866
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDQ0MjA2OTYwMTc4NjI3MDMiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwOTF9/9b5fa1dec483def6be0ccee1886459d6e82466c47b82ef91b5f9c69f049bc50c
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDQ1MTg4NDMyMDk3MjgyMjEiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwOTJ9/1eb1f553587757bfc2271378a0e770a65ee08e80d7e50cc3424298606d465998
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDUxOTk5NDM1OTA0NDUxMTUiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwOTN9/2e6ee4132769597ff1687e3f1dc78910cea3be5a2f92cca6423c7d69140b00b8
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzIwNDQ0NTI2ODg0MTk4NjUwMzQiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwOTR9/8303b852a0718e1226f41890043cd492c3a6db4dcc585a34fa37f025e492ded8
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yZWVscy9EVzNwaFl6ajg1bS8iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwOTV9/86bbdfe72d1628fd4db7bade4389688844b12cc92777a92c3f364723c3bae94c
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9yZWVscy9EWENrTjhvZ1BUci8iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MTYwOTZ9/0fa0c1a025b8b4c07b97ac85ef1b586dbac8741e455645be942f0393db27b794
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly93bGVzc2luLmNvbSIsImludGVybmFsIjoiZTBmMDBhMDBhN2RkMDFhOGRkMDEiLCJsaW5rX2lkIjoyOH0/ab89209aafe89e06907c2880611dd838d69ebe6e90e0853c238010be175f740c
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly90d2l0dGVyLmNvbS9sZXNzaW4iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6Mjl9/1a85eb69dbbcd65753faf46d5901c27895c5481d6cc91b49011a242035b18c9a
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly9tb3Jlb3JsZXNzcG9kLmNvbS8iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MjF9/3a2f425b4f179e88a5768083b298eaaddc70202effddd0415ca09256427934a5
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly9zbmFpbG1haWwuc2xvdy5jby8iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MjY1MH0/6345c50c7a966d67e6c9ee2753a1813f302551dc4a02d6c45f3edde46ae9a095
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly94LmNvbS9sZXNzaW4vc3RhdHVzLzE5MTQ0NTAwNDM0MjU0Mjc1MDYiLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MjY1MX0/9be0cd029833fe34908ce6e9243da3d9c26e24c05d7ef984367194e42e4171f5
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly8xNjM2Zm9ydW0uYXBwLyIsImludGVybmFsIjoiZTBmMDBhMDBhN2RkMDFhOGRkMDEiLCJsaW5rX2lkIjoyNjUyfQ/41304e3c3f8269b97cae3435cf76681a62c219c223b45b287c9c509e21b15b2d
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly9kb2NzZW5kLmNvbS92aWV3LzhwY3drNXd4NjRiaGt2dmciLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MjY1M30/fa9cd580f37daac088ce98eb4510cb5abe68f19180285f68f8f2e65d6fa3e8bf
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly9sZXR0ZXJtZW1lLmNvbS8iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MjN9/d4f75fd7cc2a5be6dc082f7b9bc498abcc8755b3550fc497bce3b38394acf733
- http://e2.wlessin.com/e/c/eyJlbWFpbF9pZCI6ImRnVGc4QW9EQUtqZEFhZmRBUUdkbmJlRkxqWVdoLXVxd3UzNDZNcz0iLCJocmVmIjoiaHR0cHM6Ly93d3cud2xlc3Npbi5jb20vbG9naW4iLCJpbnRlcm5hbCI6ImUwZjAwYTAwYTdkZDAxYThkZDAxIiwibGlua19pZCI6MzB9/b086aef54f41e510171f844091d4fcb4184bbb0a5cc546e2daa0dc6b3a800009
