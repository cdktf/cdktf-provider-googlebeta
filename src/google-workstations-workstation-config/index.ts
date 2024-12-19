// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleWorkstationsWorkstationConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client-specified annotations. This is distinct from labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#annotations GoogleWorkstationsWorkstationConfigA#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Disables support for plain TCP connections in the workstation. By default the service supports TCP connections via a websocket relay. Setting this option to true disables that relay, which prevents the usage of services that require plain tcp connections, such as ssh. When enabled, all communication must occur over https or wss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#disable_tcp_connections GoogleWorkstationsWorkstationConfigA#disable_tcp_connections}
  */
  readonly disableTcpConnections?: boolean | cdktf.IResolvable;
  /**
  * Human-readable name for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#display_name GoogleWorkstationsWorkstationConfigA#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether to enable Linux 'auditd' logging on the workstation. When enabled, a service account must also be specified that has 'logging.buckets.write' permission on the project. Operating system audit logging is distinct from Cloud Audit Logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_audit_agent GoogleWorkstationsWorkstationConfigA#enable_audit_agent}
  */
  readonly enableAuditAgent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * How long to wait before automatically stopping an instance that hasn't recently received any user traffic. A value of 0 indicates that this instance should never time out from idleness. Defaults to 20 minutes.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#idle_timeout GoogleWorkstationsWorkstationConfigA#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#labels GoogleWorkstationsWorkstationConfigA#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the workstation cluster config should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#location GoogleWorkstationsWorkstationConfigA#location}
  */
  readonly location: string;
  /**
  * Maximum number of workstations under this configuration a user can have workstations.workstation.use permission on. Only enforced on CreateWorkstation API calls on the user issuing the API request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#max_usable_workstations GoogleWorkstationsWorkstationConfigA#max_usable_workstations}
  */
  readonly maxUsableWorkstations?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#project GoogleWorkstationsWorkstationConfigA#project}
  */
  readonly project?: string;
  /**
  * Specifies the zones used to replicate the VM and disk resources within the region. If set, exactly two zones within the workstation cluster's region must be specified—for example, '['us-central1-a', 'us-central1-f']'.
  * If this field is empty, two default zones within the region are used. Immutable after the workstation configuration is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#replica_zones GoogleWorkstationsWorkstationConfigA#replica_zones}
  */
  readonly replicaZones?: string[];
  /**
  * How long to wait before automatically stopping a workstation after it was started. A value of 0 indicates that workstations using this configuration should never time out from running duration. Must be greater than 0 and less than 24 hours if 'encryption_key' is set. Defaults to 12 hours.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#running_timeout GoogleWorkstationsWorkstationConfigA#running_timeout}
  */
  readonly runningTimeout?: string;
  /**
  * The ID of the parent workstation cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#workstation_cluster_id GoogleWorkstationsWorkstationConfigA#workstation_cluster_id}
  */
  readonly workstationClusterId: string;
  /**
  * The ID to be assigned to the workstation cluster config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#workstation_config_id GoogleWorkstationsWorkstationConfigA#workstation_config_id}
  */
  readonly workstationConfigId: string;
  /**
  * allowed_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#allowed_ports GoogleWorkstationsWorkstationConfigA#allowed_ports}
  */
  readonly allowedPorts?: GoogleWorkstationsWorkstationConfigAllowedPorts[] | cdktf.IResolvable;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#container GoogleWorkstationsWorkstationConfigA#container}
  */
  readonly container?: GoogleWorkstationsWorkstationConfigContainer;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#encryption_key GoogleWorkstationsWorkstationConfigA#encryption_key}
  */
  readonly encryptionKey?: GoogleWorkstationsWorkstationConfigEncryptionKey;
  /**
  * ephemeral_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#ephemeral_directories GoogleWorkstationsWorkstationConfigA#ephemeral_directories}
  */
  readonly ephemeralDirectories?: GoogleWorkstationsWorkstationConfigEphemeralDirectories[] | cdktf.IResolvable;
  /**
  * host block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#host GoogleWorkstationsWorkstationConfigA#host}
  */
  readonly host?: GoogleWorkstationsWorkstationConfigHost;
  /**
  * persistent_directories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#persistent_directories GoogleWorkstationsWorkstationConfigA#persistent_directories}
  */
  readonly persistentDirectories?: GoogleWorkstationsWorkstationConfigPersistentDirectories[] | cdktf.IResolvable;
  /**
  * readiness_checks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#readiness_checks GoogleWorkstationsWorkstationConfigA#readiness_checks}
  */
  readonly readinessChecks?: GoogleWorkstationsWorkstationConfigReadinessChecks[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#timeouts GoogleWorkstationsWorkstationConfigA#timeouts}
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


export function googleWorkstationsWorkstationConfigConditionsToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
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
export interface GoogleWorkstationsWorkstationConfigAllowedPorts {
  /**
  * Starting port number for the current range of ports. Valid ports are 22, 80, and ports within the range 1024-65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#first GoogleWorkstationsWorkstationConfigA#first}
  */
  readonly first?: number;
  /**
  * Ending port number for the current range of ports. Valid ports are 22, 80, and ports within the range 1024-65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#last GoogleWorkstationsWorkstationConfigA#last}
  */
  readonly last?: number;
}

export function googleWorkstationsWorkstationConfigAllowedPortsToTerraform(struct?: GoogleWorkstationsWorkstationConfigAllowedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    first: cdktf.numberToTerraform(struct!.first),
    last: cdktf.numberToTerraform(struct!.last),
  }
}


