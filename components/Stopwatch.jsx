import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { useState, useRef, useCallback } from "react";
import Result from "./Result";
import Control from "./Control";
import { displayTime } from "../utils/counter";
import Header from "./Header";

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [results, setResults] = useState([]);
	const timer = useRef(null);

	const handleLeftButtonPress = useCallback(() => {
		if (isRunning) {
			setResults((previousResults) => [time, ...previousResults]);
		} else {
			setResults([]);
			setTime(0);
		}
	}, [isRunning, time]);

	const handleRightButtonPress = useCallback(() => {
		if (!isRunning) {
			const interval = setInterval(() => {
				setTime((previousTime) => previousTime + 1);
			}, 10);

			timer.current = interval;
		} else {
			clearInterval(time);
		}
		setIsRunning((previousState) => !previousState);
	}, [isRunning]);

	return (
		<SafeAreaView style={styles.container}>
			<Header />
			<StatusBar style='light' />
			<View style={styles.display}>
				<Text style={styles.displayText}>{displayTime(time)}</Text>
			</View>
			<View style={styles.control}>
				<Control
					isRunning={isRunning}
					handleLeftButtonPress={handleLeftButtonPress}
					handleRightButtonPress={handleRightButtonPress}
				/>
			</View>
			<View style={styles.results}>
				<Result results={results} />
			</View>
		</SafeAreaView>
	);
};

export default Stopwatch;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "black",
		paddingTop: Constants.statusBarHeight,
	},
	displayTime: {
		flex: 3 / 5,
		justifyContent: "center",
		alignItems: "center",
	},
	displayText: {
		color: "#fff",
		fontSize: 70,
		fontWeight: "200",
		fontFamily: Platform.OS === "ios" ? "Helvetica Neue" : null,
	},
	control: {
		height: 70,
		flexDirection: "row",
		justifyContent: "space-around",
	},
	results: {
		flex: 2 / 5,
	},
});
