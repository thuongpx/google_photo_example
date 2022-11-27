import BaseStyles from '../../../BaseStyles';
import {Colors} from '../../../commons/Colors';
import {
  heightPercentageToDP,
  sizeFont,
  sizeHeight,
  sizeWidth,
} from '../../../commons/Responsive';
import React, {memo} from 'react';
import {Text, Pressable, StyleSheet, ScrollView} from 'react-native';

const ITEMS = [];

const MenuActionSheet = ({style = {}, items = ITEMS, onCancel = () => {}}) => {
  const handlePressItem = item => {
    if (typeof item.onPress === 'function') {
      onCancel();
      item.onPress(item);
    }
  };

  return (
    <>
      <ScrollView
        style={[styles.container, style]}
        contentContainerStyle={styles.content}>
        {items.map(item => (
          <Item
            key={item.key}
            text={item.name}
            color={item.textColor}
            onPress={() => handlePressItem(item)}
          />
        ))}
      </ScrollView>
      <Pressable
        style={styles.cancelWrapper}
        onPress={onCancel}
        key="cancelWrapper">
        <Item
          itemKey={'cancel'}
          text="Cancel"
          textStyle={styles.textCancel}
          onPress={onCancel}
        />
      </Pressable>
    </>
  );
};

const Item = ({
  color = Colors.neutral_02,
  text,
  onPress = () => {},
  style = {},
  textStyle = {},
}) => {
  return (
    <Pressable
      android_ripple={{color: '#E6F5FC'}}
      onPress={onPress}
      style={[BaseStyles.rowCenter, styles.itemWrapper, style]}>
      <Text style={[styles.textItem, textStyle, {color}]}>{text}</Text>
    </Pressable>
  );
};

export default memo(MenuActionSheet);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: sizeWidth(12),
    maxHeight: heightPercentageToDP(50),
  },
  content: {
    padding: sizeWidth(5),
  },
  itemWrapper: {
    height: sizeHeight(46),
  },
  textItem: {
    fontSize: sizeFont(17),
    lineHeight: sizeFont(24),
    color: Colors.neutral_02,
    textAlign: 'center',
    fontWeight: '600',
  },
  cancelWrapper: {
    backgroundColor: Colors.white,
    paddingHorizontal: sizeWidth(16),
    borderRadius: sizeWidth(12),
    marginTop: sizeHeight(5),
    height: sizeHeight(64),
    justifyContent: 'center',
  },
  textCancel: {
    fontWeight: '600',
  },
});
