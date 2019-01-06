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
        let newArray = [];
        for (let i = 0; i < data.items.length; i++){
            console.log(data.items[i])
            let newObj = {
                key:"",
                bookTitle:"",
                bookLink:"",
                imageLink:"",
                authors:[],
                description:""
            }
            newObj.key = data.items[i].id;
            newObj.bookTitle = data.items[i].volumeInfo.title;
            newObj.bookLink = data.items[i].volumeInfo.infoLink;
            newObj.authors = data.items[i].volumeInfo.authors;
            newObj.description = data.items[i].volumeInfo.description;
            if (typeof data.items[i].volumeInfo.imageLinks != "undefined"){

                newObj.imageLink = data.items[i].volumeInfo.imageLinks.thumbnail
            }
            newArray.push(newObj);
        }
        this.setState({resultArray: newArray})

    }

    createEntry(book){
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
                    key={result.key}
                    imageLink={result.imageLink}
                    bookTitle={result.bookTitle}
                    bookLink={result.bookLink}
                    authors={result.authors}
                    description={result.description}
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