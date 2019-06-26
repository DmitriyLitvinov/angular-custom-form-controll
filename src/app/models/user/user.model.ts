export class User {
  id: string;
  firstName: string;
  lastName: string;
  gender: GENDERTYPE;
  phone: string;
  email: string;
  dateOfBirth: number;
  age: number;

  constructor(data: UserDataApi) {
    const {
      id,
      firstName,
      lastName,
      gender,
      phone,
      email,
      dateOfBirth
    } = data;

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.phone = phone;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }
}
