import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

export default function App() {
  const [imageRoll, setImageRoll] = useState(null);
  const [imageCam, setImageCam] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageRoll(result.uri);
    }
  };

  const takePic = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImageCam(result.uri);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ marginRight: 10 }}>
            <Button title="Camara" onPress={takePic} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Button title="Subir foto" onPress={pickImage} />
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ScrollView>
            {imageCam && (
              <View style={styles.card}>
                <Image source={{ uri: imageCam }} style={styles.image} />
              </View>
            )}
            {imageRoll && (
              <View style={styles.card}>
                <Image source={{ uri: imageRoll }} style={styles.image} />
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
  },

  container: {
    marginTop: 50,
    alignItems: "center",
    marginBottom: 80,
  },
  image: {
    width: 300,
    height: 300,
  },
  card: {
    width: 330,
    padding: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#e3e1e1",
    marginTop: 30,
    marginBottom: 5,
  },
});
