import _ from 'lodash';
import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  showDetailById(id){
    this.props.history.push('/posts/'+id)
  }

  renderPosts(){
    return _.map(this.props.posts,post=>{
      return (
        <li className="list-group-item" key={post._id}>
          {post.title}
          <button className="btn btn-primary" onClick={this.showDetailById.bind(this,post._id)}>Show detail</button>
        </li>
      )
    })
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Post new
        </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {posts:state.posts};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
