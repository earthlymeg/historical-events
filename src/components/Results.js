import React from 'react';

const Results = (props) => {
    return (
    
        <div className="Results">
            {console.log(props.results)}
            {
                props.results.length > 0 &&
                props.results.map( (item) => {
                   return <div className="result-item">
                       <b>Date:</b> {item.date}B.C.<br></br>
                       <b>Category:</b> {item.category2}<br></br>
                       <b>Description:</b> <br></br>
                       {item.description}
                       </div>
                })
            }
        </div>
    );
};

export default Results;