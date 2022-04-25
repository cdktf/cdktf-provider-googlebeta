// https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSecurityScannerScanConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The blacklist URL patterns as described in
https://cloud.google.com/security-scanner/docs/excluded-urls
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#blacklist_patterns GoogleSecurityScannerScanConfig#blacklist_patterns}
  */
  readonly blacklistPatterns?: string[];
  /**
  * The user provider display name of the ScanConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#display_name GoogleSecurityScannerScanConfig#display_name}
  */
  readonly displayName: string;
  /**
  * Controls export of scan configurations and results to Cloud Security Command Center. Default value: "ENABLED" Possible values: ["ENABLED", "DISABLED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#export_to_security_command_center GoogleSecurityScannerScanConfig#export_to_security_command_center}
  */
  readonly exportToSecurityCommandCenter?: string;
  /**
  * The maximum QPS during scanning. A valid value ranges from 5 to 20 inclusively.
Defaults to 15.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#max_qps GoogleSecurityScannerScanConfig#max_qps}
  */
  readonly maxQps?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#project GoogleSecurityScannerScanConfig#project}
  */
  readonly project?: string;
  /**
  * The starting URLs from which the scanner finds site pages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#starting_urls GoogleSecurityScannerScanConfig#starting_urls}
  */
  readonly startingUrls: string[];
  /**
  * Set of Cloud Platforms targeted by the scan. If empty, APP_ENGINE will be used as a default. Possible values: ["APP_ENGINE", "COMPUTE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#target_platforms GoogleSecurityScannerScanConfig#target_platforms}
  */
  readonly targetPlatforms?: string[];
  /**
  * Type of the user agents used for scanning Default value: "CHROME_LINUX" Possible values: ["USER_AGENT_UNSPECIFIED", "CHROME_LINUX", "CHROME_ANDROID", "SAFARI_IPHONE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#user_agent GoogleSecurityScannerScanConfig#user_agent}
  */
  readonly userAgent?: string;
  /**
  * authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#authentication GoogleSecurityScannerScanConfig#authentication}
  */
  readonly authentication?: GoogleSecurityScannerScanConfigAuthentication;
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#schedule GoogleSecurityScannerScanConfig#schedule}
  */
  readonly schedule?: GoogleSecurityScannerScanConfigSchedule;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#timeouts GoogleSecurityScannerScanConfig#timeouts}
  */
  readonly timeouts?: GoogleSecurityScannerScanConfigTimeouts;
}
export interface GoogleSecurityScannerScanConfigAuthenticationCustomAccount {
  /**
  * The login form URL of the website.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#login_url GoogleSecurityScannerScanConfig#login_url}
  */
  readonly loginUrl: string;
  /**
  * The password of the custom account. The credential is stored encrypted
in GCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}
  */
  readonly password: string;
  /**
  * The user name of the custom account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}
  */
  readonly username: string;
}

