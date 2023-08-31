---
title: RoboRIO
---


![RoboRIO Diagram](/electrical-book/img/modules/roborio_diagram.png#center)


# The RoboRIO

The RoboRIO is the brains of the robot, and will be a sort of hub that every other part should connect back to in some way.

{{< hint info >}}
As of 2022, it is **required** by FRC rules that a RoboRIO be used to at minimum control all output devices!
External processors are allowed, however consult the FRC rulebook for the current year to check exactly how it is allowed to interface with the rest of the robot.
FRC can be **very** picky about this.
{{< /hint >}}

## Interfaces and Ports
There are a few different methods to control output devices and receive input from sensors supported by the RoboRIO.
We'll start with arguably the simplest: PWM

### PWM Ports
As you can see in the diagram above, 10 different PWM ports labelled 0 - 9 are available on the right side of the RoboRIO.
For the parts we have circa 2022, PWM is mostly used for older motor controllers like the [Spark](/electrical-book/docs/reference/motorcon/spark).

Despite this, PWM is still ubiquitous in electronics in general and you should at least know how to use PWM - controlled devices.

{{< hint info >}}
For an in-depth explanation of how Pulse Width Modulation works, see [this page](/electrical-book/docs/structure/ee/pwm).

Note that while you most likely won't be **required** to know what is actually happening on the wire, it can and has come in handy in the past for me when things break.
{{< /hint >}}

### CAN Port
The two-wire CAN connector is located in the top left corner of the RoboRIO.
Each wire on the connector is labelled either **GRN** or **YEL**, corresponding to the standard wire color to connect.

