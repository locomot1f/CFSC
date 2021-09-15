IF(
	AND(
		REGEX_MATCH({all_packages},"Tuesdays"),
		REGEX_MATCH({all_packages},"Thursdays")
		),
		"(T & Th)",
IF(
	AND(
		REGEX_MATCH({all_packages},"Mondays"),
		REGEX_MATCH({all_packages},"Tuesdays")
		),
		"(M & Tu)",
IF(
	AND(
		REGEX_MATCH({all_packages},"Tuesdays"),
		REGEX_MATCH({all_packages},"Fridays")
		),
		"(T & F)",
IF(
	AND(
		REGEX_MATCH({all_packages},"Thursdays"),
		REGEX_MATCH({all_packages},"Fridays")
		),
		"(Th & F)",
	IF(REGEX_MATCH({all_packages},"Tuesdays"),
		"Tuesdays",
	IF(REGEX_MATCH({all_packages},"Thursdays"),
		"Thursdays",
	IF(REGEX_MATCH({all_packages},"Fridays"),
		"Fridays",
IF(
	AND(
		REGEX_MATCH({all_packages},"Mondays"),
		REGEX_MATCH({all_packages},"Wednesdays")
		),
		"(M & W)",
	IF(REGEX_MATCH({all_packages},"Mondays"),
		"Mondays",
	IF(REGEX_MATCH({all_packages},"Wednesdays"),
		"Wednesdays"
)
)
)
)
)
)
)
)
)
)