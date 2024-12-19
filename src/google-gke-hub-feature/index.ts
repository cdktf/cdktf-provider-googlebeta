/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeHubFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * GCP labels for this Feature.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#labels GoogleGkeHubFeature#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#location GoogleGkeHubFeature#location}
  */
  readonly location: string;
  /**
  * The full, unique name of this Feature resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#name GoogleGkeHubFeature#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}
  */
  readonly project?: string;
  /**
  * fleet_default_member_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#fleet_default_member_config GoogleGkeHubFeature#fleet_default_member_config}
  */
  readonly fleetDefaultMemberConfig?: GoogleGkeHubFeatureFleetDefaultMemberConfig;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#spec GoogleGkeHubFeature#spec}
  */
  readonly spec?: GoogleGkeHubFeatureSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#timeouts GoogleGkeHubFeature#timeouts}
  */
  readonly timeouts?: GoogleGkeHubFeatureTimeouts;
}
export interface GoogleGkeHubFeatureResourceState {
}

export function googleGkeHubFeatureResourceStateToTerraform(struct?: GoogleGkeHubFeatureResourceState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeHubFeatureResourceStateToHclTerraform(struct?: GoogleGkeHubFeatureResourceState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeHubFeatureResourceStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureResourceState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureResourceState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_resources - computed: true, optional: false, required: false
  public get hasResources() {
    return this.getBooleanAttribute('has_resources');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class GoogleGkeHubFeatureResourceStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeHubFeatureResourceStateOutputReference {
    return new GoogleGkeHubFeatureResourceStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureStateState {
}

export function googleGkeHubFeatureStateStateToTerraform(struct?: GoogleGkeHubFeatureStateState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeHubFeatureStateStateToHclTerraform(struct?: GoogleGkeHubFeatureStateState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeHubFeatureStateStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureStateState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureStateState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleGkeHubFeatureStateStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeHubFeatureStateStateOutputReference {
    return new GoogleGkeHubFeatureStateStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureState {
}

export function googleGkeHubFeatureStateToTerraform(struct?: GoogleGkeHubFeatureState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleGkeHubFeatureStateToHclTerraform(struct?: GoogleGkeHubFeatureState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleGkeHubFeatureStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // state - computed: true, optional: false, required: false
  private _state = new GoogleGkeHubFeatureStateStateList(this, "state", false);
  public get state() {
    return this._state;
  }
}

export class GoogleGkeHubFeatureStateList extends cdktf.ComplexList {

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
  public get(index: number): GoogleGkeHubFeatureStateOutputReference {
    return new GoogleGkeHubFeatureStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit {
  /**
  * The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * URL for the HTTPS Proxy to be used when communicating with the Git repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#https_proxy GoogleGkeHubFeature#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The path within the Git repository that represents the top level of the repo to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the Git repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}
  */
  readonly secretType: string;
  /**
  * The branch of the repository to sync from. Default: master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#sync_branch GoogleGkeHubFeature#sync_branch}
  */
  readonly syncBranch?: string;
  /**
  * The URL of the Git repository to use as the source of truth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Git revision (tag or hash) to check out. Default HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#sync_rev GoogleGkeHubFeature#sync_rev}
  */
  readonly syncRev?: string;
  /**
  * Period in seconds between consecutive syncs. Default: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    policy_dir: cdktf.stringToTerraform(struct!.policyDir),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    sync_branch: cdktf.stringToTerraform(struct!.syncBranch),
    sync_repo: cdktf.stringToTerraform(struct!.syncRepo),
    sync_rev: cdktf.stringToTerraform(struct!.syncRev),
    sync_wait_secs: cdktf.stringToTerraform(struct!.syncWaitSecs),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_dir: {
      value: cdktf.stringToHclTerraform(struct!.policyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_type: {
      value: cdktf.stringToHclTerraform(struct!.secretType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_branch: {
      value: cdktf.stringToHclTerraform(struct!.syncBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_repo: {
      value: cdktf.stringToHclTerraform(struct!.syncRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_rev: {
      value: cdktf.stringToHclTerraform(struct!.syncRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_wait_secs: {
      value: cdktf.stringToHclTerraform(struct!.syncWaitSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._policyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDir = this._policyDir;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._syncBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncBranch = this._syncBranch;
    }
    if (this._syncRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRepo = this._syncRepo;
    }
    if (this._syncRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRev = this._syncRev;
    }
    if (this._syncWaitSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWaitSecs = this._syncWaitSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpServiceAccountEmail = undefined;
      this._httpsProxy = undefined;
      this._policyDir = undefined;
      this._secretType = undefined;
      this._syncBranch = undefined;
      this._syncRepo = undefined;
      this._syncRev = undefined;
      this._syncWaitSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._httpsProxy = value.httpsProxy;
      this._policyDir = value.policyDir;
      this._secretType = value.secretType;
      this._syncBranch = value.syncBranch;
      this._syncRepo = value.syncRepo;
      this._syncRev = value.syncRev;
      this._syncWaitSecs = value.syncWaitSecs;
    }
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // policy_dir - computed: false, optional: true, required: false
  private _policyDir?: string; 
  public get policyDir() {
    return this.getStringAttribute('policy_dir');
  }
  public set policyDir(value: string) {
    this._policyDir = value;
  }
  public resetPolicyDir() {
    this._policyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDirInput() {
    return this._policyDir;
  }

  // secret_type - computed: false, optional: false, required: true
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // sync_branch - computed: false, optional: true, required: false
  private _syncBranch?: string; 
  public get syncBranch() {
    return this.getStringAttribute('sync_branch');
  }
  public set syncBranch(value: string) {
    this._syncBranch = value;
  }
  public resetSyncBranch() {
    this._syncBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncBranchInput() {
    return this._syncBranch;
  }

  // sync_repo - computed: false, optional: true, required: false
  private _syncRepo?: string; 
  public get syncRepo() {
    return this.getStringAttribute('sync_repo');
  }
  public set syncRepo(value: string) {
    this._syncRepo = value;
  }
  public resetSyncRepo() {
    this._syncRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRepoInput() {
    return this._syncRepo;
  }

  // sync_rev - computed: false, optional: true, required: false
  private _syncRev?: string; 
  public get syncRev() {
    return this.getStringAttribute('sync_rev');
  }
  public set syncRev(value: string) {
    this._syncRev = value;
  }
  public resetSyncRev() {
    this._syncRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRevInput() {
    return this._syncRev;
  }

  // sync_wait_secs - computed: false, optional: true, required: false
  private _syncWaitSecs?: string; 
  public get syncWaitSecs() {
    return this.getStringAttribute('sync_wait_secs');
  }
  public set syncWaitSecs(value: string) {
    this._syncWaitSecs = value;
  }
  public resetSyncWaitSecs() {
    this._syncWaitSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWaitSecsInput() {
    return this._syncWaitSecs;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci {
  /**
  * The Google Cloud Service Account Email used for auth when secretType is gcpServiceAccount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * The absolute path of the directory that contains the local resources. Default: the root directory of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the Git repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}
  */
  readonly secretType: string;
  /**
  * The OCI image repository URL for the package to sync from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Period in seconds between consecutive syncs. Default: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
  /**
  * Version of Config Sync installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}
  */
  readonly version?: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    policy_dir: cdktf.stringToTerraform(struct!.policyDir),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    sync_repo: cdktf.stringToTerraform(struct!.syncRepo),
    sync_wait_secs: cdktf.stringToTerraform(struct!.syncWaitSecs),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_dir: {
      value: cdktf.stringToHclTerraform(struct!.policyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_type: {
      value: cdktf.stringToHclTerraform(struct!.secretType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_repo: {
      value: cdktf.stringToHclTerraform(struct!.syncRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_wait_secs: {
      value: cdktf.stringToHclTerraform(struct!.syncWaitSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._policyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDir = this._policyDir;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._syncRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRepo = this._syncRepo;
    }
    if (this._syncWaitSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWaitSecs = this._syncWaitSecs;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpServiceAccountEmail = undefined;
      this._policyDir = undefined;
      this._secretType = undefined;
      this._syncRepo = undefined;
      this._syncWaitSecs = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._policyDir = value.policyDir;
      this._secretType = value.secretType;
      this._syncRepo = value.syncRepo;
      this._syncWaitSecs = value.syncWaitSecs;
      this._version = value.version;
    }
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // policy_dir - computed: false, optional: true, required: false
  private _policyDir?: string; 
  public get policyDir() {
    return this.getStringAttribute('policy_dir');
  }
  public set policyDir(value: string) {
    this._policyDir = value;
  }
  public resetPolicyDir() {
    this._policyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDirInput() {
    return this._policyDir;
  }

  // secret_type - computed: false, optional: false, required: true
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // sync_repo - computed: false, optional: true, required: false
  private _syncRepo?: string; 
  public get syncRepo() {
    return this.getStringAttribute('sync_repo');
  }
  public set syncRepo(value: string) {
    this._syncRepo = value;
  }
  public resetSyncRepo() {
    this._syncRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRepoInput() {
    return this._syncRepo;
  }

  // sync_wait_secs - computed: false, optional: true, required: false
  private _syncWaitSecs?: string; 
  public get syncWaitSecs() {
    return this.getStringAttribute('sync_wait_secs');
  }
  public set syncWaitSecs(value: string) {
    this._syncWaitSecs = value;
  }
  public resetSyncWaitSecs() {
    this._syncWaitSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWaitSecsInput() {
    return this._syncWaitSecs;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync {
  /**
  * Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#enabled GoogleGkeHubFeature#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to 'false', disables the Config Sync admission webhook and does not prevent drifts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#prevent_drift GoogleGkeHubFeature#prevent_drift}
  */
  readonly preventDrift?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the Config Sync Repo is in hierarchical or unstructured mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#source_format GoogleGkeHubFeature#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#git GoogleGkeHubFeature#git}
  */
  readonly git?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit;
  /**
  * oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#oci GoogleGkeHubFeature#oci}
  */
  readonly oci?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    prevent_drift: cdktf.booleanToTerraform(struct!.preventDrift),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    git: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitToTerraform(struct!.git),
    oci: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciToTerraform(struct!.oci),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync): any {
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
    prevent_drift: {
      value: cdktf.booleanToHclTerraform(struct!.preventDrift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_format: {
      value: cdktf.stringToHclTerraform(struct!.sourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    git: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitToHclTerraform(struct!.git),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitList",
    },
    oci: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciToHclTerraform(struct!.oci),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._preventDrift !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventDrift = this._preventDrift;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._oci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oci = this._oci?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._preventDrift = undefined;
      this._sourceFormat = undefined;
      this._git.internalValue = undefined;
      this._oci.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._preventDrift = value.preventDrift;
      this._sourceFormat = value.sourceFormat;
      this._git.internalValue = value.git;
      this._oci.internalValue = value.oci;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // prevent_drift - computed: false, optional: true, required: false
  private _preventDrift?: boolean | cdktf.IResolvable; 
  public get preventDrift() {
    return this.getBooleanAttribute('prevent_drift');
  }
  public set preventDrift(value: boolean | cdktf.IResolvable) {
    this._preventDrift = value;
  }
  public resetPreventDrift() {
    this._preventDrift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDriftInput() {
    return this._preventDrift;
  }

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // git - computed: false, optional: true, required: false
  private _git = new GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // oci - computed: false, optional: true, required: false
  private _oci = new GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciOutputReference(this, "oci");
  public get oci() {
    return this._oci;
  }
  public putOci(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci) {
    this._oci.internalValue = value;
  }
  public resetOci() {
    this._oci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociInput() {
    return this._oci.internalValue;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement {
  /**
  * Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades. Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#management GoogleGkeHubFeature#management}
  */
  readonly management?: string;
  /**
  * Version of Config Sync installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}
  */
  readonly version?: string;
  /**
  * config_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#config_sync GoogleGkeHubFeature#config_sync}
  */
  readonly configSync?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management: cdktf.stringToTerraform(struct!.management),
    version: cdktf.stringToTerraform(struct!.version),
    config_sync: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncToTerraform(struct!.configSync),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management: {
      value: cdktf.stringToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_sync: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncToHclTerraform(struct!.configSync),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._configSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSync = this._configSync?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._management = undefined;
      this._version = undefined;
      this._configSync.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._management = value.management;
      this._version = value.version;
      this._configSync.internalValue = value.configSync;
    }
  }

  // management - computed: false, optional: true, required: false
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // config_sync - computed: false, optional: true, required: false
  private _configSync = new GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference(this, "config_sync");
  public get configSync() {
    return this._configSync;
  }
  public putConfigSync(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync) {
    this._configSync.internalValue = value;
  }
  public resetConfigSync() {
    this._configSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncInput() {
    return this._configSync.internalValue;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigMesh {
  /**
  * Whether to automatically manage Service Mesh Possible values: ["MANAGEMENT_UNSPECIFIED", "MANAGEMENT_AUTOMATIC", "MANAGEMENT_MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#management GoogleGkeHubFeature#management}
  */
  readonly management: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigMeshToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management: cdktf.stringToTerraform(struct!.management),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigMeshToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management: {
      value: cdktf.stringToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._management = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._management = value.management;
    }
  }

  // management - computed: false, optional: false, required: true
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits {
  /**
  * CPU requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#cpu GoogleGkeHubFeature#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#memory GoogleGkeHubFeature#memory}
  */
  readonly memory?: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests {
  /**
  * CPU requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#cpu GoogleGkeHubFeature#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#memory GoogleGkeHubFeature#memory}
  */
  readonly memory?: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources {
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#limits GoogleGkeHubFeature#limits}
  */
  readonly limits?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#requests GoogleGkeHubFeature#requests}
  */
  readonly requests?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToTerraform(struct!.limits),
    requests: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToTerraform(struct!.requests),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsList",
    },
    requests: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration {
  /**
  * Matches a taint effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#effect GoogleGkeHubFeature#effect}
  */
  readonly effect?: string;
  /**
  * Matches a taint key (not necessarily unique).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#key GoogleGkeHubFeature#key}
  */
  readonly key?: string;
  /**
  * Matches a taint operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#operator GoogleGkeHubFeature#operator}
  */
  readonly operator?: string;
  /**
  * Matches a taint value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#value GoogleGkeHubFeature#value}
  */
  readonly value?: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference {
    return new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#component GoogleGkeHubFeature#component}
  */
  readonly component: string;
  /**
  * Pod affinity configuration. Possible values: ["AFFINITY_UNSPECIFIED", "NO_AFFINITY", "ANTI_AFFINITY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#pod_affinity GoogleGkeHubFeature#pod_affinity}
  */
  readonly podAffinity?: string;
  /**
  * Pod replica count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#replica_count GoogleGkeHubFeature#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * container_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#container_resources GoogleGkeHubFeature#container_resources}
  */
  readonly containerResources?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
  /**
  * pod_toleration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#pod_toleration GoogleGkeHubFeature#pod_toleration}
  */
  readonly podToleration?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration[] | cdktf.IResolvable;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    pod_affinity: cdktf.stringToTerraform(struct!.podAffinity),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    container_resources: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToTerraform(struct!.containerResources),
    pod_toleration: cdktf.listMapper(googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationToTerraform, true)(struct!.podToleration),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_affinity: {
      value: cdktf.stringToHclTerraform(struct!.podAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_resources: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToHclTerraform(struct!.containerResources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesList",
    },
    pod_toleration: {
      value: cdktf.listMapperHcl(googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationToHclTerraform, true)(struct!.podToleration),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._containerResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResources = this._containerResources?.internalValue;
    }
    if (this._podToleration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podToleration = this._podToleration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._podAffinity = undefined;
      this._replicaCount = undefined;
      this._containerResources.internalValue = undefined;
      this._podToleration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._podAffinity = value.podAffinity;
      this._replicaCount = value.replicaCount;
      this._containerResources.internalValue = value.containerResources;
      this._podToleration.internalValue = value.podToleration;
    }
  }

  // component - computed: false, optional: false, required: true
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }

  // pod_affinity - computed: true, optional: true, required: false
  private _podAffinity?: string; 
  public get podAffinity() {
    return this.getStringAttribute('pod_affinity');
  }
  public set podAffinity(value: string) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // replica_count - computed: true, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // container_resources - computed: false, optional: true, required: false
  private _containerResources = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference(this, "container_resources");
  public get containerResources() {
    return this._containerResources;
  }
  public putContainerResources(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources) {
    this._containerResources.internalValue = value;
  }
  public resetContainerResources() {
    this._containerResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourcesInput() {
    return this._containerResources.internalValue;
  }

  // pod_toleration - computed: false, optional: true, required: false
  private _podToleration = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationList(this, "pod_toleration", false);
  public get podToleration() {
    return this._podToleration;
  }
  public putPodToleration(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodToleration[] | cdktf.IResolvable) {
    this._podToleration.internalValue = value;
  }
  public resetPodToleration() {
    this._podToleration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTolerationInput() {
    return this._podToleration.internalValue;
  }
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference {
    return new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring {
  /**
  * Specifies the list of backends Policy Controller will export to. An empty list would effectively disable metrics export. Possible values: ["MONITORING_BACKEND_UNSPECIFIED", "PROMETHEUS", "CLOUD_MONITORING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#backends GoogleGkeHubFeature#backends}
  */
  readonly backends?: string[];
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backends),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backends = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backends = value.backends;
    }
  }

  // backends - computed: true, optional: true, required: false
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  public resetBackends() {
    this._backends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#bundle GoogleGkeHubFeature#bundle}
  */
  readonly bundle: string;
  /**
  * The set of namespaces to be exempted from the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#exempted_namespaces GoogleGkeHubFeature#exempted_namespaces}
  */
  readonly exemptedNamespaces?: string[];
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle: cdktf.stringToTerraform(struct!.bundle),
    exempted_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptedNamespaces),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle: {
      value: cdktf.stringToHclTerraform(struct!.bundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempted_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exemptedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundle = this._bundle;
    }
    if (this._exemptedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptedNamespaces = this._exemptedNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundle = undefined;
      this._exemptedNamespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundle = value.bundle;
      this._exemptedNamespaces = value.exemptedNamespaces;
    }
  }

  // bundle - computed: false, optional: false, required: true
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // exempted_namespaces - computed: false, optional: true, required: false
  private _exemptedNamespaces?: string[]; 
  public get exemptedNamespaces() {
    return this.getListAttribute('exempted_namespaces');
  }
  public set exemptedNamespaces(value: string[]) {
    this._exemptedNamespaces = value;
  }
  public resetExemptedNamespaces() {
    this._exemptedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptedNamespacesInput() {
    return this._exemptedNamespaces;
  }
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference {
    return new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  /**
  * Configures the manner in which the template library is installed on the cluster. Possible values: ["INSTALLATION_UNSPECIFIED", "NOT_INSTALLED", "ALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#installation GoogleGkeHubFeature#installation}
  */
  readonly installation?: string;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    installation: cdktf.stringToTerraform(struct!.installation),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    installation: {
      value: cdktf.stringToHclTerraform(struct!.installation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installation !== undefined) {
      hasAnyValues = true;
      internalValueResult.installation = this._installation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._installation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._installation = value.installation;
    }
  }

  // installation - computed: false, optional: true, required: false
  private _installation?: string; 
  public get installation() {
    return this.getStringAttribute('installation');
  }
  public set installation(value: string) {
    this._installation = value;
  }
  public resetInstallation() {
    this._installation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationInput() {
    return this._installation;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent {
  /**
  * bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#bundles GoogleGkeHubFeature#bundles}
  */
  readonly bundles?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[] | cdktf.IResolvable;
  /**
  * template_library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#template_library GoogleGkeHubFeature#template_library}
  */
  readonly templateLibrary?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundles: cdktf.listMapper(googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToTerraform, true)(struct!.bundles),
    template_library: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToTerraform(struct!.templateLibrary),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundles: {
      value: cdktf.listMapperHcl(googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToHclTerraform, true)(struct!.bundles),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList",
    },
    template_library: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToHclTerraform(struct!.templateLibrary),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundles = this._bundles?.internalValue;
    }
    if (this._templateLibrary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLibrary = this._templateLibrary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bundles.internalValue = undefined;
      this._templateLibrary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bundles.internalValue = value.bundles;
      this._templateLibrary.internalValue = value.templateLibrary;
    }
  }

  // bundles - computed: false, optional: true, required: false
  private _bundles = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList(this, "bundles", true);
  public get bundles() {
    return this._bundles;
  }
  public putBundles(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[] | cdktf.IResolvable) {
    this._bundles.internalValue = value;
  }
  public resetBundles() {
    this._bundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesInput() {
    return this._bundles.internalValue;
  }

  // template_library - computed: false, optional: true, required: false
  private _templateLibrary = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference(this, "template_library");
  public get templateLibrary() {
    return this._templateLibrary;
  }
  public putTemplateLibrary(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary) {
    this._templateLibrary.internalValue = value;
  }
  public resetTemplateLibrary() {
    this._templateLibrary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLibraryInput() {
    return this._templateLibrary.internalValue;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig {
  /**
  * Interval for Policy Controller Audit scans (in seconds). When set to 0, this disables audit functionality altogether.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#audit_interval_seconds GoogleGkeHubFeature#audit_interval_seconds}
  */
  readonly auditIntervalSeconds?: number;
  /**
  * The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#constraint_violation_limit GoogleGkeHubFeature#constraint_violation_limit}
  */
  readonly constraintViolationLimit?: number;
  /**
  * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#exemptable_namespaces GoogleGkeHubFeature#exemptable_namespaces}
  */
  readonly exemptableNamespaces?: string[];
  /**
  * Configures the mode of the Policy Controller installation Possible values: ["INSTALL_SPEC_UNSPECIFIED", "INSTALL_SPEC_NOT_INSTALLED", "INSTALL_SPEC_ENABLED", "INSTALL_SPEC_SUSPENDED", "INSTALL_SPEC_DETACHED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#install_spec GoogleGkeHubFeature#install_spec}
  */
  readonly installSpec: string;
  /**
  * Logs all denies and dry run failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#log_denies_enabled GoogleGkeHubFeature#log_denies_enabled}
  */
  readonly logDeniesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to mutate resources using Policy Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#mutation_enabled GoogleGkeHubFeature#mutation_enabled}
  */
  readonly mutationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#referential_rules_enabled GoogleGkeHubFeature#referential_rules_enabled}
  */
  readonly referentialRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * deployment_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#deployment_configs GoogleGkeHubFeature#deployment_configs}
  */
  readonly deploymentConfigs?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[] | cdktf.IResolvable;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#monitoring GoogleGkeHubFeature#monitoring}
  */
  readonly monitoring?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring;
  /**
  * policy_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#policy_content GoogleGkeHubFeature#policy_content}
  */
  readonly policyContent?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_interval_seconds: cdktf.numberToTerraform(struct!.auditIntervalSeconds),
    constraint_violation_limit: cdktf.numberToTerraform(struct!.constraintViolationLimit),
    exemptable_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptableNamespaces),
    install_spec: cdktf.stringToTerraform(struct!.installSpec),
    log_denies_enabled: cdktf.booleanToTerraform(struct!.logDeniesEnabled),
    mutation_enabled: cdktf.booleanToTerraform(struct!.mutationEnabled),
    referential_rules_enabled: cdktf.booleanToTerraform(struct!.referentialRulesEnabled),
    deployment_configs: cdktf.listMapper(googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToTerraform, true)(struct!.deploymentConfigs),
    monitoring: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringToTerraform(struct!.monitoring),
    policy_content: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentToTerraform(struct!.policyContent),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.auditIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    constraint_violation_limit: {
      value: cdktf.numberToHclTerraform(struct!.constraintViolationLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exemptable_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exemptableNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    install_spec: {
      value: cdktf.stringToHclTerraform(struct!.installSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_denies_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.logDeniesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mutationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referential_rules_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.referentialRulesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_configs: {
      value: cdktf.listMapperHcl(googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToHclTerraform, true)(struct!.deploymentConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList",
    },
    monitoring: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringList",
    },
    policy_content: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentToHclTerraform(struct!.policyContent),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditIntervalSeconds = this._auditIntervalSeconds;
    }
    if (this._constraintViolationLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintViolationLimit = this._constraintViolationLimit;
    }
    if (this._exemptableNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptableNamespaces = this._exemptableNamespaces;
    }
    if (this._installSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.installSpec = this._installSpec;
    }
    if (this._logDeniesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeniesEnabled = this._logDeniesEnabled;
    }
    if (this._mutationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationEnabled = this._mutationEnabled;
    }
    if (this._referentialRulesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.referentialRulesEnabled = this._referentialRulesEnabled;
    }
    if (this._deploymentConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentConfigs = this._deploymentConfigs?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._policyContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyContent = this._policyContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditIntervalSeconds = undefined;
      this._constraintViolationLimit = undefined;
      this._exemptableNamespaces = undefined;
      this._installSpec = undefined;
      this._logDeniesEnabled = undefined;
      this._mutationEnabled = undefined;
      this._referentialRulesEnabled = undefined;
      this._deploymentConfigs.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._policyContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditIntervalSeconds = value.auditIntervalSeconds;
      this._constraintViolationLimit = value.constraintViolationLimit;
      this._exemptableNamespaces = value.exemptableNamespaces;
      this._installSpec = value.installSpec;
      this._logDeniesEnabled = value.logDeniesEnabled;
      this._mutationEnabled = value.mutationEnabled;
      this._referentialRulesEnabled = value.referentialRulesEnabled;
      this._deploymentConfigs.internalValue = value.deploymentConfigs;
      this._monitoring.internalValue = value.monitoring;
      this._policyContent.internalValue = value.policyContent;
    }
  }

  // audit_interval_seconds - computed: false, optional: true, required: false
  private _auditIntervalSeconds?: number; 
  public get auditIntervalSeconds() {
    return this.getNumberAttribute('audit_interval_seconds');
  }
  public set auditIntervalSeconds(value: number) {
    this._auditIntervalSeconds = value;
  }
  public resetAuditIntervalSeconds() {
    this._auditIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditIntervalSecondsInput() {
    return this._auditIntervalSeconds;
  }

  // constraint_violation_limit - computed: false, optional: true, required: false
  private _constraintViolationLimit?: number; 
  public get constraintViolationLimit() {
    return this.getNumberAttribute('constraint_violation_limit');
  }
  public set constraintViolationLimit(value: number) {
    this._constraintViolationLimit = value;
  }
  public resetConstraintViolationLimit() {
    this._constraintViolationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintViolationLimitInput() {
    return this._constraintViolationLimit;
  }

  // exemptable_namespaces - computed: false, optional: true, required: false
  private _exemptableNamespaces?: string[]; 
  public get exemptableNamespaces() {
    return this.getListAttribute('exemptable_namespaces');
  }
  public set exemptableNamespaces(value: string[]) {
    this._exemptableNamespaces = value;
  }
  public resetExemptableNamespaces() {
    this._exemptableNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptableNamespacesInput() {
    return this._exemptableNamespaces;
  }

  // install_spec - computed: false, optional: false, required: true
  private _installSpec?: string; 
  public get installSpec() {
    return this.getStringAttribute('install_spec');
  }
  public set installSpec(value: string) {
    this._installSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get installSpecInput() {
    return this._installSpec;
  }

  // log_denies_enabled - computed: false, optional: true, required: false
  private _logDeniesEnabled?: boolean | cdktf.IResolvable; 
  public get logDeniesEnabled() {
    return this.getBooleanAttribute('log_denies_enabled');
  }
  public set logDeniesEnabled(value: boolean | cdktf.IResolvable) {
    this._logDeniesEnabled = value;
  }
  public resetLogDeniesEnabled() {
    this._logDeniesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeniesEnabledInput() {
    return this._logDeniesEnabled;
  }

  // mutation_enabled - computed: false, optional: true, required: false
  private _mutationEnabled?: boolean | cdktf.IResolvable; 
  public get mutationEnabled() {
    return this.getBooleanAttribute('mutation_enabled');
  }
  public set mutationEnabled(value: boolean | cdktf.IResolvable) {
    this._mutationEnabled = value;
  }
  public resetMutationEnabled() {
    this._mutationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationEnabledInput() {
    return this._mutationEnabled;
  }

  // referential_rules_enabled - computed: false, optional: true, required: false
  private _referentialRulesEnabled?: boolean | cdktf.IResolvable; 
  public get referentialRulesEnabled() {
    return this.getBooleanAttribute('referential_rules_enabled');
  }
  public set referentialRulesEnabled(value: boolean | cdktf.IResolvable) {
    this._referentialRulesEnabled = value;
  }
  public resetReferentialRulesEnabled() {
    this._referentialRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referentialRulesEnabledInput() {
    return this._referentialRulesEnabled;
  }

  // deployment_configs - computed: false, optional: true, required: false
  private _deploymentConfigs = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList(this, "deployment_configs", true);
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }
  public putDeploymentConfigs(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[] | cdktf.IResolvable) {
    this._deploymentConfigs.internalValue = value;
  }
  public resetDeploymentConfigs() {
    this._deploymentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigsInput() {
    return this._deploymentConfigs.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // policy_content - computed: false, optional: true, required: false
  private _policyContent = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference(this, "policy_content");
  public get policyContent() {
    return this._policyContent;
  }
  public putPolicyContent(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigPolicyContent) {
    this._policyContent.internalValue = value;
  }
  public resetPolicyContent() {
    this._policyContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyContentInput() {
    return this._policyContent.internalValue;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller {
  /**
  * Configures the version of Policy Controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}
  */
  readonly version?: string;
  /**
  * policy_controller_hub_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#policy_controller_hub_config GoogleGkeHubFeature#policy_controller_hub_config}
  */
  readonly policyControllerHubConfig: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    policy_controller_hub_config: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigToTerraform(struct!.policyControllerHubConfig),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_controller_hub_config: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigToHclTerraform(struct!.policyControllerHubConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._policyControllerHubConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyControllerHubConfig = this._policyControllerHubConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
      this._policyControllerHubConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
      this._policyControllerHubConfig.internalValue = value.policyControllerHubConfig;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // policy_controller_hub_config - computed: false, optional: false, required: true
  private _policyControllerHubConfig = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfigOutputReference(this, "policy_controller_hub_config");
  public get policyControllerHubConfig() {
    return this._policyControllerHubConfig;
  }
  public putPolicyControllerHubConfig(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerPolicyControllerHubConfig) {
    this._policyControllerHubConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyControllerHubConfigInput() {
    return this._policyControllerHubConfig.internalValue;
  }
}
export interface GoogleGkeHubFeatureFleetDefaultMemberConfig {
  /**
  * configmanagement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#configmanagement GoogleGkeHubFeature#configmanagement}
  */
  readonly configmanagement?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement;
  /**
  * mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#mesh GoogleGkeHubFeature#mesh}
  */
  readonly mesh?: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh;
  /**
  * policycontroller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#policycontroller GoogleGkeHubFeature#policycontroller}
  */
  readonly policycontroller?: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configmanagement: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementToTerraform(struct!.configmanagement),
    mesh: googleGkeHubFeatureFleetDefaultMemberConfigMeshToTerraform(struct!.mesh),
    policycontroller: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerToTerraform(struct!.policycontroller),
  }
}


export function googleGkeHubFeatureFleetDefaultMemberConfigToHclTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configmanagement: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementToHclTerraform(struct!.configmanagement),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementList",
    },
    mesh: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigMeshToHclTerraform(struct!.mesh),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigMeshList",
    },
    policycontroller: {
      value: googleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerToHclTerraform(struct!.policycontroller),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureFleetDefaultMemberConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configmanagement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configmanagement = this._configmanagement?.internalValue;
    }
    if (this._mesh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh?.internalValue;
    }
    if (this._policycontroller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policycontroller = this._policycontroller?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configmanagement.internalValue = undefined;
      this._mesh.internalValue = undefined;
      this._policycontroller.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configmanagement.internalValue = value.configmanagement;
      this._mesh.internalValue = value.mesh;
      this._policycontroller.internalValue = value.policycontroller;
    }
  }

  // configmanagement - computed: false, optional: true, required: false
  private _configmanagement = new GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference(this, "configmanagement");
  public get configmanagement() {
    return this._configmanagement;
  }
  public putConfigmanagement(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement) {
    this._configmanagement.internalValue = value;
  }
  public resetConfigmanagement() {
    this._configmanagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmanagementInput() {
    return this._configmanagement.internalValue;
  }

  // mesh - computed: false, optional: true, required: false
  private _mesh = new GoogleGkeHubFeatureFleetDefaultMemberConfigMeshOutputReference(this, "mesh");
  public get mesh() {
    return this._mesh;
  }
  public putMesh(value: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh) {
    this._mesh.internalValue = value;
  }
  public resetMesh() {
    this._mesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh.internalValue;
  }

  // policycontroller - computed: false, optional: true, required: false
  private _policycontroller = new GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontrollerOutputReference(this, "policycontroller");
  public get policycontroller() {
    return this._policycontroller;
  }
  public putPolicycontroller(value: GoogleGkeHubFeatureFleetDefaultMemberConfigPolicycontroller) {
    this._policycontroller.internalValue = value;
  }
  public resetPolicycontroller() {
    this._policycontroller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policycontrollerInput() {
    return this._policycontroller.internalValue;
  }
}
export interface GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions {
  /**
  * Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#soaking GoogleGkeHubFeature#soaking}
  */
  readonly soaking: string;
}

export function googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsToTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference | GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    soaking: cdktf.stringToTerraform(struct!.soaking),
  }
}


export function googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsToHclTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference | GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    soaking: {
      value: cdktf.stringToHclTerraform(struct!.soaking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._soaking !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaking = this._soaking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._soaking = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._soaking = value.soaking;
    }
  }

  // soaking - computed: false, optional: false, required: true
  private _soaking?: string; 
  public get soaking() {
    return this.getStringAttribute('soaking');
  }
  public set soaking(value: string) {
    this._soaking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get soakingInput() {
    return this._soaking;
  }
}
export interface GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade {
  /**
  * Name of the upgrade, e.g., "k8s_control_plane". It should be a valid upgrade name. It must not exceet 99 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#name GoogleGkeHubFeature#name}
  */
  readonly name: string;
  /**
  * Version of the upgrade, e.g., "1.22.1-gke.100". It should be a valid version. It must not exceet 99 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}
  */
  readonly version: string;
}

export function googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeToTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference | GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeToHclTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference | GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
    }
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides {
  /**
  * post_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#post_conditions GoogleGkeHubFeature#post_conditions}
  */
  readonly postConditions: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions;
  /**
  * upgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#upgrade GoogleGkeHubFeature#upgrade}
  */
  readonly upgrade: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade;
}

export function googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesToTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_conditions: googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsToTerraform(struct!.postConditions),
    upgrade: googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeToTerraform(struct!.upgrade),
  }
}


export function googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesToHclTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_conditions: {
      value: googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsToHclTerraform(struct!.postConditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsList",
    },
    upgrade: {
      value: googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeToHclTerraform(struct!.upgrade),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postConditions = this._postConditions?.internalValue;
    }
    if (this._upgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgrade = this._upgrade?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postConditions.internalValue = undefined;
      this._upgrade.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postConditions.internalValue = value.postConditions;
      this._upgrade.internalValue = value.upgrade;
    }
  }

  // post_conditions - computed: false, optional: false, required: true
  private _postConditions = new GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditionsOutputReference(this, "post_conditions");
  public get postConditions() {
    return this._postConditions;
  }
  public putPostConditions(value: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesPostConditions) {
    this._postConditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postConditionsInput() {
    return this._postConditions.internalValue;
  }

  // upgrade - computed: false, optional: false, required: true
  private _upgrade = new GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgradeOutputReference(this, "upgrade");
  public get upgrade() {
    return this._upgrade;
  }
  public putUpgrade(value: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesUpgrade) {
    this._upgrade.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeInput() {
    return this._upgrade.internalValue;
  }
}

export class GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList extends cdktf.ComplexList {
  public internalValue? : GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides[] | cdktf.IResolvable

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
  public get(index: number): GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference {
    return new GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleGkeHubFeatureSpecClusterupgradePostConditions {
  /**
  * Amount of time to "soak" after a rollout has been finished before marking it COMPLETE. Cannot exceed 30 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#soaking GoogleGkeHubFeature#soaking}
  */
  readonly soaking: string;
}

export function googleGkeHubFeatureSpecClusterupgradePostConditionsToTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradePostConditionsOutputReference | GoogleGkeHubFeatureSpecClusterupgradePostConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    soaking: cdktf.stringToTerraform(struct!.soaking),
  }
}


export function googleGkeHubFeatureSpecClusterupgradePostConditionsToHclTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradePostConditionsOutputReference | GoogleGkeHubFeatureSpecClusterupgradePostConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    soaking: {
      value: cdktf.stringToHclTerraform(struct!.soaking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecClusterupgradePostConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecClusterupgradePostConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._soaking !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaking = this._soaking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecClusterupgradePostConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._soaking = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._soaking = value.soaking;
    }
  }

  // soaking - computed: false, optional: false, required: true
  private _soaking?: string; 
  public get soaking() {
    return this.getStringAttribute('soaking');
  }
  public set soaking(value: string) {
    this._soaking = value;
  }
  // Temporarily expose input value. Use with caution.
  public get soakingInput() {
    return this._soaking;
  }
}
export interface GoogleGkeHubFeatureSpecClusterupgrade {
  /**
  * Specified if other fleet should be considered as a source of upgrades. Currently, at most one upstream fleet is allowed. The fleet name should be either fleet project number or id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#upstream_fleets GoogleGkeHubFeature#upstream_fleets}
  */
  readonly upstreamFleets: string[];
  /**
  * gke_upgrade_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#gke_upgrade_overrides GoogleGkeHubFeature#gke_upgrade_overrides}
  */
  readonly gkeUpgradeOverrides?: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides[] | cdktf.IResolvable;
  /**
  * post_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#post_conditions GoogleGkeHubFeature#post_conditions}
  */
  readonly postConditions?: GoogleGkeHubFeatureSpecClusterupgradePostConditions;
}

export function googleGkeHubFeatureSpecClusterupgradeToTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeOutputReference | GoogleGkeHubFeatureSpecClusterupgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upstream_fleets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.upstreamFleets),
    gke_upgrade_overrides: cdktf.listMapper(googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesToTerraform, true)(struct!.gkeUpgradeOverrides),
    post_conditions: googleGkeHubFeatureSpecClusterupgradePostConditionsToTerraform(struct!.postConditions),
  }
}


export function googleGkeHubFeatureSpecClusterupgradeToHclTerraform(struct?: GoogleGkeHubFeatureSpecClusterupgradeOutputReference | GoogleGkeHubFeatureSpecClusterupgrade): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upstream_fleets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.upstreamFleets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gke_upgrade_overrides: {
      value: cdktf.listMapperHcl(googleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesToHclTerraform, true)(struct!.gkeUpgradeOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList",
    },
    post_conditions: {
      value: googleGkeHubFeatureSpecClusterupgradePostConditionsToHclTerraform(struct!.postConditions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecClusterupgradePostConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecClusterupgradeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecClusterupgrade | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upstreamFleets !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamFleets = this._upstreamFleets;
    }
    if (this._gkeUpgradeOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeUpgradeOverrides = this._gkeUpgradeOverrides?.internalValue;
    }
    if (this._postConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postConditions = this._postConditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecClusterupgrade | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upstreamFleets = undefined;
      this._gkeUpgradeOverrides.internalValue = undefined;
      this._postConditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upstreamFleets = value.upstreamFleets;
      this._gkeUpgradeOverrides.internalValue = value.gkeUpgradeOverrides;
      this._postConditions.internalValue = value.postConditions;
    }
  }

  // upstream_fleets - computed: false, optional: false, required: true
  private _upstreamFleets?: string[]; 
  public get upstreamFleets() {
    return this.getListAttribute('upstream_fleets');
  }
  public set upstreamFleets(value: string[]) {
    this._upstreamFleets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamFleetsInput() {
    return this._upstreamFleets;
  }

  // gke_upgrade_overrides - computed: false, optional: true, required: false
  private _gkeUpgradeOverrides = new GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverridesList(this, "gke_upgrade_overrides", false);
  public get gkeUpgradeOverrides() {
    return this._gkeUpgradeOverrides;
  }
  public putGkeUpgradeOverrides(value: GoogleGkeHubFeatureSpecClusterupgradeGkeUpgradeOverrides[] | cdktf.IResolvable) {
    this._gkeUpgradeOverrides.internalValue = value;
  }
  public resetGkeUpgradeOverrides() {
    this._gkeUpgradeOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeUpgradeOverridesInput() {
    return this._gkeUpgradeOverrides.internalValue;
  }

  // post_conditions - computed: false, optional: true, required: false
  private _postConditions = new GoogleGkeHubFeatureSpecClusterupgradePostConditionsOutputReference(this, "post_conditions");
  public get postConditions() {
    return this._postConditions;
  }
  public putPostConditions(value: GoogleGkeHubFeatureSpecClusterupgradePostConditions) {
    this._postConditions.internalValue = value;
  }
  public resetPostConditions() {
    this._postConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postConditionsInput() {
    return this._postConditions.internalValue;
  }
}
export interface GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig {
  /**
  * Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}
  */
  readonly mode?: string;
}

export function googleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigToTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference | GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigToHclTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference | GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
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
}
export interface GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig {
  /**
  * Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}
  */
  readonly mode?: string;
}

export function googleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigToTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference | GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function googleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigToHclTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference | GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
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
}
export interface GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig {
  /**
  * default_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#default_config GoogleGkeHubFeature#default_config}
  */
  readonly defaultConfig?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig;
  /**
  * fleet_scope_logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#fleet_scope_logs_config GoogleGkeHubFeature#fleet_scope_logs_config}
  */
  readonly fleetScopeLogsConfig?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig;
}

export function googleGkeHubFeatureSpecFleetobservabilityLoggingConfigToTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference | GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_config: googleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigToTerraform(struct!.defaultConfig),
    fleet_scope_logs_config: googleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigToTerraform(struct!.fleetScopeLogsConfig),
  }
}


export function googleGkeHubFeatureSpecFleetobservabilityLoggingConfigToHclTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference | GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_config: {
      value: googleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigToHclTerraform(struct!.defaultConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigList",
    },
    fleet_scope_logs_config: {
      value: googleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigToHclTerraform(struct!.fleetScopeLogsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConfig = this._defaultConfig?.internalValue;
    }
    if (this._fleetScopeLogsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetScopeLogsConfig = this._fleetScopeLogsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultConfig.internalValue = undefined;
      this._fleetScopeLogsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultConfig.internalValue = value.defaultConfig;
      this._fleetScopeLogsConfig.internalValue = value.fleetScopeLogsConfig;
    }
  }

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig = new GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfigOutputReference(this, "default_config");
  public get defaultConfig() {
    return this._defaultConfig;
  }
  public putDefaultConfig(value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig) {
    this._defaultConfig.internalValue = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig.internalValue;
  }

  // fleet_scope_logs_config - computed: false, optional: true, required: false
  private _fleetScopeLogsConfig = new GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfigOutputReference(this, "fleet_scope_logs_config");
  public get fleetScopeLogsConfig() {
    return this._fleetScopeLogsConfig;
  }
  public putFleetScopeLogsConfig(value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigFleetScopeLogsConfig) {
    this._fleetScopeLogsConfig.internalValue = value;
  }
  public resetFleetScopeLogsConfig() {
    this._fleetScopeLogsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetScopeLogsConfigInput() {
    return this._fleetScopeLogsConfig.internalValue;
  }
}
export interface GoogleGkeHubFeatureSpecFleetobservability {
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#logging_config GoogleGkeHubFeature#logging_config}
  */
  readonly loggingConfig?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig;
}

export function googleGkeHubFeatureSpecFleetobservabilityToTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityOutputReference | GoogleGkeHubFeatureSpecFleetobservability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    logging_config: googleGkeHubFeatureSpecFleetobservabilityLoggingConfigToTerraform(struct!.loggingConfig),
  }
}


export function googleGkeHubFeatureSpecFleetobservabilityToHclTerraform(struct?: GoogleGkeHubFeatureSpecFleetobservabilityOutputReference | GoogleGkeHubFeatureSpecFleetobservability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    logging_config: {
      value: googleGkeHubFeatureSpecFleetobservabilityLoggingConfigToHclTerraform(struct!.loggingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecFleetobservabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecFleetobservability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingConfig = this._loggingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecFleetobservability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loggingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loggingConfig.internalValue = value.loggingConfig;
    }
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }
}
export interface GoogleGkeHubFeatureSpecMulticlusteringress {
  /**
  * Fully-qualified Membership name which hosts the MultiClusterIngress CRD. Example: 'projects/foo-proj/locations/global/memberships/bar'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#config_membership GoogleGkeHubFeature#config_membership}
  */
  readonly configMembership: string;
}

export function googleGkeHubFeatureSpecMulticlusteringressToTerraform(struct?: GoogleGkeHubFeatureSpecMulticlusteringressOutputReference | GoogleGkeHubFeatureSpecMulticlusteringress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_membership: cdktf.stringToTerraform(struct!.configMembership),
  }
}


export function googleGkeHubFeatureSpecMulticlusteringressToHclTerraform(struct?: GoogleGkeHubFeatureSpecMulticlusteringressOutputReference | GoogleGkeHubFeatureSpecMulticlusteringress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_membership: {
      value: cdktf.stringToHclTerraform(struct!.configMembership),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecMulticlusteringressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpecMulticlusteringress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMembership !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMembership = this._configMembership;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpecMulticlusteringress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configMembership = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configMembership = value.configMembership;
    }
  }

  // config_membership - computed: false, optional: false, required: true
  private _configMembership?: string; 
  public get configMembership() {
    return this.getStringAttribute('config_membership');
  }
  public set configMembership(value: string) {
    this._configMembership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMembershipInput() {
    return this._configMembership;
  }
}
export interface GoogleGkeHubFeatureSpec {
  /**
  * clusterupgrade block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#clusterupgrade GoogleGkeHubFeature#clusterupgrade}
  */
  readonly clusterupgrade?: GoogleGkeHubFeatureSpecClusterupgrade;
  /**
  * fleetobservability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#fleetobservability GoogleGkeHubFeature#fleetobservability}
  */
  readonly fleetobservability?: GoogleGkeHubFeatureSpecFleetobservability;
  /**
  * multiclusteringress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#multiclusteringress GoogleGkeHubFeature#multiclusteringress}
  */
  readonly multiclusteringress?: GoogleGkeHubFeatureSpecMulticlusteringress;
}

export function googleGkeHubFeatureSpecToTerraform(struct?: GoogleGkeHubFeatureSpecOutputReference | GoogleGkeHubFeatureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clusterupgrade: googleGkeHubFeatureSpecClusterupgradeToTerraform(struct!.clusterupgrade),
    fleetobservability: googleGkeHubFeatureSpecFleetobservabilityToTerraform(struct!.fleetobservability),
    multiclusteringress: googleGkeHubFeatureSpecMulticlusteringressToTerraform(struct!.multiclusteringress),
  }
}


export function googleGkeHubFeatureSpecToHclTerraform(struct?: GoogleGkeHubFeatureSpecOutputReference | GoogleGkeHubFeatureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clusterupgrade: {
      value: googleGkeHubFeatureSpecClusterupgradeToHclTerraform(struct!.clusterupgrade),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecClusterupgradeList",
    },
    fleetobservability: {
      value: googleGkeHubFeatureSpecFleetobservabilityToHclTerraform(struct!.fleetobservability),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecFleetobservabilityList",
    },
    multiclusteringress: {
      value: googleGkeHubFeatureSpecMulticlusteringressToHclTerraform(struct!.multiclusteringress),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleGkeHubFeatureSpecMulticlusteringressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleGkeHubFeatureSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleGkeHubFeatureSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterupgrade?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterupgrade = this._clusterupgrade?.internalValue;
    }
    if (this._fleetobservability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fleetobservability = this._fleetobservability?.internalValue;
    }
    if (this._multiclusteringress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiclusteringress = this._multiclusteringress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterupgrade.internalValue = undefined;
      this._fleetobservability.internalValue = undefined;
      this._multiclusteringress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterupgrade.internalValue = value.clusterupgrade;
      this._fleetobservability.internalValue = value.fleetobservability;
      this._multiclusteringress.internalValue = value.multiclusteringress;
    }
  }

  // clusterupgrade - computed: false, optional: true, required: false
  private _clusterupgrade = new GoogleGkeHubFeatureSpecClusterupgradeOutputReference(this, "clusterupgrade");
  public get clusterupgrade() {
    return this._clusterupgrade;
  }
  public putClusterupgrade(value: GoogleGkeHubFeatureSpecClusterupgrade) {
    this._clusterupgrade.internalValue = value;
  }
  public resetClusterupgrade() {
    this._clusterupgrade.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterupgradeInput() {
    return this._clusterupgrade.internalValue;
  }

  // fleetobservability - computed: false, optional: true, required: false
  private _fleetobservability = new GoogleGkeHubFeatureSpecFleetobservabilityOutputReference(this, "fleetobservability");
  public get fleetobservability() {
    return this._fleetobservability;
  }
  public putFleetobservability(value: GoogleGkeHubFeatureSpecFleetobservability) {
    this._fleetobservability.internalValue = value;
  }
  public resetFleetobservability() {
    this._fleetobservability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetobservabilityInput() {
    return this._fleetobservability.internalValue;
  }

  // multiclusteringress - computed: false, optional: true, required: false
  private _multiclusteringress = new GoogleGkeHubFeatureSpecMulticlusteringressOutputReference(this, "multiclusteringress");
  public get multiclusteringress() {
    return this._multiclusteringress;
  }
  public putMulticlusteringress(value: GoogleGkeHubFeatureSpecMulticlusteringress) {
    this._multiclusteringress.internalValue = value;
  }
  public resetMulticlusteringress() {
    this._multiclusteringress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiclusteringressInput() {
    return this._multiclusteringress.internalValue;
  }
}
export interface GoogleGkeHubFeatureTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}
  */
  readonly update?: string;
}

export function googleGkeHubFeatureTimeoutsToTerraform(struct?: GoogleGkeHubFeatureTimeouts | cdktf.IResolvable): any {
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


export function googleGkeHubFeatureTimeoutsToHclTerraform(struct?: GoogleGkeHubFeatureTimeouts | cdktf.IResolvable): any {
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

export class GoogleGkeHubFeatureTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleGkeHubFeatureTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleGkeHubFeatureTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature google_gke_hub_feature}
*/
export class GoogleGkeHubFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleGkeHubFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleGkeHubFeature to import
  * @param importFromId The id of the existing GoogleGkeHubFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleGkeHubFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_gke_hub_feature google_gke_hub_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleGkeHubFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleGkeHubFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_feature',
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._fleetDefaultMemberConfig.internalValue = config.fleetDefaultMemberConfig;
    this._spec.internalValue = config.spec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // resource_state - computed: true, optional: false, required: false
  private _resourceState = new GoogleGkeHubFeatureResourceStateList(this, "resource_state", false);
  public get resourceState() {
    return this._resourceState;
  }

  // state - computed: true, optional: false, required: false
  private _state = new GoogleGkeHubFeatureStateList(this, "state", false);
  public get state() {
    return this._state;
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

  // fleet_default_member_config - computed: false, optional: true, required: false
  private _fleetDefaultMemberConfig = new GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference(this, "fleet_default_member_config");
  public get fleetDefaultMemberConfig() {
    return this._fleetDefaultMemberConfig;
  }
  public putFleetDefaultMemberConfig(value: GoogleGkeHubFeatureFleetDefaultMemberConfig) {
    this._fleetDefaultMemberConfig.internalValue = value;
  }
  public resetFleetDefaultMemberConfig() {
    this._fleetDefaultMemberConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetDefaultMemberConfigInput() {
    return this._fleetDefaultMemberConfig.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new GoogleGkeHubFeatureSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: GoogleGkeHubFeatureSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleGkeHubFeatureTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleGkeHubFeatureTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      fleet_default_member_config: googleGkeHubFeatureFleetDefaultMemberConfigToTerraform(this._fleetDefaultMemberConfig.internalValue),
      spec: googleGkeHubFeatureSpecToTerraform(this._spec.internalValue),
      timeouts: googleGkeHubFeatureTimeoutsToTerraform(this._timeouts.internalValue),
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
      fleet_default_member_config: {
        value: googleGkeHubFeatureFleetDefaultMemberConfigToHclTerraform(this._fleetDefaultMemberConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeHubFeatureFleetDefaultMemberConfigList",
      },
      spec: {
        value: googleGkeHubFeatureSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleGkeHubFeatureSpecList",
      },
      timeouts: {
        value: googleGkeHubFeatureTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleGkeHubFeatureTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
