import React, { Component } from 'react';
import './App.css';

import { TOTAL_IMGS, FM_IMGS_SHOULD_BE_PICKED } from './configs';
import { combination } from './utils/random';
import { getImageUrl } from './images';

import Api from './api';

class App extends Component {
  constructor() {
    super();
    const imageKeys = combination(TOTAL_IMGS, FM_IMGS_SHOULD_BE_PICKED);
    const defaultImgUrl = getImageUrl(imageKeys[0]);
    this.state = {
      imageKeys,
      form: {
        name: '',
        greetings: '',
        imgPicked: 0,
        imgUrl: defaultImgUrl,
      },
    };
    this.onTextChangeHandler = this.onTextChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.isValid = this.isValid.bind(this);
    this.setImgIdx = this.setImgIdx.bind(this);
    this.plusImgIdx = this.plusImgIdx.bind(this);
  }

  onTextChangeHandler(event) {
    event.preventDefault();
    const key = event.target.name;
    const value = event.target.value.trim();
    this.setState(state => ({...state, form: {...state.form, [key]: value}}));
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.isValid()) {
      return Api.writePost(this.state.form).then(() => {
        document.location.href = `${document.location.href}?v=dashboard`;
      });
    }
  }

  setImgIdx(imgPicked) {
    const imgUrl = getImageUrl(this.state.imageKeys[imgPicked]);
    this.setState(state => ({...state, form: {...state.form, imgPicked, imgUrl}}));
  }

  plusImgIdx(i) {
    const nextIdx = (this.state.form.imgPicked + i + FM_IMGS_SHOULD_BE_PICKED) % FM_IMGS_SHOULD_BE_PICKED;
    this.setImgIdx(nextIdx);
  }

  isValid() {
    const { name, greetings, imgUrl } = this.state.form;
    return name.trim() !== '' && greetings.trim() !== '' && imgUrl.trim() !== '';
  }

  render() {
    const images = this.state.imageKeys.map(key => getImageUrl(key));
    const picRadios = images.map((url, i) => {
      const checked = this.state.form.imgPicked === i;
      return (
        <div class="fade" style={checked ? {display: 'block'} : {display: 'none'}}>
          <div class="numbertext">{i + 1} / {FM_IMGS_SHOULD_BE_PICKED}</div>
          <label key={i}>
            <input style={{display: 'none'}} type="radio" name="imgUrl" value={url}
              onChange={this.onTextChangeHandler} required checked={checked} />
            <img className="img-choice" style={{ border: '5px solid white' }} src={url} alt={url} />
          </label>
        </div>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Greetings</h1>
        </header>
        <form className="App-form" onSubmit={this.onSubmitHandler}>

          <label className="pick">Pick 1 Photo</label>
          <div class="slideshow-container">
            {picRadios}
            <a class="prev" onClick={() => this.plusImgIdx(-1)}>&#10094;</a>
            <a class="next" onClick={() => this.plusImgIdx( 1)}>&#10095;</a>
          </div>

          <div className="App-message-block">
            <label className="input"><h2>@</h2><input type="text" name="name" placeholder="Name" onChange={this.onTextChangeHandler} required /></label>
            <label className="input"><textarea name="greetings" placeholder="Greetings" onChange={this.onTextChangeHandler} required /></label>
          </div>
          <input className="btn" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
