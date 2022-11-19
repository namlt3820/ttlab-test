interface ITestBudget {
	numberOfTestCases: number;
	data: {
		numberOfApplicants: number;
		budget: number;
		salaries: number[];
	}[];
}

const getSubArrays = (arr: number[]) => {
	if (arr.length === 1) return [arr];
	else {
		let subarr = getSubArrays(arr.slice(1));
		return subarr.concat(
			subarr.map((e) => e.concat(arr[0])),
			[[arr[0]]]
		);
	}
};

const isArraySumLower = (arr: number[], threshold: number) => {
	const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
	return sum <= threshold;
};

const getArrayWithMaxLength = (arrays: number[][]) => {
	let maxLength;

	if (arrays.length === 0) {
		maxLength = 0;
	} else {
		const arraysLength = arrays.map((array) => array.length);
		maxLength = Math.max(...arraysLength);
	}

	return maxLength;
};

const calculatePossibleSalaries = (param: ITestBudget) => {
	const { numberOfTestCases, data } = param;
	let result: number[] = Array(numberOfTestCases).fill(0);

	for (let i = 0; i < numberOfTestCases; i++) {
		const { budget, salaries } = data[i];
		const salaryCombinations = getSubArrays(salaries);
		const salaryCombLength = salaryCombinations.length;
		const finalSalaryCombs = [];

		for (let j = 0; j < salaryCombLength; j++) {
			const salary = salaryCombinations[j];
			if (isArraySumLower(salary, budget)) {
				finalSalaryCombs.push(salary);
			}
		}

		result[i] = getArrayWithMaxLength(finalSalaryCombs);
	}

	return result;
};

export { calculatePossibleSalaries };
