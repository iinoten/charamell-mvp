import React, {Component} from 'react';
import iconImage from './image/iconImage.jpeg'
import Icon from './image/icon-final.trans.svg'

import './Chat.css'

class Chat extends Component{
  render(){
    return(
      <div className="ChatPage__root">
        <div className="MatchPage__Header--BackColor">
          <div className="MatchPage__Header--Icon"/>
        </div>
        <div className="ChatPage__root--Profile--Box">
          <div className="ChatPage__Image--Gradient">
            <div className="ChatPage__Image--Box">
              <img className="ChatPage__Image" src={iconImage} />
            </div>
            <div className="ChatPage__RemitTime--Box">
              <div className="ChatPage__RemitTime--Text">あと1:23:45</div>
            </div>
          </div>
          <div className="ChatPage__Profile--Box">
            <div>
              シンドウチャン
            </div>
            <div className="ChatPage__Profile--Message">
              よろしくおねがいします。
            </div>
          </div>
          <div className="ChatPage__Tag--Box">
            <div className="ChatPage__Tag">
              <div className="ChatPage__Tag--Icon" />
              <div className="ChatPage__Tag--Title">遊びにいきたいです</div>
            </div>
            <div className="ChatPage__Tag ChatPage__Tag--Second">
              <div className="ChatPage__Tag--Icon" />
              <div className="ChatPage__Tag--Title">遊びにいきたいです</div>
            </div>
          </div>
        </div>
        <div className="ChatPage__Messages--Box">
          <div className="ChatPage--Message opponent__Message">
            <div>こんにちは !  午後からショッピング行きたいです；)</div>
          </div>
          <div className="ChatPage--Message My__Message">
            <div>メッセージありがとうございます! 是非いきましょう !</div>
          </div>
        </div>
        <div className="ChatPage__Input--Box">
          <hr className="ChatPage__Input--hr" />
          <input placeholder="メッセージを入力..." className="ChatPage__Input" type="text" />
        </div>
      </div>
    );
  }
}

export default Chat;