import BaseStyles from '../../BaseStyles/index';
import {Colors} from '../../commons/Colors';
import {sizeWidth} from '../../commons/Responsive';
import React, {memo, useEffect, useState} from 'react';
import {Platform, Pressable, StyleSheet, View, Text} from 'react-native';
import ActionSheet from '../ActionSheet';
import MenuActionSheet from '../ActionSheet/MenuActionSheet';
import ImageCropPicker from 'react-native-image-crop-picker';
import {useTranslation} from 'react-i18next';

let timer;

const ImageUpload = ({
  onImageCallback = () => {},
  portrait_img,
  isUpload = true,
  isShowActions = true,
  userId,
  isUpdateAvatar = true,
  imageName,
  onPress,
}) => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(false);
  const [portraitImgUrl, setPortraitImgUrl] = useState(
    !portrait_img ? null : {uri: portrait_img},
  );
  const [fileName, setFileName] = useState(
    portraitImgUrl === null ? 'No image' : imageName,
  );

  //   const dispatch = useDispatch();

  const onCloseActionSheet = () => setVisible(false);
  const onShowActionSheet = () => {
    if (!isShowActions) {
      showGalleryModal();
    } else {
      setVisible(true);
    }
  };

  const handleOpenGallery = async () => {
    timer = setTimeout(showGalleryModal, 500);
  };

  const showGalleryModal = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        multiple: false,
        cropping: true,
        compressImageQuality: 0.5,
      });

      if (image) {
        setPortraitImgUrl({uri: image.path});
        setFileName(image.filename);
      }
      const photoPayload = {
        uri:
          Platform.OS === 'ios'
            ? image.path.replace('file://', '')
            : image.path,
        name: `image-${userId}.png`,
        type: image.mime,
        ...image,
      };

      onImageCallback(photoPayload);
      if (!isUpload) {
        return;
      }

      return photoPayload;
    } catch (error) {
      console.log('@@@ error', error.response);
      // Handle Error when choose images.
    }
  };

  useEffect(() => {
    return timer && clearTimeout(timer);
  }, []);

  return (
    <>
      <View style={[styles.container]}>
        <Pressable style={[styles.iconWrapper]} onPress={onShowActionSheet}>
          <Text style={{color: 'white'}}>{'Upload image'}</Text>
        </Pressable>
      </View>
      <ActionSheet
        backdropOpacity={0.3}
        visible={visible}
        onClose={onCloseActionSheet}
        style={{margin: sizeWidth(15)}}
        isShowHeader={false}>
        <MenuActionSheet
          onCancel={onCloseActionSheet}
          items={[
            {
              key: 'camera',
              name: 'Select picture',
              onPress: handleOpenGallery,
              textColor: Colors.neutral_02,
              style: {...BaseStyles.marginBottomSmall},
            },
          ]}
        />
      </ActionSheet>
    </>
  );
};

export default memo(ImageUpload);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: sizeWidth(30),
  },
  iconWrapper: {
    right: 0,
    bottom: 0,
    width: sizeWidth(100),
    height: sizeWidth(40),
    borderRadius: sizeWidth(12),
    backgroundColor: Colors.primary_01,
    ...BaseStyles.center,
  },
  icon: {
    width: sizeWidth(12),
    height: sizeWidth(12),
  },
});
