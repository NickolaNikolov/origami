import {Redirect, useHistory, Switch, Route} from 'react-router-dom';

const About = ({
    match
}) => {
    //const history = useHistory();
    //if(Math.random() > 0.5) {
    //    return <Redirect to="/"/>
    //  history.push('/');

    //  return null;
    //}

    return (
        <main className="main-container">
            <h1>About {match.params.name} Page</h1>

            <Switch>
                <Route path="/about/pesho">
                    <h2>Pesho is the best!!!</h2>
                </Route>
            </Switch>
        </main>
    );
}

export default About;