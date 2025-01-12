// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSecureSourceManagerInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#id GoogleSecureSourceManagerInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#instance_id GoogleSecureSourceManagerInstance#instance_id}
  */
  readonly instanceId: string;
  /**
  * Customer-managed encryption key name, in the format projects/* /locations/* /keyRings/* /cryptoKeys/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#kms_key GoogleSecureSourceManagerInstance#kms_key}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKey?: string;
  /**
  * Labels as key value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#labels GoogleSecureSourceManagerInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the Instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#location GoogleSecureSourceManagerInstance#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#project GoogleSecureSourceManagerInstance#project}
  */
  readonly project?: string;
  /**
  * private_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#private_config GoogleSecureSourceManagerInstance#private_config}
  */
  readonly privateConfig?: GoogleSecureSourceManagerInstancePrivateConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#timeouts GoogleSecureSourceManagerInstance#timeouts}
  */
  readonly timeouts?: GoogleSecureSourceManagerInstanceTimeouts;
  /**
  * workforce_identity_federation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#workforce_identity_federation_config GoogleSecureSourceManagerInstance#workforce_identity_federation_config}
  */
  readonly workforceIdentityFederationConfig?: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig;
}
export interface GoogleSecureSourceManagerInstanceHostConfig {
}

export function googleSecureSourceManagerInstanceHostConfigToTerraform(struct?: GoogleSecureSourceManagerInstanceHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleSecureSourceManagerInstanceHostConfigToHclTerraform(struct?: GoogleSecureSourceManagerInstanceHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleSecureSourceManagerInstanceHostConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleSecureSourceManagerInstanceHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecureSourceManagerInstanceHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getStringAttribute('api');
  }

  // git_http - computed: true, optional: false, required: false
  public get gitHttp() {
    return this.getStringAttribute('git_http');
  }

  // git_ssh - computed: true, optional: false, required: false
  public get gitSsh() {
    return this.getStringAttribute('git_ssh');
  }

  // html - computed: true, optional: false, required: false
  public get html() {
    return this.getStringAttribute('html');
  }
}

export class GoogleSecureSourceManagerInstanceHostConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleSecureSourceManagerInstanceHostConfigOutputReference {
    return new GoogleSecureSourceManagerInstanceHostConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleSecureSourceManagerInstancePrivateConfig {
  /**
  * CA pool resource, resource must in the format of 'projects/{project}/locations/{location}/caPools/{ca_pool}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#ca_pool GoogleSecureSourceManagerInstance#ca_pool}
  */
  readonly caPool: string;
  /**
  * 'Indicate if it's private instance.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#is_private GoogleSecureSourceManagerInstance#is_private}
  */
  readonly isPrivate: boolean | cdktf.IResolvable;
}

export function googleSecureSourceManagerInstancePrivateConfigToTerraform(struct?: GoogleSecureSourceManagerInstancePrivateConfigOutputReference | GoogleSecureSourceManagerInstancePrivateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_pool: cdktf.stringToTerraform(struct!.caPool),
    is_private: cdktf.booleanToTerraform(struct!.isPrivate),
  }
}


