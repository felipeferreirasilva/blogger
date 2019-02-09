import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Posts from '../components/Posts/Posts'
import NewPost from '../components/Posts/NewPost'
import Signin from '../components/User/Signin'
import Signup from '../components/User/Signup'
import Logout from '../components/User/Logout'
import UpdatePost from '../components/Posts/UpdatePost'
import ViewPost from '../components/Posts/ViewPost'

class Routes extends Component{
    render(){
        return(
            <div>
                <Route path="/" exact component={Posts}/>
                <Route path="/posts/new" component={NewPost}/>
                <Route path="/posts/view/:id" component={ViewPost}/>
                <Route path="/posts/update/:id" component={UpdatePost}/>
                <Route path="/users/signin" component={Signin}/>
                <Route path="/users/signup" component={Signup}/>
                <Route path="/users/logout" component={Logout}/>
            </div>
        )
    }
}

export default Routes