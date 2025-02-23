// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigtableAppProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#app_profile_id GoogleBigtableAppProfile#app_profile_id}
  */
  readonly appProfileId: string;
  /**
  * Long form description of the use case for this app profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#description GoogleBigtableAppProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#id GoogleBigtableAppProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, ignore safety checks when deleting/updating the app profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#ignore_warnings GoogleBigtableAppProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * The name of the instance to create the app profile within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#instance GoogleBigtableAppProfile#instance}
  */
  readonly instance?: string;
  /**
  * The set of clusters to route to. The order is ignored; clusters will be tried in order of distance. If left empty, all clusters are eligible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_cluster_ids GoogleBigtableAppProfile#multi_cluster_routing_cluster_ids}
  */
  readonly multiClusterRoutingClusterIds?: string[];
  /**
  * If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
  * in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
  * consistency to improve availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#multi_cluster_routing_use_any GoogleBigtableAppProfile#multi_cluster_routing_use_any}
  */
  readonly multiClusterRoutingUseAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#project GoogleBigtableAppProfile#project}
  */
  readonly project?: string;
  /**
  * Must be used with multi-cluster routing. If true, then this app profile will use row affinity sticky routing. With row affinity, Bigtable will route single row key requests based on the row key, rather than randomly. Instead, each row key will be assigned to a cluster by Cloud Bigtable, and will stick to that cluster. Choosing this option improves read-your-writes consistency for most requests under most circumstances, without sacrificing availability. Consistency is not guaranteed, as requests may still fail over between clusters in the event of errors or latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#row_affinity GoogleBigtableAppProfile#row_affinity}
  */
  readonly rowAffinity?: boolean | cdktf.IResolvable;
  /**
  * data_boost_isolation_read_only block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#data_boost_isolation_read_only GoogleBigtableAppProfile#data_boost_isolation_read_only}
  */
  readonly dataBoostIsolationReadOnly?: GoogleBigtableAppProfileDataBoostIsolationReadOnly;
  /**
  * single_cluster_routing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#single_cluster_routing GoogleBigtableAppProfile#single_cluster_routing}
  */
  readonly singleClusterRouting?: GoogleBigtableAppProfileSingleClusterRouting;
  /**
  * standard_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#standard_isolation GoogleBigtableAppProfile#standard_isolation}
  */
  readonly standardIsolation?: GoogleBigtableAppProfileStandardIsolation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#timeouts GoogleBigtableAppProfile#timeouts}
  */
  readonly timeouts?: GoogleBigtableAppProfileTimeouts;
}
export interface GoogleBigtableAppProfileDataBoostIsolationReadOnly {
  /**
  * The Compute Billing Owner for this Data Boost App Profile. Possible values: ["HOST_PAYS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#compute_billing_owner GoogleBigtableAppProfile#compute_billing_owner}
  */
  readonly computeBillingOwner: string;
}

export function googleBigtableAppProfileDataBoostIsolationReadOnlyToTerraform(struct?: GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference | GoogleBigtableAppProfileDataBoostIsolationReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_billing_owner: cdktf.stringToTerraform(struct!.computeBillingOwner),
  }
}


