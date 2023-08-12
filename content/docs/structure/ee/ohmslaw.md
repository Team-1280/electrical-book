---
weight: 1
title: "The Basics - Ohm's Law"
---

# Just the Concepts of Electrical Engineering You Need

Don't tell the college admissions officials I blatantly lied to here but an advanced knowledge of electrical engineering is not generally required to create an FRC electrical board.


That's not to say that understanding electricity will not help you, and a basic knowledge of Direct voltage and current (DC) will be required.
That is what this section will attempt to teach- an understanding of what is actually happening in the wires when you plug them in.

# What voltage, current, and resistance actually do

Let's get right into it with `current`. When electricity flows through a wire, `charges` can be imagined to move in the wire like water in a pipe.

> ![Water flowing from pipe](/electrical-book/img/omg-water.jpg)
>
> Get used to the pipe metaphor, electrical engineers love it


Unlike water, however, electrical charges flow at nearly the speed of light through the wire.

## Current

Current measures the number of charges passing through a point in the wire per second.
Current is measured in `amperes`, but everyone calls them `amps` because it sounds cooler.
It essentially measures how 'much' electricity is flowing through a wire, like measuring the volume of water flowing through a pipe per second.

So to recap, we plug a battery's `+` and `-` terminals into a circuit and current flows from the battery's `+` terminal to the battery's `-` terminal.

{{< hint danger >}}
If you (Landon) have taken a basic physics class and are about to enlighten us all with the ingenious statement that '*actually*, current flows from the more negative terminal to the more positive terminal',
I invite you to shut the fuck up (Landon) and accept that nobody uses the electron flow model.
{{< /hint >}}
But what determines how much current actually flows through a simple circuit, like a light connected to a battery?
That requires the help of two other measurements.

## Voltage

Officially, voltage is a measure of the electrical 'potential difference' between two points.
Imagine `voltage` as a measurement of the force that pushes `current` through a wire.
If the voltage is higher, more current is shoved through the wire than if the voltage is lower.


If electrical `current` can be thought of as how *much* water flows through a pipe per second, then `voltage` can be thought of as water pressure.
If the pressure is higher, more water will flow through the same sized pipe.
That leads us to the final measure needed to model basic circuits: `resistance`.

## Resistance

Think of resistance as how much something pushes back, or 'resists' the flow of electrical `current`.

To help, let's go back to the water in a pipe model.
If `voltage` is the water pressure, and `current` is the amount of water passing through the pipe per second, then `resistance` is the size of the pipe that the water is going through.

![Resistance explained by a water pipe](/electrical-book/img/ohms-law-water.png#center)
{{< hint "warning" >}}
An important difference between the water-in-a-pipe model and real electricity is that water **changes speed** when its flow is impeded, but charges almost always travel at near the speed of light.
Remember that **electrical** resistance will reduce the number of charges that can pass at a given `voltage`, but it does **not** slow the charges down.
{{< /hint >}}


Here's another depiction of what resistance does, but with little peanut-shaped gremlins being forcefully pushed into a body bag.

![Resistance explained but worse](/electrical-book/img/ohms-law-cursed.jpg#center)


{{< details title="Open for an explanation of the 'Gremlin Model' of current flow" >}}

 - The `current` gremlin's ribcage cracks as he wails in agony.
 - `resistance` is deaf to the screams-- it's not in his department to care.
 His assigned task is just to pull the rope.
 - Likewise, `voltage` has one quest; one purpose; one *ambition*; he must push `current` through the bag.
  
   *No matter the cost.*

Who must accept responsibility for the fate of the `current` gremlin?

{{< columns >}}
### Is `voltage` responsible? 
> It just pushes `current`.
>
> It doesn't tighten the rope.
>
> It wouldn't hurt a fly.
>
> It just needs `current` to get through.

<--->

### Is `resistance` responsible?
> It pulls the rope.
>
> It doesn't wonder what the rope does.
>
> It's not their job to wonder.
>
> It just pulls the rope

{{< /columns >}}

Do with this information what you must.

{{< /details >}}


