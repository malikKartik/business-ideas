import React, { Component } from 'react'
import {connect} from 'react-redux'
import currentState from '../../store/reducers/currentState'
import firebase from '../../config/fbConfig'
import {Redirect} from 'react-router-dom'

let db = firebase.firestore()
var fbcontent



var j = currentState.currentState
const str = "<button onClick='this.handleClick()'>Click</button>"
export class VerticalQuestion extends Component {
    state = {
        content: this.props.content[j]
    }
    constructor(props) {
        super(props);
        this.state = {content: this.props.content[j]}
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(){
        j=this.state.content.nextCommand
        // db.collection("Content").get().then((snap)=>{
        //     j=this.state.content.nextCommand
        //     fbcontent = snap.docs[j]._document.proto.fields.question.stringValue
        //     console.log(fbcontent)
        //     if(j!=='0'){
        //         this.setState((state, props) => {
        //             return {content: this.props.content[j]};
        //           });
                
        //     }
        //       else{
        //         window.location.replace("/crisis");
                
        //       }
        // })
        
        console.log(typeof j)
        const state = this.state
        const props = this.props
        if(j!=='0'){
            this.setState((state, props) => {
                return {content: this.props.content[j]};
              });
            
        }
          else{
            window.location.replace("/crisis");
            
          }
    }
    render() {
        const {content} = this.state
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="container">
                <div dangerouslySetInnerHTML={{ __html:  content.question}}/>
                <form action="#">
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>{content.option1}</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>{content.option2}</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio"  />
                        <span>{content.option3}</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio"/>
                        <span>{content.option4}</span>
                    </label>
                    </p>
                    
                </form>
                <button onClick={()=>this.handleClick()}>Click</button>
                {/* {content.nextCommand} */}
                {/* {str} */}
                {/* <button onClick={this.handleClick}>Click</button> */}
                {/* <div dangerouslySetInnerHTML={{ __html: content.nextCommand}} /> */}
                {/* dangerouslySetInnerHTML={{ __html:  }} */}
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        content: state.content.questions,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(VerticalQuestion)
