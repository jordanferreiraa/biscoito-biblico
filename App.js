import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('')

  let frases = [
    'Em vez disso, revistam-se do Senhor Jesus Cristo e não fiquem imaginando formas de satisfazer seus desejos pecaminosos. Romanos 13:14.',
    'Mas os que confiam no Senhor renovam suas forças; voam alto, como águias. Correm e não se cansam, caminham e não desfalecem. Isaías 40:31.',
    'Busquem, em primeiro lugar, o reino de Deus e a sua justiça, e todas essas coisas lhes serão dadas. Mateus 6:33.',
    'Quem ouve minhas palavras e as pratica é tão sábio como a pessoa que constrói sua casa sobre uma rocha firme. Mateus 7:24.',
    'Mas quem ouve meu ensino e não o pratica é tão tolo como a pessoa que constrói sua casa sobre a areia. Mateus 7:26.',
    'Porque Deus amou ao mundo de tal maneira que deu seu Filho unigênito, para que todo o que nele crê não pereça, mas tenha a vida eterna. João 3:16.',
    'Eu lhes digo a verdade: quem ouve minha mensagem e crê naquele que me enviou tem a vida eterna. Jamais será condenado, mas já passou da morte para a vida. João 5:24.',
    'Jesus disse: "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim". João 14:6',
    'Estas coisas vos tenho dito para que tenhais paz em mim. No mundo, passais por aflições; mas tende bom ânimo; eu venci o mundo. João 16:33.',
    'Mas Deus nos prova seu grande amor ao enviar Cristo para morrer por nós quando ainda éramos pecadores. Romanos 5:8.',
    'Pois o salário do pecado é a morte, mas a dádiva de Deus é a vida eterna em Cristo Jesus, nosso Senhor. Romanos 6:23.',
    'Se você declarar com sua boca que Jesus é Senhor e crer em seu coração que Deus o ressuscitou dos mortos, será salvo. Romanos 10:9.',
    'Vocês são salvos pela graça, por meio da fé. Isso não vem de vocês; é uma dádiva de Deus. Efésios 2:8.',
    'Vistam toda a armadura de Deus, para que possam permanecer firmes contra as estratégias do diabo. Efésios 6:11.',
    'Se continuamos a pecar deliberadamente depois de ter recebido o conhecimento da verdade, já não há sacrifício que cubra esses pecados. Hebreus 10:26.',
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    
    setTextoFrase(frases[numeroAleatorio])
    setImg(require('./src/biscoitoAberto.png'))
  }

  function reiniciar() {
    setImg(require('./src/biscoito.png'))
    setTextoFrase('')
  }

  return (
    <View style={styles.container}>
      
      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textofrase} > {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito } >
        <View style={styles.bntArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#ccc' } ]} onPress={ reiniciar } >
        <View style={styles.bntArea}>
          <Text style={[styles.btnTexto, { color: '#ccc' } ]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#DD7B22',
    borderWidth: 2,
    borderRadius: 25
  },
  bntArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#DD7B22'
  }
})

export default App;