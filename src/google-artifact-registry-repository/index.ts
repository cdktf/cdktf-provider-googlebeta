// https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleArtifactRegistryRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the cleanup pipeline is prevented from deleting versions in this
  * repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#cleanup_policy_dry_run GoogleArtifactRegistryRepository#cleanup_policy_dry_run}
  */
  readonly cleanupPolicyDryRun?: boolean | cdktf.IResolvable;
  /**
  * The user-provided description of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}
  */
  readonly description?: string;
  /**
  * The format of packages that are stored in the repository. Supported formats
  * can be found [here](https://cloud.google.com/artifact-registry/docs/supported-formats).
  * You can only create alpha formats if you are a member of the
  * [alpha user group](https://cloud.google.com/artifact-registry/docs/supported-formats#alpha-access).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#format GoogleArtifactRegistryRepository#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The Cloud KMS resource name of the customer managed encryption key that’s
  * used to encrypt the contents of the Repository. Has the form:
  * 'projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key'.
  * This value may not be changed after the Repository has been created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#kms_key_name GoogleArtifactRegistryRepository#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Labels with user-defined metadata.
  * This field may contain up to 64 entries. Label keys and values may be no
  * longer than 63 characters. Label keys must begin with a lowercase letter
  * and may only contain lowercase letters, numeric characters, underscores,
  * and dashes.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#labels GoogleArtifactRegistryRepository#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this repository is located in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#location GoogleArtifactRegistryRepository#location}
  */
  readonly location?: string;
  /**
  * The mode configures the repository to serve artifacts from different sources. Default value: "STANDARD_REPOSITORY" Possible values: ["STANDARD_REPOSITORY", "VIRTUAL_REPOSITORY", "REMOTE_REPOSITORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#mode GoogleArtifactRegistryRepository#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#project GoogleArtifactRegistryRepository#project}
  */
  readonly project?: string;
  /**
  * The last part of the repository name, for example:
  * "repo1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#repository_id GoogleArtifactRegistryRepository#repository_id}
  */
  readonly repositoryId: string;
  /**
  * cleanup_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#cleanup_policies GoogleArtifactRegistryRepository#cleanup_policies}
  */
  readonly cleanupPolicies?: GoogleArtifactRegistryRepositoryCleanupPolicies[] | cdktf.IResolvable;
  /**
  * docker_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#docker_config GoogleArtifactRegistryRepository#docker_config}
  */
  readonly dockerConfig?: GoogleArtifactRegistryRepositoryDockerConfig;
  /**
  * maven_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#maven_config GoogleArtifactRegistryRepository#maven_config}
  */
  readonly mavenConfig?: GoogleArtifactRegistryRepositoryMavenConfig;
  /**
  * remote_repository_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#remote_repository_config GoogleArtifactRegistryRepository#remote_repository_config}
  */
  readonly remoteRepositoryConfig?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#timeouts GoogleArtifactRegistryRepository#timeouts}
  */
  readonly timeouts?: GoogleArtifactRegistryRepositoryTimeouts;
  /**
  * virtual_repository_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#virtual_repository_config GoogleArtifactRegistryRepository#virtual_repository_config}
  */
  readonly virtualRepositoryConfig?: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig;
}
export interface GoogleArtifactRegistryRepositoryCleanupPoliciesCondition {
  /**
  * Match versions newer than a duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#newer_than GoogleArtifactRegistryRepository#newer_than}
  */
  readonly newerThan?: string;
  /**
  * Match versions older than a duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#older_than GoogleArtifactRegistryRepository#older_than}
  */
  readonly olderThan?: string;
  /**
  * Match versions by package prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}
  */
  readonly packageNamePrefixes?: string[];
  /**
  * Match versions by tag prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#tag_prefixes GoogleArtifactRegistryRepository#tag_prefixes}
  */
  readonly tagPrefixes?: string[];
  /**
  * Match versions by tag status. Default value: "ANY" Possible values: ["TAGGED", "UNTAGGED", "ANY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#tag_state GoogleArtifactRegistryRepository#tag_state}
  */
  readonly tagState?: string;
  /**
  * Match versions by version name prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#version_name_prefixes GoogleArtifactRegistryRepository#version_name_prefixes}
  */
  readonly versionNamePrefixes?: string[];
}

