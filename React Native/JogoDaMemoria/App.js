import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity,ScrollView,Alert  } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ultimoP: [],
      img1: [require('./img/1.jpg'), false, require('./img/i.png')],
      img2: [require('./img/2.jpg'), false, require('./img/i.png')],
      img3: [require('./img/3.jpg'), false, require('./img/i.png')],
      img4: [require('./img/4.jpg'), false, require('./img/i.png')],
      img5: [require('./img/5.jpg'), false, require('./img/i.png')],
      img6: [require('./img/6.jpg'), false, require('./img/i.png')],
      img7: [require('./img/1.jpg'), false, require('./img/i.png')],
      img8: [require('./img/2.jpg'), false, require('./img/i.png')],
      img9: [require('./img/3.jpg'), false, require('./img/i.png')],
      img10: [require('./img/4.jpg'), false, require('./img/i.png')],
      img11: [require('./img/5.jpg'), false, require('./img/i.png')],
      img12: [require('./img/6.jpg'), false, require('./img/i.png')],
      valores: [],

    };
  }

  componentDidMount() {
    this.iniciar()
  }

  iniciar() {
    this.ocultar(1)
    this.ocultar(2)
    this.ocultar(3)
    this.ocultar(4)
    this.ocultar(5)
    this.ocultar(6)
    this.ocultar(7)
    this.ocultar(8)
    this.ocultar(9)
    this.ocultar(10)
    this.ocultar(11)
    this.ocultar(12)
    this.setState({ valores: this.gerarAle(),
                    ultimoP: [], })
  }
   
  verifica(){
    
    if(this.state.ultimoP.length!=2) return
    
    let aux= this.state.ultimoP
    if(
      ((aux[0]==1 && aux[1]==7) || (aux[0]==7 && aux[1]==1))||
      ((aux[0]==2 && aux[1]==8) || (aux[0]==8 && aux[1]==2))||
      ((aux[0]==3 && aux[1]==9) || (aux[0]==9 && aux[1]==3))||
      ((aux[0]==4 && aux[1]==10) || (aux[0]==10 && aux[1]==4))||
      ((aux[0]==5 && aux[1]==11) || (aux[0]==11 && aux[1]==5))||
      ((aux[0]==6 && aux[1]==12) || (aux[0]==12 && aux[1]==6))
    ){
      this.setState({ultimoP:[]})
    }else{
      this.ocultar(aux[0])
      this.ocultar(aux[1])
      this.setState({cont: 1,ultimoP:[]})
    }
    if(this.state.img1[1]==true &&
      this.state.img2[1]==true &&
      this.state.img3[1]==true &&
      this.state.img4[1]==true &&
      this.state.img5[1]==true &&
      this.state.img6[1]==true &&
      this.state.img7[1]==true &&
      this.state.img8[1]==true &&
      this.state.img9[1]==true &&
      this.state.img10[1]==true &&
      this.state.img11[1]==true &&
      this.state.img12[1]==true){
        Alert.alert(
          "Fim de Jogo",
          "Vc Venceu",
          [
            { text: "OK", onPress: () => {} }
          ],
          { cancelable: false }
        );
      }

    //this.state
  }
  ocultar(num){

    switch (num) {
      case 1:
        this.setState({
          img1: [this.state.img1[0], false, this.state.img1[2]],
        })
        break;
      case 2:

        this.setState({
          img2: [this.state.img2[0], false, this.state.img2[2]],
        })
        break;
      case 3:

        this.setState({
          img3: [this.state.img3[0], false, this.state.img3[2]],
        })
        break;
      case 4:

        this.setState({
          img4: [this.state.img4[0], false, this.state.img4[2]],
        })
        break;
      case 5:
        this.setState({
          img5: [this.state.img5[0], false, this.state.img5[2]],
        })
        break;
      case 6:
        this.setState({
          img6: [this.state.img6[0], false, this.state.img6[2]],
        })
        break;
      case 7:
        this.setState({
          img7: [this.state.img7[0], false, this.state.img7[2]],
          })
        break;
      case 8:
        this.setState({
          img8: [this.state.img8[0], false, this.state.img8[2]],
          })
        break;
      case 9:
        this.setState({
          img9: [this.state.img9[0], false, this.state.img9[2]],
          })
        break;
      case 10:
        this.setState({
          img10: [this.state.img10[0], false, this.state.img10[2]],
        })
        break;
      case 11:
        this.setState({
        img11: [this.state.img11[0], false, this.state.img11[2]],
        })
        break;
        case 12:
        this.setState({
        img12: [this.state.img12[0], false, this.state.img12[2]],
        })
        break;
      default:
        break;
    }
  }
  tocar(num) {

    if (this.state.ultimoP.length==2)return
    let aux=[]
    switch (num) {
      case 1:
        aux= this.state.ultimoP
        aux.push(1)
        this.setState({
          img1: [this.state.img1[0], true, this.state.img1[2]],
          ultimoP: aux
        })
        break;
      case 2:
        aux= this.state.ultimoP
        aux.push(2)
        this.setState({
          img2: [this.state.img2[0], true, this.state.img2[2]],
          ultimoP: aux
        })
        break;
      case 3:
        aux= this.state.ultimoP
        aux.push(3)
        this.setState({
          img3: [this.state.img3[0], true, this.state.img3[2]],
          ultimoP: aux
        })
        break;
      case 4:
        aux= this.state.ultimoP
        aux.push(4)
        this.setState({
          img4: [this.state.img4[0], true, this.state.img4[2]],
          ultimoP: aux
        })
        break;
      case 5:
        aux= this.state.ultimoP
        aux.push(5)
        this.setState({
          img5: [this.state.img5[0], true, this.state.img5[2]],
          ultimoP: aux
        })
        break;
      case 6:
        aux= this.state.ultimoP
        aux.push(6)
        this.setState({
          img6: [this.state.img6[0], true, this.state.img6[2]],
          ultimoP: aux
        })
        break;
      case 7:
        aux= this.state.ultimoP
        aux.push(7)
        this.setState({
          img7: [this.state.img7[0], true, this.state.img7[2]],
          ultimoP: aux
        })
        break;
      case 8:
        aux= this.state.ultimoP
        aux.push(8)
        this.setState({
          img8: [this.state.img8[0], true, this.state.img8[2]],
          ultimoP: aux
        })
        break;
      case 9:
        aux= this.state.ultimoP
        aux.push(9)
        this.setState({
          img9: [this.state.img9[0], true, this.state.img9[2]],
          ultimoP: aux
        })
        break;
      case 10:
        aux= this.state.ultimoP
        aux.push(10)
        this.setState({
          img10: [this.state.img10[0], true, this.state.img10[2]],
          ultimoP: aux
        })
        break;
      case 11:
        aux= this.state.ultimoP
        aux.push(11)
        this.setState({
          img11: [this.state.img11[0], true, this.state.img11[2]],
          ultimoP: aux
        })
        break;
        case 12:
        aux= this.state.ultimoP
        aux.push(12)
        this.setState({
          img12: [this.state.img12[0], true, this.state.img12[2]],
          ultimoP: aux
        })
        break;
      default:
        break;
    }
  }
  abrir(num) {
    switch (num) {
      case 1:
        return <Image source={this.state.img1[1] ? this.state.img1[0] : this.state.img1[2]} />
      case 2:
        return <Image source={this.state.img2[1] ? this.state.img2[0] : this.state.img2[2]} />
      case 3:
        return <Image source={this.state.img3[1] ? this.state.img3[0] : this.state.img3[2]} />
      case 4:
        return <Image source={this.state.img4[1] ? this.state.img4[0] : this.state.img4[2]} />
      case 5:
        return <Image source={this.state.img5[1] ? this.state.img5[0] : this.state.img5[2]} />
      case 6:
        return <Image source={this.state.img6[1] ? this.state.img6[0] : this.state.img6[2]} />
      case 7:
        return <Image source={this.state.img7[1] ? this.state.img7[0] : this.state.img7[2]} />
      case 8:
        return <Image source={this.state.img8[1] ? this.state.img8[0] : this.state.img8[2]} />
      case 9:
        return <Image source={this.state.img9[1] ? this.state.img9[0] : this.state.img9[2]} />
      case 10:
        return <Image source={this.state.img10[1] ? this.state.img10[0] : this.state.img10[2]} />
      case 11:
        return <Image source={this.state.img11[1] ? this.state.img11[0] : this.state.img11[2]} />
      case 12:
        return <Image source={this.state.img12[1] ? this.state.img12[0] : this.state.img12[2]} />
      default:
        break;
    }
  }
  gerarAle() {
    let sorteados = []
    while (sorteados.length < 12) {
      let sugestao = Math.ceil(Math.random() * 12)
      while (sorteados.indexOf(sugestao) >= 0) {
        sugestao = Math.ceil(Math.random() * 12);
      }
      sorteados.push(sugestao);
    }

    return sorteados
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View>
        <FlatList
          data={this.state.valores}
          keyExtractor={item=>item}
          numColumns={3}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.item} onPress={
              () => { this.tocar(item)
                    //this.verifica()
                    setTimeout(() => {
                      this.verifica()
                    }, 1000);
              }
            }>

              {this.abrir(item)}
            </TouchableOpacity>}
        />
        </View>
        <View style={styles.novoJogo}>
            <TouchableOpacity onPress={() => { this.iniciar()}}>
            <Text>Novo Jogo</Text>
            </TouchableOpacity>
        
        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop:20,
  },
  item:{
    flexGrow:1,
    padding:5,
    flexBasis:0,
  },
  novoJogo:{
    padding:10,
    alignItems:'center',
    backgroundColor: '#4eb300',
  }
});
