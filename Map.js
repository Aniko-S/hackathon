import React, {useEffect, useState} from "react";
import MapView, { Polygon, Heatmap, Marker } from "react-native-maps";
import { Dimensions, StyleSheet, View, Modal, ImageBackground, Image } from "react-native";
import navigation from "./Navigation";
import ParkingMeters from "./ParkingMeters";
import useParkingLots from "./useParkingLots";

const pointsSzechenyi = [];
let startI = 46.252995;
let startJ = 20.149482;
let endI = 46.254356;
let endJ = 20.150681;
let stepI = (endI - startI) / 20;
let stepJ = (endJ - startJ) / 20;
for (
  let i = startI, j = startJ;
  i <= endI && j <= endJ;
  i += stepI, j += stepJ
) {
  pointsSzechenyi.push({
    latitude: i,
    longitude: j,
    weight: 1,
  });
}

const pointsDani = [];
startI = 46.249973;
startJ = 20.142645;
endI = 46.251012;
endJ = 20.143532;
stepI = (endI - startI) / 20;
stepJ = (endJ - startJ) / 20;
for (
  let i = startI, j = startJ;
  i <= endI && j <= endJ;
  i += stepI, j += stepJ
) {
  pointsDani.push({
    latitude: i,
    longitude: j,
    weight: 0.1,
  });
}

const pointsDom = [];
startI = 46.247625;
startJ = 20.14873;
endI = 46.248365;
endJ = 20.149352;
stepI = (endI - startI) / 20;
stepJ = (endJ - startJ) / 20;
for (
  let i = startI, j = startJ;
  i <= endI && j <= endJ;
  i += stepI, j += stepJ
) {
  pointsDani.push({
    latitude: i,
    longitude: j,
    weight: Math.round(Math.random()),
  });
}

const gradient = {
  colors: [
    "rgb(0, 225, 0)",
    "rgb(178, 225, 102)",
    "rgb(153, 225, 51)",
    "rgb(255, 225, 0)",
    "rgb(255, 153, 51)",
    "rgb(255, 0, 0)",
  ],
  startPoints: [0.1, 0.3, 0.8, 0.85, 0.99, 1],
  colorMapSize: 256,
};