export function googleArtifactRegistryRepositoryCleanupPoliciesConditionToTerraform(struct?: GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference | GoogleArtifactRegistryRepositoryCleanupPoliciesCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    newer_than: cdktf.stringToTerraform(struct!.newerThan),
    older_than: cdktf.stringToTerraform(struct!.olderThan),
    package_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNamePrefixes),
    tag_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tagPrefixes),
    tag_state: cdktf.stringToTerraform(struct!.tagState),
    version_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.versionNamePrefixes),
  }
}

export class GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryCleanupPoliciesCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newerThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.newerThan = this._newerThan;
    }
    if (this._olderThan !== undefined) {
      hasAnyValues = true;
      internalValueResult.olderThan = this._olderThan;
    }
    if (this._packageNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamePrefixes = this._packageNamePrefixes;
    }
    if (this._tagPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagPrefixes = this._tagPrefixes;
    }
    if (this._tagState !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagState = this._tagState;
    }
    if (this._versionNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNamePrefixes = this._versionNamePrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newerThan = undefined;
      this._olderThan = undefined;
      this._packageNamePrefixes = undefined;
      this._tagPrefixes = undefined;
      this._tagState = undefined;
      this._versionNamePrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newerThan = value.newerThan;
      this._olderThan = value.olderThan;
      this._packageNamePrefixes = value.packageNamePrefixes;
      this._tagPrefixes = value.tagPrefixes;
      this._tagState = value.tagState;
      this._versionNamePrefixes = value.versionNamePrefixes;
    }
  }

  // newer_than - computed: false, optional: true, required: false
  private _newerThan?: string; 
  public get newerThan() {
    return this.getStringAttribute('newer_than');
  }
  public set newerThan(value: string) {
    this._newerThan = value;
  }
  public resetNewerThan() {
    this._newerThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newerThanInput() {
    return this._newerThan;
  }

  // older_than - computed: false, optional: true, required: false
  private _olderThan?: string; 
  public get olderThan() {
    return this.getStringAttribute('older_than');
  }
  public set olderThan(value: string) {
    this._olderThan = value;
  }
  public resetOlderThan() {
    this._olderThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get olderThanInput() {
    return this._olderThan;
  }

  // package_name_prefixes - computed: false, optional: true, required: false
  private _packageNamePrefixes?: string[]; 
  public get packageNamePrefixes() {
    return this.getListAttribute('package_name_prefixes');
  }
  public set packageNamePrefixes(value: string[]) {
    this._packageNamePrefixes = value;
  }
  public resetPackageNamePrefixes() {
    this._packageNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamePrefixesInput() {
    return this._packageNamePrefixes;
  }

  // tag_prefixes - computed: false, optional: true, required: false
  private _tagPrefixes?: string[]; 
  public get tagPrefixes() {
    return this.getListAttribute('tag_prefixes');
  }
  public set tagPrefixes(value: string[]) {
    this._tagPrefixes = value;
  }
  public resetTagPrefixes() {
    this._tagPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagPrefixesInput() {
    return this._tagPrefixes;
  }

  // tag_state - computed: false, optional: true, required: false
  private _tagState?: string; 
  public get tagState() {
    return this.getStringAttribute('tag_state');
  }
  public set tagState(value: string) {
    this._tagState = value;
  }
  public resetTagState() {
    this._tagState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagStateInput() {
    return this._tagState;
  }

  // version_name_prefixes - computed: false, optional: true, required: false
  private _versionNamePrefixes?: string[]; 
  public get versionNamePrefixes() {
    return this.getListAttribute('version_name_prefixes');
  }
  public set versionNamePrefixes(value: string[]) {
    this._versionNamePrefixes = value;
  }
  public resetVersionNamePrefixes() {
    this._versionNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNamePrefixesInput() {
    return this._versionNamePrefixes;
  }
}
export interface GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions {
  /**
  * Minimum number of versions to keep.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#keep_count GoogleArtifactRegistryRepository#keep_count}
  */
  readonly keepCount?: number;
  /**
  * Match versions by package prefix. Applied on any prefix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#package_name_prefixes GoogleArtifactRegistryRepository#package_name_prefixes}
  */
  readonly packageNamePrefixes?: string[];
}

export function googleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToTerraform(struct?: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference | GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_count: cdktf.numberToTerraform(struct!.keepCount),
    package_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.packageNamePrefixes),
  }
}

export class GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepCount = this._keepCount;
    }
    if (this._packageNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageNamePrefixes = this._packageNamePrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepCount = undefined;
      this._packageNamePrefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepCount = value.keepCount;
      this._packageNamePrefixes = value.packageNamePrefixes;
    }
  }

  // keep_count - computed: false, optional: true, required: false
  private _keepCount?: number; 
  public get keepCount() {
    return this.getNumberAttribute('keep_count');
  }
  public set keepCount(value: number) {
    this._keepCount = value;
  }
  public resetKeepCount() {
    this._keepCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepCountInput() {
    return this._keepCount;
  }

  // package_name_prefixes - computed: false, optional: true, required: false
  private _packageNamePrefixes?: string[]; 
  public get packageNamePrefixes() {
    return this.getListAttribute('package_name_prefixes');
  }
  public set packageNamePrefixes(value: string[]) {
    this._packageNamePrefixes = value;
  }
  public resetPackageNamePrefixes() {
    this._packageNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageNamePrefixesInput() {
    return this._packageNamePrefixes;
  }
}
export interface GoogleArtifactRegistryRepositoryCleanupPolicies {
  /**
  * Policy action. Possible values: ["DELETE", "KEEP"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#action GoogleArtifactRegistryRepository#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#condition GoogleArtifactRegistryRepository#condition}
  */
  readonly condition?: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition;
  /**
  * most_recent_versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#most_recent_versions GoogleArtifactRegistryRepository#most_recent_versions}
  */
  readonly mostRecentVersions?: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions;
}

export function googleArtifactRegistryRepositoryCleanupPoliciesToTerraform(struct?: GoogleArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.stringToTerraform(struct!.id),
    condition: googleArtifactRegistryRepositoryCleanupPoliciesConditionToTerraform(struct!.condition),
    most_recent_versions: googleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsToTerraform(struct!.mostRecentVersions),
  }
}

export class GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._mostRecentVersions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mostRecentVersions = this._mostRecentVersions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryCleanupPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._condition.internalValue = undefined;
      this._mostRecentVersions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._condition.internalValue = value.condition;
      this._mostRecentVersions.internalValue = value.mostRecentVersions;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // condition - computed: false, optional: true, required: false
  private _condition = new GoogleArtifactRegistryRepositoryCleanupPoliciesConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: GoogleArtifactRegistryRepositoryCleanupPoliciesCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // most_recent_versions - computed: false, optional: true, required: false
  private _mostRecentVersions = new GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersionsOutputReference(this, "most_recent_versions");
  public get mostRecentVersions() {
    return this._mostRecentVersions;
  }
  public putMostRecentVersions(value: GoogleArtifactRegistryRepositoryCleanupPoliciesMostRecentVersions) {
    this._mostRecentVersions.internalValue = value;
  }
  public resetMostRecentVersions() {
    this._mostRecentVersions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentVersionsInput() {
    return this._mostRecentVersions.internalValue;
  }
}

export class GoogleArtifactRegistryRepositoryCleanupPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleArtifactRegistryRepositoryCleanupPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference {
    return new GoogleArtifactRegistryRepositoryCleanupPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleArtifactRegistryRepositoryDockerConfig {
  /**
  * The repository which enabled this flag prevents all tags from being modified, moved or deleted. This does not prevent tags from being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#immutable_tags GoogleArtifactRegistryRepository#immutable_tags}
  */
  readonly immutableTags?: boolean | cdktf.IResolvable;
}

export function googleArtifactRegistryRepositoryDockerConfigToTerraform(struct?: GoogleArtifactRegistryRepositoryDockerConfigOutputReference | GoogleArtifactRegistryRepositoryDockerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immutable_tags: cdktf.booleanToTerraform(struct!.immutableTags),
  }
}

export class GoogleArtifactRegistryRepositoryDockerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryDockerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immutableTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutableTags = this._immutableTags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryDockerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._immutableTags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._immutableTags = value.immutableTags;
    }
  }

  // immutable_tags - computed: false, optional: true, required: false
  private _immutableTags?: boolean | cdktf.IResolvable; 
  public get immutableTags() {
    return this.getBooleanAttribute('immutable_tags');
  }
  public set immutableTags(value: boolean | cdktf.IResolvable) {
    this._immutableTags = value;
  }
  public resetImmutableTags() {
    this._immutableTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableTagsInput() {
    return this._immutableTags;
  }
}
export interface GoogleArtifactRegistryRepositoryMavenConfig {
  /**
  * The repository with this flag will allow publishing the same
  * snapshot versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#allow_snapshot_overwrites GoogleArtifactRegistryRepository#allow_snapshot_overwrites}
  */
  readonly allowSnapshotOverwrites?: boolean | cdktf.IResolvable;
  /**
  * Version policy defines the versions that the registry will accept. Default value: "VERSION_POLICY_UNSPECIFIED" Possible values: ["VERSION_POLICY_UNSPECIFIED", "RELEASE", "SNAPSHOT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#version_policy GoogleArtifactRegistryRepository#version_policy}
  */
  readonly versionPolicy?: string;
}

