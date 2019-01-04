import React from "react";
import ContentContainer from "../components/ContentContainer";
import ContentCard from "../components/contentcard";
import SearchBar from "../components/searchbar";

const Search = () => (
        <div className="container">
            <SearchBar/>
            <ContentContainer>
                <ContentCard/>

                <ContentCard/>
            </ContentContainer>
        </div>
)

export default Search;