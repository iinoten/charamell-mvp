import React, {Component} from 'react';
import { connect } from 'react-redux'

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
      iconPictureNumber: null
    }
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
    axios.post('http://localhost:8080/profile/new', {
      "profile": {
        "name": "kakohate",
        "tag": [
          {
              "category": "movie", 
              "detail": "歌舞伎町のTOHOシネマズで天気の子を観たい！"
          },
          {
              "category": "caffe",
              "detail": "スタバでなんか飲みたい!"
          }
        ],
        "message": "都内のニートです",
        "limit": 12,
        "color": "yellow",
        "avatar_url": "https://",
        "pictures": [
          {
            "order": 1,
            "url": "https://"
          },
          {
            "order": 2,
            "url": "https://"
          }
        ],
        "coordinate": {
          "lng": 35.6909597,
          "lat": 139.7086971
        }
      }
    })
    .then((res) => {
      console.log("データのpostに成功",res.data)
    })
    .catch(err=>{
      console.log("データのpostに失敗",err)
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
  updateIconImageNumber
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

export default connect( mapStateToProps, mapDispatchToProps )( ContainerEdit );