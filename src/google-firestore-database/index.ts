/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirestoreDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The App Engine integration mode to use for this database. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#app_engine_integration_mode GoogleFirestoreDatabase#app_engine_integration_mode}
  */
  readonly appEngineIntegrationMode?: string;
  /**
  * The concurrency control mode to use for this database. Possible values: ["OPTIMISTIC", "PESSIMISTIC", "OPTIMISTIC_WITH_ENTITY_GROUPS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#concurrency_mode GoogleFirestoreDatabase#concurrency_mode}
  */
  readonly concurrencyMode?: string;
  /**
  * State of delete protection for the database.
  * When delete protection is enabled, this database cannot be deleted.
  * The default value is 'DELETE_PROTECTION_STATE_UNSPECIFIED', which is currently equivalent to 'DELETE_PROTECTION_DISABLED'.
  * **Note:** Additionally, to delete this database using 'terraform destroy', 'deletion_policy' must be set to 'DELETE'. Possible values: ["DELETE_PROTECTION_STATE_UNSPECIFIED", "DELETE_PROTECTION_ENABLED", "DELETE_PROTECTION_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#delete_protection_state GoogleFirestoreDatabase#delete_protection_state}
  */
  readonly deleteProtectionState?: string;
  /**
  * Deletion behavior for this database.
  * If the deletion policy is 'ABANDON', the database will be removed from Terraform state but not deleted from Google Cloud upon destruction.
  * If the deletion policy is 'DELETE', the database will both be removed from Terraform state and deleted from Google Cloud upon destruction.
  * The default value is 'ABANDON'.
  * See also 'delete_protection'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#deletion_policy GoogleFirestoreDatabase#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#id GoogleFirestoreDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the database. Available locations are listed at
  * https://cloud.google.com/firestore/docs/locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#location_id GoogleFirestoreDatabase#location_id}
  */
  readonly locationId: string;
  /**
  * The ID to use for the database, which will become the final
  * component of the database's resource name. This value should be 4-63
  * characters. Valid characters are /[a-z][0-9]-/ with first character
  * a letter and the last a letter or a number. Must not be
  * UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
  * "(default)" database id is also valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#name GoogleFirestoreDatabase#name}
  */
  readonly name: string;
  /**
  * Whether to enable the PITR feature on this database.
  * If 'POINT_IN_TIME_RECOVERY_ENABLED' is selected, reads are supported on selected versions of the data from within the past 7 days.
  * versionRetentionPeriod and earliestVersionTime can be used to determine the supported versions. These include reads against any timestamp within the past hour
  * and reads against 1-minute snapshots beyond 1 hour and within 7 days.
  * If 'POINT_IN_TIME_RECOVERY_DISABLED' is selected, reads are supported on any version of the data from within the past 1 hour. Default value: "POINT_IN_TIME_RECOVERY_DISABLED" Possible values: ["POINT_IN_TIME_RECOVERY_ENABLED", "POINT_IN_TIME_RECOVERY_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#point_in_time_recovery_enablement GoogleFirestoreDatabase#point_in_time_recovery_enablement}
  */
  readonly pointInTimeRecoveryEnablement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#project GoogleFirestoreDatabase#project}
  */
  readonly project?: string;
  /**
  * The type of the database.
  * See https://cloud.google.com/datastore/docs/firestore-or-datastore
  * for information about how to choose. Possible values: ["FIRESTORE_NATIVE", "DATASTORE_MODE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#type GoogleFirestoreDatabase#type}
  */
  readonly type: string;
  /**
  * cmek_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#cmek_config GoogleFirestoreDatabase#cmek_config}
  */
  readonly cmekConfig?: GoogleFirestoreDatabaseCmekConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#timeouts GoogleFirestoreDatabase#timeouts}
  */
  readonly timeouts?: GoogleFirestoreDatabaseTimeouts;
}
export interface GoogleFirestoreDatabaseCmekConfig {
  /**
  * The resource ID of a Cloud KMS key. If set, the database created will
  * be a Customer-managed Encryption Key (CMEK) database encrypted with
  * this key. This feature is allowlist only in initial launch.
  * 
  * Only keys in the same location as this database are allowed to be used
  * for encryption. For Firestore's nam5 multi-region, this corresponds to Cloud KMS
  * multi-region us. For Firestore's eur3 multi-region, this corresponds to
  * Cloud KMS multi-region europe. See https://cloud.google.com/kms/docs/locations.
  * 
  * This value should be the KMS key resource ID in the format of
  * 'projects/{project_id}/locations/{kms_location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.
  * How to retrieve this resource ID is listed at
  * https://cloud.google.com/kms/docs/getting-resource-ids#getting_the_id_for_a_key_and_version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#kms_key_name GoogleFirestoreDatabase#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleFirestoreDatabaseCmekConfigToTerraform(struct?: GoogleFirestoreDatabaseCmekConfigOutputReference | GoogleFirestoreDatabaseCmekConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleFirestoreDatabaseCmekConfigToHclTerraform(struct?: GoogleFirestoreDatabaseCmekConfigOutputReference | GoogleFirestoreDatabaseCmekConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class GoogleFirestoreDatabaseCmekConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirestoreDatabaseCmekConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirestoreDatabaseCmekConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // active_key_version - computed: true, optional: false, required: false
  public get activeKeyVersion() {
    return this.getListAttribute('active_key_version');
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface GoogleFirestoreDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#create GoogleFirestoreDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#delete GoogleFirestoreDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#update GoogleFirestoreDatabase#update}
  */
  readonly update?: string;
}

