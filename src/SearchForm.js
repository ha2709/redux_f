
import React, {Component}  from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SearchForm extends Component {
     constructor(props) {
       super(props)
       this.state = {
         searchInput: ""
       }
       this.handleChange = this.handleChange.bind(this)
       this.handleSubmit = this.handleSubmit.bind(this)

     }

     handleChange(event) {
       this.setState({
         searchInput: event.target.value
       })

     }

     handleSubmit(e) {
      e.preventDefault();
      let cb = function(resBody) {
        let parse = JSON.stringify(resBody)
        console.log(typeof resBody, resBody);
        // console.log(typeof parse, parse);
        this.props.dispatch({
          type:"putSearchResult",
          res:resBody
        })
      }
      cb=cb.bind(this)
      const user = this.state.searchInput;
       console.log(user,typeof user);
      axios.get(`https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?lang=en-us&&format=json&nojsoncallback=1&tags=${user}&tagmode=all`)
      .then(response => {
        var repos =[];
        repos=response.data.items;
        
        console.log(typeof repos,repos);

        return (repos);
     

    
      }).then(cb)
      .catch(err=>console.log(err));
     }
     render() {
       return(
         <form onSubmit = {this.handleSubmit}>
           <input onChange={this.handleChange} type="search"></input>

             <input type="submit"></input>

             <h1>You search: {this.state.searchInput}</h1>

         </form>
         )
     }
      
  }

  let ConnectedSearchForm = connect()(SearchForm)
 
  export default ConnectedSearchForm;
