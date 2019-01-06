import React, {Component} from "react";
import ContentContainer from "../components/ContentContainer";
import ContentCard from "../components/contentcard";
import SearchBar from "../components/searchbar";
import SubmitButton from "../components/submitbutton";
import SaveButton from "../components/savebutton";
import API from "../utils/API";

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

    createEntry(book){
        console.log(book);
        let exportObject = {
             title: book.volumeInfo.title,
             authors: book.volumeInfo.authors,
             description: book.volumeInfo.description,
             image: book.volumeInfo.imageLinks.thumbnail,
             link: book.volumeInfo.infoLink
         }
         API.addSaved(exportObject)
         .then(res => console.log(res))
         .catch(err => console.log(err))
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

    render(){
        return(
        <div className="container">
            <SearchBar
            value={this.state.input}
            handleChange={this.handleChange.bind(this)}
            >
                <SubmitButton
                    handleClick={this.handleClick.bind(this)}
                />
            </SearchBar>

            <ContentContainer>
                {this.state.resultArray.map(result=>(
    
                    <ContentCard
                    key={result.id}
                    imageLink={result.volumeInfo.imageLinks.thumbnail}
                    bookTitle={result.volumeInfo.title}
                    bookLink={result.volumeInfo.infoLink}
                    authors={result.volumeInfo.authors}
                    description={result.volumeInfo.description}
                    >
                        <SaveButton onClick={()=>this.createEntry(result)}/>
                    </ContentCard>
                ))}
            </ContentContainer>
        </div>
        )

    }

}

export default Search;