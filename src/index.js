import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/customclass.css';
import axios from 'axios';



class Login extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            user_name: props.user_name
        }

        this.signInUser = this.signInUser.bind(this);

    }
    signInUser(e) {
        const obj = {

        }
        console.log(e.target.value);
        axios.post('http://localhost:4000/login/add', obj)
            .then(res => console.log(res.data));

        this.setState({
            user_name: 'Bikash'
        })

    }
    render() {
        const user = this.state;
        console.log(user.user_name)
        if (!user.user_name) {

            return (
                <div>
                    <button type="submit" class="btn btn-danger navbar-btn login-btn " onClick={this.signInUser} >Login</button>
                </div>
            );
        }
        else {
            return (
                <div>
                    Hi {this.state.user_name}
                </div>
            );
        }
    }

}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.user_id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.contact}
                </td>
                <td>
                    {this.props.obj.privacy_type}
                </td>
                <td>
                    {this.props.obj.rating}
                </td>
                <td>
                    <button className="btn btn-primary">reach out</button>
                </td>
                <td>
                    <button className="btn btn-danger">show details</button>
                </td>
            </tr>
        );
    }
}



class Director extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            directorInfo: []
        }
        console.log('Inside Director');
        console.log(this.props.showCategory);
        this.backtoCategories = this.backtoCategories.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/directorInfo')
            .then(response => {
                this.setState({ directorInfo: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.directorInfo.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }

    render() {
        return (
            <div>

                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                {/* <BacktoCategories showCategory={this.props.showCategory}/> */}

                <br></br>
               <br></br>
               <br></br>
                <b>Here is the director info you are looking for :</b>

                {/* <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>user_id</th>
                <th>name</th>
                <th>email</th>
                <th>conact</th>
                <th>privacy_type</th>
                <th>rating</th>
                <th colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              { this.tabRow() }
            </tbody>
          </table> 
          
          
          
          */
          
          }
          {this.state.directorInfo.map((director,i) => (

                <div>
                       
                   
          
           <div class="row"></div>
               <br></br>
               <br></br>
               <br></br>
                <div class="row">
                    <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" rel="stylesheet" />
                </div>
                <div class="row">
                    <div class="col-sm ">
                        <img src={require('./img/director.jpg')} width="100" height="100" class="image--cover" />
                    </div>
                    <div class="col-sm">
                        <div class="well profile">
                            <h2> {director.name}</h2>
                            <p><strong>About: </strong> </p>
                            <p><strong>Email : </strong> {director.email}</p>
                            <p><strong>Contact :</strong> {director.contact}</p>
                            <p><strong>Skills: </strong>
                                <span class="tags"></span>
                                <span class="tags"></span>
                                <span class="tags"></span>
                                <span class="tags"></span>
                            </p>
                    </div>
                    </div>
                    <div class="col-sm">
                    <figcaption class="ratings">
                                <p><strong>Ratings</strong>
                                                    <a href="#">
                                        <span class="fa fa-star"></span>
                                    </a>
                                    <a href="#">
                                        <span class="fa fa-star"></span>
                                    </a>
                                    <a href="#">
                                        <span class="fa fa-star"></span>
                                    </a>
                                    <a href="#">
                                        <span class="fa fa-star"></span>
                                    </a>
                                    <a href="#">
                                        <span class="fa fa-star-o"></span>
                                    </a>
                                </p>
                            </figcaption>
                    </div>
                            <div class="col-sm ">
                                    <h2><strong> 20,7K </strong></h2>
                                    <p><small>Followers</small></p>
                                    <button class="btn btn-success "><span class="fa fa-plus-circle"></span> Follow </button>
                                    </div>
                                <div class="col-sm">
                                    <h2><strong>245</strong></h2>
                                    <p><small>Following</small></p>
                                    <button class="btn btn-info "><span class="fa fa-user"></span> View Profile </button>
                                </div>
                        </div>

                        </div>
                    ))}
                        
                </div>

                

        );

    }
}


class Screenplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Screenplay');
        this.backtoCategories = this.backtoCategories.bind(this);
    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }

    render() {
        return (

            <div>
                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                Here is the Screenplay info you are looking for
                </div>
        );

    }
}


