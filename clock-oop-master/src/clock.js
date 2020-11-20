class Clock {
    constructor(time) {
        
        
        if (time == undefined){//if no parameters passed,set to midnight
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        }
        else{
            ((time.hours == undefined)||(time.hours > 12)||(time.hours < 0)) ?  (this.hours = 0):(this.hours = time.hours);
            ((time.minutes == undefined)||(time.minutes > 60)||(time.minutes < 0))?  (this.minutes = 0):(this.minutes = time.minutes);
            ((time.seconds == undefined)||(time.seconds > 60)||(time.seconds < 0)) ?  (this.seconds = 0):(this.seconds = time.seconds);
        }
        

    }
    
}


 


module.exports = Clock;