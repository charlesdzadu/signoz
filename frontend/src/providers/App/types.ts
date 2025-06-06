import { FeatureFlagProps as FeatureFlags } from 'types/api/features/getFeaturesFlags';
import { PayloadProps as LicensesResModel } from 'types/api/licenses/getAll';
import { LicenseV3ResModel, TrialInfo } from 'types/api/licensesV3/getActive';
import { Organization } from 'types/api/user/getOrganization';
import { UserResponse as User } from 'types/api/user/getUser';
import { OrgPreference } from 'types/reducer/app';

export interface IAppContext {
	user: IUser;
	licenses: LicensesResModel | null;
	activeLicenseV3: LicenseV3ResModel | null;
	trialInfo: TrialInfo | null;
	featureFlags: FeatureFlags[] | null;
	orgPreferences: OrgPreference[] | null;
	isLoggedIn: boolean;
	org: Organization[] | null;
	isFetchingUser: boolean;
	isFetchingLicenses: boolean;
	isFetchingActiveLicenseV3: boolean;
	isFetchingFeatureFlags: boolean;
	isFetchingOrgPreferences: boolean;
	userFetchError: unknown;
	licensesFetchError: unknown;
	activeLicenseV3FetchError: unknown;
	featureFlagsFetchError: unknown;
	orgPreferencesFetchError: unknown;
	licensesRefetch: () => void;
	updateUser: (user: IUser) => void;
	updateOrgPreferences: (orgPreferences: OrgPreference[]) => void;
	updateOrg(orgId: string, updatedOrgName: string): void;
}

// User
export interface IUser extends User {
	accessJwt: string;
	refreshJwt: string;
}
