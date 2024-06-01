number = 42;
string_number = "42";

// Comparison using == (equal value, regardless of type)
result_equal = number == string_number;
console.log("number == string_number:", result_equal);  // Output: True (type coercion)

// Comparison using === (equal value and equal type)
result_strict = number === string_number;
console.log("number === string_number:", result_strict);  // Output: False (different types)