export function googleFirestoreDatabaseTimeoutsToTerraform(struct?: GoogleFirestoreDatabaseTimeouts | cdktf.IResolvable): any {
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


export function googleFirestoreDatabaseTimeoutsToHclTerraform(struct?: GoogleFirestoreDatabaseTimeouts | cdktf.IResolvable): any {
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

export class GoogleFirestoreDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirestoreDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleFirestoreDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database google_firestore_database}
*/
export class GoogleFirestoreDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firestore_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirestoreDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirestoreDatabase to import
  * @param importFromId The id of the existing GoogleFirestoreDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirestoreDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firestore_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_firestore_database google_firestore_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirestoreDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirestoreDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_database',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.27.0',
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
    this._appEngineIntegrationMode = config.appEngineIntegrationMode;
    this._concurrencyMode = config.concurrencyMode;
    this._deleteProtectionState = config.deleteProtectionState;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._locationId = config.locationId;
    this._name = config.name;
    this._pointInTimeRecoveryEnablement = config.pointInTimeRecoveryEnablement;
    this._project = config.project;
    this._type = config.type;
    this._cmekConfig.internalValue = config.cmekConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_engine_integration_mode - computed: true, optional: true, required: false
  private _appEngineIntegrationMode?: string; 
  public get appEngineIntegrationMode() {
    return this.getStringAttribute('app_engine_integration_mode');
  }
  public set appEngineIntegrationMode(value: string) {
    this._appEngineIntegrationMode = value;
  }
  public resetAppEngineIntegrationMode() {
    this._appEngineIntegrationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineIntegrationModeInput() {
    return this._appEngineIntegrationMode;
  }

  // concurrency_mode - computed: true, optional: true, required: false
  private _concurrencyMode?: string; 
  public get concurrencyMode() {
    return this.getStringAttribute('concurrency_mode');
  }
  public set concurrencyMode(value: string) {
    this._concurrencyMode = value;
  }
  public resetConcurrencyMode() {
    this._concurrencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyModeInput() {
    return this._concurrencyMode;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_protection_state - computed: true, optional: true, required: false
  private _deleteProtectionState?: string; 
  public get deleteProtectionState() {
    return this.getStringAttribute('delete_protection_state');
  }
  public set deleteProtectionState(value: string) {
    this._deleteProtectionState = value;
  }
  public resetDeleteProtectionState() {
    this._deleteProtectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteProtectionStateInput() {
    return this._deleteProtectionState;
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // earliest_version_time - computed: true, optional: false, required: false
  public get earliestVersionTime() {
    return this.getStringAttribute('earliest_version_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // key_prefix - computed: true, optional: false, required: false
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }

  // location_id - computed: false, optional: false, required: true
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // point_in_time_recovery_enablement - computed: false, optional: true, required: false
  private _pointInTimeRecoveryEnablement?: string; 
  public get pointInTimeRecoveryEnablement() {
    return this.getStringAttribute('point_in_time_recovery_enablement');
  }
  public set pointInTimeRecoveryEnablement(value: string) {
    this._pointInTimeRecoveryEnablement = value;
  }
  public resetPointInTimeRecoveryEnablement() {
    this._pointInTimeRecoveryEnablement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnablementInput() {
    return this._pointInTimeRecoveryEnablement;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version_retention_period - computed: true, optional: false, required: false
  public get versionRetentionPeriod() {
    return this.getStringAttribute('version_retention_period');
  }

  // cmek_config - computed: false, optional: true, required: false
  private _cmekConfig = new GoogleFirestoreDatabaseCmekConfigOutputReference(this, "cmek_config");
  public get cmekConfig() {
    return this._cmekConfig;
  }
  public putCmekConfig(value: GoogleFirestoreDatabaseCmekConfig) {
    this._cmekConfig.internalValue = value;
  }
  public resetCmekConfig() {
    this._cmekConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmekConfigInput() {
    return this._cmekConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirestoreDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirestoreDatabaseTimeouts) {
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
      app_engine_integration_mode: cdktf.stringToTerraform(this._appEngineIntegrationMode),
      concurrency_mode: cdktf.stringToTerraform(this._concurrencyMode),
      delete_protection_state: cdktf.stringToTerraform(this._deleteProtectionState),
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      id: cdktf.stringToTerraform(this._id),
      location_id: cdktf.stringToTerraform(this._locationId),
      name: cdktf.stringToTerraform(this._name),
      point_in_time_recovery_enablement: cdktf.stringToTerraform(this._pointInTimeRecoveryEnablement),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      cmek_config: googleFirestoreDatabaseCmekConfigToTerraform(this._cmekConfig.internalValue),
      timeouts: googleFirestoreDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_engine_integration_mode: {
        value: cdktf.stringToHclTerraform(this._appEngineIntegrationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      concurrency_mode: {
        value: cdktf.stringToHclTerraform(this._concurrencyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_protection_state: {
        value: cdktf.stringToHclTerraform(this._deleteProtectionState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
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
      location_id: {
        value: cdktf.stringToHclTerraform(this._locationId),
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
      point_in_time_recovery_enablement: {
        value: cdktf.stringToHclTerraform(this._pointInTimeRecoveryEnablement),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmek_config: {
        value: googleFirestoreDatabaseCmekConfigToHclTerraform(this._cmekConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirestoreDatabaseCmekConfigList",
      },
      timeouts: {
        value: googleFirestoreDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirestoreDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
