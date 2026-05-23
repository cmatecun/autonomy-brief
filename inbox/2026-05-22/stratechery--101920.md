---
source: stratechery
from: Ben Thompson <email@stratechery.com>
subject: "The Data Center Veto (This Week in Stratechery)"
date: 2026-05-22T17:19:20.000Z
extracted: 2026-05-23T13:08:18.891Z
---

# The Data Center Veto (This Week in Stratechery)

**From:** Ben Thompson <email@stratechery.com>  
**Date:** 2026-05-22T17:19:20.000Z

---

The best Stratechery content from the week of May 18, 2026, including data center discontent, agent economics, and slime mold.

View in browser ( https://stratechery.com/2026/the-data-center-veto/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3RoZS1kYXRhLWNlbnRlci12ZXRvLyJdfSwiZXhwIjoxNzgyMDYyMzYwLCJpYXQiOjE3Nzk0NzAzNjAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.SUbY1UNgWBGyCVN00Qpz0lPZ8JScBX-5A-puD39GHcT3EYRPkZvk9sN_e0rNlDNe-xgxCTlauP4HS_s3c6huFC7VECBlRmBjhDAnuo-5cqblKYtcsrt_U-KUph2z6ZvpWoIML89A0NPwWJCYN8oF-RlQ6Cmr0DEp06C1H3ldjZftXn0Ky7MtPLad0QwEuFtRU-ZXuMfXBlSXc6uNe0ATB3uDsIV7OjmkHfK2DhWJZ3zTBSaXKpGuTm-XuSNm1oOvPyFe8mknhMqXm2RsPuHb763tm_etTOo6YQ_DCZqX1JrCRwIHnpO-rJKsCpa5GiWA_LS6T4MKPtqFKPig-ksucw )

( https://stratechery.com )

*****************************
2026.21: The Data Center Veto
*****************************

( https://stratechery.com/2026/the-data-center-veto/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3RoZS1kYXRhLWNlbnRlci12ZXRvLyJdfSwiZXhwIjoxNzgyMDYyMzYwLCJpYXQiOjE3Nzk0NzAzNjAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.SUbY1UNgWBGyCVN00Qpz0lPZ8JScBX-5A-puD39GHcT3EYRPkZvk9sN_e0rNlDNe-xgxCTlauP4HS_s3c6huFC7VECBlRmBjhDAnuo-5cqblKYtcsrt_U-KUph2z6ZvpWoIML89A0NPwWJCYN8oF-RlQ6Cmr0DEp06C1H3ldjZftXn0Ky7MtPLad0QwEuFtRU-ZXuMfXBlSXc6uNe0ATB3uDsIV7OjmkHfK2DhWJZ3zTBSaXKpGuTm-XuSNm1oOvPyFe8mknhMqXm2RsPuHb763tm_etTOo6YQ_DCZqX1JrCRwIHnpO-rJKsCpa5GiWA_LS6T4MKPtqFKPig-ksucw ) Friday, May 22, 2026

(Lexi Critchett/Bloomberg via Getty Images)

Welcome back to This Week in Stratechery!

As a reminder, each week, every Friday, we’re sending out this overview of content in the Stratechery bundle; highlighted links are free for everyone. Additionally, you have complete control over what we send to you. If you don’t want to receive This Week in Stratechery emails (there is no podcast), please uncheck the box in your delivery settings ( https://stratechery.passport.online/member/account/delivery ).

On that note, here were a few of our favorites this week.

* *Data Center Discontent.* The impact of AI is, at least for now, being felt digitally: that is where AI is useful, and the more digital a job, the more it is threatened by LLMs. AI, however, depends on data centers in the physical world, and building data centers needs permission. This gives normal people the sort of veto power over AI they didn’t have in the face of globalization; I make the case in Monday’s Update ( https://stratechery.com/2026/data-center-discontent-understanding-the-opposition-fixing-the-problem/ ) and on Sharp Tech ( https://sharptech.fm/member/episode/much-ado-about-data-centers-what-tech-gets-wrong-about-its-critics-q-a-on-space-x-chinese-ai-elon-musk ) that understanding this dynamic is more important that trying to correct misinformation, which is a symptom, not a cause, of data center opposition. — Ben Thompson

* *Agent Economics.* What will the internet look like when ad-supported models are rendered obsolete by shifting user behavior and the rise of agentic web traffic? Ben considered this question last summer with The Agentic Web and Original Sin ( https://stratechery.com/2025/the-agentic-web-and-original-sin/ ) , and I was surprised to learn this week that Parag Agarwal, former CEO of Twitter, is now focused on devising solutions for exactly this reality. This week’s Stratechery Interview with Agarwal ( https://stratechery.com/2026/an-interview-with-parallel-founder-parag-agarwal-about-valuing-content-on-the-agentic-web/ ) dives deep into the economics of content on the Internet, why ads make sense for humans, and why incentivizing content for agents will be different, and how Agarwal and Parallel are trying to solve them. I learned a ton from this interview, and I bet you will, too — and don’t worry, we did get a few bonus questions on the ride at Twitter. — Andrew Sharp

* *Never Count Out the Slime Mold.* Wednesday’s Daily Update on Google I/O reminded me of an iconic leaked memo ( https://www.inc.com/minda-zetlin/in-just-2-very-unpleasant-words-a-former-google-exec-pinpointed-companys-biggest-problem.html ) about the ungovernable and poorly coordinated mold in Mountain View, as the company seems to be throwing 10 different types of AI spaghetti at the wall to see what sticks. Then again, Google is now a nearly $5 trillion company and its transformer architecture supercharged the AI era. That second part is why, when Ben highlights a DeepMind approach to building AGI ( https://stratechery.com/2026/google-i-o-world-models-i-o-spaghetti/ ) that’s distinct from the approaches at OpenAI and Anthropic, I’m compelled to both pay attention, and remember: for all of Google’s faults and misses, they do in fact have plenty of historic hits. — AS

Stratechery Articles and Updates
--------------------------------

* Data Center Discontent, Understanding the Opposition, Fixing the Problem ( https://stratechery.com/2026/data-center-discontent-understanding-the-opposition-fixing-the-problem/ ) — There are understandable reasons for people to oppose data centers; the only solution that will work is simply paying them off.
* Google I/O, World Models, I/O Spaghetti ( https://stratechery.com/2026/google-i-o-world-models-i-o-spaghetti/ ) — Google I/O put AI everywhere, for better and for worse. Meanwhile, is DeepMind aligned with Google’s business objectives?
* An Interview with Parallel Founder Parag Agarwal About Valuing Content on the Agentic Web ( https://stratechery.com/2026/an-interview-with-parallel-founder-parag-agarwal-about-valuing-content-on-the-agentic-web/ ) — An interview with Parallel founder Parag Agarwal about valuing content and incentivizing its creation in a world of agents (plus questions about Twitter).

Dithering with Ben Thompson and Daring Fireball’s John Gruber
-------------------------------------------------------------

* Data Center Unpopularity ( https://dithering.passport.online/member/episode/data-center-unpopularity )
* Google Being Google ( https://dithering.passport.online/member/episode/google-being-google )

Asianometry with Jon Yu
-----------------------

* The Little Vertical Laser That Everyone Uses ( https://asianometry.passport.online/member/episode/the-little-vertical-laser-that-everyone-uses )
* Intel’s 30 Years in Costa Rica ( https://asianometry.passport.online/member/episode/intels-30-years-in-costa-rica )

Sharp China with Andrew Sharp and Sinocism’s Bill Bishop
--------------------------------------------------------

* Constructing US-China Stability; Trump’s Taiwan Comments and More Summit Takeaways; Putin in China ( https://sharpchina.fm/member/episode/constructing-us-china-stability-trumps-taiwan-comments-and-more-summit-takeaways-putin-in-china )

Greatest of All Talk
--------------------

* Wemby, Harper and an Instant Classic from the Spurs in Game 1 vs. OKC ( https://goat.passport.online/member/episode/wemby-harper-and-an-instant-classic-from-the-spurs-in-game-1-vs-okc )
* A Note on the Future of GOAT and An Emergency Top Five ( https://goat.passport.online/member/episode/a-note-on-the-future-of-goat-and-an-emergency-top-five )

Sharp Tech with Andrew Sharp and Ben Thompson
---------------------------------------------

* Much Ado About Data Centers, What Tech Gets Wrong About Its Critics, Q&A on SpaceX, Chinese AI, Elon Musk ( https://sharptech.fm/member/episode/much-ado-about-data-centers-what-tech-gets-wrong-about-its-critics-q-a-on-space-x-chinese-ai-elon-musk )

This week’s Stratechery video is on The Inference Shift ( https://stratechery.com/2026/the-inference-shift/ ).

The Inference Shift | Stratechery by Ben Thompson ( https://www.youtube.com/watch?v=xyLr6XcktTo )

Subscription Information

You are receiving this email because you are subscribed to Stratechery ( https://stratechery.com ).

Click here ( https://stratechery.passport.online/member/login?email= ) to view your account and manage your subscriptions.
Click here ( https://stratechery.passport.online/member/unsubscribe?unsub=https%3A%2F%2Fstratechery.passport.online%2Fapi%2F1.0.0%2Fusers%2FCLKjCtDhPT8bsKnDAgUcu%2FchannelOptOut%3Faccess_token%3DeyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZS9hcGkvMS4wLjAvdXNlcnMvQ0xLakN0RGhQVDhic0tuREFnVWN1L2NoYW5uZWxPcHRPdXQ_Y2hhbm5lbD1lbWFpbFx1MDAyNnJlZGlyZWN0X3VyaT1odHRwcyUzQSUyRiUyRnN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSUyRm1lbWJlciUyRnVuc3Vic2NyaWJlIl19LCJleHAiOjE3ODIwNjIzNjAsImlhdCI6MTc3OTQ3MDM2MCwiaXNzIjoiaHR0cHM6Ly9hcHAucGFzc3BvcnQub25saW5lL29hdXRoIiwic2NvcGUiOiJtZW1iZXI6d3JpdGUiLCJzdWIiOiIwMTk1MTZmMS1hMzQ2LTc2MTQtOWU5Ni1iNjNiZDExZmU4NTYiLCJ1c2UiOiJhY2Nlc3MifQ.siylL_uk_otv_FbBshteu0il8o7go15MPPnUXlnAllbnCl4vZuTcq76JZPGswZJkhmLCKGVb7WsYjkgcKc7BTHztyHFk086kD4cgLGXefhkBTSS1JLLc29XQan_QahGits9krG7Tq9za3JGXOcR-vKnZlxvvijR7BEyN9YRyVFJGkoTx2EJGZCk0sdXPgj_-GEQUzrSdXN3okhBkj3Hcf89Wda8IcDw61Jh2A0UePDNzeEvcjHxvwECAsWdiVWDWuXscw4mqjKAMHQkGfnm8WmJieOtj3X9zkDp_X884BynEG6GYn3C1_De_9ES8uMoWM0CYXoAhpAbT28SaGI7rvw%26channel%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstratechery.passport.online%252Fmember%252Funsubscribe ) to unsubscribe.

© 2026 Stratechery LLC ( https://www.stratechery.com ) , 2093 Philadelphia Pike #9930, Claymont DE 19703

---

## Links found in email

- https://stratechery.com/2026/the-data-center-veto/?access_token=eyJhbGciOiJSUzI1NiIsImtpZCI6InN0cmF0ZWNoZXJ5LnBhc3Nwb3J0Lm9ubGluZSIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJzdHJhdGVjaGVyeS5wYXNzcG9ydC5vbmxpbmUiLCJhenAiOiJIS0xjUzREd1Nod1AyWURLYmZQV00xIiwiZW50Ijp7InVyaSI6WyJodHRwczovL3N0cmF0ZWNoZXJ5LmNvbS8yMDI2L3RoZS1kYXRhLWNlbnRlci12ZXRvLyJdfSwiZXhwIjoxNzgyMDYyMzYwLCJpYXQiOjE3Nzk0NzAzNjAsImlzcyI6Imh0dHBzOi8vYXBwLnBhc3Nwb3J0Lm9ubGluZS9vYXV0aCIsInNjb3BlIjoiZmVlZDpyZWFkIGFydGljbGU6cmVhZCBhc3NldDpyZWFkIGNhdGVnb3J5OnJlYWQgZW50aXRsZW1lbnRzIiwic3ViIjoiMDE5NTE2ZjEtYTM0Ni03NjE0LTllOTYtYjYzYmQxMWZlODU2IiwidXNlIjoiYWNjZXNzIn0.SUbY1UNgWBGyCVN00Qpz0lPZ8JScBX-5A-puD39GHcT3EYRPkZvk9sN_e0rNlDNe-xgxCTlauP4HS_s3c6huFC7VECBlRmBjhDAnuo-5cqblKYtcsrt_U-KUph2z6ZvpWoIML89A0NPwWJCYN8oF-RlQ6Cmr0DEp06C1H3ldjZftXn0Ky7MtPLad0QwEuFtRU-ZXuMfXBlSXc6uNe0ATB3uDsIV7OjmkHfK2DhWJZ3zTBSaXKpGuTm-XuSNm1oOvPyFe8mknhMqXm2RsPuHb763tm_etTOo6YQ_DCZqX1JrCRwIHnpO-rJKsCpa5GiWA_LS6T4MKPtqFKPig-ksucw
- https://stratechery.com
- https://stratechery.passport.online/member/account/delivery
- https://stratechery.com/2026/data-center-discontent-understanding-the-opposition-fixing-the-problem/
- https://sharptech.fm/member/episode/much-ado-about-data-centers-what-tech-gets-wrong-about-its-critics-q-a-on-space-x-chinese-ai-elon-musk
- https://stratechery.com/2025/the-agentic-web-and-original-sin/
- https://stratechery.com/2026/an-interview-with-parallel-founder-parag-agarwal-about-valuing-content-on-the-agentic-web/
- https://www.inc.com/minda-zetlin/in-just-2-very-unpleasant-words-a-former-google-exec-pinpointed-companys-biggest-problem.html
- https://stratechery.com/2026/google-i-o-world-models-i-o-spaghetti/
- https://dithering.passport.online/member/episode/data-center-unpopularity
- https://dithering.passport.online/member/episode/google-being-google
- https://asianometry.passport.online/member/episode/the-little-vertical-laser-that-everyone-uses
- https://asianometry.passport.online/member/episode/intels-30-years-in-costa-rica
- https://sharpchina.fm/member/episode/constructing-us-china-stability-trumps-taiwan-comments-and-more-summit-takeaways-putin-in-china
- https://goat.passport.online/member/episode/wemby-harper-and-an-instant-classic-from-the-spurs-in-game-1-vs-okc
- https://goat.passport.online/member/episode/a-note-on-the-future-of-goat-and-an-emergency-top-five
- https://stratechery.com/2026/the-inference-shift/
- https://www.youtube.com/watch?v=xyLr6XcktTo
- https://stratechery.passport.online/member/login?email=
- https://www.stratechery.com