export function googleSecurityScannerScanConfigAuthenticationCustomAccountToTerraform(struct?: GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference | GoogleSecurityScannerScanConfigAuthenticationCustomAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_url: cdktf.stringToTerraform(struct!.loginUrl),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityScannerScanConfigAuthenticationCustomAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUrl = this._loginUrl;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityScannerScanConfigAuthenticationCustomAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginUrl = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginUrl = value.loginUrl;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // login_url - computed: false, optional: false, required: true
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GoogleSecurityScannerScanConfigAuthenticationGoogleAccount {
  /**
  * The password of the Google account. The credential is stored encrypted
in GCP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#password GoogleSecurityScannerScanConfig#password}
  */
  readonly password: string;
  /**
  * The user name of the Google account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#username GoogleSecurityScannerScanConfig#username}
  */
  readonly username: string;
}

export function googleSecurityScannerScanConfigAuthenticationGoogleAccountToTerraform(struct?: GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference | GoogleSecurityScannerScanConfigAuthenticationGoogleAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityScannerScanConfigAuthenticationGoogleAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GoogleSecurityScannerScanConfigAuthentication {
  /**
  * custom_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#custom_account GoogleSecurityScannerScanConfig#custom_account}
  */
  readonly customAccount?: GoogleSecurityScannerScanConfigAuthenticationCustomAccount;
  /**
  * google_account block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#google_account GoogleSecurityScannerScanConfig#google_account}
  */
  readonly googleAccount?: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount;
}

export function googleSecurityScannerScanConfigAuthenticationToTerraform(struct?: GoogleSecurityScannerScanConfigAuthenticationOutputReference | GoogleSecurityScannerScanConfigAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_account: googleSecurityScannerScanConfigAuthenticationCustomAccountToTerraform(struct!.customAccount),
    google_account: googleSecurityScannerScanConfigAuthenticationGoogleAccountToTerraform(struct!.googleAccount),
  }
}

export class GoogleSecurityScannerScanConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityScannerScanConfigAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAccount = this._customAccount?.internalValue;
    }
    if (this._googleAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleAccount = this._googleAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityScannerScanConfigAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customAccount.internalValue = undefined;
      this._googleAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customAccount.internalValue = value.customAccount;
      this._googleAccount.internalValue = value.googleAccount;
    }
  }

  // custom_account - computed: false, optional: true, required: false
  private _customAccount = new GoogleSecurityScannerScanConfigAuthenticationCustomAccountOutputReference(this, "custom_account");
  public get customAccount() {
    return this._customAccount;
  }
  public putCustomAccount(value: GoogleSecurityScannerScanConfigAuthenticationCustomAccount) {
    this._customAccount.internalValue = value;
  }
  public resetCustomAccount() {
    this._customAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAccountInput() {
    return this._customAccount.internalValue;
  }

  // google_account - computed: false, optional: true, required: false
  private _googleAccount = new GoogleSecurityScannerScanConfigAuthenticationGoogleAccountOutputReference(this, "google_account");
  public get googleAccount() {
    return this._googleAccount;
  }
  public putGoogleAccount(value: GoogleSecurityScannerScanConfigAuthenticationGoogleAccount) {
    this._googleAccount.internalValue = value;
  }
  public resetGoogleAccount() {
    this._googleAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleAccountInput() {
    return this._googleAccount.internalValue;
  }
}
export interface GoogleSecurityScannerScanConfigSchedule {
  /**
  * The duration of time between executions in days
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#interval_duration_days GoogleSecurityScannerScanConfig#interval_duration_days}
  */
  readonly intervalDurationDays: number;
  /**
  * A timestamp indicates when the next run will be scheduled. The value is refreshed
by the server after each run. If unspecified, it will default to current server time,
which means the scan will be scheduled to start immediately.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#schedule_time GoogleSecurityScannerScanConfig#schedule_time}
  */
  readonly scheduleTime?: string;
}

export function googleSecurityScannerScanConfigScheduleToTerraform(struct?: GoogleSecurityScannerScanConfigScheduleOutputReference | GoogleSecurityScannerScanConfigSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_duration_days: cdktf.numberToTerraform(struct!.intervalDurationDays),
    schedule_time: cdktf.stringToTerraform(struct!.scheduleTime),
  }
}

export class GoogleSecurityScannerScanConfigScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityScannerScanConfigSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalDurationDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalDurationDays = this._intervalDurationDays;
    }
    if (this._scheduleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTime = this._scheduleTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecurityScannerScanConfigSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalDurationDays = undefined;
      this._scheduleTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalDurationDays = value.intervalDurationDays;
      this._scheduleTime = value.scheduleTime;
    }
  }

  // interval_duration_days - computed: false, optional: false, required: true
  private _intervalDurationDays?: number; 
  public get intervalDurationDays() {
    return this.getNumberAttribute('interval_duration_days');
  }
  public set intervalDurationDays(value: number) {
    this._intervalDurationDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalDurationDaysInput() {
    return this._intervalDurationDays;
  }

  // schedule_time - computed: false, optional: true, required: false
  private _scheduleTime?: string; 
  public get scheduleTime() {
    return this.getStringAttribute('schedule_time');
  }
  public set scheduleTime(value: string) {
    this._scheduleTime = value;
  }
  public resetScheduleTime() {
    this._scheduleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeInput() {
    return this._scheduleTime;
  }
}
export interface GoogleSecurityScannerScanConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#create GoogleSecurityScannerScanConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#delete GoogleSecurityScannerScanConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config#update GoogleSecurityScannerScanConfig#update}
  */
  readonly update?: string;
}

