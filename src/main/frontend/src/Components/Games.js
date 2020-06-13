import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {CommonGet} from "../config";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from "react-bootstrap/CardColumns";

export default class Games extends Component{
    constructor(props) {
        super(props);
        this.state = {
            games:[]
        }
    }

    componentDidMount() {
        this.listGames();
    }

    navGetID = (id, event) =>{
        const x = id.toString();
        window.sessionStorage.setItem("gameID:",x);
        this.props.history.push('/game');
    }

    listGames(){
        CommonGet('game','')
            .then(res => res.json())
            .then(json => {
                this.setState({
                        games: json
                    }
                )
                console.log(this.state.games)
            })
    }

    render() {

        const imageSize = {
            height:'250px',
            width : '250px'
        }

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

        return(
            <div className="middlePart" style={detailsDivStyle}>
                <div>
                    <h2 style={{paddingTop:'10px'}}>Games</h2>
                </div>

                <hr style={hrStyle} />

                <CardColumns style = {{padding:"10px"}}>
                    {this.state.games.map((element) =>
                        <Card key = {element.id} >
                            <Card.Img style={imageSize} variant="top" src={element.imageRef} />
                            <Card.Footer><Button  onClick = {(event) => this.navGetID(element.id, event)}>{element.name} </Button>
                            </Card.Footer>
                        </Card>

                )}
                </CardColumns>
            </div>
        );
    }
}
