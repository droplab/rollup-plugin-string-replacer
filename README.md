# rollup-plugin-string-replacer
A rollup plugin wrapper for the "replace-in-file" node package. Will run after the bundle is generated to make honor any async file operations.

# Usage
```
import stringReplacer from 'rollup-plugin-string-replacer'

explort default {
	input: 'src/app.js',
	output: 
	{
		...
	},
	plugins: 
	[
		...,

		stringReplacer(
		{
			files: 	file (string|array|glob),
			from: 	text (string|array|regex|function),
			to: 	text (string|array|function),
			// passthru options for replace-in-file
			options: {} 
		}),

		...
	]
}
```
# More Info
See replace-in-file documentation for more usage details, https://github.com/adamreisnz/replace-in-file
