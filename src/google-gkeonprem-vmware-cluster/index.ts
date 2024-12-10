// https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeonpremVmwareClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The admin cluster this VMware User Cluster belongs to.
  * This is the full resource name of the admin cluster's hub membership.
  * In the future, references to other resource types might be allowed if
  * admin clusters are modeled as their own resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#admin_cluster_membership GoogleGkeonpremVmwareCluster#admin_cluster_membership}
  */
  readonly adminClusterMembership: string;
  /**
  * Annotations on the VMware User Cluster.
  * This field has the same restrictions as Kubernetes annotations.
  * The total size of all keys and values combined is limited to 256k.
  * Key can have 2 segments: prefix (optional) and name (required),
  * separated by a slash (/).
  * Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#annotations GoogleGkeonpremVmwareCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A human readable description of this VMware User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#description GoogleGkeonpremVmwareCluster#description}
  */
  readonly description?: string;
  /**
  * Disable bundled ingress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#disable_bundled_ingress GoogleGkeonpremVmwareCluster#disable_bundled_ingress}
  */
  readonly disableBundledIngress?: boolean | cdktf.IResolvable;
  /**
  * Enable control plane V2. Default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#enable_control_plane_v2 GoogleGkeonpremVmwareCluster#enable_control_plane_v2}
  */
  readonly enableControlPlaneV2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#id GoogleGkeonpremVmwareCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#location GoogleGkeonpremVmwareCluster#location}
  */
  readonly location: string;
  /**
  * The VMware cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#name GoogleGkeonpremVmwareCluster#name}
  */
  readonly name: string;
  /**
  * The Anthos clusters on the VMware version for your user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#on_prem_version GoogleGkeonpremVmwareCluster#on_prem_version}
  */
  readonly onPremVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#project GoogleGkeonpremVmwareCluster#project}
  */
  readonly project?: string;
  /**
  * Enable VM tracking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#vm_tracking_enabled GoogleGkeonpremVmwareCluster#vm_tracking_enabled}
  */
  readonly vmTrackingEnabled?: boolean | cdktf.IResolvable;
  /**
  * anti_affinity_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#anti_affinity_groups GoogleGkeonpremVmwareCluster#anti_affinity_groups}
  */
  readonly antiAffinityGroups?: GoogleGkeonpremVmwareClusterAntiAffinityGroups;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#authorization GoogleGkeonpremVmwareCluster#authorization}
  */
  readonly authorization?: GoogleGkeonpremVmwareClusterAuthorization;
  /**
  * auto_repair_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#auto_repair_config GoogleGkeonpremVmwareCluster#auto_repair_config}
  */
  readonly autoRepairConfig?: GoogleGkeonpremVmwareClusterAutoRepairConfig;
  /**
  * control_plane_node block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node GoogleGkeonpremVmwareCluster#control_plane_node}
  */
  readonly controlPlaneNode: GoogleGkeonpremVmwareClusterControlPlaneNode;
  /**
  * dataplane_v2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2 GoogleGkeonpremVmwareCluster#dataplane_v2}
  */
  readonly dataplaneV2?: GoogleGkeonpremVmwareClusterDataplaneV2;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#load_balancer GoogleGkeonpremVmwareCluster#load_balancer}
  */
  readonly loadBalancer?: GoogleGkeonpremVmwareClusterLoadBalancer;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#network_config GoogleGkeonpremVmwareCluster#network_config}
  */
  readonly networkConfig?: GoogleGkeonpremVmwareClusterNetworkConfig;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#storage GoogleGkeonpremVmwareCluster#storage}
  */
  readonly storage?: GoogleGkeonpremVmwareClusterStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#timeouts GoogleGkeonpremVmwareCluster#timeouts}
  */
  readonly timeouts?: GoogleGkeonpremVmwareClusterTimeouts;
  /**
  * upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#upgrade_policy GoogleGkeonpremVmwareCluster#upgrade_policy}
  */
  readonly upgradePolicy?: GoogleGkeonpremVmwareClusterUpgradePolicy;
  /**
  * vcenter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#vcenter GoogleGkeonpremVmwareCluster#vcenter}
  */
  readonly vcenter?: GoogleGkeonpremVmwareClusterVcenter;
}
export interface GoogleGkeonpremVmwareClusterFleet {
}

export function googleGkeonpremVmwareClusterFleetToTerraform(struct?: GoogleGkeonpremVmwareClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterFleetToHclTerraform(struct?: GoogleGkeonpremVmwareClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterFleetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }
}

