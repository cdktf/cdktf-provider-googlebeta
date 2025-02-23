// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleTpuV2VmConfig extends cdktf.TerraformMetaArguments {
  /**
  * TPU accelerator type for the TPU. 'accelerator_type' cannot be used at the same time as
  * 'accelerator_config'. If neither is specified, 'accelerator_type' defaults to 'v2-8'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#accelerator_type GoogleTpuV2Vm#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The CIDR block that the TPU node will use when selecting an IP address. This CIDR block must
  * be a /29 block; the Compute Engine networks API forbids a smaller block, and using a larger
  * block would be wasteful (a node can only consume one IP address). Errors will occur if the
  * CIDR block has already been used for a currently existing TPU node, the CIDR block conflicts
  * with any subnetworks in the user's provided network, or the provided network is peered with
  * another network that is using that CIDR block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#cidr_block GoogleTpuV2Vm#cidr_block}
  */
  readonly cidrBlock?: string;
  /**
  * Text description of the TPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#description GoogleTpuV2Vm#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#id GoogleTpuV2Vm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#labels GoogleTpuV2Vm#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Custom metadata to apply to the TPU Node. Can set startup-script and shutdown-script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#metadata GoogleTpuV2Vm#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The immutable name of the TPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#name GoogleTpuV2Vm#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#project GoogleTpuV2Vm#project}
  */
  readonly project?: string;
  /**
  * Runtime version for the TPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#runtime_version GoogleTpuV2Vm#runtime_version}
  */
  readonly runtimeVersion: string;
  /**
  * Tags to apply to the TPU Node. Tags are used to identify valid sources or targets for network firewalls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#tags GoogleTpuV2Vm#tags}
  */
  readonly tags?: string[];
  /**
  * The GCP location for the TPU. If it is not provided, the provider zone is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#zone GoogleTpuV2Vm#zone}
  */
  readonly zone?: string;
  /**
  * accelerator_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#accelerator_config GoogleTpuV2Vm#accelerator_config}
  */
  readonly acceleratorConfig?: GoogleTpuV2VmAcceleratorConfig;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#data_disks GoogleTpuV2Vm#data_disks}
  */
  readonly dataDisks?: GoogleTpuV2VmDataDisks[] | cdktf.IResolvable;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#network_config GoogleTpuV2Vm#network_config}
  */
  readonly networkConfig?: GoogleTpuV2VmNetworkConfig;
  /**
  * network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#network_configs GoogleTpuV2Vm#network_configs}
  */
  readonly networkConfigs?: GoogleTpuV2VmNetworkConfigs[] | cdktf.IResolvable;
  /**
  * scheduling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#scheduling_config GoogleTpuV2Vm#scheduling_config}
  */
  readonly schedulingConfig?: GoogleTpuV2VmSchedulingConfig;
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#service_account GoogleTpuV2Vm#service_account}
  */
  readonly serviceAccount?: GoogleTpuV2VmServiceAccount;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#shielded_instance_config GoogleTpuV2Vm#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: GoogleTpuV2VmShieldedInstanceConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#timeouts GoogleTpuV2Vm#timeouts}
  */
  readonly timeouts?: GoogleTpuV2VmTimeouts;
}
export interface GoogleTpuV2VmNetworkEndpointsAccessConfig {
}

