import React, {Component} from 'react';
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {CommonGet, CommonPost} from "../config";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";
import StarsRating from "stars-rating/dist/stars-rating";


export default class Game extends Component{
    constructor(props) {
        super(props);
        this.state = {
            rating:'',
            game :[],

            reviews:[],
            reviewList:[],

            ratingList:[],
            specificRatingList:[],

            userName:'',
            comment:''
        }
    }

    componentDidMount() {
        let id=  sessionStorage.getItem("gameID:");
        console.log(id);
        CommonGet('game',id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    game:json
                })
                console.log(this.state.game);
            })

        this.listReviews();
        this.getRatings();
    }

    getRatings(){
        let id=  sessionStorage.getItem("gameID:");
        CommonGet('rating','')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    ratingList:json
                })

                const sList = this.state.ratingList;
                const specificRatList = sList.filter(game => game.gameId === id);
                this.setState({
                    specificRatingList : specificRatList,
                })
                console.log("Specific Game Rating: ",this.state.specificRatingList )
            })
    }

    countAverage(){
        let total = 0;
        let avg = 0 ;
        const count = this.state.specificRatingList.length;
        this.state.specificRatingList.map((element) => {
                total = total + element.rating;
            }
        )

        avg = total / count ;
        let roundedAvg = avg.toFixed(2);
        return roundedAvg;
    }

    listReviews(){
        let id=  sessionStorage.getItem("gameID:");
        CommonGet('review','')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    reviews:json
                })
                const list = this.state.reviews;
                const speList = list.filter(game => game.gameId === id);
                this.setState({
                    reviewList:speList,
                })
                console.log('Reviews: ',this.state.reviews);
            })
    }

    handleOnChange = (event) => {
        const state = this.state
        state[event.target.name] = event.target.value;
        this.setState(state);

    }

    handleOnClick = (event) => {
        event.preventDefault();
        let gid=  sessionStorage.getItem("gameID:");
        const {gameId = gid, userName, comment} = this.state;

        if(userName === ""){
            alert("User Name Cannot be Empty!");
        }else if(comment === ""){
            alert("Comment Field Cannot be Empty!");
        }

        CommonPost('review', {gameId,userName,comment})
            .then(res => res.json())
            .then(json => {
                this.componentDidMount();
            });

        this.setState({
            userName:'',
            comment:''
        })
    }
     ratingChanged = (newRating) => {
         let id=  sessionStorage.getItem("gameID:");

         const formData={
             rating : newRating,
             gameId : id
         }

         CommonPost('rating',formData )
             .then(res => res.json())
             .then(json => {
                 console.log(json);
                 this.componentDidMount();
                 alert("You have Rate to the Game.");
             });

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
            height:'400px',
            width:'400px'
        }

        const contentAlign = {
            'text-align': 'justify',
            padding:'10px',
            fontSize:'20px'
        }

        return(
            <div className="fullDiv">
                <div className="middlePart" style={detailsDivStyle}>

                    <div className="topHeader">
                        <h1 style={{margin:'2px'}}>{this.state.game.name}</h1>
                        <h4>Average Rating : {this.countAverage()}</h4>
                    </div>
                    <hr style={hrStyle} />
                    <div className="gameImage">
                        <img style = {imageSize} src = {this.state.game.imageRef}/>
                    </div>

                    <div className="Description">
                        <h4 style={contentAlign}>{this.state.game.description}</h4>
                    </div>

                    <div className="linkToTheGame">
                        <h4>For More Details:- <a href={this.state.game.link}>Click Here</a></h4>
                    </div>

                    <div className="addRating" style={{display:'inline-block'}}>
                        <h4 style={{margin:'0px'}}>Rate the Game: </h4>
                        <StarsRating
                            count={5}
                            onChange={this.ratingChanged}
                            value={this.state.rating}
                            size={40}
                            color2={'#ffd700'} />
                    </div>
                    <hr style={hrStyle} />


                    <div className="AllComments">
                        <h5><u>All Comments</u></h5>
                        {this.state.reviewList.map((element) =>
                            <Card style={{margin:'10px'}} border= "info" key = {element.id}>
                                <Card.Header>{element.userName}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        {element.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </div>

                    <hr style={hrStyle} />
                    <div className="addingComments">
                        <div className='row'>
                            <div className="col-lg-7" style={{  float: 'none',
                                margin: '10px auto'}}>
                                <Form>
                                    <Form.Group controlId="UserNameTxt">
                                        <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>User :</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Name" name = "userName" onChange = {this.handleOnChange} value = {this.state.userName} required/>
                                    </Form.Group>

                                    <Form.Group controlId="commentTxt">
                                        <Form.Label style={{float:'left', fontSize:'20px' ,fontFamily:'Square Sans Serif'}}>Comment :</Form.Label>
                                        <Form.Control as="textarea" rows="10"  placeholder="Enter Comment" name = "comment" onChange = {this.handleOnChange} value = {this.state.comment} required/>
                                    </Form.Group>

                                    <Button  onClick={this.handleOnClick} variant="success" type="submit" >
                                        Add Comment
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
