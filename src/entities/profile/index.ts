import { fetchProfileData } from "./model/services/fetch-profile-data/fetch-profile-data";
import { profileActions, profileReducer } from "./model/slice/profile-slice";
import { IProfile, IProfileSchema } from "./model/types";
import { ProfileCard } from "./ui/profile-card"

export {
  fetchProfileData,
  IProfile,
  IProfileSchema,
  profileActions,
  ProfileCard,
  profileReducer
};