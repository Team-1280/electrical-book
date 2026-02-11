---
title: Controller Area Network
---

# Controller Area Network - Anyone can CAN!

You CAN learn more about the CAN bus [here](https://www.youtube.com/watch?v=BNLfWZhBc48 "Youtube.com")

## CAN Controllers

We have 2 types of CAN usually on the robot, there is one provided by the CANivore and the Rio, they differ in the protocol type, CAN FD and CAN 2.0 respectively. CAN FD provides a more versatile version of CAN that one can use to have asyncronous data streams. 

## TL;DR

Essentially CAN is the form of communciation that cars use; however in the case of FRC, CAN is provided from each and every motor/sensor. The benefit of having CAN is to daisy-chain topology. The tradeoff of CAN is having a "terminating resistor" essentially you can imagine CAN as a race track, to which every time there is a "pit entry" where more than one CAN device is introduced in the loop, that is called an **Extreme End** to which you have to consider putting a terminating resistor. Terminating resistors for CAN are usually 120 ohms.

## Redundant wiring

One of the things that Team 1280 does well is CAN wiring, to which the idea of redundant CAN wiring is passed down generations of electrical engineers(since 2023)
