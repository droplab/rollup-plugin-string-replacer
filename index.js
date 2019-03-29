const replace = require('replace-in-file');
const name = require('./package.json');

require('colors');

module.exports = function stringReplacer(_options={})
{
	const extraOptions = _options.options || {};
	const options = Object.assign(_options,extraOptions);
	
	return {
		name,
		generateBundle()
		{
			try 
			{
				const changes = replace.sync(options);
				console.log('[REPLACE]'.yellow, options.from, 'to'.yellow, options.to, changes);
			}
			catch(e)
			{
				console.log('[REPLACE][ERROR]'.red, options.from);
			}
		}
	}
};