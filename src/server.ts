//LISTEN
import app from './app';

app.listen(app.get('port'), () => {
	console.log('App is running at http://locahost:%d in %s mode', app.get('port'), app.get('env'));

	console.log(' Press CTRL-c to stop\n');
});
