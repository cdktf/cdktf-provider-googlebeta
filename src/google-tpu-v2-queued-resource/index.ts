// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleTpuV2QueuedResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#id GoogleTpuV2QueuedResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The immutable name of the Queued Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#name GoogleTpuV2QueuedResource#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#project GoogleTpuV2QueuedResource#project}
  */
  readonly project?: string;
  /**
  * The GCP location for the Queued Resource. If it is not provided, the provider zone is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#zone GoogleTpuV2QueuedResource#zone}
  */
  readonly zone?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#timeouts GoogleTpuV2QueuedResource#timeouts}
  */
  readonly timeouts?: GoogleTpuV2QueuedResourceTimeouts;
  /**
  * tpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#tpu GoogleTpuV2QueuedResource#tpu}
  */
  readonly tpu?: GoogleTpuV2QueuedResourceTpu;
}
export interface GoogleTpuV2QueuedResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#create GoogleTpuV2QueuedResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#delete GoogleTpuV2QueuedResource#delete}
  */
  readonly delete?: string;
}

export function googleTpuV2QueuedResourceTimeoutsToTerraform(struct?: GoogleTpuV2QueuedResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleTpuV2QueuedResourceTimeoutsToHclTerraform(struct?: GoogleTpuV2QueuedResourceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2QueuedResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleTpuV2QueuedResourceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2QueuedResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface GoogleTpuV2QueuedResourceTpuNodeSpecNode {
  /**
  * TPU accelerator type for the TPU. If not specified, this defaults to 'v2-8'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#accelerator_type GoogleTpuV2QueuedResource#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * Text description of the TPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#description GoogleTpuV2QueuedResource#description}
  */
  readonly description?: string;
  /**
  * Runtime version for the TPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#runtime_version GoogleTpuV2QueuedResource#runtime_version}
  */
  readonly runtimeVersion: string;
}

export function googleTpuV2QueuedResourceTpuNodeSpecNodeToTerraform(struct?: GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference | GoogleTpuV2QueuedResourceTpuNodeSpecNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    description: cdktf.stringToTerraform(struct!.description),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function googleTpuV2QueuedResourceTpuNodeSpecNodeToHclTerraform(struct?: GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference | GoogleTpuV2QueuedResourceTpuNodeSpecNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2QueuedResourceTpuNodeSpecNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2QueuedResourceTpuNodeSpecNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorType = undefined;
      this._description = undefined;
      this._runtimeVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorType = value.acceleratorType;
      this._description = value.description;
      this._runtimeVersion = value.runtimeVersion;
    }
  }

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
}
export interface GoogleTpuV2QueuedResourceTpuNodeSpec {
  /**
  * Unqualified node identifier used to identify the node in the project once provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#node_id GoogleTpuV2QueuedResource#node_id}
  */
  readonly nodeId?: string;
  /**
  * The parent resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#parent GoogleTpuV2QueuedResource#parent}
  */
  readonly parent: string;
  /**
  * node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#node GoogleTpuV2QueuedResource#node}
  */
  readonly nodeAttribute: GoogleTpuV2QueuedResourceTpuNodeSpecNode;
}

export function googleTpuV2QueuedResourceTpuNodeSpecToTerraform(struct?: GoogleTpuV2QueuedResourceTpuNodeSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_id: cdktf.stringToTerraform(struct!.nodeId),
    parent: cdktf.stringToTerraform(struct!.parent),
    node: googleTpuV2QueuedResourceTpuNodeSpecNodeToTerraform(struct!.nodeAttribute),
  }
}


export function googleTpuV2QueuedResourceTpuNodeSpecToHclTerraform(struct?: GoogleTpuV2QueuedResourceTpuNodeSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node: {
      value: googleTpuV2QueuedResourceTpuNodeSpecNodeToHclTerraform(struct!.nodeAttribute),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleTpuV2QueuedResourceTpuNodeSpecNodeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleTpuV2QueuedResourceTpuNodeSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeId = this._nodeId;
    }
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._node?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2QueuedResourceTpuNodeSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeId = undefined;
      this._parent = undefined;
      this._node.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeId = value.nodeId;
      this._parent = value.parent;
      this._node.internalValue = value.nodeAttribute;
    }
  }

  // node_id - computed: false, optional: true, required: false
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // node - computed: false, optional: false, required: true
  private _node = new GoogleTpuV2QueuedResourceTpuNodeSpecNodeOutputReference(this, "node");
  public get nodeAttribute() {
    return this._node;
  }
  public putNodeAttribute(value: GoogleTpuV2QueuedResourceTpuNodeSpecNode) {
    this._node.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node.internalValue;
  }
}

