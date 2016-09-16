function Event() {
    if(this instanceof Event) {
        return new Event();
    }
    this.callbacks = {};
}
Event.prototype.on = function(type, handler) {
    this.callbacks = this.callbacks || {};
    this.callbacks[type] = this.callbacks[type] || [];
    this.callbacks[type].push(handler);

    return this;
}

Event.prototype.off = function(type, handler) {
    var list = this.callbacks[type];
    
    if(list) {
        for(var i = list.length; i >= 0; i--) {
            if(list[i] == handler) {
                list.splice(i, 1);
            }
        }
    }
    
     return this;
}

Event.prototype.trigger = function(type, handler) {
    var list = this.callbacks[type];

    if(list) {
        for(var i = 0 , l = list.length; i < len; i++) {
            list.call(this, handler);
        }
    }
}

Event.prototype.once = function(type, handler) {
    var self = this;

    function wrapper() {
        handler.apply(self, arguments);
        self.off(type, wrapper);
    }
    this.on(self, wrapper);
    return this;
}