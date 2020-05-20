import React, {Component} from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { 
  updateSelectedColor, 
  onChangeTimeValue, 
  updateFirstIcon, 
  updateSecondIcon, 
  updateNameValue, 
  updateMessageValue,
  updateFirstTagMessage,
  updateSecondTagMessage,
  updateIconImageNumber
 } from '../../../action/makeCharamell'

 import { throwSessionId } from '../../../action/throwSessionId'

import Edit from '../../Presentation/Edit/Edit'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

class ContainerEdit extends Component{
  constructor() {
    super();
    this.state = {
      page: 1,
      colorCirlceState: "free",
      isOpenFirstSelectIconModal: false,
      isOpenSecondSelectIconModal: false,
      firstInputImageFile: null,
      secondInputImageFile: null,
      thirdInputImageFile: null,
      fourthInputImageFile: null,
      iconPictureNumber: null,
      nowPositon: {
        lat: null,
        lng: null
      },
      isTransPage: false,
      isPopupSubmitModal: false
    }
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(position)
      this.setState({nowPositon: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }})
    })
  }
  onChange_first_input_image = ( event ) => {
    const files = event.target.files;
    if( files.length > 0 ) {
      var file = files[0]
        var reader = new FileReader()
        reader.onload = (e) => {
          this.setState({ firstInputImageFile: e.target.result })
        };
        reader.readAsDataURL(file)
    } else {
      this.setState({ firstInputImageFile: null })
    }
  }
  onChange_second_input_image = ( event ) => {
    const files = event.target.files;
    if( files.length > 0 ) {
      var file = files[0]
        var reader = new FileReader()
        reader.onload = (e) => {
          this.setState({ secondInputImageFile: e.target.result })
        };
        reader.readAsDataURL(file)
    } else {
      this.setState({ secondInputImageFile: null })
    }
  }
  onChange_third_input_image = ( event ) => {
    const files = event.target.files;
    if( files.length > 0 ) {
      var file = files[0]
        var reader = new FileReader()
        reader.onload = (e) => {
          this.setState({ thirdInputImageFile: e.target.result })
        };
        reader.readAsDataURL(file)
    } else {
      this.setState({ thirdInputImageFile: null })
    }
  }
  onChange_fourth_input_image = ( event ) => {
    const files = event.target.files;
    if( files.length > 0 ) {
      var file = files[0]
        var reader = new FileReader()
        reader.onload = (e) => {
          this.setState({ fourthInputImageFile: e.target.result })
        };
        reader.readAsDataURL(file)
    } else {
      this.setState({ fourthInputImageFile: null })
    }
  }
  onClick_first_delete_button = () => this.setState({ firstInputImageFile: null })
  onClick_second_delete_button = () => this.setState({ secondInputImageFile: null })
  onClick_third_delete_button = () => this.setState({ thirdInputImageFile: null })
  onClick_fourth_delete_button = () => this.setState({ fourthInputImageFile: null })
  onClick_Next_SelectCard = () => {
    this.setState ({ page: 2 })
  }
  onClick_Back_SelectCard = () => {
    this.setState ({ page: 1 })
  }
  onChange_waiting_time_SliderValue = ( e, value ) => {
    this.props.onChangeTimeValue(value)
  }
  onClick_Select_Color = () => {
    this.props.updateSelectedColor()
    this.setState({colorCirlceState: 'clicked'})
    setTimeout(()=>this.setState({colorCirlceState: 'free'}), 100)
  }
  openFirstSelectIconModal = () => {
    this.setState ({ isOpenFirstSelectIconModal: true })
  }
  closeFirstSelectIconModal = () => {
    this.setState ({ isOpenFirstSelectIconModal: false })
  }
  openSecondSelectIconModal = () => {
    this.setState ({ isOpenSecondSelectIconModal: true })
  }
  closeSecondSelectIconModal = () => {
    this.setState ({ isOpenSecondSelectIconModal: false })
  }

  selectFirstIconHandler = value => {
    this.props.updateFirstIcon( value );
    this.closeFirstSelectIconModal()
  }
  selectSecondIconHandler = value => {
    this.props.updateSecondIcon( value );
    this.closeSecondSelectIconModal()
  }
  
  onChange_name_input = e => {
    this.props.updateNameValue(e.target.value)
  }
  onChange_message_input = e => {
    this.props.updateMessageValue(e.target.value)
  }
  onChange_first_tag_message = e => {
    this.props.updateFirstTagMessage(e.target.value)
  }
  onChange_second_tag_message = event => {
    this.props.updateSecondTagMessage(event.target.value)
  }
  onSet_Icon_Image = (value) => {
    this.props.updateIconImageNumber(value)
  }
  onClick_submit_all_data = () => {
    console.log("clicked submit button")
    const toBlob = (base64) => {
      var bin = atob(base64.replace(/^.*,/, ''));
      var buffer = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      // Blobを作成
      try{
          var blob = new Blob([buffer.buffer], {
              type: 'image/png'
          });
      }catch (e){
          return false;
      }
      return blob;
    }
    this.setState ({isPopupSubmitModal:true})
    console.log({
      "profile": {
        "name": this.props.nameValue,
        "tag": [
          {
              "category": this.props.selectedFirstTagValue, 
              "detail": this.props.firstTagMessage
          },
          {
              "category": this.props.selectedSecondTagValue,
              "detail": this.props.secondTagMessage
          }
        ],
        "message": this.props.messageValue,
        "limit": this.props.waitingTimeValue,
        "color": "yellow",
        "avatar_url": "https://",
        "pictures": [
          {
            "order": 1,
            "url": this.state.firstInputImageFile || "" 
          },
          {
            "order": 2,
            "url":  this.state.secondInputImageFile || "" 
          },
          {
            "order": 3,
            "url":  this.state.thirdInputImageFile || "" 
          },
          {
            "order": 4,
            "url":  this.state.fourthInputImageFile || "" 
          }
        ],
        "coordinate": {
          "lng": this.state.nowPositon.lng,
          "lat": this.state.nowPositon.lat
        }
      }
    })
    axios.post('http://localhost:8080/profile/new', {
      "profile": {
        "name": this.props.nameValue,
        "tag": [
          {
              "category": this.props.selectedFirstTagValue, 
              "detail": this.props.firstTagMessage
          },
          {
              "category": this.props.selectedSecondTagValue,
              "detail": this.props.secondTagMessage
          }
        ],
        "message": this.props.messageValue,
        "limit": this.props.waitingTimeValue,
        "color": "yellow",
        "avatar_url": "https://",
        "pictures": [
          {
            "order": 1,
            "url": this.state.firstInputImageFile || "" 
          },
          {
            "order": 2,
            "url":  this.state.secondInputImageFile || "" 
          },
          {
            "order": 3,
            "url":  this.state.thirdInputImageFile || "" 
          },
          {
            "order": 4,
            "url":  this.state.fourthInputImageFile || "" 
          }
        ],
        "coordinate": {
          "lng": this.state.nowPositon.lng,
          "lat": this.state.nowPositon.lat
        }
      }
    })
    .then((res) => {
      console.log("データのpostに成功",res.headers['session-id'])
      this.props.throwSessionId(res.headers['session-id'])
      this.setState({ 
        isTransPage: true, 
        isPopupSubmitModal: false
      })
      setTimeout( ()=>this.props.history.push('/match'), 350 );
    })
    .catch(err=>{
      console.log("データのpostに失敗",err)
      this.setState({ 
        isPopupSubmitModal: false
      })
    })
  }
  render(){
    return(
      <Edit
        page={this.state.page}
        onClick_Next_SelectCard={this.onClick_Next_SelectCard}
        onClick_Back_SelectCard={this.onClick_Back_SelectCard}
        onClick_Select_Color={this.onClick_Select_Color}
        onChange_waiting_time_SliderValue={this.onChange_waiting_time_SliderValue}
        openFirstSelectIconModal={this.openFirstSelectIconModal}
        closeFirstSelectIconModal={this.closeFirstSelectIconModal}
        openSecondSelectIconModal={this.openSecondSelectIconModal}
        closeSecondSelectIconModal={this.closeSecondSelectIconModal}
        selectFirstIconHandler={this.selectFirstIconHandler}
        selectSecondIconHandler={this.selectSecondIconHandler}
        onChangeFirstInputImage={this.onChange_first_input_image}
        onChangeSecondInputImage={this.onChange_second_input_image}
        onChangeThirdInputImage={this.onChange_third_input_image}
        onChangeFourthInputImage={this.onChange_fourth_input_image}
        onClickFirstDeleteButton={this.onClick_first_delete_button}
        onClickSecondDeleteButton={this.onClick_second_delete_button}
        onClickThirdDeleteButton={this.onClick_third_delete_button}
        onClickFourthDeleteButton={this.onClick_fourth_delete_button}
        updateNameValue={this.onChange_name_input}
        updateMessageValue={this.onChange_message_input}
        updateFirstTagMessage={this.onChange_first_tag_message}
        updateSecondTagMessage={this.onChange_second_tag_message}
        onSetIconImage={this.onSet_Icon_Image}
        onClickSubmitAllData={this.onClick_submit_all_data}

        select_color={this.props.selectedColor}
        colorCirlceState={this.state.colorCirlceState}
        waitingTimeValue={this.props.waitingTimeValue}
        isOpenFirstSelectIconModal={this.state.isOpenFirstSelectIconModal}
        isOpenSecondSelectIconModal={this.state.isOpenSecondSelectIconModal}
        selectedFirstTagValue={this.props.selectedFirstTagValue}
        selectedSecondTagValue={this.props.selectedSecondTagValue}
        firstInputImageFile={this.state.firstInputImageFile}
        secondInputImageFile={this.state.secondInputImageFile}
        thirdInputImageFile={this.state.thirdInputImageFile}
        fourthInputImageFile={this.state.fourthInputImageFile}
        nameValue={this.props.nameValue}
        messageValue={this.props.messageValue}
        firstTagMessage={this.props.firstTagMessage}
        secondTagMessage={this.props.secondTagMessage}
        isTransPage={this.state.isTransPage}
        isPopupSubmitModal={this.state.isPopupSubmitModal}
      />
    );
  }
}

const mapDispatchToProps = {
  updateSelectedColor,
  onChangeTimeValue,
  updateFirstIcon, 
  updateSecondIcon,
  updateNameValue,
  updateMessageValue,
  updateFirstTagMessage,
  updateSecondTagMessage,
  updateIconImageNumber,

  throwSessionId
}
const mapStateToProps = state => ({
  selectedColor: state.makeCharamell.selectedColor,
  waitingTimeValue: state.makeCharamell.waitingTimeValue,
  selectedFirstTagValue: state.makeCharamell.selectedFirstTagIcon,
  selectedSecondTagValue: state.makeCharamell.selectedSecondTagIcon,
  nameValue: state.makeCharamell.nameValue,
  messageValue: state.makeCharamell.messageValue,
  firstTagMessage: state.makeCharamell.firstTagMessage,
  secondTagMessage: state.makeCharamell.secondTagMessage,
  slectedIconImageNumber: state.makeCharamell.slectedIconImageNumber
})

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( ContainerEdit ) );