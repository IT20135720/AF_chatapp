import React, { Component } from 'react';
import './panel.css'


export default class PanelMemberDashboard extends Component {
    render() {
        return (
            <div>
                
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
                    </div>
                </nav>

                <nav class="navbar navbar-expand-lg ls ">
                
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse ls1" id="navbarNav">
                          <div>
                         <img src="https://media.istockphoto.com/photos/mature-professor-explaining-the-lecture-to-his-students-while-using-picture-id1060398632?k=6&m=1060398632&s=170667a&w=0&h=QxWjFwyqObgWBNK_iSd-m-SNlyEfefMJPmXi7XlgzxA="/>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-lg btn-success"><a href="/evaluateTopics" style={{ textDecoration: 'none', color: 'white' }}>Evaluate Student Topics</a> </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-lg btn-success"><a href="/alpanel" style={{ textDecoration: 'none', color: 'white' }}>Allocated Panels</a> </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-lg btn-success"><a href="/spresnt" style={{ textDecoration: 'none', color: 'white' }}>Students Presentations</a> </button>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="btn btn-lg btn-success"><a href="/presentationPanels" style={{ textDecoration: 'none', color: 'white' }}>Presentations' Panel Members</a> </button>

 

                        </div>
                    </div>
                </nav>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
}