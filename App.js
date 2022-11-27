/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, Text, Image, TouchableOpacity, View, ScrollView, Alert} from 'react-native';
import ImageUpload from './src/components/ImageUpload';
import ImageView from 'react-native-image-view';
import uuid from 'react-uuid';

const imageList = [
  {
    id: uuid(),
    uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
  },
  {
    id: uuid(),
    uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
  },
  {
    id: uuid(),
    uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111',
  },
  {
    id: uuid(),
    uri: 'file:///storage/emulated/0/Android/data/com.google_photo_api_example/files/Pictures/87164fc3-342b-4b55-9b94-a565c283b3a2.jpg',
  },
];

const App = () => {

  const [imgList, setImgList] = useState(imageList);
  const [imageView, setImageView] = useState([]);
  const [isImageViewVisible, setIsImageViewVisible] = useState(false);

  const deleteImage = (item) => {
    Alert.alert(
      "Delete",
      "Do you want to delete this images?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDeleteImg(item) }
      ]
    );
  }

  const handleDeleteImg = (item) => {
    const newImgList = imgList.filter(el => el.id !== item.id);
    setImgList(newImgList);
  };

  const closeImage = () => {
    setIsImageViewVisible(false);
  };

  const viewImage = (item) => {
    setImageView([
      {
        source: {
            uri: item.uri,
        },
        width: 806,
        height: 720,
      },
    ]);
    setIsImageViewVisible(true);
  };

  const handleImageCallback = (item) => {
    const newImageList = [...imgList, {id: uuid(), uri: item.path}];
    setImgList(newImageList);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>This is an app photo</Text>
      <Text style={styles.note}>Note: Click image to view it</Text>
      <View style={{height: 700}} >
        <ScrollView>
        <View style={styles.wrapImage}>
        {
          imgList.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => viewImage(item)} style={styles.imageViewItem}>
                <Image style={styles.imgItem} resizeMode={'center'} source={{uri:item.uri}} />
                <TouchableOpacity style={styles.btnDel} onPress={() => deleteImage(item)}><Text style={styles.txtBtnDel}>Delete</Text></TouchableOpacity>
              </TouchableOpacity>
            );
          })
        }
        </View>
        </ScrollView>
      </View>
      <ImageView
        images={imageView}
        imageIndex={0}
        isVisible={isImageViewVisible}
        onClose={closeImage}
      />

      <ImageUpload isUpdateAvatar={true} onImageCallback={handleImageCallback}/>

    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  wrapper:{
    flex: 1, 
    alignItems:'center' 
  },
  title:{
    color: 'blue',
    fontSize:20,
    fontWeight: 'bold'
  },
  note:{
    color:'red'
  },
  imageViewItem: {
    width: 150,
    borderRadius: 10,
    borderColor:'blue',
    borderWidth: 1,
    alignItems:'center',
    marginHorizontal: 10,
    marginVertical:10,
    flexDirection: 'column'
  },
  imgItem: {
    width: 150,
    height: 150,
  },
  wrapImage: {
    flex:1, 
    flexWrap:'wrap', 
    flexDirection: 'row',
    alignSelf:'center', 
    marginHorizontal:5 
  },
  btnDel:{
    marginVertical: 10, 
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  txtBtnDel:{
    color: 'white',
  }
});
