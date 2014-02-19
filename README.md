# jquery.repeat #

[http://brm.io/jquery-repeat](http://brm.io/jquery-repeat)

_Repeat_ is for filling out mock-ups, making it easy to duplicate blocks of sample content.

That's it. See the [demo](http://brm.io/jquery-repeat-demo/), then _view the source_ to see what I mean.

## Ok, but why? ##

The main use is duplicating sample content in templates, examples, prototypes and demo pages but without needing a server or maintaining a mess of copy-pasted HTML.

Other uses include mocking UI actions that add content, such as dummying pagination or faking infinite loading content.

It's simple but I do this so often when prototyping front-ends, I wrapped it in a single function.

## Usage ##

	$(<selector>).repeat(n [, target, deepClone])

Where:
<br>`n` is the number of times to repeat the selection
<br>`target` (optional) where to append the clones, otherwise appends to parents
<br>`deepClone` (optional) whether to perform a [deep clone](http://api.jquery.com/clone/), default is false

Every selected element is then cloned `n` times and inserted into to their respective parent(s) after the last element in the selection, or `target` if specified

Returns: the newly generated clones (in case you need to bind them or something)

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