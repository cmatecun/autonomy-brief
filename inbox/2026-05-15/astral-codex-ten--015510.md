---
source: astral-codex-ten
from: Astral Codex Ten <astralcodexten@substack.com>
subject: "The Sigmoids Won't Save You"
date: 2026-05-15T08:55:10.000Z
extracted: 2026-05-15T13:08:15.182Z
---

# The Sigmoids Won't Save You

**From:** Astral Codex Ten <astralcodexten@substack.com>  
**Date:** 2026-05-15T08:55:10.000Z

---

View this post on the web at https://www.astralcodexten.com/p/the-sigmoids-wont-save-you

“All exponentials eventually become sigmoids” is an annoying AI talking point. If someone presents a graph like this…
….and points out that it seems like AI capabilities could soon reach the level marked “High”, then the height of intelligent debate is to point out that actually, the trend could go like this:
…and then it would never reach the level marked “High”!
In slogan form, this is “all exponentials eventually become sigmoids” (a sigmoid is the s-shape of the second graph, which starts exponential but gradually flattens out). It’s technically true. No process can keep growing forever; eventually it hits physical or practical limits. For example, total cases during an epidemic is classically sigmoid:
They start slow - patient zero infects patient one, and so on. They grow exponentially until most people are infected. Then, as almost everyone is infected and they can only mop up the last few holdouts, they slow down again. Finally, after everyone has been infected, the growth rate is zero.
Technological progress in a given field can also be sigmoid. Here’s airspeed record over time:
My understanding is that this represents 3-4 “generations” of different technology (propellers, turbojets, etc). Each technology went through normal iterative improvement, then, when it reached its fundamental limits, got replaced by a better technology. The last technology, ramjets, reached its limit at about 3500 km/h, and there wasn’t the economic/regulatory will to develop anything better, so the record stands. 
You can imagine something similar happening with AI at some point. Does that mean people are right, and there’s no need to worry that the graph will ever reach the line marked “high”?
Before we come up with a general answer, let’s look at the Sigmoid Misidentification Hall Of Fame.
Third place goes to UN birthrate projections in countries with declining birthrates. These countries’ birthrates keep going down at a constant rate, and the UN keeps predicting they will flatten out and go down at some lesser rate. On this graph, red is the real data, and each blue line is a different UN attempt from a different year to “extrapolate” the “trend”.
It’s true that birth rates must eventually flatten out and become sigmoid (this may have happened last year in South Korea [ https://substack.com/redirect/f10ddbcd-960b-418f-b40f-2cf1a22bf044?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], although Colombia and Chile are still declining), but this doesn’t necessarily happen at the exact moment that forecasters in the UN start feeling like the decline has gone too far. 
Second place goes to predictions of solar power deployment, as chronicled by [ https://substack.com/redirect/ea5b7bed-c5c6-45e8-a095-9c10f2b706d2?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] A.E. Hoekstra.
The various WEO lines are World Energy Organization predictions for how quickly solar power will get deployed. Every year, the WEO thinks “Wow, lots of solar power got added last year, probably this year it will level out and people might even back off a little”. Every year, the amount of solar power deployed grows at the same rate.
First place goes to this paper [ https://substack.com/redirect/28c26f32-a841-497c-b404-9ba18306f10f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] on the METR graph of AI capabilities. In early 2026, when the underlying data looked like this:
…a team from Wharton tried to model different curves and predicted that the likely future trajectory was this:
@Tenobrus ably chronicles [ https://substack.com/redirect/adc0c864-36c0-4ca1-ae04-41dfe56efd5c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] what happened next (the green curve is their original; the star marks the next AI model to be released after their analysis):
The moral of the story is that, even though all exponentials eventually become sigmoids, this doesn’t necessarily happen at the exact moment you’re doing your analysis. Sometimes they stay exponential for much longer than that!
How much longer?
The best way to predict this is to fully understand the process generating the trend. For example, you can forecast an epidemic by knowing how quickly it replicates, how likely it is to be cured, and how large the susceptible population is. Even in harder cases like airspeed records, a smart engineer could determine that ramjets max out around 3500 km/h, and a smart economist could predict that no country was incentivized to spend enough money to bring the next paradigm to fruition.
What if you don’t fully understand the process? AI forecasters know some things (like how data centers work and how much it costs to build them). But they’re unsure about other things (researchers keep inventing new paradigms of data generation that get over data walls, but for how long?), and other things are entirely opaque (What is intelligence really? Why do scaling laws work? Might they just stop working at some point?) Is there anything you can do here?
In conditions of true ignorance, the default assumption should be Lindy’s Law [ https://substack.com/redirect/8f1ff7da-2798-4740-88fe-9ae0578fa078?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]: on average, a process will continue about as long as it’s continued already.
To build intuition: suppose you walk past a geyser, and see a sign saying “This geyser last erupted 100,000 years ago”. You know nothing else about geysers. What’s the chance it will erupt in the next hour? It must be very low, right? If it erupted in the next hour, you would have walked past it 99.99999% of the way through its eruption cycle - in other words, your random sample had a higher value than 99.99999% of points. That’s not how random samples usually work! On the other hand, suppose you walk past another geyser, and see a sign saying “This geyser last erupted 10 minutes ago”. What is the chance that this geyser will erupt in the next hour? Pretty high, right? It seems like this geyser’s eruptions occur on a scale of every few minutes. When you calculate it out, your median prediction for the length of time until the next eruption should just be the number on the sign. In the same way, your median prediction for how long it should take before an entirely-mysterious trend changes shape should be the amount of time since the last change.
Applying this to AI: the forecasters who try to get deep understanding of the dynamics of AI progress think that we can keep scaling up AI at the current rate for another few years (by building more data centers, etc), and might or might not be able to scale it up faster after that by leveraging recursive self-improvement. But suppose you don’t trust those people. What should your default be?
AI has been improving dramatically since at least GPT-1 in 2017, although most people sort of arbitrarily date “the scaling era” as 2019 to present. So naively, ignoring everything we know and considering the whole field to be a total mystery, we might expect the trend to continue for, on average, another seven years. Assuming a Pareto distribution (what does this even mean in the case of AI? I don’t know) the chance that it continues for less than another two years is 22%.
It’s cheap and easy to make fun of people who extrapolate trends too far:
But if someone claims that the trend toward increasing AI capabilities will never reach some particular scary level, then the burden is on them to explain either:
If they’re not treating AI as a black box, and claim to be modeling the dynamics explicitly, then what is their model? Have they calculated the obvious things, like projected data center growth and speed of algorithmic progress? Are they familiar with the modeling work that’s already been done in this field, like the AI Futures Timeline Model [ https://substack.com/redirect/7dcc4056-a18e-4d9f-8538-c2e2351bcc3e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]? Do they have specific opinions on how the others went wrong, and where their model differs? 
If they are treating AI as a black box, why isn’t their default expectation based on Lindy’s Law?

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cuYXN0cmFsY29kZXh0ZW4uY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3hPRGc0T0RnM05EVXNJbWxoZENJNk1UYzNPRGd6TlRReE1Dd2laWGh3SWpveE9ERXdNemN4TkRFd0xDSnBjM01pT2lKd2RXSXRPRGt4TWpBaUxDSnpkV0lpT2lKa2FYTmhZbXhsWDJWdFlXbHNJbjAubkpOTkNwOGVFblp5UVRsa1dZSzdXSkFRWmlzTXBDSEhDQnAtZUhQUDdRQSIsInAiOjE4ODg4ODc0NSwicyI6ODkxMjAsImYiOmZhbHNlLCJ1IjozMjg3MjAzLCJpYXQiOjE3Nzg4MzU0MTAsImV4cCI6MjA5NDQxMTQxMCwiaXNzIjoicHViLTAiLCJzdWIiOiJsaW5rLXJlZGlyZWN0In0.Hx5jAlAuFzUo4biZ5F_TuNnkLZuJkJWjWaaCVH076Rk?

---

## Links found in email

- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cuYXN0cmFsY29kZXh0ZW4uY29tL3N1YnNjcmliZT91dG1fc291cmNlPWVtYWlsJnV0bV9jYW1wYWlnbj1lbWFpbC1zdWJzY3JpYmUmcj0xeWdmNyZuZXh0PWh0dHBzJTNBJTJGJTJGd3d3LmFzdHJhbGNvZGV4dGVuLmNvbSUyRnAlMkZ0aGUtc2lnbW9pZHMtd29udC1zYXZlLXlvdSIsInAiOjE4ODg4ODc0NSwicyI6ODkxMjAsImYiOmZhbHNlLCJ1IjozMjg3MjAzLCJpYXQiOjE3Nzg4MzU0MTAsImV4cCI6MjA5NDQxMTQxMCwiaXNzIjoicHViLTAiLCJzdWIiOiJsaW5rLXJlZGlyZWN0In0.h63gP8MfFkuGgxswQtKFb21oQ5krvf-z6N1wfCdr9ls?
- https://substack.com/app-link/post?publication_id=89120&post_id=188888745&utm_source=post-email-title&utm_campaign=email-post-title&isFreemail=false&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxODg4ODg3NDUsImlhdCI6MTc3ODgzNTQxMCwiZXhwIjoxNzgxNDI3NDEwLCJpc3MiOiJwdWItODkxMjAiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ERBNr4vkuwx6JbxtqiglBQeaYNveH_9DFe9fLSAs4mw
- https://substack.com/app-link/post?publication_id=89120&post_id=188888745&utm_source=substack&isFreemail=false&submitLike=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxODg4ODg3NDUsInJlYWN0aW9uIjoi4p2kIiwiaWF0IjoxNzc4ODM1NDEwLCJleHAiOjE3ODE0Mjc0MTAsImlzcyI6InB1Yi04OTEyMCIsInN1YiI6InJlYWN0aW9uIn0.ZkhWs7blgjxrAiG5f04b-2fLwHRBs9gwR4cBYbAr9Vw&utm_medium=email&utm_campaign=email-reaction&r=1ygf7
- https://substack.com/app-link/post?publication_id=89120&post_id=188888745&utm_source=substack&utm_medium=email&isFreemail=false&comments=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxODg4ODg3NDUsImlhdCI6MTc3ODgzNTQxMCwiZXhwIjoxNzgxNDI3NDEwLCJpc3MiOiJwdWItODkxMjAiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ERBNr4vkuwx6JbxtqiglBQeaYNveH_9DFe9fLSAs4mw&r=1ygf7&utm_campaign=email-half-magic-comments&action=post-comment&utm_source=substack&utm_medium=email
- https://substack.com/app-link/post?publication_id=89120&post_id=188888745&utm_source=substack&utm_medium=email&utm_content=share&utm_campaign=email-share&action=share&triggerShare=true&isFreemail=false&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxODg4ODg3NDUsImlhdCI6MTc3ODgzNTQxMCwiZXhwIjoxNzgxNDI3NDEwLCJpc3MiOiJwdWItODkxMjAiLCJzdWIiOiJwb3N0LXJlYWN0aW9uIn0.ERBNr4vkuwx6JbxtqiglBQeaYNveH_9DFe9fLSAs4mw
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9vcGVuLnN1YnN0YWNrLmNvbS9wdWIvYXN0cmFsY29kZXh0ZW4vcC90aGUtc2lnbW9pZHMtd29udC1zYXZlLXlvdT91dG1fc291cmNlPXN1YnN0YWNrJnV0bV9tZWRpdW09ZW1haWwmdXRtX2NhbXBhaWduPWVtYWlsLXJlc3RhY2stY29tbWVudCZhY3Rpb249cmVzdGFjay1jb21tZW50JnI9MXlnZjcmdG9rZW49ZXlKMWMyVnlYMmxrSWpvek1qZzNNakF6TENKd2IzTjBYMmxrSWpveE9EZzRPRGczTkRVc0ltbGhkQ0k2TVRjM09EZ3pOVFF4TUN3aVpYaHdJam94TnpneE5ESTNOREV3TENKcGMzTWlPaUp3ZFdJdE9Ea3hNakFpTENKemRXSWlPaUp3YjNOMExYSmxZV04wYVc5dUluMC5FUkJOcjR2a3V3eDZKYnh0cWlnbEJRZWFZTnZlSF85REZlOWZMU0FzNG13IiwicCI6MTg4ODg4NzQ1LCJzIjo4OTEyMCwiZiI6ZmFsc2UsInUiOjMyODcyMDMsImlhdCI6MTc3ODgzNTQxMCwiZXhwIjoyMDk0NDExNDEwLCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.hJOAllusTbwhUbzhNCgb5TTSiNYiLxtKe0B16OQeJSg?&utm_source=substack&utm_medium=email
- https://open.substack.com/pub/astralcodexten/p/the-sigmoids-wont-save-you?utm_source=email&redirect=app-store&utm_campaign=email-read-in-app
- https://substack.com/redirect/f123be05-dd56-4aca-a1fe-f47858e6aec1?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/ae6f426c-0b18-4efb-b54d-0719084aaae2?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/ae2e5fc8-f9e5-4ff1-b72a-b2bfd3d2b04f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/ca3fe70d-a4d5-4cd7-af25-f40e796a8d18?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/966fd907-fad5-41c5-af3e-afaf1e5f72fa?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/f10ddbcd-960b-418f-b40f-2cf1a22bf044?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/ea5b7bed-c5c6-45e8-a095-9c10f2b706d2?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c8a05f6f-c206-4540-a1e9-898bb52b4429?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/28c26f32-a841-497c-b404-9ba18306f10f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/43a4ff50-48bb-4061-a1b1-254067861dca?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c59123f4-ac71-4444-b2f3-4795708992ea?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/adc0c864-36c0-4ca1-ae04-41dfe56efd5c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/e62367ea-ca05-430b-b3a8-605cc840ebf5?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/8f1ff7da-2798-4740-88fe-9ae0578fa078?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/bc57c463-e1b6-4e47-b709-810dbe952cbf?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/682e7bd8-cadd-4721-8598-5e765edbc9b8?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/7dcc4056-a18e-4d9f-8538-c2e2351bcc3e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly93d3cuYXN0cmFsY29kZXh0ZW4uY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3hPRGc0T0RnM05EVXNJbWxoZENJNk1UYzNPRGd6TlRReE1Dd2laWGh3SWpveE9ERXdNemN4TkRFd0xDSnBjM01pT2lKd2RXSXRPRGt4TWpBaUxDSnpkV0lpT2lKa2FYTmhZbXhsWDJWdFlXbHNJbjAubkpOTkNwOGVFblp5UVRsa1dZSzdXSkFRWmlzTXBDSEhDQnAtZUhQUDdRQSIsInAiOjE4ODg4ODc0NSwicyI6ODkxMjAsImYiOmZhbHNlLCJ1IjozMjg3MjAzLCJpYXQiOjE3Nzg4MzU0MTAsImV4cCI6MjA5NDQxMTQxMCwiaXNzIjoicHViLTAiLCJzdWIiOiJsaW5rLXJlZGlyZWN0In0.Hx5jAlAuFzUo4biZ5F_TuNnkLZuJkJWjWaaCVH076Rk?
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9zdWJzdGFjay5jb20vc2lnbnVwP3V0bV9zb3VyY2U9c3Vic3RhY2smdXRtX21lZGl1bT1lbWFpbCZ1dG1fY29udGVudD1mb290ZXImdXRtX2NhbXBhaWduPWF1dG9maWxsZWQtZm9vdGVyJmZyZWVTaWdudXBFbWFpbD1jbWF0ZWN1bkBnbWFpbC5jb20mcj0xeWdmNyIsInAiOjE4ODg4ODc0NSwicyI6ODkxMjAsImYiOmZhbHNlLCJ1IjozMjg3MjAzLCJpYXQiOjE3Nzg4MzU0MTAsImV4cCI6MjA5NDQxMTQxMCwiaXNzIjoicHViLTAiLCJzdWIiOiJsaW5rLXJlZGlyZWN0In0.27ihFp3xurRqLt5b-9lVAjzNVescim1EB1ALpxlGiec?
