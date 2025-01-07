/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleClouddeployTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#annotations GoogleClouddeployTarget#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Optional. The deploy parameters to use for this target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#deploy_parameters GoogleClouddeployTarget#deploy_parameters}
  */
  readonly deployParameters?: { [key: string]: string };
  /**
  * Optional. Description of the `Target`. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#description GoogleClouddeployTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#id GoogleClouddeployTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#labels GoogleClouddeployTarget#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}
  */
  readonly location: string;
  /**
  * Name of the `Target`. Format is `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#name GoogleClouddeployTarget#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#project GoogleClouddeployTarget#project}
  */
  readonly project?: string;
  /**
  * Optional. Whether or not the `Target` requires approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#require_approval GoogleClouddeployTarget#require_approval}
  */
  readonly requireApproval?: boolean | cdktf.IResolvable;
  /**
  * anthos_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#anthos_cluster GoogleClouddeployTarget#anthos_cluster}
  */
  readonly anthosCluster?: GoogleClouddeployTargetAnthosCluster;
  /**
  * associated_entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#associated_entities GoogleClouddeployTarget#associated_entities}
  */
  readonly associatedEntities?: GoogleClouddeployTargetAssociatedEntities[] | cdktf.IResolvable;
  /**
  * custom_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#custom_target GoogleClouddeployTarget#custom_target}
  */
  readonly customTarget?: GoogleClouddeployTargetCustomTarget;
  /**
  * execution_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#execution_configs GoogleClouddeployTarget#execution_configs}
  */
  readonly executionConfigs?: GoogleClouddeployTargetExecutionConfigs[] | cdktf.IResolvable;
  /**
  * gke block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#gke GoogleClouddeployTarget#gke}
  */
  readonly gke?: GoogleClouddeployTargetGke;
  /**
  * multi_target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#multi_target GoogleClouddeployTarget#multi_target}
  */
  readonly multiTarget?: GoogleClouddeployTargetMultiTarget;
  /**
  * run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#run GoogleClouddeployTarget#run}
  */
  readonly run?: GoogleClouddeployTargetRun;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#timeouts GoogleClouddeployTarget#timeouts}
  */
  readonly timeouts?: GoogleClouddeployTargetTimeouts;
}
export interface GoogleClouddeployTargetAnthosCluster {
  /**
  * Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}
  */
  readonly membership?: string;
}

export function googleClouddeployTargetAnthosClusterToTerraform(struct?: GoogleClouddeployTargetAnthosClusterOutputReference | GoogleClouddeployTargetAnthosCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    membership: cdktf.stringToTerraform(struct!.membership),
  }
}


export function googleClouddeployTargetAnthosClusterToHclTerraform(struct?: GoogleClouddeployTargetAnthosClusterOutputReference | GoogleClouddeployTargetAnthosCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    membership: {
      value: cdktf.stringToHclTerraform(struct!.membership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetAnthosClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployTargetAnthosCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._membership !== undefined) {
      hasAnyValues = true;
      internalValueResult.membership = this._membership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetAnthosCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._membership = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._membership = value.membership;
    }
  }

  // membership - computed: false, optional: true, required: false
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  public resetMembership() {
    this._membership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }
}
export interface GoogleClouddeployTargetAssociatedEntitiesAnthosClusters {
  /**
  * Optional. Membership of the GKE Hub-registered cluster to which to apply the Skaffold configuration. Format is `projects/{project}/locations/{location}/memberships/{membership_name}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#membership GoogleClouddeployTarget#membership}
  */
  readonly membership?: string;
}

export function googleClouddeployTargetAssociatedEntitiesAnthosClustersToTerraform(struct?: GoogleClouddeployTargetAssociatedEntitiesAnthosClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    membership: cdktf.stringToTerraform(struct!.membership),
  }
}


export function googleClouddeployTargetAssociatedEntitiesAnthosClustersToHclTerraform(struct?: GoogleClouddeployTargetAssociatedEntitiesAnthosClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    membership: {
      value: cdktf.stringToHclTerraform(struct!.membership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployTargetAssociatedEntitiesAnthosClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._membership !== undefined) {
      hasAnyValues = true;
      internalValueResult.membership = this._membership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetAssociatedEntitiesAnthosClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._membership = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._membership = value.membership;
    }
  }

  // membership - computed: false, optional: true, required: false
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  public resetMembership() {
    this._membership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }
}

