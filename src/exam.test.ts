import assert from "assert";
import { calculatePossibleScores } from "./exam-1";
import { calculatePossibleSalaries } from "./exam-2";

describe("Starting test...", function () {
	it("should calculate possible scores", function () {
		// CHANGE INPUT HERE, BUT ALSO ASSERT AS WELL
		const input = {
			numberOfTestCases: 2,
			scores: [
				[2, 0],
				[1, 3],
			],
		};
		const output = calculatePossibleScores(input);

		assert.strictEqual(output[0], 1);
		assert.strictEqual(output[1], 4);
	});

	it("should calculate possible salaries", function () {
		// CHANGE INPUT HERE, BUT ALSO ASSERT AS WELL
		const input = {
			numberOfTestCases: 2,
			data: [
				{
					numberOfApplicants: 4,
					budget: 5,
					salaries: [1, 2, 3, 4],
				},
				{
					numberOfApplicants: 5,
					budget: 1,
					salaries: [5, 5, 5, 5],
				},
			],
		};
		const output = calculatePossibleSalaries(input);

		assert.strictEqual(output[0], 2);
		assert.strictEqual(output[1], 0);
	});
});
