import axios from "axios";

//export of function to operate google books api
const apiKey = "AIzaSyAeQdUUunWQvAZGDeyZISKz1ysOzC7THJc";

export default {
    searchBookTitle: function(title){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title)
    }
}