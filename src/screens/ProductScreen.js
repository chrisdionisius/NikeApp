import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { productsSlice } from "../store/productSlice";

const ProductScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      numColumns={2}
      renderItem={({ item }) => (
        <Pressable
          style={styles.itemContainer}
          onPress={() => {
            // update selectedProductState
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate("Product Details");
          }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  itemContainer: {
    width: "50%",
    padding: 1,
  },
});

export default ProductScreen;
