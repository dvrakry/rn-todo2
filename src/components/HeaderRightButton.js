import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPressOut={() => navigation.navigate('Settings')} hitSlop={10}>
      <MaterialCommunityIcons name="cog" size={20} color={tintColor} />
    </Pressable>
  );
};

HeaderRightButton.propTypes = {
  //PropTypes
  tintColor: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default HeaderRightButton;
