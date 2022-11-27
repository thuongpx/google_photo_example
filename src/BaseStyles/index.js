import {StyleSheet} from 'react-native';
import {sizeFont, sizeWidth, sizeHeight} from '../commons/Responsive';
import {Colors} from '../commons/Colors';

function initialBaseStyle() {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexRow: {
      flexDirection: 'row',
    },
    rowCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rowVCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rowHCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    flexCol: {
      flexDirection: 'column',
    },
    colCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    colVCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignSelfBaseLine: {
      alignSelf: 'baseline',
    },
    alignItemsBaseLine: {
      alignItems: 'baseline',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    /* Sizes Layouts */
    fill: {
      flex: 1,
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    fullHeight: {
      height: '100%',
    },
    absolute: {
      position: 'absolute',
    },
    fullScreen: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    /** Text Styles */
    textSmaller: {
      fontSize: sizeFont(12),
    },
    textSmall: {
      fontSize: sizeFont(12),
    },
    textMedium: {
      fontSize: sizeFont(16),
      lineHeight: sizeHeight(24),
    },
    textBig: {
      fontSize: sizeFont(12),
    },
    textBigger: {
      fontSize: sizeFont(12),
    },
    textCenter: {
      textAlign: 'center',
    },
    textError: {
      color: Colors.secondary_02,
    },
    text14: {
      fontSize: sizeFont(14),
      lineHeight: sizeFont(24),
    },
    text16: {
      fontSize: sizeFont(16),
      lineHeight: sizeFont(24),
    },
    // textRegular: {
    //   fontFamily: FONTS.INTER_REGULAR,
    // },
    // textBold: {
    //   fontFamily: FONTS.INTER_BOLD,
    // },
    // textSemibold: {
    //   fontFamily: FONTS.INTER_SEMI_BOLD,
    // },
    // textExtraBold: {
    //   fontFamily: FONTS.INTER_EXTRA_BOLD,
    // },
    // textFontMedium: {
    //   fontFamily: FONTS.INTER_MEDIUM,
    // },
    // textLight: {
    //   fontFamily: FONTS.INTER_LIGHT,
    // },
    // textBlack: {
    //   fontFamily: FONTS.INTER_BLACK,
    // },
    /** Margin */
    // Margin Small.
    marginSmall: {
      margin: sizeWidth(5),
    },
    marginRightSmall: {
      marginRight: sizeWidth(5),
    },
    marginLeftSmall: {
      marginLeft: sizeWidth(5),
    },
    marginTopSmall: {
      marginTop: sizeWidth(5),
    },
    marginBottomSmall: {
      marginBottom: sizeWidth(5),
    },
    marginVSmall: {
      marginVertical: sizeWidth(5),
    },
    marginHSmall: {
      marginHorizontal: sizeWidth(5),
    },
    // Margin Medium.
    marginMedium: {
      margin: sizeWidth(10),
    },
    marginRightMedium: {
      marginRight: sizeWidth(10),
    },
    marginLeftMedium: {
      marginLeft: sizeWidth(10),
    },
    marginTopMedium: {
      marginTop: sizeWidth(10),
    },
    marginBottomMedium: {
      marginBottom: sizeWidth(10),
    },
    marginVMedium: {
      marginVertical: sizeWidth(10),
    },
    marginHMedium: {
      marginHorizontal: sizeWidth(10),
    },
    // Margin Big.
    marginBig: {
      margin: sizeWidth(15),
    },
    marginRightBig: {
      marginRight: sizeWidth(15),
    },
    marginLeftBig: {
      marginLeft: sizeWidth(15),
    },
    marginTopBig: {
      marginTop: sizeWidth(15),
    },
    marginBottomBig: {
      marginBottom: sizeWidth(15),
    },
    marginVBig: {
      marginVertical: sizeWidth(15),
    },
    marginHBig: {
      marginHorizontal: sizeWidth(15),
    },
    /** Padding */
    paddingSmall: {
      padding: sizeWidth(5),
    },
    paddingVSmall: {
      paddingVertical: sizeWidth(5),
    },
    paddingHSmall: {
      paddingHorizontal: sizeWidth(5),
    },
    paddingMedium: {
      padding: sizeWidth(10),
    },
    paddingVMedium: {
      paddingVertical: sizeWidth(10),
    },
    paddingHMedium: {
      paddingHorizontal: sizeWidth(10),
    },
    paddingBig: {
      padding: sizeWidth(15),
    },
    paddingVBig: {
      paddingVertical: sizeWidth(15),
    },
    paddingHBig: {
      paddingHorizontal: sizeWidth(15),
    },
    // Border.
    borderNeu05: {
      borderWidth: 1,
      borderColor: Colors.neutral_05,
    },
    borderNeu06: {
      borderWidth: 1,
      borderColor: Colors.neutral_06,
    },
    // Base background.
    bgPrimary: {
      backgroundColor: Colors.neutral_08,
    },
  });
}

export default initialBaseStyle();
