import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View ,Button,Keyboard,TouchableWithoutFeedback ,TouchableOpacity, Alert, FlatList} from 'react-native';

import io from 'socket.io-client';
let socket
export default function App() {
  const [msg, setMsg] = React.useState('');
  const [username,setUsername] = React.useState("");
  const [allmsg, setAllmsg] = React.useState([]);
  const [response, setResponse] = React.useState("");
  
  React.useEffect(() => {
 
      //192.168.43.156 is my ip Address
      socket =io("http://192.168.43.156:8080");
   
      socket.connect();
      
        socket.on('connect', () => {
          console.log('connected!');
        });
   
  }, []);

React.useEffect(()=>{
  socket.on('init', (msg) => {
    setAllmsg(msg)
  });
},[])

React.useEffect(()=>{
  socket.on('push', (msg) => {
    setAllmsg([...allmsg,msg])
  });
})

function handleClick(){
  if(username==""){
    return Alert.alert("Username is Required")
  }
  if(msg==""){
    return Alert.alert("Message is Required");
  }

  socket.emit("message",{
    username,
    message:msg
  })

  Promise.resolve()
      .then(() => {
        setAllmsg([...allmsg,{
          username,
          message:msg
        }])      
      })
      .then(() => setMsg(""))
  
}

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.space}>
          
          <FlatList
            data={allmsg}
            renderItem={({ item, index }) => (
              <View style={{backgroundColor:"black",marginBottom:5,padding:5}}>
                <Text style={{color:"white"}}>{item.message}</Text>
                <Text style={{color:"white",fontStyle:"italic"}}>username: {item.username}</Text>
              </View>   
            )}
            keyExtractor={(item,index) => index.toString()}
          />
          
        </View>
        <View  style={styles.inputbox}>
            <View>
              <View style={styles.styleInput}>
                  <TextInput placeholder="Type Username"
                  value={username} 
                  onChangeText={(msg)=>setUsername(msg)}
                  ></TextInput>
              </View>
              <View style={styles.styleInput}>
                <TextInput placeholder="Type Message"
                 value={msg} 
                 onChangeText={(msg)=>setMsg(msg)}
                 multiline
                numberOfLines={2}
                ></TextInput>
              </View>
              <View>
                <TouchableOpacity>
                <Button
                    onPress={handleClick}
                    title="Send"
                    color="red"    
                />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    flex: 1
  },
  space:{
    flex:8,
    borderWidth:1,
    borderColor:"#000"
  },
  inputbox:{
    flex:2
  },
  styleInput:{
    padding:5,
    marginTop:2
  }
});


