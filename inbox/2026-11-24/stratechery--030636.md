---
source: stratechery
from: Ben Thompson <email@stratechery.com>
subject: "The Individual Exception (Stratechery Article 11-24-2026)"
date: 2026-11-24T11:06:36.000Z
extracted: 2026-11-24T14:08:12.359Z
---

# The Individual Exception (Stratechery Article 11-24-2026)

**From:** Ben Thompson <email@stratechery.com>  
**Date:** 2026-11-24T11:06:36.000Z

---

Jensen Huang has been granted an exception from managerial oversight; in the age of AI, he won't be the last.

View in browser ( https://stratechery.com/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8_cD0yMTM2OSJdfSwiZXhwIjoxNzk4MTEwMzk2LCJpYXQiOjE3OTU1MTgzOTYsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.6k4IJefjVwktx9r9DwKWWvOb0oOlZpoUEcNGljy_IlDQPhKbr_7SJwzBLJT23VgCrV2owfGZQsxGO56IlIo2mg&p=21369 ) *Presented by* ( https://stripe.com )

( https://stratechery.com )

************************
The Individual Exception
************************

( https://stratechery.com/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8_cD0yMTM2OSJdfSwiZXhwIjoxNzk4MTEwMzk2LCJpYXQiOjE3OTU1MTgzOTYsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.tb10-tc4OamUMNN1HfMIilZhmmQ-T9w_96JNfAXXUKlR9UseaqB8ui0nNzZxTOs_dYTODDG4GZPoxn-MJVCfRw&p=21369 ) Tuesday, November 24, 2026

Since Thursday:

* I have created a Sharp Studio service application that manages all of the Sharp Tech studio cameras, lights, mixer, and various other devices. That service can be accessed by a Windows app on the studio PC, an iPhone app, a web app, or an Elgato Stream Deck; every device in the room needed to record an episode is fully remote controlled.
* I have created multiple single-use iOS apps for cataloguing and measuring items and designed and 3D-printed a measurement rig. I have also designed and purchased the items for several dedicated hardware devices, including a device for direct interaction with an agent, and dedicated display devices for the studio.
* I have created a full-fledged iOS app ( https://github.com/Stratechery/duo-desktop ) (designed for the Duo, but it works on regular iPhones) for accessing the various computers I manage; it works across screen sharing, terminals, and KVM switches. It works on Mac, Linux, and Windows. I honestly think it’s the best screen sharing client ever made. I already use it daily.

( https://github.com/Stratechery/duo-desktop )

Along the way I created a small harness for my agent such that it not only choreographs subagents, but also farms out work to various computers I own, depending on the load: a Mac for iOS development, a gaming PC for GPU-related work, and a Linux server for everything else. That work is tracked on a custom status board that runs on every TV in my house, as an iOS app, and as a Telegram bot.

All of this would have taken teams of people weeks of work, if not months, just a few years ago; I, however, have AI. It only takes an individual.

The Deflationary Employee
-------------------------

The largest company of the 1950s, as measured by market capitalization, was AT&T; in 1959 it had revenue of $7.54 billion and a market cap of $17.1 billion. It had 729,000 employees. In inflation-adjusted terms that’s revenue of $87.5 billion and a market cap of $198.4 billion; we don’t apply inflation to employees.

Or, maybe we do, but in the other direction: what has been striking about the most valuable companies in the world is how their employee numbers have deflated , even as their revenue and market cap have exploded. All dollar numbers in this table are inflation-adjusted to today:

Decade Company Year Real revenue Employees Real market cap 1950s AT&T 1959 $87.5B 729,000 $198.4B 1960s AT&T 1969 $147.8B ~1,000,000 $245.6B 1970s IBM 1979 $106.3B 337,119 $174.8B 1980s IBM 1989 $170.6B 383,220 $148.5B 1990s General Electric 1999 $226.6B 340,000 $1.03T 2000s ExxonMobil 2008 $749.5B 104,700 $637.6B 2010s Apple 2018 $355.9B 132,000 $1.00T 2020s Apple 2026 $478.8B 167,000 $5.07T

The deflation is even more extreme if you consider two of the seminal AI companies, Nvidia and Anthropic:

Decade Company Year Real revenue Employees Real market cap 2020s Nvidia 2026 $361.8B 42,000 $3.99T 2020s Anthropic 2026 $35.3B 5,300 $1.17T

This translates into a stunning rise in revenue/employee and market cap/employee — note that this graph is a logarithmic scale:

And yet, even this chart, which pegs the market cap/employee of Nvidia at $95 million, doesn’t come close to what the market decided one particular Nvidia employee is worth:

As ChatGPT, which helped me make these charts, helpfully noted:

Nvidia gained nearly $1 trillion in market capitalization following Jensen Huang’s reinstatement as CEO. That gain alone exceeds the entire inflation-adjusted market capitalization of ExxonMobil in 2008 ($638 billion).

It only takes an individual.

The Huang Odyssey
-----------------

To describe the two-week odyssey of Nvidia’s then-and-now-CEO Jensen Huang as surreal is an understatement; what you can’t argue, however, is that it was unprecedented: it was only three Thanksgivings ago that Sam Altman was deposed and reinstated as OpenAI CEO over the very same weekend (two Max Verstappen Las Vegas Grand Prix wins, I might note).

That said, I didn’t think that this episode would end the same way, and said as much on Sharp Tech ( https://sharptech.fm/member/episode/jensens-not-coming-back-adventures-in-agentic-commerce-q-a-on-united-gta-vi-i-phone-duo ) : whereas Altman was taken out by a somewhat ham-fisted internal coup and restored through pressure from the private company’s investors and employees, Huang appeared to be targeted by a much more systemic campaign by powerful actors leveraging the media and barely disguised insinuations of malfeasance to leave the Nvidia board with no choice but to act. And, to be sure, Huang gave his enemies plenty of ammunition; I’ve invoked the phrase “Show me the man and I’ll show you the crime” over the past few weeks, but it’s worth acknowledging that Huang basically asked his critics, “Which one?”, at least as far as his sexual proclivities were concerned.

At the same time, it sure seemed like no one cared about Huang’s affairs, including those with subordinates; the real crime appeared to be Huang’s resolute advocacy for selling chips to China, his refusal to do any more than the bare minimum to abide by export control rules, and, his most ardent critics allege, turning a blind eye towards actual smuggling.

I’m not here, today at least, to litigate these accusations; I covered much of it in last week’s Article Obituaries ( https://stratechery.com/2026/obituaries/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L29iaXR1YXJpZXMvIl19LCJleHAiOjE3OTgxMTAzOTYsImlhdCI6MTc5NTUxODM5NiwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.fbSu40Z2p44xQiS9AyCmUTjFW6iDmO3fAWJl9DpL8lkOdCFbNGthfK2eimIIjn0wuiiR-6i2ZilCHVQxK4AN_g ) (alternate title for today: Resurrections ). And, more broadly, this isn’t an Article focused on normative analysis; Huang’s Chinese interactions are going to be investigated by a Democratic Congress empowered by the anti-AI wave ( https://stratechery.com/2026/ai-on-the-ballot/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L2FpLW9uLXRoZS1iYWxsb3QvIl19LCJleHAiOjE3OTgxMTAzOTYsImlhdCI6MTc5NTUxODM5NiwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.em5EazBceOqwyNawQoVmwzQwUGkdbQTi4Wui7mssZLZV9zyCgDMmtYfefX_3P9QzrtusSKgpMSIJcEUYZZ9kTA ) at the ballot box, and his personal moral failings would, for nearly any other executive, leave no question about the inevitability of their early retirement.

Rather, I am struck by the extent to which Huang is, quite obviously, not any other executive, and how his reinstatement is the apotheosis of how tech is transforming business, just as AI is the apotheosis of information technology. It only takes an individual.

The End of Managerialism
------------------------

In 1941, James Burnham, a former Trotskyist, wrote The Managerial Revolution ( https://en.wikipedia.org/wiki/The_Managerial_Revolution ) , where he argued that the increasing complexity of industrial society, what with its massive returns to scale, technological complexity, and enmeshment with government, would increasingly divide owners of the means of production from the managerial class that actually controlled society. In this view Soviet communism, German fascism, and American New Dealism were all heads of the same hydra, different ideologies justifying the same inevitable structural transformation of society from individualism and entrepreneurship to corporatism and bureaucracy.

Over the ensuing 85 years, it’s hard to argue that Burnham didn’t have a point, and for the last 10 days, it appeared as if the managerial state — the blob, to use Washington D.C.’s terms, or the deep state, to use its opponents’ — had slain arguably the single greatest challenge to Burnham’s thesis. Huang was explicit about the fact that Nvidia was designed as a vehicle for a singular individual — Huang — to enact his vision for the future of computing. This is a long excerpt, but I think an important one, from the Stratechery Interview with Tae Kim ( https://stratechery.com/2024/an-interview-with-tae-kim-about-jensen-huang-and-the-nvidia-way/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI0L2FuLWludGVydmlldy13aXRoLXRhZS1raW0tYWJvdXQtamVuc2VuLWh1YW5nLWFuZC10aGUtbnZpZGlhLXdheS8iXX0sImV4cCI6MTc5ODExMDM5NiwiaWF0IjoxNzk1NTE4Mzk2LCJpc3MiOiJodHRwczovL2FwcC5wYXNzcG9ydC5vbmxpbmUvb2F1dGgiLCJzY29wZSI6ImZlZWQ6cmVhZCBhcnRpY2xlOnJlYWQgYXNzZXQ6cmVhZCBjYXRlZ29yeTpyZWFkIGVudGl0bGVtZW50cyIsInN1YiI6IjAxOTUxNmYxLWEzNDYtNzYxNC05ZTk2LWI2M2JkMTFmZTg1NiIsInVzZSI6ImFjY2VzcyJ9.cW6UrGy2sAw47AUnl4KufFS23iIFcZY9WlKu0Zo0sJVx3XWBmhLjoFBmWKOZF2_8iRuqeiPv01RXFM3OvvRUoA ) about his book The Nvidia Way ( https://wwnorton.com/books/the-nvidia-way ) :

*So if this analogy is correct, the Apple one, does this make you more optimistic or less optimistic about Nvidia in a post-Jensen world, whenever that arrives? Another analogy that Jensen’s talked about, “It’s we, not I”, and that’s a very Apple-like thing too, famously not saying who did what. But the net result is that just meant Steve Jobs got credited for everything and there’s a bit now, “Well, Jensen Huang gets credited for everything”, but then you’re almost making the case, “Well actually, that’s probably deserved”. Then again, Apple, at least financially, has done very well in this post-Steve Jobs era, and yet when you are listing companies that Nvidia employees go to when they feel like they don’t fit in, you said Apple, and maybe they would’ve felt differently fifteen years ago. What’s your view going forward?*

*TK:* Financially, I agree with you, but if you take a step back, what has Apple created in terms of innovation? They’re just so far behind in everything and they’re running on this platform that Steve Jobs laid the foundation and created, there isn’t really anything new. The Apple Car kind of fell apart, they’re nowhere in AI. So, yes, the Apple iPhone is this amazing platform that Tim Cook’s been able to shepherd and make hundreds of billions of dollars, etc., but in terms of actual technology innovations, I think it’s hard-pressed to say that Apple has really innovated.

But in a similar vein with Nvidia, if say Jensen disappears tomorrow and decides to retire, which is not going to happen because he loves Nvidia, but say that he does, I don’t know, Jensen is so ingrained. Part of why Nvidia is so able to do what it does is that he is so ingrained and has his finger on the pulse of everything that happens in the company…

*He’s fashioned Nvidia. Nvidia, it’s like an exoskeleton for him.*

*TK:* That exact analogy, he says he built Nvidia, where he’s like the race car driver of a Formula One car. He literally says that, like, “I built Nvidia in a way where I could drive it, and manage it, and steer it perfectly”. So, without Jensen there, do I see another CEO that’s reading 100 top-five emails a day, that is looking at all the AI discussion email lists inside a company, trading AI papers with his top engineers? I don’t know. I’ve met all the top Nvidia people, they’re all impressive, but they’re not on the Jensen level.

*It goes back to the functional organization bit. You get a bunch of people who are absolute best in their field and so you, as the person in the center that is involved in everything, has awareness of everything, gets to direct the best possible resource at every sort of opportunity. But that, by definition, means there isn’t space in the organization for other generalists, right?*

*This was a thing at Apple, again just to go back to that analogy. And again, this was fifteen years ago, when Steve Jobs was still there so probably a bit of a different world. But there was a very sort of stern, “This is not the place for generalists”, like, “You come here to be a specialist, if you get a job here, you should expect you’ll never have a different job because we want you to be the best at what you do, we’re not interested in multiple experiences across business units and things along those lines”. But that works when it’s all flowing up to one node that is the ultimate generalist that has the view and understanding of everything and it’s incredibly effective. But yeah, it’s not good for succession planning, it makes it pretty tough.*

And yet, despite Nvidia’s reliance on Huang, the board and the powers that be decided he had to go, in direct opposition to the preferences of Nvidia’s nominal owners, i.e. shareholders. And, like I said, I thought they had succeeded; tech may have made it increasingly possible for a dwindling number of employees to deliver outsized revenue and valuations, but ultimately any individual would be deemed expendable, particularly in the face of a coordinated media campaign and the opposition of the national security apparatus.

But I was wrong. And, ultimately, even if you think what happened this weekend was wrong — including President Trump calling into an Nvidia board meeting ( https://www.semafor.com/article/11/23/2026/huang-reinstatement-came-at-trumps-behest ) to press for Huang’s reinstatement — this moment does strike me as both unique in terms of the clear exception that Huang has obviously been deemed to be (and not without merit), and also a harbinger of the future. It only takes an individual.

The Bimodal Distribution
------------------------

The world is, make no mistake, growing more complex. The tools we have to master that complexity, however, are not just improving, they actually thrive on complexity. When I’m trying to teach someone how to use AI, one of my first pieces of advice is to talk more (and yes, talking is better than typing); you can’t overwhelm the AI with information, it’s dealing in information at an unimaginable scale. Whatever pittance of tokens you can generate in a prompt are mere molecules in the ocean of information that is a frontier LLM, and yet, remarkably enough, those molecules are sufficient to do almost anything you want.

The bull case for AI is, if you zoom out, a pretty terrible one for society: in this view a trillion dollars of capex is justified by the number of jobs that are eliminated, as what used to require a human is increasingly done by machines, raising the question as to where demand — the most important factor in a thriving economy — is going to come from. The bear case is that AI advocates have massively overestimated the generalizability of verifiable domains like coding and math, and that AI will struggle to do everything a human does, much of which can’t be measured.

I do, in the short term, have a lot of sympathy for the bears, but only in the short-term. My thesis for the long run is that a lot more companies look like Nvidia than they do AT&T or GE: instead of a hierarchy of managers, radically new organizational structures will emerge where a very small number of people — or even just an individual — will attack sector after sector from below with a disruptive approach that appeals to a much larger market, even as its offering seems inferior to the incumbent’s. And then, over time, as the technology continues to improve, and critically, as the economy reorganizes itself around these incredible capabilities, the incumbents will be outcompeted and ultimately doomed. It’s precisely because AI is so transformative that existing companies will struggle to adapt; this will be seen as a failure of AI in the short run, even as their demise is inevitable in the long run.

This, by extension, will change much more than enterprise; I described in 2024’s MKBHD’s For Everything ( https://stratechery.com/2024/mkbhds-for-everything/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI0L21rYmhkcy1mb3ItZXZlcnl0aGluZy8iXX0sImV4cCI6MTc5ODExMDM5NiwiaWF0IjoxNzk1NTE4Mzk2LCJpc3MiOiJodHRwczovL2FwcC5wYXNzcG9ydC5vbmxpbmUvb2F1dGgiLCJzY29wZSI6ImZlZWQ6cmVhZCBhcnRpY2xlOnJlYWQgYXNzZXQ6cmVhZCBjYXRlZ29yeTpyZWFkIGVudGl0bGVtZW50cyIsInN1YiI6IjAxOTUxNmYxLWEzNDYtNzYxNC05ZTk2LWI2M2JkMTFmZTg1NiIsInVzZSI6ImFjY2VzcyJ9.lo1Yjsn0cpTQ7ZAS2TnBOsoAT64nTyXbJistpl3E0p2UQVYYUsqsW84acvxF2_Rg1vLHfXKWmHFCh7If6Sm41g ) how the Internet made it possible for individuals to become powerful media entities in their own right, and concluded:

Brownlee’s 2nd most popular video is only two months old: it’s his overview of the Apple Vision Pro; it’s not, if fiction is our guide, an accident that Meta is developing the Quest and Apple has released the Vision Pro just as AI seems poised to threaten an ever-increasing number of jobs. This was the world painted by Pixar’s Wall-E:

It’s funny, because before I looked up this photo, I could have sworn the humans in the film, lulled to insouciance by an AI that addressed all of their physical needs, were wearing headsets; I guess Pixar overestimated our ability to build space-faring cruise ships and underestimated the relentless progression of consumer electronics.

My suspicion, however, is that Pixar got it wrong, and this famous photo of Mark Zuckerberg at Mobile World Congress in 2016 is closer to the truth of the matter.

Wall-E erred by assuming that every human was the same, all gleefully enslaved by AUTO, the ship’s AI. In fact, though, I suspect humanity will be distributed bi-modally, with the vast majority of people happily wearing their Vision Pros or watching their streaming service or viewing their TikTok videos, while increasingly sovereign individuals, aided by AI, pilot the ship.

That may sound extreme, but again, this is why it is useful to look to media first: Brownlee — one man, who started out by reviewing a media center remote on his HP laptop — does in fact hold the fate of entire companies and products in his hand. My bet is not that AI replaces Brownlee, but that AI means Brownlee’s for everything, not just media.

Again, I’m not saying this is good or bad, but rather it is, or will be. And, in the case of Huang, we certainly are already seeing this sort of exceptionalism play out with the highest stakes imaginable: is Huang being held to a different standard — a much lower standard, to be sure — than you or I? Without question. Is his restoration — set aside the China allegations, look simply at who he slept with — a violation of the ethos that everyone be treated equally under (corporate) law? It certainly is. And yet, investors cheer, and even Huang’s fiercest opponents must grant that Nvidia’s long-term outlook, and America’s, is in some respects brighter for the exception. AI means it will only take an individual; the man who is arguably the most important figure in the emergence of AI is already there.

Presented by

One way to tell that something has become valuable is that people start trying to steal it. AI companies are learning this very quickly.

Stripe data shows that AI startups saw attempted transaction fraud rates up to 4.3x ( https://stripe.com/?utm_source=stratechery&utm_campaign=paid-newsletter&utm_campaign=T7p32iB71i57OCcPDwxEGo1w2 ) higher than non-AI startups, largely because compute is both valuable and easy to resell. A fraudulent actor might buy a subscription with a stolen card and resell the access, all before the cardholder has time to dispute the charge.

Then, as often happens, AI companies got better at stopping it and attempted transaction fraud fell considerably by early 2026.

So, the fraud moved upstream.

Bad actors turned from transaction fraud to creating new accounts to repeatedly claim free trials and tokens. Attempted multi-account abuse at AI subscription companies increased 40% in just six months. Among the companies already experiencing the most abuse, it rose 154%.

Stripe Radar is adapting accordingly, using signals across the Stripe network to identify abuse at registration and login, before a payment ever happens. You can learn more at stripe.com/radar ( https://stripe.com/radar?utm_source=stratechery&utm_campaign=paid-web )

Listen to this update and other Stratechery Plus content in your podcast player:
Stratechery ( https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Fstratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Sharp Tech ( https://sharptech.fm/member/podcast?url=https%3A%2F%2Fsharptech.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Dithering ( https://dithering.passport.online/member/podcast?url=https%3A%2F%2Fdithering.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Sharp China ( https://sharpchina.fm/member/podcast?url=https%3A%2F%2Fsharpchina.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 )
Greatest Of All Talk ( https://goat.passport.online/member/podcast?url=https%3A%2F%2Fgoat.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 ) | Asianometry ( https://asianometry.passport.online/member/podcast?url=https%3A%2F%2Fasianometry.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 )

Subscription Information

Member: cmatecun
Email: cmatecun@gmail.com
Member since: August 10, 2025
Your subscription renews every year
Renewal date: August 10, 2027

You are receiving this email because you are subscribed to Stratechery ( https://stratechery.com ).

Click here ( https://stratechery.passport.online/member/login?email=cmatecun%40gmail.com ) to view your account and manage your subscriptions.
Click here ( https://stratechery.passport.online/member/unsubscribe?unsub=https%3A%2F%2Fstratechery.passport.online%2Fapi%2F1.0.0%2Fusers%2FCLKjCtDhPT8bsKnDAgUcu%2FchannelOptOut%3Faccess_token%3DeyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZS9hcGkvMS4wLjAvdXNlcnMvQ0xLakN0RGhQVDhic0tuREFnVWN1L2NoYW5uZWxPcHRPdXQ_Y2hhbm5lbD1lbWFpbFx1MDAyNnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSUyRm1lbWJlciUyRnVuc3Vic2NyaWJlIl19LCJleHAiOjE3OTgxMTAzOTYsImlhdCI6MTc5NTUxODM5NiwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJtZW1iZXI6d3JpdGUiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.Ylf23rrSasK--ud8Rbc3vgd2zAJRpt-oqp57EtgqWNusaZc_ofj0gBfGp0-MIUAzg6wpYyMrDgCBfyAP-W_Kaw%26channel%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstratechery.passport.online%252Fmember%252Funsubscribe ) to unsubscribe.

© 2026 Stratechery LLC ( https://www.stratechery.com ) , 2093 Philadelphia Pike #9930, Claymont DE 19703

---

## Links found in email

- https://stratechery.com/?access_token=eyJhbGciOiJFUzI1NiIsImtpZCI6IkxzanFRcEhoMUJUdmU0djJQUUVuejIiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8_cD0yMTM2OSJdfSwiZXhwIjoxNzk4MTEwMzk2LCJpYXQiOjE3OTU1MTgzOTYsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.enfBvUtqXUyPwHJrAsxG00XyIpj6ZoaucKmt9Xs23GfZK0tO29y1vNBJKEmznNW1RUqc8c-KkfEWQpUgBxzTIw&amp;p=21369
- https://stripe.com
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vc3RyYXRlY2hlcnkuY29tLz9hY2Nlc3NfdG9rZW49ZXlKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklreHphbkZSY0Vob01VSlVkbVUwZGpKUVVVVnVlaklpTENKMGVYQWlPaUpLVjFRaWZRLmV5SmhkV1FpT2lKemRISmhkR1ZqYUdWeWVTNXdZWE56Y0c5eWRDNXZibXhwYm1VaUxDSmhlbkFpT2lKSVMweGpVelJFZDFOb2QxQXlXVVJMWW1aUVYwMHhJaXdpWlc1MElqcDdJblZ5YVNJNld5Sm9kSFJ3Y3pvdkwzTjBjbUYwWldOb1pYSjVMbU52YlM4X2NEMHlNVE0yT1NKZGZTd2laWGh3SWpveE56azRNVEV3TXprMkxDSnBZWFFpT2pFM09UVTFNVGd6T1RZc0ltbHpjeUk2SW1oMGRIQnpPaTh2WVhCd0xuQmhjM053YjNKMExtOXViR2x1WlM5dllYVjBhQ0lzSW5OamIzQmxJam9pWm1WbFpEcHlaV0ZrSUdGeWRHbGpiR1U2Y21WaFpDQmhjM05sZERweVpXRmtJR05oZEdWbmIzSjVPbkpsWVdRZ1pXNTBhWFJzWlcxbGJuUnpJaXdpYzNWaUlqb2lNREU1TlRFMlpqRXRZVE0wTmkwM05qRTBMVGxsT1RZdFlqWXpZbVF4TVdabE9EVTJJaXdpZFhObElqb2lZV05qWlhOekluMC42azRJSmVmalZ3a3R4OXI5RHdLV1d2T2Iwb09sWnBvVUVjTkdsanlfSWxEUVBoS2JyXzdTSnd6QkxKVDIzVmdDclYyb3dmR1pRc3hHTzU2SWxJbzJtZyZwPTIxMzY5.lU5sKvxdLreT7WsjfmZtNg
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89pq6vJr_F6yHx6KrLUj0ngE.TxNG4_30ZGv5KVWdETqlSg
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89pvFmfuchsfkVA6WqwKVhsE.rW__JIoMn1B6h_WYyr_nnQ
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vc3RyYXRlY2hlcnkuY29tLz9hY2Nlc3NfdG9rZW49ZXlKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklreHphbkZSY0Vob01VSlVkbVUwZGpKUVVVVnVlaklpTENKMGVYQWlPaUpLVjFRaWZRLmV5SmhkV1FpT2lKemRISmhkR1ZqYUdWeWVTNXdZWE56Y0c5eWRDNXZibXhwYm1VaUxDSmhlbkFpT2lKSVMweGpVelJFZDFOb2QxQXlXVVJMWW1aUVYwMHhJaXdpWlc1MElqcDdJblZ5YVNJNld5Sm9kSFJ3Y3pvdkwzTjBjbUYwWldOb1pYSjVMbU52YlM4X2NEMHlNVE0yT1NKZGZTd2laWGh3SWpveE56azRNVEV3TXprMkxDSnBZWFFpT2pFM09UVTFNVGd6T1RZc0ltbHpjeUk2SW1oMGRIQnpPaTh2WVhCd0xuQmhjM053YjNKMExtOXViR2x1WlM5dllYVjBhQ0lzSW5OamIzQmxJam9pWm1WbFpEcHlaV0ZrSUdGeWRHbGpiR1U2Y21WaFpDQmhjM05sZERweVpXRmtJR05oZEdWbmIzSjVPbkpsWVdRZ1pXNTBhWFJzWlcxbGJuUnpJaXdpYzNWaUlqb2lNREU1TlRFMlpqRXRZVE0wTmkwM05qRTBMVGxsT1RZdFlqWXpZbVF4TVdabE9EVTJJaXdpZFhObElqb2lZV05qWlhOekluMC50YjEwLXRjNE9hbVVNTk4xSGZNSWlsWmhtbVEtVDl3Xzk2Sk5mQVhYVUtsUjlVc2VhcUI4dWkwbk56WnhUT3NfZFlUT0RERzRHWlBveG4tTUpWQ2ZSdyZwPTIxMzY5.6soPmh1c101VkhmWxuYuMw
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89t-iRk_e8IXKkP9yRNwJkJ0.MnUai_VmXS1uKhmZlKM-pg
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89ilGzPDS7zBu20Dzu8RnxDY.dFVfskhGopf6S0sCUev3GQ
- https://stratechery.passport.online/c/AWGXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89t5T5KROFraPpwgtHhqyud4.KQ8YyykPr0Z1dClJZFUPLQ
- https://stratechery.passport.online/c/AWGXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89uP0GXyBiFE7EOj1kn4noC0.l_xfs7WKwBv5gT8vTYJt7w
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89pkQXCGAumWr-J4JZyYtOEg.6Ed7ZyZycoNYbB-lo6gyvA
- https://stratechery.passport.online/c/AWGXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89sH0BdHYm6qT_LVHbGu4wYU.ibmqUwaLH7nE9poVPKq7bQ
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89pFZPRDAc-94d6mFxEz2jng.9hgGUnVNfRtoRhMSfszJ5w
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89tpdbpyAB0de5WO4VxBkKhQ.r2zk5HaSsdboFjrckYRxRw
- https://stratechery.passport.online/c/AWGXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89rnziodvTfISdbfmtCVeH6o.FpiHNjxRKFgqDloZTGY7Kg
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89hIrgr91IERmYH5u-e3Z6JM.W2Qi5xVFos7GF1eJjIqZ7A
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89p4GgDgP17Ft_8pUur3WeHE.L_t97mXbumRjoWB7dbVWwA
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vc3RyYXRlY2hlcnkucGFzc3BvcnQub25saW5lL21lbWJlci9wb2RjYXN0P3VybD1odHRwcyUzQSUyRiUyRnN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSUyRmZlZWQlMkZwb2RjYXN0JTJGQ0xLakN6TEpuWHNIUlVGUHFaMks5.gQgEUo4BZxIER0uPY9oQfg
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vc2hhcnB0ZWNoLmZtL21lbWJlci9wb2RjYXN0P3VybD1odHRwcyUzQSUyRiUyRnNoYXJwdGVjaC5mbSUyRmZlZWQlMkZwb2RjYXN0JTJGQ0xLakN6TEpuWHNIUlVGUHFaMks5.yassO9hoLyG1OJ3We73S_g
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vZGl0aGVyaW5nLnBhc3Nwb3J0Lm9ubGluZS9tZW1iZXIvcG9kY2FzdD91cmw9aHR0cHMlM0ElMkYlMkZkaXRoZXJpbmcucGFzc3BvcnQub25saW5lJTJGZmVlZCUyRnBvZGNhc3QlMkZDTEtqQ3pMSm5Yc0hSVUZQcVoySzk.GE0oYlFoV6cNKbRW0Rf-RQ
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vc2hhcnBjaGluYS5mbS9tZW1iZXIvcG9kY2FzdD91cmw9aHR0cHMlM0ElMkYlMkZzaGFycGNoaW5hLmZtJTJGZmVlZCUyRnBvZGNhc3QlMkZDTEtqQ3pMSm5Yc0hSVUZQcVoySzk.C97T6Wu15FS8l5sIf8aSEw
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vZ29hdC5wYXNzcG9ydC5vbmxpbmUvbWVtYmVyL3BvZGNhc3Q_dXJsPWh0dHBzJTNBJTJGJTJGZ29hdC5wYXNzcG9ydC5vbmxpbmUlMkZmZWVkJTJGcG9kY2FzdCUyRkNMS2pDekxKblhzSFJVRlBxWjJLOQ.q_vY5AJTLcFw6r_TN0de4g
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vYXNpYW5vbWV0cnkucGFzc3BvcnQub25saW5lL21lbWJlci9wb2RjYXN0P3VybD1odHRwcyUzQSUyRiUyRmFzaWFub21ldHJ5LnBhc3Nwb3J0Lm9ubGluZSUyRmZlZWQlMkZwb2RjYXN0JTJGQ0xLakN6TEpuWHNIUlVGUHFaMks5.a1ePixX7csRdzhrMU7BMDw
- https://stratechery.passport.online/c/AXWXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89mh0dHBzOi8vc3RyYXRlY2hlcnkucGFzc3BvcnQub25saW5lL21lbWJlci9sb2dpbj9lbWFpbD1jbWF0ZWN1biU0MGdtYWlsLmNvbQ.hRI0WkHYRQ5XWxBEmXZHbw
- https://stratechery.passport.online/c/AWOXFVDcfCRLGYaJYN8GubOwAaINPHUYdWW5axY0rXC89jPI94Jyxjp7mPpcC3d4CYk.Ijh2duWR8FNVYq9LIgvYHg
