// https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleIdentityPlatformProjectDefaultConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#id GoogleIdentityPlatformProjectDefaultConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#project GoogleIdentityPlatformProjectDefaultConfig#project}
  */
  readonly project?: string;
  /**
  * sign_in block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#sign_in GoogleIdentityPlatformProjectDefaultConfig#sign_in}
  */
  readonly signIn?: GoogleIdentityPlatformProjectDefaultConfigSignIn;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#timeouts GoogleIdentityPlatformProjectDefaultConfig#timeouts}
  */
  readonly timeouts?: GoogleIdentityPlatformProjectDefaultConfigTimeouts;
}
export interface GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig {
}

export function googleIdentityPlatformProjectDefaultConfigSignInHashConfigToTerraform(struct?: GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformProjectDefaultConfigSignInHashConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // memory_cost - computed: true, optional: false, required: false
  public get memoryCost() {
    return this.getNumberAttribute('memory_cost');
  }

  // rounds - computed: true, optional: false, required: false
  public get rounds() {
    return this.getNumberAttribute('rounds');
  }

  // salt_separator - computed: true, optional: false, required: false
  public get saltSeparator() {
    return this.getStringAttribute('salt_separator');
  }

  // signer_key - computed: true, optional: false, required: false
  public get signerKey() {
    return this.getStringAttribute('signer_key');
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference {
    return new GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous {
  /**
  * Whether anonymous user auth is enabled for the project or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformProjectDefaultConfigSignInAnonymousToTerraform(struct?: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference | GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GoogleIdentityPlatformProjectDefaultConfigSignInEmail {
  /**
  * Whether email auth is enabled for the project or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether a password is required for email auth or not. If true, both an email and 
password must be provided to sign in. If false, a user may sign in via either 
email/password or email link.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#password_required GoogleIdentityPlatformProjectDefaultConfig#password_required}
  */
  readonly passwordRequired?: boolean | cdktf.IResolvable;
}

export function googleIdentityPlatformProjectDefaultConfigSignInEmailToTerraform(struct?: GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference | GoogleIdentityPlatformProjectDefaultConfigSignInEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    password_required: cdktf.booleanToTerraform(struct!.passwordRequired),
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformProjectDefaultConfigSignInEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._passwordRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordRequired = this._passwordRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformProjectDefaultConfigSignInEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._passwordRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._passwordRequired = value.passwordRequired;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // password_required - computed: false, optional: true, required: false
  private _passwordRequired?: boolean | cdktf.IResolvable; 
  public get passwordRequired() {
    return this.getBooleanAttribute('password_required');
  }
  public set passwordRequired(value: boolean | cdktf.IResolvable) {
    this._passwordRequired = value;
  }
  public resetPasswordRequired() {
    this._passwordRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRequiredInput() {
    return this._passwordRequired;
  }
}
export interface GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber {
  /**
  * Whether phone number auth is enabled for the project or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#enabled GoogleIdentityPlatformProjectDefaultConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A map of <test phone number, fake code> that can be used for phone auth testing.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#test_phone_numbers GoogleIdentityPlatformProjectDefaultConfig#test_phone_numbers}
  */
  readonly testPhoneNumbers?: { [key: string]: string };
}

export function googleIdentityPlatformProjectDefaultConfigSignInPhoneNumberToTerraform(struct?: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference | GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    test_phone_numbers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.testPhoneNumbers),
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._testPhoneNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.testPhoneNumbers = this._testPhoneNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._testPhoneNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._testPhoneNumbers = value.testPhoneNumbers;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // test_phone_numbers - computed: false, optional: true, required: false
  private _testPhoneNumbers?: { [key: string]: string }; 
  public get testPhoneNumbers() {
    return this.getStringMapAttribute('test_phone_numbers');
  }
  public set testPhoneNumbers(value: { [key: string]: string }) {
    this._testPhoneNumbers = value;
  }
  public resetTestPhoneNumbers() {
    this._testPhoneNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testPhoneNumbersInput() {
    return this._testPhoneNumbers;
  }
}
export interface GoogleIdentityPlatformProjectDefaultConfigSignIn {
  /**
  * Whether to allow more than one account to have the same email.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#allow_duplicate_emails GoogleIdentityPlatformProjectDefaultConfig#allow_duplicate_emails}
  */
  readonly allowDuplicateEmails?: boolean | cdktf.IResolvable;
  /**
  * anonymous block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#anonymous GoogleIdentityPlatformProjectDefaultConfig#anonymous}
  */
  readonly anonymous?: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous;
  /**
  * email block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#email GoogleIdentityPlatformProjectDefaultConfig#email}
  */
  readonly email?: GoogleIdentityPlatformProjectDefaultConfigSignInEmail;
  /**
  * phone_number block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#phone_number GoogleIdentityPlatformProjectDefaultConfig#phone_number}
  */
  readonly phoneNumber?: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber;
}

export function googleIdentityPlatformProjectDefaultConfigSignInToTerraform(struct?: GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference | GoogleIdentityPlatformProjectDefaultConfigSignIn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_duplicate_emails: cdktf.booleanToTerraform(struct!.allowDuplicateEmails),
    anonymous: googleIdentityPlatformProjectDefaultConfigSignInAnonymousToTerraform(struct!.anonymous),
    email: googleIdentityPlatformProjectDefaultConfigSignInEmailToTerraform(struct!.email),
    phone_number: googleIdentityPlatformProjectDefaultConfigSignInPhoneNumberToTerraform(struct!.phoneNumber),
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformProjectDefaultConfigSignIn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDuplicateEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDuplicateEmails = this._allowDuplicateEmails;
    }
    if (this._anonymous?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._phoneNumber?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneNumber = this._phoneNumber?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformProjectDefaultConfigSignIn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowDuplicateEmails = undefined;
      this._anonymous.internalValue = undefined;
      this._email.internalValue = undefined;
      this._phoneNumber.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowDuplicateEmails = value.allowDuplicateEmails;
      this._anonymous.internalValue = value.anonymous;
      this._email.internalValue = value.email;
      this._phoneNumber.internalValue = value.phoneNumber;
    }
  }

  // allow_duplicate_emails - computed: false, optional: true, required: false
  private _allowDuplicateEmails?: boolean | cdktf.IResolvable; 
  public get allowDuplicateEmails() {
    return this.getBooleanAttribute('allow_duplicate_emails');
  }
  public set allowDuplicateEmails(value: boolean | cdktf.IResolvable) {
    this._allowDuplicateEmails = value;
  }
  public resetAllowDuplicateEmails() {
    this._allowDuplicateEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDuplicateEmailsInput() {
    return this._allowDuplicateEmails;
  }

  // hash_config - computed: true, optional: false, required: false
  private _hashConfig = new GoogleIdentityPlatformProjectDefaultConfigSignInHashConfigList(this, "hash_config", false);
  public get hashConfig() {
    return this._hashConfig;
  }

  // anonymous - computed: false, optional: true, required: false
  private _anonymous = new GoogleIdentityPlatformProjectDefaultConfigSignInAnonymousOutputReference(this, "anonymous");
  public get anonymous() {
    return this._anonymous;
  }
  public putAnonymous(value: GoogleIdentityPlatformProjectDefaultConfigSignInAnonymous) {
    this._anonymous.internalValue = value;
  }
  public resetAnonymous() {
    this._anonymous.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous.internalValue;
  }

  // email - computed: false, optional: true, required: false
  private _email = new GoogleIdentityPlatformProjectDefaultConfigSignInEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: GoogleIdentityPlatformProjectDefaultConfigSignInEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber = new GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumberOutputReference(this, "phone_number");
  public get phoneNumber() {
    return this._phoneNumber;
  }
  public putPhoneNumber(value: GoogleIdentityPlatformProjectDefaultConfigSignInPhoneNumber) {
    this._phoneNumber.internalValue = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber.internalValue;
  }
}
export interface GoogleIdentityPlatformProjectDefaultConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#create GoogleIdentityPlatformProjectDefaultConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#delete GoogleIdentityPlatformProjectDefaultConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config#update GoogleIdentityPlatformProjectDefaultConfig#update}
  */
  readonly update?: string;
}

export function googleIdentityPlatformProjectDefaultConfigTimeoutsToTerraform(struct?: GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference | GoogleIdentityPlatformProjectDefaultConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleIdentityPlatformProjectDefaultConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleIdentityPlatformProjectDefaultConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config google_identity_platform_project_default_config}
*/
export class GoogleIdentityPlatformProjectDefaultConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_project_default_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_identity_platform_project_default_config google_identity_platform_project_default_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleIdentityPlatformProjectDefaultConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleIdentityPlatformProjectDefaultConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_project_default_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.59.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._signIn.internalValue = config.signIn;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // sign_in - computed: false, optional: true, required: false
  private _signIn = new GoogleIdentityPlatformProjectDefaultConfigSignInOutputReference(this, "sign_in");
  public get signIn() {
    return this._signIn;
  }
  public putSignIn(value: GoogleIdentityPlatformProjectDefaultConfigSignIn) {
    this._signIn.internalValue = value;
  }
  public resetSignIn() {
    this._signIn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInInput() {
    return this._signIn.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleIdentityPlatformProjectDefaultConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleIdentityPlatformProjectDefaultConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      sign_in: googleIdentityPlatformProjectDefaultConfigSignInToTerraform(this._signIn.internalValue),
      timeouts: googleIdentityPlatformProjectDefaultConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
