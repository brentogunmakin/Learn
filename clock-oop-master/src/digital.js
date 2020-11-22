const Clock = require("./clock");

class DigitalClock extends Clock{
    constructor(time) {
        super(time);
        this.format = '24-hour format';
    }

    toggleFormat(){
        this.format == '24-hour format' ? this.format = '12-hour format' : this.format = '24-hour format';
    }

    currentTime(){
        let time = ''
        this.format == '24-hour format' ? time = super.currentTime() : () => {
            if(this.hours > 12){//PM
                this.hours = this.hours - 12;
                this.hours < 10 ? (time = time + `0${this.hours.toString()}`):(time = this.hours.toString());
                this.minutes < 10 ? (time = time + `:0${this.minutes.toString()}`):(time = time +`:${this.minutes.toString()}`);
                this.seconds < 10 ? (time = time + `:0${this.seconds.toString()} PM`):(time = time +`:${this.seconds.toString()} PM`);        
            }else{//AM
                if(this.hours == 0){
                    this.hours = 12;//midnight
                }
                this.hours < 10 ? (time = time + `0${this.hours.toString()}`):(time = this.hours.toString());
                this.minutes < 10 ? (time = time + `:0${this.minutes.toString()}`):(time = time +`:${this.minutes.toString()}`);
                this.seconds < 10 ? (time = time + `:0${this.seconds.toString()} AM`):(time = time +`:${this.seconds.toString()} AM`);

            }
            
            
            
        }
        return time;
    }
}

// const digital = new DigitalClock()

// console.log(digital.format);
module.exports = DigitalClock;