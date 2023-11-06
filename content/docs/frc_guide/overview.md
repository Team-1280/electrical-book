---
weight: 1
title: "Example Board"
---

# An Example Board

Let's start building a complete electrical board that can control a standard tank drivebase (just normal wheels on each side, two motors per side).
For extra practice with all sorts of motor controllers we'll use one CAN-controlled motor controller and one PWM-driven.

Here's what you should gather if you want to build this yourself:
 * 1 [PDP](/electrical-book/docs/reference/modules/pdp)
   * Around a foot at most of 4 AWG Red wire
   * 4 M6 [Ring Terminals](/electrical-book/docs/reference/wiring/ring)
   * 1 [Main Breaker](/electrical-book/docs/reference/modules/mainbreaker)
   * 1 [SB50 Battery Connector](/electrical-book/docs/reference/wiring/sb50)
 * Red + Black 12 AWG Wire Spool
 * Red + Black 20 AWG Wire Spool
 * 1 [RoboRIO](/electrical-book/docs/reference/modules/roborio)
   * 1 [Status Light](/electrical-book/docs/reference/modules/rsl)
 * Green + Yellow 24 AWG CAN Bus wire
 * 2 PWM Motor Controllers (e.g. [spark](/electrical-book/docs/reference/motorcon/spark))
   * 2 [PWM Connections](/electrical-book/docs/reference/wiring/dupont)
 * 2 CAN Capable Motor Controllers (e.g. [Talon SRX](/electrical-book/docs/reference/motorcon/talonsrx))

The first thing we need is a [PDP](/electrical-book/docs/reference/modules/pdp) to power everything else.

## Power Distribution Board

![PDP image with labels for each input and output](/electrical-book/img/modules/pdp_overview.png#center)


We'll connect a [main breaker](/electrical-book/docs/reference/modules/mainbreaker) to the PDP.

### Main Breaker Connection

We'll need a section of red 4 AWG wire, and four [ring terminals](/electrical-book/docs/reference/wiring/ring) with holes large enough to fit M6 bolts.
The PDP should come with two black M6 bolts, but if you don't have any ask the mechanical team to fetch some.
You'll also need an [SB50 battery connector](/electrical-book/docs/reference/wiring/sb50) to connect the battery to.

{{< columns >}}

![PDP to breaker connection 1](/electrical-book/img/pdp_main_conn.png#center)

<--->

Start by crimping two ring terminals to each end of your red wire.
Then, attach the wire between one end of the main breaker and the PDP's **+** terminal.

{{< /columns >}}

![PDP to breaker connection 2](/electrical-book/img/pdptobrkr.jpg#center)

Now, we'll connect the battery plug to the board.
Crimp your two remaining ring terminals to the red and black wires on the plug.
After that, use your last M6 bolt to connect the black wire of the plug **directly** to the PDP, and attach the red wire of the plug to the breaker.

And that's it - our battery connection is made!

### RoboRIO Connection
We'll power the RoboRIO next.
The PDP has special ports on the top, labelled in blue on the diagram - these are specially meant to power, among other things, the RoboRIO.
Find the ports labelled **Vbat CONTROLLER PWR**, shown here highlighted in blue:

![PDP Special Connections](/electrical-book/img/build/pdp_special.png#center)

{{< hint info >}}
The **Vbat CONTROLLER PWR** uses [weidmuller connectors](/electrical-book/docs/reference/wiring/weidmuller), read up on them if you're not sure how to insert wires into the port
{{< /hint >}}

You'll need to cut a section of your 20 AWG wire that can reach from the **CONTROLLER PWR** port to your RoboRIO.
Once you have a section of wire, insert the red and black wires into their appropriate connectors on the PDP.

{{< columns >}}
{{< hint info >}}
The RoboRIO uses simple screw terminals for its power connection, just strip the wires back about 3/4 of an inch and insert it into the hole after unscrewing the two flatheads in the connector.

RoboRIO's power connector shown on the right, read more into the [RoboRIO](/electrical-book/docs/reference/modules/roborio) if your roborio does not have this style of connector.
{{< /hint >}}
<--->
![RoboRIO Power Connector](/electrical-book/img/build/roborio_pwr_conn.jpg#center)
{{< /columns >}}

Our PDP is now feeding power to the RoboRIO!

### Motor Controllers Connection
Start by cutting 4 segments of red and black wire long enough to go from the PDP to each motor controller.
