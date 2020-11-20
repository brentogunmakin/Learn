# Clock OOP

Build multiple classes with this Object Oriented Programming exercise.


### Entry Ticket

Students should have learned the following in order to work on this repository:

* Object Oriented Programming with JavaScript

* The `this` keyword

* Inheritance

* Getters and setters

* Reading tests with Mocha/Chai

* The basics of requiring and exporting with node and installing packages with npm


### Setup

To get started, do the following:

* Fork and then clone this repository

* Run `npm install` to install dependencies

* Run `npm test` to run mocha


### Instructions

You will be building three classes: Clock, DigitalClock, and Watch.

#### Clock

* The Clock class has the following properties:

> - **hours**: the current hour
> - **minutes**: the current minute
> - **seconds**: the current second

* When initialized, should be set to midnight in 24 hour format. That is, 0 hours, 0 minutes, 0 seconds.

* When initialized, takes an optional object which can manually set the clock to a specific time. For example:

  ```javascript
  const clock = new Clock({ hours: 16, minutes: 30, seconds: 15 });
  // The clock's current time is 16:30:15
  ```

* Properties can be set and returned:

  ```js
  clock.hours = 20
  clock.hours // returns 20
  clock.minutes = 30
  clock.minutes // returns 30
  clock.seconds = 40
  clock.seconds // returns 40
  ```

* Properties cannot be set to values that are invalid:

  ```js
  clock.hours = 30 // will not make a change
  clock.minutes = -10 // will not make a change
  clock.seconds = 99 // will not make a change
  ```

* Has a `.tick()` function which increases the clock count by 1 second. If the clock reaches 60 seconds, it resets seconds to 0 and increases the minute. If the minutes reach 60, resets minutes and increases hours. If hours reaches 24, resets the entire clock back to midnight.

* Has a `.currentTime()` function which returns the current time as a string, constructed according to the current format. Numbers are padded with 0s.

  ```javascript
  const clock = new Clock({ hours: 16 })
  clock.currentTime() // '16:00:00'

  clock.tick()
  clock.currentTime() // '16:00:01'
  ```

#### DigitalClock

* The DigitalClock class has the following properties:

> - **format**: defaults to '24-hour format'

* It should inherit from the Clock class

* It can `.toggleFormat()` between '24-hour format' and '12-hour format'

  ```javascript
  const clock = new DigitalClock()

  clock.format // '24-hour format'
  clock.toggleFormat()

  clock.format // '12-hour format'
  clock.toggleFormat()

  clock.format // '24-hour format'
  ```

* When getting the `.currentTime()`, it prints it in the appropriate format:

  ```js
  const clock = new DigitalClock({ hours: 20 })

  clock.format // '24-hour format'
  clock.currentTime() // '20:00:00'

  clock.toggleFormat()
  clock.format // '12-hour format'
  clock.currentTime() // '08:00:00 PM'
  ```

* You can `.setAlarm()` and it will log a message when `.tick()` hits the specified time.

  ```js
  const clock = new DigitalClock({ hours: 6, minutes: 29, seconds: 59 })
  clock.setAlarm({ hours: 6, minutes: 30 })

  clock.tick() // console.log('ALARM')
  ```

* You can set multiple alarms `.setAlarm()` and it will log a message for each alarm when `.tick()` hits the specified time.

  ```js
  const clock = new DigitalClock({ hours: 6, minutes: 29, seconds: 59 })
  clock.setAlarm({ hours: 6, minutes: 30 })
  clock.setAlarm({ hours: 6, minutes: 30 })

  clock.tick() // console.log('ALARM') x2
  ```

#### Watch

* The Watch class has the following properties:

> - **name**: the name of the watch
> - **brand**: the brand of the watch
> - **price**: the price of the watch
> - **duration**: the number of ticks a clock has before it gives out

* When initialized, takes an instance of a clock and an object with all the properties

  ```javascript
  const clock = new Clock({ hours: 7 })
  const options = { name: 'Weekender', brand: 'Timex', price: 57.10, duration: 10 }
  const watch = new Watch(clock, options)
  ```

* It can tell the `.currentTime()` in whatever format the clock was given.

* Each `.tick()` decreases the duration. If the duration is at 0, it will not tick any further!

  ```javascript
  const clock = new Clock({ hours: 7 })
  const options = { name: 'Weekender', brand: 'Timex', price: 57.10, duration: 1 }
  const watch = new Watch(clock, options)

  watch.tick() // duration is at 0
  watch.currentTime() // '07:00:01'

  watch.tick() // duration is still at 0
  watch.currentTime() // '07:00:01'
  ```