export function googleSecurityScannerScanConfigTimeoutsToTerraform(struct?: GoogleSecurityScannerScanConfigTimeoutsOutputReference | GoogleSecurityScannerScanConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleSecurityScannerScanConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecurityScannerScanConfigTimeouts | undefined {
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

  public set internalValue(value: GoogleSecurityScannerScanConfigTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config google_security_scanner_scan_config}
*/
export class GoogleSecurityScannerScanConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_security_scanner_scan_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_security_scanner_scan_config google_security_scanner_scan_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSecurityScannerScanConfigConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSecurityScannerScanConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_security_scanner_scan_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.19.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blacklistPatterns = config.blacklistPatterns;
    this._displayName = config.displayName;
    this._exportToSecurityCommandCenter = config.exportToSecurityCommandCenter;
    this._maxQps = config.maxQps;
    this._project = config.project;
    this._startingUrls = config.startingUrls;
    this._targetPlatforms = config.targetPlatforms;
    this._userAgent = config.userAgent;
    this._authentication.internalValue = config.authentication;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blacklist_patterns - computed: false, optional: true, required: false
  private _blacklistPatterns?: string[]; 
  public get blacklistPatterns() {
    return this.getListAttribute('blacklist_patterns');
  }
  public set blacklistPatterns(value: string[]) {
    this._blacklistPatterns = value;
  }
  public resetBlacklistPatterns() {
    this._blacklistPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistPatternsInput() {
    return this._blacklistPatterns;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // export_to_security_command_center - computed: false, optional: true, required: false
  private _exportToSecurityCommandCenter?: string; 
  public get exportToSecurityCommandCenter() {
    return this.getStringAttribute('export_to_security_command_center');
  }
  public set exportToSecurityCommandCenter(value: string) {
    this._exportToSecurityCommandCenter = value;
  }
  public resetExportToSecurityCommandCenter() {
    this._exportToSecurityCommandCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportToSecurityCommandCenterInput() {
    return this._exportToSecurityCommandCenter;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_qps - computed: false, optional: true, required: false
  private _maxQps?: number; 
  public get maxQps() {
    return this.getNumberAttribute('max_qps');
  }
  public set maxQps(value: number) {
    this._maxQps = value;
  }
  public resetMaxQps() {
    this._maxQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQpsInput() {
    return this._maxQps;
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

  // starting_urls - computed: false, optional: false, required: true
  private _startingUrls?: string[]; 
  public get startingUrls() {
    return this.getListAttribute('starting_urls');
  }
  public set startingUrls(value: string[]) {
    this._startingUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startingUrlsInput() {
    return this._startingUrls;
  }

  // target_platforms - computed: false, optional: true, required: false
  private _targetPlatforms?: string[]; 
  public get targetPlatforms() {
    return this.getListAttribute('target_platforms');
  }
  public set targetPlatforms(value: string[]) {
    this._targetPlatforms = value;
  }
  public resetTargetPlatforms() {
    this._targetPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPlatformsInput() {
    return this._targetPlatforms;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new GoogleSecurityScannerScanConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GoogleSecurityScannerScanConfigAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new GoogleSecurityScannerScanConfigScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: GoogleSecurityScannerScanConfigSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSecurityScannerScanConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSecurityScannerScanConfigTimeouts) {
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
      blacklist_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._blacklistPatterns),
      display_name: cdktf.stringToTerraform(this._displayName),
      export_to_security_command_center: cdktf.stringToTerraform(this._exportToSecurityCommandCenter),
      max_qps: cdktf.numberToTerraform(this._maxQps),
      project: cdktf.stringToTerraform(this._project),
      starting_urls: cdktf.listMapper(cdktf.stringToTerraform)(this._startingUrls),
      target_platforms: cdktf.listMapper(cdktf.stringToTerraform)(this._targetPlatforms),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      authentication: googleSecurityScannerScanConfigAuthenticationToTerraform(this._authentication.internalValue),
      schedule: googleSecurityScannerScanConfigScheduleToTerraform(this._schedule.internalValue),
      timeouts: googleSecurityScannerScanConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
