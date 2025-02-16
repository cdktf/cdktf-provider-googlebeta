// https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudbuildTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human-readable description of the trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#description GoogleCloudbuildTrigger#description}
  */
  readonly description?: string;
  /**
  * Whether the trigger is disabled or not. If true, the trigger will never result in a build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#disabled GoogleCloudbuildTrigger#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Path, from the source root, to a file whose contents is used for the template.
  * Either a filename or build template must be provided. Set this only when using trigger_template or github.
  * When using Pub/Sub, Webhook or Manual set the file name using git_file_source instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#filename GoogleCloudbuildTrigger#filename}
  */
  readonly filename?: string;
  /**
  * A Common Expression Language string. Used only with Pub/Sub and Webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#filter GoogleCloudbuildTrigger#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#id GoogleCloudbuildTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
  * extended with support for '**'.
  * 
  * If ignoredFiles and changed files are both empty, then they are not
  * used to determine whether or not to trigger a build.
  * 
  * If ignoredFiles is not empty, then we ignore any files that match any
  * of the ignored_file globs. If the change has no files that are outside
  * of the ignoredFiles globs, then we do not trigger a build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#ignored_files GoogleCloudbuildTrigger#ignored_files}
  */
  readonly ignoredFiles?: string[];
  /**
  * Build logs will be sent back to GitHub as part of the checkrun
  * result.  Values can be INCLUDE_BUILD_LOGS_UNSPECIFIED or
  * INCLUDE_BUILD_LOGS_WITH_STATUS Possible values: ["INCLUDE_BUILD_LOGS_UNSPECIFIED", "INCLUDE_BUILD_LOGS_WITH_STATUS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#include_build_logs GoogleCloudbuildTrigger#include_build_logs}
  */
  readonly includeBuildLogs?: string;
  /**
  * ignoredFiles and includedFiles are file glob matches using https://golang.org/pkg/path/filepath/#Match
  * extended with support for '**'.
  * 
  * If any of the files altered in the commit pass the ignoredFiles filter
  * and includedFiles is empty, then as far as this filter is concerned, we
  * should trigger the build.
  * 
  * If any of the files altered in the commit pass the ignoredFiles filter
  * and includedFiles is not empty, then we make sure that at least one of
  * those files matches a includedFiles glob. If not, then we do not trigger
  * a build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#included_files GoogleCloudbuildTrigger#included_files}
  */
  readonly includedFiles?: string[];
  /**
  * The [Cloud Build location](https://cloud.google.com/build/docs/locations) for the trigger.
  * If not specified, "global" is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#location GoogleCloudbuildTrigger#location}
  */
  readonly location?: string;
  /**
  * Name of the trigger. Must be unique within the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#project GoogleCloudbuildTrigger#project}
  */
  readonly project?: string;
  /**
  * The service account used for all user-controlled operations including
  * triggers.patch, triggers.run, builds.create, and builds.cancel.
  * 
  * If no service account is set, then the standard Cloud Build service account
  * ([PROJECT_NUM]@system.gserviceaccount.com) will be used instead.
  * 
  * Format: projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT_ID_OR_EMAIL}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#service_account GoogleCloudbuildTrigger#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Substitutions data for Build resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#substitutions GoogleCloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Tags for annotation of a BuildTrigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tags GoogleCloudbuildTrigger#tags}
  */
  readonly tags?: string[];
  /**
  * approval_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#approval_config GoogleCloudbuildTrigger#approval_config}
  */
  readonly approvalConfig?: GoogleCloudbuildTriggerApprovalConfig;
  /**
  * bitbucket_server_trigger_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#bitbucket_server_trigger_config GoogleCloudbuildTrigger#bitbucket_server_trigger_config}
  */
  readonly bitbucketServerTriggerConfig?: GoogleCloudbuildTriggerBitbucketServerTriggerConfig;
  /**
  * build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#build GoogleCloudbuildTrigger#build}
  */
  readonly buildAttribute?: GoogleCloudbuildTriggerBuild;
  /**
  * git_file_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#git_file_source GoogleCloudbuildTrigger#git_file_source}
  */
  readonly gitFileSource?: GoogleCloudbuildTriggerGitFileSource;
  /**
  * github block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#github GoogleCloudbuildTrigger#github}
  */
  readonly github?: GoogleCloudbuildTriggerGithub;
  /**
  * pubsub_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#pubsub_config GoogleCloudbuildTrigger#pubsub_config}
  */
  readonly pubsubConfig?: GoogleCloudbuildTriggerPubsubConfig;
  /**
  * repository_event_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository_event_config GoogleCloudbuildTrigger#repository_event_config}
  */
  readonly repositoryEventConfig?: GoogleCloudbuildTriggerRepositoryEventConfig;
  /**
  * source_to_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#source_to_build GoogleCloudbuildTrigger#source_to_build}
  */
  readonly sourceToBuild?: GoogleCloudbuildTriggerSourceToBuild;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#timeouts GoogleCloudbuildTrigger#timeouts}
  */
  readonly timeouts?: GoogleCloudbuildTriggerTimeouts;
  /**
  * trigger_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#trigger_template GoogleCloudbuildTrigger#trigger_template}
  */
  readonly triggerTemplate?: GoogleCloudbuildTriggerTriggerTemplate;
  /**
  * webhook_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#webhook_config GoogleCloudbuildTrigger#webhook_config}
  */
  readonly webhookConfig?: GoogleCloudbuildTriggerWebhookConfig;
}
export interface GoogleCloudbuildTriggerApprovalConfig {
  /**
  * Whether or not approval is needed. If this is set on a build, it will become pending when run,
  * and will need to be explicitly approved to start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#approval_required GoogleCloudbuildTrigger#approval_required}
  */
  readonly approvalRequired?: boolean | cdktf.IResolvable;
}

export function googleCloudbuildTriggerApprovalConfigToTerraform(struct?: GoogleCloudbuildTriggerApprovalConfigOutputReference | GoogleCloudbuildTriggerApprovalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval_required: cdktf.booleanToTerraform(struct!.approvalRequired),
  }
}


