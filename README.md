# jquery.repeat #

[http://brm.io/jquery-repeat](http://brm.io/jquery-repeat)

For filling out mock-ups, making it easy to duplicate blocks of sample content during development.

## Demo ##

See the [demo](http://brm.io/jquery-repeat-demo/).

## Usage ##

	$(<selector>).repeat(n [, target, deepClone])

Where:
<br>`n` is the number of times to repeat the selection
<br>`target` (optional) where to append the clones, otherwise appends to parents
<br>`deepClone` (optional) whether to perform a [deep clone](http://api.jquery.com/clone/), default is false

Every selected element is then cloned `n` times and inserted into to their respective parent(s) after the last element in the selection, or `target` if specified

Returns: the newly generated clones (for example, if you need to bind them)

## Example ##

	$('ul li').repeat(2);

will create 2 clones of every `li` element and append to their respective parent elements

	<ul>
		<li>Sample 1</li>
		<li>Sample 2</li>
	</ul>
	<ul>
		<li>Sample 3</li>
		<li>Sample 4</li>
	</ul>

using the above example, would become

	<ul>
		<li>Sample 1</li>
		<li>Sample 2</li>
		<li>Sample 1</li>
		<li>Sample 2</li>
		<li>Sample 1</li>
		<li>Sample 2</li>
	</ul>
	<ul>
		<li>Sample 3</li>
		<li>Sample 4</li>
		<li>Sample 3</li>
		<li>Sample 4</li>
		<li>Sample 3</li>
		<li>Sample 4</li>
	</ul>

See the included `test.html` for example usage
