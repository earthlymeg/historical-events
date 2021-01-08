import React, {useState, useEffect} from 'react';


const Results = (props) => {
    
    
    const [showButton, setshowButton] = useState(false);
    
    const handleShow = () => {
        if (props.results.length > 0) {
            setshowButton(true);
        }
    }
    
    useEffect( () => {
        handleShow()
        console.log(props)
    })
    
    const handleLoadMore = () => {
        alert('Eventually, I will code this to load more results :)')
    }
  

    return (
        <div>
        <div className="Results">
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
        {showButton ? <button onClick={handleLoadMore} className='load-more'>Load More Results </button> : null}
            
        </div>
    );
};

export default Results;