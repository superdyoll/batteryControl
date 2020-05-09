# Battery Control

This module allows you to get a laptop to automatically turn a TPLink power plug on and off automatically based on the battery level of the laptop.

If you have a laptop that's going to be plugged in all the time and you're not sure how good the battery management is this module will automatically turn the device on and off.

To enable this functionality on your laptop firstly edit the ip address in index.js to be the ip address of your plug.

Then enable the script by adding the following, edited, line to your crontab.
    * * * * * /home/<username>/batteryControl/index.js

And there you have it, a self-charging laptop.
