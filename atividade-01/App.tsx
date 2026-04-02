import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

{/*Criação do array de objetos*/}
const dataList = [
  {
    name: "Tomate",
    price: 3.45,
    category: "Fruta",
    onSale: true
  },
  {
    name: "Batata",
    price: 4.59,
    category: "Verdura",
    onSale: true
  },
  {
    name: "Alface",
    price: 1.99,
    category: "Verdura",
    onSale: false
  }
]

{/*Criação da variável userName para utilização dinâmica no código*/}
const userName: string = "Alana Gaspar"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá {userName}, tudo bem? Bem vinda a feirinha!🥕</Text> {/*Utilização variável dinâmica com interpolação*/}
      <StatusBar style="auto" />
      
      {/*Percorrimento de array junto ao método .map()*/}
      {dataList.map((list, index) => (
        <View key={index} style={styles.itens}> {/*Utilização da key para identificaçào única de cada item*/}
          <Text style={styles.itensText}>{list.name} | R${list.price} | Categoria:  {list.category} 
            {list.onSale && 
            <Text style={styles.sale}>OFERTA</Text>} {/*Condição if e estilização para itens com onSale = true*/}
          </Text>
        </View>
      ))}

      <Text style={styles.title}>Aproveite nossas ofertas!</Text> 
    </View>
  );
}

{/*Estilização pura*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fff8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: '#0b5808',
    padding: 10,
    margin: 10,
    color: '#fff'
  },
  itens: {
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39911f',
  },
  itensText: {
    color: '#fff'
  },
  sale: {
    backgroundColor: '#fff',
    padding: 5,
    margin:10,
    color: '#39911f'
  }
});
