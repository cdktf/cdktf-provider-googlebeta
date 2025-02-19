// https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSpannerBackupScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database to create the backup schedule on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#database GoogleSpannerBackupSchedule#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#id GoogleSpannerBackupSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance to create the database on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#instance GoogleSpannerBackupSchedule#instance}
  */
  readonly instance: string;
  /**
  * A unique identifier for the backup schedule, which cannot be changed after
  * the backup schedule is created. Values are of the form [a-z][-a-z0-9]*[a-z0-9].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#name GoogleSpannerBackupSchedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#project GoogleSpannerBackupSchedule#project}
  */
  readonly project?: string;
  /**
  * At what relative time in the future, compared to its creation time, the backup should be deleted, e.g. keep backups for 7 days.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.
  * You can set this to a value up to 366 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#retention_duration GoogleSpannerBackupSchedule#retention_duration}
  */
  readonly retentionDuration: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#encryption_config GoogleSpannerBackupSchedule#encryption_config}
  */
  readonly encryptionConfig?: GoogleSpannerBackupScheduleEncryptionConfig;
  /**
  * full_backup_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#full_backup_spec GoogleSpannerBackupSchedule#full_backup_spec}
  */
  readonly fullBackupSpec?: GoogleSpannerBackupScheduleFullBackupSpec;
  /**
  * incremental_backup_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#incremental_backup_spec GoogleSpannerBackupSchedule#incremental_backup_spec}
  */
  readonly incrementalBackupSpec?: GoogleSpannerBackupScheduleIncrementalBackupSpec;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#spec GoogleSpannerBackupSchedule#spec}
  */
  readonly spec?: GoogleSpannerBackupScheduleSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#timeouts GoogleSpannerBackupSchedule#timeouts}
  */
  readonly timeouts?: GoogleSpannerBackupScheduleTimeouts;
}
export interface GoogleSpannerBackupScheduleEncryptionConfig {
  /**
  * The encryption type of backups created by the backup schedule.
  * Possible values are USE_DATABASE_ENCRYPTION, GOOGLE_DEFAULT_ENCRYPTION, or CUSTOMER_MANAGED_ENCRYPTION.
  * If you use CUSTOMER_MANAGED_ENCRYPTION, you must specify a kmsKeyName.
  * If your backup type is incremental-backup, the encryption type must be GOOGLE_DEFAULT_ENCRYPTION. Possible values: ["USE_DATABASE_ENCRYPTION", "GOOGLE_DEFAULT_ENCRYPTION", "CUSTOMER_MANAGED_ENCRYPTION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#encryption_type GoogleSpannerBackupSchedule#encryption_type}
  */
  readonly encryptionType: string;
  /**
  * The resource name of the Cloud KMS key to use for encryption.
  * Format: 'projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#kms_key_name GoogleSpannerBackupSchedule#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

export function googleSpannerBackupScheduleEncryptionConfigToTerraform(struct?: GoogleSpannerBackupScheduleEncryptionConfigOutputReference | GoogleSpannerBackupScheduleEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_type: cdktf.stringToTerraform(struct!.encryptionType),
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleSpannerBackupScheduleEncryptionConfigToHclTerraform(struct?: GoogleSpannerBackupScheduleEncryptionConfigOutputReference | GoogleSpannerBackupScheduleEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_type: {
      value: cdktf.stringToHclTerraform(struct!.encryptionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSpannerBackupScheduleEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSpannerBackupScheduleEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionType = this._encryptionType;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSpannerBackupScheduleEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionType = undefined;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionType = value.encryptionType;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // encryption_type - computed: false, optional: false, required: true
  private _encryptionType?: string; 
  public get encryptionType() {
    return this.getStringAttribute('encryption_type');
  }
  public set encryptionType(value: string) {
    this._encryptionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionTypeInput() {
    return this._encryptionType;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleSpannerBackupScheduleFullBackupSpec {
}

export function googleSpannerBackupScheduleFullBackupSpecToTerraform(struct?: GoogleSpannerBackupScheduleFullBackupSpecOutputReference | GoogleSpannerBackupScheduleFullBackupSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSpannerBackupScheduleFullBackupSpecToHclTerraform(struct?: GoogleSpannerBackupScheduleFullBackupSpecOutputReference | GoogleSpannerBackupScheduleFullBackupSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSpannerBackupScheduleFullBackupSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSpannerBackupScheduleFullBackupSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSpannerBackupScheduleFullBackupSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleSpannerBackupScheduleIncrementalBackupSpec {
}

export function googleSpannerBackupScheduleIncrementalBackupSpecToTerraform(struct?: GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference | GoogleSpannerBackupScheduleIncrementalBackupSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSpannerBackupScheduleIncrementalBackupSpecToHclTerraform(struct?: GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference | GoogleSpannerBackupScheduleIncrementalBackupSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSpannerBackupScheduleIncrementalBackupSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSpannerBackupScheduleIncrementalBackupSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleSpannerBackupScheduleSpecCronSpec {
  /**
  * Textual representation of the crontab. User can customize the
  * backup frequency and the backup version time using the cron
  * expression. The version time must be in UTC timzeone.
  * The backup will contain an externally consistent copy of the
  * database at the version time. Allowed frequencies are 12 hour, 1 day,
  * 1 week and 1 month. Examples of valid cron specifications:
  *   0 2/12 * * * : every 12 hours at (2, 14) hours past midnight in UTC.
  *   0 2,14 * * * : every 12 hours at (2,14) hours past midnight in UTC.
  *   0 2 * * *    : once a day at 2 past midnight in UTC.
  *   0 2 * * 0    : once a week every Sunday at 2 past midnight in UTC.
  *   0 2 8 * *    : once a month on 8th day at 2 past midnight in UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#text GoogleSpannerBackupSchedule#text}
  */
  readonly text?: string;
}

