import React, { Component } from 'react';



class X extends Component {

    render() { 
        console.log(this.props.commentText)
        return ( 
            <>

                <p>{this.props.commentText}</p>


            </>
         );
        }
        
        
    }
 
export default X;






// function Comment(props) {
//     return (


//         <p>{props.commentText}</p>

//     )

// }


// export default Comment;