export function googleArtifactRegistryRepositoryMavenConfigToTerraform(struct?: GoogleArtifactRegistryRepositoryMavenConfigOutputReference | GoogleArtifactRegistryRepositoryMavenConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_snapshot_overwrites: cdktf.booleanToTerraform(struct!.allowSnapshotOverwrites),
    version_policy: cdktf.stringToTerraform(struct!.versionPolicy),
  }
}

export class GoogleArtifactRegistryRepositoryMavenConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryMavenConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSnapshotOverwrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSnapshotOverwrites = this._allowSnapshotOverwrites;
    }
    if (this._versionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionPolicy = this._versionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryMavenConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSnapshotOverwrites = undefined;
      this._versionPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSnapshotOverwrites = value.allowSnapshotOverwrites;
      this._versionPolicy = value.versionPolicy;
    }
  }

  // allow_snapshot_overwrites - computed: false, optional: true, required: false
  private _allowSnapshotOverwrites?: boolean | cdktf.IResolvable; 
  public get allowSnapshotOverwrites() {
    return this.getBooleanAttribute('allow_snapshot_overwrites');
  }
  public set allowSnapshotOverwrites(value: boolean | cdktf.IResolvable) {
    this._allowSnapshotOverwrites = value;
  }
  public resetAllowSnapshotOverwrites() {
    this._allowSnapshotOverwrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSnapshotOverwritesInput() {
    return this._allowSnapshotOverwrites;
  }

  // version_policy - computed: false, optional: true, required: false
  private _versionPolicy?: string; 
  public get versionPolicy() {
    return this.getStringAttribute('version_policy');
  }
  public set versionPolicy(value: string) {
    this._versionPolicy = value;
  }
  public resetVersionPolicy() {
    this._versionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionPolicyInput() {
    return this._versionPolicy;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository {
  /**
  * A common public repository base for Apt, e.g. '"debian/dists/buster"' Possible values: ["DEBIAN", "UBUNTU"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}
  */
  readonly repositoryBase: string;
  /**
  * Specific repository from the base.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}
  */
  readonly repositoryPath: string;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_base: cdktf.stringToTerraform(struct!.repositoryBase),
    repository_path: cdktf.stringToTerraform(struct!.repositoryPath),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryBase = this._repositoryBase;
    }
    if (this._repositoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPath = this._repositoryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryBase = undefined;
      this._repositoryPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryBase = value.repositoryBase;
      this._repositoryPath = value.repositoryPath;
    }
  }

  // repository_base - computed: false, optional: false, required: true
  private _repositoryBase?: string; 
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }
  public set repositoryBase(value: string) {
    this._repositoryBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBaseInput() {
    return this._repositoryBase;
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository {
  /**
  * public_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryToTerraform(struct!.publicRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository.internalValue = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepositoryOutputReference(this, "public_repository");
  public get publicRepository() {
    return this._publicRepository;
  }
  public putPublicRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryPublicRepository) {
    this._publicRepository.internalValue = value;
  }
  public resetPublicRepository() {
    this._publicRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository.internalValue;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository {
  /**
  * Address of the remote repository. Default value: "DOCKER_HUB" Possible values: ["DOCKER_HUB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository {
  /**
  * Address of the remote repository. Default value: "MAVEN_CENTRAL" Possible values: ["MAVEN_CENTRAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository {
  /**
  * Address of the remote repository. Default value: "NPMJS" Possible values: ["NPMJS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository {
  /**
  * Address of the remote repository. Default value: "PYPI" Possible values: ["PYPI"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: string;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: cdktf.stringToTerraform(struct!.publicRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository?: string; 
  public get publicRepository() {
    return this.getStringAttribute('public_repository');
  }
  public set publicRepository(value: string) {
    this._publicRepository = value;
  }
  public resetPublicRepository() {
    this._publicRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository {
  /**
  * A common public repository base for Yum. Possible values: ["CENTOS", "CENTOS_DEBUG", "CENTOS_VAULT", "CENTOS_STREAM", "ROCKY", "EPEL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#repository_base GoogleArtifactRegistryRepository#repository_base}
  */
  readonly repositoryBase: string;
  /**
  * Specific repository from the base, e.g. '"centos/8-stream/BaseOS/x86_64/os"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#repository_path GoogleArtifactRegistryRepository#repository_path}
  */
  readonly repositoryPath: string;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository_base: cdktf.stringToTerraform(struct!.repositoryBase),
    repository_path: cdktf.stringToTerraform(struct!.repositoryPath),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repositoryBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryBase = this._repositoryBase;
    }
    if (this._repositoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPath = this._repositoryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repositoryBase = undefined;
      this._repositoryPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repositoryBase = value.repositoryBase;
      this._repositoryPath = value.repositoryPath;
    }
  }

  // repository_base - computed: false, optional: false, required: true
  private _repositoryBase?: string; 
  public get repositoryBase() {
    return this.getStringAttribute('repository_base');
  }
  public set repositoryBase(value: string) {
    this._repositoryBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBaseInput() {
    return this._repositoryBase;
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository {
  /**
  * public_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#public_repository GoogleArtifactRegistryRepository#public_repository}
  */
  readonly publicRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryToTerraform(struct!.publicRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicRepository = this._publicRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicRepository.internalValue = value.publicRepository;
    }
  }

  // public_repository - computed: false, optional: true, required: false
  private _publicRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepositoryOutputReference(this, "public_repository");
  public get publicRepository() {
    return this._publicRepository;
  }
  public putPublicRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryPublicRepository) {
    this._publicRepository.internalValue = value;
  }
  public resetPublicRepository() {
    this._publicRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicRepositoryInput() {
    return this._publicRepository.internalValue;
  }
}
export interface GoogleArtifactRegistryRepositoryRemoteRepositoryConfig {
  /**
  * The description of the remote source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#description GoogleArtifactRegistryRepository#description}
  */
  readonly description?: string;
  /**
  * apt_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#apt_repository GoogleArtifactRegistryRepository#apt_repository}
  */
  readonly aptRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository;
  /**
  * docker_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#docker_repository GoogleArtifactRegistryRepository#docker_repository}
  */
  readonly dockerRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository;
  /**
  * maven_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#maven_repository GoogleArtifactRegistryRepository#maven_repository}
  */
  readonly mavenRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository;
  /**
  * npm_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#npm_repository GoogleArtifactRegistryRepository#npm_repository}
  */
  readonly npmRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository;
  /**
  * python_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#python_repository GoogleArtifactRegistryRepository#python_repository}
  */
  readonly pythonRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository;
  /**
  * yum_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#yum_repository GoogleArtifactRegistryRepository#yum_repository}
  */
  readonly yumRepository?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository;
}

export function googleArtifactRegistryRepositoryRemoteRepositoryConfigToTerraform(struct?: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference | GoogleArtifactRegistryRepositoryRemoteRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    apt_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryToTerraform(struct!.aptRepository),
    docker_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryToTerraform(struct!.dockerRepository),
    maven_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryToTerraform(struct!.mavenRepository),
    npm_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryToTerraform(struct!.npmRepository),
    python_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryToTerraform(struct!.pythonRepository),
    yum_repository: googleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryToTerraform(struct!.yumRepository),
  }
}

export class GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryRemoteRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._aptRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aptRepository = this._aptRepository?.internalValue;
    }
    if (this._dockerRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRepository = this._dockerRepository?.internalValue;
    }
    if (this._mavenRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenRepository = this._mavenRepository?.internalValue;
    }
    if (this._npmRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.npmRepository = this._npmRepository?.internalValue;
    }
    if (this._pythonRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonRepository = this._pythonRepository?.internalValue;
    }
    if (this._yumRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yumRepository = this._yumRepository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._aptRepository.internalValue = undefined;
      this._dockerRepository.internalValue = undefined;
      this._mavenRepository.internalValue = undefined;
      this._npmRepository.internalValue = undefined;
      this._pythonRepository.internalValue = undefined;
      this._yumRepository.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._aptRepository.internalValue = value.aptRepository;
      this._dockerRepository.internalValue = value.dockerRepository;
      this._mavenRepository.internalValue = value.mavenRepository;
      this._npmRepository.internalValue = value.npmRepository;
      this._pythonRepository.internalValue = value.pythonRepository;
      this._yumRepository.internalValue = value.yumRepository;
    }
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

  // apt_repository - computed: false, optional: true, required: false
  private _aptRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepositoryOutputReference(this, "apt_repository");
  public get aptRepository() {
    return this._aptRepository;
  }
  public putAptRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigAptRepository) {
    this._aptRepository.internalValue = value;
  }
  public resetAptRepository() {
    this._aptRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptRepositoryInput() {
    return this._aptRepository.internalValue;
  }

  // docker_repository - computed: false, optional: true, required: false
  private _dockerRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepositoryOutputReference(this, "docker_repository");
  public get dockerRepository() {
    return this._dockerRepository;
  }
  public putDockerRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigDockerRepository) {
    this._dockerRepository.internalValue = value;
  }
  public resetDockerRepository() {
    this._dockerRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRepositoryInput() {
    return this._dockerRepository.internalValue;
  }

  // maven_repository - computed: false, optional: true, required: false
  private _mavenRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepositoryOutputReference(this, "maven_repository");
  public get mavenRepository() {
    return this._mavenRepository;
  }
  public putMavenRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigMavenRepository) {
    this._mavenRepository.internalValue = value;
  }
  public resetMavenRepository() {
    this._mavenRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenRepositoryInput() {
    return this._mavenRepository.internalValue;
  }

  // npm_repository - computed: false, optional: true, required: false
  private _npmRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepositoryOutputReference(this, "npm_repository");
  public get npmRepository() {
    return this._npmRepository;
  }
  public putNpmRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigNpmRepository) {
    this._npmRepository.internalValue = value;
  }
  public resetNpmRepository() {
    this._npmRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npmRepositoryInput() {
    return this._npmRepository.internalValue;
  }

  // python_repository - computed: false, optional: true, required: false
  private _pythonRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepositoryOutputReference(this, "python_repository");
  public get pythonRepository() {
    return this._pythonRepository;
  }
  public putPythonRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigPythonRepository) {
    this._pythonRepository.internalValue = value;
  }
  public resetPythonRepository() {
    this._pythonRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonRepositoryInput() {
    return this._pythonRepository.internalValue;
  }

  // yum_repository - computed: false, optional: true, required: false
  private _yumRepository = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepositoryOutputReference(this, "yum_repository");
  public get yumRepository() {
    return this._yumRepository;
  }
  public putYumRepository(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfigYumRepository) {
    this._yumRepository.internalValue = value;
  }
  public resetYumRepository() {
    this._yumRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumRepositoryInput() {
    return this._yumRepository.internalValue;
  }
}
export interface GoogleArtifactRegistryRepositoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#create GoogleArtifactRegistryRepository#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#delete GoogleArtifactRegistryRepository#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#update GoogleArtifactRegistryRepository#update}
  */
  readonly update?: string;
}

