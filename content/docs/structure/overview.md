---
weight: 1
title: "Example Board"
---

# An Example Board

Let's start building a complete electrical board that can control a standard tank drivebase (just normal wheels on each side).
The first thing we need is a [PDP](/electrical-book/docs/reference/modules/pdp) to power everything else.


![PDP image with labels for each input and output](/electrical-book/img/modules/pdp_overview.png#center)


We'll connect a [main breaker](/electrical-book/docs/reference/modules/mainbreaker) to the PDP.

We'll need a section of red 4 AWG wire, and four [ring terminals](/electrical-book/docs/reference/wiring/ring) with holes large enough to fit M6 bolts.
The PDP should come with two black M6 bolts, but if you don't have any ask the mechanical team to fetch some.
You'll also need an [SB50 battery connector](/electrical-book/docs/reference/wiring/sb50) to connect the battery to.

![PDP to breaker connection 1](/electrical-book/img/pdp_main_conn.png#center)

Start by crimping two ring terminals to each end of your red wire.
Then, attach the wire between one end of the main breaker and the PDP's **+** terminal.

![PDP to breaker connection 2](/electrical-book/img/pdptobrkr.jpg#center)

Now, we'll connect the battery plug to the board.
Crimp your two remaining ring terminals to the red and black wires on the plug.
After that, use your last M6 bolt to connect the black wire of the plug **directly** to the PDP, and attach the red wire of the plug to the breaker.

And that's it - our battery connection is made!
