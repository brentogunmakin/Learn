class Clock {
    constructor(time) {
        if (time == undefined){//if no parameters passed,set to midnight
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
        else{
            ((time.hours == undefined)||(time.hours > 23)||(time.hours < 0)) ?  (this.hours = 0):(this.hours = time.hours);
            ((time.minutes == undefined)||(time.minutes > 60)||(time.minutes < 0))?  (this.minutes = 0):(this.minutes = time.minutes);
            ((time.seconds == undefined)||(time.seconds > 60)||(time.seconds < 0)) ?  (this.seconds = 0):(this.seconds = time.seconds);
        }
    }
    currentTime() {
        let time = ''
        this.hours < 10 ? (time = time + `0${this.hours.toString()}`):(time = this.hours.toString());
        this.minutes < 10 ? (time = time + `:0${this.minutes.toString()}`):(time = time +`:${this.minutes.toString()}`);
        this.seconds < 10 ? (time = time + `:0${this.seconds.toString()}`):(time = time +`:${this.seconds.toString()}`);
        return time;
    }
    tick(){
        this.seconds++;
        if (this.seconds == 60){
            this.seconds = 0;
            this.minutes++;
            if (this.minutes == 60){
                this.minutes = 0;
                this.hours++;
                if(this.hours == 24) {
                    this.hours = 0
                }
            }
        }
        return this
    }
    
}





module.exports = Clock;