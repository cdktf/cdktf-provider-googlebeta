// https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleWorkstationsWorkstationConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client-specified annotations. This is distinct from labels.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#annotations GoogleWorkstationsWorkstationConfigA#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Human-readable name for this resource.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#display_name GoogleWorkstationsWorkstationConfigA#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#labels GoogleWorkstationsWorkstationConfigA#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the workstation cluster config should reside.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#location GoogleWorkstationsWorkstationConfigA#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}
  */
  readonly project?: string;
  /**
  * The ID of the parent workstation cluster.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#workstation_cluster_id GoogleWorkstationsWorkstationConfigA#workstation_cluster_id}
  */
  readonly workstationClusterId: string;
  /**
  * The ID to be assigned to the workstation cluster config.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#workstation_config_id GoogleWorkstationsWorkstationConfigA#workstation_config_id}
  */
  readonly workstationConfigId: string;
  /**
  * container block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#container GoogleWorkstationsWorkstationConfigA#container}
  */
  readonly container?: GoogleWorkstationsWorkstationConfigContainer;
  /**
  * encryption_key block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#encryption_key GoogleWorkstationsWorkstationConfigA#encryption_key}
  */
  readonly encryptionKey?: GoogleWorkstationsWorkstationConfigEncryptionKey;
  /**
  * host block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#host GoogleWorkstationsWorkstationConfigA#host}
  */
  readonly host?: GoogleWorkstationsWorkstationConfigHost;
  /**
  * persistent_directories block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#persistent_directories GoogleWorkstationsWorkstationConfigA#persistent_directories}
  */
  readonly persistentDirectories?: GoogleWorkstationsWorkstationConfigPersistentDirectories[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#timeouts GoogleWorkstationsWorkstationConfigA#timeouts}
  */
  readonly timeouts?: GoogleWorkstationsWorkstationConfigTimeouts;
}
export interface GoogleWorkstationsWorkstationConfigConditions {
}

export function googleWorkstationsWorkstationConfigConditionsToTerraform(struct?: GoogleWorkstationsWorkstationConfigConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class GoogleWorkstationsWorkstationConfigConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class GoogleWorkstationsWorkstationConfigConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleWorkstationsWorkstationConfigConditionsOutputReference {
    return new GoogleWorkstationsWorkstationConfigConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigContainer {
  /**
  * Arguments passed to the entrypoint.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#args GoogleWorkstationsWorkstationConfigA#args}
  */
  readonly args?: string[];
  /**
  * If set, overrides the default ENTRYPOINT specified by the image.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#command GoogleWorkstationsWorkstationConfigA#command}
  */
  readonly command?: string[];
  /**
  * Environment variables passed to the container.
The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#env GoogleWorkstationsWorkstationConfigA#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docker image defining the container. This image must be accessible by the config's service account.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#image GoogleWorkstationsWorkstationConfigA#image}
  */
  readonly image?: string;
  /**
  * If set, overrides the USER specified in the image with the given uid.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#run_as_user GoogleWorkstationsWorkstationConfigA#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * If set, overrides the default DIR specified by the image.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#working_dir GoogleWorkstationsWorkstationConfigA#working_dir}
  */
  readonly workingDir?: string;
}

export function googleWorkstationsWorkstationConfigContainerToTerraform(struct?: GoogleWorkstationsWorkstationConfigContainerOutputReference | GoogleWorkstationsWorkstationConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    image: cdktf.stringToTerraform(struct!.image),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}

export class GoogleWorkstationsWorkstationConfigContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._env = undefined;
      this._image = undefined;
      this._runAsUser = undefined;
      this._workingDir = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._env = value.env;
      this._image = value.image;
      this._runAsUser = value.runAsUser;
      this._workingDir = value.workingDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}
export interface GoogleWorkstationsWorkstationConfigEncryptionKey {
  /**
  * The name of the Google Cloud KMS encryption key.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#kms_key GoogleWorkstationsWorkstationConfigA#kms_key}
  */
  readonly kmsKey: string;
  /**
  * The service account to use with the specified KMS key.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#kms_key_service_account GoogleWorkstationsWorkstationConfigA#kms_key_service_account}
  */
  readonly kmsKeyServiceAccount: string;
}

export function googleWorkstationsWorkstationConfigEncryptionKeyToTerraform(struct?: GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference | GoogleWorkstationsWorkstationConfigEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    kms_key_service_account: cdktf.stringToTerraform(struct!.kmsKeyServiceAccount),
  }
}

