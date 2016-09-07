![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - jQuery Intro

---

##Agenda

*	Intro To Programming Review
*	Intro To jQuery
*	jQuery Basics
	*	File Structure
	*	Syntax
*	Adding Interactivity

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##Color Scheme Switcher

---

##jQuery

jQuery __is__ JavaScript

---

##jQuery

*	jquery.com - A JavaScript library that makes DOM manipulation simple.

* Written by John Resig in 2005.

* jQuery's Motto: 'Write Less, Do More'

*	"Cross browser" - works the same in all browsers.

*	Allows:
	*	Document traversal
	*	CSS Manipulation
	*	Event Handling
	*	Animation
	*	and more!

	---

##jQuery

Makes working with JS easier:

*	HTML / CSS manipulation

* Event handling (click events)

* Animations

* AJAX

---

##jQuery - Why Do We Use It?

Pure JavaScript:

http://codepen.io/josephjbliss/pen/uqdCw

jQuery:

http://codepen.io/josephjbliss/pen/jLtfC

---

##jQuery In Two Steps

1) Use jQuery's powerful CSS selector to select which HTML elements you want to manipulate

```
$('#some-el')
```

2) Call jQuery methods on the above selector:

```
$('#some-el').css('background', 'blue');
```

---

##jQuery Syntax

![jQuery Syntax](../../img/jquery-syntax.jpg)

---

##jQuery CSS Selectors

$() - the almighty selector!

* CSS selectors query HTML for certain elements

* Similar to document.getElementById()

* Use the same selectors you write in CSS!

```
$('div') // select all <div>'s
$('h2') // select all <h2>'s
$('p a') // select all <a>'s inside of all <p>'s
$('p, a') // select all <p>'s and <a>'s
```

---

##jQuery CSS Selectors - IDs and Classes

Fetch ID's using the # (hashtag):

```
$('#someId')
$('#someId a')
```

Fetch Classes using the . (period):

```
$('.someClass')
$('.someClass a')
```

Using ```$('.someClass')``` returns ALL of the HTML elements with a class of ```.someClass```

---

##jQuery Methods - HTML Manipulation

.html()

Will return any HTML inside the selected element:

```
$('#someId').html()
```

.html('< h1 >a heading</ h1 >')

Inserts and overwrites the HTML inside the selected element:

```
$('#someId').html('<h1>a heading</h1>')
```

---

##jQuery Methods - HTML Manipulation

.text()

Returns any text inside the selected element

```
$('#someId').text()
```

.text('some string')

Overwrites any text (or HTML!) inside the selected element

```
$('#someId').text('some text!')
```

---

##Codealong

http://codepen.io/nickgrace/pen/XKLOYa?editors=101

---

##jQuery Methods - HTML Manipulation

Other helpful methods:

.css();
```
$('#some-el').css('background', 'blue');
```

.toggleClass();
```
$("li").toggleClass("redForm");
```

.hide();
```
$('#answer1').hide();
```

.slideToggle();
```
$('#answer3').slideToggle();
```

---

##jQuery Click Event - Named Functions

JavaScript

```
	document.getElementById('someId').onclick = someFunction

	function someFunction() {
		// do something
	}
```

jQuery

```
	$('#someId').click(someFunction)

	function someFunction() {
		// do something
	}
```

---

##jQuery Click Event - Anonymous Functions

JavaScript:

```
	document.getElementById('someId').onclick = function() {
		// do something
	}
```

jQuery

```
	$('#someId').click(function() {
		// do something
	})
```

---

##Codealong Part 2

http://codepen.io/nickgrace/pen/XKLOYa?editors=101

---

##Using jQuery - $(document).ready()

Best practice is to write jQuery using the $(document).ready() function:

```
	$(document).ready(function() {

		// WRITE OTHER CODE HERE!!

	})
```

* Tells jQuery to wait until HTML/CSS have loaded before executing any JavaScript

* Only execute code once the document (DOM) is ready

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##jQuery Traffic Light

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Syntax Drill  

---

![GeneralAssemb.ly](../../img/icons/code_along.png)
##FAQs

---

##jQuery

Adding jQuery to your website

```
<script src="js/jquery-1.8.3.min.js">&lt;/script>
```

```
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">&lt;/script>
```

---

##jQuery

Resources:

http://api.jquery.com

https://oscarotero.com/jquery/
