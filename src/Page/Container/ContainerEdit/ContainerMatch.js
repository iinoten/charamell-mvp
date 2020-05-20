import React, {Component} from 'react';

import Match from '../../Presentation/Match/Match';
import Axios from 'axios';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class ContainerMatch extends Component{
  constructor() {
    super();
    this.state = {
      matchedUsers: []
    }
  }
  onClick_Avator_Icon = () => {
    this.props.history.push('/chat')
  }
  componentDidMount () {
    console.log("sessionId:",this.props.sessionID)
    Axios.get("http://localhost:8080/list",  {
      headers: { 'Session-ID': this.props.sessionID }
    })
      .then((doc)=>{
        this.setState ({ matchedUsers: doc.data.list })
        console.log(doc.data)
      })
      .catch((err)=>{
        console.log("マッチしたユーザー一覧の取得に失敗", err)
      })
  }
  render(){
    return(
      <Match 
        matchedUsers={this.state.matchedUsers} 
        onClickAvatorIcon={this.onClick_Avator_Icon}
      />
    );
  }
}

const mapStateToProps = state => ({
  sessionID: state.throwSessionId.sessionID
})

export default withRouter ( connect( mapStateToProps )( ContainerMatch) );