// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleWorkstationsWorkstationClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Client-specified annotations. This is distinct from labels.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#annotations GoogleWorkstationsWorkstationCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Human-readable name for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#display_name GoogleWorkstationsWorkstationCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#id GoogleWorkstationsWorkstationCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#labels GoogleWorkstationsWorkstationCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the workstation cluster should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#location GoogleWorkstationsWorkstationCluster#location}
  */
  readonly location?: string;
  /**
  * The relative resource name of the VPC network on which the instance can be accessed.
  * It is specified in the following form: "projects/{projectNumber}/global/networks/{network_id}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#network GoogleWorkstationsWorkstationCluster#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#project GoogleWorkstationsWorkstationCluster#project}
  */
  readonly project?: string;
  /**
  * Name of the Compute Engine subnetwork in which instances associated with this cluster will be created.
  * Must be part of the subnetwork specified for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#subnetwork GoogleWorkstationsWorkstationCluster#subnetwork}
  */
  readonly subnetwork: string;
  /**
  * ID to use for the workstation cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#workstation_cluster_id GoogleWorkstationsWorkstationCluster#workstation_cluster_id}
  */
  readonly workstationClusterId: string;
  /**
  * domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#domain_config GoogleWorkstationsWorkstationCluster#domain_config}
  */
  readonly domainConfig?: GoogleWorkstationsWorkstationClusterDomainConfig;
  /**
  * private_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#private_cluster_config GoogleWorkstationsWorkstationCluster#private_cluster_config}
  */
  readonly privateClusterConfig?: GoogleWorkstationsWorkstationClusterPrivateClusterConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#timeouts GoogleWorkstationsWorkstationCluster#timeouts}
  */
  readonly timeouts?: GoogleWorkstationsWorkstationClusterTimeouts;
}
export interface GoogleWorkstationsWorkstationClusterConditions {
}

