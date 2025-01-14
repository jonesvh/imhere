import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#131016",
    },
    eventName: {
      color: "#FFF",
      fontWeight: "bold",
      marginTop: 48,
      fontSize:24
    },
    eventDate: {
      color: "#6B6B6B",
      fontSize:16
    },
    input:{
        flex:1,
        backgroundColor:"#1F1E25",
        borderRadius: 5,
        height: 56,
        color: "#FFF",
        padding: 16,
        fontSize: 16,
        marginRight:12
    },
    buttonText: {
        color: "#FFF",
        fontSize: 24
    },
    button:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor: "#31CF67",
        alignItems:"center",
        justifyContent:"center"
    },
    form: {
        width:"100%",
        flexDirection:"row",
        marginTop: 36,
        marginBottom: 42
    },
    listEmptyText:{
      color: "#FFF",
      fontSize: 14,
      textAlign: "center"
    }
  });