export function googleSpannerBackupScheduleSpecCronSpecToTerraform(struct?: GoogleSpannerBackupScheduleSpecCronSpecOutputReference | GoogleSpannerBackupScheduleSpecCronSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    text: cdktf.stringToTerraform(struct!.text),
  }
}


export function googleSpannerBackupScheduleSpecCronSpecToHclTerraform(struct?: GoogleSpannerBackupScheduleSpecCronSpecOutputReference | GoogleSpannerBackupScheduleSpecCronSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSpannerBackupScheduleSpecCronSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSpannerBackupScheduleSpecCronSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSpannerBackupScheduleSpecCronSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._text = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._text = value.text;
    }
  }

  // text - computed: false, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface GoogleSpannerBackupScheduleSpec {
  /**
  * cron_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#cron_spec GoogleSpannerBackupSchedule#cron_spec}
  */
  readonly cronSpec?: GoogleSpannerBackupScheduleSpecCronSpec;
}

export function googleSpannerBackupScheduleSpecToTerraform(struct?: GoogleSpannerBackupScheduleSpecOutputReference | GoogleSpannerBackupScheduleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_spec: googleSpannerBackupScheduleSpecCronSpecToTerraform(struct!.cronSpec),
  }
}


export function googleSpannerBackupScheduleSpecToHclTerraform(struct?: GoogleSpannerBackupScheduleSpecOutputReference | GoogleSpannerBackupScheduleSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_spec: {
      value: googleSpannerBackupScheduleSpecCronSpecToHclTerraform(struct!.cronSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleSpannerBackupScheduleSpecCronSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSpannerBackupScheduleSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSpannerBackupScheduleSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSpec = this._cronSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSpannerBackupScheduleSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronSpec.internalValue = value.cronSpec;
    }
  }

  // cron_spec - computed: false, optional: true, required: false
  private _cronSpec = new GoogleSpannerBackupScheduleSpecCronSpecOutputReference(this, "cron_spec");
  public get cronSpec() {
    return this._cronSpec;
  }
  public putCronSpec(value: GoogleSpannerBackupScheduleSpecCronSpec) {
    this._cronSpec.internalValue = value;
  }
  public resetCronSpec() {
    this._cronSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronSpecInput() {
    return this._cronSpec.internalValue;
  }
}
export interface GoogleSpannerBackupScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#create GoogleSpannerBackupSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#delete GoogleSpannerBackupSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#update GoogleSpannerBackupSchedule#update}
  */
  readonly update?: string;
}