export class GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._kmsKeyServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyServiceAccount = this._kmsKeyServiceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
      this._kmsKeyServiceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
      this._kmsKeyServiceAccount = value.kmsKeyServiceAccount;
    }
  }

  // kms_key - computed: false, optional: false, required: true
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // kms_key_service_account - computed: false, optional: false, required: true
  private _kmsKeyServiceAccount?: string; 
  public get kmsKeyServiceAccount() {
    return this.getStringAttribute('kms_key_service_account');
  }
  public set kmsKeyServiceAccount(value: string) {
    this._kmsKeyServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyServiceAccountInput() {
    return this._kmsKeyServiceAccount;
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig {
  /**
  * Whether the instance has confidential compute enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_confidential_compute GoogleWorkstationsWorkstationConfigA#enable_confidential_compute}
  */
  readonly enableConfidentialCompute?: boolean | cdktf.IResolvable;
}

export function googleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference | GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_confidential_compute: cdktf.booleanToTerraform(struct!.enableConfidentialCompute),
  }
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConfidentialCompute !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialCompute = this._enableConfidentialCompute;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConfidentialCompute = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConfidentialCompute = value.enableConfidentialCompute;
    }
  }

  // enable_confidential_compute - computed: false, optional: true, required: false
  private _enableConfidentialCompute?: boolean | cdktf.IResolvable; 
  public get enableConfidentialCompute() {
    return this.getBooleanAttribute('enable_confidential_compute');
  }
  public set enableConfidentialCompute(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialCompute = value;
  }
  public resetEnableConfidentialCompute() {
    this._enableConfidentialCompute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialComputeInput() {
    return this._enableConfidentialCompute;
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig {
  /**
  * Whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_integrity_monitoring GoogleWorkstationsWorkstationConfigA#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_secure_boot GoogleWorkstationsWorkstationConfigA#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance has the vTPM enabled.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#enable_vtpm GoogleWorkstationsWorkstationConfigA#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function googleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference | GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstance {
  /**
  * Size of the boot disk in GB.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#boot_disk_size_gb GoogleWorkstationsWorkstationConfigA#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Whether instances have no public IP address.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#disable_public_ip_addresses GoogleWorkstationsWorkstationConfigA#disable_public_ip_addresses}
  */
  readonly disablePublicIpAddresses?: boolean | cdktf.IResolvable;
  /**
  * The name of a Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#machine_type GoogleWorkstationsWorkstationConfigA#machine_type}
  */
  readonly machineType?: string;
  /**
  * Number of instances to pool for faster workstation startup.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#pool_size GoogleWorkstationsWorkstationConfigA#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#service_account GoogleWorkstationsWorkstationConfigA#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Network tags to add to the Compute Engine machines backing the Workstations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#tags GoogleWorkstationsWorkstationConfigA#tags}
  */
  readonly tags?: string[];
  /**
  * confidential_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#confidential_instance_config GoogleWorkstationsWorkstationConfigA#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#shielded_instance_config GoogleWorkstationsWorkstationConfigA#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig;
}

export function googleWorkstationsWorkstationConfigHostGceInstanceToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference | GoogleWorkstationsWorkstationConfigHostGceInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    disable_public_ip_addresses: cdktf.booleanToTerraform(struct!.disablePublicIpAddresses),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    confidential_instance_config: googleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigToTerraform(struct!.confidentialInstanceConfig),
    shielded_instance_config: googleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigHostGceInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._disablePublicIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePublicIpAddresses = this._disablePublicIpAddresses;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._confidentialInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceConfig = this._confidentialInstanceConfig?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHostGceInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskSizeGb = undefined;
      this._disablePublicIpAddresses = undefined;
      this._machineType = undefined;
      this._poolSize = undefined;
      this._serviceAccount = undefined;
      this._tags = undefined;
      this._confidentialInstanceConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._disablePublicIpAddresses = value.disablePublicIpAddresses;
      this._machineType = value.machineType;
      this._poolSize = value.poolSize;
      this._serviceAccount = value.serviceAccount;
      this._tags = value.tags;
      this._confidentialInstanceConfig.internalValue = value.confidentialInstanceConfig;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // boot_disk_size_gb - computed: true, optional: true, required: false
  private _bootDiskSizeGb?: number; 
  public get bootDiskSizeGb() {
    return this.getNumberAttribute('boot_disk_size_gb');
  }
  public set bootDiskSizeGb(value: number) {
    this._bootDiskSizeGb = value;
  }
  public resetBootDiskSizeGb() {
    this._bootDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeGbInput() {
    return this._bootDiskSizeGb;
  }

  // disable_public_ip_addresses - computed: false, optional: true, required: false
  private _disablePublicIpAddresses?: boolean | cdktf.IResolvable; 
  public get disablePublicIpAddresses() {
    return this.getBooleanAttribute('disable_public_ip_addresses');
  }
  public set disablePublicIpAddresses(value: boolean | cdktf.IResolvable) {
    this._disablePublicIpAddresses = value;
  }
  public resetDisablePublicIpAddresses() {
    this._disablePublicIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePublicIpAddressesInput() {
    return this._disablePublicIpAddresses;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // pool_size - computed: true, optional: true, required: false
  private _poolSize?: number; 
  public get poolSize() {
    return this.getNumberAttribute('pool_size');
  }
  public set poolSize(value: number) {
    this._poolSize = value;
  }
  public resetPoolSize() {
    this._poolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolSizeInput() {
    return this._poolSize;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // confidential_instance_config - computed: false, optional: true, required: false
  private _confidentialInstanceConfig = new GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference(this, "confidential_instance_config");
  public get confidentialInstanceConfig() {
    return this._confidentialInstanceConfig;
  }
  public putConfidentialInstanceConfig(value: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig) {
    this._confidentialInstanceConfig.internalValue = value;
  }
  public resetConfidentialInstanceConfig() {
    this._confidentialInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceConfigInput() {
    return this._confidentialInstanceConfig.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface GoogleWorkstationsWorkstationConfigHost {
  /**
  * gce_instance block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#gce_instance GoogleWorkstationsWorkstationConfigA#gce_instance}
  */
  readonly gceInstance?: GoogleWorkstationsWorkstationConfigHostGceInstance;
}

export function googleWorkstationsWorkstationConfigHostToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostOutputReference | GoogleWorkstationsWorkstationConfigHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gce_instance: googleWorkstationsWorkstationConfigHostGceInstanceToTerraform(struct!.gceInstance),
  }
}

export class GoogleWorkstationsWorkstationConfigHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gceInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gceInstance = this._gceInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gceInstance.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gceInstance.internalValue = value.gceInstance;
    }
  }

  // gce_instance - computed: false, optional: true, required: false
  private _gceInstance = new GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference(this, "gce_instance");
  public get gceInstance() {
    return this._gceInstance;
  }
  public putGceInstance(value: GoogleWorkstationsWorkstationConfigHostGceInstance) {
    this._gceInstance.internalValue = value;
  }
  public resetGceInstance() {
    this._gceInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gceInstanceInput() {
    return this._gceInstance.internalValue;
  }
}
export interface GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd {
  /**
  * Type of the disk to use.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#disk_type GoogleWorkstationsWorkstationConfigA#disk_type}
  */
  readonly diskType?: string;
  /**
  * Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if sourceSnapshot is set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#fs_type GoogleWorkstationsWorkstationConfigA#fs_type}
  */
  readonly fsType?: string;
  /**
  * What should happen to the disk after the workstation is deleted. Defaults to DELETE. Possible values: ["DELETE", "RETAIN"]
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#reclaim_policy GoogleWorkstationsWorkstationConfigA#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * Size of the disk in GB. Must be empty if sourceSnapshot is set.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#size_gb GoogleWorkstationsWorkstationConfigA#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * The snapshot to use as the source for the disk. This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, sizeGb and fsType must be empty.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#source_snapshot GoogleWorkstationsWorkstationConfigA#source_snapshot}
  */
  readonly sourceSnapshot?: string;
}

