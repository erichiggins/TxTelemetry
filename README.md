TxTelemetry
===========

An on{X} script which sends telemetry data over SMS for tracking Android-powered near-space balloons.


**Warning:** This script was hacked together at 3am, then taken into the
desert, tied to a high-altitude balloon, and set free. Use with caution.


License
-------

I'm open-sourcing this script under the
[MIT License](http://opensource.org/licenses/MIT) in order to
preserve it and share with others.


Intro
-----

Running this script on an Android phone will allow you to receive GPS
coordinates, as well as other sensor data, over SMS (text messages).
SMS was preferred because it works on even weak and slow cellular
signals, which are common in remote areas and at high altitudes.


Usage
-----

The recipient cell number must be changed from ```000-000-0000``` to the
number of a cell phone **on the ground**. Preferably, a cell phone with
the best possible reception.


Future plans
------------

I don't have any current plans to maintain this script. I've already
launched and recovered my balloon with it, and have no near-future plans
for another launch. That *may* change, but folks are encouraged to fork
this script and modify it for their own needs.


Documentation
-------------

[on{X} API Reference](https://www.onx.ms/#!apiPage)
