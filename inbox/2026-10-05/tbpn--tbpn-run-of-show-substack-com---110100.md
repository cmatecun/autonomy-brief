---
source: tbpn--tbpn-run-of-show-substack-com-
from: TBPN <tbpn+run-of-show@substack.com>
subject: "Who Wants to Play AI-Generated Video Game Mods?"
date: 2026-10-05T18:01:00.000Z
extracted: 2026-10-06T13:08:16.569Z
---

# Who Wants to Play AI-Generated Video Game Mods?

**From:** TBPN <tbpn+run-of-show@substack.com>  
**Date:** 2026-10-05T18:01:00.000Z

---

View this post on the web at https://tbpn.substack.com/p/who-wants-to-play-ai-generated-video

Happy Monday.
We’re live on YouTube [ https://substack.com/redirect/1011b895-99c9-4885-8de5-246d2ce5f172?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] and 𝕏 [ https://substack.com/redirect/53fe6115-dccf-4d73-a17a-9e1a5537975a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ].
The current thing in tech and business is The Tarbell Center plans to invest $10M into AI journalism by the end of 2027. [ https://substack.com/redirect/1ff0ebf9-973d-4ffd-97e9-98f8d7e0ad65?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Today’s Lineup
Ridge Co-Founder & CEO Sean Frank [ https://substack.com/redirect/5771bcb9-d0e7-45bc-93be-168535cef753?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 12:00 PM
Valon Technologies Co-Founder & President Linda Du [ https://substack.com/redirect/4fc0a1cc-7cc0-4bd9-b39d-674299e01cae?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 12:30 PM
Neo CEO Ali Partovi [ https://substack.com/redirect/04fe0e06-9c6b-4462-afa8-7739d32fa683?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 12:40 PM
Astranis Co-Founder & CEO John Gedmark [ https://substack.com/redirect/9138cc96-d2a4-4704-b970-08e40b53a7a6?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 12:50 PM
Underdog Founder Sigil Wen [ https://substack.com/redirect/dab8640f-e845-4aad-9cb9-6c60ff62c0aa?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 1:00 PM
Halluminate Co-Founder & CEO Jerry Wu [ https://substack.com/redirect/7b3411a8-e3cc-4b52-9147-73b4d1738f4b?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 1:10 PM
Blueprint Founder Bryan Johnson [ https://substack.com/redirect/d42a7081-a3c7-49b9-be48-98694d4257c4?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ] at 1:20 PM
Run of Show
Who Wants to Play AI-Generated Video Game Mods?
It’s not Kotaku. They just reviewed one of the most viral mashups and concluded: I Don’t Want To Play Your AI-Generated Mod That Puts Skate 3 Inside Of Modern Warfare 2 Inside Of Minecraft [ https://substack.com/redirect/d4356c81-cf2f-4fd8-8ff7-f3ffec5116bb?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Here’s a rundown of the most viral AI mods so you can decide for yourself which one looks worth playing.
It’s a reasonable conclusion, we just entered the slop era of video game mods, and it’s going to be messy for a while. These work as short demos, and are perfectly designed to go mega viral in 30 second clips, they aren’t ready to be played for hundreds of hours. But will they eventually get there?
First, how they work. It’s easy to say they are “AI generated” but there are actually a ton of different approaches to get these working. One tool involves using an open source reverse-engineering suite developed by the NSA (and hosted on their GitHub [ https://substack.com/redirect/c0c5541a-2350-4e33-ab53-20e612b9348d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]). There are a bunch of other tools that can help make these mods though.
Some just modify the game using the age old technique of just swapping assets. Changing character models, textures, animations, weapon meshes, or sound effects goes a long way to creating the experience of merging two games, this is nothing new though. For Mario in Elden Ring, the mod borrows an actual subsystem called libsm64, which is derived from a Super Mario 64 decompilation, so the “real” code from Mario is running inside of Elden Ring. Put simply: Elden Ring supplies the environment, then Mario’s library calculates movement, finally the adapter reconciles Mario with Elden Ring.
There’s a more interesting technique spreading now though that I haven’t seen before. Running two games simultaneously. ArkWeb puts Spider-Man in Arkham Knight (two pieces of intellectual property that shall never cross paths under normal circumstances). The engineering is really cool.
First, the mod grabs collision information from Gotham and constructs corresponding collision geometry inside Spider-Man’s physics world. Arkham uses PhysX structures while Spider-Man uses Havok, so the mod translates between these two systems.
Second, the games also use different coordinate conventions, different axes, and different units. The adapter translates these and keeps both games accepting controller inputs, so both are running simultaneously.
Lastly, they need to merge the graphics, and the games use different graphics systems, Spider-Man’s is on Direct3D 12 while Arkham is on Direct3D 11. There are a bunch of other integration points that get weird. Even though you’re playing as Spider-Man, the mod uses Arkham’s Freeflow combat.
The end result looks great, and feels almost ready to serve as a reason to dive back into an older game, but this is one of those classic “Ninety-Ninety Rule” situations. Generally attributed to Tom Cargill of Bell Labs: “The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent accounts for the other 90 percent.”
All these mashups look great in short form videos, but break down when you realize what actually makes a game fun is the final polish on the progression system, dealing with the detailed tradeoffs in learning systems and using tools available to the character. These are memes, it’s the Harry Potter Balenciaga moment for video games. The conclusion from demonflyingfox’s viral video (released March 15, 2023) wasn’t that we’d be seeing Daniel Radcliffe at a Balenciaga runway show anytime soon, or even that we’d be watching fully AI generated movies imminently. It was still an important tech demo, and I do think there will be a breakout video game mod that sees heavy assistance from AI in the near future. The key will still be crafting a really innovative gameplay loop and delivering something genuinely fresh in a hyper crowded market. Exciting that so many would-be indie developers can get started so much faster now.
Clip Spotlight: U.S. Chief Design Officer  Joe Gebbia shares some pretty absurd numbers about how Americans currently deal with the federal government:
- 29,000 government websites
- 10 billion hours spent navigating federal paperwork
- 87 clicks to replace a Social Security card
Headlines
Semafor: Exclusive / AI nonprofit will spend $10 million on journalism [ https://substack.com/redirect/1ff0ebf9-973d-4ffd-97e9-98f8d7e0ad65?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Vanity Fair: Sam Altman Sees the Future. Are We In It? (Part 1 of 2) [ https://substack.com/redirect/05e12465-8324-4d72-a441-dd55d36ee3ce?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: New AI Czar Unveils Goals, Members of White House Task Force [ https://substack.com/redirect/742967d9-ffb6-4bb2-80f8-eede02aae768?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Vanity Fair: New York, New York: Kathryn and James Murdoch Discuss Their Big Media Bet [ https://substack.com/redirect/adf08afd-8172-464f-9bb9-71fed41d2864?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
CNBC: Tesla’s Cybercab had a rocky first month in Austin. Now comes the hard part: expanding [ https://substack.com/redirect/0915c0c4-1e68-40be-9f60-6837937ed96a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
FT: Nvidia’s $20bn licensing deal with Groq faces lawsuit from jilted engineers [ https://substack.com/redirect/bffc2dc7-75d5-4906-9270-03585cd5de9e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Bloomberg: Apple’s John Ternus Has Found a New Design Chief: Himself [ https://substack.com/redirect/d5ccc43b-bced-4bec-b532-f8148026967a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Bloomberg: Apple iPhone 18 Pro Max AT&T Glitch Requires Device Replacements [ https://substack.com/redirect/b904982f-200f-41c0-a2e1-645d3be2cf4a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Bloomberg: Apple to Tighten Mac Data Controls in Guard Against AI Agents [ https://substack.com/redirect/7156a437-7d67-4fe6-8321-167856fa4a68?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Oracle Announces $10 Million Partnership with the Nashville Symphony [ https://substack.com/redirect/f85c1516-4b3e-466d-9d76-15bd01a15049?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
FT: Sony Music steps up fight against streaming fraud [ https://substack.com/redirect/f4eb8ef5-7c48-4f9e-92c4-d4d04e1b1064?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Mike Isaac joins The Atlantic [ https://substack.com/redirect/45454d7d-3d4f-4563-8171-1e55f73eeded?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
The Hollywood Reporter: ‘Artificial’ Took on a Big Tech Giant. Hollywood Wasn’t Ready [ https://substack.com/redirect/0487b55a-04c6-4b64-9a88-1013555e85de?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Deadline: Tom Cruise’s ‘Digger’ To Lose Around $150M: Deconstructing The Disaster [ https://substack.com/redirect/cd321ccd-b43c-4800-b0bb-8b6e0e21db14?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: My Week in a $15,000 Microcar: Joy, Guilt and 25-MPH Road Rage [ https://substack.com/redirect/839fb54e-5238-40b6-9973-b987f7d1f509?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
WSJ: The Mighty American Consumer Is Crashing Through Inflation and Driving Growth [ https://substack.com/redirect/51d72dee-3dc0-44a0-b24a-20a0f82eab7f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Paramount: David Ellison and Ynon Kreiz Announce their CEO Leadership Team for Skydance Following Anticipated Close of Warner Bros. Discovery Acquisition [ https://substack.com/redirect/a2bd5233-38fc-422b-baeb-bb0e9fe19674?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ]
Posts of the Day
Special thanks to our sponsors: Ramp [ https://substack.com/redirect/5f7c474e-2e85-482d-9a97-b7114d551086?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], Shopify [ https://substack.com/redirect/ccfb2a59-b5ad-40c6-85f3-362a72323a3f?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], CrowdStrike [ https://substack.com/redirect/4d72e0b3-5aec-4440-979e-bff1a0e59d2a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], MongoDB [ https://substack.com/redirect/cc0142cc-dc89-48dd-b283-3e4e2bdb8436?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], NYSE [ https://substack.com/redirect/a68c34de-c0d1-49d0-b1ca-e62a469065bd?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], Codex [ https://substack.com/redirect/9942419d-1d2a-44e7-9ae7-f8e3fda16e04?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], Public [ https://substack.com/redirect/0f46911b-a505-41a8-b6ee-e500c88920b5?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], Console [ https://substack.com/redirect/91918031-55cb-4d61-8a81-11e0b744662c?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], Railway [ https://substack.com/redirect/3962a406-fc29-4ad0-9689-52413fdb70ea?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], Figma [ https://substack.com/redirect/225ac0ee-70be-4ec2-8e19-f80f6a9f0cfe?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ], and Cisco [ https://substack.com/redirect/49b45141-7131-4e42-b783-786463437c97?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw ].

Unsubscribe https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90YnBuLnN1YnN0YWNrLmNvbS9hY3Rpb24vZGlzYWJsZV9lbWFpbD90b2tlbj1leUoxYzJWeVgybGtJam96TWpnM01qQXpMQ0p3YjNOMFgybGtJam95TVRnNU5UWTNOVFlzSW1saGRDSTZNVGM1TVRJeU16TXhNQ3dpWlhod0lqb3hPREl5TnpVNU16RXdMQ0pwYzNNaU9pSndkV0l0TlRZNU5USXhOeUlzSW5OMVlpSTZJbVJwYzJGaWJHVmZaVzFoYVd3aWZRLlY4VzdkR3FmWEdKczAzaW83RURxMVQ0YmYwaC1heW51dW83SF9qcHdzMjgiLCJwIjoyMTg5NTY3NTYsInMiOjU2OTUyMTcsImYiOnRydWUsInUiOjMyODcyMDMsImlhdCI6MTc5MTIyMzMxMCwiZXhwIjoyMTA2Nzk5MzEwLCJpc3MiOiJwdWItMCIsInN1YiI6ImxpbmstcmVkaXJlY3QifQ.zYZ1C55sLilxBp2wU4s8BXM2mVq6BgSM9IradRQL2jk?

---

## Links found in email

- https://substack.com/redirect/2/eyJlIjoiaHR0cHM6Ly90YnBuLnN1YnN0YWNrLmNvbS9zdWJzY3JpYmU_dXRtX3NvdXJjZT1lbWFpbCZ1dG1fY2FtcGFpZ249ZW1haWwtc3Vic2NyaWJlJnI9MXlnZjcmbmV4dD1odHRwcyUzQSUyRiUyRnRicG4uc3Vic3RhY2suY29tJTJGcCUyRndoby13YW50cy10by1wbGF5LWFpLWdlbmVyYXRlZC12aWRlbyIsInAiOjIxODk1Njc1NiwicyI6NTY5NTIxNywiZiI6dHJ1ZSwidSI6MzI4NzIwMywiaWF0IjoxNzkxMjIzMzEwLCJleHAiOjIxMDY3OTkzMTAsImlzcyI6InB1Yi0wIiwic3ViIjoibGluay1yZWRpcmVjdCJ9.KOM6WcwC3qDz8NjZPs64Z-CetYd2745uf0YZ0ktPm5k?
- https://substack.com/app-link/post?publication_id=5695217&post_id=218956756&utm_source=post-email-title&utm_campaign=email-post-title&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMTg5NTY3NTYsImlhdCI6MTc5MTIyMzMxMCwiZXhwIjoxNzkzODE1MzEwLCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.AKdTL2Pf3X6iVHX9xY8Nkoa1uslLxms9r6hxLf3kwlg
- https://substack.com/@jacksonfordyce
- https://substack.com/app-link/post?publication_id=5695217&post_id=218956756&utm_source=substack&isFreemail=true&submitLike=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMTg5NTY3NTYsInJlYWN0aW9uIjoi4p2kIiwiaWF0IjoxNzkxMjIzMzEwLCJleHAiOjE3OTM4MTUzMTAsImlzcyI6InB1Yi01Njk1MjE3Iiwic3ViIjoicmVhY3Rpb24ifQ.JUc6JOicYFEH3BMdgP8UGOYl19tk7Z5pMdE7WCmyTQA&utm_medium=email&utm_campaign=email-reaction&r=1ygf7
- https://substack.com/app-link/post?publication_id=5695217&post_id=218956756&utm_source=substack&utm_medium=email&isFreemail=true&comments=true&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMTg5NTY3NTYsImlhdCI6MTc5MTIyMzMxMCwiZXhwIjoxNzkzODE1MzEwLCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.AKdTL2Pf3X6iVHX9xY8Nkoa1uslLxms9r6hxLf3kwlg&r=1ygf7&utm_campaign=email-half-magic-comments&action=post-comment&utm_source=substack&utm_medium=email
- https://substack.com/app-link/post?publication_id=5695217&post_id=218956756&utm_source=substack&utm_medium=email&utm_content=share&utm_campaign=email-share&action=share&triggerShare=true&isFreemail=true&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMTg5NTY3NTYsImlhdCI6MTc5MTIyMzMxMCwiZXhwIjoxNzkzODE1MzEwLCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.AKdTL2Pf3X6iVHX9xY8Nkoa1uslLxms9r6hxLf3kwlg
- https://open.substack.com/pub/tbpn/p/who-wants-to-play-ai-generated-video?utm_source=substack&utm_medium=email&utm_campaign=email-restack-comment&action=restack-comment&r=1ygf7&token=eyJ1c2VyX2lkIjozMjg3MjAzLCJwb3N0X2lkIjoyMTg5NTY3NTYsImlhdCI6MTc5MTIyMzMxMCwiZXhwIjoxNzkzODE1MzEwLCJpc3MiOiJwdWItNTY5NTIxNyIsInN1YiI6InBvc3QtcmVhY3Rpb24ifQ.AKdTL2Pf3X6iVHX9xY8Nkoa1uslLxms9r6hxLf3kwlg&utm_source=substack&utm_medium=email
- https://open.substack.com/pub/tbpn/p/who-wants-to-play-ai-generated-video?utm_source=email&redirect=app-store-no-desktop&inbox=true&utm_campaign=email-read-in-app
- https://substack.com/redirect/1011b895-99c9-4885-8de5-246d2ce5f172?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/53fe6115-dccf-4d73-a17a-9e1a5537975a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/1ff0ebf9-973d-4ffd-97e9-98f8d7e0ad65?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/5771bcb9-d0e7-45bc-93be-168535cef753?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/4fc0a1cc-7cc0-4bd9-b39d-674299e01cae?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/04fe0e06-9c6b-4462-afa8-7739d32fa683?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/9138cc96-d2a4-4704-b970-08e40b53a7a6?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/dab8640f-e845-4aad-9cb9-6c60ff62c0aa?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/7b3411a8-e3cc-4b52-9147-73b4d1738f4b?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/d42a7081-a3c7-49b9-be48-98694d4257c4?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/2fbc508a-b75b-4b45-9a6d-66ef76641385?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/d4356c81-cf2f-4fd8-8ff7-f3ffec5116bb?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/dafecb3b-ce4b-4c64-ab7c-c1ed0b57393e?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/05ccd464-62aa-4b51-9499-3a5afd1cd9e5?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/f700648a-6dd9-4661-92a2-c604e550a208?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/f9c66dba-71fc-43dd-84e1-d3c803425702?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/c0c5541a-2350-4e33-ab53-20e612b9348d?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/e017d108-bf47-480c-b7f3-0a87f1be0cb5?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/05e12465-8324-4d72-a441-dd55d36ee3ce?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/742967d9-ffb6-4bb2-80f8-eede02aae768?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/adf08afd-8172-464f-9bb9-71fed41d2864?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
- https://substack.com/redirect/0915c0c4-1e68-40be-9f60-6837937ed96a?j=eyJ1IjoiMXlnZjcifQ.KOUIeBfeCRzhIwFnKXyQigR4j0VpF-SZzascYhSZunw
