export function calcTextHeight(text = '') {
	const pureRows = text.split('\n');
	let finalRowsCount = null;
	pureRows.forEach((item) => {
		const actualRows = Math.ceil(item.length / 100);
		finalRowsCount += actualRows;
	});
	if (finalRowsCount < 2) {
		finalRowsCount = 1;
	}
	return (finalRowsCount + 2) * 24;
}
