
function ValidationRules(selector, validator){
    this.validator = validator
    this.selector = selector;
    this._is = [];
    this._not = [];
    this._isRegex = [];
    this._notRegex = [];
    this.length = {
        lt: undefined,
        gt: undefined,
        eq: undefined
    }

    this.not = function(value){
        this._not.push(value);
        return this;
    }

    this.is = function(value){
        this._is.push(value);
        return this;
    }

    this.isReg = function(regex){
        this._isRegex.push(regex);
        return this;
    }

    this.notReg = function(regex){
        this._notRegex.push(regex);
        return this;
    }

    this.email = function(){
        this.isReg(/\S+@\S+\.\S+/);
        return this;
    }

    this.maxLength = function(length){
        this.length.lt = length;
        return this;
    }

    this.minLength = function(length){
        this.length.gt = length;
        return this;
    }

    this.equalLength = function(length){
        this.length.eq = length;
        return this;
    }

    this.validate = function(selector){
        return this.validator.watch(selector);
    }

    //Returns true if valid, false if not
    this.check = function(){
        if(!this.validateNots()){
            return false;
        }
        if(!this.validateIs()){
            return false;
        }
        if(!this.validateIsReg()){
            return false;
        }
        if(!this.validateNotReg()){
            return false;
        }
        if(!this.validateLength()){
            return false;
        }
        return true;
    }
    //Loops through each not value, if all nots are matched, it will return true, if any not fails, it returns false
    this.validateNots = function(){
        var value = $(this.selector).val();
        for(var i = 0; i < this._not.length; i++){
            if(value === this._not[i]) return false;
        }
        return true;
    }

    this.validateIs = function(){
        var value = $(this.selector).val();
        for(var i = 0; i < this._is.length;i++){
            if(value !== this._is[i]) return false;
        }
        return true;
    }

    this.validateIsReg = function(){
        var value = $(this.selector).val();
        for(var i = 0; i < this._isRegex.length;i++){
            if(!this._isRegex[i].test(value)){
                return false;
            }
        }
        return true;
    }

    this.validateNotReg = function(){
        var value = $(this.selector).val();
        for(var i = 0; i < this._notRegex.length;i++){
            if(this._notRegex[i].test(value)){
                return false;
            }
        }
        return true;
    }

    this.validateLength = function(){
        var value = $(this.selector).val();
        if(this.length.lt){
            if(!(value.length < this.length.lt)){
                return false;
            }
        }
        if(this.length.gt){
            if(!(value.length > this.length.gt)){
                return false;
            }
        }
        if(this.length.eq){
            if(!(value.length === this.length.eq)){
                return false;
            }
        }
        return true;
    }

    this.error = function(){
        $(this.selector).closest('.form-group').addClass('error');
        $(this.selector).parent().find('.label-error').show();
    }

    this.removeError = function(){
        $(this.selector).closest('.form-group').removeClass('error');
        $(this.selector).parent().find('.label-error').hide();
    }

    this.true = function(){
        return this.validator.check();
    }

    this.false = function(){
        return !this.validator.check();
    }
}


function validate(id){
    if(id){
        if(window === this){
            return new validate(id);
        } else {
            this._rules = [];
            this._rules.push(new ValidationRules(id, this));
            return this._rules[0];
        }
    }else{
        console.error("Provide a selector e.g. 'validate(\"#email\")");
    }
}

validate.prototype = {
    _rules: [],
    
    watch: function(selector){
        var valRule = new ValidationRules(selector, this);
        this._rules.push(valRule);
        return valRule;
    },

    check: function(){
        var passed = true;
        for(var i = 0; i < this._rules.length;i++){
            if(!this._rules[i].check()){
                this._rules[i].error();
                passed = false;
            }else{
                this._rules[i].removeError();
            }
        }
        return passed;
    }
}