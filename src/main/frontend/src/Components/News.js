import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import {CommonGet} from "../config";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../newsCss.css';

export default class News extends Component{
    constructor(props) {
        super(props);
        this.state = {
            News : []
        }
    }

    componentDidMount() {
        this.listNews();
    }

    navGetID = (id, event) =>{
        const x = id.toString();
        window.sessionStorage.setItem("NewsID:",x);
        this.props.history.push('/singleNews');
    }

    listNews(){
         CommonGet('news','')
            .then(res => res.json())
            .then(json => {
                this.setState({
                        News: json
                    }
                )
                console.log(this.state.News)
            })

    }

    render() {
        const detailsDivStyle = {
            background : 'white',
            width : '65%',
            display:'inline-block',
            'marginTop':'20px',
            paddingBottom:'20px'
        }

        const Cursor = {
            cursor:'pointer'
        }

        return(
            <div className="middlePart" style={detailsDivStyle}>

                {this.state.News.map((element,index) =>
                    <Card border="dark" className = "newsCard"  key = {element.id}>
                        <Card.Header as="h5">News {index + 1}</Card.Header>
                        <Card.Body className = "newsCardBody" style = {Cursor} onClick = {(event) => this.navGetID(element.id, event)}>
                            <Card.Title>{element.newsTitle}</Card.Title>
                        </Card.Body>
                    </Card>
                )}

            </div>
        );
    }
}
