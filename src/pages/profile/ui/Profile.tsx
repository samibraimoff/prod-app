import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/profile";
import { useEffect } from "react";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/components/dynamic-module-loader/dynamic-module-loader";
import { cssClassNames } from "shared/helpers/class-names/css-class-names";
import { useAppDispatch } from "shared/helpers/hooks/use-app-dispatch/use-app-dispatch";

import styles from "./Profile.module.scss";

const reducers: ReducersList = {
  profile: profileReducer,
};

const Profile = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={cssClassNames(styles.Profile, {}, [])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default Profile;