function Map() {
  const parkingLots = useParkingLots()
  function handlePress(coordinate) {
    navigation(coordinate.latitude, coordinate.longitude);
  }

  const [radius, setRadius] = useState(10);
  const greenCordinates = [
    { latitude: 46.256037, longitude: 20.157685 },
    { latitude: 46.256596, longitude: 20.157353 },
    { latitude: 46.257223, longitude: 20.157388 },
    { latitude: 46.257301, longitude: 20.157627 },
    { latitude: 46.257164, longitude: 20.156986 },
    { latitude: 46.257019, longitude: 20.1562 },
    { latitude: 46.256752, longitude: 20.155908 },
    { latitude: 46.257199, longitude: 20.153939 },
    { latitude: 46.257717, longitude: 20.152619 },
    { latitude: 46.258602, longitude: 20.151074 },
    { latitude: 46.258897, longitude: 20.150639 },
    { latitude: 46.259014, longitude: 20.150585 },
    { latitude: 46.259042, longitude: 20.150209 },
    { latitude: 46.258973, longitude: 20.149935 },
    { latitude: 46.258973, longitude: 20.149935 },
    { latitude: 46.258785, longitude: 20.148335 },
    { latitude: 46.256999, longitude: 20.146313 },
    { latitude: 46.257557, longitude: 20.145195 },
    { latitude: 46.257396, longitude: 20.145015 },
    { latitude: 46.257418, longitude: 20.144913 },
    { latitude: 46.255076, longitude: 20.142915 },
    { latitude: 46.255067, longitude: 20.142979 },
    { latitude: 46.254985, longitude: 20.14292 },
    { latitude: 46.254476, longitude: 20.144188 },
    { latitude: 46.252459, longitude: 20.143127 },
    { latitude: 46.251168, longitude: 20.1427 },
    { latitude: 46.251031, longitude: 20.14351 },
    { latitude: 46.249926, longitude: 20.142609 },
    { latitude: 46.249595, longitude: 20.143092 },
    { latitude: 46.24865, longitude: 20.141299 },
    { latitude: 46.247475, longitude: 20.143384 },
    { latitude: 46.246019, longitude: 20.145763 },
    { latitude: 46.245559, longitude: 20.1472 },
    { latitude: 46.246605, longitude: 20.14808 },
    { latitude: 46.245626, longitude: 20.150097 },
    { latitude: 46.245589, longitude: 20.150279 },
    { latitude: 46.245733, longitude: 20.150385 },
    { latitude: 46.246074, longitude: 20.150657 },
    { latitude: 46.25029, longitude: 20.15194 },
    { latitude: 46.251844, longitude: 20.152584 },
    { latitude: 46.252923, longitude: 20.153179 },
    { latitude: 46.253631, longitude: 20.153581 },
    { latitude: 46.254344, longitude: 20.154206 },
    { latitude: 46.255104, longitude: 20.15522 },
    { latitude: 46.25569, longitude: 20.156545 },
    { latitude: 46.256035, longitude: 20.157639 },
  ];

  const yellowCordinates = [
    { latitude: 46.2457273, longitude: 20.1502079 },
    { latitude: 46.2457532, longitude: 20.1505297 },
    { latitude: 46.2458015, longitude: 20.1508516 },
    { latitude: 46.2484094, longitude: 20.1517421 },
    { latitude: 46.251021, longitude: 20.1525468 },
    { latitude: 46.2522562, longitude: 20.1532334 },
    { latitude: 46.2535471, longitude: 20.1542419 },
    { latitude: 46.2546117, longitude: 20.1550949 },
    { latitude: 46.2554351, longitude: 20.156731 },
    { latitude: 46.2559321, longitude: 20.1577717 },
    { latitude: 46.2560137, longitude: 20.1577127 },
    { latitude: 46.2564774, longitude: 20.1602232 },
    { latitude: 46.2570152, longitude: 20.1621866 },
    { latitude: 46.2576161, longitude: 20.1638228 },
    { latitude: 46.2577644, longitude: 20.1638013 },
    { latitude: 46.2577088, longitude: 20.1633936 },
    { latitude: 46.2582466, longitude: 20.1631254 },
    { latitude: 46.2583282, longitude: 20.1630771 },
    { latitude: 46.2584691, longitude: 20.1634312 },
    { latitude: 46.2591516, longitude: 20.1630825 },
    { latitude: 46.2595225, longitude: 20.162605 },
    { latitude: 46.260153, longitude: 20.1614892 },
    { latitude: 46.2606389, longitude: 20.1604056 },
    { latitude: 46.2610172, longitude: 20.1589519 },
    { latitude: 46.2613176, longitude: 20.15782 },
    { latitude: 46.261529, longitude: 20.1509857 },
    { latitude: 46.2609504, longitude: 20.1473808 },
    { latitude: 46.2587251, longitude: 20.1428747 },
    { latitude: 46.2547044, longitude: 20.1393557 },
    { latitude: 46.2519743, longitude: 20.1384759 },
    { latitude: 46.2492589, longitude: 20.1378107 },
    { latitude: 46.2472705, longitude: 20.138154 },
    { latitude: 46.2454602, longitude: 20.1392913 },
    { latitude: 46.2444696, longitude: 20.1406217 },
    { latitude: 46.2431452, longitude: 20.1432717 },
    { latitude: 46.2425886, longitude: 20.1444948 },
    { latitude: 46.2436237, longitude: 20.1457715 },
    { latitude: 46.2453489, longitude: 20.1472145 },
  ];

  const onRegionChangeHandler = (region) => {
    const newRadius = (1 / Math.sqrt(20 * region.latitudeDelta)) * 10;
    if (Math.round(newRadius * 1000) !== Math.round(radius * 1000)) {
      console.log("setRadius");
      setRadius(newRadius);
    }
  };

  const [modalVisible, setModalVisible] = useState(false)

  const [imageVersion, setImageVersion] = useState(0);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      setImageVersion((version) => version + 1)
      const newImageUrl = `https://live.onlinecamera.net/207szegedomterthumbnail2.jpg?uniq=0.961870666192049${imageVersion.toString().split('').reverse().join('')}`;
      await Image.prefetch(newImageUrl);
      setImageUrl(newImageUrl)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [setImageUrl, setImageVersion, imageVersion])

  return (
    <View style={styles.container}>
      <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
      >
        {imageUrl && <Image
            style={styles.liveImage}
            fadeDuration={0}
            source={{
              uri: imageUrl,
            }}
        />}
      </Modal>
      <MapView
        provider={"google"}
        style={styles.map}
        initialRegion={{
          latitude: 46.253,
          longitude: 20.148,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChange={onRegionChangeHandler}
        onLongPress={(event) => handlePress(event.nativeEvent.coordinate)}
      >
        <Polygon
          key="1"
          coordinates={yellowCordinates}
          strokeColor="rgba(225, 209, 10, 1)"
          fillColor="rgba(225, 209, 10, 0.3)"
          strokeWidth={1}
        />
        <Polygon
          key="2"
          coordinates={greenCordinates}
          strokeColor="rgba(63, 195, 128, 1)"
          fillColor="rgba(63, 195, 128, 0.3)"
          strokeWidth={1}
        />

        <Heatmap
          points={pointsSzechenyi}
          gradient={gradient}
          radius={radius}
          opacity={0.5}
          heatmapMode={"POINTS_WEIGHT"}
        />
        {parkingLots.length > 0 && <Heatmap
            points={parkingLots}
            gradient={gradient}
            radius={radius}
            opacity={0.5}
            heatmapMode={"POINTS_WEIGHT"}
        />}
        <Marker
          coordinate={{ latitude: 46.247744, longitude: 20.148432 }}
          onPress={() => setModalVisible(true)}
          anchor={{x: 0,y: 0}}
        >
          <Image style={styles.cameraMarker} source={require("./assets/camera_small.png")}/>
        </Marker>
        <ParkingMeters/>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraMarker: {
    width: 20,
    height: 20,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  liveImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center"
  },
});

export default Map;