export class GoogleGkeonpremVmwareClusterFleetList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterFleetOutputReference {
    return new GoogleGkeonpremVmwareClusterFleetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterStatusConditions {
}

export function googleGkeonpremVmwareClusterStatusConditionsToTerraform(struct?: GoogleGkeonpremVmwareClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterStatusConditionsToHclTerraform(struct?: GoogleGkeonpremVmwareClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleGkeonpremVmwareClusterStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterStatusConditionsOutputReference {
    return new GoogleGkeonpremVmwareClusterStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterStatus {
}

export function googleGkeonpremVmwareClusterStatusToTerraform(struct?: GoogleGkeonpremVmwareClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterStatusToHclTerraform(struct?: GoogleGkeonpremVmwareClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleGkeonpremVmwareClusterStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GoogleGkeonpremVmwareClusterStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterStatusOutputReference {
    return new GoogleGkeonpremVmwareClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterValidationCheckStatusResult {
}

export function googleGkeonpremVmwareClusterValidationCheckStatusResultToTerraform(struct?: GoogleGkeonpremVmwareClusterValidationCheckStatusResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterValidationCheckStatusResultToHclTerraform(struct?: GoogleGkeonpremVmwareClusterValidationCheckStatusResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterValidationCheckStatusResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterValidationCheckStatusResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class GoogleGkeonpremVmwareClusterValidationCheckStatusResultList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference {
    return new GoogleGkeonpremVmwareClusterValidationCheckStatusResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterValidationCheckStatus {
}

export function googleGkeonpremVmwareClusterValidationCheckStatusToTerraform(struct?: GoogleGkeonpremVmwareClusterValidationCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterValidationCheckStatusToHclTerraform(struct?: GoogleGkeonpremVmwareClusterValidationCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterValidationCheckStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterValidationCheckStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // result - computed: true, optional: false, required: false
  private _result = new GoogleGkeonpremVmwareClusterValidationCheckStatusResultList(this, "result", false);
  public get result() {
    return this._result;
  }
}

export class GoogleGkeonpremVmwareClusterValidationCheckStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference {
    return new GoogleGkeonpremVmwareClusterValidationCheckStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterValidationCheck {
}

export function googleGkeonpremVmwareClusterValidationCheckToTerraform(struct?: GoogleGkeonpremVmwareClusterValidationCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterValidationCheckToHclTerraform(struct?: GoogleGkeonpremVmwareClusterValidationCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterValidationCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterValidationCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterValidationCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // scenario - computed: true, optional: false, required: false
  public get scenario() {
    return this.getStringAttribute('scenario');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleGkeonpremVmwareClusterValidationCheckStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class GoogleGkeonpremVmwareClusterValidationCheckList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterValidationCheckOutputReference {
    return new GoogleGkeonpremVmwareClusterValidationCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterAntiAffinityGroups {
  /**
  * Spread nodes across at least three physical hosts (requires at least three
  * hosts).
  * Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#aag_config_disabled GoogleGkeonpremVmwareCluster#aag_config_disabled}
  */
  readonly aagConfigDisabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterAntiAffinityGroupsToTerraform(struct?: GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference | GoogleGkeonpremVmwareClusterAntiAffinityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aag_config_disabled: cdktf.booleanToTerraform(struct!.aagConfigDisabled),
  }
}


export function googleGkeonpremVmwareClusterAntiAffinityGroupsToHclTerraform(struct?: GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference | GoogleGkeonpremVmwareClusterAntiAffinityGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aag_config_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.aagConfigDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterAntiAffinityGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aagConfigDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.aagConfigDisabled = this._aagConfigDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterAntiAffinityGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aagConfigDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aagConfigDisabled = value.aagConfigDisabled;
    }
  }

  // aag_config_disabled - computed: false, optional: false, required: true
  private _aagConfigDisabled?: boolean | cdktf.IResolvable; 
  public get aagConfigDisabled() {
    return this.getBooleanAttribute('aag_config_disabled');
  }
  public set aagConfigDisabled(value: boolean | cdktf.IResolvable) {
    this._aagConfigDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aagConfigDisabledInput() {
    return this._aagConfigDisabled;
  }
}
export interface GoogleGkeonpremVmwareClusterAuthorizationAdminUsers {
  /**
  * The name of the user, e.g. 'my-gcp-id@gmail.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#username GoogleGkeonpremVmwareCluster#username}
  */
  readonly username: string;
}

export function googleGkeonpremVmwareClusterAuthorizationAdminUsersToTerraform(struct?: GoogleGkeonpremVmwareClusterAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function googleGkeonpremVmwareClusterAuthorizationAdminUsersToHclTerraform(struct?: GoogleGkeonpremVmwareClusterAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._username = value.username;
    }
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

export class GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference {
    return new GoogleGkeonpremVmwareClusterAuthorizationAdminUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterAuthorization {
  /**
  * admin_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#admin_users GoogleGkeonpremVmwareCluster#admin_users}
  */
  readonly adminUsers?: GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterAuthorizationToTerraform(struct?: GoogleGkeonpremVmwareClusterAuthorizationOutputReference | GoogleGkeonpremVmwareClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_users: cdktf.listMapper(googleGkeonpremVmwareClusterAuthorizationAdminUsersToTerraform, true)(struct!.adminUsers),
  }
}


export function googleGkeonpremVmwareClusterAuthorizationToHclTerraform(struct?: GoogleGkeonpremVmwareClusterAuthorizationOutputReference | GoogleGkeonpremVmwareClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_users: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareClusterAuthorizationAdminUsersToHclTerraform, true)(struct!.adminUsers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsers.internalValue = value.adminUsers;
    }
  }

  // admin_users - computed: false, optional: true, required: false
  private _adminUsers = new GoogleGkeonpremVmwareClusterAuthorizationAdminUsersList(this, "admin_users", false);
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: GoogleGkeonpremVmwareClusterAuthorizationAdminUsers[] | cdktf.IResolvable) {
    this._adminUsers.internalValue = value;
  }
  public resetAdminUsers() {
    this._adminUsers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterAutoRepairConfig {
  /**
  * Whether auto repair is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterAutoRepairConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference | GoogleGkeonpremVmwareClusterAutoRepairConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareClusterAutoRepairConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference | GoogleGkeonpremVmwareClusterAutoRepairConfig): any {
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

export class GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterAutoRepairConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterAutoRepairConfig | undefined) {
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
export interface GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig {
}

export function googleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datastore - computed: true, optional: false, required: false
  public get datastore() {
    return this.getStringAttribute('datastore');
  }

  // storage_policy_name - computed: true, optional: false, required: false
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
}

export class GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference {
    return new GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig {
  /**
  * Whether to enable control plane node auto resizing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference | GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference | GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig): any {
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

export class GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig | undefined) {
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
export interface GoogleGkeonpremVmwareClusterControlPlaneNode {
  /**
  * The number of CPUs for each admin cluster node that serve as control planes
  * for this VMware User Cluster. (default: 4 CPUs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#cpus GoogleGkeonpremVmwareCluster#cpus}
  */
  readonly cpus?: number;
  /**
  * The megabytes of memory for each admin cluster node that serves as a
  * control plane for this VMware User Cluster (default: 8192 MB memory).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#memory GoogleGkeonpremVmwareCluster#memory}
  */
  readonly memory?: number;
  /**
  * The number of control plane nodes for this VMware User Cluster.
  * (default: 1 replica).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#replicas GoogleGkeonpremVmwareCluster#replicas}
  */
  readonly replicas?: number;
  /**
  * auto_resize_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#auto_resize_config GoogleGkeonpremVmwareCluster#auto_resize_config}
  */
  readonly autoResizeConfig?: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig;
}

export function googleGkeonpremVmwareClusterControlPlaneNodeToTerraform(struct?: GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference | GoogleGkeonpremVmwareClusterControlPlaneNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpus: cdktf.numberToTerraform(struct!.cpus),
    memory: cdktf.numberToTerraform(struct!.memory),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    auto_resize_config: googleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigToTerraform(struct!.autoResizeConfig),
  }
}


export function googleGkeonpremVmwareClusterControlPlaneNodeToHclTerraform(struct?: GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference | GoogleGkeonpremVmwareClusterControlPlaneNode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpus: {
      value: cdktf.numberToHclTerraform(struct!.cpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_resize_config: {
      value: googleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigToHclTerraform(struct!.autoResizeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterControlPlaneNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpus = this._cpus;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._autoResizeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoResizeConfig = this._autoResizeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterControlPlaneNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpus = undefined;
      this._memory = undefined;
      this._replicas = undefined;
      this._autoResizeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpus = value.cpus;
      this._memory = value.memory;
      this._replicas = value.replicas;
      this._autoResizeConfig.internalValue = value.autoResizeConfig;
    }
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: number; 
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }
  public set cpus(value: number) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // vsphere_config - computed: true, optional: false, required: false
  private _vsphereConfig = new GoogleGkeonpremVmwareClusterControlPlaneNodeVsphereConfigList(this, "vsphere_config", false);
  public get vsphereConfig() {
    return this._vsphereConfig;
  }

  // auto_resize_config - computed: false, optional: true, required: false
  private _autoResizeConfig = new GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfigOutputReference(this, "auto_resize_config");
  public get autoResizeConfig() {
    return this._autoResizeConfig;
  }
  public putAutoResizeConfig(value: GoogleGkeonpremVmwareClusterControlPlaneNodeAutoResizeConfig) {
    this._autoResizeConfig.internalValue = value;
  }
  public resetAutoResizeConfig() {
    this._autoResizeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoResizeConfigInput() {
    return this._autoResizeConfig.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterDataplaneV2 {
  /**
  * Enable advanced networking which requires dataplane_v2_enabled to be set true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#advanced_networking GoogleGkeonpremVmwareCluster#advanced_networking}
  */
  readonly advancedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Enables Dataplane V2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#dataplane_v2_enabled GoogleGkeonpremVmwareCluster#dataplane_v2_enabled}
  */
  readonly dataplaneV2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable Dataplane V2 for clusters with Windows nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#windows_dataplane_v2_enabled GoogleGkeonpremVmwareCluster#windows_dataplane_v2_enabled}
  */
  readonly windowsDataplaneV2Enabled?: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterDataplaneV2ToTerraform(struct?: GoogleGkeonpremVmwareClusterDataplaneV2OutputReference | GoogleGkeonpremVmwareClusterDataplaneV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_networking: cdktf.booleanToTerraform(struct!.advancedNetworking),
    dataplane_v2_enabled: cdktf.booleanToTerraform(struct!.dataplaneV2Enabled),
    windows_dataplane_v2_enabled: cdktf.booleanToTerraform(struct!.windowsDataplaneV2Enabled),
  }
}


export function googleGkeonpremVmwareClusterDataplaneV2ToHclTerraform(struct?: GoogleGkeonpremVmwareClusterDataplaneV2OutputReference | GoogleGkeonpremVmwareClusterDataplaneV2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_networking: {
      value: cdktf.booleanToHclTerraform(struct!.advancedNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dataplane_v2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dataplaneV2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    windows_dataplane_v2_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.windowsDataplaneV2Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterDataplaneV2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterDataplaneV2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedNetworking = this._advancedNetworking;
    }
    if (this._dataplaneV2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataplaneV2Enabled = this._dataplaneV2Enabled;
    }
    if (this._windowsDataplaneV2Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsDataplaneV2Enabled = this._windowsDataplaneV2Enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterDataplaneV2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedNetworking = undefined;
      this._dataplaneV2Enabled = undefined;
      this._windowsDataplaneV2Enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedNetworking = value.advancedNetworking;
      this._dataplaneV2Enabled = value.dataplaneV2Enabled;
      this._windowsDataplaneV2Enabled = value.windowsDataplaneV2Enabled;
    }
  }

  // advanced_networking - computed: false, optional: true, required: false
  private _advancedNetworking?: boolean | cdktf.IResolvable; 
  public get advancedNetworking() {
    return this.getBooleanAttribute('advanced_networking');
  }
  public set advancedNetworking(value: boolean | cdktf.IResolvable) {
    this._advancedNetworking = value;
  }
  public resetAdvancedNetworking() {
    this._advancedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedNetworkingInput() {
    return this._advancedNetworking;
  }

  // dataplane_v2_enabled - computed: false, optional: true, required: false
  private _dataplaneV2Enabled?: boolean | cdktf.IResolvable; 
  public get dataplaneV2Enabled() {
    return this.getBooleanAttribute('dataplane_v2_enabled');
  }
  public set dataplaneV2Enabled(value: boolean | cdktf.IResolvable) {
    this._dataplaneV2Enabled = value;
  }
  public resetDataplaneV2Enabled() {
    this._dataplaneV2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneV2EnabledInput() {
    return this._dataplaneV2Enabled;
  }

  // windows_dataplane_v2_enabled - computed: false, optional: true, required: false
  private _windowsDataplaneV2Enabled?: boolean | cdktf.IResolvable; 
  public get windowsDataplaneV2Enabled() {
    return this.getBooleanAttribute('windows_dataplane_v2_enabled');
  }
  public set windowsDataplaneV2Enabled(value: boolean | cdktf.IResolvable) {
    this._windowsDataplaneV2Enabled = value;
  }
  public resetWindowsDataplaneV2Enabled() {
    this._windowsDataplaneV2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsDataplaneV2EnabledInput() {
    return this._windowsDataplaneV2Enabled;
  }
}
export interface GoogleGkeonpremVmwareClusterLoadBalancerF5Config {
  /**
  * The load balancer's IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#address GoogleGkeonpremVmwareCluster#address}
  */
  readonly address?: string;
  /**
  * he preexisting partition to be used by the load balancer. T
  * his partition is usually created for the admin cluster for example:
  * 'my-f5-admin-partition'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#partition GoogleGkeonpremVmwareCluster#partition}
  */
  readonly partition?: string;
  /**
  * The pool name. Only necessary, if using SNAT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#snat_pool GoogleGkeonpremVmwareCluster#snat_pool}
  */
  readonly snatPool?: string;
}

export function googleGkeonpremVmwareClusterLoadBalancerF5ConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerF5Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    partition: cdktf.stringToTerraform(struct!.partition),
    snat_pool: cdktf.stringToTerraform(struct!.snatPool),
  }
}


export function googleGkeonpremVmwareClusterLoadBalancerF5ConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerF5Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snat_pool: {
      value: cdktf.stringToHclTerraform(struct!.snatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterLoadBalancerF5Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._snatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPool = this._snatPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterLoadBalancerF5Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._partition = undefined;
      this._snatPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._partition = value.partition;
      this._snatPool = value.snatPool;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // snat_pool - computed: true, optional: true, required: false
  private _snatPool?: string; 
  public get snatPool() {
    return this.getStringAttribute('snat_pool');
  }
  public set snatPool(value: string) {
    this._snatPool = value;
  }
  public resetSnatPool() {
    this._snatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolInput() {
    return this._snatPool;
  }
}
export interface GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig {
  /**
  * NodePort for control plane service. The Kubernetes API server in the admin
  * cluster is implemented as a Service of type NodePort (ex. 30968).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_node_port GoogleGkeonpremVmwareCluster#control_plane_node_port}
  */
  readonly controlPlaneNodePort?: number;
  /**
  * NodePort for ingress service's http. The ingress service in the admin
  * cluster is implemented as a Service of type NodePort (ex. 32527).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ingress_http_node_port GoogleGkeonpremVmwareCluster#ingress_http_node_port}
  */
  readonly ingressHttpNodePort?: number;
  /**
  * NodePort for ingress service's https. The ingress service in the admin
  * cluster is implemented as a Service of type NodePort (ex. 30139).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ingress_https_node_port GoogleGkeonpremVmwareCluster#ingress_https_node_port}
  */
  readonly ingressHttpsNodePort?: number;
  /**
  * NodePort for konnectivity server service running as a sidecar in each
  * kube-apiserver pod (ex. 30564).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#konnectivity_server_node_port GoogleGkeonpremVmwareCluster#konnectivity_server_node_port}
  */
  readonly konnectivityServerNodePort?: number;
}

export function googleGkeonpremVmwareClusterLoadBalancerManualLbConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_node_port: cdktf.numberToTerraform(struct!.controlPlaneNodePort),
    ingress_http_node_port: cdktf.numberToTerraform(struct!.ingressHttpNodePort),
    ingress_https_node_port: cdktf.numberToTerraform(struct!.ingressHttpsNodePort),
    konnectivity_server_node_port: cdktf.numberToTerraform(struct!.konnectivityServerNodePort),
  }
}


export function googleGkeonpremVmwareClusterLoadBalancerManualLbConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_node_port: {
      value: cdktf.numberToHclTerraform(struct!.controlPlaneNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_http_node_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressHttpNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_https_node_port: {
      value: cdktf.numberToHclTerraform(struct!.ingressHttpsNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    konnectivity_server_node_port: {
      value: cdktf.numberToHclTerraform(struct!.konnectivityServerNodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneNodePort = this._controlPlaneNodePort;
    }
    if (this._ingressHttpNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHttpNodePort = this._ingressHttpNodePort;
    }
    if (this._ingressHttpsNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHttpsNodePort = this._ingressHttpsNodePort;
    }
    if (this._konnectivityServerNodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.konnectivityServerNodePort = this._konnectivityServerNodePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneNodePort = undefined;
      this._ingressHttpNodePort = undefined;
      this._ingressHttpsNodePort = undefined;
      this._konnectivityServerNodePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneNodePort = value.controlPlaneNodePort;
      this._ingressHttpNodePort = value.ingressHttpNodePort;
      this._ingressHttpsNodePort = value.ingressHttpsNodePort;
      this._konnectivityServerNodePort = value.konnectivityServerNodePort;
    }
  }

  // control_plane_node_port - computed: true, optional: true, required: false
  private _controlPlaneNodePort?: number; 
  public get controlPlaneNodePort() {
    return this.getNumberAttribute('control_plane_node_port');
  }
  public set controlPlaneNodePort(value: number) {
    this._controlPlaneNodePort = value;
  }
  public resetControlPlaneNodePort() {
    this._controlPlaneNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodePortInput() {
    return this._controlPlaneNodePort;
  }

  // ingress_http_node_port - computed: true, optional: true, required: false
  private _ingressHttpNodePort?: number; 
  public get ingressHttpNodePort() {
    return this.getNumberAttribute('ingress_http_node_port');
  }
  public set ingressHttpNodePort(value: number) {
    this._ingressHttpNodePort = value;
  }
  public resetIngressHttpNodePort() {
    this._ingressHttpNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHttpNodePortInput() {
    return this._ingressHttpNodePort;
  }

  // ingress_https_node_port - computed: true, optional: true, required: false
  private _ingressHttpsNodePort?: number; 
  public get ingressHttpsNodePort() {
    return this.getNumberAttribute('ingress_https_node_port');
  }
  public set ingressHttpsNodePort(value: number) {
    this._ingressHttpsNodePort = value;
  }
  public resetIngressHttpsNodePort() {
    this._ingressHttpsNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHttpsNodePortInput() {
    return this._ingressHttpsNodePort;
  }

  // konnectivity_server_node_port - computed: true, optional: true, required: false
  private _konnectivityServerNodePort?: number; 
  public get konnectivityServerNodePort() {
    return this.getNumberAttribute('konnectivity_server_node_port');
  }
  public set konnectivityServerNodePort(value: number) {
    this._konnectivityServerNodePort = value;
  }
  public resetKonnectivityServerNodePort() {
    this._konnectivityServerNodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get konnectivityServerNodePortInput() {
    return this._konnectivityServerNodePort;
  }
}
export interface GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools {
  /**
  * The addresses that are part of this pool. Each address
  * must be either in the CIDR form (1.2.3.0/24) or range
  * form (1.2.3.1-1.2.3.5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#addresses GoogleGkeonpremVmwareCluster#addresses}
  */
  readonly addresses: string[];
  /**
  * If true, avoid using IPs ending in .0 or .255.
  * This avoids buggy consumer devices mistakenly dropping IPv4 traffic for
  * those special IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#avoid_buggy_ips GoogleGkeonpremVmwareCluster#avoid_buggy_ips}
  */
  readonly avoidBuggyIps?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent IP addresses from being automatically assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#manual_assign GoogleGkeonpremVmwareCluster#manual_assign}
  */
  readonly manualAssign?: boolean | cdktf.IResolvable;
  /**
  * The name of the address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#pool GoogleGkeonpremVmwareCluster#pool}
  */
  readonly pool: string;
}

export function googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsToTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    avoid_buggy_ips: cdktf.booleanToTerraform(struct!.avoidBuggyIps),
    manual_assign: cdktf.booleanToTerraform(struct!.manualAssign),
    pool: cdktf.stringToTerraform(struct!.pool),
  }
}


export function googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsToHclTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    avoid_buggy_ips: {
      value: cdktf.booleanToHclTerraform(struct!.avoidBuggyIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_assign: {
      value: cdktf.booleanToHclTerraform(struct!.manualAssign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._avoidBuggyIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidBuggyIps = this._avoidBuggyIps;
    }
    if (this._manualAssign !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssign = this._manualAssign;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._avoidBuggyIps = undefined;
      this._manualAssign = undefined;
      this._pool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._avoidBuggyIps = value.avoidBuggyIps;
      this._manualAssign = value.manualAssign;
      this._pool = value.pool;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // avoid_buggy_ips - computed: true, optional: true, required: false
  private _avoidBuggyIps?: boolean | cdktf.IResolvable; 
  public get avoidBuggyIps() {
    return this.getBooleanAttribute('avoid_buggy_ips');
  }
  public set avoidBuggyIps(value: boolean | cdktf.IResolvable) {
    this._avoidBuggyIps = value;
  }
  public resetAvoidBuggyIps() {
    this._avoidBuggyIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidBuggyIpsInput() {
    return this._avoidBuggyIps;
  }

  // manual_assign - computed: true, optional: true, required: false
  private _manualAssign?: boolean | cdktf.IResolvable; 
  public get manualAssign() {
    return this.getBooleanAttribute('manual_assign');
  }
  public set manualAssign(value: boolean | cdktf.IResolvable) {
    this._manualAssign = value;
  }
  public resetManualAssign() {
    this._manualAssign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignInput() {
    return this._manualAssign;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }
}

export class GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference {
    return new GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig {
  /**
  * address_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#address_pools GoogleGkeonpremVmwareCluster#address_pools}
  */
  readonly addressPools: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_pools: cdktf.listMapper(googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsToTerraform, true)(struct!.addressPools),
  }
}


export function googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_pools: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsToHclTerraform, true)(struct!.addressPools),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPools = this._addressPools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressPools.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressPools.internalValue = value.addressPools;
    }
  }

  // address_pools - computed: false, optional: false, required: true
  private _addressPools = new GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPoolsList(this, "address_pools", false);
  public get addressPools() {
    return this._addressPools;
  }
  public putAddressPools(value: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigAddressPools[] | cdktf.IResolvable) {
    this._addressPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolsInput() {
    return this._addressPools.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterLoadBalancerVipConfig {
  /**
  * The VIP which you previously set aside for the Kubernetes API of this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_vip GoogleGkeonpremVmwareCluster#control_plane_vip}
  */
  readonly controlPlaneVip?: string;
  /**
  * The VIP which you previously set aside for ingress traffic into this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ingress_vip GoogleGkeonpremVmwareCluster#ingress_vip}
  */
  readonly ingressVip?: string;
}

export function googleGkeonpremVmwareClusterLoadBalancerVipConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_vip: cdktf.stringToTerraform(struct!.controlPlaneVip),
    ingress_vip: cdktf.stringToTerraform(struct!.ingressVip),
  }
}


export function googleGkeonpremVmwareClusterLoadBalancerVipConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference | GoogleGkeonpremVmwareClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_vip: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_vip: {
      value: cdktf.stringToHclTerraform(struct!.ingressVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterLoadBalancerVipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVip = this._controlPlaneVip;
    }
    if (this._ingressVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressVip = this._ingressVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneVip = undefined;
      this._ingressVip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneVip = value.controlPlaneVip;
      this._ingressVip = value.ingressVip;
    }
  }

  // control_plane_vip - computed: false, optional: true, required: false
  private _controlPlaneVip?: string; 
  public get controlPlaneVip() {
    return this.getStringAttribute('control_plane_vip');
  }
  public set controlPlaneVip(value: string) {
    this._controlPlaneVip = value;
  }
  public resetControlPlaneVip() {
    this._controlPlaneVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVipInput() {
    return this._controlPlaneVip;
  }

  // ingress_vip - computed: false, optional: true, required: false
  private _ingressVip?: string; 
  public get ingressVip() {
    return this.getStringAttribute('ingress_vip');
  }
  public set ingressVip(value: string) {
    this._ingressVip = value;
  }
  public resetIngressVip() {
    this._ingressVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVipInput() {
    return this._ingressVip;
  }
}
export interface GoogleGkeonpremVmwareClusterLoadBalancer {
  /**
  * f5_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#f5_config GoogleGkeonpremVmwareCluster#f5_config}
  */
  readonly f5Config?: GoogleGkeonpremVmwareClusterLoadBalancerF5Config;
  /**
  * manual_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#manual_lb_config GoogleGkeonpremVmwareCluster#manual_lb_config}
  */
  readonly manualLbConfig?: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig;
  /**
  * metal_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#metal_lb_config GoogleGkeonpremVmwareCluster#metal_lb_config}
  */
  readonly metalLbConfig?: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig;
  /**
  * vip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#vip_config GoogleGkeonpremVmwareCluster#vip_config}
  */
  readonly vipConfig?: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig;
}

export function googleGkeonpremVmwareClusterLoadBalancerToTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerOutputReference | GoogleGkeonpremVmwareClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    f5_config: googleGkeonpremVmwareClusterLoadBalancerF5ConfigToTerraform(struct!.f5Config),
    manual_lb_config: googleGkeonpremVmwareClusterLoadBalancerManualLbConfigToTerraform(struct!.manualLbConfig),
    metal_lb_config: googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigToTerraform(struct!.metalLbConfig),
    vip_config: googleGkeonpremVmwareClusterLoadBalancerVipConfigToTerraform(struct!.vipConfig),
  }
}


export function googleGkeonpremVmwareClusterLoadBalancerToHclTerraform(struct?: GoogleGkeonpremVmwareClusterLoadBalancerOutputReference | GoogleGkeonpremVmwareClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    f5_config: {
      value: googleGkeonpremVmwareClusterLoadBalancerF5ConfigToHclTerraform(struct!.f5Config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigList",
    },
    manual_lb_config: {
      value: googleGkeonpremVmwareClusterLoadBalancerManualLbConfigToHclTerraform(struct!.manualLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigList",
    },
    metal_lb_config: {
      value: googleGkeonpremVmwareClusterLoadBalancerMetalLbConfigToHclTerraform(struct!.metalLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigList",
    },
    vip_config: {
      value: googleGkeonpremVmwareClusterLoadBalancerVipConfigToHclTerraform(struct!.vipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterLoadBalancerVipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._f5Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.f5Config = this._f5Config?.internalValue;
    }
    if (this._manualLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualLbConfig = this._manualLbConfig?.internalValue;
    }
    if (this._metalLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metalLbConfig = this._metalLbConfig?.internalValue;
    }
    if (this._vipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipConfig = this._vipConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._f5Config.internalValue = undefined;
      this._manualLbConfig.internalValue = undefined;
      this._metalLbConfig.internalValue = undefined;
      this._vipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._f5Config.internalValue = value.f5Config;
      this._manualLbConfig.internalValue = value.manualLbConfig;
      this._metalLbConfig.internalValue = value.metalLbConfig;
      this._vipConfig.internalValue = value.vipConfig;
    }
  }

  // f5_config - computed: false, optional: true, required: false
  private _f5Config = new GoogleGkeonpremVmwareClusterLoadBalancerF5ConfigOutputReference(this, "f5_config");
  public get f5Config() {
    return this._f5Config;
  }
  public putF5Config(value: GoogleGkeonpremVmwareClusterLoadBalancerF5Config) {
    this._f5Config.internalValue = value;
  }
  public resetF5Config() {
    this._f5Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get f5ConfigInput() {
    return this._f5Config.internalValue;
  }

  // manual_lb_config - computed: false, optional: true, required: false
  private _manualLbConfig = new GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfigOutputReference(this, "manual_lb_config");
  public get manualLbConfig() {
    return this._manualLbConfig;
  }
  public putManualLbConfig(value: GoogleGkeonpremVmwareClusterLoadBalancerManualLbConfig) {
    this._manualLbConfig.internalValue = value;
  }
  public resetManualLbConfig() {
    this._manualLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualLbConfigInput() {
    return this._manualLbConfig.internalValue;
  }

  // metal_lb_config - computed: false, optional: true, required: false
  private _metalLbConfig = new GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfigOutputReference(this, "metal_lb_config");
  public get metalLbConfig() {
    return this._metalLbConfig;
  }
  public putMetalLbConfig(value: GoogleGkeonpremVmwareClusterLoadBalancerMetalLbConfig) {
    this._metalLbConfig.internalValue = value;
  }
  public resetMetalLbConfig() {
    this._metalLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metalLbConfigInput() {
    return this._metalLbConfig.internalValue;
  }

  // vip_config - computed: false, optional: true, required: false
  private _vipConfig = new GoogleGkeonpremVmwareClusterLoadBalancerVipConfigOutputReference(this, "vip_config");
  public get vipConfig() {
    return this._vipConfig;
  }
  public putVipConfig(value: GoogleGkeonpremVmwareClusterLoadBalancerVipConfig) {
    this._vipConfig.internalValue = value;
  }
  public resetVipConfig() {
    this._vipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConfigInput() {
    return this._vipConfig.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps {
  /**
  * Hostname of the machine. VM's name will be used if this field is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}
  */
  readonly ip?: string;
}

export function googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference {
    return new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock {
  /**
  * The network gateway used by the VMware User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}
  */
  readonly gateway?: string;
  /**
  * The netmask used by the VMware User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}
  */
  readonly netmask?: string;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}
  */
  readonly ips?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ips: cdktf.listMapper(googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsToTerraform, true)(struct!.ips),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsToHclTerraform, true)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gateway = undefined;
      this._netmask = undefined;
      this._ips.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._ips.internalValue = value.ips;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ips - computed: false, optional: true, required: false
  private _ips = new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  public resetIps() {
    this._ips.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config {
  /**
  * control_plane_ip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_ip_block GoogleGkeonpremVmwareCluster#control_plane_ip_block}
  */
  readonly controlPlaneIpBlock?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock;
}

export function googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_ip_block: googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockToTerraform(struct!.controlPlaneIpBlock),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_ip_block: {
      value: googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockToHclTerraform(struct!.controlPlaneIpBlock),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneIpBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneIpBlock = this._controlPlaneIpBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneIpBlock.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneIpBlock.internalValue = value.controlPlaneIpBlock;
    }
  }

  // control_plane_ip_block - computed: false, optional: true, required: false
  private _controlPlaneIpBlock = new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlockOutputReference(this, "control_plane_ip_block");
  public get controlPlaneIpBlock() {
    return this._controlPlaneIpBlock;
  }
  public putControlPlaneIpBlock(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigControlPlaneIpBlock) {
    this._controlPlaneIpBlock.internalValue = value;
  }
  public resetControlPlaneIpBlock() {
    this._controlPlaneIpBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIpBlockInput() {
    return this._controlPlaneIpBlock.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig {
  /**
  * enabled is a flag to mark if DHCP IP allocation is
  * used for VMware user clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#enabled GoogleGkeonpremVmwareCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig): any {
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

export class GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig | undefined) {
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
export interface GoogleGkeonpremVmwareClusterNetworkConfigHostConfig {
  /**
  * DNS search domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#dns_search_domains GoogleGkeonpremVmwareCluster#dns_search_domains}
  */
  readonly dnsSearchDomains?: string[];
  /**
  * DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#dns_servers GoogleGkeonpremVmwareCluster#dns_servers}
  */
  readonly dnsServers?: string[];
  /**
  * NTP servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ntp_servers GoogleGkeonpremVmwareCluster#ntp_servers}
  */
  readonly ntpServers?: string[];
}

export function googleGkeonpremVmwareClusterNetworkConfigHostConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsSearchDomains),
    dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsServers),
    ntp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ntpServers),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigHostConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigHostConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsSearchDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ntp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ntpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigHostConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsSearchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsSearchDomains = this._dnsSearchDomains;
    }
    if (this._dnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsServers = this._dnsServers;
    }
    if (this._ntpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpServers = this._ntpServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsSearchDomains = undefined;
      this._dnsServers = undefined;
      this._ntpServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsSearchDomains = value.dnsSearchDomains;
      this._dnsServers = value.dnsServers;
      this._ntpServers = value.ntpServers;
    }
  }

  // dns_search_domains - computed: false, optional: true, required: false
  private _dnsSearchDomains?: string[]; 
  public get dnsSearchDomains() {
    return this.getListAttribute('dns_search_domains');
  }
  public set dnsSearchDomains(value: string[]) {
    this._dnsSearchDomains = value;
  }
  public resetDnsSearchDomains() {
    this._dnsSearchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsSearchDomainsInput() {
    return this._dnsSearchDomains;
  }

  // dns_servers - computed: false, optional: true, required: false
  private _dnsServers?: string[]; 
  public get dnsServers() {
    return this.getListAttribute('dns_servers');
  }
  public set dnsServers(value: string[]) {
    this._dnsServers = value;
  }
  public resetDnsServers() {
    this._dnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServersInput() {
    return this._dnsServers;
  }

  // ntp_servers - computed: false, optional: true, required: false
  private _ntpServers?: string[]; 
  public get ntpServers() {
    return this.getListAttribute('ntp_servers');
  }
  public set ntpServers(value: string[]) {
    this._ntpServers = value;
  }
  public resetNtpServers() {
    this._ntpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpServersInput() {
    return this._ntpServers;
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps {
  /**
  * Hostname of the machine. VM's name will be used if this field is empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#hostname GoogleGkeonpremVmwareCluster#hostname}
  */
  readonly hostname?: string;
  /**
  * IP could be an IP address (like 1.2.3.4) or a CIDR (like 1.2.3.0/24).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ip GoogleGkeonpremVmwareCluster#ip}
  */
  readonly ip: string;
}

export function googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
    }
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference {
    return new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks {
  /**
  * The network gateway used by the VMware User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#gateway GoogleGkeonpremVmwareCluster#gateway}
  */
  readonly gateway: string;
  /**
  * The netmask used by the VMware User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#netmask GoogleGkeonpremVmwareCluster#netmask}
  */
  readonly netmask: string;
  /**
  * ips block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ips GoogleGkeonpremVmwareCluster#ips}
  */
  readonly ips: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    netmask: cdktf.stringToTerraform(struct!.netmask),
    ips: cdktf.listMapper(googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsToTerraform, true)(struct!.ips),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netmask: {
      value: cdktf.stringToHclTerraform(struct!.netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsToHclTerraform, true)(struct!.ips),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.netmask = this._netmask;
    }
    if (this._ips?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._netmask = undefined;
      this._ips.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._netmask = value.netmask;
      this._ips.internalValue = value.ips;
    }
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // ips - computed: false, optional: false, required: true
  private _ips = new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }
}

export class GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference {
    return new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig {
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ip_blocks GoogleGkeonpremVmwareCluster#ip_blocks}
  */
  readonly ipBlocks: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_blocks: cdktf.listMapper(googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksToTerraform, true)(struct!.ipBlocks),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_blocks: {
      value: cdktf.listMapperHcl(googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipBlocks.internalValue = value.ipBlocks;
    }
  }

  // ip_blocks - computed: false, optional: false, required: true
  private _ipBlocks = new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterNetworkConfig {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges.
  * Only a single range is supported. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#pod_address_cidr_blocks GoogleGkeonpremVmwareCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address
  * from these ranges. Only a single range is supported.. This field
  * cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#service_address_cidr_blocks GoogleGkeonpremVmwareCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
  /**
  * vcenter_network specifies vCenter network name. Inherited from the admin cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#vcenter_network GoogleGkeonpremVmwareCluster#vcenter_network}
  */
  readonly vcenterNetwork?: string;
  /**
  * control_plane_v2_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_v2_config GoogleGkeonpremVmwareCluster#control_plane_v2_config}
  */
  readonly controlPlaneV2Config?: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config;
  /**
  * dhcp_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#dhcp_ip_config GoogleGkeonpremVmwareCluster#dhcp_ip_config}
  */
  readonly dhcpIpConfig?: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig;
  /**
  * host_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#host_config GoogleGkeonpremVmwareCluster#host_config}
  */
  readonly hostConfig?: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig;
  /**
  * static_ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#static_ip_config GoogleGkeonpremVmwareCluster#static_ip_config}
  */
  readonly staticIpConfig?: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig;
}

export function googleGkeonpremVmwareClusterNetworkConfigToTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
    vcenter_network: cdktf.stringToTerraform(struct!.vcenterNetwork),
    control_plane_v2_config: googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigToTerraform(struct!.controlPlaneV2Config),
    dhcp_ip_config: googleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigToTerraform(struct!.dhcpIpConfig),
    host_config: googleGkeonpremVmwareClusterNetworkConfigHostConfigToTerraform(struct!.hostConfig),
    static_ip_config: googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigToTerraform(struct!.staticIpConfig),
  }
}


export function googleGkeonpremVmwareClusterNetworkConfigToHclTerraform(struct?: GoogleGkeonpremVmwareClusterNetworkConfigOutputReference | GoogleGkeonpremVmwareClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vcenter_network: {
      value: cdktf.stringToHclTerraform(struct!.vcenterNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_v2_config: {
      value: googleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigToHclTerraform(struct!.controlPlaneV2Config),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigList",
    },
    dhcp_ip_config: {
      value: googleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigToHclTerraform(struct!.dhcpIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigList",
    },
    host_config: {
      value: googleGkeonpremVmwareClusterNetworkConfigHostConfigToHclTerraform(struct!.hostConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigHostConfigList",
    },
    static_ip_config: {
      value: googleGkeonpremVmwareClusterNetworkConfigStaticIpConfigToHclTerraform(struct!.staticIpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAddressCidrBlocks = this._podAddressCidrBlocks;
    }
    if (this._serviceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddressCidrBlocks = this._serviceAddressCidrBlocks;
    }
    if (this._vcenterNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterNetwork = this._vcenterNetwork;
    }
    if (this._controlPlaneV2Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneV2Config = this._controlPlaneV2Config?.internalValue;
    }
    if (this._dhcpIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpIpConfig = this._dhcpIpConfig?.internalValue;
    }
    if (this._hostConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostConfig = this._hostConfig?.internalValue;
    }
    if (this._staticIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpConfig = this._staticIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
      this._vcenterNetwork = undefined;
      this._controlPlaneV2Config.internalValue = undefined;
      this._dhcpIpConfig.internalValue = undefined;
      this._hostConfig.internalValue = undefined;
      this._staticIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
      this._vcenterNetwork = value.vcenterNetwork;
      this._controlPlaneV2Config.internalValue = value.controlPlaneV2Config;
      this._dhcpIpConfig.internalValue = value.dhcpIpConfig;
      this._hostConfig.internalValue = value.hostConfig;
      this._staticIpConfig.internalValue = value.staticIpConfig;
    }
  }

  // pod_address_cidr_blocks - computed: false, optional: false, required: true
  private _podAddressCidrBlocks?: string[]; 
  public get podAddressCidrBlocks() {
    return this.getListAttribute('pod_address_cidr_blocks');
  }
  public set podAddressCidrBlocks(value: string[]) {
    this._podAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAddressCidrBlocksInput() {
    return this._podAddressCidrBlocks;
  }

  // service_address_cidr_blocks - computed: false, optional: false, required: true
  private _serviceAddressCidrBlocks?: string[]; 
  public get serviceAddressCidrBlocks() {
    return this.getListAttribute('service_address_cidr_blocks');
  }
  public set serviceAddressCidrBlocks(value: string[]) {
    this._serviceAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressCidrBlocksInput() {
    return this._serviceAddressCidrBlocks;
  }

  // vcenter_network - computed: true, optional: true, required: false
  private _vcenterNetwork?: string; 
  public get vcenterNetwork() {
    return this.getStringAttribute('vcenter_network');
  }
  public set vcenterNetwork(value: string) {
    this._vcenterNetwork = value;
  }
  public resetVcenterNetwork() {
    this._vcenterNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterNetworkInput() {
    return this._vcenterNetwork;
  }

  // control_plane_v2_config - computed: false, optional: true, required: false
  private _controlPlaneV2Config = new GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2ConfigOutputReference(this, "control_plane_v2_config");
  public get controlPlaneV2Config() {
    return this._controlPlaneV2Config;
  }
  public putControlPlaneV2Config(value: GoogleGkeonpremVmwareClusterNetworkConfigControlPlaneV2Config) {
    this._controlPlaneV2Config.internalValue = value;
  }
  public resetControlPlaneV2Config() {
    this._controlPlaneV2Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneV2ConfigInput() {
    return this._controlPlaneV2Config.internalValue;
  }

  // dhcp_ip_config - computed: false, optional: true, required: false
  private _dhcpIpConfig = new GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfigOutputReference(this, "dhcp_ip_config");
  public get dhcpIpConfig() {
    return this._dhcpIpConfig;
  }
  public putDhcpIpConfig(value: GoogleGkeonpremVmwareClusterNetworkConfigDhcpIpConfig) {
    this._dhcpIpConfig.internalValue = value;
  }
  public resetDhcpIpConfig() {
    this._dhcpIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpConfigInput() {
    return this._dhcpIpConfig.internalValue;
  }

  // host_config - computed: false, optional: true, required: false
  private _hostConfig = new GoogleGkeonpremVmwareClusterNetworkConfigHostConfigOutputReference(this, "host_config");
  public get hostConfig() {
    return this._hostConfig;
  }
  public putHostConfig(value: GoogleGkeonpremVmwareClusterNetworkConfigHostConfig) {
    this._hostConfig.internalValue = value;
  }
  public resetHostConfig() {
    this._hostConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostConfigInput() {
    return this._hostConfig.internalValue;
  }

  // static_ip_config - computed: false, optional: true, required: false
  private _staticIpConfig = new GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfigOutputReference(this, "static_ip_config");
  public get staticIpConfig() {
    return this._staticIpConfig;
  }
  public putStaticIpConfig(value: GoogleGkeonpremVmwareClusterNetworkConfigStaticIpConfig) {
    this._staticIpConfig.internalValue = value;
  }
  public resetStaticIpConfig() {
    this._staticIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpConfigInput() {
    return this._staticIpConfig.internalValue;
  }
}
export interface GoogleGkeonpremVmwareClusterStorage {
  /**
  * Whether or not to deploy vSphere CSI components in the VMware User Cluster.
  * Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#vsphere_csi_disabled GoogleGkeonpremVmwareCluster#vsphere_csi_disabled}
  */
  readonly vsphereCsiDisabled: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterStorageToTerraform(struct?: GoogleGkeonpremVmwareClusterStorageOutputReference | GoogleGkeonpremVmwareClusterStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vsphere_csi_disabled: cdktf.booleanToTerraform(struct!.vsphereCsiDisabled),
  }
}


export function googleGkeonpremVmwareClusterStorageToHclTerraform(struct?: GoogleGkeonpremVmwareClusterStorageOutputReference | GoogleGkeonpremVmwareClusterStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vsphere_csi_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.vsphereCsiDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vsphereCsiDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereCsiDisabled = this._vsphereCsiDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vsphereCsiDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vsphereCsiDisabled = value.vsphereCsiDisabled;
    }
  }

  // vsphere_csi_disabled - computed: false, optional: false, required: true
  private _vsphereCsiDisabled?: boolean | cdktf.IResolvable; 
  public get vsphereCsiDisabled() {
    return this.getBooleanAttribute('vsphere_csi_disabled');
  }
  public set vsphereCsiDisabled(value: boolean | cdktf.IResolvable) {
    this._vsphereCsiDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereCsiDisabledInput() {
    return this._vsphereCsiDisabled;
  }
}
export interface GoogleGkeonpremVmwareClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#create GoogleGkeonpremVmwareCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#delete GoogleGkeonpremVmwareCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#update GoogleGkeonpremVmwareCluster#update}
  */
  readonly update?: string;
}

export function googleGkeonpremVmwareClusterTimeoutsToTerraform(struct?: GoogleGkeonpremVmwareClusterTimeouts | cdktf.IResolvable): any {
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


export function googleGkeonpremVmwareClusterTimeoutsToHclTerraform(struct?: GoogleGkeonpremVmwareClusterTimeouts | cdktf.IResolvable): any {
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

export class GoogleGkeonpremVmwareClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleGkeonpremVmwareClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleGkeonpremVmwareClusterUpgradePolicy {
  /**
  * Controls whether the upgrade applies to the control plane only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#control_plane_only GoogleGkeonpremVmwareCluster#control_plane_only}
  */
  readonly controlPlaneOnly?: boolean | cdktf.IResolvable;
}

export function googleGkeonpremVmwareClusterUpgradePolicyToTerraform(struct?: GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference | GoogleGkeonpremVmwareClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_only: cdktf.booleanToTerraform(struct!.controlPlaneOnly),
  }
}


export function googleGkeonpremVmwareClusterUpgradePolicyToHclTerraform(struct?: GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference | GoogleGkeonpremVmwareClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_only: {
      value: cdktf.booleanToHclTerraform(struct!.controlPlaneOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneOnly = this._controlPlaneOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneOnly = value.controlPlaneOnly;
    }
  }

  // control_plane_only - computed: false, optional: true, required: false
  private _controlPlaneOnly?: boolean | cdktf.IResolvable; 
  public get controlPlaneOnly() {
    return this.getBooleanAttribute('control_plane_only');
  }
  public set controlPlaneOnly(value: boolean | cdktf.IResolvable) {
    this._controlPlaneOnly = value;
  }
  public resetControlPlaneOnly() {
    this._controlPlaneOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneOnlyInput() {
    return this._controlPlaneOnly;
  }
}
export interface GoogleGkeonpremVmwareClusterVcenter {
  /**
  * Contains the vCenter CA certificate public key for SSL verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#ca_cert_data GoogleGkeonpremVmwareCluster#ca_cert_data}
  */
  readonly caCertData?: string;
  /**
  * The name of the vCenter cluster for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#cluster GoogleGkeonpremVmwareCluster#cluster}
  */
  readonly cluster?: string;
  /**
  * The name of the vCenter datacenter for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#datacenter GoogleGkeonpremVmwareCluster#datacenter}
  */
  readonly datacenter?: string;
  /**
  * The name of the vCenter datastore for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#datastore GoogleGkeonpremVmwareCluster#datastore}
  */
  readonly datastore?: string;
  /**
  * The name of the vCenter folder for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#folder GoogleGkeonpremVmwareCluster#folder}
  */
  readonly folder?: string;
  /**
  * The name of the vCenter resource pool for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#resource_pool GoogleGkeonpremVmwareCluster#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * The name of the vCenter storage policy for the user cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#storage_policy_name GoogleGkeonpremVmwareCluster#storage_policy_name}
  */
  readonly storagePolicyName?: string;
}

export function googleGkeonpremVmwareClusterVcenterToTerraform(struct?: GoogleGkeonpremVmwareClusterVcenterOutputReference | GoogleGkeonpremVmwareClusterVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert_data: cdktf.stringToTerraform(struct!.caCertData),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    folder: cdktf.stringToTerraform(struct!.folder),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
  }
}


export function googleGkeonpremVmwareClusterVcenterToHclTerraform(struct?: GoogleGkeonpremVmwareClusterVcenterOutputReference | GoogleGkeonpremVmwareClusterVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert_data: {
      value: cdktf.stringToHclTerraform(struct!.caCertData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeonpremVmwareClusterVcenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeonpremVmwareClusterVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertData !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertData = this._caCertData;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeonpremVmwareClusterVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertData = undefined;
      this._cluster = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._folder = undefined;
      this._resourcePool = undefined;
      this._storagePolicyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertData = value.caCertData;
      this._cluster = value.cluster;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._folder = value.folder;
      this._resourcePool = value.resourcePool;
      this._storagePolicyName = value.storagePolicyName;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // ca_cert_data - computed: false, optional: true, required: false
  private _caCertData?: string; 
  public get caCertData() {
    return this.getStringAttribute('ca_cert_data');
  }
  public set caCertData(value: string) {
    this._caCertData = value;
  }
  public resetCaCertData() {
    this._caCertData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertDataInput() {
    return this._caCertData;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster}
*/
export class GoogleGkeonpremVmwareCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_vmware_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleGkeonpremVmwareCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleGkeonpremVmwareCluster to import
  * @param importFromId The id of the existing GoogleGkeonpremVmwareCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleGkeonpremVmwareCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_vmware_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_gkeonprem_vmware_cluster google_gkeonprem_vmware_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGkeonpremVmwareClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGkeonpremVmwareClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_vmware_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.13.0',
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
    this._adminClusterMembership = config.adminClusterMembership;
    this._annotations = config.annotations;
    this._description = config.description;
    this._disableBundledIngress = config.disableBundledIngress;
    this._enableControlPlaneV2 = config.enableControlPlaneV2;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._onPremVersion = config.onPremVersion;
    this._project = config.project;
    this._vmTrackingEnabled = config.vmTrackingEnabled;
    this._antiAffinityGroups.internalValue = config.antiAffinityGroups;
    this._authorization.internalValue = config.authorization;
    this._autoRepairConfig.internalValue = config.autoRepairConfig;
    this._controlPlaneNode.internalValue = config.controlPlaneNode;
    this._dataplaneV2.internalValue = config.dataplaneV2;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._networkConfig.internalValue = config.networkConfig;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
    this._upgradePolicy.internalValue = config.upgradePolicy;
    this._vcenter.internalValue = config.vcenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_cluster_membership - computed: false, optional: false, required: true
  private _adminClusterMembership?: string; 
  public get adminClusterMembership() {
    return this.getStringAttribute('admin_cluster_membership');
  }
  public set adminClusterMembership(value: string) {
    this._adminClusterMembership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminClusterMembershipInput() {
    return this._adminClusterMembership;
  }

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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // disable_bundled_ingress - computed: false, optional: true, required: false
  private _disableBundledIngress?: boolean | cdktf.IResolvable; 
  public get disableBundledIngress() {
    return this.getBooleanAttribute('disable_bundled_ingress');
  }
  public set disableBundledIngress(value: boolean | cdktf.IResolvable) {
    this._disableBundledIngress = value;
  }
  public resetDisableBundledIngress() {
    this._disableBundledIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBundledIngressInput() {
    return this._disableBundledIngress;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // enable_control_plane_v2 - computed: false, optional: true, required: false
  private _enableControlPlaneV2?: boolean | cdktf.IResolvable; 
  public get enableControlPlaneV2() {
    return this.getBooleanAttribute('enable_control_plane_v2');
  }
  public set enableControlPlaneV2(value: boolean | cdktf.IResolvable) {
    this._enableControlPlaneV2 = value;
  }
  public resetEnableControlPlaneV2() {
    this._enableControlPlaneV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableControlPlaneV2Input() {
    return this._enableControlPlaneV2;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fleet - computed: true, optional: false, required: false
  private _fleet = new GoogleGkeonpremVmwareClusterFleetList(this, "fleet", false);
  public get fleet() {
    return this._fleet;
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

  // local_name - computed: true, optional: false, required: false
  public get localName() {
    return this.getStringAttribute('local_name');
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

  // on_prem_version - computed: false, optional: false, required: true
  private _onPremVersion?: string; 
  public get onPremVersion() {
    return this.getStringAttribute('on_prem_version');
  }
  public set onPremVersion(value: string) {
    this._onPremVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremVersionInput() {
    return this._onPremVersion;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GoogleGkeonpremVmwareClusterStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // validation_check - computed: true, optional: false, required: false
  private _validationCheck = new GoogleGkeonpremVmwareClusterValidationCheckList(this, "validation_check", false);
  public get validationCheck() {
    return this._validationCheck;
  }

  // vm_tracking_enabled - computed: true, optional: true, required: false
  private _vmTrackingEnabled?: boolean | cdktf.IResolvable; 
  public get vmTrackingEnabled() {
    return this.getBooleanAttribute('vm_tracking_enabled');
  }
  public set vmTrackingEnabled(value: boolean | cdktf.IResolvable) {
    this._vmTrackingEnabled = value;
  }
  public resetVmTrackingEnabled() {
    this._vmTrackingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmTrackingEnabledInput() {
    return this._vmTrackingEnabled;
  }

  // anti_affinity_groups - computed: false, optional: true, required: false
  private _antiAffinityGroups = new GoogleGkeonpremVmwareClusterAntiAffinityGroupsOutputReference(this, "anti_affinity_groups");
  public get antiAffinityGroups() {
    return this._antiAffinityGroups;
  }
  public putAntiAffinityGroups(value: GoogleGkeonpremVmwareClusterAntiAffinityGroups) {
    this._antiAffinityGroups.internalValue = value;
  }
  public resetAntiAffinityGroups() {
    this._antiAffinityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiAffinityGroupsInput() {
    return this._antiAffinityGroups.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new GoogleGkeonpremVmwareClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GoogleGkeonpremVmwareClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // auto_repair_config - computed: false, optional: true, required: false
  private _autoRepairConfig = new GoogleGkeonpremVmwareClusterAutoRepairConfigOutputReference(this, "auto_repair_config");
  public get autoRepairConfig() {
    return this._autoRepairConfig;
  }
  public putAutoRepairConfig(value: GoogleGkeonpremVmwareClusterAutoRepairConfig) {
    this._autoRepairConfig.internalValue = value;
  }
  public resetAutoRepairConfig() {
    this._autoRepairConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairConfigInput() {
    return this._autoRepairConfig.internalValue;
  }

  // control_plane_node - computed: false, optional: false, required: true
  private _controlPlaneNode = new GoogleGkeonpremVmwareClusterControlPlaneNodeOutputReference(this, "control_plane_node");
  public get controlPlaneNode() {
    return this._controlPlaneNode;
  }
  public putControlPlaneNode(value: GoogleGkeonpremVmwareClusterControlPlaneNode) {
    this._controlPlaneNode.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodeInput() {
    return this._controlPlaneNode.internalValue;
  }

  // dataplane_v2 - computed: false, optional: true, required: false
  private _dataplaneV2 = new GoogleGkeonpremVmwareClusterDataplaneV2OutputReference(this, "dataplane_v2");
  public get dataplaneV2() {
    return this._dataplaneV2;
  }
  public putDataplaneV2(value: GoogleGkeonpremVmwareClusterDataplaneV2) {
    this._dataplaneV2.internalValue = value;
  }
  public resetDataplaneV2() {
    this._dataplaneV2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataplaneV2Input() {
    return this._dataplaneV2.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new GoogleGkeonpremVmwareClusterLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: GoogleGkeonpremVmwareClusterLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GoogleGkeonpremVmwareClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GoogleGkeonpremVmwareClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new GoogleGkeonpremVmwareClusterStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: GoogleGkeonpremVmwareClusterStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGkeonpremVmwareClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGkeonpremVmwareClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy = new GoogleGkeonpremVmwareClusterUpgradePolicyOutputReference(this, "upgrade_policy");
  public get upgradePolicy() {
    return this._upgradePolicy;
  }
  public putUpgradePolicy(value: GoogleGkeonpremVmwareClusterUpgradePolicy) {
    this._upgradePolicy.internalValue = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy.internalValue;
  }

  // vcenter - computed: false, optional: true, required: false
  private _vcenter = new GoogleGkeonpremVmwareClusterVcenterOutputReference(this, "vcenter");
  public get vcenter() {
    return this._vcenter;
  }
  public putVcenter(value: GoogleGkeonpremVmwareClusterVcenter) {
    this._vcenter.internalValue = value;
  }
  public resetVcenter() {
    this._vcenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_cluster_membership: cdktf.stringToTerraform(this._adminClusterMembership),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable_bundled_ingress: cdktf.booleanToTerraform(this._disableBundledIngress),
      enable_control_plane_v2: cdktf.booleanToTerraform(this._enableControlPlaneV2),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      on_prem_version: cdktf.stringToTerraform(this._onPremVersion),
      project: cdktf.stringToTerraform(this._project),
      vm_tracking_enabled: cdktf.booleanToTerraform(this._vmTrackingEnabled),
      anti_affinity_groups: googleGkeonpremVmwareClusterAntiAffinityGroupsToTerraform(this._antiAffinityGroups.internalValue),
      authorization: googleGkeonpremVmwareClusterAuthorizationToTerraform(this._authorization.internalValue),
      auto_repair_config: googleGkeonpremVmwareClusterAutoRepairConfigToTerraform(this._autoRepairConfig.internalValue),
      control_plane_node: googleGkeonpremVmwareClusterControlPlaneNodeToTerraform(this._controlPlaneNode.internalValue),
      dataplane_v2: googleGkeonpremVmwareClusterDataplaneV2ToTerraform(this._dataplaneV2.internalValue),
      load_balancer: googleGkeonpremVmwareClusterLoadBalancerToTerraform(this._loadBalancer.internalValue),
      network_config: googleGkeonpremVmwareClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      storage: googleGkeonpremVmwareClusterStorageToTerraform(this._storage.internalValue),
      timeouts: googleGkeonpremVmwareClusterTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_policy: googleGkeonpremVmwareClusterUpgradePolicyToTerraform(this._upgradePolicy.internalValue),
      vcenter: googleGkeonpremVmwareClusterVcenterToTerraform(this._vcenter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_cluster_membership: {
        value: cdktf.stringToHclTerraform(this._adminClusterMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_bundled_ingress: {
        value: cdktf.booleanToHclTerraform(this._disableBundledIngress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_control_plane_v2: {
        value: cdktf.booleanToHclTerraform(this._enableControlPlaneV2),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      on_prem_version: {
        value: cdktf.stringToHclTerraform(this._onPremVersion),
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
      vm_tracking_enabled: {
        value: cdktf.booleanToHclTerraform(this._vmTrackingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anti_affinity_groups: {
        value: googleGkeonpremVmwareClusterAntiAffinityGroupsToHclTerraform(this._antiAffinityGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterAntiAffinityGroupsList",
      },
      authorization: {
        value: googleGkeonpremVmwareClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterAuthorizationList",
      },
      auto_repair_config: {
        value: googleGkeonpremVmwareClusterAutoRepairConfigToHclTerraform(this._autoRepairConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterAutoRepairConfigList",
      },
      control_plane_node: {
        value: googleGkeonpremVmwareClusterControlPlaneNodeToHclTerraform(this._controlPlaneNode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterControlPlaneNodeList",
      },
      dataplane_v2: {
        value: googleGkeonpremVmwareClusterDataplaneV2ToHclTerraform(this._dataplaneV2.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterDataplaneV2List",
      },
      load_balancer: {
        value: googleGkeonpremVmwareClusterLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterLoadBalancerList",
      },
      network_config: {
        value: googleGkeonpremVmwareClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterNetworkConfigList",
      },
      storage: {
        value: googleGkeonpremVmwareClusterStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterStorageList",
      },
      timeouts: {
        value: googleGkeonpremVmwareClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleGkeonpremVmwareClusterTimeouts",
      },
      upgrade_policy: {
        value: googleGkeonpremVmwareClusterUpgradePolicyToHclTerraform(this._upgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterUpgradePolicyList",
      },
      vcenter: {
        value: googleGkeonpremVmwareClusterVcenterToHclTerraform(this._vcenter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeonpremVmwareClusterVcenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
