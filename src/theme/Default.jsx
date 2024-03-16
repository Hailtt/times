import { useEffect, useState } from "react";

function Default() {
	const [CurrentSecondTime, setCurrentSecondTime] = useState(null);
	const [CurrentMinuteTime, setCurrentMinuteTime] = useState(null);
	const [CurrentHourTime, setCurrentHourTime] = useState(null);
	console.log(CurrentSecondTime);

	useEffect(() => {
		const updateTimer = setInterval(() => {
			const now = new Date();
			const formattedTime = now.getSeconds(); // Localized format
			setCurrentSecondTime(formattedTime);
			const CurrentMinuteTime = now.getMinutes(); // Localized format
			setCurrentMinuteTime(CurrentMinuteTime);
			const CurrentHourTime = now.getHours(); // Localized format
			setCurrentHourTime(CurrentHourTime);
		}, 1000); // Update every second

		return () => clearInterval(updateTimer);
	}, []);

	return (
		<div className="Time-theme-default">
			<div
				className="container"
				onClick={() => setCurrentSecondTime(CurrentSecondTime + 1)}
			>
				<div className="left">
					<p className="text">{CurrentHourTime}</p>
				</div>
				<div
					className="center"
					style={{
						background: `linear-gradient(to bottom, #ea5062 , #171515 calc(-0% + calc(${CurrentSecondTime}% * 3.4)))`,
					}}
				></div>
				<div className="right">
					<p className="text">{CurrentMinuteTime}</p>
				</div>
			</div>
		</div>
	);
}

export default Default;
