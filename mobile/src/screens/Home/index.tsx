import { useEffect } from 'react';
import { FlatList, Image, View } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../Components/GameCard';
import { Heading } from '../../Components/Heading';

import { GAMES } from '../../utils/games';
import { styles } from './styles';

export function Home() {
  useEffect(() => {
    fetch("http://172.27.86.110:3333/games")
    .then(response => response.json())
   .then(data => console.log(data))
    .catch(err => console.log(err))
  }, [])
  return (
    <View style={styles.container}>
      <Image
      source={logoImg} 
      style={styles.logo}
      />

      <Heading 
      title="Encontre seu duo!"
      subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList 
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
        <GameCard 
        data={item}
      />

       )}
       showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.contentList}
      />

      
    </View>
  );
}