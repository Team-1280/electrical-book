---
title: Raspberry Pi Family
---
# Raspberry Pi 2/3/4/5 (B[+]) & Raspberry Pi Zero W (2) & Raspberry Pico

![RaspberryPie](/electrical-book/img/raspberry-pie.jpg#center)

> " The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that enables people of all ages to explore computing, and to learn how to program in languages like Scratch and Python. It’s capable of doing everything you’d expect a desktop computer to do, from browsing the internet and playing high-definition video, to making spreadsheets, word-processing, and playing games. What’s more, the Raspberry Pi  has the ability to interact with the outside world, and has been used in a wide array of digital maker projects, from music machines and parent detectors to weather stations and tweeting birdhouses with infra-red cameras. We want to see the Raspberry Pi being used by kids all over the world to learn to program and understand how computers work." -Raspberry Pi Foundation UK

Raspberry Pi is a more community supported SBC (Single board Computer). Many Arm-Based OSes only support the Raspberry Pi for it's abundence and price. These computers can be used to make handhealds, IOT hubs, and Retro Game Emulators. For the price of $70 for the Flagship and best model, it is a reasonable price for hardware hacking, and development. These boards fueled many projects which develop learning and informative oppertunities.  
![RaspberryPi](/electrical-book/img/raspberry-pi.jpg#center)

## Installation/Getting Started

The rapsberry pi is a arm-based computer so when installing a OS on a MicroSD card it is recommended to use a card that is class 10 and above. The provided OSes from the Raspberry pi Foundation all come in a installer from [RPi Imager](https://www.raspberrypi.com/software/ "https://www.raspberrypi.com/software/"). The installer has a suite of very compatable OSes for the limited hardware, for this example we will be exploring *Raspbian* which is a port of Debian Bookworm. You may proceed the installation, and when in the RPi Imager, Operating system: **Raspberry Pi OS (64-bit)**, Storage: Whatever you have Plugged in; then click Write. Welcome to Linux.  

There are many communities dedicated to the Raspberry Pi family who can create better Guides:

[RPi Subreddit](https://www.reddit.com/r/raspberry_pi/ "https://www.reddit.com/r/raspberry_pi/")   
[Hackster.io](https://www.hackster.io/raspberry-pi "https://www.hackster.io/raspberry-pi")  
[Hackaday.io](https://hackaday.io/list/3424-raspberry-pi-projects "https://hackaday.io/list/3424-raspberry-pi-projects")

## GPIO
These single board computers have a GPIO Pins on the side of the computer and could be accessed through Python 🐍.  

    pip install RPi.GPIO

And you can use any editior of your choice to control the GPIO

Full guide [here](https://projects.raspberrypi.org/en/projects/physical-computing/ "https://projects.raspberrypi.org/en/projects/physical-computing/")

## Board types:
### Raspberry Pi 1/2/3/4/5 (B[+])
"Full size" Raspberry Pi commonly in a 900Mhz~2.4Ghz Arm CPU with 512MB~16GB of Ram, with a power source and a MicroSD slot. These systems range around $45~$75 and are overkill for most applications, use these for pereminant projects disparingly. It is usually used for developing and testing your projects to port it in a smaller form factor.  

Branch includes: 
* Raspberry Pi 1 B+ - *same as RPi 1,2*
* Raspberry Pi 2 B - *900Ghz (Cortex A7); 1GB RAM MicroUSB power*
* Raspberry Pi 3 B - *1.2Ghz (Brodcom 64Bit); 1GB RAM; BCM43438 (WLan, BTE); MicroUSB power*
* Raspberry Pi 3 B+ - *1.4Ghz (Cortex-A53 ARMv8); 1GB LPDDR2 sdRAM; 2.4Ghz/5Ghz IEEE802.11.b/g/n/ac Wlan & BLE; GB Ethernet; Micro USB power; POE support*
* Raspberry Pi 4 - *1.8Ghz (Cortex-A72 ARMv8); 1,2,4,8GB LPDDR4 3200Mhz; 2.4Ghz/5Ghz IEEE802.11ac Wlan & BLE 5.0, GB Ethernet; USB-C power; 2 MicroHDMI 4k@60*
* Raspberry Pi 5 - *2.4Ghz (Cortex-A76 ARMv8.2); 4,8GB LPDDR4x 4267Mhz; 2.4Ghz/5Ghz IEEE802.11ac Wlan & BLE 5.0, GB PoE; USB-C power; 2 MicroHDMI 4k@60; RTC(Real time clock); PCIE 2.0; Power Button; RP1 Controller*

![Raspberry Pi Diagram](/electrical-book/img/raspberryPiDiagram.jpg)  