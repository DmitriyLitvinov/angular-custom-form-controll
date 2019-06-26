type GENDERTYPE = GENDERS.MALE | GENDERS.FEMALE | GENDERS.INTERSEX;

interface UserDataApi {
  id: string;
  firstName: string;
  lastName: string;
  gender: GENDERTYPE;
  phone: string;
  email: string;
  dateOfBirth: number;
}
