/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleGkeHubFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#id GoogleGkeHubFeature#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#labels GoogleGkeHubFeature#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#location GoogleGkeHubFeature#location}
  */
  readonly location: string;
  /**
  * The full, unique name of this Feature resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#name GoogleGkeHubFeature#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#project GoogleGkeHubFeature#project}
  */
  readonly project?: string;
  /**
  * fleet_default_member_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleet_default_member_config GoogleGkeHubFeature#fleet_default_member_config}
  */
  readonly fleetDefaultMemberConfig?: GoogleGkeHubFeatureFleetDefaultMemberConfig;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#spec GoogleGkeHubFeature#spec}
  */
  readonly spec?: GoogleGkeHubFeatureSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#timeouts GoogleGkeHubFeature#timeouts}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * URL for the HTTPS Proxy to be used when communicating with the Git repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#https_proxy GoogleGkeHubFeature#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The path within the Git repository that represents the top level of the repo to sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the Git repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}
  */
  readonly secretType: string;
  /**
  * The branch of the repository to sync from. Default: master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_branch GoogleGkeHubFeature#sync_branch}
  */
  readonly syncBranch?: string;
  /**
  * The URL of the Git repository to use as the source of truth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Git revision (tag or hash) to check out. Default HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_rev GoogleGkeHubFeature#sync_rev}
  */
  readonly syncRev?: string;
  /**
  * Period in seconds between consecutive syncs. Default: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#gcp_service_account_email GoogleGkeHubFeature#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * The absolute path of the directory that contains the local resources. Default: the root directory of the image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#policy_dir GoogleGkeHubFeature#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the Git repo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#secret_type GoogleGkeHubFeature#secret_type}
  */
  readonly secretType: string;
  /**
  * The OCI image repository URL for the package to sync from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_repo GoogleGkeHubFeature#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Period in seconds between consecutive syncs. Default: 15
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#sync_wait_secs GoogleGkeHubFeature#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
  /**
  * Version of ACM installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#version GoogleGkeHubFeature#version}
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
  * Specifies whether the Config Sync Repo is in hierarchical or unstructured mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#source_format GoogleGkeHubFeature#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#git GoogleGkeHubFeature#git}
  */
  readonly git?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGit;
  /**
  * oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#oci GoogleGkeHubFeature#oci}
  */
  readonly oci?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOci;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    git: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncGitToTerraform(struct!.git),
    oci: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncOciToTerraform(struct!.oci),
  }
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
      this._sourceFormat = undefined;
      this._git.internalValue = undefined;
      this._oci.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceFormat = value.sourceFormat;
      this._git.internalValue = value.git;
      this._oci.internalValue = value.oci;
    }
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
  * config_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#config_sync GoogleGkeHubFeature#config_sync}
  */
  readonly configSync?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSync;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_sync: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementConfigSyncToTerraform(struct!.configSync),
  }
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
    if (this._configSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSync = this._configSync?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configSync.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configSync.internalValue = value.configSync;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#management GoogleGkeHubFeature#management}
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
export interface GoogleGkeHubFeatureFleetDefaultMemberConfig {
  /**
  * configmanagement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#configmanagement GoogleGkeHubFeature#configmanagement}
  */
  readonly configmanagement?: GoogleGkeHubFeatureFleetDefaultMemberConfigConfigmanagement;
  /**
  * mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mesh GoogleGkeHubFeature#mesh}
  */
  readonly mesh?: GoogleGkeHubFeatureFleetDefaultMemberConfigMesh;
}

export function googleGkeHubFeatureFleetDefaultMemberConfigToTerraform(struct?: GoogleGkeHubFeatureFleetDefaultMemberConfigOutputReference | GoogleGkeHubFeatureFleetDefaultMemberConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configmanagement: googleGkeHubFeatureFleetDefaultMemberConfigConfigmanagementToTerraform(struct!.configmanagement),
    mesh: googleGkeHubFeatureFleetDefaultMemberConfigMeshToTerraform(struct!.mesh),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleGkeHubFeatureFleetDefaultMemberConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configmanagement.internalValue = undefined;
      this._mesh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configmanagement.internalValue = value.configmanagement;
      this._mesh.internalValue = value.mesh;
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
}
export interface GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig {
  /**
  * Specified if fleet logging feature is enabled. Possible values: ["MODE_UNSPECIFIED", "COPY", "MOVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#mode GoogleGkeHubFeature#mode}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#default_config GoogleGkeHubFeature#default_config}
  */
  readonly defaultConfig?: GoogleGkeHubFeatureSpecFleetobservabilityLoggingConfigDefaultConfig;
  /**
  * fleet_scope_logs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleet_scope_logs_config GoogleGkeHubFeature#fleet_scope_logs_config}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#logging_config GoogleGkeHubFeature#logging_config}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#config_membership GoogleGkeHubFeature#config_membership}
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
  * fleetobservability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#fleetobservability GoogleGkeHubFeature#fleetobservability}
  */
  readonly fleetobservability?: GoogleGkeHubFeatureSpecFleetobservability;
  /**
  * multiclusteringress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#multiclusteringress GoogleGkeHubFeature#multiclusteringress}
  */
  readonly multiclusteringress?: GoogleGkeHubFeatureSpecMulticlusteringress;
}

export function googleGkeHubFeatureSpecToTerraform(struct?: GoogleGkeHubFeatureSpecOutputReference | GoogleGkeHubFeatureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fleetobservability: googleGkeHubFeatureSpecFleetobservabilityToTerraform(struct!.fleetobservability),
    multiclusteringress: googleGkeHubFeatureSpecMulticlusteringressToTerraform(struct!.multiclusteringress),
  }
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
      this._fleetobservability.internalValue = undefined;
      this._multiclusteringress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fleetobservability.internalValue = value.fleetobservability;
      this._multiclusteringress.internalValue = value.multiclusteringress;
    }
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#create GoogleGkeHubFeature#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#delete GoogleGkeHubFeature#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#update GoogleGkeHubFeature#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature google_gke_hub_feature}
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
  * @param importFromId The id of the existing GoogleGkeHubFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleGkeHubFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.6.0/docs/resources/google_gke_hub_feature google_gke_hub_feature} Resource
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
        providerVersion: '5.6.0',
        providerVersionConstraint: '~> 5.0'
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
}