export function googleTpuV2VmNetworkEndpointsAccessConfigToTerraform(struct?: GoogleTpuV2VmNetworkEndpointsAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleTpuV2VmNetworkEndpointsAccessConfigToHclTerraform(struct?: GoogleTpuV2VmNetworkEndpointsAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleTpuV2VmNetworkEndpointsAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmNetworkEndpointsAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // external_ip - computed: true, optional: false, required: false
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
}

export class GoogleTpuV2VmNetworkEndpointsAccessConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference {
    return new GoogleTpuV2VmNetworkEndpointsAccessConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleTpuV2VmNetworkEndpoints {
}

export function googleTpuV2VmNetworkEndpointsToTerraform(struct?: GoogleTpuV2VmNetworkEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleTpuV2VmNetworkEndpointsToHclTerraform(struct?: GoogleTpuV2VmNetworkEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleTpuV2VmNetworkEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleTpuV2VmNetworkEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmNetworkEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_config - computed: true, optional: false, required: false
  private _accessConfig = new GoogleTpuV2VmNetworkEndpointsAccessConfigList(this, "access_config", false);
  public get accessConfig() {
    return this._accessConfig;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class GoogleTpuV2VmNetworkEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleTpuV2VmNetworkEndpointsOutputReference {
    return new GoogleTpuV2VmNetworkEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleTpuV2VmSymptoms {
}

export function googleTpuV2VmSymptomsToTerraform(struct?: GoogleTpuV2VmSymptoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleTpuV2VmSymptomsToHclTerraform(struct?: GoogleTpuV2VmSymptoms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleTpuV2VmSymptomsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleTpuV2VmSymptoms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmSymptoms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // symptom_type - computed: true, optional: false, required: false
  public get symptomType() {
    return this.getStringAttribute('symptom_type');
  }

  // worker_id - computed: true, optional: false, required: false
  public get workerId() {
    return this.getStringAttribute('worker_id');
  }
}

export class GoogleTpuV2VmSymptomsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleTpuV2VmSymptomsOutputReference {
    return new GoogleTpuV2VmSymptomsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleTpuV2VmAcceleratorConfig {
  /**
  * Topology of TPU in chips.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#topology GoogleTpuV2Vm#topology}
  */
  readonly topology: string;
  /**
  * Type of TPU. Please select one of the allowed types: https://cloud.google.com/tpu/docs/reference/rest/v2/AcceleratorConfig#Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#type GoogleTpuV2Vm#type}
  */
  readonly type: string;
}

export function googleTpuV2VmAcceleratorConfigToTerraform(struct?: GoogleTpuV2VmAcceleratorConfigOutputReference | GoogleTpuV2VmAcceleratorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topology: cdktf.stringToTerraform(struct!.topology),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleTpuV2VmAcceleratorConfigToHclTerraform(struct?: GoogleTpuV2VmAcceleratorConfigOutputReference | GoogleTpuV2VmAcceleratorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topology: {
      value: cdktf.stringToHclTerraform(struct!.topology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class GoogleTpuV2VmAcceleratorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2VmAcceleratorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topology !== undefined) {
      hasAnyValues = true;
      internalValueResult.topology = this._topology;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmAcceleratorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topology = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topology = value.topology;
      this._type = value.type;
    }
  }

  // topology - computed: false, optional: false, required: true
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
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
export interface GoogleTpuV2VmDataDisks {
  /**
  * The mode in which to attach this disk. If not specified, the default is READ_WRITE
  * mode. Only applicable to dataDisks. Default value: "READ_WRITE" Possible values: ["READ_WRITE", "READ_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#mode GoogleTpuV2Vm#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the full path to an existing disk. For example:
  * "projects/my-project/zones/us-central1-c/disks/my-disk".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#source_disk GoogleTpuV2Vm#source_disk}
  */
  readonly sourceDisk: string;
}

export function googleTpuV2VmDataDisksToTerraform(struct?: GoogleTpuV2VmDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    source_disk: cdktf.stringToTerraform(struct!.sourceDisk),
  }
}


export function googleTpuV2VmDataDisksToHclTerraform(struct?: GoogleTpuV2VmDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_disk: {
      value: cdktf.stringToHclTerraform(struct!.sourceDisk),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2VmDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleTpuV2VmDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._sourceDisk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDisk = this._sourceDisk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._sourceDisk = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._sourceDisk = value.sourceDisk;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source_disk - computed: false, optional: false, required: true
  private _sourceDisk?: string; 
  public get sourceDisk() {
    return this.getStringAttribute('source_disk');
  }
  public set sourceDisk(value: string) {
    this._sourceDisk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDiskInput() {
    return this._sourceDisk;
  }
}

export class GoogleTpuV2VmDataDisksList extends cdktf.ComplexList {
  public internalValue? : GoogleTpuV2VmDataDisks[] | cdktf.IResolvable

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
  public get(index: number): GoogleTpuV2VmDataDisksOutputReference {
    return new GoogleTpuV2VmDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleTpuV2VmNetworkConfig {
  /**
  * Allows the TPU node to send and receive packets with non-matching destination or source
  * IPs. This is required if you plan to use the TPU workers to forward routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * Indicates that external IP addresses would be associated with the TPU workers. If set to
  * false, the specified subnetwork or network should have Private Google Access enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}
  */
  readonly enableExternalIps?: boolean | cdktf.IResolvable;
  /**
  * The name of the network for the TPU node. It must be a preexisting Google Compute Engine
  * network. If none is provided, "default" will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}
  */
  readonly network?: string;
  /**
  * Specifies networking queue count for TPU VM instance's network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}
  */
  readonly queueCount?: number;
  /**
  * The name of the subnetwork for the TPU node. It must be a preexisting Google Compute
  * Engine subnetwork. If none is provided, "default" will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleTpuV2VmNetworkConfigToTerraform(struct?: GoogleTpuV2VmNetworkConfigOutputReference | GoogleTpuV2VmNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_ip_forward: cdktf.booleanToTerraform(struct!.canIpForward),
    enable_external_ips: cdktf.booleanToTerraform(struct!.enableExternalIps),
    network: cdktf.stringToTerraform(struct!.network),
    queue_count: cdktf.numberToTerraform(struct!.queueCount),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleTpuV2VmNetworkConfigToHclTerraform(struct?: GoogleTpuV2VmNetworkConfigOutputReference | GoogleTpuV2VmNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_ip_forward: {
      value: cdktf.booleanToHclTerraform(struct!.canIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_external_ips: {
      value: cdktf.booleanToHclTerraform(struct!.enableExternalIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_count: {
      value: cdktf.numberToHclTerraform(struct!.queueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2VmNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2VmNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.canIpForward = this._canIpForward;
    }
    if (this._enableExternalIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExternalIps = this._enableExternalIps;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._queueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCount = this._queueCount;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canIpForward = undefined;
      this._enableExternalIps = undefined;
      this._network = undefined;
      this._queueCount = undefined;
      this._subnetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canIpForward = value.canIpForward;
      this._enableExternalIps = value.enableExternalIps;
      this._network = value.network;
      this._queueCount = value.queueCount;
      this._subnetwork = value.subnetwork;
    }
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean | cdktf.IResolvable; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean | cdktf.IResolvable) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward;
  }

  // enable_external_ips - computed: false, optional: true, required: false
  private _enableExternalIps?: boolean | cdktf.IResolvable; 
  public get enableExternalIps() {
    return this.getBooleanAttribute('enable_external_ips');
  }
  public set enableExternalIps(value: boolean | cdktf.IResolvable) {
    this._enableExternalIps = value;
  }
  public resetEnableExternalIps() {
    this._enableExternalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalIpsInput() {
    return this._enableExternalIps;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // queue_count - computed: false, optional: true, required: false
  private _queueCount?: number; 
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }
  public set queueCount(value: number) {
    this._queueCount = value;
  }
  public resetQueueCount() {
    this._queueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCountInput() {
    return this._queueCount;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}
export interface GoogleTpuV2VmNetworkConfigs {
  /**
  * Allows the TPU node to send and receive packets with non-matching destination or source
  * IPs. This is required if you plan to use the TPU workers to forward routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#can_ip_forward GoogleTpuV2Vm#can_ip_forward}
  */
  readonly canIpForward?: boolean | cdktf.IResolvable;
  /**
  * Indicates that external IP addresses would be associated with the TPU workers. If set to
  * false, the specified subnetwork or network should have Private Google Access enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#enable_external_ips GoogleTpuV2Vm#enable_external_ips}
  */
  readonly enableExternalIps?: boolean | cdktf.IResolvable;
  /**
  * The name of the network for the TPU node. It must be a preexisting Google Compute Engine
  * network. If none is provided, "default" will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#network GoogleTpuV2Vm#network}
  */
  readonly network?: string;
  /**
  * Specifies networking queue count for TPU VM instance's network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#queue_count GoogleTpuV2Vm#queue_count}
  */
  readonly queueCount?: number;
  /**
  * The name of the subnetwork for the TPU node. It must be a preexisting Google Compute
  * Engine subnetwork. If none is provided, "default" will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#subnetwork GoogleTpuV2Vm#subnetwork}
  */
  readonly subnetwork?: string;
}

export function googleTpuV2VmNetworkConfigsToTerraform(struct?: GoogleTpuV2VmNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    can_ip_forward: cdktf.booleanToTerraform(struct!.canIpForward),
    enable_external_ips: cdktf.booleanToTerraform(struct!.enableExternalIps),
    network: cdktf.stringToTerraform(struct!.network),
    queue_count: cdktf.numberToTerraform(struct!.queueCount),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function googleTpuV2VmNetworkConfigsToHclTerraform(struct?: GoogleTpuV2VmNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    can_ip_forward: {
      value: cdktf.booleanToHclTerraform(struct!.canIpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_external_ips: {
      value: cdktf.booleanToHclTerraform(struct!.enableExternalIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_count: {
      value: cdktf.numberToHclTerraform(struct!.queueCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2VmNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleTpuV2VmNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canIpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.canIpForward = this._canIpForward;
    }
    if (this._enableExternalIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExternalIps = this._enableExternalIps;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._queueCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueCount = this._queueCount;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canIpForward = undefined;
      this._enableExternalIps = undefined;
      this._network = undefined;
      this._queueCount = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canIpForward = value.canIpForward;
      this._enableExternalIps = value.enableExternalIps;
      this._network = value.network;
      this._queueCount = value.queueCount;
      this._subnetwork = value.subnetwork;
    }
  }

  // can_ip_forward - computed: false, optional: true, required: false
  private _canIpForward?: boolean | cdktf.IResolvable; 
  public get canIpForward() {
    return this.getBooleanAttribute('can_ip_forward');
  }
  public set canIpForward(value: boolean | cdktf.IResolvable) {
    this._canIpForward = value;
  }
  public resetCanIpForward() {
    this._canIpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canIpForwardInput() {
    return this._canIpForward;
  }

  // enable_external_ips - computed: false, optional: true, required: false
  private _enableExternalIps?: boolean | cdktf.IResolvable; 
  public get enableExternalIps() {
    return this.getBooleanAttribute('enable_external_ips');
  }
  public set enableExternalIps(value: boolean | cdktf.IResolvable) {
    this._enableExternalIps = value;
  }
  public resetEnableExternalIps() {
    this._enableExternalIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExternalIpsInput() {
    return this._enableExternalIps;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // queue_count - computed: false, optional: true, required: false
  private _queueCount?: number; 
  public get queueCount() {
    return this.getNumberAttribute('queue_count');
  }
  public set queueCount(value: number) {
    this._queueCount = value;
  }
  public resetQueueCount() {
    this._queueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueCountInput() {
    return this._queueCount;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class GoogleTpuV2VmNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleTpuV2VmNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleTpuV2VmNetworkConfigsOutputReference {
    return new GoogleTpuV2VmNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleTpuV2VmSchedulingConfig {
  /**
  * Defines whether the node is preemptible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#preemptible GoogleTpuV2Vm#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Whether the node is created under a reservation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#reserved GoogleTpuV2Vm#reserved}
  */
  readonly reserved?: boolean | cdktf.IResolvable;
}

export function googleTpuV2VmSchedulingConfigToTerraform(struct?: GoogleTpuV2VmSchedulingConfigOutputReference | GoogleTpuV2VmSchedulingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    reserved: cdktf.booleanToTerraform(struct!.reserved),
  }
}


export function googleTpuV2VmSchedulingConfigToHclTerraform(struct?: GoogleTpuV2VmSchedulingConfigOutputReference | GoogleTpuV2VmSchedulingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reserved: {
      value: cdktf.booleanToHclTerraform(struct!.reserved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2VmSchedulingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2VmSchedulingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._reserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.reserved = this._reserved;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmSchedulingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preemptible = undefined;
      this._reserved = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preemptible = value.preemptible;
      this._reserved = value.reserved;
    }
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // reserved - computed: false, optional: true, required: false
  private _reserved?: boolean | cdktf.IResolvable; 
  public get reserved() {
    return this.getBooleanAttribute('reserved');
  }
  public set reserved(value: boolean | cdktf.IResolvable) {
    this._reserved = value;
  }
  public resetReserved() {
    this._reserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedInput() {
    return this._reserved;
  }
}
export interface GoogleTpuV2VmServiceAccount {
  /**
  * Email address of the service account. If empty, default Compute service account will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#email GoogleTpuV2Vm#email}
  */
  readonly email?: string;
  /**
  * The list of scopes to be made available for this service account. If empty, access to all
  * Cloud APIs will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#scope GoogleTpuV2Vm#scope}
  */
  readonly scope?: string[];
}

export function googleTpuV2VmServiceAccountToTerraform(struct?: GoogleTpuV2VmServiceAccountOutputReference | GoogleTpuV2VmServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function googleTpuV2VmServiceAccountToHclTerraform(struct?: GoogleTpuV2VmServiceAccountOutputReference | GoogleTpuV2VmServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2VmServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2VmServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._scope = value.scope;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface GoogleTpuV2VmShieldedInstanceConfig {
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#enable_secure_boot GoogleTpuV2Vm#enable_secure_boot}
  */
  readonly enableSecureBoot: boolean | cdktf.IResolvable;
}

export function googleTpuV2VmShieldedInstanceConfigToTerraform(struct?: GoogleTpuV2VmShieldedInstanceConfigOutputReference | GoogleTpuV2VmShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function googleTpuV2VmShieldedInstanceConfigToHclTerraform(struct?: GoogleTpuV2VmShieldedInstanceConfigOutputReference | GoogleTpuV2VmShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2VmShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2VmShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2VmShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_secure_boot - computed: false, optional: false, required: true
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface GoogleTpuV2VmTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#create GoogleTpuV2Vm#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#delete GoogleTpuV2Vm#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#update GoogleTpuV2Vm#update}
  */
  readonly update?: string;
}

export function googleTpuV2VmTimeoutsToTerraform(struct?: GoogleTpuV2VmTimeouts | cdktf.IResolvable): any {
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


export function googleTpuV2VmTimeoutsToHclTerraform(struct?: GoogleTpuV2VmTimeouts | cdktf.IResolvable): any {
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

export class GoogleTpuV2VmTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleTpuV2VmTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleTpuV2VmTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm google_tpu_v2_vm}
*/
export class GoogleTpuV2Vm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_tpu_v2_vm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleTpuV2Vm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleTpuV2Vm to import
  * @param importFromId The id of the existing GoogleTpuV2Vm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleTpuV2Vm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_tpu_v2_vm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_tpu_v2_vm google_tpu_v2_vm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleTpuV2VmConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleTpuV2VmConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tpu_v2_vm',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.21.0',
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
    this._acceleratorType = config.acceleratorType;
    this._cidrBlock = config.cidrBlock;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._metadata = config.metadata;
    this._name = config.name;
    this._project = config.project;
    this._runtimeVersion = config.runtimeVersion;
    this._tags = config.tags;
    this._zone = config.zone;
    this._acceleratorConfig.internalValue = config.acceleratorConfig;
    this._dataDisks.internalValue = config.dataDisks;
    this._networkConfig.internalValue = config.networkConfig;
    this._networkConfigs.internalValue = config.networkConfigs;
    this._schedulingConfig.internalValue = config.schedulingConfig;
    this._serviceAccount.internalValue = config.serviceAccount;
    this._shieldedInstanceConfig.internalValue = config.shieldedInstanceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accelerator_type - computed: true, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // cidr_block - computed: true, optional: true, required: false
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  public resetCidrBlock() {
    this._cidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // health - computed: true, optional: false, required: false
  public get health() {
    return this.getStringAttribute('health');
  }

  // health_description - computed: true, optional: false, required: false
  public get healthDescription() {
    return this.getStringAttribute('health_description');
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // multislice_node - computed: true, optional: false, required: false
  public get multisliceNode() {
    return this.getBooleanAttribute('multislice_node');
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

  // network_endpoints - computed: true, optional: false, required: false
  private _networkEndpoints = new GoogleTpuV2VmNetworkEndpointsList(this, "network_endpoints", false);
  public get networkEndpoints() {
    return this._networkEndpoints;
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

  // queued_resource - computed: true, optional: false, required: false
  public get queuedResource() {
    return this.getStringAttribute('queued_resource');
  }

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // symptoms - computed: true, optional: false, required: false
  private _symptoms = new GoogleTpuV2VmSymptomsList(this, "symptoms", false);
  public get symptoms() {
    return this._symptoms;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // accelerator_config - computed: false, optional: true, required: false
  private _acceleratorConfig = new GoogleTpuV2VmAcceleratorConfigOutputReference(this, "accelerator_config");
  public get acceleratorConfig() {
    return this._acceleratorConfig;
  }
  public putAcceleratorConfig(value: GoogleTpuV2VmAcceleratorConfig) {
    this._acceleratorConfig.internalValue = value;
  }
  public resetAcceleratorConfig() {
    this._acceleratorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorConfigInput() {
    return this._acceleratorConfig.internalValue;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new GoogleTpuV2VmDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: GoogleTpuV2VmDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleTpuV2VmNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleTpuV2VmNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // network_configs - computed: false, optional: true, required: false
  private _networkConfigs = new GoogleTpuV2VmNetworkConfigsList(this, "network_configs", false);
  public get networkConfigs() {
    return this._networkConfigs;
  }
  public putNetworkConfigs(value: GoogleTpuV2VmNetworkConfigs[] | cdktf.IResolvable) {
    this._networkConfigs.internalValue = value;
  }
  public resetNetworkConfigs() {
    this._networkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigsInput() {
    return this._networkConfigs.internalValue;
  }

  // scheduling_config - computed: false, optional: true, required: false
  private _schedulingConfig = new GoogleTpuV2VmSchedulingConfigOutputReference(this, "scheduling_config");
  public get schedulingConfig() {
    return this._schedulingConfig;
  }
  public putSchedulingConfig(value: GoogleTpuV2VmSchedulingConfig) {
    this._schedulingConfig.internalValue = value;
  }
  public resetSchedulingConfig() {
    this._schedulingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingConfigInput() {
    return this._schedulingConfig.internalValue;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new GoogleTpuV2VmServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: GoogleTpuV2VmServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new GoogleTpuV2VmShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: GoogleTpuV2VmShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleTpuV2VmTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleTpuV2VmTimeouts) {
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
      accelerator_type: cdktf.stringToTerraform(this._acceleratorType),
      cidr_block: cdktf.stringToTerraform(this._cidrBlock),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      runtime_version: cdktf.stringToTerraform(this._runtimeVersion),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
      accelerator_config: googleTpuV2VmAcceleratorConfigToTerraform(this._acceleratorConfig.internalValue),
      data_disks: cdktf.listMapper(googleTpuV2VmDataDisksToTerraform, true)(this._dataDisks.internalValue),
      network_config: googleTpuV2VmNetworkConfigToTerraform(this._networkConfig.internalValue),
      network_configs: cdktf.listMapper(googleTpuV2VmNetworkConfigsToTerraform, true)(this._networkConfigs.internalValue),
      scheduling_config: googleTpuV2VmSchedulingConfigToTerraform(this._schedulingConfig.internalValue),
      service_account: googleTpuV2VmServiceAccountToTerraform(this._serviceAccount.internalValue),
      shielded_instance_config: googleTpuV2VmShieldedInstanceConfigToTerraform(this._shieldedInstanceConfig.internalValue),
      timeouts: googleTpuV2VmTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accelerator_type: {
        value: cdktf.stringToHclTerraform(this._acceleratorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_block: {
        value: cdktf.stringToHclTerraform(this._cidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      runtime_version: {
        value: cdktf.stringToHclTerraform(this._runtimeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      accelerator_config: {
        value: googleTpuV2VmAcceleratorConfigToHclTerraform(this._acceleratorConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmAcceleratorConfigList",
      },
      data_disks: {
        value: cdktf.listMapperHcl(googleTpuV2VmDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmDataDisksList",
      },
      network_config: {
        value: googleTpuV2VmNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmNetworkConfigList",
      },
      network_configs: {
        value: cdktf.listMapperHcl(googleTpuV2VmNetworkConfigsToHclTerraform, true)(this._networkConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmNetworkConfigsList",
      },
      scheduling_config: {
        value: googleTpuV2VmSchedulingConfigToHclTerraform(this._schedulingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmSchedulingConfigList",
      },
      service_account: {
        value: googleTpuV2VmServiceAccountToHclTerraform(this._serviceAccount.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmServiceAccountList",
      },
      shielded_instance_config: {
        value: googleTpuV2VmShieldedInstanceConfigToHclTerraform(this._shieldedInstanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2VmShieldedInstanceConfigList",
      },
      timeouts: {
        value: googleTpuV2VmTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleTpuV2VmTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
