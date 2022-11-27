import React, {memo, useRef, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {sizeHeight, sizeWidth} from '../../commons/Responsive';
import {Colors} from '../../commons/Colors';
import BaseStyles from '../../BaseStyles';

const ActionSheet = props => {
  const {
    visible,
    maxHeight = 400,
    onClose = () => {},
    style = {},
    swipeDirection = ['down'],
    isShowHeader = true,
    backdropOpacity = 0.3,
  } = props;

  const [scrollOffset, setScrollOffset] = useState(0);
  const scrollRef = useRef();

  const handleScroll = event => {
    const offsetY = event?.nativeEvent?.contentOffset?.y ?? 0;
    setScrollOffset(offsetY);
  };

  const scrollTo = offset => {
    if (scrollRef.current) {
      scrollRef.current?.scrollTo(offset);
    }
  };

  return (
    <Modal
      isVisible={visible}
      scrollOffsetMax={maxHeight}
      swipeDirection={swipeDirection}
      propagateSwipe={true}
      scrollTo={scrollTo}
      backdropOpacity={backdropOpacity}
      scrollOffset={scrollOffset}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      style={[styles.container, style]}>
      <View style={styles.content}>
        <ScrollView ref={scrollRef} onScroll={handleScroll} bounces={false}>
          {isShowHeader && (
            <View style={[BaseStyles.center, styles.header]}>
              <View style={styles.subHeader} />
            </View>
          )}
          {props.children}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default memo(ActionSheet);

ActionSheet.propTypes = {
  visible: PropTypes.bool,
  maxHeight: PropTypes.number,
  onClose: PropTypes.func,
  style: PropTypes.object,
  swipeDirection: PropTypes.array,
  isShowHeader: PropTypes.bool,
  backdropOpacity: PropTypes.number,
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  content: {},
  header: {
    borderTopLeftRadius: sizeWidth(6),
    borderTopRightRadius: sizeWidth(6),
    height: sizeHeight(24),
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  subHeader: {
    width: sizeWidth(40),
    backgroundColor: Colors.black_neutral_05,
    height: sizeHeight(4),
    borderRadius: 2,
  },
});
