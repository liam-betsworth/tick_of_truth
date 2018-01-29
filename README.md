
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

testCase.result();
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

## Errors

During evaluation, if a test case is not met, the library will look for the parent `.form-group` and add an `.error` class to it. This will add a red bar to the left of the `.form-group` and highlight the `input` in red.

If a `.label-error` or `.legend-error` exists within the `.form-group`, it will be shown automatically, presenting the error to the user.

### error(String: selector)

If a `.form-group` has more than one `.label-error` or `.legend-error`, you may want to show a specific error for different test cases. Using the `error(String: selector)` function, you can specify which selector should be made visible.

```
validate("#email")
  .isNotEmpty()
  .error(".empty-email")
  .result();

validate("#email")
  .isEmail()
  .error(".valid-email")
  .result();
```

### Reset errors

If the errors need to be reset and hidden for resubmission of a form, use the `resetErrors()` function. 

```
validate.prototype.resetErrors();
```

## Validation rules

### is(any: value)

Returns true if the value of the selector is the same as the supplied value.

```
validate("#name")
  .is("Liam");
```

### isChecked()

Returns true if the selector has at least one checked radio or checkbox.

```
validate("input[name=radio-button-group]")
  .isChecked();
```

### isDrivingLicence()

Returns true if the value of the selector matches is a correctly formatted driving licence number.

```
validate("#driving-licence)
  .isDrivingLicence();
```

### isEmail()

Returns true if the value of the selector is a correctly formatted email address.

```
validate("#email")
  .isEmail();
```

### isEmpty()

Returns true if the value of the selector is empty.

```
validate("#field")
  .isEmpty();
```

### isInteger()

Returns true if the value of the selector is an integer (whole number).

```
validate("#number")
  .isInteger();
```

### isLength(Number: length)

Returns true if the length of the selector value matches the supplied length.

```
validate("#code")
  .isLength(4);
```

### isMinLength(Number: length)

Returns true if the length of the selector value is greater than the supplied length.

```
validate("#password)
  .minLength(2);
```

### isMaxLength(Number: length)

Returns true if the length of the selector value is less than the supplied length.

```
validate("#password")
  .maxLength(24);
```

### isNot(any: value)

Returns true if the value of the selector is not the same as the supplied value.

```
validate("#phone")
  .isNot("999");
```

### isNotEmpty()

Returns true if the value of the selector is not empty.

```
validate("#some-field")
  .isNotEmpty();
```

### isNotRegEx(RegExp: expression)

Returns true if the value of the selector does not match the supplied expression.

```
validate("#value")
  .isNotRegEx(/^[0-9]{6}$/);
```

### isNumber()

Returns true if the value of the selector is any kind of number.

```
validate("#price")
  .isNumber();
```

### isPhone()

Returns true if the value of the selector is a correctly formatted phone number.

```
validate("#phone-number")
  .isPhone();
```

### isPostcode()

Returns true if the value of the selector is a correctly formatted postcode.

```
validate("#postode")
  .isPostcode();
```

### isRegEx(RegExp: expression)

Returns true if the value of the selector matches the supplied expression.

```
validate("#six-digits")
  .isRegEx(/^[0-9]{6}$/);
```

### isSameAs(String: selector)

Returns true if the value of the primary selector matches the value of the secondary selector.

```
validate("#email")
  .isSameAs("#email-confirmation");
```