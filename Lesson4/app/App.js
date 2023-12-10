import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image } from 'react-native';

{/* <div></div> -> <View></View>
<p></p> -> <Text></Text> */}
// function Header() {}
const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Магазин</Text>
    </View>
  
  )
} 

const Footer = () => {
  return (
    <View style={styles.Footer}>
      <Text>Магазин 2023</Text>
    </View>
  
  )
} 
const ProductCard = ({title,src,price}) => {
  return (
    <View style={styles.Card}>
      <Image source={src} style={styles.Image}/>
      <Text>{title}</Text>
      <Text>Цена: {price} $</Text>
    </View>

  )
}

export default function App() {
  const products = [
    {
      title: "Товар 1",
      src: require("./assets/Pic1.jpg"),
      price: 1000,
      id: 1,
    },
    {
      title: "Товар 2",
      src: require("./assets/Pic2.jpg"),
      price: 1500,
      id: 2,
    },
  ]


  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView>
        {products.map((product) => (
          <ProductCard key={product.id} title={product.title} src={product.src} price={product.price}/>
        ))}
      </ScrollView>
      

      <Footer/>
      
    </View>
  );
}


const styles = StyleSheet.create({
  Image:{
    width: 200,
    height: 200,
    borderRadius: 5
    
  }
})