export function googleWorkstationsWorkstationConfigAllowedPortsToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigAllowedPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    first: {
      value: cdktf.numberToHclTerraform(struct!.first),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last: {
      value: cdktf.numberToHclTerraform(struct!.last),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigAllowedPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigAllowedPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._first !== undefined) {
      hasAnyValues = true;
      internalValueResult.first = this._first;
    }
    if (this._last !== undefined) {
      hasAnyValues = true;
      internalValueResult.last = this._last;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigAllowedPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._first = undefined;
      this._last = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._first = value.first;
      this._last = value.last;
    }
  }

  // first - computed: false, optional: true, required: false
  private _first?: number; 
  public get first() {
    return this.getNumberAttribute('first');
  }
  public set first(value: number) {
    this._first = value;
  }
  public resetFirst() {
    this._first = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstInput() {
    return this._first;
  }

  // last - computed: false, optional: true, required: false
  private _last?: number; 
  public get last() {
    return this.getNumberAttribute('last');
  }
  public set last(value: number) {
    this._last = value;
  }
  public resetLast() {
    this._last = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastInput() {
    return this._last;
  }
}

export class GoogleWorkstationsWorkstationConfigAllowedPortsList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigAllowedPorts[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigAllowedPortsOutputReference {
    return new GoogleWorkstationsWorkstationConfigAllowedPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigContainer {
  /**
  * Arguments passed to the entrypoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#args GoogleWorkstationsWorkstationConfigA#args}
  */
  readonly args?: string[];
  /**
  * If set, overrides the default ENTRYPOINT specified by the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#command GoogleWorkstationsWorkstationConfigA#command}
  */
  readonly command?: string[];
  /**
  * Environment variables passed to the container.
  * The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#env GoogleWorkstationsWorkstationConfigA#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Docker image defining the container. This image must be accessible by the config's service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#image GoogleWorkstationsWorkstationConfigA#image}
  */
  readonly image?: string;
  /**
  * If set, overrides the USER specified in the image with the given uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#run_as_user GoogleWorkstationsWorkstationConfigA#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * If set, overrides the default DIR specified by the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#working_dir GoogleWorkstationsWorkstationConfigA#working_dir}
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


export function googleWorkstationsWorkstationConfigContainerToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigContainerOutputReference | GoogleWorkstationsWorkstationConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#kms_key GoogleWorkstationsWorkstationConfigA#kms_key}
  */
  readonly kmsKey: string;
  /**
  * The service account to use with the specified KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#kms_key_service_account GoogleWorkstationsWorkstationConfigA#kms_key_service_account}
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


export function googleWorkstationsWorkstationConfigEncryptionKeyToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigEncryptionKeyOutputReference | GoogleWorkstationsWorkstationConfigEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_service_account: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd {
  /**
  * Type of the disk to use. Defaults to '"pd-standard"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#disk_type GoogleWorkstationsWorkstationConfigA#disk_type}
  */
  readonly diskType?: string;
  /**
  * Whether the disk is read only. If true, the disk may be shared by multiple VMs and 'sourceSnapshot' must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#read_only GoogleWorkstationsWorkstationConfigA#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Name of the disk image to use as the source for the disk.
  * 
  * Must be empty 'sourceSnapshot' is set.
  * Updating 'sourceImage' will update content in the ephemeral directory after the workstation is restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#source_image GoogleWorkstationsWorkstationConfigA#source_image}
  */
  readonly sourceImage?: string;
  /**
  * Name of the snapshot to use as the source for the disk.
  * 
  * Must be empty if 'sourceImage' is set.
  * Must be empty if 'read_only' is false.
  * Updating 'source_snapshot' will update content in the ephemeral directory after the workstation is restarted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#source_snapshot GoogleWorkstationsWorkstationConfigA#source_snapshot}
  */
  readonly sourceSnapshot?: string;
}

export function googleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdToTerraform(struct?: GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference | GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    source_image: cdktf.stringToTerraform(struct!.sourceImage),
    source_snapshot: cdktf.stringToTerraform(struct!.sourceSnapshot),
  }
}


export function googleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference | GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_image: {
      value: cdktf.stringToHclTerraform(struct!.sourceImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.sourceSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._sourceImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceImage = this._sourceImage;
    }
    if (this._sourceSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSnapshot = this._sourceSnapshot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskType = undefined;
      this._readOnly = undefined;
      this._sourceImage = undefined;
      this._sourceSnapshot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskType = value.diskType;
      this._readOnly = value.readOnly;
      this._sourceImage = value.sourceImage;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // source_image - computed: false, optional: true, required: false
  private _sourceImage?: string; 
  public get sourceImage() {
    return this.getStringAttribute('source_image');
  }
  public set sourceImage(value: string) {
    this._sourceImage = value;
  }
  public resetSourceImage() {
    this._sourceImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceImageInput() {
    return this._sourceImage;
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
export interface GoogleWorkstationsWorkstationConfigEphemeralDirectories {
  /**
  * Location of this directory in the running workstation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#mount_path GoogleWorkstationsWorkstationConfigA#mount_path}
  */
  readonly mountPath?: string;
  /**
  * gce_pd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#gce_pd GoogleWorkstationsWorkstationConfigA#gce_pd}
  */
  readonly gcePd?: GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd;
}

export function googleWorkstationsWorkstationConfigEphemeralDirectoriesToTerraform(struct?: GoogleWorkstationsWorkstationConfigEphemeralDirectories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    gce_pd: googleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdToTerraform(struct!.gcePd),
  }
}


export function googleWorkstationsWorkstationConfigEphemeralDirectoriesToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigEphemeralDirectories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gce_pd: {
      value: googleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdToHclTerraform(struct!.gcePd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigEphemeralDirectoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigEphemeralDirectories | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleWorkstationsWorkstationConfigEphemeralDirectories | cdktf.IResolvable | undefined) {
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
  private _gcePd = new GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePdOutputReference(this, "gce_pd");
  public get gcePd() {
    return this._gcePd;
  }
  public putGcePd(value: GoogleWorkstationsWorkstationConfigEphemeralDirectoriesGcePd) {
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

export class GoogleWorkstationsWorkstationConfigEphemeralDirectoriesList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigEphemeralDirectories[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigEphemeralDirectoriesOutputReference {
    return new GoogleWorkstationsWorkstationConfigEphemeralDirectoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators {
  /**
  * Number of accelerator cards exposed to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#count GoogleWorkstationsWorkstationConfigA#count}
  */
  readonly count: number;
  /**
  * Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#type GoogleWorkstationsWorkstationConfigA#type}
  */
  readonly type: string;
}

export function googleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference {
    return new GoogleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators {
  /**
  * Number of accelerator cards exposed to the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#count GoogleWorkstationsWorkstationConfigA#count}
  */
  readonly count: number;
  /**
  * Type of accelerator resource to attach to the instance, for example, "nvidia-tesla-p100".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#type GoogleWorkstationsWorkstationConfigA#type}
  */
  readonly type: string;
}

export function googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._type = value.type;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference {
    return new GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs {
  /**
  * Size of the boot disk in GB. The minimum boot disk size is '30' GB. Defaults to '50' GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#boot_disk_size_gb GoogleWorkstationsWorkstationConfigA#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Whether to enable nested virtualization on the Compute Engine VMs backing boosted Workstations.
  * 
  * See https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_nested_virtualization GoogleWorkstationsWorkstationConfigA#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The id to be used for the boost config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#id GoogleWorkstationsWorkstationConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The type of machine that boosted VM instances will use—for example, e2-standard-4. For more information about machine types that Cloud Workstations supports, see the list of available machine types https://cloud.google.com/workstations/docs/available-machine-types. Defaults to e2-standard-4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#machine_type GoogleWorkstationsWorkstationConfigA#machine_type}
  */
  readonly machineType?: string;
  /**
  * Number of instances to pool for faster workstation boosting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#pool_size GoogleWorkstationsWorkstationConfigA#pool_size}
  */
  readonly poolSize?: number;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#accelerators GoogleWorkstationsWorkstationConfigA#accelerators}
  */
  readonly accelerators?: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] | cdktf.IResolvable;
}

export function googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsToTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    id: cdktf.stringToTerraform(struct!.id),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    accelerators: cdktf.listMapper(googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsToTerraform, true)(struct!.accelerators),
  }
}


export function googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerators: {
      value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSizeGb = this._bootDiskSizeGb;
    }
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._poolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolSize = this._poolSize;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDiskSizeGb = undefined;
      this._enableNestedVirtualization = undefined;
      this._id = undefined;
      this._machineType = undefined;
      this._poolSize = undefined;
      this._accelerators.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._id = value.id;
      this._machineType = value.machineType;
      this._poolSize = value.poolSize;
      this._accelerators.internalValue = value.accelerators;
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

  // enable_nested_virtualization - computed: true, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // machine_type - computed: false, optional: true, required: false
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

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsAccelerators[] | cdktf.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }
}

export class GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference {
    return new GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig {
  /**
  * Whether the instance has confidential compute enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_confidential_compute GoogleWorkstationsWorkstationConfigA#enable_confidential_compute}
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


export function googleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigOutputReference | GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_confidential_compute: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialCompute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_integrity_monitoring GoogleWorkstationsWorkstationConfigA#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_secure_boot GoogleWorkstationsWorkstationConfigA#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Whether the instance has the vTPM enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_vtpm GoogleWorkstationsWorkstationConfigA#enable_vtpm}
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


export function googleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigOutputReference | GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_vtpm: {
      value: cdktf.booleanToHclTerraform(struct!.enableVtpm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#boot_disk_size_gb GoogleWorkstationsWorkstationConfigA#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * Whether instances have no public IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#disable_public_ip_addresses GoogleWorkstationsWorkstationConfigA#disable_public_ip_addresses}
  */
  readonly disablePublicIpAddresses?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable SSH access to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#disable_ssh GoogleWorkstationsWorkstationConfigA#disable_ssh}
  */
  readonly disableSsh?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.
  * 
  * See https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#enable_nested_virtualization GoogleWorkstationsWorkstationConfigA#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * The name of a Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#machine_type GoogleWorkstationsWorkstationConfigA#machine_type}
  */
  readonly machineType?: string;
  /**
  * Number of instances to pool for faster workstation startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#pool_size GoogleWorkstationsWorkstationConfigA#pool_size}
  */
  readonly poolSize?: number;
  /**
  * Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#service_account GoogleWorkstationsWorkstationConfigA#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have 'iam.serviceAccounts.actAs' on the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#service_account_scopes GoogleWorkstationsWorkstationConfigA#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * Network tags to add to the Compute Engine machines backing the Workstations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#tags GoogleWorkstationsWorkstationConfigA#tags}
  */
  readonly tags?: string[];
  /**
  * Resource manager tags to be bound to the VM instances backing the Workstations.
  * Tag keys and values have the same definition as
  * https://cloud.google.com/resource-manager/docs/tags/tags-overview
  * Keys must be in the format 'tagKeys/{tag_key_id}', and
  * values are in the format 'tagValues/456'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#vm_tags GoogleWorkstationsWorkstationConfigA#vm_tags}
  */
  readonly vmTags?: { [key: string]: string };
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#accelerators GoogleWorkstationsWorkstationConfigA#accelerators}
  */
  readonly accelerators?: GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators[] | cdktf.IResolvable;
  /**
  * boost_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#boost_configs GoogleWorkstationsWorkstationConfigA#boost_configs}
  */
  readonly boostConfigs?: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] | cdktf.IResolvable;
  /**
  * confidential_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#confidential_instance_config GoogleWorkstationsWorkstationConfigA#confidential_instance_config}
  */
  readonly confidentialInstanceConfig?: GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfig;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#shielded_instance_config GoogleWorkstationsWorkstationConfigA#shielded_instance_config}
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
    disable_ssh: cdktf.booleanToTerraform(struct!.disableSsh),
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    pool_size: cdktf.numberToTerraform(struct!.poolSize),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountScopes),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    vm_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vmTags),
    accelerators: cdktf.listMapper(googleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsToTerraform, true)(struct!.accelerators),
    boost_configs: cdktf.listMapper(googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsToTerraform, true)(struct!.boostConfigs),
    confidential_instance_config: googleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigToTerraform(struct!.confidentialInstanceConfig),
    shielded_instance_config: googleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}


export function googleWorkstationsWorkstationConfigHostGceInstanceToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostGceInstanceOutputReference | GoogleWorkstationsWorkstationConfigHostGceInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_public_ip_addresses: {
      value: cdktf.booleanToHclTerraform(struct!.disablePublicIpAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_ssh: {
      value: cdktf.booleanToHclTerraform(struct!.disableSsh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_size: {
      value: cdktf.numberToHclTerraform(struct!.poolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vm_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vmTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    accelerators: {
      value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsToHclTerraform, true)(struct!.accelerators),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsList",
    },
    boost_configs: {
      value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsToHclTerraform, true)(struct!.boostConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsList",
    },
    confidential_instance_config: {
      value: googleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigToHclTerraform(struct!.confidentialInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigHostGceInstanceConfidentialInstanceConfigList",
    },
    shielded_instance_config: {
      value: googleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigHostGceInstanceShieldedInstanceConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._disableSsh !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSsh = this._disableSsh;
    }
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
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
    if (this._serviceAccountScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountScopes = this._serviceAccountScopes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vmTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmTags = this._vmTags;
    }
    if (this._accelerators?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerators = this._accelerators?.internalValue;
    }
    if (this._boostConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boostConfigs = this._boostConfigs?.internalValue;
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
      this._disableSsh = undefined;
      this._enableNestedVirtualization = undefined;
      this._machineType = undefined;
      this._poolSize = undefined;
      this._serviceAccount = undefined;
      this._serviceAccountScopes = undefined;
      this._tags = undefined;
      this._vmTags = undefined;
      this._accelerators.internalValue = undefined;
      this._boostConfigs.internalValue = undefined;
      this._confidentialInstanceConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskSizeGb = value.bootDiskSizeGb;
      this._disablePublicIpAddresses = value.disablePublicIpAddresses;
      this._disableSsh = value.disableSsh;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._machineType = value.machineType;
      this._poolSize = value.poolSize;
      this._serviceAccount = value.serviceAccount;
      this._serviceAccountScopes = value.serviceAccountScopes;
      this._tags = value.tags;
      this._vmTags = value.vmTags;
      this._accelerators.internalValue = value.accelerators;
      this._boostConfigs.internalValue = value.boostConfigs;
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

  // disable_ssh - computed: false, optional: true, required: false
  private _disableSsh?: boolean | cdktf.IResolvable; 
  public get disableSsh() {
    return this.getBooleanAttribute('disable_ssh');
  }
  public set disableSsh(value: boolean | cdktf.IResolvable) {
    this._disableSsh = value;
  }
  public resetDisableSsh() {
    this._disableSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSshInput() {
    return this._disableSsh;
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
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

  // service_account_scopes - computed: true, optional: true, required: false
  private _serviceAccountScopes?: string[]; 
  public get serviceAccountScopes() {
    return this.getListAttribute('service_account_scopes');
  }
  public set serviceAccountScopes(value: string[]) {
    this._serviceAccountScopes = value;
  }
  public resetServiceAccountScopes() {
    this._serviceAccountScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountScopesInput() {
    return this._serviceAccountScopes;
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

  // vm_tags - computed: false, optional: true, required: false
  private _vmTags?: { [key: string]: string }; 
  public get vmTags() {
    return this.getStringMapAttribute('vm_tags');
  }
  public set vmTags(value: { [key: string]: string }) {
    this._vmTags = value;
  }
  public resetVmTags() {
    this._vmTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTagsInput() {
    return this._vmTags;
  }

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new GoogleWorkstationsWorkstationConfigHostGceInstanceAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: GoogleWorkstationsWorkstationConfigHostGceInstanceAccelerators[] | cdktf.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // boost_configs - computed: false, optional: true, required: false
  private _boostConfigs = new GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigsList(this, "boost_configs", false);
  public get boostConfigs() {
    return this._boostConfigs;
  }
  public putBoostConfigs(value: GoogleWorkstationsWorkstationConfigHostGceInstanceBoostConfigs[] | cdktf.IResolvable) {
    this._boostConfigs.internalValue = value;
  }
  public resetBoostConfigs() {
    this._boostConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boostConfigsInput() {
    return this._boostConfigs.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#gce_instance GoogleWorkstationsWorkstationConfigA#gce_instance}
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


export function googleWorkstationsWorkstationConfigHostToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigHostOutputReference | GoogleWorkstationsWorkstationConfigHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gce_instance: {
      value: googleWorkstationsWorkstationConfigHostGceInstanceToHclTerraform(struct!.gceInstance),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigHostGceInstanceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * The type of the persistent disk for the home directory. Defaults to 'pd-standard'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#disk_type GoogleWorkstationsWorkstationConfigA#disk_type}
  */
  readonly diskType?: string;
  /**
  * Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if 'sourceSnapshot' is set. Defaults to 'ext4'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#fs_type GoogleWorkstationsWorkstationConfigA#fs_type}
  */
  readonly fsType?: string;
  /**
  * Whether the persistent disk should be deleted when the workstation is deleted. Valid values are 'DELETE' and 'RETAIN'. Defaults to 'DELETE'. Possible values: ["DELETE", "RETAIN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#reclaim_policy GoogleWorkstationsWorkstationConfigA#reclaim_policy}
  */
  readonly reclaimPolicy?: string;
  /**
  * The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if 'sourceSnapshot' is set.
  * Valid values are '10', '50', '100', '200', '500', or '1000'. Defaults to '200'. If less than '200' GB, the 'diskType' must be 'pd-balanced' or 'pd-ssd'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#size_gb GoogleWorkstationsWorkstationConfigA#size_gb}
  */
  readonly sizeGb?: number;
  /**
  * Name of the snapshot to use as the source for the disk. This can be the snapshot's 'self_link', 'id', or a string in the format of 'projects/{project}/global/snapshots/{snapshot}'. If set, 'sizeGb' and 'fsType' must be empty. Can only be updated if it has an existing value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#source_snapshot GoogleWorkstationsWorkstationConfigA#source_snapshot}
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


export function googleWorkstationsWorkstationConfigPersistentDirectoriesGcePdToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdOutputReference | GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reclaim_policy: {
      value: cdktf.stringToHclTerraform(struct!.reclaimPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_snapshot: {
      value: cdktf.stringToHclTerraform(struct!.sourceSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#mount_path GoogleWorkstationsWorkstationConfigA#mount_path}
  */
  readonly mountPath?: string;
  /**
  * gce_pd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#gce_pd GoogleWorkstationsWorkstationConfigA#gce_pd}
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


export function googleWorkstationsWorkstationConfigPersistentDirectoriesToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigPersistentDirectories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gce_pd: {
      value: googleWorkstationsWorkstationConfigPersistentDirectoriesGcePdToHclTerraform(struct!.gcePd),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleWorkstationsWorkstationConfigPersistentDirectoriesGcePdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface GoogleWorkstationsWorkstationConfigReadinessChecks {
  /**
  * Path to which the request should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#path GoogleWorkstationsWorkstationConfigA#path}
  */
  readonly path: string;
  /**
  * Port to which the request should be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#port GoogleWorkstationsWorkstationConfigA#port}
  */
  readonly port: number;
}

export function googleWorkstationsWorkstationConfigReadinessChecksToTerraform(struct?: GoogleWorkstationsWorkstationConfigReadinessChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function googleWorkstationsWorkstationConfigReadinessChecksToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigReadinessChecks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationConfigReadinessChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationConfigReadinessChecks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationConfigReadinessChecks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._port = value.port;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class GoogleWorkstationsWorkstationConfigReadinessChecksList extends cdktf.ComplexList {
  public internalValue? : GoogleWorkstationsWorkstationConfigReadinessChecks[] | cdktf.IResolvable

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
  public get(index: number): GoogleWorkstationsWorkstationConfigReadinessChecksOutputReference {
    return new GoogleWorkstationsWorkstationConfigReadinessChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#create GoogleWorkstationsWorkstationConfigA#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#delete GoogleWorkstationsWorkstationConfigA#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#update GoogleWorkstationsWorkstationConfigA#update}
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


export function googleWorkstationsWorkstationConfigTimeoutsToHclTerraform(struct?: GoogleWorkstationsWorkstationConfigTimeouts | cdktf.IResolvable): any {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config google_workstations_workstation_config}
*/
export class GoogleWorkstationsWorkstationConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_workstations_workstation_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleWorkstationsWorkstationConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleWorkstationsWorkstationConfigA to import
  * @param importFromId The id of the existing GoogleWorkstationsWorkstationConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleWorkstationsWorkstationConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_workstations_workstation_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_workstations_workstation_config google_workstations_workstation_config} Resource
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
        providerVersion: '6.14.1',
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
    this._annotations = config.annotations;
    this._disableTcpConnections = config.disableTcpConnections;
    this._displayName = config.displayName;
    this._enableAuditAgent = config.enableAuditAgent;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._labels = config.labels;
    this._location = config.location;
    this._maxUsableWorkstations = config.maxUsableWorkstations;
    this._project = config.project;
    this._replicaZones = config.replicaZones;
    this._runningTimeout = config.runningTimeout;
    this._workstationClusterId = config.workstationClusterId;
    this._workstationConfigId = config.workstationConfigId;
    this._allowedPorts.internalValue = config.allowedPorts;
    this._container.internalValue = config.container;
    this._encryptionKey.internalValue = config.encryptionKey;
    this._ephemeralDirectories.internalValue = config.ephemeralDirectories;
    this._host.internalValue = config.host;
    this._persistentDirectories.internalValue = config.persistentDirectories;
    this._readinessChecks.internalValue = config.readinessChecks;
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

  // disable_tcp_connections - computed: false, optional: true, required: false
  private _disableTcpConnections?: boolean | cdktf.IResolvable; 
  public get disableTcpConnections() {
    return this.getBooleanAttribute('disable_tcp_connections');
  }
  public set disableTcpConnections(value: boolean | cdktf.IResolvable) {
    this._disableTcpConnections = value;
  }
  public resetDisableTcpConnections() {
    this._disableTcpConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTcpConnectionsInput() {
    return this._disableTcpConnections;
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_audit_agent - computed: false, optional: true, required: false
  private _enableAuditAgent?: boolean | cdktf.IResolvable; 
  public get enableAuditAgent() {
    return this.getBooleanAttribute('enable_audit_agent');
  }
  public set enableAuditAgent(value: boolean | cdktf.IResolvable) {
    this._enableAuditAgent = value;
  }
  public resetEnableAuditAgent() {
    this._enableAuditAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuditAgentInput() {
    return this._enableAuditAgent;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: string; 
  public get idleTimeout() {
    return this.getStringAttribute('idle_timeout');
  }
  public set idleTimeout(value: string) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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

  // max_usable_workstations - computed: true, optional: true, required: false
  private _maxUsableWorkstations?: number; 
  public get maxUsableWorkstations() {
    return this.getNumberAttribute('max_usable_workstations');
  }
  public set maxUsableWorkstations(value: number) {
    this._maxUsableWorkstations = value;
  }
  public resetMaxUsableWorkstations() {
    this._maxUsableWorkstations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUsableWorkstationsInput() {
    return this._maxUsableWorkstations;
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

  // replica_zones - computed: true, optional: true, required: false
  private _replicaZones?: string[]; 
  public get replicaZones() {
    return this.getListAttribute('replica_zones');
  }
  public set replicaZones(value: string[]) {
    this._replicaZones = value;
  }
  public resetReplicaZones() {
    this._replicaZones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaZonesInput() {
    return this._replicaZones;
  }

  // running_timeout - computed: false, optional: true, required: false
  private _runningTimeout?: string; 
  public get runningTimeout() {
    return this.getStringAttribute('running_timeout');
  }
  public set runningTimeout(value: string) {
    this._runningTimeout = value;
  }
  public resetRunningTimeout() {
    this._runningTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningTimeoutInput() {
    return this._runningTimeout;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // allowed_ports - computed: false, optional: true, required: false
  private _allowedPorts = new GoogleWorkstationsWorkstationConfigAllowedPortsList(this, "allowed_ports", false);
  public get allowedPorts() {
    return this._allowedPorts;
  }
  public putAllowedPorts(value: GoogleWorkstationsWorkstationConfigAllowedPorts[] | cdktf.IResolvable) {
    this._allowedPorts.internalValue = value;
  }
  public resetAllowedPorts() {
    this._allowedPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPortsInput() {
    return this._allowedPorts.internalValue;
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

  // ephemeral_directories - computed: false, optional: true, required: false
  private _ephemeralDirectories = new GoogleWorkstationsWorkstationConfigEphemeralDirectoriesList(this, "ephemeral_directories", false);
  public get ephemeralDirectories() {
    return this._ephemeralDirectories;
  }
  public putEphemeralDirectories(value: GoogleWorkstationsWorkstationConfigEphemeralDirectories[] | cdktf.IResolvable) {
    this._ephemeralDirectories.internalValue = value;
  }
  public resetEphemeralDirectories() {
    this._ephemeralDirectories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralDirectoriesInput() {
    return this._ephemeralDirectories.internalValue;
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

  // readiness_checks - computed: false, optional: true, required: false
  private _readinessChecks = new GoogleWorkstationsWorkstationConfigReadinessChecksList(this, "readiness_checks", false);
  public get readinessChecks() {
    return this._readinessChecks;
  }
  public putReadinessChecks(value: GoogleWorkstationsWorkstationConfigReadinessChecks[] | cdktf.IResolvable) {
    this._readinessChecks.internalValue = value;
  }
  public resetReadinessChecks() {
    this._readinessChecks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessChecksInput() {
    return this._readinessChecks.internalValue;
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
      disable_tcp_connections: cdktf.booleanToTerraform(this._disableTcpConnections),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_audit_agent: cdktf.booleanToTerraform(this._enableAuditAgent),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.stringToTerraform(this._idleTimeout),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      max_usable_workstations: cdktf.numberToTerraform(this._maxUsableWorkstations),
      project: cdktf.stringToTerraform(this._project),
      replica_zones: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replicaZones),
      running_timeout: cdktf.stringToTerraform(this._runningTimeout),
      workstation_cluster_id: cdktf.stringToTerraform(this._workstationClusterId),
      workstation_config_id: cdktf.stringToTerraform(this._workstationConfigId),
      allowed_ports: cdktf.listMapper(googleWorkstationsWorkstationConfigAllowedPortsToTerraform, true)(this._allowedPorts.internalValue),
      container: googleWorkstationsWorkstationConfigContainerToTerraform(this._container.internalValue),
      encryption_key: googleWorkstationsWorkstationConfigEncryptionKeyToTerraform(this._encryptionKey.internalValue),
      ephemeral_directories: cdktf.listMapper(googleWorkstationsWorkstationConfigEphemeralDirectoriesToTerraform, true)(this._ephemeralDirectories.internalValue),
      host: googleWorkstationsWorkstationConfigHostToTerraform(this._host.internalValue),
      persistent_directories: cdktf.listMapper(googleWorkstationsWorkstationConfigPersistentDirectoriesToTerraform, true)(this._persistentDirectories.internalValue),
      readiness_checks: cdktf.listMapper(googleWorkstationsWorkstationConfigReadinessChecksToTerraform, true)(this._readinessChecks.internalValue),
      timeouts: googleWorkstationsWorkstationConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      disable_tcp_connections: {
        value: cdktf.booleanToHclTerraform(this._disableTcpConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_audit_agent: {
        value: cdktf.booleanToHclTerraform(this._enableAuditAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_timeout: {
        value: cdktf.stringToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_usable_workstations: {
        value: cdktf.numberToHclTerraform(this._maxUsableWorkstations),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replica_zones: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replicaZones),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      running_timeout: {
        value: cdktf.stringToHclTerraform(this._runningTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workstation_cluster_id: {
        value: cdktf.stringToHclTerraform(this._workstationClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workstation_config_id: {
        value: cdktf.stringToHclTerraform(this._workstationConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_ports: {
        value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigAllowedPortsToHclTerraform, true)(this._allowedPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigAllowedPortsList",
      },
      container: {
        value: googleWorkstationsWorkstationConfigContainerToHclTerraform(this._container.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigContainerList",
      },
      encryption_key: {
        value: googleWorkstationsWorkstationConfigEncryptionKeyToHclTerraform(this._encryptionKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigEncryptionKeyList",
      },
      ephemeral_directories: {
        value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigEphemeralDirectoriesToHclTerraform, true)(this._ephemeralDirectories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigEphemeralDirectoriesList",
      },
      host: {
        value: googleWorkstationsWorkstationConfigHostToHclTerraform(this._host.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigHostList",
      },
      persistent_directories: {
        value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigPersistentDirectoriesToHclTerraform, true)(this._persistentDirectories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigPersistentDirectoriesList",
      },
      readiness_checks: {
        value: cdktf.listMapperHcl(googleWorkstationsWorkstationConfigReadinessChecksToHclTerraform, true)(this._readinessChecks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationConfigReadinessChecksList",
      },
      timeouts: {
        value: googleWorkstationsWorkstationConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleWorkstationsWorkstationConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
