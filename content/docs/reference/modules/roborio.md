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

![PWM Signal example](/electrical-book/img/modules/pwm_duty_period.png#center)

Despite this, PWM is still ubiquitous in electronics in general and you should at least know how to use PWM - controlled devices.

{{< hint info >}}
For an in-depth explanation of how Pulse Width Modulation works, see [this page](/electrical-book/docs/frc_guide/ee/pwm).

Note that while you most likely won't be **required** to know what is actually happening on the wire, it can and has come in handy in the past for me when things break.
{{< /hint >}}

### CAN Port

The two-wire CAN connector is located in the top left corner of the RoboRIO.
Each wire on the connector is labelled either **GRN** or **YEL**, corresponding to the standard wire color to connect.

![CAN Bus Wires example](/electrical-book/img/modules/canbus.svg#center)

CAN, or Controller Area Network, is a much more complicated way of transmitting messages to devices connected to the **CAN Bus**.

It also differs greatly from PWM in ease of use;
while PWM is generally for a single connection between the RoboRIO and a device, CAN allows many devices to be connected to the same two wires, called a bus.
This allows us to greatly reduce the wiring requirements for devices, because we can daisy chain connections:

With PWM, we would connect two motor controllers to the roboRIO by adding an individual PWM connection from roborio to motor controller.
With CAN, we can instead connect the CAN bus wires from the roborio to one motor controller, and connect the motor controller to another motor controller.

{{< hint info >}}
For a (more) in-depth explanation of the CAN bus, take a look [here](/electrical-book/docs/frc_guide/ee/can)
{{< /hint >}}

### Ethernet Port

Hopefully, you have some idea of what ethernet does.
If not, please read about it somewhere that isn't here.

In more serious terms, the ethernet port on the roborio serves an extremely important purpose during competitions.
It connects to a wifi [router](/electrical-book/docs/reference/modules/router) to allow wireless control of the robot.
Make sure you read more on the [router](/electrical-book/docs/reference/modules/router) before you go connecting things - there are many pitfalls and strange quirks around connectivity.

### USB Type B Port

The RoboRIO uses a now-uncommon USB type B connector.
Luckily, we have about a million of these stored _somewhere_ in the closet, the programming team should usually keep track of them.

![A diagram helping people identify USB connector types](/electrical-book/img/modules/usb2connectors.png#center)

This -- along with the ethernet port, will be used to upload code and monitor the RoboRIO during testing and build,
but it usually sees less usage in competitions as we'll instead grab a massive ethernet cable.

### RSL Port

The **RSL** port must, by FRC rules, always be connected to the [status light](/electrical-book/docs/reference/modules/rsl).
It is pretty simple, but take a look at the page for the status light at least once to get a feel for the quirks of the rules surrounding it.
