export interface IDoctor {
  id: string;
  name: string;
  profilePhoto: string;
  conatactNumber: string;
  address: string;
  registrationNumber: string;
  exeperience: number | undefined;
  appointmentFee: number | undefined;
  gender: "MALE" | "FEMALE";
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialties?: ISpecialties[];
}
export interface ISpecialties {
  specialtiesId: string;
  isDeleted?: null;
}
export interface IDoctorFormData {
  doctor: IDoctor;
  password: string;
}
