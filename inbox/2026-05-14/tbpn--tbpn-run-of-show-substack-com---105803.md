---
source: tbpn--tbpn-run-of-show-substack-com-
from: TBPN <tbpn+run-of-show@substack.com>
subject: "Cerebras Rips"
date: 2026-05-14T17:58:03.000Z
extracted: 2026-05-15T13:08:24.088Z
---

# Cerebras Rips

**From:** TBPN <tbpn+run-of-show@substack.com>  
**Date:** 2026-05-14T17:58:03.000Z

---

View this post on the web at https://tbpn.substack.com/p/cerebras-rips

Happy Thursday.
We’re live on YouTube [ https://substack.com/redirect/04f919d0-15c3-4c94-8336-081ac76fb4c4?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] and 𝕏 [ https://substack.com/redirect/014fdbe6-9817-4295-afa5-9415e5f2e0bd?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ].
The current thing in tech and business is the Cerebras IPO, which is currently trading around $320 — up over double from Monday expectations [ https://substack.com/redirect/c8f331d5-7335-480b-ac51-c8ff7958366d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ].
Today’s lineup
Netflix President of Advertising Amy Reinhard [ https://substack.com/redirect/f5f8d57d-0ab4-446a-bff4-f220e3fab58c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 11:30 AM
Raindrop Co-Founder & CTO Ben Hylak [ https://substack.com/redirect/c8a607f6-22b5-4d8b-bcdf-423b200e0b74?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 12:05 PM
SemiAnalysis President Doug O’Laughlin [ https://substack.com/redirect/c9e6fc21-c6bf-49ff-ab57-70148c3d972a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 12:30 PM
Cerebras Founder & CEO Andrew Feldman [ https://substack.com/redirect/4923e519-f682-4204-83f7-5507d6211d1d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 1:20 PM
Benchmark General Partner Eric Vishria [ https://substack.com/redirect/611869ed-cf52-406c-a46e-09a91a610589?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 1:40 PM
Foundation Capital General Partner Steve Vassallo [ https://substack.com/redirect/d51af8f3-2bce-4ada-a5ff-72f16c18c7b6?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 1:50 PM
Run of Show
Cerebras IPO doubles valuation basically overnight
Chip design company is Cerebras trading at $350 per share [ https://substack.com/redirect/feed4e5e-e4f5-4496-a329-2b5ac064d30a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] on its first day of public trading, which values the company at ~$107B and has them raising $10.5B. The price on this IPO has literally been up only. On Monday, price range for the shares were updated [ https://substack.com/redirect/c8f331d5-7335-480b-ac51-c8ff7958366d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] to $150-$160 from $115-$125, meaning the company’s market cap has nearly doubled overnight.
SemiAnalysis has a fantastic deep dive [ https://substack.com/redirect/9f46f3ee-736f-491a-9065-85e117d3da52?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] on Cerebras that’s worth reading in full.
The interesting takeaways are some really solid positives. Cerebras chips work, they are very fast, and token-consumers have revealed a preference and willingness to pay for speed. The SemiAnalysis team quantified it in their own experience with Opus models:
Opus 4.6 fast mode famously charges 6x the price for 2.5x the interactivity (though it’s now under 2x faster, see chart below). In April, 80% of our AI spend (which peaked at $10M annualized) was on Opus 4.6 fast.
Cerebras has a big 750mw deal with OpenAI and chips are already serving GPT-5.3 in Codex on Cerebras chips via “Spark” - it’s remarkably fast, and even if you aren’t vibe coding, you can just go talk to the model like it’s ChatGPT and experience the difference. I think there will be huge demand for faster inference across all parts of the AI economy. There’s an old (probably slightly apocryphal) quote about ecommerce that goes: “Every 100ms of latency costs Amazon 1% in sales.” This is currently playing out in AI inference. Companies pay disproportionately more for faster inference. Good for Cerebras.
SemiAnalysis does point out a bunch of problems the team will have to solve or contend with over the next few years though. Mainly, Cerebras chips are not currently as capable of holding larger models or networking multiple chips together to serve large models and handle larger context windows:
“Moreover, the industry is trending towards larger context windows ad infinitum -- 128k context will certainly not be acceptable for long, especially with the prevalence of agentic workloads.”
And it doesn’t look like there is a simple solution of just scaling the wafer size larger or adding more memory to the existing architecture. Cerebras’s whole design depends on lots of SRAM directly on the wafer. But SRAM is no longer shrinking much with each new semiconductor node. SemiAnalysis points out that WSE-2 had 40GB, WSE-3 only moved to 44GB, and future nodes may not help much. That means Cerebras cannot simply wait for Moore’s Law to give it much more memory. To add more SRAM, it may have to sacrifice compute area or attempt much harder 3D/wafer-bonding approaches.
In an agentic workflow, it’s entirely possible you will want the biggest, most powerful model handling critical work, so future models might not fit neatly on Cerebras chips. Still, I imagine that we will quickly jump from the agentic age to the orchestrator age and there will be hybrid approaches. The biggest and best models will delegate certain tasks to smaller, faster models, while they crank on harder problems. It’s hard to predict the exact mix of chips that will power large networks of agents, but these different designs seem more complementary than directly competitive. — John
General Catalyst ad raises eyebrows on the timeline
​​GC took direct shots at Marc Andreessen yesterday in a new ad called Meet GC [ https://substack.com/redirect/9416f7bb-3d93-43d9-bf28-5af2b0de3d8d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]. If you weren’t aware of Marc’s love of robot dogs, you might not have put it together. But Marc quickly responded dozens of times [ https://substack.com/redirect/b421527f-2f8a-4d9a-848b-b83edf74488c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], at one point calling it “a clever inversion of the original ‘Mac vs PC’ commercials, this time clearly intended to make the sponsor appear smarmy and judgmental. Fascinating.”
It’s fascinating to me to see GC try to position themselves on the moral high ground over a16z, considering that GC has backed both Kalshi and Polymarket, two of the companies at the very center of tech’s morality debate today.
The winner here is no one. I think both sides would have more aura if they focused on being more like Blackstone. Run ads in The Economist, WSJ, and Financial Times, founders do an interview once a year, and otherwise focus on themselves. — Jordi
Kevin Warsh is confirmed as the new Fed Chair right after inflation rips
Trump’s pick to replace Jerome Powell was confirmed as the next Fed Chair [ https://substack.com/redirect/ea117405-8237-44d4-9412-71c195b24714?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] yesterday in a 54-45 Senate vote. Current chair Jerome Powell ends Friday. The expectations for Warsh have been that he’ll be more open to cutting interest rates, and his background — he’s pro Bitcoin and AI and has VC exposure to crypto — aligns with the current Administration. But he’s also stepping into the role just as we had our biggest inflation print since May 2023 [ https://substack.com/redirect/c90c2c26-ee05-4132-97cd-357a46514202?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], which might immediately put him at odds with the President on the rate cut issue.
Elon-OpenAI trial expected to end today
Closing statements started this morning [ https://substack.com/redirect/22147300-f857-4af3-bfe3-1b75e7b37525?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] in Oakland in Elon Musk’s court case against OpenAI, in which he’s accusing the company of ‘stealing’ a charity for for-profit conversion. The jury will have to deliberate on the case, so it would be surprising if the judge handed down a decision today. Also worth remembering that the jury in this case is advisory, so Judge Yvonne Gonzalez Rogers retains authority over remedies and certain final decisions herself.
Clip Spotlight: Condé Nast CEO Says Search and Social-Based Digital Publishing Is Over 
After several years of declining search traffic, Condé Nast CEO Roger Lynch has directed all the company’s brands to operate as if search traffic to their properties will be zero.
He says the era of turning search and social media traffic into profitable businesses is gone.
And that if you run a media business that doesn’t have an authoritative brand, a very strong niche, or a direct audience, you’re going to be fighting hostile algo changes all the way down.
He describes a recent board meeting:
“We took a snapshot of search results from seven or eight years ago. And what you saw were a few sponsored links, then the ten blue links.”
“Do the same search today, you get an AI overview, then you get rows and rows and rows of commerce links, then you get sponsored stuff.”
“Each of the last three years, we would do our budgets, and we’d put forecasts in of search traffic declining. Because we’d seen the pattern of algorithm changes. And generally those algorithm changes were negative.”
“Every year, our search traffic was down more than we had forecast. So last year I told our teams, ‘Assume there’s no search.’ You have to have your businesses planned as if search is zero. We don’t expect it to be zero, we expect it to be a single-digit percentage of our traffic.”
Headlines
Cerebras opens 89% above IPO price in US market debut [ https://substack.com/redirect/78388dcb-5f8c-481c-a7e5-c0ebee42aedb?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: Kevin Warsh Is Confirmed as Fed Chair in 54–45 Senate Vote [ https://substack.com/redirect/ea117405-8237-44d4-9412-71c195b24714?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Reuters: Exclusive: US clears H200 chip sales to 10 China firms as Nvidia CEO looks for breakthrough [ https://substack.com/redirect/dcf2929f-1c03-4b6b-bf08-60a593bf72fa?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: Closing Statements Begin in Musk Trial Over OpenAI Founding, Leadership [ https://substack.com/redirect/22147300-f857-4af3-bfe3-1b75e7b37525?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Apple-OpenAI Alliance Frays, Setting Up Possible Legal Fight [ https://substack.com/redirect/2f3809db-6ce9-4636-9d54-4efac30c8a10?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Controversy erupts over Figure robot appearing to adjust a teleoperated headset during livestream demo [ https://substack.com/redirect/b816ab3f-4767-453d-b396-985726c5240f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Yahoo Finance: ‘Everyone is unhappy’: Meta employees say the mood is grim as the company reportedly plans to axe 8,000 workers [ https://substack.com/redirect/d53cbcc7-34f5-466f-853a-6cb38b60e399?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Coursera Co-Founder Andrew Ng: “There will be no AI jobpocalypse” [ https://substack.com/redirect/45c5cfc1-75cc-420d-b2a6-b4d98175f48e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: GLP-1 Users Are Taking a Bite Out of the Restaurant Business [ https://substack.com/redirect/be68c3d5-50fc-434b-94c0-e9d10f658853?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: I Started a Business at 67. It Has Been Much Better Than Retiring. [ https://substack.com/redirect/16672bf1-f2c7-4d3a-a9e5-e4c0dc6029d0?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: The Tech Jobs That Are Safe From AI [ https://substack.com/redirect/07ffb6f7-89e3-4840-8a65-968ff2a86ec4?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
FT: Tech groups score win on clean energy rules for gas-powered data centres [ https://substack.com/redirect/3a36a33b-a1ed-4d71-aa45-22690dfd562b?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
TechCrunch: Wirestock raises $23M to supply creative multi-modal data to AI labs [ https://substack.com/redirect/75ea37c2-20e5-45b5-8b73-00c4be88facd?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Posts of the Day

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90YnBuLnN1YnN0YWNrLmNvbS9hY3Rpb24vZGlzYWJsZV9lbWFpbD90b2tlbj1leUoxYzJWeVgybGtJam96TWpnM01qQXpMQ0p3YjNOMFgybGtJam94T1RjMk9UZ3pNVFFzSW1saGRDSTZNVGMzT0RjNE1UVXhOQ3dpWlhod0lqb3hPREV3TXpFM05URTBMQ0pwYzNNaU9pSndkV0l0TlRZNU5USXhOeUlzSW5OMVlpSTZJbVJwYzJGaWJHVmZaVzFoYVd3aWZRLmRNZ2N5MkpTaUN5clBzOFE1NzM5R3BCUEdscGQzZldIbGw0bEtuV0VlX3MiLCJwIjoxOTc2OTgzMTQsInMiOjU2OTUyMTcsImYiOnRydWUsInUiOjMyODcyMDMsImlhdCI6MTc3ODc4MTUxNCwiZXhwIjoyMDk0MzU3NTE0LCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.-syIZBCG1xVzszcsy6AB1589oqYpzBAH5ShtlkHlWyk?

---

## Links found in email

- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90YnBuLnN1YnN0YWNrLmNvbS9zdWJzY3JpYmU_dXRtX3NvdXJjZT1lbWFpbCZ1dG1fY2FtcGFpZ249ZW1haWwtc3Vic2NyaWJlJnI9MXlnZjcmbmV4dD1odHRwcyUzQSUyRiUyRnRicG4uc3Vic3RhY2suY29tJTJGcCUyRmNlcmVicmFzLXJpcHMiLCJwIjoxOTc2OTgzMTQsInMiOjU2OTUyMTcsImYiOnRydWUsInUiOjMyODcyMDMsImlhdCI6MTc3ODc4MTUxNCwiZXhwIjoyMDk0MzU3NTE0LCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.9Tuegq8X_LJ0M03jAhw-FvUAjZA6sJuBqFPV9sw23zA?
- https://substack.com/app-link/post?publication_id=5695217&post_id=197698314&utm_source=post-email-title&utm_campaign=email-post-title&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxOTc2OTgzMTQsImlhdCI6MTc3ODc4MTUxNCwiZXhwIjoxNzgxMzczNTE0LCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.OKAxGoe5a832_ii2BoBAW6aDyreanZkeVPewi-dXDxA
- https://substack.com/@brandongorrell
- https://substack.com/app-link/post?publication_id=5695217&post_id=197698314&utm_source=substack&isFreemail=true&submitLike=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxOTc2OTgzMTQsInJlYWN0aW9uIjoi4p2kIiwiaWF0IjoxNzc4NzgxNTE0LCJleHAiOjE3ODEzNzM1MTQsImlzcyI6InB1Yi01Njk1MjE3Iiwic3ViIjoicmVhY3Rpb24ifQ.yzqK05cdr4ZXbNyFoW_HEsEzxivIQIO6u2fsAw_mD4g&utm_medium=email&utm_campaign=email-reaction&r=1ygf7
- https://substack.com/app-link/post?publication_id=5695217&post_id=197698314&utm_source=substack&utm_medium=email&isFreemail=true&comments=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxOTc2OTgzMTQsImlhdCI6MTc3ODc4MTUxNCwiZXhwIjoxNzgxMzczNTE0LCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.OKAxGoe5a832_ii2BoBAW6aDyreanZkeVPewi-dXDxA&r=1ygf7&utm_campaign=email-half-magic-comments&action=post-comment&utm_source=substack&utm_medium=email
- https://substack.com/app-link/post?publication_id=5695217&post_id=197698314&utm_source=substack&utm_medium=email&utm_content=share&utm_campaign=email-share&action=share&triggerShare=true&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoxOTc2OTgzMTQsImlhdCI6MTc3ODc4MTUxNCwiZXhwIjoxNzgxMzczNTE0LCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.OKAxGoe5a832_ii2BoBAW6aDyreanZkeVPewi-dXDxA
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9vcGVuLnN1YnN0YWNrLmNvbS9wdWIvdGJwbi9wL2NlcmVicmFzLXJpcHM_dXRtX3NvdXJjZT1zdWJzdGFjayZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9jYW1wYWlnbj1lbWFpbC1yZXN0YWNrLWNvbW1lbnQmYWN0aW9uPXJlc3RhY2stY29tbWVudCZyPTF5Z2Y3JnRva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3hPVGMyT1Rnek1UUXNJbWxoZENJNk1UYzNPRGM0TVRVeE5Dd2laWGh3SWpveE56Z3hNemN6TlRFMExDSnBjM01pT2lKd2RXSXROVFk1TlRJeE55SXNJbk4xWWlJNkluQnZjM1F0Y21WaFkzUnBiMjRpZlEuT0tBeEdvZTVhODMyX2lpMkJvQkFXNmFEeXJlYW5aa2VWUGV3aS1kWER4QSIsInAiOjE5NzY5ODMxNCwicyI6NTY5NTIxNywiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzc4NzgxNTE0LCJleHAiOjIwOTQzNTc1MTQsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.oUxbErud4Pyd9XVEKNsil_Rt0SM3BWwSGUXF7-a0AOc?&utm_source=substack&utm_medium=email
- https://open.substack.com/pub/tbpn/p/cerebras-rips?utm_source=email&redirect=app-store&utm_campaign=email-read-in-app
- https://substack.com/redirect/04f919d0-15c3-4c94-8336-081ac76fb4c4?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/014fdbe6-9817-4295-afa5-9415e5f2e0bd?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c8f331d5-7335-480b-ac51-c8ff7958366d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/f5f8d57d-0ab4-446a-bff4-f220e3fab58c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c8a607f6-22b5-4d8b-bcdf-423b200e0b74?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c9e6fc21-c6bf-49ff-ab57-70148c3d972a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/4923e519-f682-4204-83f7-5507d6211d1d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/611869ed-cf52-406c-a46e-09a91a610589?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/d51af8f3-2bce-4ada-a5ff-72f16c18c7b6?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/21484c95-487d-4217-9c49-deebb3829a99?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/feed4e5e-e4f5-4496-a329-2b5ac064d30a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/9f46f3ee-736f-491a-9065-85e117d3da52?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/9416f7bb-3d93-43d9-bf28-5af2b0de3d8d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/b421527f-2f8a-4d9a-848b-b83edf74488c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/ea117405-8237-44d4-9412-71c195b24714?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c90c2c26-ee05-4132-97cd-357a46514202?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/22147300-f857-4af3-bfe3-1b75e7b37525?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/5fe92f47-d400-4462-a207-c51a2c4be5be?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/78388dcb-5f8c-481c-a7e5-c0ebee42aedb?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/dcf2929f-1c03-4b6b-bf08-60a593bf72fa?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/2f3809db-6ce9-4636-9d54-4efac30c8a10?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/b816ab3f-4767-453d-b396-985726c5240f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
