export default function countArgs(...args: number[]): number {
	return args.length;
}

export default function countArgs2(...args2: number[]|string[]): number {
	return args2.length;
}

function noAnnotation(...unannotated) {
	countArgs2(...unannotated);
	return countArgs(...unannotated);
}