import React, {Component} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import {Form, Input, Label} from 'semantic-ui-react';

// handleChange = (event) => {
//     console.log("test")
//     this.setState({userInput: event.target.value});
//     const filteredSong = this.state.music.filter(search => {
//         return search.title.toLowerCase().includes(this.state.userInput) ||
//         search.artist.toLowerCase().includes(this.state.userInput) ||
//         search.album.toLowerCase().includes(this.state.userInput) ||
//         search.release_date.toLowerCase().includes(this.state.userInput)
//     });
//     console.log(filteredSong);
//     this.setState({filterSong:filteredSong})   
// }

// const SearchBar = (props) =>{
//     return(
//         <div>
//         <label htmlFor="header-search">
//         <SearchIcon className="header__searchIcon" />
//             <span className="header">Search</span>
//         </label>
//         <input
//             onChange={props.handleChange}
//         />
//         </div>
//     )
// }

// export default SearchBar;

class SearchBar extends Component {
    state= {
        userInput:''
    };
    onChange = (event) => {
        this.setState({userInput:event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.userInput);
    }
    render(){
        return(
            <Form onSubmit={this.onSubmit}>
                {/* <Label>Search</Label>
                <SearchIcon className="header__searchIcon" /> */}
                <Input value={this.state.userInput}
                       type="text"
                       placeholder="Enter Search Keyword"
                       onChange={this.onChange}
                       >
                </Input>
            </Form>
        )
    }
}

export default SearchBar;