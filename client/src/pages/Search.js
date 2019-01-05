import React, {Component} from "react";
import ContentContainer from "../components/ContentContainer";
import ContentCard from "../components/contentcard";
import SearchBar from "../components/searchbar";
import SubmitButton from "../components/submitbutton"
import API from "../utils/API"

class Search extends Component {
    state = {
        resultArray: [],
        input:""
    }
    //function to handle API queries to the google books database
    apiQuery = (query) => {
        API.searchBookTitle(query)
        .then(res => this.updateResults(res.data))
    }

    updateResults(data){
        console.log(data)
        this.setState({resultArray: data.items})
    }

    componentDidMount(){
        console.log("ready")
    }

    handleChange(event) {
        this.setState({input: event.target.value})
        console.log(this.state.input)
    }

    handleClick() {
        this.apiQuery(this.state.input);
    }

    searchBook(){

    }     
    render(){
        return(
        <div className="container">
            <SearchBar
            value={this.state.input}
            handleChange={this.handleChange.bind(this)}
            >
   
            </SearchBar>
            <SubmitButton
                handleClick={this.handleClick.bind(this)}
            />
            <ContentContainer>
                {this.state.resultArray.map(result=>(
                    <ContentCard/>
                ))}
            </ContentContainer>
        </div>
        )

    }

}

export default Search;