# JSON cleaning

## Coderbyte challenge

Write a program to perform GET request on the route, [json-cleaning-api]('https://coderbyte.com/api/challenges/json/json-cleaning') and then clean the result object according to the following rules

1. Remove all keys that have value of N/A
2. Remove all empty strings
3. Remove all keys that have value of "-"

If any of the above appear in the array, remove the single item and console log your result as a string

## Example 1

> Input: {"name":{"first":"Daniel", "middle":N/A, "last":"Smith",}, "age":45}
> Output: {"name":{"first":"Daniel", "last":"Smith",}, "age":45}

## Example 2

> Input: {"name":{"first":"Robert","middle":"","last":"Smith"},"age":25,"DOB":"-","hobbies":["running","coding","-"],"education":{"highschool":"N\/A","college":"Yale"}}
> Output: {"name":{"first":"Robert","last":"Smith"},"age":25,"hobbies":["running","coding"],"education":{"college":"Yale"}}
