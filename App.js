import Stopwatch from "./components/Stopwatch";
import { StyleSheet, View } from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<Stopwatch />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