export function googleWorkstationsWorkstationConfigPersistentDirectoriesGcePdToTerraform(struct?: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference | GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    reclaim_policy: cdktf.stringToTerraform(struct!.reclaimPolicy),
    size_gb: cdktf.numberToTerraform(struct!.sizeGb),
    source_snapshot: cdktf.stringToTerraform(struct!.sourceSnapshot),
  }
}

export class GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._reclaimPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reclaimPolicy = this._reclaimPolicy;
    }
    if (this._sizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGb = this._sizeGb;
    }
    if (this._sourceSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSnapshot = this._sourceSnapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._fsType = undefined;
      this._reclaimPolicy = undefined;
      this._sizeGb = undefined;
      this._sourceSnapshot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._fsType = value.fsType;
      this._reclaimPolicy = value.reclaimPolicy;
      this._sizeGb = value.sizeGb;
      this._sourceSnapshot = value.sourceSnapshot;
    }
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // fs_type - computed: true, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // reclaim_policy - computed: false, optional: true, required: false
  private _reclaimPolicy?: string; 
  public get reclaimPolicy() {
    return this.getStringAttribute('reclaim_policy');
  }
  public set reclaimPolicy(value: string) {
    this._reclaimPolicy = value;
  }
  public resetReclaimPolicy() {
    this._reclaimPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reclaimPolicyInput() {
    return this._reclaimPolicy;
  }

  // size_gb - computed: true, optional: true, required: false
  private _sizeGb?: number; 
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }
  public set sizeGb(value: number) {
    this._sizeGb = value;
  }
  public resetSizeGb() {
    this._sizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGbInput() {
    return this._sizeGb;
  }

  // source_snapshot - computed: false, optional: true, required: false
  private _sourceSnapshot?: string; 
  public get sourceSnapshot() {
    return this.getStringAttribute('source_snapshot');
  }
  public set sourceSnapshot(value: string) {
    this._sourceSnapshot = value;
  }
  public resetSourceSnapshot() {
    this._sourceSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSnapshotInput() {
    return this._sourceSnapshot;
  }
}
export interface GoogleWorkstationsWorkstationConfigPersistentDirectories {
  /**
  * Location of this directory in the running workstation.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#mount_path GoogleWorkstationsWorkstationConfigA#mount_path}
  */
  readonly mountPath?: string;
  /**
  * gce_pd block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#gce_pd GoogleWorkstationsWorkstationConfigA#gce_pd}
  */
  readonly gcePd?: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd;
}

export function googleWorkstationsWorkstationConfigPersistentDirectoriesToTerraform(struct?: GoogleWorkstationsWorkstationConfigPersistentDirectories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    gce_pd: googleWorkstationsWorkstationConfigPersistentDirectoriesGcePdToTerraform(struct!.gcePd),
  }
}

export class GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigPersistentDirectories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._gcePd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePd = this._gcePd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigPersistentDirectories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._gcePd.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._gcePd.internalValue = value.gcePd;
    }
  }

  // mount_path - computed: true, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // gce_pd - computed: false, optional: true, required: false
  private _gcePd = new GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference(this, "gce_pd");
  public get gcePd() {
    return this._gcePd;
  }
  public putGcePd(value: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd) {
    this._gcePd.internalValue = value;
  }
  public resetGcePd() {
    this._gcePd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePdInput() {
    return this._gcePd.internalValue;
  }
}

