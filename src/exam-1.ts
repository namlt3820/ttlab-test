interface ITestScores {
	numberOfTestCases: number;
	scores: number[][];
}

const convertScores = (scores: number[]) => {
	const scoresString: string[] = [];
	for (let i = 0; i < scores.length; i++) {
		const char = i === 0 ? "T" : "L";
		for (let k = 0; k < scores[i]; k++) {
			scoresString.push(char);
		}
	}
	return scoresString;
};

const permutator = (inputArr: string[]): string[][] => {
	let result: string[][] = [];

	const permute = (arr, m: string[] = []) => {
		if (arr.length === 0) {
			result.push(m);
		} else {
			for (let i = 0; i < arr.length; i++) {
				let curr = arr.slice();
				let next = curr.splice(i, 1);
				permute(curr.slice(), m.concat(next));
			}
		}
	};

	permute(inputArr);
	return result;
};

const areArraysNotEqual = (array1: string[], array2: string[]) =>
	array1.some(function (value, index) {
		return value !== array2[index];
	});

const removeDuplicate = (array: string[][]) =>
	array.reduce<string[][]>((prev, cur) => {
		if (prev.every((member) => areArraysNotEqual(member, cur))) {
			prev.push(cur);
		}
		return prev;
	}, []);

const calculatePossibleScores = (param: ITestScores) => {
	const result = [];
	const { numberOfTestCases, scores } = param;

	for (let i = 0; i < numberOfTestCases; i++) {
		const scoresString = convertScores(scores[i]);
		const scoresPermutation = permutator(scoresString);
		const scoresWithoutDuplicate = removeDuplicate(scoresPermutation);
		result.push(scoresWithoutDuplicate.length);
	}

	return result;
};

export { calculatePossibleScores };