export function googleSecureSourceManagerInstancePrivateConfigToHclTerraform(struct?: GoogleSecureSourceManagerInstancePrivateConfigOutputReference | GoogleSecureSourceManagerInstancePrivateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_pool: {
      value: cdktf.stringToHclTerraform(struct!.caPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_private: {
      value: cdktf.booleanToHclTerraform(struct!.isPrivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecureSourceManagerInstancePrivateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecureSourceManagerInstancePrivateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.caPool = this._caPool;
    }
    if (this._isPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrivate = this._isPrivate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecureSourceManagerInstancePrivateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caPool = undefined;
      this._isPrivate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caPool = value.caPool;
      this._isPrivate = value.isPrivate;
    }
  }

  // ca_pool - computed: false, optional: false, required: true
  private _caPool?: string; 
  public get caPool() {
    return this.getStringAttribute('ca_pool');
  }
  public set caPool(value: string) {
    this._caPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caPoolInput() {
    return this._caPool;
  }

  // http_service_attachment - computed: true, optional: false, required: false
  public get httpServiceAttachment() {
    return this.getStringAttribute('http_service_attachment');
  }

  // is_private - computed: false, optional: false, required: true
  private _isPrivate?: boolean | cdktf.IResolvable; 
  public get isPrivate() {
    return this.getBooleanAttribute('is_private');
  }
  public set isPrivate(value: boolean | cdktf.IResolvable) {
    this._isPrivate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrivateInput() {
    return this._isPrivate;
  }

  // ssh_service_attachment - computed: true, optional: false, required: false
  public get sshServiceAttachment() {
    return this.getStringAttribute('ssh_service_attachment');
  }
}
export interface GoogleSecureSourceManagerInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#create GoogleSecureSourceManagerInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#delete GoogleSecureSourceManagerInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#update GoogleSecureSourceManagerInstance#update}
  */
  readonly update?: string;
}

export function googleSecureSourceManagerInstanceTimeoutsToTerraform(struct?: GoogleSecureSourceManagerInstanceTimeouts | cdktf.IResolvable): any {
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


export function googleSecureSourceManagerInstanceTimeoutsToHclTerraform(struct?: GoogleSecureSourceManagerInstanceTimeouts | cdktf.IResolvable): any {
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

export class GoogleSecureSourceManagerInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSecureSourceManagerInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleSecureSourceManagerInstanceTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig {
  /**
  * 'Whether Workforce Identity Federation is enabled.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#enabled GoogleSecureSourceManagerInstance#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleSecureSourceManagerInstanceWorkforceIdentityFederationConfigToTerraform(struct?: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference | GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleSecureSourceManagerInstanceWorkforceIdentityFederationConfigToHclTerraform(struct?: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference | GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance google_secure_source_manager_instance}
*/
export class GoogleSecureSourceManagerInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secure_source_manager_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSecureSourceManagerInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSecureSourceManagerInstance to import
  * @param importFromId The id of the existing GoogleSecureSourceManagerInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSecureSourceManagerInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_secure_source_manager_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_secure_source_manager_instance google_secure_source_manager_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSecureSourceManagerInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSecureSourceManagerInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secure_source_manager_instance',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.15.0',
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
    this._instanceId = config.instanceId;
    this._kmsKey = config.kmsKey;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._privateConfig.internalValue = config.privateConfig;
    this._timeouts.internalValue = config.timeouts;
    this._workforceIdentityFederationConfig.internalValue = config.workforceIdentityFederationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // host_config - computed: true, optional: false, required: false
  private _hostConfig = new GoogleSecureSourceManagerInstanceHostConfigList(this, "host_config", false);
  public get hostConfig() {
    return this._hostConfig;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_note - computed: true, optional: false, required: false
  public get stateNote() {
    return this.getStringAttribute('state_note');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // private_config - computed: false, optional: true, required: false
  private _privateConfig = new GoogleSecureSourceManagerInstancePrivateConfigOutputReference(this, "private_config");
  public get privateConfig() {
    return this._privateConfig;
  }
  public putPrivateConfig(value: GoogleSecureSourceManagerInstancePrivateConfig) {
    this._privateConfig.internalValue = value;
  }
  public resetPrivateConfig() {
    this._privateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConfigInput() {
    return this._privateConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSecureSourceManagerInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSecureSourceManagerInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workforce_identity_federation_config - computed: false, optional: true, required: false
  private _workforceIdentityFederationConfig = new GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigOutputReference(this, "workforce_identity_federation_config");
  public get workforceIdentityFederationConfig() {
    return this._workforceIdentityFederationConfig;
  }
  public putWorkforceIdentityFederationConfig(value: GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfig) {
    this._workforceIdentityFederationConfig.internalValue = value;
  }
  public resetWorkforceIdentityFederationConfig() {
    this._workforceIdentityFederationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workforceIdentityFederationConfigInput() {
    return this._workforceIdentityFederationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      kms_key: cdktf.stringToTerraform(this._kmsKey),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      private_config: googleSecureSourceManagerInstancePrivateConfigToTerraform(this._privateConfig.internalValue),
      timeouts: googleSecureSourceManagerInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      workforce_identity_federation_config: googleSecureSourceManagerInstanceWorkforceIdentityFederationConfigToTerraform(this._workforceIdentityFederationConfig.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key: {
        value: cdktf.stringToHclTerraform(this._kmsKey),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_config: {
        value: googleSecureSourceManagerInstancePrivateConfigToHclTerraform(this._privateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSecureSourceManagerInstancePrivateConfigList",
      },
      timeouts: {
        value: googleSecureSourceManagerInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSecureSourceManagerInstanceTimeouts",
      },
      workforce_identity_federation_config: {
        value: googleSecureSourceManagerInstanceWorkforceIdentityFederationConfigToHclTerraform(this._workforceIdentityFederationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSecureSourceManagerInstanceWorkforceIdentityFederationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