export function googleArtifactRegistryRepositoryTimeoutsToTerraform(struct?: GoogleArtifactRegistryRepositoryTimeouts | cdktf.IResolvable): any {
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

export class GoogleArtifactRegistryRepositoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleArtifactRegistryRepositoryTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies {
  /**
  * The user-provided ID of the upstream policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#id GoogleArtifactRegistryRepository#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Entries with a greater priority value take precedence in the pull order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#priority GoogleArtifactRegistryRepository#priority}
  */
  readonly priority?: number;
  /**
  * A reference to the repository resource, for example:
  * "projects/p1/locations/us-central1/repository/repo1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#repository GoogleArtifactRegistryRepository#repository}
  */
  readonly repository?: string;
}

export function googleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToTerraform(struct?: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    priority: cdktf.numberToTerraform(struct!.priority),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}

export class GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._priority = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._priority = value.priority;
      this._repository = value.repository;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }
}

export class GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList extends cdktf.ComplexList {
  public internalValue? : GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[] | cdktf.IResolvable

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
  public get(index: number): GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference {
    return new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleArtifactRegistryRepositoryVirtualRepositoryConfig {
  /**
  * upstream_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#upstream_policies GoogleArtifactRegistryRepository#upstream_policies}
  */
  readonly upstreamPolicies?: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[] | cdktf.IResolvable;
}

export function googleArtifactRegistryRepositoryVirtualRepositoryConfigToTerraform(struct?: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference | GoogleArtifactRegistryRepositoryVirtualRepositoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upstream_policies: cdktf.listMapper(googleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesToTerraform, true)(struct!.upstreamPolicies),
  }
}

export class GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleArtifactRegistryRepositoryVirtualRepositoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upstreamPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstreamPolicies = this._upstreamPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._upstreamPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._upstreamPolicies.internalValue = value.upstreamPolicies;
    }
  }

  // upstream_policies - computed: false, optional: true, required: false
  private _upstreamPolicies = new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPoliciesList(this, "upstream_policies", false);
  public get upstreamPolicies() {
    return this._upstreamPolicies;
  }
  public putUpstreamPolicies(value: GoogleArtifactRegistryRepositoryVirtualRepositoryConfigUpstreamPolicies[] | cdktf.IResolvable) {
    this._upstreamPolicies.internalValue = value;
  }
  public resetUpstreamPolicies() {
    this._upstreamPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamPoliciesInput() {
    return this._upstreamPolicies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository google_artifact_registry_repository}
*/
export class GoogleArtifactRegistryRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_artifact_registry_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleArtifactRegistryRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleArtifactRegistryRepository to import
  * @param importFromId The id of the existing GoogleArtifactRegistryRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleArtifactRegistryRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_artifact_registry_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.4.0/docs/resources/google_artifact_registry_repository google_artifact_registry_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleArtifactRegistryRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleArtifactRegistryRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_artifact_registry_repository',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '5.4.0',
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
    this._cleanupPolicyDryRun = config.cleanupPolicyDryRun;
    this._description = config.description;
    this._format = config.format;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._location = config.location;
    this._mode = config.mode;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._cleanupPolicies.internalValue = config.cleanupPolicies;
    this._dockerConfig.internalValue = config.dockerConfig;
    this._mavenConfig.internalValue = config.mavenConfig;
    this._remoteRepositoryConfig.internalValue = config.remoteRepositoryConfig;
    this._timeouts.internalValue = config.timeouts;
    this._virtualRepositoryConfig.internalValue = config.virtualRepositoryConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cleanup_policy_dry_run - computed: false, optional: true, required: false
  private _cleanupPolicyDryRun?: boolean | cdktf.IResolvable; 
  public get cleanupPolicyDryRun() {
    return this.getBooleanAttribute('cleanup_policy_dry_run');
  }
  public set cleanupPolicyDryRun(value: boolean | cdktf.IResolvable) {
    this._cleanupPolicyDryRun = value;
  }
  public resetCleanupPolicyDryRun() {
    this._cleanupPolicyDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyDryRunInput() {
    return this._cleanupPolicyDryRun;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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

  // location - computed: true, optional: true, required: false
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
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

  // cleanup_policies - computed: false, optional: true, required: false
  private _cleanupPolicies = new GoogleArtifactRegistryRepositoryCleanupPoliciesList(this, "cleanup_policies", true);
  public get cleanupPolicies() {
    return this._cleanupPolicies;
  }
  public putCleanupPolicies(value: GoogleArtifactRegistryRepositoryCleanupPolicies[] | cdktf.IResolvable) {
    this._cleanupPolicies.internalValue = value;
  }
  public resetCleanupPolicies() {
    this._cleanupPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPoliciesInput() {
    return this._cleanupPolicies.internalValue;
  }

  // docker_config - computed: false, optional: true, required: false
  private _dockerConfig = new GoogleArtifactRegistryRepositoryDockerConfigOutputReference(this, "docker_config");
  public get dockerConfig() {
    return this._dockerConfig;
  }
  public putDockerConfig(value: GoogleArtifactRegistryRepositoryDockerConfig) {
    this._dockerConfig.internalValue = value;
  }
  public resetDockerConfig() {
    this._dockerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerConfigInput() {
    return this._dockerConfig.internalValue;
  }

  // maven_config - computed: false, optional: true, required: false
  private _mavenConfig = new GoogleArtifactRegistryRepositoryMavenConfigOutputReference(this, "maven_config");
  public get mavenConfig() {
    return this._mavenConfig;
  }
  public putMavenConfig(value: GoogleArtifactRegistryRepositoryMavenConfig) {
    this._mavenConfig.internalValue = value;
  }
  public resetMavenConfig() {
    this._mavenConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenConfigInput() {
    return this._mavenConfig.internalValue;
  }

  // remote_repository_config - computed: false, optional: true, required: false
  private _remoteRepositoryConfig = new GoogleArtifactRegistryRepositoryRemoteRepositoryConfigOutputReference(this, "remote_repository_config");
  public get remoteRepositoryConfig() {
    return this._remoteRepositoryConfig;
  }
  public putRemoteRepositoryConfig(value: GoogleArtifactRegistryRepositoryRemoteRepositoryConfig) {
    this._remoteRepositoryConfig.internalValue = value;
  }
  public resetRemoteRepositoryConfig() {
    this._remoteRepositoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteRepositoryConfigInput() {
    return this._remoteRepositoryConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleArtifactRegistryRepositoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleArtifactRegistryRepositoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_repository_config - computed: false, optional: true, required: false
  private _virtualRepositoryConfig = new GoogleArtifactRegistryRepositoryVirtualRepositoryConfigOutputReference(this, "virtual_repository_config");
  public get virtualRepositoryConfig() {
    return this._virtualRepositoryConfig;
  }
  public putVirtualRepositoryConfig(value: GoogleArtifactRegistryRepositoryVirtualRepositoryConfig) {
    this._virtualRepositoryConfig.internalValue = value;
  }
  public resetVirtualRepositoryConfig() {
    this._virtualRepositoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRepositoryConfigInput() {
    return this._virtualRepositoryConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cleanup_policy_dry_run: cdktf.booleanToTerraform(this._cleanupPolicyDryRun),
      description: cdktf.stringToTerraform(this._description),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      mode: cdktf.stringToTerraform(this._mode),
      project: cdktf.stringToTerraform(this._project),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      cleanup_policies: cdktf.listMapper(googleArtifactRegistryRepositoryCleanupPoliciesToTerraform, true)(this._cleanupPolicies.internalValue),
      docker_config: googleArtifactRegistryRepositoryDockerConfigToTerraform(this._dockerConfig.internalValue),
      maven_config: googleArtifactRegistryRepositoryMavenConfigToTerraform(this._mavenConfig.internalValue),
      remote_repository_config: googleArtifactRegistryRepositoryRemoteRepositoryConfigToTerraform(this._remoteRepositoryConfig.internalValue),
      timeouts: googleArtifactRegistryRepositoryTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_repository_config: googleArtifactRegistryRepositoryVirtualRepositoryConfigToTerraform(this._virtualRepositoryConfig.internalValue),
    };
  }
}