export class GoogleTpuV2QueuedResourceTpuNodeSpecList extends cdktf.ComplexList {
  public internalValue? : GoogleTpuV2QueuedResourceTpuNodeSpec[] | cdktf.IResolvable

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
  public get(index: number): GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference {
    return new GoogleTpuV2QueuedResourceTpuNodeSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleTpuV2QueuedResourceTpu {
  /**
  * node_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#node_spec GoogleTpuV2QueuedResource#node_spec}
  */
  readonly nodeSpec?: GoogleTpuV2QueuedResourceTpuNodeSpec[] | cdktf.IResolvable;
}

export function googleTpuV2QueuedResourceTpuToTerraform(struct?: GoogleTpuV2QueuedResourceTpuOutputReference | GoogleTpuV2QueuedResourceTpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_spec: cdktf.listMapper(googleTpuV2QueuedResourceTpuNodeSpecToTerraform, true)(struct!.nodeSpec),
  }
}


export function googleTpuV2QueuedResourceTpuToHclTerraform(struct?: GoogleTpuV2QueuedResourceTpuOutputReference | GoogleTpuV2QueuedResourceTpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_spec: {
      value: cdktf.listMapperHcl(googleTpuV2QueuedResourceTpuNodeSpecToHclTerraform, true)(struct!.nodeSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleTpuV2QueuedResourceTpuNodeSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleTpuV2QueuedResourceTpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleTpuV2QueuedResourceTpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpec = this._nodeSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleTpuV2QueuedResourceTpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSpec.internalValue = value.nodeSpec;
    }
  }

  // node_spec - computed: false, optional: true, required: false
  private _nodeSpec = new GoogleTpuV2QueuedResourceTpuNodeSpecList(this, "node_spec", false);
  public get nodeSpec() {
    return this._nodeSpec;
  }
  public putNodeSpec(value: GoogleTpuV2QueuedResourceTpuNodeSpec[] | cdktf.IResolvable) {
    this._nodeSpec.internalValue = value;
  }
  public resetNodeSpec() {
    this._nodeSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecInput() {
    return this._nodeSpec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource google_tpu_v2_queued_resource}
*/
export class GoogleTpuV2QueuedResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_tpu_v2_queued_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleTpuV2QueuedResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleTpuV2QueuedResource to import
  * @param importFromId The id of the existing GoogleTpuV2QueuedResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleTpuV2QueuedResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_tpu_v2_queued_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_tpu_v2_queued_resource google_tpu_v2_queued_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleTpuV2QueuedResourceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleTpuV2QueuedResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tpu_v2_queued_resource',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.17.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts.internalValue = config.timeouts;
    this._tpu.internalValue = config.tpu;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleTpuV2QueuedResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleTpuV2QueuedResourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tpu - computed: false, optional: true, required: false
  private _tpu = new GoogleTpuV2QueuedResourceTpuOutputReference(this, "tpu");
  public get tpu() {
    return this._tpu;
  }
  public putTpu(value: GoogleTpuV2QueuedResourceTpu) {
    this._tpu.internalValue = value;
  }
  public resetTpu() {
    this._tpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuInput() {
    return this._tpu.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      zone: cdktf.stringToTerraform(this._zone),
      timeouts: googleTpuV2QueuedResourceTimeoutsToTerraform(this._timeouts.internalValue),
      tpu: googleTpuV2QueuedResourceTpuToTerraform(this._tpu.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: googleTpuV2QueuedResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleTpuV2QueuedResourceTimeouts",
      },
      tpu: {
        value: googleTpuV2QueuedResourceTpuToHclTerraform(this._tpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleTpuV2QueuedResourceTpuList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