export class GoogleWorkstationsWorkstationConfigPersistentDirectoriesList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigPersistentDirectories[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference {
    return new GoogleWorkstationsWorkstationConfigPersistentDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}
  */
  readonly update?: string;
}

export function googleWorkstationsWorkstationConfigTimeoutsToTerraform(struct?: GoogleWorkstationsWorkstationConfigTimeouts | cdktf.IResolvable): any {
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

export class GoogleWorkstationsWorkstationConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleWorkstationsWorkstationConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config google_workstations_workstation_config}
*/
export class GoogleWorkstationsWorkstationConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_workstations_workstation_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_workstations_workstation_config google_workstations_workstation_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleWorkstationsWorkstationConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleWorkstationsWorkstationConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_workstations_workstation_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.66.0',
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
    this._annotations = config.annotations;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._workstationClusterId = config.workstationClusterId;
    this._workstationConfigId = config.workstationConfigId;
    this._container.internalValue = config.container;
    this._encryptionKey.internalValue = config.encryptionKey;
    this._host.internalValue = config.host;
    this._persistentDirectories.internalValue = config.persistentDirectories;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleWorkstationsWorkstationConfigConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // degraded - computed: true, optional: false, required: false
  public get degraded() {
    return this.getBooleanAttribute('degraded');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // workstation_cluster_id - computed: false, optional: false, required: true
  private _workstationClusterId?: string; 
  public get workstationClusterId() {
    return this.getStringAttribute('workstation_cluster_id');
  }
  public set workstationClusterId(value: string) {
    this._workstationClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationClusterIdInput() {
    return this._workstationClusterId;
  }

  // workstation_config_id - computed: false, optional: false, required: true
  private _workstationConfigId?: string; 
  public get workstationConfigId() {
    return this.getStringAttribute('workstation_config_id');
  }
  public set workstationConfigId(value: string) {
    this._workstationConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationConfigIdInput() {
    return this._workstationConfigId;
  }

  // container - computed: false, optional: true, required: false
  private _container = new GoogleWorkstationsWorkstationConfigContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: GoogleWorkstationsWorkstationConfigContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: GoogleWorkstationsWorkstationConfigEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // host - computed: false, optional: true, required: false
  private _host = new GoogleWorkstationsWorkstationConfigHostOutputReference(this, "host");
  public get host() {
    return this._host;
  }
  public putHost(value: GoogleWorkstationsWorkstationConfigHost) {
    this._host.internalValue = value;
  }
  public resetHost() {
    this._host.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host.internalValue;
  }

  // persistent_directories - computed: false, optional: true, required: false
  private _persistentDirectories = new GoogleWorkstationsWorkstationConfigPersistentDirectoriesList(this, "persistent_directories", false);
  public get persistentDirectories() {
    return this._persistentDirectories;
  }
  public putPersistentDirectories(value: GoogleWorkstationsWorkstationConfigPersistentDirectories[] | cdktf.IResolvable) {
    this._persistentDirectories.internalValue = value;
  }
  public resetPersistentDirectories() {
    this._persistentDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentDirectoriesInput() {
    return this._persistentDirectories.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleWorkstationsWorkstationConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleWorkstationsWorkstationConfigTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      workstation_cluster_id: cdktf.stringToTerraform(this._workstationClusterId),
      workstation_config_id: cdktf.stringToTerraform(this._workstationConfigId),
      container: googleWorkstationsWorkstationConfigContainerToTerraform(this._container.internalValue),
      encryption_key: googleWorkstationsWorkstationConfigEncryptionKeyToTerraform(this._encryptionKey.internalValue),
      host: googleWorkstationsWorkstationConfigHostToTerraform(this._host.internalValue),
      persistent_directories: cdktf.listMapper(googleWorkstationsWorkstationConfigPersistentDirectoriesToTerraform, true)(this._persistentDirectories.internalValue),
      timeouts: googleWorkstationsWorkstationConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
