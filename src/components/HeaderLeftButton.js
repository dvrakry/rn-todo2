import { Pressable, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HeaderLeftButton = ({ canGoBack, tintColor }) => {
  const navigation = useNavigation();
  if (!canGoBack) {
    return null;
  }

  return (
    <Pressable onPressOut={navigation.goBack} hitSlop={10}>
      <MaterialCommunityIcons name="chevron-left" size={30} color={tintColor} />
    </Pressable>
  );
};

HeaderLeftButton.propTypes = {
  //PropTypes
  canGoBack: PropTypes.bool,
  tintColor: PropTypes.string,
};

export default HeaderLeftButton;
