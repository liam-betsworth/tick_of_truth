
# tick_of_truth

Javascript library that offers inline validation for web forms.

## Background

## How to use it

### Include the library

```
<script src="tick_of_truth.js"></script>
```

### Building a rule

```
validate(".selector").isEmail();
```

### Chaining validation rules

```
validate(".selector").isEmail().isNot('example@email.com');
```

### Validating multiple fields

```
validate("#selector1").isEmail().validate("#selector2").isPhone();
```

### Evaluation

#### result()

Returns true (pass) or false (fail) depending on the result of the evaluation.

```
var rule = validate("#selector").isEmail();
rule.result();

-> true/false
```

#### pass()

Returns true (pass) or false (fail) depending on the result of the evaluation.

```
var rule = validate("#selector").isEmail();
rule.pass();

-> true/false
```

#### fail()

Returns true (fail) or false (pass) depending on the result of the evaluation.

```
var rule = validate("#selector").isEmail();
rule.fail();

-> true/false
```

### Validation rules

#### is()

exact value match

```
validate("#name").is("Liam");
```

#### isNot()

```
validate(".selector").isNot("something");
```

#### isEmpty()

```
validate(".selector").isEmpty();
```

#### isRegEx()

Create your own regular expression to check against.

```
validate(".selector").isRegEx(/^[0-9]{6}$/);
```

#### isNotRegEx()

Create your own regular expression to avoid.

```
validate(".selector").isNotRegEx(/^[0-9]{6}$/);
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

#### isLength()

```
validate(".selector").isLength(4);
```

#### minLength()

```
validate(".selector").minLength(2);
```

#### maxLength()

```
validate(".selector").maxLength(6);
```