export function googleBigtableAppProfileDataBoostIsolationReadOnlyToHclTerraform(struct?: GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference | GoogleBigtableAppProfileDataBoostIsolationReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_billing_owner: {
      value: cdktf.stringToHclTerraform(struct!.computeBillingOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigtableAppProfileDataBoostIsolationReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeBillingOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeBillingOwner = this._computeBillingOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigtableAppProfileDataBoostIsolationReadOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeBillingOwner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeBillingOwner = value.computeBillingOwner;
    }
  }

  // compute_billing_owner - computed: false, optional: false, required: true
  private _computeBillingOwner?: string; 
  public get computeBillingOwner() {
    return this.getStringAttribute('compute_billing_owner');
  }
  public set computeBillingOwner(value: string) {
    this._computeBillingOwner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeBillingOwnerInput() {
    return this._computeBillingOwner;
  }
}
export interface GoogleBigtableAppProfileSingleClusterRouting {
  /**
  * If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
  * It is unsafe to send these requests to the same table/row/column in multiple clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#allow_transactional_writes GoogleBigtableAppProfile#allow_transactional_writes}
  */
  readonly allowTransactionalWrites?: boolean | cdktf.IResolvable;
  /**
  * The cluster to which read/write requests should be routed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#cluster_id GoogleBigtableAppProfile#cluster_id}
  */
  readonly clusterId: string;
}

export function googleBigtableAppProfileSingleClusterRoutingToTerraform(struct?: GoogleBigtableAppProfileSingleClusterRoutingOutputReference | GoogleBigtableAppProfileSingleClusterRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_transactional_writes: cdktf.booleanToTerraform(struct!.allowTransactionalWrites),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}


export function googleBigtableAppProfileSingleClusterRoutingToHclTerraform(struct?: GoogleBigtableAppProfileSingleClusterRoutingOutputReference | GoogleBigtableAppProfileSingleClusterRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_transactional_writes: {
      value: cdktf.booleanToHclTerraform(struct!.allowTransactionalWrites),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigtableAppProfileSingleClusterRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigtableAppProfileSingleClusterRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTransactionalWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTransactionalWrites = this._allowTransactionalWrites;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigtableAppProfileSingleClusterRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTransactionalWrites = undefined;
      this._clusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTransactionalWrites = value.allowTransactionalWrites;
      this._clusterId = value.clusterId;
    }
  }

  // allow_transactional_writes - computed: false, optional: true, required: false
  private _allowTransactionalWrites?: boolean | cdktf.IResolvable; 
  public get allowTransactionalWrites() {
    return this.getBooleanAttribute('allow_transactional_writes');
  }
  public set allowTransactionalWrites(value: boolean | cdktf.IResolvable) {
    this._allowTransactionalWrites = value;
  }
  public resetAllowTransactionalWrites() {
    this._allowTransactionalWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransactionalWritesInput() {
    return this._allowTransactionalWrites;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }
}
export interface GoogleBigtableAppProfileStandardIsolation {
  /**
  * The priority of requests sent using this app profile. Possible values: ["PRIORITY_LOW", "PRIORITY_MEDIUM", "PRIORITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#priority GoogleBigtableAppProfile#priority}
  */
  readonly priority: string;
}

export function googleBigtableAppProfileStandardIsolationToTerraform(struct?: GoogleBigtableAppProfileStandardIsolationOutputReference | GoogleBigtableAppProfileStandardIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function googleBigtableAppProfileStandardIsolationToHclTerraform(struct?: GoogleBigtableAppProfileStandardIsolationOutputReference | GoogleBigtableAppProfileStandardIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigtableAppProfileStandardIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigtableAppProfileStandardIsolation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigtableAppProfileStandardIsolation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._priority = value.priority;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface GoogleBigtableAppProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#create GoogleBigtableAppProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#delete GoogleBigtableAppProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#update GoogleBigtableAppProfile#update}
  */
  readonly update?: string;
}

export function googleBigtableAppProfileTimeoutsToTerraform(struct?: GoogleBigtableAppProfileTimeouts | cdktf.IResolvable): any {
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


export function googleBigtableAppProfileTimeoutsToHclTerraform(struct?: GoogleBigtableAppProfileTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigtableAppProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBigtableAppProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBigtableAppProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile google_bigtable_app_profile}
*/
export class GoogleBigtableAppProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigtable_app_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBigtableAppProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBigtableAppProfile to import
  * @param importFromId The id of the existing GoogleBigtableAppProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBigtableAppProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigtable_app_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_bigtable_app_profile google_bigtable_app_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigtableAppProfileConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigtableAppProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_app_profile',
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
    this._appProfileId = config.appProfileId;
    this._description = config.description;
    this._id = config.id;
    this._ignoreWarnings = config.ignoreWarnings;
    this._instance = config.instance;
    this._multiClusterRoutingClusterIds = config.multiClusterRoutingClusterIds;
    this._multiClusterRoutingUseAny = config.multiClusterRoutingUseAny;
    this._project = config.project;
    this._rowAffinity = config.rowAffinity;
    this._dataBoostIsolationReadOnly.internalValue = config.dataBoostIsolationReadOnly;
    this._singleClusterRouting.internalValue = config.singleClusterRouting;
    this._standardIsolation.internalValue = config.standardIsolation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId?: string; 
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // multi_cluster_routing_cluster_ids - computed: false, optional: true, required: false
  private _multiClusterRoutingClusterIds?: string[]; 
  public get multiClusterRoutingClusterIds() {
    return this.getListAttribute('multi_cluster_routing_cluster_ids');
  }
  public set multiClusterRoutingClusterIds(value: string[]) {
    this._multiClusterRoutingClusterIds = value;
  }
  public resetMultiClusterRoutingClusterIds() {
    this._multiClusterRoutingClusterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterRoutingClusterIdsInput() {
    return this._multiClusterRoutingClusterIds;
  }

  // multi_cluster_routing_use_any - computed: false, optional: true, required: false
  private _multiClusterRoutingUseAny?: boolean | cdktf.IResolvable; 
  public get multiClusterRoutingUseAny() {
    return this.getBooleanAttribute('multi_cluster_routing_use_any');
  }
  public set multiClusterRoutingUseAny(value: boolean | cdktf.IResolvable) {
    this._multiClusterRoutingUseAny = value;
  }
  public resetMultiClusterRoutingUseAny() {
    this._multiClusterRoutingUseAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterRoutingUseAnyInput() {
    return this._multiClusterRoutingUseAny;
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

  // row_affinity - computed: false, optional: true, required: false
  private _rowAffinity?: boolean | cdktf.IResolvable; 
  public get rowAffinity() {
    return this.getBooleanAttribute('row_affinity');
  }
  public set rowAffinity(value: boolean | cdktf.IResolvable) {
    this._rowAffinity = value;
  }
  public resetRowAffinity() {
    this._rowAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowAffinityInput() {
    return this._rowAffinity;
  }

  // data_boost_isolation_read_only - computed: false, optional: true, required: false
  private _dataBoostIsolationReadOnly = new GoogleBigtableAppProfileDataBoostIsolationReadOnlyOutputReference(this, "data_boost_isolation_read_only");
  public get dataBoostIsolationReadOnly() {
    return this._dataBoostIsolationReadOnly;
  }
  public putDataBoostIsolationReadOnly(value: GoogleBigtableAppProfileDataBoostIsolationReadOnly) {
    this._dataBoostIsolationReadOnly.internalValue = value;
  }
  public resetDataBoostIsolationReadOnly() {
    this._dataBoostIsolationReadOnly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBoostIsolationReadOnlyInput() {
    return this._dataBoostIsolationReadOnly.internalValue;
  }

  // single_cluster_routing - computed: false, optional: true, required: false
  private _singleClusterRouting = new GoogleBigtableAppProfileSingleClusterRoutingOutputReference(this, "single_cluster_routing");
  public get singleClusterRouting() {
    return this._singleClusterRouting;
  }
  public putSingleClusterRouting(value: GoogleBigtableAppProfileSingleClusterRouting) {
    this._singleClusterRouting.internalValue = value;
  }
  public resetSingleClusterRouting() {
    this._singleClusterRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleClusterRoutingInput() {
    return this._singleClusterRouting.internalValue;
  }

  // standard_isolation - computed: false, optional: true, required: false
  private _standardIsolation = new GoogleBigtableAppProfileStandardIsolationOutputReference(this, "standard_isolation");
  public get standardIsolation() {
    return this._standardIsolation;
  }
  public putStandardIsolation(value: GoogleBigtableAppProfileStandardIsolation) {
    this._standardIsolation.internalValue = value;
  }
  public resetStandardIsolation() {
    this._standardIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardIsolationInput() {
    return this._standardIsolation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigtableAppProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigtableAppProfileTimeouts) {
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
      app_profile_id: cdktf.stringToTerraform(this._appProfileId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      instance: cdktf.stringToTerraform(this._instance),
      multi_cluster_routing_cluster_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._multiClusterRoutingClusterIds),
      multi_cluster_routing_use_any: cdktf.booleanToTerraform(this._multiClusterRoutingUseAny),
      project: cdktf.stringToTerraform(this._project),
      row_affinity: cdktf.booleanToTerraform(this._rowAffinity),
      data_boost_isolation_read_only: googleBigtableAppProfileDataBoostIsolationReadOnlyToTerraform(this._dataBoostIsolationReadOnly.internalValue),
      single_cluster_routing: googleBigtableAppProfileSingleClusterRoutingToTerraform(this._singleClusterRouting.internalValue),
      standard_isolation: googleBigtableAppProfileStandardIsolationToTerraform(this._standardIsolation.internalValue),
      timeouts: googleBigtableAppProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_profile_id: {
        value: cdktf.stringToHclTerraform(this._appProfileId),
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
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_cluster_routing_cluster_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._multiClusterRoutingClusterIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      multi_cluster_routing_use_any: {
        value: cdktf.booleanToHclTerraform(this._multiClusterRoutingUseAny),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      row_affinity: {
        value: cdktf.booleanToHclTerraform(this._rowAffinity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_boost_isolation_read_only: {
        value: googleBigtableAppProfileDataBoostIsolationReadOnlyToHclTerraform(this._dataBoostIsolationReadOnly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigtableAppProfileDataBoostIsolationReadOnlyList",
      },
      single_cluster_routing: {
        value: googleBigtableAppProfileSingleClusterRoutingToHclTerraform(this._singleClusterRouting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigtableAppProfileSingleClusterRoutingList",
      },
      standard_isolation: {
        value: googleBigtableAppProfileStandardIsolationToHclTerraform(this._standardIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigtableAppProfileStandardIsolationList",
      },
      timeouts: {
        value: googleBigtableAppProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleBigtableAppProfileTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
