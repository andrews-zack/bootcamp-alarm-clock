# Alarm Clock

## About
* Needs to have a clock interface on the page with it counting up (hr:min:sec)
* Needs to have a way to set an alarm time (input field)
* Needs to display an alert when the alarm time comes

## INIT
<br>

### **Variables**
- Main clock
    * Always showing on the page
    * Counts up in live time
    * Must update in 12 hour time (12 -> 1)

    *Properties*<br>
    - Date (hour)
    - Date (minute)
    - Date (second)
<br>

- User input field
    * Where user enters time they want the alarm to go off
    * Selective input so user can't enter string or other undefined value
        - Restrict input to numbers
        - Drop-down input
    
    *Properties*<br>
    - Field value (to set alarm time)
    - Value type 
    - am/pm
<br>

