export default class HolbertonCourse {
	constructor(name, length, students) {
		if (typeof name != "string") {
			throw new TypeError("Name must be a string");
		}
		if (typeof length != "number") {
			throw new TypeError("Length must be of type number");
		}
		if (!Array.isArray(students) || !students.every((student) => typeof student === "string")) {
			throw new TypeError("Student must be an array of strings");
		}

		this._name = name;
		this._length = length;
		this._students = students;

	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (typeof name != "string"){
			throw new TypeError("Name must be a string");
		}
		this._name = value;
	}

	get length() {
		return this._length;
	}

	set length(value) {
		if (typeof length != "number") {
                        throw new TypeError("Length must be of type number");
		}
		this._length = value;
	}

	get students() {
		return this._students;
	}

	set students(value) {
		if (!Array.isArray(students) || !students.every((student) => typeof student === "string")) {
                        throw new TypeError("Student must be an array of strings");
		}
		this._students = value;
	}
}
