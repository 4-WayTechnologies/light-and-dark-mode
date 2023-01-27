
import { StyleSheet, Text, View,useColorScheme,Switch,TextInput } from 'react-native'
import React,{useState} from 'react'

const App = () => {
  const DarkMode=useColorScheme()=='dark';

  const [dark,setDark]=useState(DarkMode)
  return (
    <View style={{  flex:1,
      backgroundColor:dark?'black':'white',
      alignItems:'center',
      justifyContent:'center'}}>
      <Switch value={dark} onValueChange={(val)=>setDark(val)}/>
    
      <View>
    <Text style={{color:dark?'#ffffff':'black',fontSize:22,alignSelf:'center'}}>Login</Text>
            <TextInput placeholder='Email' style={{  width:340,
              height:40,
              borderWidth:1,
              borderColor:dark?'#ffffff':'black',
              marginHorizontal:30,
              marginTop:20}} placeholderTextColor={dark?'#ffffff':'#454545'}/>
            <TextInput placeholder='Password' style={{
              width:340,
              height:40,
              borderWidth:1,
              borderColor:dark?'#ffffff':'black',
              marginHorizontal:30,
              marginTop:20
            }} 
            placeholderTextColor={dark?'#ffffff':'#454545'}
            />
          
    </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  loginText:{
    color:'#000000',
    fontSize:22,
    alignSelf:'center',
    marginTop:20
  },TextInput:{
  
  }

})