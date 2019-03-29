import replace from 'replace-in-file'
import name from './package.json'
import colors from 'colors'

export default stringReplacer(options={})
{
    const extraOptions = options.options || {}
	
	return {
        name,
		writeBundle(e)
		{
			try 
			{
				const changes = replace.sync(
				{
					files: options.files,
					from: options.from,
					to: options.to,
					...extraOptions
				})

				console.log('[REPLACE]'.yellow, options.from, 'to'.yellow, options.to, changes);
			}
			catch(e)
			{
				console.log('[REPLACE][ERROR]'.red, options.from);
			}
		}
    }
};