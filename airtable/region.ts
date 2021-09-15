IF(
	REGEX_MATCH({all_packages},"EAST"),
	"EAST",
IF(
	REGEX_MATCH({all_packages},"WEST"),
	"WEST"
)
)