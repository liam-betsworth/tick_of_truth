# tick_of_truth

Javascript library that offers inline validation for web forms.

## Background

## How to use it

### Include the library

```
<script src="tick-of-truth.js"></script>
```

### Basic syntax

#### Building a rule

```
validate(".selector").isEmail();
```

#### Chaining validation rules

```
validate(".selector").isEmail().isNot('example@email.com');
```

#### Validating multiple fields

```
validate("#selector1").isEmail().validate("#selector2").isPhone();
```

#### Evaluation

###### check()

Returns true or false depending on the result of the evaluation.

```
var rule = validate("#selector").isEmail();
rule.check();
```

###### true() & false()



```
var rule = validate("#selector").isEmail();

if (rule.true()) {
    // Is a valid email
} else if (rule.false()) {
    // Is not a valid email
}
```

### Validation rules

#### is()

```
validate(".selector").is();
```

#### isEmpty()

```
validate(".selector").isEmpty();
```

#### isNot()

```
validate(".selector").isNot();
```

#### isRegEx()

```
validate(".selector").isRegEx();
```

#### isNotRegEx()

```
validate(".selector").isNotRegEx();
```

#### isPhone()

```
validate(".selector").isPhone();
```

#### isEmail()

```
validate(".selector").isEmail();
```

#### isInteger()

```
validate(".selector").isInteger();
```

#### isNumber()

```
validate(".selector").isNumber();
```

#### isPostcode()

```
validate(".selector").isPostcode();
```

#### isDrivingLicence()

```
validate(".selector").isDrivingLicence();
```

#### isNotEmpty()

```
validate(".selector").isNotEmpty();
```

#### isChecked()

```
validate(".selector").isChecked();
```