class Production extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Production');
        this.backtoCategories = this.backtoCategories.bind(this);
    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }

    render() {
        return (
            <div>

                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                Here is the Production info you are looking for
                </div>
        );

    }
}


class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Editor');
        this.backtoCategories = this.backtoCategories.bind(this);

    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }
    render() {
        return (
            <div>

                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                Here is the Editor info you are looking for
                </div>
        );

    }
}


class Cinematographer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Cinematographer');
        this.backtoCategories = this.backtoCategories.bind(this);
    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>

                Here is the Cinematographer info you are looking for
                </div>
        );

    }
}


class Actors extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Actors');
        this.backtoCategories = this.backtoCategories.bind(this);
    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }
    render() {
        return (
            <div>
                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                Here is the Actors info you are looking for
                </div>
        );

    }
}


class Sound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Sound');
        this.backtoCategories = this.backtoCategories.bind(this);

    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                Here is the Sound info you are looking for
                </div>
        );

    }
}


class Logistics extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: false
        }
        console.log('Inside Logistics');
        this.backtoCategories = this.backtoCategories.bind(this);
    }

    backtoCategories(e) {
        e.preventDefault();
        this.setState({ showCategory: 'all' });
        this.props.onBack();
    }

    render() {
        return (
            <div>
                <div>
                    <button type="button" class="btn btn-success btn-lg float-right" onClick={this.backtoCategories}>Back to Categories</button>
                </div>
                Here is the Logistics info you are looking for
                </div>
        );

    }
}