export function googleSpannerBackupScheduleTimeoutsToTerraform(struct?: GoogleSpannerBackupScheduleTimeouts | cdktf.IResolvable): any {
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


export function googleSpannerBackupScheduleTimeoutsToHclTerraform(struct?: GoogleSpannerBackupScheduleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSpannerBackupScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSpannerBackupScheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSpannerBackupScheduleTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule google_spanner_backup_schedule}
*/
export class GoogleSpannerBackupSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_spanner_backup_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSpannerBackupSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSpannerBackupSchedule to import
  * @param importFromId The id of the existing GoogleSpannerBackupSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSpannerBackupSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_spanner_backup_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_spanner_backup_schedule google_spanner_backup_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSpannerBackupScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSpannerBackupScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_backup_schedule',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.20.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._database = config.database;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._project = config.project;
    this._retentionDuration = config.retentionDuration;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._fullBackupSpec.internalValue = config.fullBackupSpec;
    this._incrementalBackupSpec.internalValue = config.incrementalBackupSpec;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // retention_duration - computed: false, optional: false, required: true
  private _retentionDuration?: string; 
  public get retentionDuration() {
    return this.getStringAttribute('retention_duration');
  }
  public set retentionDuration(value: string) {
    this._retentionDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDurationInput() {
    return this._retentionDuration;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new GoogleSpannerBackupScheduleEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: GoogleSpannerBackupScheduleEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // full_backup_spec - computed: false, optional: true, required: false
  private _fullBackupSpec = new GoogleSpannerBackupScheduleFullBackupSpecOutputReference(this, "full_backup_spec");
  public get fullBackupSpec() {
    return this._fullBackupSpec;
  }
  public putFullBackupSpec(value: GoogleSpannerBackupScheduleFullBackupSpec) {
    this._fullBackupSpec.internalValue = value;
  }
  public resetFullBackupSpec() {
    this._fullBackupSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupSpecInput() {
    return this._fullBackupSpec.internalValue;
  }

  // incremental_backup_spec - computed: false, optional: true, required: false
  private _incrementalBackupSpec = new GoogleSpannerBackupScheduleIncrementalBackupSpecOutputReference(this, "incremental_backup_spec");
  public get incrementalBackupSpec() {
    return this._incrementalBackupSpec;
  }
  public putIncrementalBackupSpec(value: GoogleSpannerBackupScheduleIncrementalBackupSpec) {
    this._incrementalBackupSpec.internalValue = value;
  }
  public resetIncrementalBackupSpec() {
    this._incrementalBackupSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalBackupSpecInput() {
    return this._incrementalBackupSpec.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GoogleSpannerBackupScheduleSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleSpannerBackupScheduleSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSpannerBackupScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSpannerBackupScheduleTimeouts) {
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
      database: cdktf.stringToTerraform(this._database),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      retention_duration: cdktf.stringToTerraform(this._retentionDuration),
      encryption_config: googleSpannerBackupScheduleEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      full_backup_spec: googleSpannerBackupScheduleFullBackupSpecToTerraform(this._fullBackupSpec.internalValue),
      incremental_backup_spec: googleSpannerBackupScheduleIncrementalBackupSpecToTerraform(this._incrementalBackupSpec.internalValue),
      spec: googleSpannerBackupScheduleSpecToTerraform(this._spec.internalValue),
      timeouts: googleSpannerBackupScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_duration: {
        value: cdktf.stringToHclTerraform(this._retentionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_config: {
        value: googleSpannerBackupScheduleEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSpannerBackupScheduleEncryptionConfigList",
      },
      full_backup_spec: {
        value: googleSpannerBackupScheduleFullBackupSpecToHclTerraform(this._fullBackupSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSpannerBackupScheduleFullBackupSpecList",
      },
      incremental_backup_spec: {
        value: googleSpannerBackupScheduleIncrementalBackupSpecToHclTerraform(this._incrementalBackupSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSpannerBackupScheduleIncrementalBackupSpecList",
      },
      spec: {
        value: googleSpannerBackupScheduleSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSpannerBackupScheduleSpecList",
      },
      timeouts: {
        value: googleSpannerBackupScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSpannerBackupScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
