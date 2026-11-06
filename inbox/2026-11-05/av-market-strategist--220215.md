---
source: av-market-strategist
from: The AV Market Strategist <avmarketstrategist@substack.com>
subject: "Deep Dive: Momenta. Business Model, Unit Economics, Robotaxi Footprint, Financials"
date: 2026-11-06T06:02:15.000Z
extracted: 2026-11-06T14:08:18.858Z
---

# Deep Dive: Momenta. Business Model, Unit Economics, Robotaxi Footprint, Financials

**From:** The AV Market Strategist <avmarketstrategist@substack.com>  
**Date:** 2026-11-06T06:02:15.000Z

---

View this post on the web at https://avmarketstrategist.substack.com/p/deep-dive-momenta-business-model

As I announced earlier this year, I publish dedicated company deep dives exclusively for those of you who have chosen to support AV Market Strategist with a paid subscription, even though my weekly newsletter has always been free and remains free.
This one is about Momenta, and it is a different kind of company from the two files you already have. WeRide and Pony.ai are robotaxi companies that are trying to build a second business on the side. Momenta is the reverse: a driver-assistance software supplier with more than one million cars on the road, a 73% gross margin and a robotaxi business that is still counted in the low hundreds of vehicles.
This deep dive walks through how Momenta actually makes money, what a per-vehicle software licence is worth, why the reported net loss is the least useful number in the filing, who really controls the company, where its robotaxis are (and are not) running, what the Stellantis, Mercedes-Benz and Uber relationships look like under the hood, the full financials through H1 2026, and why the share price has fallen more than 50% since the IPO despite the best half-year in the company’s history.
It is also the first edition of this file, and it rests on a thinner record than the other two. Momenta only listed in Hong Kong in July. So far there is one prospectus and one interim report as a public company, and this deep dive leans heavily on both, above all on the H1 2026 results. So treat this as the initial overview, the baseline. With every report Momenta publishes as a listed company, we will get more insight into the business and understand it better, and I will build on this file as that happens, starting with the full-year results expected in March 2027.
Feel free to leave feedback in the comments or via DM on what you liked, what I can improve, or what you think is missing. Ultimately, I want this to be something that provides you with maximum value.
I will keep this updated on a regular basis so it stays a current reference. If you happen to have more recent information on any of these points, please feel free to contact me so I can update it.
Last updated: November 4, 2026
⏱️ ~10,600 words, 48 minute read
What’s Inside
Company Snapshot: Key facts, Hong Kong listing, executives, workforce, global offices, voting power and founder control
Momenta’s History: From four SenseTime researchers to Hong Kong’s first “Physical AI” stock, with the full funding round breakdown and the IPO mechanics
Business Model & Revenue Architecture: The two revenue lines (technical development and per-vehicle licensing), the “One Flywheel, Two Legs” strategy, the robotaxi revenue model, customer concentration, and the per-vehicle economics nobody publishes
Technology & Approach: The algorithm lineage from rules to R7, the world model, map-free driving, Momenta Mainline, the XHEART chip partnership, and the L3 roadmap
Operational Footprint: The programs, carmakers and regions, how big the market really is (and what the CIC report measures), the market share question (64.5% or 14.3%?), exports, the robotaxi permit map from Suzhou to Munich and Abu Dhabi, Robovan, Robotruck and fleet size
Financials: FY2023 to FY2025, the H1 2026 interim results, what “near break-even” really means, the balance sheet, share price and valuation, and what the sell side expects
Key Risks & Open Questions: BYD, Huawei and DeepRoute, pricing pressure, the Western dual-sourcing trend, geopolitics, governance
The Bottom Line: Bull case, bear case, what to watch in the next 6 to 12 months
A note on currency: Momenta reports in Chinese yuan (RMB). I convert every figure at today’s rate of about RMB 6.78 per US dollar, including historical ones, so read the US$ figures as a sense of scale and the growth rates in RMB.
🔒 The full deep dive is available to paid subscribers. If you find the weekly analysis valuable, this is the kind of work your subscription supports...

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3lNakkwTmpjeU5qZ3NJbWxoZENJNk1UYzVNemswTlRFMU5Dd2laWGh3SWpveE9ESTFORGd4TVRVMExDSnBjM01pT2lKd2RXSXRNelU1TkRZNU5DSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuY0I4emNwYjJPS2dfbjZBNC1ZYzNvWmd1UkdTaFpNLXRGbXN6djFzdk1MbyIsInAiOjIyMjQ2NzI2OCwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzkzOTQ1MTU0LCJleHAiOjIxMDk1MjExNTQsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.GDyZXjIM2_Cm_932qrrV3-81WakYQedqPTu-F6ZyJjU?

---

## Links found in email

- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL3N1YnNjcmliZT91dG1fc291cmNlPWVtYWlsJnV0bV9jYW1wYWlnbj1lbWFpbC1zdWJzY3JpYmUmcj0xeWdmNyZuZXh0PWh0dHBzJTNBJTJGJTJGYXZtYXJrZXRzdHJhdGVnaXN0LnN1YnN0YWNrLmNvbSUyRnAlMkZkZWVwLWRpdmUtbW9tZW50YS1idXNpbmVzcy1tb2RlbCIsInAiOjIyMjQ2NzI2OCwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzkzOTQ1MTU0LCJleHAiOjIxMDk1MjExNTQsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.sxMlw9ApfmR2YtQKedzu3lyBFmeAIpN_ZKHo3aHxbaQ?
- https://substack.com/app-link/post?publication_id=3594694&post_id=222467268&utm_source=post-email-title&utm_campaign=email-post-title&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMjI0NjcyNjgsImlhdCI6MTc5Mzk0NTE1NCwiZXhwIjoxNzk2NTM3MTU0LCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.etYzrAtvqVXRM3sN5ZEAa5u_J3zPlw3_-30C8ZEL_0I
- https://substack.com/@senhormarques
- https://substack.com/app-link/post?publication_id=3594694&post_id=222467268&utm_source=substack&isFreemail=true&submitLike=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMjI0NjcyNjgsInJlYWN0aW9uIjoi4p2kIiwiaWF0IjoxNzkzOTQ1MTU0LCJleHAiOjE3OTY1MzcxNTQsImlzcyI6InB1Yi0zNTk0Njk0Iiwic3ViIjoicmVhY3Rpb24ifQ.IfHjYMmQzh_MKJZfHl8wJD1iFZoypywoR0Sq9PVScn4&utm_medium=email&utm_campaign=email-reaction&r=1ygf7
- https://substack.com/app-link/post?publication_id=3594694&post_id=222467268&utm_source=substack&utm_medium=email&isFreemail=true&comments=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMjI0NjcyNjgsImlhdCI6MTc5Mzk0NTE1NCwiZXhwIjoxNzk2NTM3MTU0LCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.etYzrAtvqVXRM3sN5ZEAa5u_J3zPlw3_-30C8ZEL_0I&r=1ygf7&utm_campaign=email-half-magic-comments&action=post-comment&utm_source=substack&utm_medium=email
- https://substack.com/app-link/post?publication_id=3594694&post_id=222467268&utm_source=substack&utm_medium=email&utm_content=share&utm_campaign=email-share&action=share&triggerShare=true&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMjI0NjcyNjgsImlhdCI6MTc5Mzk0NTE1NCwiZXhwIjoxNzk2NTM3MTU0LCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.etYzrAtvqVXRM3sN5ZEAa5u_J3zPlw3_-30C8ZEL_0I
- https://open.substack.com/pub/avmarketstrategist/p/deep-dive-momenta-business-model?utm_source=substack&utm_medium=email&utm_campaign=email-restack-comment&action=restack-comment&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMjI0NjcyNjgsImlhdCI6MTc5Mzk0NTE1NCwiZXhwIjoxNzk2NTM3MTU0LCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.etYzrAtvqVXRM3sN5ZEAa5u_J3zPlw3_-30C8ZEL_0I&utm_source=substack&utm_medium=email
- https://open.substack.com/pub/avmarketstrategist/p/deep-dive-momenta-business-model?utm_source=email&redirect=app-store-no-desktop&inbox=true&utm_campaign=email-read-in-app
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL3N1YnNjcmliZT91dG1fc291cmNlPXBvc3QmdXRtX2NhbXBhaWduPWVtYWlsLWNoZWNrb3V0Jm5leHQ9aHR0cHMlM0ElMkYlMkZhdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tJTJGcCUyRmRlZXAtZGl2ZS1tb21lbnRhLWJ1c2luZXNzLW1vZGVsJnI9MXlnZjcmdG9rZW49ZXlKMWMyVnlYMmxrSWpvek1qZzNNakF6TENKcFlYUWlPakUzT1RNNU5EVXhOVFFzSW1WNGNDSTZNVGM1TmpVek56RTFOQ3dpYVhOeklqb2ljSFZpTFRNMU9UUTJPVFFpTENKemRXSWlPaUpqYUdWamEyOTFkQ0o5LlFUZ0JIVW5QM0ozZmhndVFvenp3bDFQQmhQOEpWbWp3Qk9ZTDRZVXlFZHMiLCJwIjoyMjI0NjcyNjgsInMiOjM1OTQ2OTQsImYiOnRydWUsInUiOjMyODcyMDMsImlhdCI6MTc5Mzk0NTE1NCwiZXhwIjoyMTA5NTIxMTU0LCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.3oN5MZnnCrORdQspbkx-kaWQ1z5cElAXs0dLcralqm0?simple=true&utm_source=paywall&utm_medium=email&utm_content=222467268&next=https://avmarketstrategist.substack.com/p/deep-dive-momenta-business-model
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3lNakkwTmpjeU5qZ3NJbWxoZENJNk1UYzVNemswTlRFMU5Dd2laWGh3SWpveE9ESTFORGd4TVRVMExDSnBjM01pT2lKd2RXSXRNelU1TkRZNU5DSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuY0I4emNwYjJPS2dfbjZBNC1ZYzNvWmd1UkdTaFpNLXRGbXN6djFzdk1MbyIsInAiOjIyMjQ2NzI2OCwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzkzOTQ1MTU0LCJleHAiOjIxMDk1MjExNTQsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.GDyZXjIM2_Cm_932qrrV3-81WakYQedqPTu-F6ZyJjU?
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9zdWJzdGFjay5jb20vc2lnbnVwP3V0bV9zb3VyY2U9c3Vic3RhY2smdXRtX21lZGl1bT1lbWFpbCZ1dG1fY29udGVudD1mb290ZXImdXRtX2NhbXBhaWduPWF1dG9maWxsZWQtZm9vdGVyJmZyZWVTaWdudXBFbWFpbD1jbWF0ZWN1bkBnbWFpbC5jb20mcj0xeWdmNyIsInAiOjIyMjQ2NzI2OCwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzkzOTQ1MTU0LCJleHAiOjIxMDk1MjExNTQsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.CuKZj6SeWhEP2a20tn_taIYOzSdRPTffdouk-F7ynMY?
