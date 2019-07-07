
import React, {Component}  from 'react';
 import './App.css';
 import { connect } from 'react-redux';

class SearchResult extends Component {
    
     render() {
         
        
         if (this.props.results===undefined) return (<div>k co gi </div>)
         let i=0;
         let displayResult = function(item) {
            i++;
            //  console.log(i,item.link);
             return (<tr key= {i}> <td  >{i} </td> <td > {item.author } </td> <td > {item.link} </td><td>{item.tags}</td><td><img src= {item.media.m} /></td></tr>)
         }

        return ( <div>
                               
                     { this.props.results.map(displayResult) }            
                   
                 </div>
                )
      
     }
  }
  let ConnectedSearchResult = connect(function(store) {
      return {
          results: store.searchResult
      }
  })(SearchResult)
  export default ConnectedSearchResult;