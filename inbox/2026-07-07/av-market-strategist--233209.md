---
source: av-market-strategist
from: The AV Market Strategist <avmarketstrategist@substack.com>
subject: "Agentic AI for Robotaxis: Inside Autobrains"
date: 2026-07-08T06:32:09.000Z
extracted: 2026-07-08T13:08:16.549Z
---

# Agentic AI for Robotaxis: Inside Autobrains

**From:** The AV Market Strategist <avmarketstrategist@substack.com>  
**Date:** 2026-07-08T06:32:09.000Z

---

View this post on the web at https://avmarketstrategist.substack.com/p/agentic-ai-for-robotaxis-inside-autobrains

The autonomous driving industry has mostly converged on one architecture: a single, monolithic end-to-end model trained to handle the entire driving task.
Igal Raichelgauz, founder and CEO of Autobrains, argues that approach hits a wall on edge cases and compute cost.
His alternative is “agentic AI.” Driving is broken into a large but finite set of specialized agents, each an expert in a specific situation, invoked by an orchestrator in real time. Autobrains claims this runs on roughly an order of magnitude less compute, needs almost no labeling, stays vision-only, and skips HD maps.
We recorded just after Autobrains’ two announcements at NVIDIA GTC Taipei: a Munich robotaxi program with Uber on NVIDIA DRIVE Hyperion, and a Level 4 robotaxi platform with VinFast for Southeast Asia’s high-density traffic. We get into why Munich is a deliberate choice, what “OEM-agnostic” actually buys an automaker, and how an investor list that doubles as a customer list (BMW, Toyota, Continental, VinFast, Magna, Knorr-Bremse) shapes the company.
You can also listen to it on your favorite platform:
🎧 Spotify: click here [ https://substack.com/redirect/f79c6d31-84b2-4d2e-97af-6975cd046a40?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
🎧 Apple Podcasts: click here [ https://substack.com/redirect/94dc8e25-92b4-44f2-bcd1-5c4c3e665272?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
📺 YouTube: click here [ https://substack.com/redirect/45ce7ad9-f576-43db-8f48-a6eec25e293e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Timestamps:
(01:30) What Autobrains does, and the problem of bringing autonomy to 1.5 billion cars
(02:10) Agentic AI in one sentence, and why specialization beats one big model
(05:04) Why Igal thinks the end-to-end consensus is wrong
(07:16) Edge cases: school buses, pedestrian intent, a kid chasing a ball
(08:19) The claim of ~10x less compute and near-zero labeling, and how to prove it to a skeptical OEM
(09:31) Traceability and explainability for regulators through modularity
(11:06) The business model: mass-production ADAS, robotaxi, and air-to-road redundancy
(13:40) Software-only, chip-agnostic, vision-first, and what that trade-off costs
(16:12) The investor list that doubles as the customer list
(18:40) The Munich robotaxi program with Uber and NVIDIA, and what OEM-agnostic means
(24:05) The VinFast deal for Southeast Asia
(29:09) Why start in Munich, one of Europe’s hardest cities
(30:51) Is Europe really behind the US and China?
(31:36) The regulatory path from pilot to paid service, and the 50,000-hour intervention target
(33:28) A 5-year European robotaxi outlook
(34:34) The eyes-off / Level 3 debate and why planned handover matters

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3lNRFl3TURJNE9ESXNJbWxoZENJNk1UYzRNelE1TWpNNE15d2laWGh3SWpveE9ERTFNREk0TXpnekxDSnBjM01pT2lKd2RXSXRNelU1TkRZNU5DSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuNlN1ZzRYUGFNdnRLNUVEOFh0WDBQdXlxMUJWcXZHeV9rd2RBSGkzSDhQbyIsInAiOjIwNjAwMjg4MiwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzgzNDkyMzgzLCJleHAiOjIwOTkwNjgzODMsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.1ZhuZxbHVqBB2ce6wipYplckzfgLXMfOUsKBGDB1-3o?

---

## Links found in email

- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL3N1YnNjcmliZT91dG1fc291cmNlPWVtYWlsJnV0bV9jYW1wYWlnbj1lbWFpbC1zdWJzY3JpYmUmcj0xeWdmNyZuZXh0PWh0dHBzJTNBJTJGJTJGYXZtYXJrZXRzdHJhdGVnaXN0LnN1YnN0YWNrLmNvbSUyRnAlMkZhZ2VudGljLWFpLWZvci1yb2JvdGF4aXMtaW5zaWRlLWF1dG9icmFpbnMiLCJwIjoyMDYwMDI4ODIsInMiOjM1OTQ2OTQsImYiOnRydWUsInUiOjMyODcyMDMsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoyMDk5MDY4MzgzLCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.mzT773qA69VvwMsMXom8p4oU1bFKEPjaWyIrQJTdj1k?
- https://substack.com/app-link/post?publication_id=3594694&post_id=206002882&utm_source=podcast-email&play_audio=true&r=1ygf7&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoxNzg2MDg0MzgzLCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.5IOzHh6lhKRr9BYGSYn6iwZ2lwwnw802xwvWbobwMxQ&utm_content=watch_now_gif
- https://substack.com/app-link/post?publication_id=3594694&post_id=206002882&utm_source=podcast-email&play_audio=true&r=1ygf7&utm_campaign=email-play-on-substack&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoxNzg2MDg0MzgzLCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.5IOzHh6lhKRr9BYGSYn6iwZ2lwwnw802xwvWbobwMxQ&utm_content=watch_now_button
- https://substack.com/app-link/post?publication_id=3594694&post_id=206002882&utm_source=post-email-title&utm_campaign=email-post-title&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoxNzg2MDg0MzgzLCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.5IOzHh6lhKRr9BYGSYn6iwZ2lwwnw802xwvWbobwMxQ
- https://substack.com/@senhormarques
- https://substack.com/app-link/post?publication_id=3594694&post_id=206002882&utm_source=substack&isFreemail=true&submitLike=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsInJlYWN0aW9uIjoi4p2kIiwiaWF0IjoxNzgzNDkyMzgzLCJleHAiOjE3ODYwODQzODMsImlzcyI6InB1Yi0zNTk0Njk0Iiwic3ViIjoicmVhY3Rpb24ifQ.tkNOUoAbh2bPyirpw_zysksLvvAQNJdbixN5bF8Dw2g&utm_medium=email&utm_campaign=email-reaction&r=1ygf7
- https://substack.com/app-link/post?publication_id=3594694&post_id=206002882&utm_source=substack&utm_medium=email&isFreemail=true&comments=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoxNzg2MDg0MzgzLCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.5IOzHh6lhKRr9BYGSYn6iwZ2lwwnw802xwvWbobwMxQ&r=1ygf7&utm_campaign=email-half-magic-comments&action=post-comment&utm_source=substack&utm_medium=email
- https://substack.com/app-link/post?publication_id=3594694&post_id=206002882&utm_source=substack&utm_medium=email&utm_content=share&utm_campaign=email-share&action=share&triggerShare=true&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoxNzg2MDg0MzgzLCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.5IOzHh6lhKRr9BYGSYn6iwZ2lwwnw802xwvWbobwMxQ
- https://open.substack.com/pub/avmarketstrategist/p/agentic-ai-for-robotaxis-inside-autobrains?utm_source=substack&utm_medium=email&utm_campaign=email-restack-comment&action=restack-comment&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMDYwMDI4ODIsImlhdCI6MTc4MzQ5MjM4MywiZXhwIjoxNzg2MDg0MzgzLCJpc3MiOiJwdWItMzU5NDY5NCIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.5IOzHh6lhKRr9BYGSYn6iwZ2lwwnw802xwvWbobwMxQ&utm_source=substack&utm_medium=email
- https://open.substack.com/pub/avmarketstrategist/p/agentic-ai-for-robotaxis-inside-autobrains?utm_source=email&redirect=app-store&utm_campaign=email-read-in-app
- https://substack.com/redirect/f79c6d31-84b2-4d2e-97af-6975cd046a40?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/94dc8e25-92b4-44f2-bcd1-5c4c3e665272?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/45ce7ad9-f576-43db-8f48-a6eec25e293e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/bdebaab2-c877-4948-bade-53efcda9e8fb?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL3N1YnNjcmliZT91dG1fc291cmNlPXBvc3QmdXRtX2NhbXBhaWduPWVtYWlsLWNoZWNrb3V0Jm5leHQ9aHR0cHMlM0ElMkYlMkZhdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tJTJGcCUyRmFnZW50aWMtYWktZm9yLXJvYm90YXhpcy1pbnNpZGUtYXV0b2JyYWlucyZyPTF5Z2Y3JnRva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSnBZWFFpT2pFM09ETTBPVEl6T0RNc0ltVjRjQ0k2TVRjNE5qQTRORE00TXl3aWFYTnpJam9pY0hWaUxUTTFPVFEyT1RRaUxDSnpkV0lpT2lKamFHVmphMjkxZENKOS5tTHpDT0RLamZ0V2hmY19wQVVjZEZNTTJ5Q2lLZXRWa3g3RmRVaEQycHlzIiwicCI6MjA2MDAyODgyLCJzIjozNTk0Njk0LCJmIjp0cnVlLCJ1IjozMjg3MjAzLCJpYXQiOjE3ODM0OTIzODMsImV4cCI6MjA5OTA2ODM4MywiaXNzIjoicHViLTAiLCJzdWIiOiJsaW5rLXJlZGlyZWN0In0.rgt6I3c_NKbKUtBb-Pxoa000aoayrYnhmQ-a6iQF71E?&utm_source=substack&utm_medium=email&utm_content=postcta
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9hdm1hcmtldHN0cmF0ZWdpc3Quc3Vic3RhY2suY29tL2FjdGlvbi9kaXNhYmxlX2VtYWlsP3Rva2VuPWV5SjFjMlZ5WDJsa0lqb3pNamczTWpBekxDSndiM04wWDJsa0lqb3lNRFl3TURJNE9ESXNJbWxoZENJNk1UYzRNelE1TWpNNE15d2laWGh3SWpveE9ERTFNREk0TXpnekxDSnBjM01pT2lKd2RXSXRNelU1TkRZNU5DSXNJbk4xWWlJNkltUnBjMkZpYkdWZlpXMWhhV3dpZlEuNlN1ZzRYUGFNdnRLNUVEOFh0WDBQdXlxMUJWcXZHeV9rd2RBSGkzSDhQbyIsInAiOjIwNjAwMjg4MiwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzgzNDkyMzgzLCJleHAiOjIwOTkwNjgzODMsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.1ZhuZxbHVqBB2ce6wipYplckzfgLXMfOUsKBGDB1-3o?
- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly9zdWJzdGFjay5jb20vc2lnbnVwP3V0bV9zb3VyY2U9c3Vic3RhY2smdXRtX21lZGl1bT1lbWFpbCZ1dG1fY29udGVudD1mb290ZXImdXRtX2NhbXBhaWduPWF1dG9maWxsZWQtZm9vdGVyJmZyZWVTaWdudXBFbWFpbD1jbWF0ZWN1bkBnbWFpbC5jb20mcj0xeWdmNyIsInAiOjIwNjAwMjg4MiwicyI6MzU5NDY5NCwiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzgzNDkyMzgzLCJleHAiOjIwOTkwNjgzODMsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.seq56ey6xlKecBupb7CSbkwR2UXlgwFyXO-gJLmsIbE?
