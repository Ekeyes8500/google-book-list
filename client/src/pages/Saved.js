import React, {Component} from "react";
import ContentContainer from "../components/ContentContainer";
import ContentCard from "../components/contentcard";
import API from "../utils/API"
import DeleteButton from "../components/deletebutton"

class Saved extends Component {
    state={
        resultArray:[]
    }
    componentDidMount(){
        this.findBooks();
    }
    findBooks = () => (
        API.findAll()
        .then(res=>
            this.setState({resultArray: res.data})
        )
        .catch(err=>err)
    )
    render(){
        return(
        <ContentContainer>
            {this.state.resultArray.map(result=>(
    
                <ContentCard
                key={result._id}
                imageLink={result.image}
                bookTitle={result.title}
                bookLink={result.link}
                authors={result.authors}
                description={result.description}
                >
                <DeleteButton/>
                </ContentCard>
            ))}
        </ContentContainer>
        )

    }
}

export default Saved;