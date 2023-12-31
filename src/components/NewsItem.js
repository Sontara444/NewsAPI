
import React from 'react'

const NewsItem =(props)=> {

    let {title, description, imageUrl , newsUrl, author, date, source} = props;
    return (
      <div className='my-3'> 
           <div className="card">
            <div style={{display: 'flex',
                  justifyContent:'flex-end',
                  position: 'absolute',
                  right: '0'}}>
            <span className=" badge rounded-pill bg-danger" > {source}</span>
            </div>
             
               <img src={!imageUrl? "https://images.moneycontrol.com/static-mcnews/2023/03/deal-770x433.png?impolicy=website&width=770&height=431":imageUrl} className="card-img-top" alt="..."/>
               <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                   <p className="card-text">{description}</p>
                   <p className="card-text"><small className='text-muted'>By {!author? "Unknoun": author} on {new Date (date).toGMTString()} </small></p>
                   <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
               </div>
          </div>
      </div>
    )
  
}

export default NewsItem