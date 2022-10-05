import { useEffect, useState } from 'react';
import { FlatList, Image, View } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png'
import { GameCard, GameCardProps } from '../../Components/GameCard';
import { Heading } from '../../Components/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    fetch("http://192.168.100.156:3333/games")
    .then(response => response.json())
   .then(data => setGames(data))
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
        data={games}
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