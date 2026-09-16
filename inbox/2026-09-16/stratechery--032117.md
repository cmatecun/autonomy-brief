---
source: stratechery
from: Ben Thompson <email@stratechery.com>
subject: "Salesforce AI Force, Agents as UI, The Race to Headless (Stratechery Update 9-16-2026)"
date: 2026-09-16T10:21:17.000Z
extracted: 2026-09-16T13:08:15.102Z
---

# Salesforce AI Force, Agents as UI, The Race to Headless (Stratechery Update 9-16-2026)

**From:** Ben Thompson <email@stratechery.com>  
**Date:** 2026-09-16T10:21:17.000Z

---

Salesforce is abandoning UI as a moat, which is a very smart move because it's disappearing for everyone.

View in browser ( https://stratechery.com/2026/salesforce-ai-force-agents-as-ui-the-race-to-headless/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3NhbGVzZm9yY2UtYWktZm9yY2UtYWdlbnRzLWFzLXVpLXRoZS1yYWNlLXRvLWhlYWRsZXNzLyJdfSwiZXhwIjoxNzkyMTQ2MDc3LCJpYXQiOjE3ODk1NTQwNzcsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.kd8841YMwe1K1rl3LA8W-QD1opsanzcgHsWc6yCFzLJLz4ldJKvGYwDTZsk_uRfSLTiDn6JVXsgbacLgFkLtsBdgsScIf_xeBtBhsYnrxsmq7Qrgrm0mpaoQmL_3DVTDdy2YO65flEbrBY1lewZhTAcKDhY25ZJTvMGOIR1mub1QZ6hK9uAPe-fZCAVdRjm-71PNtNxGhYMUnd8O9Wbl--lg6_EuwtRAwJ1qJQyvRlAaA3ypBlY-ifWLAglihgBGiCZ0Jqm0u3mE4Jhg8XVI63Md23w7uMKqVJCUh5OwZN3orE6_7frDxTGcPYwadLvX4bVpVgxr4zM4HOnVYgADhA ) | Listen in your podcast player ( https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Frss.stratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9 )

( https://stratechery.com )

*******************************************************
Salesforce AI Force, Agents as UI, The Race to Headless
*******************************************************

( https://stratechery.com/2026/salesforce-ai-force-agents-as-ui-the-race-to-headless/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3NhbGVzZm9yY2UtYWktZm9yY2UtYWdlbnRzLWFzLXVpLXRoZS1yYWNlLXRvLWhlYWRsZXNzLyJdfSwiZXhwIjoxNzkyMTQ2MDc3LCJpYXQiOjE3ODk1NTQwNzcsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.kd8841YMwe1K1rl3LA8W-QD1opsanzcgHsWc6yCFzLJLz4ldJKvGYwDTZsk_uRfSLTiDn6JVXsgbacLgFkLtsBdgsScIf_xeBtBhsYnrxsmq7Qrgrm0mpaoQmL_3DVTDdy2YO65flEbrBY1lewZhTAcKDhY25ZJTvMGOIR1mub1QZ6hK9uAPe-fZCAVdRjm-71PNtNxGhYMUnd8O9Wbl--lg6_EuwtRAwJ1qJQyvRlAaA3ypBlY-ifWLAglihgBGiCZ0Jqm0u3mE4Jhg8XVI63Md23w7uMKqVJCUh5OwZN3orE6_7frDxTGcPYwadLvX4bVpVgxr4zM4HOnVYgADhA ) Wednesday, September 16, 2026

Good morning,

On yesterday’s episode of Dithering ( https://dithering.passport.online/member/episode/football-and-the-frontier ) , John and I try to pretend like the NFL season hasn’t started yet, before expressing our frustrations with the entire debate about slowing down AI.

On to the Update:

Salesforce AI Force
-------------------

From SiliconAngle ( https://siliconangle.com/2026/09/15/salesforce-announces-aiforce-unlocking-the-power-of-its-platform-using-composable-agents/ ) :

Salesforce Inc. today unveiled a new artificial intelligence interface layer that brings the power of the company’s platform to where people use AI agents to work by providing business logic, semantics, security and governance.

In most cases, “AI wiring” and Model Context Protocol ecosystems have permitted companies to attach agents to data sources and tap into value that exists in platforms. Salesforce said that with AIforce, users and businesses don’t have to come to Salesforce to get work done; it can come to them and their AI agents.

With today’s release, announced today at its Dreamforce conference in San Francisco, Salesforce is releasing Claudeforce, Slackforce and Agentforce Coworker, each bringing the skills, cookbooks, dashboards, triggered workflows, wiring and packaged interfaces users already work with. That means a company can download a plugin or open Salesforce where they work.

Salesforce is not usually a company I cover, but I have found the last few Dreamforce keynotes pretty interesting; I wrote about CEO Marc Benioff’s keynote in 2024’s Enterprise Philosophy and the First Wave of AI ( https://stratechery.com/2024/enterprise-philosophy-and-the-first-wave-of-ai/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI0L2VudGVycHJpc2UtcGhpbG9zb3BoeS1hbmQtdGhlLWZpcnN0LXdhdmUtb2YtYWkvIl19LCJleHAiOjE3OTIxNDYwNzcsImlhdCI6MTc4OTU1NDA3NywiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.qGE5Cp6nBITw6noz5UZFsu4nEllSq7wY0v3kY0KmR9WeZfAYH3q5W2pTsVeLDxAIhlZONbj5AiR9Ry9kbiFoh_El9vQdSekaZVufqSQwvfs_fzSihN1OqvoCC1jc1mYVHuDhpfSh6Pq1W7BQzXsN0k0NvYtGHCrgle-JQ86tg2VykWdh6v_HGkWYYESOc929H6cpujTeYiate7hFECI93XG5nZUCYOs9qR_G1WqrM0VjemNbVP4qTEQN6e9B4nkTxfg0ijIQgFA38UcfA1FRJwlvn57YZbX33u4QKt-5EkGT05EHvw28B01e3iRJElZbSM1naFg6nLFAybPIMpLEuA ) where he dumped on Microsoft’s CoPilot strategy, dismissing it as a soon-to-be-surpassed Wave 2 of AI. Wave 1 was predictive AI, Wave 2 was CoPilots, and Wave 3 was Agents. Benioff said:

VideoPress Video Player ( https://videopress.com/embed/BnLxMGnH )

But it was pushing us, and they were trying to say, what is the next step? And we are now really at that moment. That is why this show is our most important Dreamforce ever. There’s no question this is the most exciting Dreamforce and the most important Dreamforce. What you’re going to see at this show is technology like you have never seen before…The first time you build and deploy your first autonomous agent for your company that is going to help you to be more productive, to augment your employees, and to get these better business results, you’re going to remember that like the first time in your Waymo. This is the 3rd wave of AI. It’s agents…

The agents Benioff envisioned were, of course, Salesforce’s own agents, which he called Agentforce; the vision was that they would do work in place of humans, not with them; I wrote in that Article:

This Article isn’t about the viability of Agentforce; I’m somewhat skeptical, at least in the short term, for reasons I will get to in a moment. Rather, the key part is the last few sentences: Benioff isn’t talking about making employees more productive, but rather companies; the verb that applies to employees is “augmented”, which sounds much nicer than “replaced”; the ultimate goal is stated as well: business results. That right there is tech’s third philosophy: improving the bottom line for large enterprises.

What was notable about this year’s Dreamforce is that Benioff spent most of his time talking about a different wave, but that wave wasn’t robotics, which followed on agents; rather, I would argue that Salesforce is back at Wave 2: CoPilots, now called AI Force — but the CoPilot is an agent. Benioff introduced AI Force like this:

VideoPress Video Player ( https://videopress.com/embed/bZnCIrVr )

It’s an interface revolution. We’ve seen a lot of interface revolutions. We went from DOS to GUIs, and we went from GUIs to web, and we went from web to mobile. And today, you’re going to see, and I bet a lot of you have not yet seen this, you’re going to see AI interfaces that are dynamic and intelligent, that are composable and alive, and that can work with you in the fundamental administration of the applications, can work with you in building the applications, and work with you in operating the applications because the interface itself is live…

You get this live interface that unlocks the trapped value. And then we’re going to deliver for you AI Force in many forms. If you’re a CoWorker user, you’re going to get Claude Force. If you are a Slack user, you’re going to get Slack Force. If you’re a Lightning user, you’re going to get the new CoWorker. And there will be many others too. And we will also deliver an SDK so you can build your own AI Force applications as well.

That all sounds very dramatic, but what was the actual demo? A plugin for Claude Cowork:

I’m not joking, and also this is awesome: who wants to use the Salesforce user interface, number one, and who wants to use a Salesforce agent, number two? Using ChatGPT or Claude is just way better, and something (some) people are already used to. Moreover, ChatGPT or Claude are extremely capable: if they have access to something, they can just take care of it for you, even if the actual implementation falls short of autonomous agents replacing humans.

Agents as UI
------------

A quick personal anecdote: I’ve repeatedly mentioned my affinity for Channels ( https://getchannels.com/dvr-server/ ) , an app that you run on your own personal server that lets you access the TV you pay for anywhere; this was life-changing when I was in Taiwan, but even now that I am in the U.S. I greatly prefer the Channels interface and the seamless way in which I can switch between viewing sports in particular on a TV or on my phone. Indeed, I’m so enthusiastic about Channels that over the years I have persuaded a good number of my friends to buy their own headless computers (usually Mac Minis), install Channels, and enjoy TV anywhere.

There’s just one problem: even without the use of Salesforce, I have been too good of a salesman. I have somehow ended up with a fleet of Channels instances to manage, and it’s not easy: if I want to change something, I have to log into every instance individually, click around, not mess stuff up, and then do it for the next one. I’ve been on the Channels developers to make a management interface for multiple instances, but then I realized, I might be able to make this myself! And I did, and it worked: I could clone one Channels settings to another with the click of a button.

Then I discovered something surprising: not only will I probably never use that piece of software I vibe-coded, I might never log into the Channels management interface ever again. I can simply tell Codex or Claude what to do, and it does it all — both on my instance and on the ones I manage. Indeed, I can do a whole lot more: in a matter of hours I added a huge number of features I had been wanting for a long time, simply by asking my agent to do it for me. This doesn’t diminish the value of Channels for me; what it does do is render the entire user interface moot.

Now the point of this anecdote is not to analogize my TV service to a major enterprise SaaS app — arguably the enterprise SaaS app. Rather, it’s to emphasize that interacting with software through ChatGPT or Claude is just flat out better than interacting with the software directly. It’s honestly hard to explain how much better it is if you haven’t experienced it, but it’s better enough that I felt compelled to write about Salesforce in a Daily Update!

The Race to Headless
--------------------

Benioff added in his lead-up to the AI Force introduction:

VideoPress Video Player ( https://videopress.com/embed/pbR1Bohy )

This is really the most exciting thing I have ever seen for Salesforce because we have been talking about the data layer for a long time. We have been talking about the applications and semantic layer for a long time. And we have been talking about now the agentic layer for three years. And now for the first time, we’re talking about this, a live interface on Salesforce. Unlocking this trapped value. Finding the patterns across all your data. Getting answers in seconds, not days. And now, anyone can get that value from Salesforce. That is the power of AI Force. And while you might not have seen this from other vendors yet, I assure you, you’re about to see something that I’m sure will get repeated over and over again throughout our whole industry.

What Salesforce is in fact admitting is that the entire agent thing wasn’t the answer; the answer is headless: make all of Salesforce’s data available in the environment where the most capable agents can do something with it. It’s leaning into the fact that Salesforce is a system of record, and betting the company’s defensibility on that.

Oh, and Benioff plans to charge a lot for giving up the user interface:

This is where this move is very clever. My anecdote above takes advantage of hooks in the Channels application to make changes. In truth, however, I could almost certainly do the same thing through computer use and the actual user interface. Computer use with Sol was very good, but very slow: it was amusing to watch a computer being controlled as the cursor carefully moved — accurately, but slowly — to accomplish a task. Astra, however, is just as accurate, but massively faster.

The implications of this are enormous. There is zero defensibility from burying essential functionality in a user interface. I get the sense that a lot of enterprise applications have talked a lot about headless and making their data available to agents, when in reality the plan was always to be opaque and ensure that their API or MCP server was missing some bit of critical functionality that required an actual human to use the UI. That’s not going to fly: with computer use, a UI is not a moat.

Benioff appears to get that. AI is a UI revolution, which means there is no value in trying to hold onto the UI as a point of differentiation or obfuscation. All the better if you sell the abandonment of that moat as a fantastic new feature worth paying $550 a seat for before anyone realizes it’s going to be free.

This Update is also available as a podcast. To receive it in your podcast player, visit Stratechery ( https://stratechery.passport.online/member ).

The Stratechery Update is intended for a single recipient, but occasional forwarding is totally fine! If you would like to order multiple subscriptions for your team with a group discount (minimum 5), please contact me directly.

Thanks for being a subscriber, and have a great day!

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
Click here ( https://stratechery.passport.online/member/unsubscribe?unsub=https%3A%2F%2Fstratechery.passport.online%2Fapi%2F1.0.0%2Fusers%2FCLKjCtDhPT8bsKnDAgUcu%2FchannelOptOut%3Faccess_token%3DeyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZS9hcGkvMS4wLjAvdXNlcnMvQ0xLakN0RGhQVDhic0tuREFnVWN1L2NoYW5uZWxPcHRPdXQ_Y2hhbm5lbD1lbWFpbFx1MDAyNnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSUyRm1lbWJlciUyRnVuc3Vic2NyaWJlIl19LCJleHAiOjE3OTIxNDYwNzcsImlhdCI6MTc4OTU1NDA3NywiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJtZW1iZXI6d3JpdGUiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.eFhiarbCeDZoa2wEwzl5l5_6IBADUfCSZ215In4K3m4Ll04QXfIDjU38-fNIMY3HMm8JplIYrQeyt8n2yZoViQLHTkL1zXLv6K5wcSH6Z3CEcTh2XfXvO8wLRIQYTC7or6B4UbgyHbWChooWDQx6PsoG0abr-5B33tEpP6VU_yMM5wnOfFRhgtOL5WGCNu5AHqPjLp_1EYfJowtxJ24igtzYrjg1bFnUnvfBrSyINUt9LXB4kh6X5Z9InfSvU1w-PYdVE-18WqMir7w-RH2hJauY2W_ZMk1mLGbfQY6XZkkbHSdmdysgi74ZLRmI85aa8FUc_iT9DEjfe9sJJJ7WqA%26channel%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstratechery.passport.online%252Fmember%252Funsubscribe ) to unsubscribe.

© 2026 Stratechery LLC ( https://www.stratechery.com ) , 2093 Philadelphia Pike #9930, Claymont DE 19703

---

## Links found in email

- https://stratechery.com/2026/salesforce-ai-force-agents-as-ui-the-race-to-headless/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3NhbGVzZm9yY2UtYWktZm9yY2UtYWdlbnRzLWFzLXVpLXRoZS1yYWNlLXRvLWhlYWRsZXNzLyJdfSwiZXhwIjoxNzkyMTQ2MDc3LCJpYXQiOjE3ODk1NTQwNzcsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.kd8841YMwe1K1rl3LA8W-QD1opsanzcgHsWc6yCFzLJLz4ldJKvGYwDTZsk_uRfSLTiDn6JVXsgbacLgFkLtsBdgsScIf_xeBtBhsYnrxsmq7Qrgrm0mpaoQmL_3DVTDdy2YO65flEbrBY1lewZhTAcKDhY25ZJTvMGOIR1mub1QZ6hK9uAPe-fZCAVdRjm-71PNtNxGhYMUnd8O9Wbl--lg6_EuwtRAwJ1qJQyvRlAaA3ypBlY-ifWLAglihgBGiCZ0Jqm0u3mE4Jhg8XVI63Md23w7uMKqVJCUh5OwZN3orE6_7frDxTGcPYwadLvX4bVpVgxr4zM4HOnVYgADhA
- https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Frss.stratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://stratechery.com
- https://dithering.passport.online/member/episode/football-and-the-frontier
- https://siliconangle.com/2026/09/15/salesforce-announces-aiforce-unlocking-the-power-of-its-platform-using-composable-agents/
- https://stratechery.com/2024/enterprise-philosophy-and-the-first-wave-of-ai/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI0L2VudGVycHJpc2UtcGhpbG9zb3BoeS1hbmQtdGhlLWZpcnN0LXdhdmUtb2YtYWkvIl19LCJleHAiOjE3OTIxNDYwNzcsImlhdCI6MTc4OTU1NDA3NywiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJmZWVkOnJlYWQgYXJ0aWNsZTpyZWFkIGFzc2V0OnJlYWQgY2F0ZWdvcnk6cmVhZCBlbnRpdGxlbWVudHMiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.qGE5Cp6nBITw6noz5UZFsu4nEllSq7wY0v3kY0KmR9WeZfAYH3q5W2pTsVeLDxAIhlZONbj5AiR9Ry9kbiFoh_El9vQdSekaZVufqSQwvfs_fzSihN1OqvoCC1jc1mYVHuDhpfSh6Pq1W7BQzXsN0k0NvYtGHCrgle-JQ86tg2VykWdh6v_HGkWYYESOc929H6cpujTeYiate7hFECI93XG5nZUCYOs9qR_G1WqrM0VjemNbVP4qTEQN6e9B4nkTxfg0ijIQgFA38UcfA1FRJwlvn57YZbX33u4QKt-5EkGT05EHvw28B01e3iRJElZbSM1naFg6nLFAybPIMpLEuA
- https://videopress.com/embed/BnLxMGnH
- https://videopress.com/embed/bZnCIrVr
- https://getchannels.com/dvr-server/
- https://videopress.com/embed/pbR1Bohy
- https://stratechery.passport.online/member
- https://stratechery.passport.online/member/podcast?url=https%3A%2F%2Fstratechery.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://sharptech.fm/member/podcast?url=https%3A%2F%2Fsharptech.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://dithering.passport.online/member/podcast?url=https%3A%2F%2Fdithering.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://sharpchina.fm/member/podcast?url=https%3A%2F%2Fsharpchina.fm%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://goat.passport.online/member/podcast?url=https%3A%2F%2Fgoat.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://asianometry.passport.online/member/podcast?url=https%3A%2F%2Fasianometry.passport.online%2Ffeed%2Fpodcast%2FCLKjCzLJnXsHRUFPqZ2K9
- https://stratechery.passport.online/member/login?email=cmatecun%40gmail.com
- https://www.stratechery.com
