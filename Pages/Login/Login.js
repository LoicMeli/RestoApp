import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {NtiveModukes,TouchableOpacity,Switch,ScrollView,Image,PixelRatio,Dimensions,View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CryptoJS from 'react-native-crypto-js'
import {styles} from './Style.js'
import AppNavigator from '../../Navigation/AppNavigator'

const {width,height}=Dimensions.get('screen')

class Login extends React.Component{
  
  constructor(){
      super();
      this.state={
        email:'jane',
        password:'',
        secure:true,
        display1:'none',
        display2:'flex',
        Search:['gmail.com','yahoo.fr','outlook.com']
      }
  }
  execute(){
    if (this.state.email==='' || this.state.password=='') 
    {
      alert('something went wrong')
    }else{
          fetch('',{
            headers:{'content-type':'application/json'},
            method:'post',
            body:JSON.stringify({
            email:CryptoJS.AES.encrypt(this.state.email,'secretKey@007').toString(),
            password:CryptoJS.AES.encrypt(this.state.password,'secretKey@007').toString()
       })    
          })
          .then(response=>response.json())
          .then(data=>{
            console.log(data)
            this.setState({email:'',password:'',secure:true})
          })
          .catch(error=>console.log(error))
        this.props.navigation.navigate('Main')
        }
      
    }
  secure(){
    this.setState({secure:!this.state.secure})
    this.state.secure==true?this.setState({display1:'flex',display2:'none'}):
    this.setState({display1:'none',display2:'flex'})
  }
  displayForm(){
    return(
    <View>
      <View style={styles.form}>
      <View style={{marginBottom:15}}>
        <View style={styles.title}>
          <Text style={{fontSize:25}}>Welcome back</Text>
        </View>
        <Text style={{fontSize:15,opacity:0.6}}>Sign in to continue</Text>
        </View>
        <View style={styles.inputView}>         
          <TextInput style={styles.input}
          onChangeText={(text)=>this.setState({email:text})}
          placeholder="E-mail"></TextInput>
        </View>        
        <View style={styles.inputView}>         
          <TextInput style={styles.input}
          placeholder="Enter password"
          onChangeText={(text)=>this.setState({password:text})}
          secureTextEntry={this.state.secure}>
          </TextInput>
          <TouchableOpacity onPress={()=>this.secure()
           }> 
          <Image style={styles.logo}
          source={require('../../assets/see.png')}
          style={{display:this.state.display2}}
           />          
           <Image style={styles.logo}
          source={require('../../assets/notsee.png')}
          style={{display:this.state.display1}}
           />
           </TouchableOpacity>          
        </View>
        <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Confirm')}
        >
        <Text style={{textAlign:'center',marginTop:20}}>Forgot password?</Text>
        </TouchableOpacity>               
      </View>
      <TouchableOpacity
        style={{
          marginTop:25,
          borderWidth:1,
          width:220,
          backgroundColor:'#582900',
          borderRadius:20,
          paddingTop:5,
          marginLeft:width/5,
          height:40,
          display:this.state.display
        }}
        onPress={()=>this.execute()}
      >
        <Text style={{textAlign:'center',color:'white'}}>Sign Up</Text>     
      </TouchableOpacity>
      <View style={{flex:1,flexDirection:'row',marginTop:60,marginLeft:width/4}}>
      <Text>Don't have an account?</Text>
      <TouchableOpacity
      onPress={()=>this.props.navigation.navigate('Register')}
      ><Text style={{color:'#582900'}}>Sign Up</Text></TouchableOpacity>
      </View>
    </View>
    )
  }
  render(){
    //code de cryptage des données 
    // let cipherText=CryptoJS.AES.encrypt(this.state.password,'secret key').toString()
    // let originalText=CryptoJS.AES.decrypt(cipherText,'secret key').toString(CryptoJS.enc.Utf8)
    // console.log('encrypt',cipherText)
    // console.log('decrypt',originalText)
    return(
      <ScrollView style={styles.container}>
        {this.displayForm()}
{/*        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        onValueChange={(value)=>this.setState({isEnabled:value})}
        value={this.state.isEnabled}
         />*/}
          
      </ScrollView>    
    )
  }
}
export default Login;