export function googleCloudbuildTriggerApprovalConfigToHclTerraform(struct?: GoogleCloudbuildTriggerApprovalConfigOutputReference | GoogleCloudbuildTriggerApprovalConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval_required: {
      value: cdktf.booleanToHclTerraform(struct!.approvalRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerApprovalConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerApprovalConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalRequired = this._approvalRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerApprovalConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approvalRequired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approvalRequired = value.approvalRequired;
    }
  }

  // approval_required - computed: false, optional: true, required: false
  private _approvalRequired?: boolean | cdktf.IResolvable; 
  public get approvalRequired() {
    return this.getBooleanAttribute('approval_required');
  }
  public set approvalRequired(value: boolean | cdktf.IResolvable) {
    this._approvalRequired = value;
  }
  public resetApprovalRequired() {
    this._approvalRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalRequiredInput() {
    return this._approvalRequired;
  }
}
export interface GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest {
  /**
  * Regex of branches to match.
  * The syntax of the regular expressions accepted is the syntax accepted by RE2 and described at https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}
  */
  readonly branch: string;
  /**
  * Configure builds to run whether a repository owner or collaborator need to comment /gcbrun. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#comment_control GoogleCloudbuildTrigger#comment_control}
  */
  readonly commentControl?: string;
  /**
  * If true, branches that do NOT match the git_ref will trigger a build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
}

export function googleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestToTerraform(struct?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference | GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    comment_control: cdktf.stringToTerraform(struct!.commentControl),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
  }
}


export function googleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestToHclTerraform(struct?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference | GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_control: {
      value: cdktf.stringToHclTerraform(struct!.commentControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commentControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentControl = this._commentControl;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._commentControl = undefined;
      this._invertRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._commentControl = value.commentControl;
      this._invertRegex = value.invertRegex;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // comment_control - computed: false, optional: true, required: false
  private _commentControl?: string; 
  public get commentControl() {
    return this.getStringAttribute('comment_control');
  }
  public set commentControl(value: string) {
    this._commentControl = value;
  }
  public resetCommentControl() {
    this._commentControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentControlInput() {
    return this._commentControl;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }
}
export interface GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush {
  /**
  * Regex of branches to match.  Specify only one of branch or tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}
  */
  readonly branch?: string;
  /**
  * When true, only trigger a build if the revision regex does NOT match the gitRef regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * Regex of tags to match.  Specify only one of branch or tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tag GoogleCloudbuildTrigger#tag}
  */
  readonly tag?: string;
}

export function googleCloudbuildTriggerBitbucketServerTriggerConfigPushToTerraform(struct?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference | GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function googleCloudbuildTriggerBitbucketServerTriggerConfigPushToHclTerraform(struct?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference | GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._invertRegex = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._invertRegex = value.invertRegex;
      this._tag = value.tag;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface GoogleCloudbuildTriggerBitbucketServerTriggerConfig {
  /**
  * The Bitbucket server config resource that this trigger config maps to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#bitbucket_server_config_resource GoogleCloudbuildTrigger#bitbucket_server_config_resource}
  */
  readonly bitbucketServerConfigResource: string;
  /**
  * Key of the project that the repo is in. For example: The key for https://mybitbucket.server/projects/TEST/repos/test-repo is "TEST".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#project_key GoogleCloudbuildTrigger#project_key}
  */
  readonly projectKey: string;
  /**
  * Slug of the repository. A repository slug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.
  * For example, if the repository name is 'test repo', in the URL it would become 'test-repo' as in https://mybitbucket.server/projects/TEST/repos/test-repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repo_slug GoogleCloudbuildTrigger#repo_slug}
  */
  readonly repoSlug: string;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#pull_request GoogleCloudbuildTrigger#pull_request}
  */
  readonly pullRequest?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest;
  /**
  * push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#push GoogleCloudbuildTrigger#push}
  */
  readonly push?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush;
}

export function googleCloudbuildTriggerBitbucketServerTriggerConfigToTerraform(struct?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference | GoogleCloudbuildTriggerBitbucketServerTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitbucket_server_config_resource: cdktf.stringToTerraform(struct!.bitbucketServerConfigResource),
    project_key: cdktf.stringToTerraform(struct!.projectKey),
    repo_slug: cdktf.stringToTerraform(struct!.repoSlug),
    pull_request: googleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestToTerraform(struct!.pullRequest),
    push: googleCloudbuildTriggerBitbucketServerTriggerConfigPushToTerraform(struct!.push),
  }
}


export function googleCloudbuildTriggerBitbucketServerTriggerConfigToHclTerraform(struct?: GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference | GoogleCloudbuildTriggerBitbucketServerTriggerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitbucket_server_config_resource: {
      value: cdktf.stringToHclTerraform(struct!.bitbucketServerConfigResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_key: {
      value: cdktf.stringToHclTerraform(struct!.projectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_slug: {
      value: cdktf.stringToHclTerraform(struct!.repoSlug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: googleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestList",
    },
    push: {
      value: googleCloudbuildTriggerBitbucketServerTriggerConfigPushToHclTerraform(struct!.push),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBitbucketServerTriggerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitbucketServerConfigResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketServerConfigResource = this._bitbucketServerConfigResource;
    }
    if (this._projectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectKey = this._projectKey;
    }
    if (this._repoSlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoSlug = this._repoSlug;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBitbucketServerTriggerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitbucketServerConfigResource = undefined;
      this._projectKey = undefined;
      this._repoSlug = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitbucketServerConfigResource = value.bitbucketServerConfigResource;
      this._projectKey = value.projectKey;
      this._repoSlug = value.repoSlug;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
    }
  }

  // bitbucket_server_config_resource - computed: false, optional: false, required: true
  private _bitbucketServerConfigResource?: string; 
  public get bitbucketServerConfigResource() {
    return this.getStringAttribute('bitbucket_server_config_resource');
  }
  public set bitbucketServerConfigResource(value: string) {
    this._bitbucketServerConfigResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketServerConfigResourceInput() {
    return this._bitbucketServerConfigResource;
  }

  // project_key - computed: false, optional: false, required: true
  private _projectKey?: string; 
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }
  public set projectKey(value: string) {
    this._projectKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectKeyInput() {
    return this._projectKey;
  }

  // repo_slug - computed: false, optional: false, required: true
  private _repoSlug?: string; 
  public get repoSlug() {
    return this.getStringAttribute('repo_slug');
  }
  public set repoSlug(value: string) {
    this._repoSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoSlugInput() {
    return this._repoSlug;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new GoogleCloudbuildTriggerBitbucketServerTriggerConfigPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: GoogleCloudbuildTriggerBitbucketServerTriggerConfigPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts {
  /**
  * Maven artifactId value used when uploading the artifact to Artifact Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#artifact_id GoogleCloudbuildTrigger#artifact_id}
  */
  readonly artifactId?: string;
  /**
  * Maven groupId value used when uploading the artifact to Artifact Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#group_id GoogleCloudbuildTrigger#group_id}
  */
  readonly groupId?: string;
  /**
  * Path to an artifact in the build's workspace to be uploaded to Artifact Registry. This can be either an absolute path, e.g. /workspace/my-app/target/my-app-1.0.SNAPSHOT.jar or a relative path from /workspace, e.g. my-app/target/my-app-1.0.SNAPSHOT.jar.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}
  */
  readonly path?: string;
  /**
  * Artifact Registry repository, in the form "https://$REGION-maven.pkg.dev/$PROJECT/$REPOSITORY"
  * 
  * Artifact in the workspace specified by path will be uploaded to Artifact Registry with this location as a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}
  */
  readonly repository?: string;
  /**
  * Maven version value used when uploading the artifact to Artifact Registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#version GoogleCloudbuildTrigger#version}
  */
  readonly version?: string;
}

export function googleCloudbuildTriggerBuildArtifactsMavenArtifactsToTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_id: cdktf.stringToTerraform(struct!.artifactId),
    group_id: cdktf.stringToTerraform(struct!.groupId),
    path: cdktf.stringToTerraform(struct!.path),
    repository: cdktf.stringToTerraform(struct!.repository),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleCloudbuildTriggerBuildArtifactsMavenArtifactsToHclTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_id: {
      value: cdktf.stringToHclTerraform(struct!.artifactId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
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

export class GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactId !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactId = this._artifactId;
    }
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactId = undefined;
      this._groupId = undefined;
      this._path = undefined;
      this._repository = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactId = value.artifactId;
      this._groupId = value.groupId;
      this._path = value.path;
      this._repository = value.repository;
      this._version = value.version;
    }
  }

  // artifact_id - computed: false, optional: true, required: false
  private _artifactId?: string; 
  public get artifactId() {
    return this.getStringAttribute('artifact_id');
  }
  public set artifactId(value: string) {
    this._artifactId = value;
  }
  public resetArtifactId() {
    this._artifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactIdInput() {
    return this._artifactId;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

export class GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference {
    return new GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildArtifactsNpmPackages {
  /**
  * Path to the package.json. e.g. workspace/path/to/package
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#package_path GoogleCloudbuildTrigger#package_path}
  */
  readonly packagePath?: string;
  /**
  * Artifact Registry repository, in the form "https://$REGION-npm.pkg.dev/$PROJECT/$REPOSITORY"
  * 
  * Npm package in the workspace specified by path will be zipped and uploaded to Artifact Registry with this location as a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}
  */
  readonly repository?: string;
}

export function googleCloudbuildTriggerBuildArtifactsNpmPackagesToTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsNpmPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_path: cdktf.stringToTerraform(struct!.packagePath),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function googleCloudbuildTriggerBuildArtifactsNpmPackagesToHclTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsNpmPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_path: {
      value: cdktf.stringToHclTerraform(struct!.packagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildArtifactsNpmPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.packagePath = this._packagePath;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildArtifactsNpmPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._packagePath = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._packagePath = value.packagePath;
      this._repository = value.repository;
    }
  }

  // package_path - computed: false, optional: true, required: false
  private _packagePath?: string; 
  public get packagePath() {
    return this.getStringAttribute('package_path');
  }
  public set packagePath(value: string) {
    this._packagePath = value;
  }
  public resetPackagePath() {
    this._packagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagePathInput() {
    return this._packagePath;
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

export class GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildArtifactsNpmPackages[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference {
    return new GoogleCloudbuildTriggerBuildArtifactsNpmPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildArtifactsObjectsTiming {
}

export function googleCloudbuildTriggerBuildArtifactsObjectsTimingToTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsObjectsTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCloudbuildTriggerBuildArtifactsObjectsTimingToHclTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsObjectsTiming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildArtifactsObjectsTiming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildArtifactsObjectsTiming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference {
    return new GoogleCloudbuildTriggerBuildArtifactsObjectsTimingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildArtifactsObjects {
  /**
  * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/".
  * 
  * Files in the workspace matching any path pattern will be uploaded to Cloud Storage with
  * this location as a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#location GoogleCloudbuildTrigger#location}
  */
  readonly location?: string;
  /**
  * Path globs used to match files in the build's workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#paths GoogleCloudbuildTrigger#paths}
  */
  readonly paths?: string[];
}

export function googleCloudbuildTriggerBuildArtifactsObjectsToTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference | GoogleCloudbuildTriggerBuildArtifactsObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
  }
}


export function googleCloudbuildTriggerBuildArtifactsObjectsToHclTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference | GoogleCloudbuildTriggerBuildArtifactsObjects): any {
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
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildArtifactsObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildArtifactsObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._location = undefined;
      this._paths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._location = value.location;
      this._paths = value.paths;
    }
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

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // timing - computed: true, optional: false, required: false
  private _timing = new GoogleCloudbuildTriggerBuildArtifactsObjectsTimingList(this, "timing", false);
  public get timing() {
    return this._timing;
  }
}
export interface GoogleCloudbuildTriggerBuildArtifactsPythonPackages {
  /**
  * Path globs used to match files in the build's workspace. For Python/ Twine, this is usually dist/*, and sometimes additionally an .asc file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#paths GoogleCloudbuildTrigger#paths}
  */
  readonly paths?: string[];
  /**
  * Artifact Registry repository, in the form "https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY"
  * 
  * Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}
  */
  readonly repository?: string;
}

export function googleCloudbuildTriggerBuildArtifactsPythonPackagesToTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsPythonPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    repository: cdktf.stringToTerraform(struct!.repository),
  }
}


export function googleCloudbuildTriggerBuildArtifactsPythonPackagesToHclTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsPythonPackages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildArtifactsPythonPackages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildArtifactsPythonPackages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._paths = undefined;
      this._repository = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._paths = value.paths;
      this._repository = value.repository;
    }
  }

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
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

export class GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildArtifactsPythonPackages[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference {
    return new GoogleCloudbuildTriggerBuildArtifactsPythonPackagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildArtifacts {
  /**
  * A list of images to be pushed upon the successful completion of all build steps.
  * 
  * The images will be pushed using the builder service account's credentials.
  * 
  * The digests of the pushed images will be stored in the Build resource's results field.
  * 
  * If any of the images fail to be pushed, the build is marked FAILURE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#images GoogleCloudbuildTrigger#images}
  */
  readonly images?: string[];
  /**
  * maven_artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#maven_artifacts GoogleCloudbuildTrigger#maven_artifacts}
  */
  readonly mavenArtifacts?: GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts[] | cdktf.IResolvable;
  /**
  * npm_packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#npm_packages GoogleCloudbuildTrigger#npm_packages}
  */
  readonly npmPackages?: GoogleCloudbuildTriggerBuildArtifactsNpmPackages[] | cdktf.IResolvable;
  /**
  * objects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#objects GoogleCloudbuildTrigger#objects}
  */
  readonly objects?: GoogleCloudbuildTriggerBuildArtifactsObjects;
  /**
  * python_packages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#python_packages GoogleCloudbuildTrigger#python_packages}
  */
  readonly pythonPackages?: GoogleCloudbuildTriggerBuildArtifactsPythonPackages[] | cdktf.IResolvable;
}

export function googleCloudbuildTriggerBuildArtifactsToTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsOutputReference | GoogleCloudbuildTriggerBuildArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    maven_artifacts: cdktf.listMapper(googleCloudbuildTriggerBuildArtifactsMavenArtifactsToTerraform, true)(struct!.mavenArtifacts),
    npm_packages: cdktf.listMapper(googleCloudbuildTriggerBuildArtifactsNpmPackagesToTerraform, true)(struct!.npmPackages),
    objects: googleCloudbuildTriggerBuildArtifactsObjectsToTerraform(struct!.objects),
    python_packages: cdktf.listMapper(googleCloudbuildTriggerBuildArtifactsPythonPackagesToTerraform, true)(struct!.pythonPackages),
  }
}


export function googleCloudbuildTriggerBuildArtifactsToHclTerraform(struct?: GoogleCloudbuildTriggerBuildArtifactsOutputReference | GoogleCloudbuildTriggerBuildArtifacts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    maven_artifacts: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildArtifactsMavenArtifactsToHclTerraform, true)(struct!.mavenArtifacts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList",
    },
    npm_packages: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildArtifactsNpmPackagesToHclTerraform, true)(struct!.npmPackages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList",
    },
    objects: {
      value: googleCloudbuildTriggerBuildArtifactsObjectsToHclTerraform(struct!.objects),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildArtifactsObjectsList",
    },
    python_packages: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildArtifactsPythonPackagesToHclTerraform, true)(struct!.pythonPackages),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildArtifactsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildArtifacts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._mavenArtifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mavenArtifacts = this._mavenArtifacts?.internalValue;
    }
    if (this._npmPackages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.npmPackages = this._npmPackages?.internalValue;
    }
    if (this._objects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objects = this._objects?.internalValue;
    }
    if (this._pythonPackages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonPackages = this._pythonPackages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildArtifacts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._images = undefined;
      this._mavenArtifacts.internalValue = undefined;
      this._npmPackages.internalValue = undefined;
      this._objects.internalValue = undefined;
      this._pythonPackages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._images = value.images;
      this._mavenArtifacts.internalValue = value.mavenArtifacts;
      this._npmPackages.internalValue = value.npmPackages;
      this._objects.internalValue = value.objects;
      this._pythonPackages.internalValue = value.pythonPackages;
    }
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // maven_artifacts - computed: false, optional: true, required: false
  private _mavenArtifacts = new GoogleCloudbuildTriggerBuildArtifactsMavenArtifactsList(this, "maven_artifacts", false);
  public get mavenArtifacts() {
    return this._mavenArtifacts;
  }
  public putMavenArtifacts(value: GoogleCloudbuildTriggerBuildArtifactsMavenArtifacts[] | cdktf.IResolvable) {
    this._mavenArtifacts.internalValue = value;
  }
  public resetMavenArtifacts() {
    this._mavenArtifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mavenArtifactsInput() {
    return this._mavenArtifacts.internalValue;
  }

  // npm_packages - computed: false, optional: true, required: false
  private _npmPackages = new GoogleCloudbuildTriggerBuildArtifactsNpmPackagesList(this, "npm_packages", false);
  public get npmPackages() {
    return this._npmPackages;
  }
  public putNpmPackages(value: GoogleCloudbuildTriggerBuildArtifactsNpmPackages[] | cdktf.IResolvable) {
    this._npmPackages.internalValue = value;
  }
  public resetNpmPackages() {
    this._npmPackages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get npmPackagesInput() {
    return this._npmPackages.internalValue;
  }

  // objects - computed: false, optional: true, required: false
  private _objects = new GoogleCloudbuildTriggerBuildArtifactsObjectsOutputReference(this, "objects");
  public get objects() {
    return this._objects;
  }
  public putObjects(value: GoogleCloudbuildTriggerBuildArtifactsObjects) {
    this._objects.internalValue = value;
  }
  public resetObjects() {
    this._objects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectsInput() {
    return this._objects.internalValue;
  }

  // python_packages - computed: false, optional: true, required: false
  private _pythonPackages = new GoogleCloudbuildTriggerBuildArtifactsPythonPackagesList(this, "python_packages", false);
  public get pythonPackages() {
    return this._pythonPackages;
  }
  public putPythonPackages(value: GoogleCloudbuildTriggerBuildArtifactsPythonPackages[] | cdktf.IResolvable) {
    this._pythonPackages.internalValue = value;
  }
  public resetPythonPackages() {
    this._pythonPackages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonPackagesInput() {
    return this._pythonPackages.internalValue;
  }
}
export interface GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager {
  /**
  * Environment variable name to associate with the secret. Secret environment
  * variables must be unique across all of a build's secrets, and must be used
  * by at least one build step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#env GoogleCloudbuildTrigger#env}
  */
  readonly env: string;
  /**
  * Resource name of the SecretVersion. In format: projects/* /secrets/* /versions/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#version_name GoogleCloudbuildTrigger#version_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly versionName: string;
}

export function googleCloudbuildTriggerBuildAvailableSecretsSecretManagerToTerraform(struct?: GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.stringToTerraform(struct!.env),
    version_name: cdktf.stringToTerraform(struct!.versionName),
  }
}


export function googleCloudbuildTriggerBuildAvailableSecretsSecretManagerToHclTerraform(struct?: GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.stringToHclTerraform(struct!.env),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_name: {
      value: cdktf.stringToHclTerraform(struct!.versionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._versionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionName = this._versionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._versionName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._versionName = value.versionName;
    }
  }

  // env - computed: false, optional: false, required: true
  private _env?: string; 
  public get env() {
    return this.getStringAttribute('env');
  }
  public set env(value: string) {
    this._env = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // version_name - computed: false, optional: false, required: true
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }
}

export class GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference {
    return new GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildAvailableSecrets {
  /**
  * secret_manager block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#secret_manager GoogleCloudbuildTrigger#secret_manager}
  */
  readonly secretManager: GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager[] | cdktf.IResolvable;
}

export function googleCloudbuildTriggerBuildAvailableSecretsToTerraform(struct?: GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference | GoogleCloudbuildTriggerBuildAvailableSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_manager: cdktf.listMapper(googleCloudbuildTriggerBuildAvailableSecretsSecretManagerToTerraform, true)(struct!.secretManager),
  }
}


export function googleCloudbuildTriggerBuildAvailableSecretsToHclTerraform(struct?: GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference | GoogleCloudbuildTriggerBuildAvailableSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_manager: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildAvailableSecretsSecretManagerToHclTerraform, true)(struct!.secretManager),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildAvailableSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretManager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretManager = this._secretManager?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildAvailableSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretManager.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretManager.internalValue = value.secretManager;
    }
  }

  // secret_manager - computed: false, optional: false, required: true
  private _secretManager = new GoogleCloudbuildTriggerBuildAvailableSecretsSecretManagerList(this, "secret_manager", false);
  public get secretManager() {
    return this._secretManager;
  }
  public putSecretManager(value: GoogleCloudbuildTriggerBuildAvailableSecretsSecretManager[] | cdktf.IResolvable) {
    this._secretManager.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretManagerInput() {
    return this._secretManager.internalValue;
  }
}
export interface GoogleCloudbuildTriggerBuildOptionsVolumes {
  /**
  * Name of the volume to mount.
  * 
  * Volume names must be unique per build step and must be valid names for Docker volumes.
  * Each named volume must be used by at least two build steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Path at which to mount the volume.
  * 
  * Paths must be absolute and cannot conflict with other volume paths on the same
  * build step or with certain reserved volume paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}
  */
  readonly path?: string;
}

export function googleCloudbuildTriggerBuildOptionsVolumesToTerraform(struct?: GoogleCloudbuildTriggerBuildOptionsVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function googleCloudbuildTriggerBuildOptionsVolumesToHclTerraform(struct?: GoogleCloudbuildTriggerBuildOptionsVolumes | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildOptionsVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildOptionsVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleCloudbuildTriggerBuildOptionsVolumesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildOptionsVolumes[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference {
    return new GoogleCloudbuildTriggerBuildOptionsVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildOptions {
  /**
  * Requested disk size for the VM that runs the build. Note that this is NOT "disk free";
  * some of the space will be used by the operating system and build utilities.
  * Also note that this is the minimum disk size that will be allocated for the build --
  * the build may run with a larger disk than requested. At present, the maximum disk size
  * is 1000GB; builds that request more than the maximum are rejected with an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#disk_size_gb GoogleCloudbuildTrigger#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Option to specify whether or not to apply bash style string operations to the substitutions.
  * 
  * NOTE this is always enabled for triggered builds and cannot be overridden in the build configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#dynamic_substitutions GoogleCloudbuildTrigger#dynamic_substitutions}
  */
  readonly dynamicSubstitutions?: boolean | cdktf.IResolvable;
  /**
  * A list of global environment variable definitions that will exist for all build steps
  * in this build. If a variable is defined in both globally and in a build step,
  * the variable will use the build step value.
  * 
  * The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#env GoogleCloudbuildTrigger#env}
  */
  readonly env?: string[];
  /**
  * Option to define build log streaming behavior to Google Cloud Storage. Possible values: ["STREAM_DEFAULT", "STREAM_ON", "STREAM_OFF"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#log_streaming_option GoogleCloudbuildTrigger#log_streaming_option}
  */
  readonly logStreamingOption?: string;
  /**
  * Option to specify the logging mode, which determines if and where build logs are stored. Possible values: ["LOGGING_UNSPECIFIED", "LEGACY", "GCS_ONLY", "STACKDRIVER_ONLY", "CLOUD_LOGGING_ONLY", "NONE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#logging GoogleCloudbuildTrigger#logging}
  */
  readonly logging?: string;
  /**
  * Compute Engine machine type on which to run the build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#machine_type GoogleCloudbuildTrigger#machine_type}
  */
  readonly machineType?: string;
  /**
  * Requested verifiability options. Possible values: ["NOT_VERIFIED", "VERIFIED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#requested_verify_option GoogleCloudbuildTrigger#requested_verify_option}
  */
  readonly requestedVerifyOption?: string;
  /**
  * A list of global environment variables, which are encrypted using a Cloud Key Management
  * Service crypto key. These values must be specified in the build's Secret. These variables
  * will be available to all build steps in this build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#secret_env GoogleCloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: string[];
  /**
  * Requested hash for SourceProvenance. Possible values: ["NONE", "SHA256", "MD5"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#source_provenance_hash GoogleCloudbuildTrigger#source_provenance_hash}
  */
  readonly sourceProvenanceHash?: string[];
  /**
  * Option to specify behavior when there is an error in the substitution checks.
  * 
  * NOTE this is always set to ALLOW_LOOSE for triggered builds and cannot be overridden
  * in the build configuration file. Possible values: ["MUST_MATCH", "ALLOW_LOOSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#substitution_option GoogleCloudbuildTrigger#substitution_option}
  */
  readonly substitutionOption?: string;
  /**
  * Option to specify a WorkerPool for the build. Format projects/{project}/workerPools/{workerPool}
  * 
  * This field is experimental.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#worker_pool GoogleCloudbuildTrigger#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#volumes GoogleCloudbuildTrigger#volumes}
  */
  readonly volumes?: GoogleCloudbuildTriggerBuildOptionsVolumes[] | cdktf.IResolvable;
}

export function googleCloudbuildTriggerBuildOptionsToTerraform(struct?: GoogleCloudbuildTriggerBuildOptionsOutputReference | GoogleCloudbuildTriggerBuildOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    dynamic_substitutions: cdktf.booleanToTerraform(struct!.dynamicSubstitutions),
    env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.env),
    log_streaming_option: cdktf.stringToTerraform(struct!.logStreamingOption),
    logging: cdktf.stringToTerraform(struct!.logging),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    requested_verify_option: cdktf.stringToTerraform(struct!.requestedVerifyOption),
    secret_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretEnv),
    source_provenance_hash: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceProvenanceHash),
    substitution_option: cdktf.stringToTerraform(struct!.substitutionOption),
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
    volumes: cdktf.listMapper(googleCloudbuildTriggerBuildOptionsVolumesToTerraform, true)(struct!.volumes),
  }
}


export function googleCloudbuildTriggerBuildOptionsToHclTerraform(struct?: GoogleCloudbuildTriggerBuildOptionsOutputReference | GoogleCloudbuildTriggerBuildOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_substitutions: {
      value: cdktf.booleanToHclTerraform(struct!.dynamicSubstitutions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.env),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_streaming_option: {
      value: cdktf.stringToHclTerraform(struct!.logStreamingOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requested_verify_option: {
      value: cdktf.stringToHclTerraform(struct!.requestedVerifyOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_provenance_hash: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceProvenanceHash),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    substitution_option: {
      value: cdktf.stringToHclTerraform(struct!.substitutionOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool: {
      value: cdktf.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildOptionsVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildOptionsVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._dynamicSubstitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicSubstitutions = this._dynamicSubstitutions;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._logStreamingOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStreamingOption = this._logStreamingOption;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._requestedVerifyOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestedVerifyOption = this._requestedVerifyOption;
    }
    if (this._secretEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv;
    }
    if (this._sourceProvenanceHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProvenanceHash = this._sourceProvenanceHash;
    }
    if (this._substitutionOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutionOption = this._substitutionOption;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._dynamicSubstitutions = undefined;
      this._env = undefined;
      this._logStreamingOption = undefined;
      this._logging = undefined;
      this._machineType = undefined;
      this._requestedVerifyOption = undefined;
      this._secretEnv = undefined;
      this._sourceProvenanceHash = undefined;
      this._substitutionOption = undefined;
      this._workerPool = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._dynamicSubstitutions = value.dynamicSubstitutions;
      this._env = value.env;
      this._logStreamingOption = value.logStreamingOption;
      this._logging = value.logging;
      this._machineType = value.machineType;
      this._requestedVerifyOption = value.requestedVerifyOption;
      this._secretEnv = value.secretEnv;
      this._sourceProvenanceHash = value.sourceProvenanceHash;
      this._substitutionOption = value.substitutionOption;
      this._workerPool = value.workerPool;
      this._volumes.internalValue = value.volumes;
    }
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // dynamic_substitutions - computed: false, optional: true, required: false
  private _dynamicSubstitutions?: boolean | cdktf.IResolvable; 
  public get dynamicSubstitutions() {
    return this.getBooleanAttribute('dynamic_substitutions');
  }
  public set dynamicSubstitutions(value: boolean | cdktf.IResolvable) {
    this._dynamicSubstitutions = value;
  }
  public resetDynamicSubstitutions() {
    this._dynamicSubstitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSubstitutionsInput() {
    return this._dynamicSubstitutions;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // log_streaming_option - computed: false, optional: true, required: false
  private _logStreamingOption?: string; 
  public get logStreamingOption() {
    return this.getStringAttribute('log_streaming_option');
  }
  public set logStreamingOption(value: string) {
    this._logStreamingOption = value;
  }
  public resetLogStreamingOption() {
    this._logStreamingOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStreamingOptionInput() {
    return this._logStreamingOption;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // requested_verify_option - computed: false, optional: true, required: false
  private _requestedVerifyOption?: string; 
  public get requestedVerifyOption() {
    return this.getStringAttribute('requested_verify_option');
  }
  public set requestedVerifyOption(value: string) {
    this._requestedVerifyOption = value;
  }
  public resetRequestedVerifyOption() {
    this._requestedVerifyOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestedVerifyOptionInput() {
    return this._requestedVerifyOption;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv?: string[]; 
  public get secretEnv() {
    return this.getListAttribute('secret_env');
  }
  public set secretEnv(value: string[]) {
    this._secretEnv = value;
  }
  public resetSecretEnv() {
    this._secretEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv;
  }

  // source_provenance_hash - computed: false, optional: true, required: false
  private _sourceProvenanceHash?: string[]; 
  public get sourceProvenanceHash() {
    return this.getListAttribute('source_provenance_hash');
  }
  public set sourceProvenanceHash(value: string[]) {
    this._sourceProvenanceHash = value;
  }
  public resetSourceProvenanceHash() {
    this._sourceProvenanceHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProvenanceHashInput() {
    return this._sourceProvenanceHash;
  }

  // substitution_option - computed: false, optional: true, required: false
  private _substitutionOption?: string; 
  public get substitutionOption() {
    return this.getStringAttribute('substitution_option');
  }
  public set substitutionOption(value: string) {
    this._substitutionOption = value;
  }
  public resetSubstitutionOption() {
    this._substitutionOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionOptionInput() {
    return this._substitutionOption;
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

  // volumes - computed: false, optional: true, required: false
  private _volumes = new GoogleCloudbuildTriggerBuildOptionsVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: GoogleCloudbuildTriggerBuildOptionsVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface GoogleCloudbuildTriggerBuildSecret {
  /**
  * Cloud KMS key name to use to decrypt these envs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#kms_key_name GoogleCloudbuildTrigger#kms_key_name}
  */
  readonly kmsKeyName: string;
  /**
  * Map of environment variable name to its encrypted value.
  * Secret environment variables must be unique across all of a build's secrets,
  * and must be used by at least one build step. Values can be at most 64 KB in size.
  * There can be at most 100 secret values across all of a build's secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#secret_env GoogleCloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: { [key: string]: string };
}

export function googleCloudbuildTriggerBuildSecretToTerraform(struct?: GoogleCloudbuildTriggerBuildSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    secret_env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.secretEnv),
  }
}


export function googleCloudbuildTriggerBuildSecretToHclTerraform(struct?: GoogleCloudbuildTriggerBuildSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.secretEnv),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildSecretOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._secretEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyName = undefined;
      this._secretEnv = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyName = value.kmsKeyName;
      this._secretEnv = value.secretEnv;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv?: { [key: string]: string }; 
  public get secretEnv() {
    return this.getStringMapAttribute('secret_env');
  }
  public set secretEnv(value: { [key: string]: string }) {
    this._secretEnv = value;
  }
  public resetSecretEnv() {
    this._secretEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv;
  }
}

export class GoogleCloudbuildTriggerBuildSecretList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildSecret[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildSecretOutputReference {
    return new GoogleCloudbuildTriggerBuildSecretOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildSourceRepoSource {
  /**
  * Regex matching branches to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  * The syntax of the regular expressions accepted is the syntax accepted by RE2 and
  * described at https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch_name GoogleCloudbuildTrigger#branch_name}
  */
  readonly branchName?: string;
  /**
  * Explicit commit SHA to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#commit_sha GoogleCloudbuildTrigger#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.
  * This must be a relative path. If a step's dir is specified and is an absolute path,
  * this value is ignored for that step's execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#dir GoogleCloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does NOT match the revision regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * ID of the project that owns the Cloud Source Repository.
  * If omitted, the project ID requesting the build is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#project_id GoogleCloudbuildTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repo_name GoogleCloudbuildTrigger#repo_name}
  */
  readonly repoName: string;
  /**
  * Substitutions to use in a triggered build. Should only be used with triggers.run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#substitutions GoogleCloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Regex matching tags to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  * The syntax of the regular expressions accepted is the syntax accepted by RE2 and
  * described at https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tag_name GoogleCloudbuildTrigger#tag_name}
  */
  readonly tagName?: string;
}

export function googleCloudbuildTriggerBuildSourceRepoSourceToTerraform(struct?: GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference | GoogleCloudbuildTriggerBuildSourceRepoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dir: cdktf.stringToTerraform(struct!.dir),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    substitutions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.substitutions),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function googleCloudbuildTriggerBuildSourceRepoSourceToHclTerraform(struct?: GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference | GoogleCloudbuildTriggerBuildSourceRepoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_sha: {
      value: cdktf.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitutions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.substitutions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildSourceRepoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    if (this._substitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutions = this._substitutions;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildSourceRepoSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._commitSha = undefined;
      this._dir = undefined;
      this._invertRegex = undefined;
      this._projectId = undefined;
      this._repoName = undefined;
      this._substitutions = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._commitSha = value.commitSha;
      this._dir = value.dir;
      this._invertRegex = value.invertRegex;
      this._projectId = value.projectId;
      this._repoName = value.repoName;
      this._substitutions = value.substitutions;
      this._tagName = value.tagName;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_name - computed: false, optional: false, required: true
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string }; 
  public get substitutions() {
    return this.getStringMapAttribute('substitutions');
  }
  public set substitutions(value: { [key: string]: string }) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface GoogleCloudbuildTriggerBuildSourceStorageSource {
  /**
  * Google Cloud Storage bucket containing the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#bucket GoogleCloudbuildTrigger#bucket}
  */
  readonly bucket: string;
  /**
  * Google Cloud Storage generation for the object.
  * If the generation is omitted, the latest generation will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#generation GoogleCloudbuildTrigger#generation}
  */
  readonly generation?: string;
  /**
  * Google Cloud Storage object containing the source.
  * This object must be a gzipped archive file (.tar.gz) containing source to build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#object GoogleCloudbuildTrigger#object}
  */
  readonly object: string;
}

export function googleCloudbuildTriggerBuildSourceStorageSourceToTerraform(struct?: GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference | GoogleCloudbuildTriggerBuildSourceStorageSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function googleCloudbuildTriggerBuildSourceStorageSourceToHclTerraform(struct?: GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference | GoogleCloudbuildTriggerBuildSourceStorageSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildSourceStorageSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildSourceStorageSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleCloudbuildTriggerBuildSource {
  /**
  * repo_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repo_source GoogleCloudbuildTrigger#repo_source}
  */
  readonly repoSource?: GoogleCloudbuildTriggerBuildSourceRepoSource;
  /**
  * storage_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#storage_source GoogleCloudbuildTrigger#storage_source}
  */
  readonly storageSource?: GoogleCloudbuildTriggerBuildSourceStorageSource;
}

export function googleCloudbuildTriggerBuildSourceToTerraform(struct?: GoogleCloudbuildTriggerBuildSourceOutputReference | GoogleCloudbuildTriggerBuildSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo_source: googleCloudbuildTriggerBuildSourceRepoSourceToTerraform(struct!.repoSource),
    storage_source: googleCloudbuildTriggerBuildSourceStorageSourceToTerraform(struct!.storageSource),
  }
}


export function googleCloudbuildTriggerBuildSourceToHclTerraform(struct?: GoogleCloudbuildTriggerBuildSourceOutputReference | GoogleCloudbuildTriggerBuildSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repo_source: {
      value: googleCloudbuildTriggerBuildSourceRepoSourceToHclTerraform(struct!.repoSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildSourceRepoSourceList",
    },
    storage_source: {
      value: googleCloudbuildTriggerBuildSourceStorageSourceToHclTerraform(struct!.storageSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildSourceStorageSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuildSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repoSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoSource = this._repoSource?.internalValue;
    }
    if (this._storageSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSource = this._storageSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repoSource.internalValue = undefined;
      this._storageSource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repoSource.internalValue = value.repoSource;
      this._storageSource.internalValue = value.storageSource;
    }
  }

  // repo_source - computed: false, optional: true, required: false
  private _repoSource = new GoogleCloudbuildTriggerBuildSourceRepoSourceOutputReference(this, "repo_source");
  public get repoSource() {
    return this._repoSource;
  }
  public putRepoSource(value: GoogleCloudbuildTriggerBuildSourceRepoSource) {
    this._repoSource.internalValue = value;
  }
  public resetRepoSource() {
    this._repoSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoSourceInput() {
    return this._repoSource.internalValue;
  }

  // storage_source - computed: false, optional: true, required: false
  private _storageSource = new GoogleCloudbuildTriggerBuildSourceStorageSourceOutputReference(this, "storage_source");
  public get storageSource() {
    return this._storageSource;
  }
  public putStorageSource(value: GoogleCloudbuildTriggerBuildSourceStorageSource) {
    this._storageSource.internalValue = value;
  }
  public resetStorageSource() {
    this._storageSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSourceInput() {
    return this._storageSource.internalValue;
  }
}
export interface GoogleCloudbuildTriggerBuildStepVolumes {
  /**
  * Name of the volume to mount.
  * 
  * Volume names must be unique per build step and must be valid names for
  * Docker volumes. Each named volume must be used by at least two build steps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}
  */
  readonly name: string;
  /**
  * Path at which to mount the volume.
  * 
  * Paths must be absolute and cannot conflict with other volume paths on
  * the same build step or with certain reserved volume paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}
  */
  readonly path: string;
}

export function googleCloudbuildTriggerBuildStepVolumesToTerraform(struct?: GoogleCloudbuildTriggerBuildStepVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function googleCloudbuildTriggerBuildStepVolumesToHclTerraform(struct?: GoogleCloudbuildTriggerBuildStepVolumes | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildStepVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildStepVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildStepVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GoogleCloudbuildTriggerBuildStepVolumesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildStepVolumes[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildStepVolumesOutputReference {
    return new GoogleCloudbuildTriggerBuildStepVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuildStep {
  /**
  * Allow this build step to fail without failing the entire build if and
  * only if the exit code is one of the specified codes.
  * 
  * If 'allowFailure' is also specified, this field will take precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#allow_exit_codes GoogleCloudbuildTrigger#allow_exit_codes}
  */
  readonly allowExitCodes?: number[];
  /**
  * Allow this build step to fail without failing the entire build.
  * If false, the entire build will fail if this step fails. Otherwise, the
  * build will succeed, but this step will still have a failure status.
  * Error information will be reported in the 'failureDetail' field.
  * 
  * 'allowExitCodes' takes precedence over this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#allow_failure GoogleCloudbuildTrigger#allow_failure}
  */
  readonly allowFailure?: boolean | cdktf.IResolvable;
  /**
  * A list of arguments that will be presented to the step when it is started.
  * 
  * If the image used to run the step's container has an entrypoint, the args
  * are used as arguments to that entrypoint. If the image does not define an
  * entrypoint, the first element in args is used as the entrypoint, and the
  * remainder will be used as arguments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#args GoogleCloudbuildTrigger#args}
  */
  readonly args?: string[];
  /**
  * Working directory to use when running this step's container.
  * 
  * If this value is a relative path, it is relative to the build's working
  * directory. If this value is absolute, it may be outside the build's working
  * directory, in which case the contents of the path may not be persisted
  * across build step executions, unless a 'volume' for that path is specified.
  * 
  * If the build specifies a 'RepoSource' with 'dir' and a step with a
  * 'dir',
  * which specifies an absolute path, the 'RepoSource' 'dir' is ignored
  * for the step's execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#dir GoogleCloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Entrypoint to be used instead of the build step image's
  * default entrypoint.
  * If unset, the image's default entrypoint is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#entrypoint GoogleCloudbuildTrigger#entrypoint}
  */
  readonly entrypoint?: string;
  /**
  * A list of environment variable definitions to be used when
  * running a step.
  * 
  * The elements are of the form "KEY=VALUE" for the environment variable
  * "KEY" being given the value "VALUE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#env GoogleCloudbuildTrigger#env}
  */
  readonly env?: string[];
  /**
  * Unique identifier for this build step, used in 'wait_for' to
  * reference this build step as a dependency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#id GoogleCloudbuildTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the container image that will run this particular build step.
  * 
  * If the image is available in the host's Docker daemon's cache, it will be
  * run directly. If not, the host will attempt to pull the image first, using
  * the builder service account's credentials if necessary.
  * 
  * The Docker daemon's cache will already have the latest versions of all of
  * the officially supported build steps (see https://github.com/GoogleCloudPlatform/cloud-builders
  * for images and examples).
  * The Docker daemon will also have cached many of the layers for some popular
  * images, like "ubuntu", "debian", but they will be refreshed at the time
  * you attempt to use them.
  * 
  * If you built an image in a previous build step, it will be stored in the
  * host's Docker daemon's cache and is available to use as the name for a
  * later build step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}
  */
  readonly name: string;
  /**
  * A shell script to be executed in the step.
  * When script is provided, the user cannot specify the entrypoint or args.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#script GoogleCloudbuildTrigger#script}
  */
  readonly script?: string;
  /**
  * A list of environment variables which are encrypted using
  * a Cloud Key
  * Management Service crypto key. These values must be specified in
  * the build's 'Secret'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#secret_env GoogleCloudbuildTrigger#secret_env}
  */
  readonly secretEnv?: string[];
  /**
  * Time limit for executing this build step. If not defined,
  * the step has no
  * time limit and will be allowed to continue to run until either it
  * completes or the build itself times out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#timeout GoogleCloudbuildTrigger#timeout}
  */
  readonly timeout?: string;
  /**
  * Output only. Stores timing information for executing this
  * build step.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#timing GoogleCloudbuildTrigger#timing}
  */
  readonly timing?: string;
  /**
  * The ID(s) of the step(s) that this build step depends on.
  * 
  * This build step will not start until all the build steps in 'wait_for'
  * have completed successfully. If 'wait_for' is empty, this build step
  * will start when all previous build steps in the 'Build.Steps' list
  * have completed successfully.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#wait_for GoogleCloudbuildTrigger#wait_for}
  */
  readonly waitFor?: string[];
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#volumes GoogleCloudbuildTrigger#volumes}
  */
  readonly volumes?: GoogleCloudbuildTriggerBuildStepVolumes[] | cdktf.IResolvable;
}

export function googleCloudbuildTriggerBuildStepToTerraform(struct?: GoogleCloudbuildTriggerBuildStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_exit_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowExitCodes),
    allow_failure: cdktf.booleanToTerraform(struct!.allowFailure),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    dir: cdktf.stringToTerraform(struct!.dir),
    entrypoint: cdktf.stringToTerraform(struct!.entrypoint),
    env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.env),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    script: cdktf.stringToTerraform(struct!.script),
    secret_env: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secretEnv),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    timing: cdktf.stringToTerraform(struct!.timing),
    wait_for: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.waitFor),
    volumes: cdktf.listMapper(googleCloudbuildTriggerBuildStepVolumesToTerraform, true)(struct!.volumes),
  }
}


export function googleCloudbuildTriggerBuildStepToHclTerraform(struct?: GoogleCloudbuildTriggerBuildStep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_exit_codes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.allowExitCodes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    allow_failure: {
      value: cdktf.booleanToHclTerraform(struct!.allowFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint: {
      value: cdktf.stringToHclTerraform(struct!.entrypoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.env),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_env: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.secretEnv),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wait_for: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.waitFor),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volumes: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildStepVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildStepVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildStepOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudbuildTriggerBuildStep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExitCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExitCodes = this._allowExitCodes;
    }
    if (this._allowFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowFailure = this._allowFailure;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._entrypoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypoint = this._entrypoint;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._secretEnv !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretEnv = this._secretEnv;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._waitFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitFor = this._waitFor;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuildStep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExitCodes = undefined;
      this._allowFailure = undefined;
      this._args = undefined;
      this._dir = undefined;
      this._entrypoint = undefined;
      this._env = undefined;
      this._id = undefined;
      this._name = undefined;
      this._script = undefined;
      this._secretEnv = undefined;
      this._timeout = undefined;
      this._timing = undefined;
      this._waitFor = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExitCodes = value.allowExitCodes;
      this._allowFailure = value.allowFailure;
      this._args = value.args;
      this._dir = value.dir;
      this._entrypoint = value.entrypoint;
      this._env = value.env;
      this._id = value.id;
      this._name = value.name;
      this._script = value.script;
      this._secretEnv = value.secretEnv;
      this._timeout = value.timeout;
      this._timing = value.timing;
      this._waitFor = value.waitFor;
      this._volumes.internalValue = value.volumes;
    }
  }

  // allow_exit_codes - computed: false, optional: true, required: false
  private _allowExitCodes?: number[]; 
  public get allowExitCodes() {
    return this.getNumberListAttribute('allow_exit_codes');
  }
  public set allowExitCodes(value: number[]) {
    this._allowExitCodes = value;
  }
  public resetAllowExitCodes() {
    this._allowExitCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExitCodesInput() {
    return this._allowExitCodes;
  }

  // allow_failure - computed: false, optional: true, required: false
  private _allowFailure?: boolean | cdktf.IResolvable; 
  public get allowFailure() {
    return this.getBooleanAttribute('allow_failure');
  }
  public set allowFailure(value: boolean | cdktf.IResolvable) {
    this._allowFailure = value;
  }
  public resetAllowFailure() {
    this._allowFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFailureInput() {
    return this._allowFailure;
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: string; 
  public get entrypoint() {
    return this.getStringAttribute('entrypoint');
  }
  public set entrypoint(value: string) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint;
  }

  // env - computed: false, optional: true, required: false
  private _env?: string[]; 
  public get env() {
    return this.getListAttribute('env');
  }
  public set env(value: string[]) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
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

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // secret_env - computed: false, optional: true, required: false
  private _secretEnv?: string[]; 
  public get secretEnv() {
    return this.getListAttribute('secret_env');
  }
  public set secretEnv(value: string[]) {
    this._secretEnv = value;
  }
  public resetSecretEnv() {
    this._secretEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvInput() {
    return this._secretEnv;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // timing - computed: false, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }

  // wait_for - computed: false, optional: true, required: false
  private _waitFor?: string[]; 
  public get waitFor() {
    return this.getListAttribute('wait_for');
  }
  public set waitFor(value: string[]) {
    this._waitFor = value;
  }
  public resetWaitFor() {
    this._waitFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForInput() {
    return this._waitFor;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new GoogleCloudbuildTriggerBuildStepVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: GoogleCloudbuildTriggerBuildStepVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}

export class GoogleCloudbuildTriggerBuildStepList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudbuildTriggerBuildStep[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudbuildTriggerBuildStepOutputReference {
    return new GoogleCloudbuildTriggerBuildStepOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudbuildTriggerBuild {
  /**
  * A list of images to be pushed upon the successful completion of all build steps.
  * The images are pushed using the builder service account's credentials.
  * The digests of the pushed images will be stored in the Build resource's results field.
  * If any of the images fail to be pushed, the build status is marked FAILURE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#images GoogleCloudbuildTrigger#images}
  */
  readonly images?: string[];
  /**
  * Google Cloud Storage bucket where logs should be written.
  * Logs file names will be of the format ${logsBucket}/log-${build_id}.txt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#logs_bucket GoogleCloudbuildTrigger#logs_bucket}
  */
  readonly logsBucket?: string;
  /**
  * TTL in queue for this build. If provided and the build is enqueued longer than this value,
  * the build will expire and the build status will be EXPIRED.
  * The TTL starts ticking from createTime.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#queue_ttl GoogleCloudbuildTrigger#queue_ttl}
  */
  readonly queueTtl?: string;
  /**
  * Substitutions data for Build resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#substitutions GoogleCloudbuildTrigger#substitutions}
  */
  readonly substitutions?: { [key: string]: string };
  /**
  * Tags for annotation of a Build. These are not docker tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tags GoogleCloudbuildTrigger#tags}
  */
  readonly tags?: string[];
  /**
  * Amount of time that this build should be allowed to run, to second granularity.
  * If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
  * This timeout must be equal to or greater than the sum of the timeouts for build steps within the build.
  * The expected format is the number of seconds followed by s.
  * Default time is ten minutes (600s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#timeout GoogleCloudbuildTrigger#timeout}
  */
  readonly timeout?: string;
  /**
  * artifacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#artifacts GoogleCloudbuildTrigger#artifacts}
  */
  readonly artifacts?: GoogleCloudbuildTriggerBuildArtifacts;
  /**
  * available_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#available_secrets GoogleCloudbuildTrigger#available_secrets}
  */
  readonly availableSecrets?: GoogleCloudbuildTriggerBuildAvailableSecrets;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#options GoogleCloudbuildTrigger#options}
  */
  readonly options?: GoogleCloudbuildTriggerBuildOptions;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#secret GoogleCloudbuildTrigger#secret}
  */
  readonly secret?: GoogleCloudbuildTriggerBuildSecret[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#source GoogleCloudbuildTrigger#source}
  */
  readonly source?: GoogleCloudbuildTriggerBuildSource;
  /**
  * step block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#step GoogleCloudbuildTrigger#step}
  */
  readonly step: GoogleCloudbuildTriggerBuildStep[] | cdktf.IResolvable;
}

export function googleCloudbuildTriggerBuildToTerraform(struct?: GoogleCloudbuildTriggerBuildOutputReference | GoogleCloudbuildTriggerBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    logs_bucket: cdktf.stringToTerraform(struct!.logsBucket),
    queue_ttl: cdktf.stringToTerraform(struct!.queueTtl),
    substitutions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.substitutions),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    artifacts: googleCloudbuildTriggerBuildArtifactsToTerraform(struct!.artifacts),
    available_secrets: googleCloudbuildTriggerBuildAvailableSecretsToTerraform(struct!.availableSecrets),
    options: googleCloudbuildTriggerBuildOptionsToTerraform(struct!.options),
    secret: cdktf.listMapper(googleCloudbuildTriggerBuildSecretToTerraform, true)(struct!.secret),
    source: googleCloudbuildTriggerBuildSourceToTerraform(struct!.source),
    step: cdktf.listMapper(googleCloudbuildTriggerBuildStepToTerraform, true)(struct!.step),
  }
}


export function googleCloudbuildTriggerBuildToHclTerraform(struct?: GoogleCloudbuildTriggerBuildOutputReference | GoogleCloudbuildTriggerBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    logs_bucket: {
      value: cdktf.stringToHclTerraform(struct!.logsBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_ttl: {
      value: cdktf.stringToHclTerraform(struct!.queueTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    substitutions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.substitutions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    artifacts: {
      value: googleCloudbuildTriggerBuildArtifactsToHclTerraform(struct!.artifacts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildArtifactsList",
    },
    available_secrets: {
      value: googleCloudbuildTriggerBuildAvailableSecretsToHclTerraform(struct!.availableSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildAvailableSecretsList",
    },
    options: {
      value: googleCloudbuildTriggerBuildOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildOptionsList",
    },
    secret: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildSecretToHclTerraform, true)(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildSecretList",
    },
    source: {
      value: googleCloudbuildTriggerBuildSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildSourceList",
    },
    step: {
      value: cdktf.listMapperHcl(googleCloudbuildTriggerBuildStepToHclTerraform, true)(struct!.step),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerBuildStepList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._logsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.logsBucket = this._logsBucket;
    }
    if (this._queueTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueTtl = this._queueTtl;
    }
    if (this._substitutions !== undefined) {
      hasAnyValues = true;
      internalValueResult.substitutions = this._substitutions;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._artifacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifacts = this._artifacts?.internalValue;
    }
    if (this._availableSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableSecrets = this._availableSecrets?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._step?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.step = this._step?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._images = undefined;
      this._logsBucket = undefined;
      this._queueTtl = undefined;
      this._substitutions = undefined;
      this._tags = undefined;
      this._timeout = undefined;
      this._artifacts.internalValue = undefined;
      this._availableSecrets.internalValue = undefined;
      this._options.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._source.internalValue = undefined;
      this._step.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._images = value.images;
      this._logsBucket = value.logsBucket;
      this._queueTtl = value.queueTtl;
      this._substitutions = value.substitutions;
      this._tags = value.tags;
      this._timeout = value.timeout;
      this._artifacts.internalValue = value.artifacts;
      this._availableSecrets.internalValue = value.availableSecrets;
      this._options.internalValue = value.options;
      this._secret.internalValue = value.secret;
      this._source.internalValue = value.source;
      this._step.internalValue = value.step;
    }
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // logs_bucket - computed: false, optional: true, required: false
  private _logsBucket?: string; 
  public get logsBucket() {
    return this.getStringAttribute('logs_bucket');
  }
  public set logsBucket(value: string) {
    this._logsBucket = value;
  }
  public resetLogsBucket() {
    this._logsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsBucketInput() {
    return this._logsBucket;
  }

  // queue_ttl - computed: false, optional: true, required: false
  private _queueTtl?: string; 
  public get queueTtl() {
    return this.getStringAttribute('queue_ttl');
  }
  public set queueTtl(value: string) {
    this._queueTtl = value;
  }
  public resetQueueTtl() {
    this._queueTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueTtlInput() {
    return this._queueTtl;
  }

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string }; 
  public get substitutions() {
    return this.getStringMapAttribute('substitutions');
  }
  public set substitutions(value: { [key: string]: string }) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // artifacts - computed: false, optional: true, required: false
  private _artifacts = new GoogleCloudbuildTriggerBuildArtifactsOutputReference(this, "artifacts");
  public get artifacts() {
    return this._artifacts;
  }
  public putArtifacts(value: GoogleCloudbuildTriggerBuildArtifacts) {
    this._artifacts.internalValue = value;
  }
  public resetArtifacts() {
    this._artifacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsInput() {
    return this._artifacts.internalValue;
  }

  // available_secrets - computed: false, optional: true, required: false
  private _availableSecrets = new GoogleCloudbuildTriggerBuildAvailableSecretsOutputReference(this, "available_secrets");
  public get availableSecrets() {
    return this._availableSecrets;
  }
  public putAvailableSecrets(value: GoogleCloudbuildTriggerBuildAvailableSecrets) {
    this._availableSecrets.internalValue = value;
  }
  public resetAvailableSecrets() {
    this._availableSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableSecretsInput() {
    return this._availableSecrets.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new GoogleCloudbuildTriggerBuildOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: GoogleCloudbuildTriggerBuildOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new GoogleCloudbuildTriggerBuildSecretList(this, "secret", false);
  public get secret() {
    return this._secret;
  }
  public putSecret(value: GoogleCloudbuildTriggerBuildSecret[] | cdktf.IResolvable) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new GoogleCloudbuildTriggerBuildSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleCloudbuildTriggerBuildSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // step - computed: false, optional: false, required: true
  private _step = new GoogleCloudbuildTriggerBuildStepList(this, "step", false);
  public get step() {
    return this._step;
  }
  public putStep(value: GoogleCloudbuildTriggerBuildStep[] | cdktf.IResolvable) {
    this._step.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepInput() {
    return this._step.internalValue;
  }
}
export interface GoogleCloudbuildTriggerGitFileSource {
  /**
  * The full resource name of the bitbucket server config.
  * Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#bitbucket_server_config GoogleCloudbuildTrigger#bitbucket_server_config}
  */
  readonly bitbucketServerConfig?: string;
  /**
  * The full resource name of the github enterprise config.
  * Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#github_enterprise_config GoogleCloudbuildTrigger#github_enterprise_config}
  */
  readonly githubEnterpriseConfig?: string;
  /**
  * The path of the file, with the repo root as the root of the path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#path GoogleCloudbuildTrigger#path}
  */
  readonly path: string;
  /**
  * The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
  * Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repo_type GoogleCloudbuildTrigger#repo_type}
  */
  readonly repoType: string;
  /**
  * The fully qualified resource name of the Repo API repository. The fully qualified resource name of the Repo API repository.
  * If unspecified, the repo from which the trigger invocation originated is assumed to be the repo from which to read the specified path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}
  */
  readonly repository?: string;
  /**
  * The branch, tag, arbitrary ref, or SHA version of the repo to use when resolving the
  * filename (optional). This field respects the same syntax/resolution as described here: https://git-scm.com/docs/gitrevisions
  * If unspecified, the revision from which the trigger invocation originated is assumed to be the revision from which to read the specified path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#revision GoogleCloudbuildTrigger#revision}
  */
  readonly revision?: string;
  /**
  * The URI of the repo (optional). If unspecified, the repo from which the trigger
  * invocation originated is assumed to be the repo from which to read the specified path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#uri GoogleCloudbuildTrigger#uri}
  */
  readonly uri?: string;
}

export function googleCloudbuildTriggerGitFileSourceToTerraform(struct?: GoogleCloudbuildTriggerGitFileSourceOutputReference | GoogleCloudbuildTriggerGitFileSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitbucket_server_config: cdktf.stringToTerraform(struct!.bitbucketServerConfig),
    github_enterprise_config: cdktf.stringToTerraform(struct!.githubEnterpriseConfig),
    path: cdktf.stringToTerraform(struct!.path),
    repo_type: cdktf.stringToTerraform(struct!.repoType),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleCloudbuildTriggerGitFileSourceToHclTerraform(struct?: GoogleCloudbuildTriggerGitFileSourceOutputReference | GoogleCloudbuildTriggerGitFileSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitbucket_server_config: {
      value: cdktf.stringToHclTerraform(struct!.bitbucketServerConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_enterprise_config: {
      value: cdktf.stringToHclTerraform(struct!.githubEnterpriseConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_type: {
      value: cdktf.stringToHclTerraform(struct!.repoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerGitFileSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerGitFileSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitbucketServerConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketServerConfig = this._bitbucketServerConfig;
    }
    if (this._githubEnterpriseConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterpriseConfig = this._githubEnterpriseConfig;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoType = this._repoType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerGitFileSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitbucketServerConfig = undefined;
      this._githubEnterpriseConfig = undefined;
      this._path = undefined;
      this._repoType = undefined;
      this._repository = undefined;
      this._revision = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitbucketServerConfig = value.bitbucketServerConfig;
      this._githubEnterpriseConfig = value.githubEnterpriseConfig;
      this._path = value.path;
      this._repoType = value.repoType;
      this._repository = value.repository;
      this._revision = value.revision;
      this._uri = value.uri;
    }
  }

  // bitbucket_server_config - computed: false, optional: true, required: false
  private _bitbucketServerConfig?: string; 
  public get bitbucketServerConfig() {
    return this.getStringAttribute('bitbucket_server_config');
  }
  public set bitbucketServerConfig(value: string) {
    this._bitbucketServerConfig = value;
  }
  public resetBitbucketServerConfig() {
    this._bitbucketServerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketServerConfigInput() {
    return this._bitbucketServerConfig;
  }

  // github_enterprise_config - computed: false, optional: true, required: false
  private _githubEnterpriseConfig?: string; 
  public get githubEnterpriseConfig() {
    return this.getStringAttribute('github_enterprise_config');
  }
  public set githubEnterpriseConfig(value: string) {
    this._githubEnterpriseConfig = value;
  }
  public resetGithubEnterpriseConfig() {
    this._githubEnterpriseConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseConfigInput() {
    return this._githubEnterpriseConfig;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // repo_type - computed: false, optional: false, required: true
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
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

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleCloudbuildTriggerGithubPullRequest {
  /**
  * Regex of branches to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}
  */
  readonly branch: string;
  /**
  * Whether to block builds on a "/gcbrun" comment from a repository owner or collaborator. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#comment_control GoogleCloudbuildTrigger#comment_control}
  */
  readonly commentControl?: string;
  /**
  * If true, branches that do NOT match the git_ref will trigger a build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
}

export function googleCloudbuildTriggerGithubPullRequestToTerraform(struct?: GoogleCloudbuildTriggerGithubPullRequestOutputReference | GoogleCloudbuildTriggerGithubPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    comment_control: cdktf.stringToTerraform(struct!.commentControl),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
  }
}


export function googleCloudbuildTriggerGithubPullRequestToHclTerraform(struct?: GoogleCloudbuildTriggerGithubPullRequestOutputReference | GoogleCloudbuildTriggerGithubPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_control: {
      value: cdktf.stringToHclTerraform(struct!.commentControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerGithubPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerGithubPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commentControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentControl = this._commentControl;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerGithubPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._commentControl = undefined;
      this._invertRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._commentControl = value.commentControl;
      this._invertRegex = value.invertRegex;
    }
  }

  // branch - computed: false, optional: false, required: true
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // comment_control - computed: false, optional: true, required: false
  private _commentControl?: string; 
  public get commentControl() {
    return this.getStringAttribute('comment_control');
  }
  public set commentControl(value: string) {
    this._commentControl = value;
  }
  public resetCommentControl() {
    this._commentControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentControlInput() {
    return this._commentControl;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }
}
export interface GoogleCloudbuildTriggerGithubPush {
  /**
  * Regex of branches to match.  Specify only one of branch or tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}
  */
  readonly branch?: string;
  /**
  * When true, only trigger a build if the revision regex does NOT match the git_ref regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * Regex of tags to match.  Specify only one of branch or tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tag GoogleCloudbuildTrigger#tag}
  */
  readonly tag?: string;
}

export function googleCloudbuildTriggerGithubPushToTerraform(struct?: GoogleCloudbuildTriggerGithubPushOutputReference | GoogleCloudbuildTriggerGithubPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function googleCloudbuildTriggerGithubPushToHclTerraform(struct?: GoogleCloudbuildTriggerGithubPushOutputReference | GoogleCloudbuildTriggerGithubPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerGithubPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerGithubPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerGithubPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._invertRegex = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._invertRegex = value.invertRegex;
      this._tag = value.tag;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface GoogleCloudbuildTriggerGithub {
  /**
  * The resource name of the github enterprise config that should be applied to this installation.
  * For example: "projects/{$projectId}/locations/{$locationId}/githubEnterpriseConfigs/{$configId}"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#enterprise_config_resource_name GoogleCloudbuildTrigger#enterprise_config_resource_name}
  */
  readonly enterpriseConfigResourceName?: string;
  /**
  * Name of the repository. For example: The name for
  * https://github.com/googlecloudplatform/cloud-builders is "cloud-builders".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#name GoogleCloudbuildTrigger#name}
  */
  readonly name?: string;
  /**
  * Owner of the repository. For example: The owner for
  * https://github.com/googlecloudplatform/cloud-builders is "googlecloudplatform".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#owner GoogleCloudbuildTrigger#owner}
  */
  readonly owner?: string;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#pull_request GoogleCloudbuildTrigger#pull_request}
  */
  readonly pullRequest?: GoogleCloudbuildTriggerGithubPullRequest;
  /**
  * push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#push GoogleCloudbuildTrigger#push}
  */
  readonly push?: GoogleCloudbuildTriggerGithubPush;
}

export function googleCloudbuildTriggerGithubToTerraform(struct?: GoogleCloudbuildTriggerGithubOutputReference | GoogleCloudbuildTriggerGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enterprise_config_resource_name: cdktf.stringToTerraform(struct!.enterpriseConfigResourceName),
    name: cdktf.stringToTerraform(struct!.name),
    owner: cdktf.stringToTerraform(struct!.owner),
    pull_request: googleCloudbuildTriggerGithubPullRequestToTerraform(struct!.pullRequest),
    push: googleCloudbuildTriggerGithubPushToTerraform(struct!.push),
  }
}


export function googleCloudbuildTriggerGithubToHclTerraform(struct?: GoogleCloudbuildTriggerGithubOutputReference | GoogleCloudbuildTriggerGithub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enterprise_config_resource_name: {
      value: cdktf.stringToHclTerraform(struct!.enterpriseConfigResourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: googleCloudbuildTriggerGithubPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerGithubPullRequestList",
    },
    push: {
      value: googleCloudbuildTriggerGithubPushToHclTerraform(struct!.push),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerGithubPushList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerGithub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enterpriseConfigResourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseConfigResourceName = this._enterpriseConfigResourceName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerGithub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enterpriseConfigResourceName = undefined;
      this._name = undefined;
      this._owner = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enterpriseConfigResourceName = value.enterpriseConfigResourceName;
      this._name = value.name;
      this._owner = value.owner;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
    }
  }

  // enterprise_config_resource_name - computed: false, optional: true, required: false
  private _enterpriseConfigResourceName?: string; 
  public get enterpriseConfigResourceName() {
    return this.getStringAttribute('enterprise_config_resource_name');
  }
  public set enterpriseConfigResourceName(value: string) {
    this._enterpriseConfigResourceName = value;
  }
  public resetEnterpriseConfigResourceName() {
    this._enterpriseConfigResourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseConfigResourceNameInput() {
    return this._enterpriseConfigResourceName;
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

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new GoogleCloudbuildTriggerGithubPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: GoogleCloudbuildTriggerGithubPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new GoogleCloudbuildTriggerGithubPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: GoogleCloudbuildTriggerGithubPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface GoogleCloudbuildTriggerPubsubConfig {
  /**
  * Service account that will make the push request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#service_account_email GoogleCloudbuildTrigger#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The name of the topic from which this subscription is receiving messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#topic GoogleCloudbuildTrigger#topic}
  */
  readonly topic: string;
}

export function googleCloudbuildTriggerPubsubConfigToTerraform(struct?: GoogleCloudbuildTriggerPubsubConfigOutputReference | GoogleCloudbuildTriggerPubsubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function googleCloudbuildTriggerPubsubConfigToHclTerraform(struct?: GoogleCloudbuildTriggerPubsubConfigOutputReference | GoogleCloudbuildTriggerPubsubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerPubsubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerPubsubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerPubsubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccountEmail = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._topic = value.topic;
    }
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription - computed: true, optional: false, required: false
  public get subscription() {
    return this.getStringAttribute('subscription');
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface GoogleCloudbuildTriggerRepositoryEventConfigPullRequest {
  /**
  * Regex of branches to match.
  * 
  * The syntax of the regular expressions accepted is the syntax accepted by
  * RE2 and described at https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}
  */
  readonly branch?: string;
  /**
  * Configure builds to run whether a repository owner or collaborator need to comment '/gcbrun'. Possible values: ["COMMENTS_DISABLED", "COMMENTS_ENABLED", "COMMENTS_ENABLED_FOR_EXTERNAL_CONTRIBUTORS_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#comment_control GoogleCloudbuildTrigger#comment_control}
  */
  readonly commentControl?: string;
  /**
  * If true, branches that do NOT match the git_ref will trigger a build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
}

export function googleCloudbuildTriggerRepositoryEventConfigPullRequestToTerraform(struct?: GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference | GoogleCloudbuildTriggerRepositoryEventConfigPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    comment_control: cdktf.stringToTerraform(struct!.commentControl),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
  }
}


export function googleCloudbuildTriggerRepositoryEventConfigPullRequestToHclTerraform(struct?: GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference | GoogleCloudbuildTriggerRepositoryEventConfigPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment_control: {
      value: cdktf.stringToHclTerraform(struct!.commentControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerRepositoryEventConfigPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._commentControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentControl = this._commentControl;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerRepositoryEventConfigPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._commentControl = undefined;
      this._invertRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._commentControl = value.commentControl;
      this._invertRegex = value.invertRegex;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // comment_control - computed: false, optional: true, required: false
  private _commentControl?: string; 
  public get commentControl() {
    return this.getStringAttribute('comment_control');
  }
  public set commentControl(value: string) {
    this._commentControl = value;
  }
  public resetCommentControl() {
    this._commentControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentControlInput() {
    return this._commentControl;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }
}
export interface GoogleCloudbuildTriggerRepositoryEventConfigPush {
  /**
  * Regex of branches to match.
  * 
  * The syntax of the regular expressions accepted is the syntax accepted by
  * RE2 and described at https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch GoogleCloudbuildTrigger#branch}
  */
  readonly branch?: string;
  /**
  * If true, only trigger a build if the revision regex does NOT match the git_ref regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * Regex of tags to match.
  * 
  * The syntax of the regular expressions accepted is the syntax accepted by
  * RE2 and described at https://github.com/google/re2/wiki/Syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tag GoogleCloudbuildTrigger#tag}
  */
  readonly tag?: string;
}

export function googleCloudbuildTriggerRepositoryEventConfigPushToTerraform(struct?: GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference | GoogleCloudbuildTriggerRepositoryEventConfigPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function googleCloudbuildTriggerRepositoryEventConfigPushToHclTerraform(struct?: GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference | GoogleCloudbuildTriggerRepositoryEventConfigPush): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerRepositoryEventConfigPush | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerRepositoryEventConfigPush | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._invertRegex = undefined;
      this._tag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._invertRegex = value.invertRegex;
      this._tag = value.tag;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface GoogleCloudbuildTriggerRepositoryEventConfig {
  /**
  * The resource name of the Repo API resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}
  */
  readonly repository?: string;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#pull_request GoogleCloudbuildTrigger#pull_request}
  */
  readonly pullRequest?: GoogleCloudbuildTriggerRepositoryEventConfigPullRequest;
  /**
  * push block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#push GoogleCloudbuildTrigger#push}
  */
  readonly push?: GoogleCloudbuildTriggerRepositoryEventConfigPush;
}

export function googleCloudbuildTriggerRepositoryEventConfigToTerraform(struct?: GoogleCloudbuildTriggerRepositoryEventConfigOutputReference | GoogleCloudbuildTriggerRepositoryEventConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    pull_request: googleCloudbuildTriggerRepositoryEventConfigPullRequestToTerraform(struct!.pullRequest),
    push: googleCloudbuildTriggerRepositoryEventConfigPushToTerraform(struct!.push),
  }
}


export function googleCloudbuildTriggerRepositoryEventConfigToHclTerraform(struct?: GoogleCloudbuildTriggerRepositoryEventConfigOutputReference | GoogleCloudbuildTriggerRepositoryEventConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: googleCloudbuildTriggerRepositoryEventConfigPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerRepositoryEventConfigPullRequestList",
    },
    push: {
      value: googleCloudbuildTriggerRepositoryEventConfigPushToHclTerraform(struct!.push),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudbuildTriggerRepositoryEventConfigPushList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerRepositoryEventConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerRepositoryEventConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    if (this._push?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.push = this._push?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerRepositoryEventConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repository = undefined;
      this._pullRequest.internalValue = undefined;
      this._push.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repository = value.repository;
      this._pullRequest.internalValue = value.pullRequest;
      this._push.internalValue = value.push;
    }
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

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new GoogleCloudbuildTriggerRepositoryEventConfigPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: GoogleCloudbuildTriggerRepositoryEventConfigPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }

  // push - computed: false, optional: true, required: false
  private _push = new GoogleCloudbuildTriggerRepositoryEventConfigPushOutputReference(this, "push");
  public get push() {
    return this._push;
  }
  public putPush(value: GoogleCloudbuildTriggerRepositoryEventConfigPush) {
    this._push.internalValue = value;
  }
  public resetPush() {
    this._push.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushInput() {
    return this._push.internalValue;
  }
}
export interface GoogleCloudbuildTriggerSourceToBuild {
  /**
  * The full resource name of the bitbucket server config.
  * Format: projects/{project}/locations/{location}/bitbucketServerConfigs/{id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#bitbucket_server_config GoogleCloudbuildTrigger#bitbucket_server_config}
  */
  readonly bitbucketServerConfig?: string;
  /**
  * The full resource name of the github enterprise config.
  * Format: projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}. projects/{project}/githubEnterpriseConfigs/{id}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#github_enterprise_config GoogleCloudbuildTrigger#github_enterprise_config}
  */
  readonly githubEnterpriseConfig?: string;
  /**
  * The branch or tag to use. Must start with "refs/" (required).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#ref GoogleCloudbuildTrigger#ref}
  */
  readonly ref: string;
  /**
  * The type of the repo, since it may not be explicit from the repo field (e.g from a URL).
  * Values can be UNKNOWN, CLOUD_SOURCE_REPOSITORIES, GITHUB, BITBUCKET_SERVER Possible values: ["UNKNOWN", "CLOUD_SOURCE_REPOSITORIES", "GITHUB", "BITBUCKET_SERVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repo_type GoogleCloudbuildTrigger#repo_type}
  */
  readonly repoType: string;
  /**
  * The qualified resource name of the Repo API repository.
  * Either uri or repository can be specified and is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repository GoogleCloudbuildTrigger#repository}
  */
  readonly repository?: string;
  /**
  * The URI of the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#uri GoogleCloudbuildTrigger#uri}
  */
  readonly uri?: string;
}

export function googleCloudbuildTriggerSourceToBuildToTerraform(struct?: GoogleCloudbuildTriggerSourceToBuildOutputReference | GoogleCloudbuildTriggerSourceToBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bitbucket_server_config: cdktf.stringToTerraform(struct!.bitbucketServerConfig),
    github_enterprise_config: cdktf.stringToTerraform(struct!.githubEnterpriseConfig),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_type: cdktf.stringToTerraform(struct!.repoType),
    repository: cdktf.stringToTerraform(struct!.repository),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function googleCloudbuildTriggerSourceToBuildToHclTerraform(struct?: GoogleCloudbuildTriggerSourceToBuildOutputReference | GoogleCloudbuildTriggerSourceToBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bitbucket_server_config: {
      value: cdktf.stringToHclTerraform(struct!.bitbucketServerConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_enterprise_config: {
      value: cdktf.stringToHclTerraform(struct!.githubEnterpriseConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_type: {
      value: cdktf.stringToHclTerraform(struct!.repoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerSourceToBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerSourceToBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitbucketServerConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitbucketServerConfig = this._bitbucketServerConfig;
    }
    if (this._githubEnterpriseConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterpriseConfig = this._githubEnterpriseConfig;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoType = this._repoType;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerSourceToBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitbucketServerConfig = undefined;
      this._githubEnterpriseConfig = undefined;
      this._ref = undefined;
      this._repoType = undefined;
      this._repository = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitbucketServerConfig = value.bitbucketServerConfig;
      this._githubEnterpriseConfig = value.githubEnterpriseConfig;
      this._ref = value.ref;
      this._repoType = value.repoType;
      this._repository = value.repository;
      this._uri = value.uri;
    }
  }

  // bitbucket_server_config - computed: false, optional: true, required: false
  private _bitbucketServerConfig?: string; 
  public get bitbucketServerConfig() {
    return this.getStringAttribute('bitbucket_server_config');
  }
  public set bitbucketServerConfig(value: string) {
    this._bitbucketServerConfig = value;
  }
  public resetBitbucketServerConfig() {
    this._bitbucketServerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketServerConfigInput() {
    return this._bitbucketServerConfig;
  }

  // github_enterprise_config - computed: false, optional: true, required: false
  private _githubEnterpriseConfig?: string; 
  public get githubEnterpriseConfig() {
    return this.getStringAttribute('github_enterprise_config');
  }
  public set githubEnterpriseConfig(value: string) {
    this._githubEnterpriseConfig = value;
  }
  public resetGithubEnterpriseConfig() {
    this._githubEnterpriseConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseConfigInput() {
    return this._githubEnterpriseConfig;
  }

  // ref - computed: false, optional: false, required: true
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_type - computed: false, optional: false, required: true
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
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

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GoogleCloudbuildTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#create GoogleCloudbuildTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#delete GoogleCloudbuildTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#update GoogleCloudbuildTrigger#update}
  */
  readonly update?: string;
}

export function googleCloudbuildTriggerTimeoutsToTerraform(struct?: GoogleCloudbuildTriggerTimeouts | cdktf.IResolvable): any {
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


export function googleCloudbuildTriggerTimeoutsToHclTerraform(struct?: GoogleCloudbuildTriggerTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudbuildTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudbuildTriggerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudbuildTriggerTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleCloudbuildTriggerTriggerTemplate {
  /**
  * Name of the branch to build. Exactly one a of branch name, tag, or commit SHA must be provided.
  * This field is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#branch_name GoogleCloudbuildTrigger#branch_name}
  */
  readonly branchName?: string;
  /**
  * Explicit commit SHA to build. Exactly one of a branch name, tag, or commit SHA must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#commit_sha GoogleCloudbuildTrigger#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.
  * 
  * This must be a relative path. If a step's dir is specified and
  * is an absolute path, this value is ignored for that step's
  * execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#dir GoogleCloudbuildTrigger#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does NOT match the revision regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#invert_regex GoogleCloudbuildTrigger#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * ID of the project that owns the Cloud Source Repository. If
  * omitted, the project ID requesting the build is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#project_id GoogleCloudbuildTrigger#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository. If omitted, the name "default" is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#repo_name GoogleCloudbuildTrigger#repo_name}
  */
  readonly repoName?: string;
  /**
  * Name of the tag to build. Exactly one of a branch name, tag, or commit SHA must be provided.
  * This field is a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#tag_name GoogleCloudbuildTrigger#tag_name}
  */
  readonly tagName?: string;
}

export function googleCloudbuildTriggerTriggerTemplateToTerraform(struct?: GoogleCloudbuildTriggerTriggerTemplateOutputReference | GoogleCloudbuildTriggerTriggerTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    commit_sha: cdktf.stringToTerraform(struct!.commitSha),
    dir: cdktf.stringToTerraform(struct!.dir),
    invert_regex: cdktf.booleanToTerraform(struct!.invertRegex),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
  }
}


export function googleCloudbuildTriggerTriggerTemplateToHclTerraform(struct?: GoogleCloudbuildTriggerTriggerTemplateOutputReference | GoogleCloudbuildTriggerTriggerTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_sha: {
      value: cdktf.stringToHclTerraform(struct!.commitSha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_regex: {
      value: cdktf.booleanToHclTerraform(struct!.invertRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerTriggerTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerTriggerTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._commitSha !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitSha = this._commitSha;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._invertRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertRegex = this._invertRegex;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerTriggerTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._commitSha = undefined;
      this._dir = undefined;
      this._invertRegex = undefined;
      this._projectId = undefined;
      this._repoName = undefined;
      this._tagName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._commitSha = value.commitSha;
      this._dir = value.dir;
      this._invertRegex = value.invertRegex;
      this._projectId = value.projectId;
      this._repoName = value.repoName;
      this._tagName = value.tagName;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // commit_sha - computed: false, optional: true, required: false
  private _commitSha?: string; 
  public get commitSha() {
    return this.getStringAttribute('commit_sha');
  }
  public set commitSha(value: string) {
    this._commitSha = value;
  }
  public resetCommitSha() {
    this._commitSha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitShaInput() {
    return this._commitSha;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // invert_regex - computed: false, optional: true, required: false
  private _invertRegex?: boolean | cdktf.IResolvable; 
  public get invertRegex() {
    return this.getBooleanAttribute('invert_regex');
  }
  public set invertRegex(value: boolean | cdktf.IResolvable) {
    this._invertRegex = value;
  }
  public resetInvertRegex() {
    this._invertRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertRegexInput() {
    return this._invertRegex;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }

  // tag_name - computed: false, optional: true, required: false
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  public resetTagName() {
    this._tagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }
}
export interface GoogleCloudbuildTriggerWebhookConfig {
  /**
  * Resource name for the secret required as a URL parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#secret GoogleCloudbuildTrigger#secret}
  */
  readonly secret: string;
}

export function googleCloudbuildTriggerWebhookConfigToTerraform(struct?: GoogleCloudbuildTriggerWebhookConfigOutputReference | GoogleCloudbuildTriggerWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function googleCloudbuildTriggerWebhookConfigToHclTerraform(struct?: GoogleCloudbuildTriggerWebhookConfigOutputReference | GoogleCloudbuildTriggerWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudbuildTriggerWebhookConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudbuildTriggerWebhookConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudbuildTriggerWebhookConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger google_cloudbuild_trigger}
*/
export class GoogleCloudbuildTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudbuild_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCloudbuildTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudbuildTrigger to import
  * @param importFromId The id of the existing GoogleCloudbuildTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudbuildTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloudbuild_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_cloudbuild_trigger google_cloudbuild_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudbuildTriggerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudbuildTriggerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_cloudbuild_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.20.0',
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
    this._description = config.description;
    this._disabled = config.disabled;
    this._filename = config.filename;
    this._filter = config.filter;
    this._id = config.id;
    this._ignoredFiles = config.ignoredFiles;
    this._includeBuildLogs = config.includeBuildLogs;
    this._includedFiles = config.includedFiles;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._substitutions = config.substitutions;
    this._tags = config.tags;
    this._approvalConfig.internalValue = config.approvalConfig;
    this._bitbucketServerTriggerConfig.internalValue = config.bitbucketServerTriggerConfig;
    this._build.internalValue = config.buildAttribute;
    this._gitFileSource.internalValue = config.gitFileSource;
    this._github.internalValue = config.github;
    this._pubsubConfig.internalValue = config.pubsubConfig;
    this._repositoryEventConfig.internalValue = config.repositoryEventConfig;
    this._sourceToBuild.internalValue = config.sourceToBuild;
    this._timeouts.internalValue = config.timeouts;
    this._triggerTemplate.internalValue = config.triggerTemplate;
    this._webhookConfig.internalValue = config.webhookConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // ignored_files - computed: false, optional: true, required: false
  private _ignoredFiles?: string[]; 
  public get ignoredFiles() {
    return this.getListAttribute('ignored_files');
  }
  public set ignoredFiles(value: string[]) {
    this._ignoredFiles = value;
  }
  public resetIgnoredFiles() {
    this._ignoredFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredFilesInput() {
    return this._ignoredFiles;
  }

  // include_build_logs - computed: false, optional: true, required: false
  private _includeBuildLogs?: string; 
  public get includeBuildLogs() {
    return this.getStringAttribute('include_build_logs');
  }
  public set includeBuildLogs(value: string) {
    this._includeBuildLogs = value;
  }
  public resetIncludeBuildLogs() {
    this._includeBuildLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBuildLogsInput() {
    return this._includeBuildLogs;
  }

  // included_files - computed: false, optional: true, required: false
  private _includedFiles?: string[]; 
  public get includedFiles() {
    return this.getListAttribute('included_files');
  }
  public set includedFiles(value: string[]) {
    this._includedFiles = value;
  }
  public resetIncludedFiles() {
    this._includedFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFilesInput() {
    return this._includedFiles;
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

  // name - computed: true, optional: true, required: false
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

  // service_account - computed: false, optional: true, required: false
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

  // substitutions - computed: false, optional: true, required: false
  private _substitutions?: { [key: string]: string }; 
  public get substitutions() {
    return this.getStringMapAttribute('substitutions');
  }
  public set substitutions(value: { [key: string]: string }) {
    this._substitutions = value;
  }
  public resetSubstitutions() {
    this._substitutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get substitutionsInput() {
    return this._substitutions;
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

  // trigger_id - computed: true, optional: false, required: false
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }

  // approval_config - computed: false, optional: true, required: false
  private _approvalConfig = new GoogleCloudbuildTriggerApprovalConfigOutputReference(this, "approval_config");
  public get approvalConfig() {
    return this._approvalConfig;
  }
  public putApprovalConfig(value: GoogleCloudbuildTriggerApprovalConfig) {
    this._approvalConfig.internalValue = value;
  }
  public resetApprovalConfig() {
    this._approvalConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalConfigInput() {
    return this._approvalConfig.internalValue;
  }

  // bitbucket_server_trigger_config - computed: false, optional: true, required: false
  private _bitbucketServerTriggerConfig = new GoogleCloudbuildTriggerBitbucketServerTriggerConfigOutputReference(this, "bitbucket_server_trigger_config");
  public get bitbucketServerTriggerConfig() {
    return this._bitbucketServerTriggerConfig;
  }
  public putBitbucketServerTriggerConfig(value: GoogleCloudbuildTriggerBitbucketServerTriggerConfig) {
    this._bitbucketServerTriggerConfig.internalValue = value;
  }
  public resetBitbucketServerTriggerConfig() {
    this._bitbucketServerTriggerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitbucketServerTriggerConfigInput() {
    return this._bitbucketServerTriggerConfig.internalValue;
  }

  // build - computed: false, optional: true, required: false
  private _build = new GoogleCloudbuildTriggerBuildOutputReference(this, "build");
  public get buildAttribute() {
    return this._build;
  }
  public putBuildAttribute(value: GoogleCloudbuildTriggerBuild) {
    this._build.internalValue = value;
  }
  public resetBuildAttribute() {
    this._build.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build.internalValue;
  }

  // git_file_source - computed: false, optional: true, required: false
  private _gitFileSource = new GoogleCloudbuildTriggerGitFileSourceOutputReference(this, "git_file_source");
  public get gitFileSource() {
    return this._gitFileSource;
  }
  public putGitFileSource(value: GoogleCloudbuildTriggerGitFileSource) {
    this._gitFileSource.internalValue = value;
  }
  public resetGitFileSource() {
    this._gitFileSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitFileSourceInput() {
    return this._gitFileSource.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new GoogleCloudbuildTriggerGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: GoogleCloudbuildTriggerGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // pubsub_config - computed: false, optional: true, required: false
  private _pubsubConfig = new GoogleCloudbuildTriggerPubsubConfigOutputReference(this, "pubsub_config");
  public get pubsubConfig() {
    return this._pubsubConfig;
  }
  public putPubsubConfig(value: GoogleCloudbuildTriggerPubsubConfig) {
    this._pubsubConfig.internalValue = value;
  }
  public resetPubsubConfig() {
    this._pubsubConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubConfigInput() {
    return this._pubsubConfig.internalValue;
  }

  // repository_event_config - computed: false, optional: true, required: false
  private _repositoryEventConfig = new GoogleCloudbuildTriggerRepositoryEventConfigOutputReference(this, "repository_event_config");
  public get repositoryEventConfig() {
    return this._repositoryEventConfig;
  }
  public putRepositoryEventConfig(value: GoogleCloudbuildTriggerRepositoryEventConfig) {
    this._repositoryEventConfig.internalValue = value;
  }
  public resetRepositoryEventConfig() {
    this._repositoryEventConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryEventConfigInput() {
    return this._repositoryEventConfig.internalValue;
  }

  // source_to_build - computed: false, optional: true, required: false
  private _sourceToBuild = new GoogleCloudbuildTriggerSourceToBuildOutputReference(this, "source_to_build");
  public get sourceToBuild() {
    return this._sourceToBuild;
  }
  public putSourceToBuild(value: GoogleCloudbuildTriggerSourceToBuild) {
    this._sourceToBuild.internalValue = value;
  }
  public resetSourceToBuild() {
    this._sourceToBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceToBuildInput() {
    return this._sourceToBuild.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudbuildTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudbuildTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger_template - computed: false, optional: true, required: false
  private _triggerTemplate = new GoogleCloudbuildTriggerTriggerTemplateOutputReference(this, "trigger_template");
  public get triggerTemplate() {
    return this._triggerTemplate;
  }
  public putTriggerTemplate(value: GoogleCloudbuildTriggerTriggerTemplate) {
    this._triggerTemplate.internalValue = value;
  }
  public resetTriggerTemplate() {
    this._triggerTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTemplateInput() {
    return this._triggerTemplate.internalValue;
  }

  // webhook_config - computed: false, optional: true, required: false
  private _webhookConfig = new GoogleCloudbuildTriggerWebhookConfigOutputReference(this, "webhook_config");
  public get webhookConfig() {
    return this._webhookConfig;
  }
  public putWebhookConfig(value: GoogleCloudbuildTriggerWebhookConfig) {
    this._webhookConfig.internalValue = value;
  }
  public resetWebhookConfig() {
    this._webhookConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookConfigInput() {
    return this._webhookConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      filename: cdktf.stringToTerraform(this._filename),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      ignored_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredFiles),
      include_build_logs: cdktf.stringToTerraform(this._includeBuildLogs),
      included_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedFiles),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      substitutions: cdktf.hashMapper(cdktf.stringToTerraform)(this._substitutions),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      approval_config: googleCloudbuildTriggerApprovalConfigToTerraform(this._approvalConfig.internalValue),
      bitbucket_server_trigger_config: googleCloudbuildTriggerBitbucketServerTriggerConfigToTerraform(this._bitbucketServerTriggerConfig.internalValue),
      build: googleCloudbuildTriggerBuildToTerraform(this._build.internalValue),
      git_file_source: googleCloudbuildTriggerGitFileSourceToTerraform(this._gitFileSource.internalValue),
      github: googleCloudbuildTriggerGithubToTerraform(this._github.internalValue),
      pubsub_config: googleCloudbuildTriggerPubsubConfigToTerraform(this._pubsubConfig.internalValue),
      repository_event_config: googleCloudbuildTriggerRepositoryEventConfigToTerraform(this._repositoryEventConfig.internalValue),
      source_to_build: googleCloudbuildTriggerSourceToBuildToTerraform(this._sourceToBuild.internalValue),
      timeouts: googleCloudbuildTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      trigger_template: googleCloudbuildTriggerTriggerTemplateToTerraform(this._triggerTemplate.internalValue),
      webhook_config: googleCloudbuildTriggerWebhookConfigToTerraform(this._webhookConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      ignored_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_build_logs: {
        value: cdktf.stringToHclTerraform(this._includeBuildLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedFiles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      substitutions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._substitutions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      approval_config: {
        value: googleCloudbuildTriggerApprovalConfigToHclTerraform(this._approvalConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerApprovalConfigList",
      },
      bitbucket_server_trigger_config: {
        value: googleCloudbuildTriggerBitbucketServerTriggerConfigToHclTerraform(this._bitbucketServerTriggerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerBitbucketServerTriggerConfigList",
      },
      build: {
        value: googleCloudbuildTriggerBuildToHclTerraform(this._build.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerBuildList",
      },
      git_file_source: {
        value: googleCloudbuildTriggerGitFileSourceToHclTerraform(this._gitFileSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerGitFileSourceList",
      },
      github: {
        value: googleCloudbuildTriggerGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerGithubList",
      },
      pubsub_config: {
        value: googleCloudbuildTriggerPubsubConfigToHclTerraform(this._pubsubConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerPubsubConfigList",
      },
      repository_event_config: {
        value: googleCloudbuildTriggerRepositoryEventConfigToHclTerraform(this._repositoryEventConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerRepositoryEventConfigList",
      },
      source_to_build: {
        value: googleCloudbuildTriggerSourceToBuildToHclTerraform(this._sourceToBuild.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerSourceToBuildList",
      },
      timeouts: {
        value: googleCloudbuildTriggerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudbuildTriggerTimeouts",
      },
      trigger_template: {
        value: googleCloudbuildTriggerTriggerTemplateToHclTerraform(this._triggerTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerTriggerTemplateList",
      },
      webhook_config: {
        value: googleCloudbuildTriggerWebhookConfigToHclTerraform(this._webhookConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudbuildTriggerWebhookConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
