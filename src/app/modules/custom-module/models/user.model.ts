export class UserModel {
	firstName!: string;
	lastName!: string;

	constructor(base: Partial<UserModel>) {
		Object.assign(this, base);
	}
}