class App extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            user_name: null,
            showCategory: 'all'
        }

        this.directorInfo = this.directorInfo.bind(this);
        this.screenPlayInfo = this.screenPlayInfo.bind(this);
        this.soundInfo = this.soundInfo.bind(this);
        this.logisticsInfo = this.logisticsInfo.bind(this);
        this.productionInfo = this.productionInfo.bind(this);
        this.actorsInfo = this.actorsInfo.bind(this);
        this.cinematographyInfo = this.cinematographyInfo.bind(this);
        this.editorInfo = this.editorInfo.bind(this);

    }

    directorInfo(e) {
        e.preventDefault();
        console.log("Director info" + this.state.showCategory);

        this.setState({ showCategory: 'director' });

    }

    screenPlayInfo(e) {
        e.preventDefault();
        console.log("Director info" + this.state.showCategory);

        this.setState({ showCategory: 'screenplay' });

    }

    cinematographyInfo(e) {
        e.preventDefault();
        console.log("cinematography info" + this.state.showCategory);

        this.setState({ showCategory: 'cinematography' });

    }


    soundInfo(e) {
        e.preventDefault();
        console.log("Sound info" + this.state.showCategory);

        this.setState({ showCategory: 'sound' });

    }


    actorsInfo(e) {
        e.preventDefault();
        console.log("Actor info" + this.state.showCategory);

        this.setState({ showCategory: 'actors' });

    }


    logisticsInfo(e) {
        e.preventDefault();
        console.log("logistics info" + this.state.showCategory);

        this.setState({ showCategory: 'logistics' });

    }


    productionInfo(e) {
        e.preventDefault();
        console.log("Production info" + this.state.showCategory);

        this.setState({ showCategory: 'production' });

    }


    editorInfo(e) {
        e.preventDefault();
        console.log("editor info" + this.state.showCategory);
        this.setState({ showCategory: 'editor' });

    }


    render() {



        return (

            <div class="container-fluid">

                <div className="App">
                    <div className="jumbotron">
                        <div className="navbar-brand">
                            <h1>Hire an Artist</h1>
                            <img src={require('./img/filmindustry.png')} className="img-responsive" width="200" height="200" />
                            <p classname="font-weight-bolder">One stop solution for content creators </p><br></br>
                        </div>
                        <div className="float-right">
                            <Login user_name={this.state.user_name} />
                        </div>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-sm">
                        <h3 data-qa="title" class="pl-10 mb-20 mb-sm-30">Choose a category to get started:</h3>
                    </div>
                    <div className="col-sm">
                        <form class="form-inline active-pink-3 active-pink-4">
                            <i class="fas fa-search" aria-hidden="true"></i>
                            <img src={require('./img/search.png')} class="img-responsive" width="40" height="40" /> <br></br>
                            <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search  for other profiles" aria-label="Search" />
                        </form>
                    </div>
                </div>

                {this.state.showCategory === 'all' ?

                    <div>



                        <div className="row mt-4">

                            <div className="col-sm">
                                <img src={require('./img/clapperboard.png')} class="img-responsive" width="80" height="80" /> <br></br>
                                <button type="button" class="btn btn-success btn-lg " onClick={this.directorInfo} >Director </button>
                            </div>
                            <div className="col-sm">
                                <img src={require('./img/script.png')} class="img-responsive" width="80" height="80" /> <br></br>
                                <button type="button" class="btn btn-success btn-lg " onClick={this.screenPlayInfo}>Screenplay</button>
                            </div>
                            <div className="col-sm">
                                <img src={require('./img/videocam.png')} class="img-responsive" width="100" height="80" /> <br></br>
                                <button type="button" class="btn btn-warning btn-lg " onClick={this.cinematographyInfo}>Cinematographer</button>
                            </div>
                            <div className="col-sm">

                                <img src={require('./img/sound.png')} class="img-responsive" width="80" height="80" /> <br></br>
                                <button type="button" class="btn btn-secondary btn-lg " onClick={this.soundInfo}>Sound</button>

                            </div>
                        </div>

                        <div className="row mt-4" />

                        <div className="row mt-4" />

                        <div className="row mt-4">
                            <div className="col-sm">
                                <img src={require('./img/editor.png')} class="img-responsive" width="80" height="80" /> <br></br>
                                <button type="button" class="btn btn-dark btn-lg " onClick={this.editorInfo}>Editor</button>
                            </div>
                            <div className="col-sm">
                                <img src={require('./img/production.png')} class="img-responsive" width="80" height="80" /> <br></br>
                                <button type="button" class="btn btn-dark btn-lg " onClick={this.productionInfo}>Production</button>
                            </div>
                            <div className="col-sm">
                                <img src={require('./img/acting.png')} class="img-responsive" width="80" height="80" /> <br></br>
                                <button type="button" class="btn btn-danger btn-lg " onClick={this.actorsInfo}>Actors</button>
                            </div>
                            <div className="col-sm">
                                <img src={require('./img/logistics.png')} class="img-responsive" width="100" height="80" /> <br></br>
                                <button type="button" class="btn btn-primary btn-lg " onClick={this.logisticsInfo}>Logistics</button>
                            </div>
                        </div>

                    </div>
                    : this.state.showCategory === 'director' ?
                        <div>
                            <Director showCategory='director' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                        </div>

                        : this.state.showCategory === 'screenplay' ?
                            <div>
                                <Screenplay showCategory='screenplay' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                            </div>
                            : this.state.showCategory === 'actors' ?
                                <div>
                                    <Actors showCategory='actors' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                                </div>
                                : this.state.showCategory === 'production' ?
                                    <div>
                                        <Production showCategory='production' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                                    </div>
                                    : this.state.showCategory === 'logistics' ?
                                        <div>
                                            <Logistics showCategory='logistics' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                                        </div>
                                        : this.state.showCategory === 'sound' ?
                                            <div>
                                                <Sound showCategory='sound' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                                            </div>
                                            : this.state.showCategory === 'cinematography' ?
                                                <div>
                                                    <Cinematographer showCategory='cinematography' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                                                </div>
                                                : this.state.showCategory === 'editor' ?
                                                    <div>
                                                        <Editor showCategory='editor' onBack={() => { this.setState({ showCategory: 'all' }) }} />
                                                    </div>
                                                    : null
                }

            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

