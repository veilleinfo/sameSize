# sameSize

Set the height of each element to the tallest element

 * Step 1 : include jQuery

Example :

```javascript
 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

 * Step 2 : include the script function

Example :

```javascript
 <script src="./js/esSize.js"></script>
```

 * Step 3 : call the function on elements you want to resize

Example :

```javascript
$(function(){
  $('.elm-to-resize').sameSize();
});
```
Example :

```HTML
<body>
<div class="elm-to-resize"></div>
<div class="elm-to-resize"></div>
<div class="elm-to-resize"></div>
... any code you want ...
<div class="elm-to-resize"></div>
</body>
```
