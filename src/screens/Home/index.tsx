import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home() {

  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      setParticipantName("")
      return Alert.alert("Participante existe", "Ja existe um participante na lista com esse nome")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {
    
    Alert.alert("Remover", `Voce deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text:"Nao",
        style: "cancel"
      }
    ])
  }


  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Dezembro 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          // onChangeText={(text) => setParticipantName(text)}
          onChangeText={setParticipantName} //simplificado
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {participants.map((participant) => (
          <Participant
            name={participant}
            onRemove={() => handleParticipantRemove(participant)}
            key={participant}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
            key={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={()=> (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista de presenca.
          </Text>
        )}
      />

      {/* <Participant name="Jones" onRemove={handleParticipantRemove}/> Passando funcao sem parametro*/}
      {/* <Participant name="Milena" onRemove={() => handleParticipantRemove("Milena")}/> */}
    </View>
  );
}
