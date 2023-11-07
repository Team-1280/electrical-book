---
title: Pulse Width Modulation
---

# PWM (Pulse Width Modulation)
Think of PWM as a way to send a number between 0% and 100% over a single wire.

Many of the acronyms in FRC and engineering in general hide a name that is actually very self-descriptive.
PWM - **Pulse Width Modulation** works by turning a signal on an off again many times per second.

![Explanation of PWM duty and period](/electrical-book/img/modules/pwm_duty_period.png#center)

The amount of time between the signal being turned on, turned off, and turned on again is called the 'period'.
A value is transmitted via PWM by changing the amount of time that the signal is turned on per 'period', called the 'duty' time.

![Example PWM signal at 25%, 50%, and 75% duty cycle](/electrical-book/img/modules/pwm_diagram.png#center)

The amount of time that the signal is left on per period is called the 'duty cycle'.

In case this still isn't clear - we'll see one example:
Let's say you repeatedly turned a light on for 3 seconds, then off for 2 seconds.

Here' the **period** of the signal you're making with the light would be {{< katex >}}3 + 2 = 5{{< /katex >}} seconds,
and the **duty cycle** of the signal would be {{< katex >}} \frac{3}{5} = 60\% {{< /katex >}}

PWM is basically what a Digital device can take as a input. PWM modules are are converted to machines' sensory detail. 