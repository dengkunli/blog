title: JS Best Practices for Declaring Loop Variables
date: 2016-02-21 19:56:49
categories:
- JavaScript
- Best Practices
tags:
- JavaScript
- Best Practices
---
There’are 3 common styles for declaring loop variables and they each has pros and cons, let’s talk about them one by one.

### In the top
``` javascript
function loop() {
	var i;
	// something else may happen here
	for (i=0; i<5; i++) {
		// do sth
	}
}
```
We can declare the loop variable in the top of our functions. This style makes the scope clear and unambiguous. The only shortcoming is that the loop variables and the loop might be too far way.

### In the declaration block of loop
``` javascript
function loop() {
	for (var i=0; i<5; i++) {
		// do sth
	}
}
```
This style is ok and works fine. The problem is that it does not conform with the block-scope design of JavaScript, because the <code>i</code> actually survive outside the loop.

### Encapsulate the loop with IIFE
IIFE = Immediately-Invoked Function Expression
``` javascript
function loop() {  
	(function(){
		for (var i=0; i<5; i++) {
			// do sth
		}
	})()
}
```
It has 2 shortcomings. First it’s long and doesn’t look clean. Second it impacts the performance although it’s very little indeed.
