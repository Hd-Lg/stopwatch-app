import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { displayTime } from "../utils/counter";

const Result = ({ results }) => {
	return (
		<ScrollView>
			<View style={styles.resultItem} />
			{results.map((result, index) => (
				<View key={index} style={styles.resultItem}>
					<Text style={styles.resultItemText}>
						Lap {results.length - index}
					</Text>
					<Text style={styles.resultItemText}>{displayTime(result)}</Text>
				</View>
			))}
		</ScrollView>
	);
};

export default React.memo(Result);

const styles = StyleSheet.create({
	resultItem: {
		flexDirection: "row",
		justifyContent: "space",
		alignContent: "center",
		borderBottomWidth: 1,
		borderColor: "#313131",
		height: 50,
	},
	resultItemText: {
		color: "#fff",
	},
});
