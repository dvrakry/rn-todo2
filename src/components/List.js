import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { GRAY } from '../colors';

const Separator = () => {
  return <View style={styles.separator}></View>;
};

const List = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
    />
  );
};

List.propTypes = {
  //PropTypes
  data: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default List;
