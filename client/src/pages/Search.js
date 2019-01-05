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
    apiQuery = (query) => {
        API.searchBookTitle(query)
        .then(res =>
            console.log(res)
            )
    }

    componentDidMount(){
        this.apiQuery();
    }

    handleChange(event) {
        this.setState({input: event.target.value})
        console.log(this.state.input)
    }

    handleClick() {
        console.log(this.state.input);
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
                <ContentCard/>
    
                <ContentCard/>
            </ContentContainer>
        </div>
        )

    }

}

export default Search;