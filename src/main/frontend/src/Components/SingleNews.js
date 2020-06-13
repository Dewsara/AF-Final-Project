import React, {Component} from 'react';

import {CommonGet} from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class SingleNews extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sNews : []
        }
    }

    componentDidMount() {
        let id=  sessionStorage.getItem("NewsID:");
        console.log("Session ID: ",id);
        CommonGet('news',id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    sNews:json
                })
                console.log(this.state.sNews);
            })
    }

    render() {

        const detailsDivStyle = {
            background : 'white',
            width : '65%',
            display:'inline-block',
            'marginTop':'20px'
        }

        const hrStyle = {
            'border': '3px solid gray',
            'border-radius': '5px'
        }

        const imageSize = {
            height:'300px',
            width:'400px'
        }

        return(
            <div className="fullDiv">
                <div className="middlePart" style={detailsDivStyle}>

                    <div className="topHeader">
                        <h2 style={{paddingTop:'10px',fontSize:'40px'}}>{this.state.sNews.newsTitle}</h2>
                    </div>

                    <hr style={hrStyle} />

                    <div className="newsImage">
                        <img style = {imageSize} src={this.state.sNews.newsImg} />
                    </div>

                    <hr style={hrStyle} />
                    <div className="Description">
                        <h3 style={{fontSize:"22px"}}>{this.state.sNews.newsDetails}</h3>
                    </div>

                    <div className="linkToTheGame">
                        <h4>For More Details:- <a href={this.state.sNews.newsLink}>Click Here</a></h4>
                    </div>

                </div>
            </div>
        );
    }
}