export function googleWorkstationsWorkstationClusterConditionsToTerraform(struct?: GoogleWorkstationsWorkstationClusterConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleWorkstationsWorkstationClusterConditionsToHclTerraform(struct?: GoogleWorkstationsWorkstationClusterConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleWorkstationsWorkstationClusterConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleWorkstationsWorkstationClusterConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationClusterConditions | undefined) {
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

export class GoogleWorkstationsWorkstationClusterConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleWorkstationsWorkstationClusterConditionsOutputReference {
    return new GoogleWorkstationsWorkstationClusterConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleWorkstationsWorkstationClusterDomainConfig {
  /**
  * Domain used by Workstations for HTTP ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#domain GoogleWorkstationsWorkstationCluster#domain}
  */
  readonly domain: string;
}

export function googleWorkstationsWorkstationClusterDomainConfigToTerraform(struct?: GoogleWorkstationsWorkstationClusterDomainConfigOutputReference | GoogleWorkstationsWorkstationClusterDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function googleWorkstationsWorkstationClusterDomainConfigToHclTerraform(struct?: GoogleWorkstationsWorkstationClusterDomainConfigOutputReference | GoogleWorkstationsWorkstationClusterDomainConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationClusterDomainConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationClusterDomainConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationClusterDomainConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface GoogleWorkstationsWorkstationClusterPrivateClusterConfig {
  /**
  * Additional project IDs that are allowed to attach to the workstation cluster's service attachment.
  * By default, the workstation cluster's project and the VPC host project (if different) are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#allowed_projects GoogleWorkstationsWorkstationCluster#allowed_projects}
  */
  readonly allowedProjects?: string[];
  /**
  * Whether Workstations endpoint is private.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#enable_private_endpoint GoogleWorkstationsWorkstationCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint: boolean | cdktf.IResolvable;
}

export function googleWorkstationsWorkstationClusterPrivateClusterConfigToTerraform(struct?: GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference | GoogleWorkstationsWorkstationClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProjects),
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
  }
}


export function googleWorkstationsWorkstationClusterPrivateClusterConfigToHclTerraform(struct?: GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference | GoogleWorkstationsWorkstationClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_private_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleWorkstationsWorkstationClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProjects = this._allowedProjects;
    }
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleWorkstationsWorkstationClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedProjects = undefined;
      this._enablePrivateEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedProjects = value.allowedProjects;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
    }
  }

  // allowed_projects - computed: true, optional: true, required: false
  private _allowedProjects?: string[]; 
  public get allowedProjects() {
    return this.getListAttribute('allowed_projects');
  }
  public set allowedProjects(value: string[]) {
    this._allowedProjects = value;
  }
  public resetAllowedProjects() {
    this._allowedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProjectsInput() {
    return this._allowedProjects;
  }

  // cluster_hostname - computed: true, optional: false, required: false
  public get clusterHostname() {
    return this.getStringAttribute('cluster_hostname');
  }

  // enable_private_endpoint - computed: false, optional: false, required: true
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // service_attachment_uri - computed: true, optional: false, required: false
  public get serviceAttachmentUri() {
    return this.getStringAttribute('service_attachment_uri');
  }
}
export interface GoogleWorkstationsWorkstationClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#create GoogleWorkstationsWorkstationCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#delete GoogleWorkstationsWorkstationCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#update GoogleWorkstationsWorkstationCluster#update}
  */
  readonly update?: string;
}

export function googleWorkstationsWorkstationClusterTimeoutsToTerraform(struct?: GoogleWorkstationsWorkstationClusterTimeouts | cdktf.IResolvable): any {
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


export function googleWorkstationsWorkstationClusterTimeoutsToHclTerraform(struct?: GoogleWorkstationsWorkstationClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleWorkstationsWorkstationClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleWorkstationsWorkstationClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleWorkstationsWorkstationClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster google_workstations_workstation_cluster}
*/
export class GoogleWorkstationsWorkstationCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_workstations_workstation_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleWorkstationsWorkstationCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleWorkstationsWorkstationCluster to import
  * @param importFromId The id of the existing GoogleWorkstationsWorkstationCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleWorkstationsWorkstationCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_workstations_workstation_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_workstations_workstation_cluster google_workstations_workstation_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleWorkstationsWorkstationClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleWorkstationsWorkstationClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_workstations_workstation_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._project = config.project;
    this._subnetwork = config.subnetwork;
    this._workstationClusterId = config.workstationClusterId;
    this._domainConfig.internalValue = config.domainConfig;
    this._privateClusterConfig.internalValue = config.privateClusterConfig;
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
  private _conditions = new GoogleWorkstationsWorkstationClusterConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // control_plane_ip - computed: true, optional: false, required: false
  public get controlPlaneIp() {
    return this.getStringAttribute('control_plane_ip');
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // subnetwork - computed: false, optional: false, required: true
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
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

  // domain_config - computed: false, optional: true, required: false
  private _domainConfig = new GoogleWorkstationsWorkstationClusterDomainConfigOutputReference(this, "domain_config");
  public get domainConfig() {
    return this._domainConfig;
  }
  public putDomainConfig(value: GoogleWorkstationsWorkstationClusterDomainConfig) {
    this._domainConfig.internalValue = value;
  }
  public resetDomainConfig() {
    this._domainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainConfigInput() {
    return this._domainConfig.internalValue;
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig = new GoogleWorkstationsWorkstationClusterPrivateClusterConfigOutputReference(this, "private_cluster_config");
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }
  public putPrivateClusterConfig(value: GoogleWorkstationsWorkstationClusterPrivateClusterConfig) {
    this._privateClusterConfig.internalValue = value;
  }
  public resetPrivateClusterConfig() {
    this._privateClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterConfigInput() {
    return this._privateClusterConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleWorkstationsWorkstationClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleWorkstationsWorkstationClusterTimeouts) {
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
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      workstation_cluster_id: cdktf.stringToTerraform(this._workstationClusterId),
      domain_config: googleWorkstationsWorkstationClusterDomainConfigToTerraform(this._domainConfig.internalValue),
      private_cluster_config: googleWorkstationsWorkstationClusterPrivateClusterConfigToTerraform(this._privateClusterConfig.internalValue),
      timeouts: googleWorkstationsWorkstationClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
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
      domain_config: {
        value: googleWorkstationsWorkstationClusterDomainConfigToHclTerraform(this._domainConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationClusterDomainConfigList",
      },
      private_cluster_config: {
        value: googleWorkstationsWorkstationClusterPrivateClusterConfigToHclTerraform(this._privateClusterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleWorkstationsWorkstationClusterPrivateClusterConfigList",
      },
      timeouts: {
        value: googleWorkstationsWorkstationClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleWorkstationsWorkstationClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