export class GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference {
    return new GoogleClouddeployTargetAssociatedEntitiesAnthosClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployTargetAssociatedEntitiesGkeClusters {
  /**
  * Optional. Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}
  */
  readonly cluster?: string;
  /**
  * Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}
  */
  readonly internalIp?: boolean | cdktf.IResolvable;
  /**
  * Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}
  */
  readonly proxyUrl?: string;
}

export function googleClouddeployTargetAssociatedEntitiesGkeClustersToTerraform(struct?: GoogleClouddeployTargetAssociatedEntitiesGkeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    internal_ip: cdktf.booleanToTerraform(struct!.internalIp),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
  }
}


export function googleClouddeployTargetAssociatedEntitiesGkeClustersToHclTerraform(struct?: GoogleClouddeployTargetAssociatedEntitiesGkeClusters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_ip: {
      value: cdktf.booleanToHclTerraform(struct!.internalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployTargetAssociatedEntitiesGkeClusters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetAssociatedEntitiesGkeClusters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._internalIp = undefined;
      this._proxyUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._internalIp = value.internalIp;
      this._proxyUrl = value.proxyUrl;
    }
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

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: boolean | cdktf.IResolvable; 
  public get internalIp() {
    return this.getBooleanAttribute('internal_ip');
  }
  public set internalIp(value: boolean | cdktf.IResolvable) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }
}

