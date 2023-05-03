import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [numero, setNumero] = useState(0)

  useEffect(()=>{
    if(numero % 3 == 0){
      console.log(numero)
    }
  }, [numero]);

  const adicionar = () =>{
    setNumero(numero + 1)
  };

  const diminuir = () =>{
    setNumero(numero - 1)
  }

  return (
    <View style={styles.container}>
      <Text>Numero: {numero}</Text>
      <Button onPress={adicionar} title='adicionar'/>
      <Button onPress={diminuir} title='diminuir'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
