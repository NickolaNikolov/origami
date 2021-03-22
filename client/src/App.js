import {Component} from 'react';
import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';

import * as postService from './services/postService';

import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';

import style from './App.module.css';

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />

//       <div className={style.container}>
//         <Menu />

//         <Main />
//       </div>
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      selectedPost: null
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({posts})
      });
  }

  onMenuItemClick(id) {
    this.setState({selectedPost: id})
  }

  getPosts() {
      if(!this.state.selectedPost) {
          return this.state.posts;
      } else {
          return [this.state.posts.find(x => x.id == this.state.selectedPost)];
        }
  }

  render() {
    return (
    <div className={style.app}>
        <Header />

      <div className={style.container}>
        <Menu onMenuItemClick={this.onMenuItemClick.bind(this)}/>
        <Switch>
            <Route path="/" exact>
                <Main posts={this.getPosts()}/>
            </Route> 
            <Route path="/about/:name" component={About} />
            <Route path="/contact-us" component={ContactUs} />
            <Route render={() => <h1>Error Page</h1>} />
        </Switch>        

      </div>
    </div>
    );
  }
}

export default App;