export class GoogleClouddeployTargetAssociatedEntitiesGkeClustersList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployTargetAssociatedEntitiesGkeClusters[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference {
    return new GoogleClouddeployTargetAssociatedEntitiesGkeClustersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployTargetAssociatedEntities {
  /**
  * The name for the key in the map for which this object is mapped to in the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#entity_id GoogleClouddeployTarget#entity_id}
  */
  readonly entityId: string;
  /**
  * anthos_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#anthos_clusters GoogleClouddeployTarget#anthos_clusters}
  */
  readonly anthosClusters?: GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[] | cdktf.IResolvable;
  /**
  * gke_clusters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#gke_clusters GoogleClouddeployTarget#gke_clusters}
  */
  readonly gkeClusters?: GoogleClouddeployTargetAssociatedEntitiesGkeClusters[] | cdktf.IResolvable;
}

export function googleClouddeployTargetAssociatedEntitiesToTerraform(struct?: GoogleClouddeployTargetAssociatedEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    anthos_clusters: cdktf.listMapper(googleClouddeployTargetAssociatedEntitiesAnthosClustersToTerraform, true)(struct!.anthosClusters),
    gke_clusters: cdktf.listMapper(googleClouddeployTargetAssociatedEntitiesGkeClustersToTerraform, true)(struct!.gkeClusters),
  }
}


export function googleClouddeployTargetAssociatedEntitiesToHclTerraform(struct?: GoogleClouddeployTargetAssociatedEntities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anthos_clusters: {
      value: cdktf.listMapperHcl(googleClouddeployTargetAssociatedEntitiesAnthosClustersToHclTerraform, true)(struct!.anthosClusters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList",
    },
    gke_clusters: {
      value: cdktf.listMapperHcl(googleClouddeployTargetAssociatedEntitiesGkeClustersToHclTerraform, true)(struct!.gkeClusters),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleClouddeployTargetAssociatedEntitiesGkeClustersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetAssociatedEntitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployTargetAssociatedEntities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._anthosClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.anthosClusters = this._anthosClusters?.internalValue;
    }
    if (this._gkeClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeClusters = this._gkeClusters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetAssociatedEntities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityId = undefined;
      this._anthosClusters.internalValue = undefined;
      this._gkeClusters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityId = value.entityId;
      this._anthosClusters.internalValue = value.anthosClusters;
      this._gkeClusters.internalValue = value.gkeClusters;
    }
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // anthos_clusters - computed: false, optional: true, required: false
  private _anthosClusters = new GoogleClouddeployTargetAssociatedEntitiesAnthosClustersList(this, "anthos_clusters", false);
  public get anthosClusters() {
    return this._anthosClusters;
  }
  public putAnthosClusters(value: GoogleClouddeployTargetAssociatedEntitiesAnthosClusters[] | cdktf.IResolvable) {
    this._anthosClusters.internalValue = value;
  }
  public resetAnthosClusters() {
    this._anthosClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthosClustersInput() {
    return this._anthosClusters.internalValue;
  }

  // gke_clusters - computed: false, optional: true, required: false
  private _gkeClusters = new GoogleClouddeployTargetAssociatedEntitiesGkeClustersList(this, "gke_clusters", false);
  public get gkeClusters() {
    return this._gkeClusters;
  }
  public putGkeClusters(value: GoogleClouddeployTargetAssociatedEntitiesGkeClusters[] | cdktf.IResolvable) {
    this._gkeClusters.internalValue = value;
  }
  public resetGkeClusters() {
    this._gkeClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClustersInput() {
    return this._gkeClusters.internalValue;
  }
}

export class GoogleClouddeployTargetAssociatedEntitiesList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployTargetAssociatedEntities[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployTargetAssociatedEntitiesOutputReference {
    return new GoogleClouddeployTargetAssociatedEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployTargetCustomTarget {
  /**
  * Required. The name of the CustomTargetType. Format must be `projects/{project}/locations/{location}/customTargetTypes/{custom_target_type}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#custom_target_type GoogleClouddeployTarget#custom_target_type}
  */
  readonly customTargetType: string;
}

export function googleClouddeployTargetCustomTargetToTerraform(struct?: GoogleClouddeployTargetCustomTargetOutputReference | GoogleClouddeployTargetCustomTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_target_type: cdktf.stringToTerraform(struct!.customTargetType),
  }
}


export function googleClouddeployTargetCustomTargetToHclTerraform(struct?: GoogleClouddeployTargetCustomTargetOutputReference | GoogleClouddeployTargetCustomTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_target_type: {
      value: cdktf.stringToHclTerraform(struct!.customTargetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetCustomTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployTargetCustomTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customTargetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTargetType = this._customTargetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetCustomTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customTargetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customTargetType = value.customTargetType;
    }
  }

  // custom_target_type - computed: false, optional: false, required: true
  private _customTargetType?: string; 
  public get customTargetType() {
    return this.getStringAttribute('custom_target_type');
  }
  public set customTargetType(value: string) {
    this._customTargetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customTargetTypeInput() {
    return this._customTargetType;
  }
}
export interface GoogleClouddeployTargetExecutionConfigs {
  /**
  * Optional. Cloud Storage location in which to store execution outputs. This can either be a bucket ("gs://my-bucket") or a path within a bucket ("gs://my-bucket/my-dir"). If unspecified, a default bucket located in the same region will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#artifact_storage GoogleClouddeployTarget#artifact_storage}
  */
  readonly artifactStorage?: string;
  /**
  * Optional. Execution timeout for a Cloud Build Execution. This must be between 10m and 24h in seconds format. If unspecified, a default timeout of 1h is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#execution_timeout GoogleClouddeployTarget#execution_timeout}
  */
  readonly executionTimeout?: string;
  /**
  * Optional. Google service account to use for execution. If unspecified, the project execution service account (-compute@developer.gserviceaccount.com) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#service_account GoogleClouddeployTarget#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Required. Usages when this configuration should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#usages GoogleClouddeployTarget#usages}
  */
  readonly usages: string[];
  /**
  * Optional. If true, additional logging will be enabled when running builds in this execution environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#verbose GoogleClouddeployTarget#verbose}
  */
  readonly verbose?: boolean | cdktf.IResolvable;
  /**
  * Optional. The resource name of the `WorkerPool`, with the format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. If this optional field is unspecified, the default Cloud Build pool will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#worker_pool GoogleClouddeployTarget#worker_pool}
  */
  readonly workerPool?: string;
}

export function googleClouddeployTargetExecutionConfigsToTerraform(struct?: GoogleClouddeployTargetExecutionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_storage: cdktf.stringToTerraform(struct!.artifactStorage),
    execution_timeout: cdktf.stringToTerraform(struct!.executionTimeout),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    usages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usages),
    verbose: cdktf.booleanToTerraform(struct!.verbose),
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
  }
}


export function googleClouddeployTargetExecutionConfigsToHclTerraform(struct?: GoogleClouddeployTargetExecutionConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_storage: {
      value: cdktf.stringToHclTerraform(struct!.artifactStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_timeout: {
      value: cdktf.stringToHclTerraform(struct!.executionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verbose: {
      value: cdktf.booleanToHclTerraform(struct!.verbose),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    worker_pool: {
      value: cdktf.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetExecutionConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleClouddeployTargetExecutionConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactStorage = this._artifactStorage;
    }
    if (this._executionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionTimeout = this._executionTimeout;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    if (this._verbose !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbose = this._verbose;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetExecutionConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactStorage = undefined;
      this._executionTimeout = undefined;
      this._serviceAccount = undefined;
      this._usages = undefined;
      this._verbose = undefined;
      this._workerPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactStorage = value.artifactStorage;
      this._executionTimeout = value.executionTimeout;
      this._serviceAccount = value.serviceAccount;
      this._usages = value.usages;
      this._verbose = value.verbose;
      this._workerPool = value.workerPool;
    }
  }

  // artifact_storage - computed: true, optional: true, required: false
  private _artifactStorage?: string; 
  public get artifactStorage() {
    return this.getStringAttribute('artifact_storage');
  }
  public set artifactStorage(value: string) {
    this._artifactStorage = value;
  }
  public resetArtifactStorage() {
    this._artifactStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactStorageInput() {
    return this._artifactStorage;
  }

  // execution_timeout - computed: true, optional: true, required: false
  private _executionTimeout?: string; 
  public get executionTimeout() {
    return this.getStringAttribute('execution_timeout');
  }
  public set executionTimeout(value: string) {
    this._executionTimeout = value;
  }
  public resetExecutionTimeout() {
    this._executionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTimeoutInput() {
    return this._executionTimeout;
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

  // usages - computed: false, optional: false, required: true
  private _usages?: string[]; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: boolean | cdktf.IResolvable; 
  public get verbose() {
    return this.getBooleanAttribute('verbose');
  }
  public set verbose(value: boolean | cdktf.IResolvable) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }
}

export class GoogleClouddeployTargetExecutionConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleClouddeployTargetExecutionConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleClouddeployTargetExecutionConfigsOutputReference {
    return new GoogleClouddeployTargetExecutionConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleClouddeployTargetGke {
  /**
  * Information specifying a GKE Cluster. Format is `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#cluster GoogleClouddeployTarget#cluster}
  */
  readonly cluster?: string;
  /**
  * Optional. If true, `cluster` is accessed using the private IP address of the control plane endpoint. Otherwise, the default IP address of the control plane endpoint is used. The default IP address is the private IP address for clusters with private control-plane endpoints and the public IP address otherwise. Only specify this option when `cluster` is a [private GKE cluster](https://cloud.google.com/kubernetes-engine/docs/concepts/private-cluster-concept).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#internal_ip GoogleClouddeployTarget#internal_ip}
  */
  readonly internalIp?: boolean | cdktf.IResolvable;
  /**
  * Optional. If set, used to configure a [proxy](https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#proxy) to the Kubernetes server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#proxy_url GoogleClouddeployTarget#proxy_url}
  */
  readonly proxyUrl?: string;
}

export function googleClouddeployTargetGkeToTerraform(struct?: GoogleClouddeployTargetGkeOutputReference | GoogleClouddeployTargetGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    internal_ip: cdktf.booleanToTerraform(struct!.internalIp),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
  }
}


export function googleClouddeployTargetGkeToHclTerraform(struct?: GoogleClouddeployTargetGkeOutputReference | GoogleClouddeployTargetGke): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internal_ip: {
      value: cdktf.booleanToHclTerraform(struct!.internalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetGkeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployTargetGke | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetGke | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
      this._internalIp = undefined;
      this._proxyUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
      this._internalIp = value.internalIp;
      this._proxyUrl = value.proxyUrl;
    }
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

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: boolean | cdktf.IResolvable; 
  public get internalIp() {
    return this.getBooleanAttribute('internal_ip');
  }
  public set internalIp(value: boolean | cdktf.IResolvable) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }
}
export interface GoogleClouddeployTargetMultiTarget {
  /**
  * Required. The target_ids of this multiTarget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#target_ids GoogleClouddeployTarget#target_ids}
  */
  readonly targetIds: string[];
}

export function googleClouddeployTargetMultiTargetToTerraform(struct?: GoogleClouddeployTargetMultiTargetOutputReference | GoogleClouddeployTargetMultiTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetIds),
  }
}


export function googleClouddeployTargetMultiTargetToHclTerraform(struct?: GoogleClouddeployTargetMultiTargetOutputReference | GoogleClouddeployTargetMultiTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetMultiTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployTargetMultiTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetIds = this._targetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetMultiTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetIds = value.targetIds;
    }
  }

  // target_ids - computed: false, optional: false, required: true
  private _targetIds?: string[]; 
  public get targetIds() {
    return this.getListAttribute('target_ids');
  }
  public set targetIds(value: string[]) {
    this._targetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdsInput() {
    return this._targetIds;
  }
}
export interface GoogleClouddeployTargetRun {
  /**
  * Required. The location where the Cloud Run Service should be located. Format is `projects/{project}/locations/{location}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#location GoogleClouddeployTarget#location}
  */
  readonly location: string;
}

export function googleClouddeployTargetRunToTerraform(struct?: GoogleClouddeployTargetRunOutputReference | GoogleClouddeployTargetRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function googleClouddeployTargetRunToHclTerraform(struct?: GoogleClouddeployTargetRunOutputReference | GoogleClouddeployTargetRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleClouddeployTargetRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleClouddeployTargetRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleClouddeployTargetRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
    }
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
}
export interface GoogleClouddeployTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#create GoogleClouddeployTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#delete GoogleClouddeployTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#update GoogleClouddeployTarget#update}
  */
  readonly update?: string;
}

export function googleClouddeployTargetTimeoutsToTerraform(struct?: GoogleClouddeployTargetTimeouts | cdktf.IResolvable): any {
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


export function googleClouddeployTargetTimeoutsToHclTerraform(struct?: GoogleClouddeployTargetTimeouts | cdktf.IResolvable): any {
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

export class GoogleClouddeployTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleClouddeployTargetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleClouddeployTargetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target google_clouddeploy_target}
*/
export class GoogleClouddeployTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleClouddeployTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleClouddeployTarget to import
  * @param importFromId The id of the existing GoogleClouddeployTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleClouddeployTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_clouddeploy_target google_clouddeploy_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleClouddeployTargetConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleClouddeployTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_target',
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
    this._annotations = config.annotations;
    this._deployParameters = config.deployParameters;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._requireApproval = config.requireApproval;
    this._anthosCluster.internalValue = config.anthosCluster;
    this._associatedEntities.internalValue = config.associatedEntities;
    this._customTarget.internalValue = config.customTarget;
    this._executionConfigs.internalValue = config.executionConfigs;
    this._gke.internalValue = config.gke;
    this._multiTarget.internalValue = config.multiTarget;
    this._run.internalValue = config.run;
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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deploy_parameters - computed: false, optional: true, required: false
  private _deployParameters?: { [key: string]: string }; 
  public get deployParameters() {
    return this.getStringMapAttribute('deploy_parameters');
  }
  public set deployParameters(value: { [key: string]: string }) {
    this._deployParameters = value;
  }
  public resetDeployParameters() {
    this._deployParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParametersInput() {
    return this._deployParameters;
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

  // require_approval - computed: false, optional: true, required: false
  private _requireApproval?: boolean | cdktf.IResolvable; 
  public get requireApproval() {
    return this.getBooleanAttribute('require_approval');
  }
  public set requireApproval(value: boolean | cdktf.IResolvable) {
    this._requireApproval = value;
  }
  public resetRequireApproval() {
    this._requireApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApprovalInput() {
    return this._requireApproval;
  }

  // target_id - computed: true, optional: false, required: false
  public get targetId() {
    return this.getStringAttribute('target_id');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // anthos_cluster - computed: false, optional: true, required: false
  private _anthosCluster = new GoogleClouddeployTargetAnthosClusterOutputReference(this, "anthos_cluster");
  public get anthosCluster() {
    return this._anthosCluster;
  }
  public putAnthosCluster(value: GoogleClouddeployTargetAnthosCluster) {
    this._anthosCluster.internalValue = value;
  }
  public resetAnthosCluster() {
    this._anthosCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anthosClusterInput() {
    return this._anthosCluster.internalValue;
  }

  // associated_entities - computed: false, optional: true, required: false
  private _associatedEntities = new GoogleClouddeployTargetAssociatedEntitiesList(this, "associated_entities", true);
  public get associatedEntities() {
    return this._associatedEntities;
  }
  public putAssociatedEntities(value: GoogleClouddeployTargetAssociatedEntities[] | cdktf.IResolvable) {
    this._associatedEntities.internalValue = value;
  }
  public resetAssociatedEntities() {
    this._associatedEntities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedEntitiesInput() {
    return this._associatedEntities.internalValue;
  }

  // custom_target - computed: false, optional: true, required: false
  private _customTarget = new GoogleClouddeployTargetCustomTargetOutputReference(this, "custom_target");
  public get customTarget() {
    return this._customTarget;
  }
  public putCustomTarget(value: GoogleClouddeployTargetCustomTarget) {
    this._customTarget.internalValue = value;
  }
  public resetCustomTarget() {
    this._customTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTargetInput() {
    return this._customTarget.internalValue;
  }

  // execution_configs - computed: false, optional: true, required: false
  private _executionConfigs = new GoogleClouddeployTargetExecutionConfigsList(this, "execution_configs", false);
  public get executionConfigs() {
    return this._executionConfigs;
  }
  public putExecutionConfigs(value: GoogleClouddeployTargetExecutionConfigs[] | cdktf.IResolvable) {
    this._executionConfigs.internalValue = value;
  }
  public resetExecutionConfigs() {
    this._executionConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionConfigsInput() {
    return this._executionConfigs.internalValue;
  }

  // gke - computed: false, optional: true, required: false
  private _gke = new GoogleClouddeployTargetGkeOutputReference(this, "gke");
  public get gke() {
    return this._gke;
  }
  public putGke(value: GoogleClouddeployTargetGke) {
    this._gke.internalValue = value;
  }
  public resetGke() {
    this._gke.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeInput() {
    return this._gke.internalValue;
  }

  // multi_target - computed: false, optional: true, required: false
  private _multiTarget = new GoogleClouddeployTargetMultiTargetOutputReference(this, "multi_target");
  public get multiTarget() {
    return this._multiTarget;
  }
  public putMultiTarget(value: GoogleClouddeployTargetMultiTarget) {
    this._multiTarget.internalValue = value;
  }
  public resetMultiTarget() {
    this._multiTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiTargetInput() {
    return this._multiTarget.internalValue;
  }

  // run - computed: false, optional: true, required: false
  private _run = new GoogleClouddeployTargetRunOutputReference(this, "run");
  public get run() {
    return this._run;
  }
  public putRun(value: GoogleClouddeployTargetRun) {
    this._run.internalValue = value;
  }
  public resetRun() {
    this._run.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runInput() {
    return this._run.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleClouddeployTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleClouddeployTargetTimeouts) {
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
      deploy_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._deployParameters),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      require_approval: cdktf.booleanToTerraform(this._requireApproval),
      anthos_cluster: googleClouddeployTargetAnthosClusterToTerraform(this._anthosCluster.internalValue),
      associated_entities: cdktf.listMapper(googleClouddeployTargetAssociatedEntitiesToTerraform, true)(this._associatedEntities.internalValue),
      custom_target: googleClouddeployTargetCustomTargetToTerraform(this._customTarget.internalValue),
      execution_configs: cdktf.listMapper(googleClouddeployTargetExecutionConfigsToTerraform, true)(this._executionConfigs.internalValue),
      gke: googleClouddeployTargetGkeToTerraform(this._gke.internalValue),
      multi_target: googleClouddeployTargetMultiTargetToTerraform(this._multiTarget.internalValue),
      run: googleClouddeployTargetRunToTerraform(this._run.internalValue),
      timeouts: googleClouddeployTargetTimeoutsToTerraform(this._timeouts.internalValue),
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
      deploy_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._deployParameters),
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
      require_approval: {
        value: cdktf.booleanToHclTerraform(this._requireApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anthos_cluster: {
        value: googleClouddeployTargetAnthosClusterToHclTerraform(this._anthosCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployTargetAnthosClusterList",
      },
      associated_entities: {
        value: cdktf.listMapperHcl(googleClouddeployTargetAssociatedEntitiesToHclTerraform, true)(this._associatedEntities.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GoogleClouddeployTargetAssociatedEntitiesList",
      },
      custom_target: {
        value: googleClouddeployTargetCustomTargetToHclTerraform(this._customTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployTargetCustomTargetList",
      },
      execution_configs: {
        value: cdktf.listMapperHcl(googleClouddeployTargetExecutionConfigsToHclTerraform, true)(this._executionConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployTargetExecutionConfigsList",
      },
      gke: {
        value: googleClouddeployTargetGkeToHclTerraform(this._gke.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployTargetGkeList",
      },
      multi_target: {
        value: googleClouddeployTargetMultiTargetToHclTerraform(this._multiTarget.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployTargetMultiTargetList",
      },
      run: {
        value: googleClouddeployTargetRunToHclTerraform(this._run.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleClouddeployTargetRunList",
      },
      timeouts: {
        value: googleClouddeployTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleClouddeployTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
