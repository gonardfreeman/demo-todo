"use client";

import { useEffect, useState } from "react";

function DateComponent({ dateISO }: { dateISO: string }) {
	const [locale, setLocale] = useState("en-US");
	useEffect(() => {
		if (typeof navigator.language === "string") {
			setLocale(navigator.language);
		}
	}, []);
	const formatter = new Intl.DateTimeFormat(locale, {
		dateStyle: "short",
		timeStyle: "short",
	});
	const date = new Date(dateISO);
	return <time dateTime={dateISO}>{formatter.format(date)}</time>;
}

export default DateComponent;
