
# tick_of_truth

Javascript library that offers inline validation for web forms.

## How to use it

### Include the library

```
<script src="tick_of_truth.js"></script>
```

### Building a test case

To build a test case, you need a selector `validate("#password")`, validation rules `.isMinLength(8).isMaxLength(24)`. To execute the test case, you then need a call to evaluate  `.result()`.

```
var testCase = validate("#password")
                 .isMinLength(8)
                 .isMaxLength(24);

testCase.evaluate();
-> true/false
```

Multiple fields can also be chained together into a single rule.

```
var testCase = validate("#selector1")
                 .isEmail()
               .validate("#selector2")
                 .isPhone();
```

## Evaluation calls

Chained at the end of a test case to evaluate whether the validation has been met or not.

### result()

Returns true (pass) or false (fail) depending on the result of the evaluation.

```
var test = validate("#emailAddress")
             .isEmail();

test.result();
-> true/false
```

### pass()

Used to confirm that the test case has passed validation.

Returns true (pass) or false (fail) depending on the result of the evaluation.

```
var test = validate("#emailAddress")
             .isEmail();

test.pass();
-> true/false
```

### fail()

Used to confirm that the test case has failed validation.

Returns true (fail) or false (pass) depending on the result of the evaluation.

```
var test = validate("#emailAddress")
             .isEmail();

test.fail();
-> true/false
```

## Validation rules

### is(any: value)

Returns true if the value of the selector is the same as the supplied value.

```
validate("#name").is("Liam");
```

### isChecked()

Returns true if the selector has at least one checked radio or checkbox.

```
validate("input[name=radio-button-group]").isChecked();
```

### isDrivingLicence()

Returns true if the value of the selector matches is a correctly formatted driving licence number.

```
validate("#driving-licence).isDrivingLicence();
```

### isEmail()

Returns true if the value of the selector is a correctly formatted email address.

```
validate(".selector").isEmail();
```

### isEmpty()

Returns true if the value of the selector is empty.

```
validate(".selector").isEmpty();
```

### isInteger()

Returns true if the value of the selector is an integer (whole number).

```
validate(".selector").isInteger();
```

### isLength(Number: length)

Returns true if the length of the selector value matches the supplied length.

```
validate(".selector").isLength(4);
```

### isMinLength(Number: length)

Returns true if the length of the selector value is greater than the supplied length.

```
validate(".selector").minLength(2);
```

### isMaxLength(Number: length)

Returns true if the length of the selector value is less than the supplied length.

```
validate(".selector").maxLength(6);
```

### isNot(any: value)

Returns true if the value of the selector is not the same as the supplied value.

```
validate("#phone").isNot("999");
```

### isNotEmpty()

Returns true if the value of the selector is not empty.

```
validate("#some-field").isNotEmpty();
```

### isNotRegEx(RegExp: expression)

Returns true if the value of the selector does not match the supplied expression.

```
validate("#value").isNotRegEx(/^[0-9]{6}$/);
```

### isNumber()

Returns true if the value of the selector is any kind of number.

```
validate("#price").isNumber();
```

### isPhone()

Returns true if the value of the selector is a correctly formatted phone number.

```
validate("#phone-number").isPhone();
```

### isPostcode()

Returns true if the value of the selector is a correctly formatted postcode.

```
validate("#postode").isPostcode();
```

### isRegEx(RegExp: expression)

Returns true if the value of the selector matches the supplied expression.

```
validate("#six-numbers").isRegEx(/^[0-9]{6}$/);
```