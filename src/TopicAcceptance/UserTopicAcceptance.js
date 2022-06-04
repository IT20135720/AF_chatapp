import React, { Component } from 'react';
import axios from 'axios';

export default class UserTopicAcceptance extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.retrivePosts();
    }

    retrivePosts() {
        axios.get("/topicacceptance").then(res => {
            if (res.data.success) {
                this.setState({
                    posts: res.data.existingPosts
                });
                console.log(this.state.posts)
            }
        })
    }



    filterData(posts, searchKey) {

        const result = posts.filter((post) =>
            post.studentgroupid.toLowerCase().includes(searchKey) ||
            post.topic.toLowerCase().includes(searchKey) ||
            post.status.toLowerCase().includes(searchKey)

        )
        this.setState({ posts: result })
    }

    handleSearchArea = (e) => {
        const searchKey = e.currentTarget.value;

        axios.get("/topicacceptance").then(res => {
            if (res.data.success) {
                this.filterData(res.data.existingPosts, searchKey)
            }
        });

    }

    render() {
        return (

            <div>
                <h1 style={{ fontSize: "30px", marginLeft: "4%", marginTop: "10px" }}><u>Topic Status</u></h1>
                <nav class="navbar b">
                    <div class="container">
                        <form class="d-flex nav1 " role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSearchArea}></input>
                            &nbsp;
                            <button class="btn btn-outline-warning " type="submit">
                                Search</button>
                        </form>
                        <a class="navbar-brand" href="#">
                        </a>
                        <div >
                            <button className="btn btn-success" ><a href="/dashboard1" style={{ textDecoration: 'none', color: 'white' }}>Dashboad</a> </button>
                        </div>
                    </div>
                </nav>

                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">Student Group ID</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map((posts) => (
                            <tr key={posts._id}>

                                <td>{posts.studentgroupid}</td>
                                <td>{posts.topic}</td>
                                <td>{posts.status}</td>


                            </tr>

                        ))}
                    </tbody>

                </table>
                <br />

                <a style={{ marginLeft: "30px" }} class="btn btn-primary" href="/chatapp"  >
                    <i class="fas fa-comment"></i> &nbsp; Chat Corner
                </a>


                <br />
                <br />
                <br />
                <br />
            </div>
        )
    }
}