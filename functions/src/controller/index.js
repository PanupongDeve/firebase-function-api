import Home from './Home';
import Cats from './Cats';
import Dogs from './Dogs';
import Boys from './Boys';

export default (app) => {
    app.use('/', Home); 
    app.use('/cats', Cats);
    app.use('/dogs', Dogs);
    app.use('/boys', Dogs);
}

