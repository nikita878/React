

import { Component } from 'react';
import classes from './App.module.css';
import ProductData from './ProductData';
import ProductDetails from './ProductDetails';
import ProductPreview from './ProductPreview';
import Topbar from './Topbar';

class App extends Component{
  state ={
    productData : ProductData,
    currentPreviewImagePos:0,
    showHeartBeatSection:false,
  }

  onColorOptionClick = (pos)=>{
    // const updatedPreviewImage = this.state.productData.colorOptions[pos].imageUrl
    // console.log(updatedPreviewImage);
    this.setState({currentPreviewImagePos: pos});
  }
  onFeatureItemClick =(pos) =>{
    let updatedState = false;
    if(pos === 1){
      updatedState = true;
    }
    this.setState({showHeartBeatSection:updatedState});
  }
  render(){
    return (
    <div className="App">
      <header className="App-header">
      <nav className ={classes.Topbar}>
        <Topbar/>
        
      </nav>
      </header>
      <div className ={classes.MainContainer}>
      <div className ={classes.ProductPreview}>
           <ProductPreview currentPreviewImage ={this.state.productData.colorOptions
           [this.state.currentPreviewImagePos].imageUrl}
            showHeartBeatSection={this.state.showHeartBeatSection } 

           />

    </div>
    <div className = {classes.ProductData} >
      <ProductDetails data = {this.state.productData} onColorOptionClick ={this.onColorOptionClick } currentPreviewImagePos={this.state.currentPreviewImagePos}
      onFeatureItemClick={this.onFeatureItemClick} showHeartBeatSection={this.state.showHeartBeatSection}/>
      </div>
    
      

    </div>
    </div>
  );
}
}

export default App;
