import React, {Component} from 'react';

import Match from '../../Presentation/Match/Match';
import Axios from 'axios';

class ContainerMatch extends Component{
  constructor() {
    super();
    this.state = {
      matchedUsers: []
    }
  }
  componentDidMount () {
    Axios.get("http://localhost:3001/list")
      .then((doc)=>{
        this.setState ({ matchedUsers: doc.data })
      })
      .catch((err)=>{
        console.log("マッチしたユーザー一覧の取得に失敗", err)
      })
  }
  render(){
    return(
      <Match matchedUsers={this.state.matchedUsers} />
    );
  }
}

export default ContainerMatch;