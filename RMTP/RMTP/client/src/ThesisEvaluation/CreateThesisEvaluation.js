import React, { Component } from 'react'
import axios from 'axios'

export default class CreateThesisEvaluation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            studentgroupid: "",
            marks: "",

        }
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { studentgroupid, marks } = this.state;
        const data = {
            studentgroupid: studentgroupid,
            marks: marks,


        }




        axios.post("/thesisevaluation/save", data).then((res) => {

            if (res.data.success) {
                alert("Thesis Evaluation Done!")
                this.setState(
                    {
                        studentgroupid: "",
                        supervisorname: "",
                        marks: "",


                    }
                )
            }
        })
    }


    render() {

        return (
            <div >
                <h1 style={{ fontSize: "30px", marginLeft: "22%", marginTop: "10px" }}><u>Add Final Thesis Marks</u></h1>
                <nav class="navbar b">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                        </a>
                    </div>
                </nav>


                <br />
                <div class="card" style={{ width: '50rem', marginLeft: '22%' }}>
                    <div class="card-body">
                        <form>
                            <br />
                            <br />
                            <br />
                            <br />
                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Student Group ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="studentgroupid"
                                    value={this.state.studentgroupid}
                                    onChange={this.handleInputChange} />

                            </div>

                            <div className="form-group" style={{ marginBottom: '15px' }}>
                                <label style={{ marginBottom: '5px' }}>Final Thesis Mark:</label>
                                <input type="text"
                                    className="form-control"
                                    name="marks"
                                    value={this.state.marks}
                                    onChange={this.handleInputChange} />

                            </div>
                        </form>
                        <br></br>
                        <center>
                            <a className="btn btn-warning btn-lg text-dark" type="submit" style={{ marginTop: '15px' }} onClick={this.onSubmit}>
                                <i className="far fa-check-square" ></i>
                                &nbsp; save
                            </a>
                        </center>


                    </div>
                </div>
                <br />
                <br />
                <br />

            </div>

        )
    }
}
