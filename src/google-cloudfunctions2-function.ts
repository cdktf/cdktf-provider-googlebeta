// https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudfunctions2FunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-provided description of a function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#description GoogleCloudfunctions2Function#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#id GoogleCloudfunctions2Function#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs associated with this Cloud Function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#labels GoogleCloudfunctions2Function#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of this cloud function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#location GoogleCloudfunctions2Function#location}
  */
  readonly location?: string;
  /**
  * A user-defined name of the function. Function names must
be unique globally and match pattern 'projects/*\/locations/*\/functions/*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#name GoogleCloudfunctions2Function#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#project GoogleCloudfunctions2Function#project}
  */
  readonly project?: string;
  /**
  * build_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#build_config GoogleCloudfunctions2Function#build_config}
  */
  readonly buildConfig?: GoogleCloudfunctions2FunctionBuildConfig;
  /**
  * event_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#event_trigger GoogleCloudfunctions2Function#event_trigger}
  */
  readonly eventTrigger?: GoogleCloudfunctions2FunctionEventTrigger;
  /**
  * service_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#service_config GoogleCloudfunctions2Function#service_config}
  */
  readonly serviceConfig?: GoogleCloudfunctions2FunctionServiceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#timeouts GoogleCloudfunctions2Function#timeouts}
  */
  readonly timeouts?: GoogleCloudfunctions2FunctionTimeouts;
}
export interface GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource {
  /**
  * Regex matching branches to build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#branch_name GoogleCloudfunctions2Function#branch_name}
  */
  readonly branchName?: string;
  /**
  * Regex matching tags to build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#commit_sha GoogleCloudfunctions2Function#commit_sha}
  */
  readonly commitSha?: string;
  /**
  * Directory, relative to the source root, in which to run the build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#dir GoogleCloudfunctions2Function#dir}
  */
  readonly dir?: string;
  /**
  * Only trigger a build if the revision regex does 
NOT match the revision regex.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#invert_regex GoogleCloudfunctions2Function#invert_regex}
  */
  readonly invertRegex?: boolean | cdktf.IResolvable;
  /**
  * ID of the project that owns the Cloud Source Repository. If omitted, the 
project ID requesting the build is assumed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#project_id GoogleCloudfunctions2Function#project_id}
  */
  readonly projectId?: string;
  /**
  * Name of the Cloud Source Repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#repo_name GoogleCloudfunctions2Function#repo_name}
  */
  readonly repoName?: string;
  /**
  * Regex matching tags to build.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#tag_name GoogleCloudfunctions2Function#tag_name}
  */
  readonly tagName?: string;
}

export function googleCloudfunctions2FunctionBuildConfigSourceRepoSourceToTerraform(struct?: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference | GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource): any {
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

export class GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource | undefined {
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

  public set internalValue(value: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource | undefined) {
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
export interface GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource {
  /**
  * Google Cloud Storage bucket containing the source
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#bucket GoogleCloudfunctions2Function#bucket}
  */
  readonly bucket?: string;
  /**
  * Google Cloud Storage generation for the object. If the generation 
is omitted, the latest generation will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#generation GoogleCloudfunctions2Function#generation}
  */
  readonly generation?: number;
  /**
  * Google Cloud Storage object containing the source.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#object GoogleCloudfunctions2Function#object}
  */
  readonly object?: string;
}

export function googleCloudfunctions2FunctionBuildConfigSourceStorageSourceToTerraform(struct?: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference | GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource | undefined {
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

  public set internalValue(value: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource | undefined) {
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

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface GoogleCloudfunctions2FunctionBuildConfigSource {
  /**
  * repo_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#repo_source GoogleCloudfunctions2Function#repo_source}
  */
  readonly repoSource?: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource;
  /**
  * storage_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#storage_source GoogleCloudfunctions2Function#storage_source}
  */
  readonly storageSource?: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource;
}

export function googleCloudfunctions2FunctionBuildConfigSourceToTerraform(struct?: GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference | GoogleCloudfunctions2FunctionBuildConfigSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repo_source: googleCloudfunctions2FunctionBuildConfigSourceRepoSourceToTerraform(struct!.repoSource),
    storage_source: googleCloudfunctions2FunctionBuildConfigSourceStorageSourceToTerraform(struct!.storageSource),
  }
}

export class GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionBuildConfigSource | undefined {
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

  public set internalValue(value: GoogleCloudfunctions2FunctionBuildConfigSource | undefined) {
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
  private _repoSource = new GoogleCloudfunctions2FunctionBuildConfigSourceRepoSourceOutputReference(this, "repo_source");
  public get repoSource() {
    return this._repoSource;
  }
  public putRepoSource(value: GoogleCloudfunctions2FunctionBuildConfigSourceRepoSource) {
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
  private _storageSource = new GoogleCloudfunctions2FunctionBuildConfigSourceStorageSourceOutputReference(this, "storage_source");
  public get storageSource() {
    return this._storageSource;
  }
  public putStorageSource(value: GoogleCloudfunctions2FunctionBuildConfigSourceStorageSource) {
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
export interface GoogleCloudfunctions2FunctionBuildConfig {
  /**
  * User managed repository created in Artifact Registry optionally with a customer managed encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#docker_repository GoogleCloudfunctions2Function#docker_repository}
  */
  readonly dockerRepository?: string;
  /**
  * The name of the function (as defined in source code) that will be executed.
Defaults to the resource name suffix, if not specified. For backward
compatibility, if function with given name is not found, then the system
will try to use function named "function". For Node.js this is name of a
function exported by the module specified in source_location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#entry_point GoogleCloudfunctions2Function#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * User-provided build-time environment variables for the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#environment_variables GoogleCloudfunctions2Function#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * The runtime in which to run the function. Required when deploying a new
function, optional when updating an existing function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#runtime GoogleCloudfunctions2Function#runtime}
  */
  readonly runtime?: string;
  /**
  * Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#worker_pool GoogleCloudfunctions2Function#worker_pool}
  */
  readonly workerPool?: string;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#source GoogleCloudfunctions2Function#source}
  */
  readonly source?: GoogleCloudfunctions2FunctionBuildConfigSource;
}

export function googleCloudfunctions2FunctionBuildConfigToTerraform(struct?: GoogleCloudfunctions2FunctionBuildConfigOutputReference | GoogleCloudfunctions2FunctionBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_repository: cdktf.stringToTerraform(struct!.dockerRepository),
    entry_point: cdktf.stringToTerraform(struct!.entryPoint),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    runtime: cdktf.stringToTerraform(struct!.runtime),
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
    source: googleCloudfunctions2FunctionBuildConfigSourceToTerraform(struct!.source),
  }
}

export class GoogleCloudfunctions2FunctionBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerRepository = this._dockerRepository;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._runtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtime = this._runtime;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctions2FunctionBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dockerRepository = undefined;
      this._entryPoint = undefined;
      this._environmentVariables = undefined;
      this._runtime = undefined;
      this._workerPool = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dockerRepository = value.dockerRepository;
      this._entryPoint = value.entryPoint;
      this._environmentVariables = value.environmentVariables;
      this._runtime = value.runtime;
      this._workerPool = value.workerPool;
      this._source.internalValue = value.source;
    }
  }

  // build - computed: true, optional: false, required: false
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }

  // docker_repository - computed: false, optional: true, required: false
  private _dockerRepository?: string; 
  public get dockerRepository() {
    return this.getStringAttribute('docker_repository');
  }
  public set dockerRepository(value: string) {
    this._dockerRepository = value;
  }
  public resetDockerRepository() {
    this._dockerRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRepositoryInput() {
    return this._dockerRepository;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // environment_variables - computed: true, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
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

  // source - computed: false, optional: true, required: false
  private _source = new GoogleCloudfunctions2FunctionBuildConfigSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: GoogleCloudfunctions2FunctionBuildConfigSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface GoogleCloudfunctions2FunctionEventTrigger {
  /**
  * Required. The type of event to observe.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#event_type GoogleCloudfunctions2Function#event_type}
  */
  readonly eventType?: string;
  /**
  * The name of a Pub/Sub topic in the same project that will be used
as the transport topic for the event delivery.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#pubsub_topic GoogleCloudfunctions2Function#pubsub_topic}
  */
  readonly pubsubTopic?: string;
  /**
  * Describes the retry policy in case of function's execution failure.
Retried execution is charged as any other execution. Possible values: ["RETRY_POLICY_UNSPECIFIED", "RETRY_POLICY_DO_NOT_RETRY", "RETRY_POLICY_RETRY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#retry_policy GoogleCloudfunctions2Function#retry_policy}
  */
  readonly retryPolicy?: string;
  /**
  * The email of the service account for this function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#service_account_email GoogleCloudfunctions2Function#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The region that the trigger will be in. The trigger will only receive
events originating in this region. It can be the same
region as the function, a different region or multi-region, or the global
region. If not provided, defaults to the same region as the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#trigger_region GoogleCloudfunctions2Function#trigger_region}
  */
  readonly triggerRegion?: string;
}

export function googleCloudfunctions2FunctionEventTriggerToTerraform(struct?: GoogleCloudfunctions2FunctionEventTriggerOutputReference | GoogleCloudfunctions2FunctionEventTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
    retry_policy: cdktf.stringToTerraform(struct!.retryPolicy),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    trigger_region: cdktf.stringToTerraform(struct!.triggerRegion),
  }
}

export class GoogleCloudfunctions2FunctionEventTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionEventTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    if (this._retryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._triggerRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerRegion = this._triggerRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctions2FunctionEventTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._pubsubTopic = undefined;
      this._retryPolicy = undefined;
      this._serviceAccountEmail = undefined;
      this._triggerRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._pubsubTopic = value.pubsubTopic;
      this._retryPolicy = value.retryPolicy;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._triggerRegion = value.triggerRegion;
    }
  }

  // event_type - computed: false, optional: true, required: false
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  public resetEventType() {
    this._eventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // pubsub_topic - computed: false, optional: true, required: false
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  public resetPubsubTopic() {
    this._pubsubTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy?: string; 
  public get retryPolicy() {
    return this.getStringAttribute('retry_policy');
  }
  public set retryPolicy(value: string) {
    this._retryPolicy = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy;
  }

  // service_account_email - computed: true, optional: true, required: false
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

  // trigger - computed: true, optional: false, required: false
  public get trigger() {
    return this.getStringAttribute('trigger');
  }

  // trigger_region - computed: false, optional: true, required: false
  private _triggerRegion?: string; 
  public get triggerRegion() {
    return this.getStringAttribute('trigger_region');
  }
  public set triggerRegion(value: string) {
    this._triggerRegion = value;
  }
  public resetTriggerRegion() {
    this._triggerRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerRegionInput() {
    return this._triggerRegion;
  }
}
export interface GoogleCloudfunctions2FunctionServiceConfig {
  /**
  * Whether 100% of traffic is routed to the latest revision. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#all_traffic_on_latest_revision GoogleCloudfunctions2Function#all_traffic_on_latest_revision}
  */
  readonly allTrafficOnLatestRevision?: boolean | cdktf.IResolvable;
  /**
  * The amount of memory available for a function.
Defaults to 256M. Supported units are k, M, G, Mi, Gi. If no unit is
supplied the value is interpreted as bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#available_memory GoogleCloudfunctions2Function#available_memory}
  */
  readonly availableMemory?: string;
  /**
  * Environment variables that shall be available during function execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#environment_variables GoogleCloudfunctions2Function#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * Available ingress settings. Defaults to "ALLOW_ALL" if unspecified. Default value: "ALLOW_ALL" Possible values: ["ALLOW_ALL", "ALLOW_INTERNAL_ONLY", "ALLOW_INTERNAL_AND_GCLB"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#ingress_settings GoogleCloudfunctions2Function#ingress_settings}
  */
  readonly ingressSettings?: string;
  /**
  * The limit on the maximum number of function instances that may coexist at a
given time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#max_instance_count GoogleCloudfunctions2Function#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * The limit on the minimum number of function instances that may coexist at a
given time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#min_instance_count GoogleCloudfunctions2Function#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Name of the service associated with a Function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#service GoogleCloudfunctions2Function#service}
  */
  readonly service?: string;
  /**
  * The email of the service account for this function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#service_account_email GoogleCloudfunctions2Function#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The function execution timeout. Execution is considered failed and
can be terminated if the function is not completed at the end of the
timeout period. Defaults to 60 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#timeout_seconds GoogleCloudfunctions2Function#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * The Serverless VPC Access connector that this cloud function can connect to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#vpc_connector GoogleCloudfunctions2Function#vpc_connector}
  */
  readonly vpcConnector?: string;
  /**
  * Available egress settings. Possible values: ["VPC_CONNECTOR_EGRESS_SETTINGS_UNSPECIFIED", "PRIVATE_RANGES_ONLY", "ALL_TRAFFIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#vpc_connector_egress_settings GoogleCloudfunctions2Function#vpc_connector_egress_settings}
  */
  readonly vpcConnectorEgressSettings?: string;
}

export function googleCloudfunctions2FunctionServiceConfigToTerraform(struct?: GoogleCloudfunctions2FunctionServiceConfigOutputReference | GoogleCloudfunctions2FunctionServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_traffic_on_latest_revision: cdktf.booleanToTerraform(struct!.allTrafficOnLatestRevision),
    available_memory: cdktf.stringToTerraform(struct!.availableMemory),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    ingress_settings: cdktf.stringToTerraform(struct!.ingressSettings),
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    service: cdktf.stringToTerraform(struct!.service),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    vpc_connector: cdktf.stringToTerraform(struct!.vpcConnector),
    vpc_connector_egress_settings: cdktf.stringToTerraform(struct!.vpcConnectorEgressSettings),
  }
}

export class GoogleCloudfunctions2FunctionServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allTrafficOnLatestRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTrafficOnLatestRevision = this._allTrafficOnLatestRevision;
    }
    if (this._availableMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.availableMemory = this._availableMemory;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._ingressSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSettings = this._ingressSettings;
    }
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._vpcConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnector = this._vpcConnector;
    }
    if (this._vpcConnectorEgressSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcConnectorEgressSettings = this._vpcConnectorEgressSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctions2FunctionServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allTrafficOnLatestRevision = undefined;
      this._availableMemory = undefined;
      this._environmentVariables = undefined;
      this._ingressSettings = undefined;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._service = undefined;
      this._serviceAccountEmail = undefined;
      this._timeoutSeconds = undefined;
      this._vpcConnector = undefined;
      this._vpcConnectorEgressSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allTrafficOnLatestRevision = value.allTrafficOnLatestRevision;
      this._availableMemory = value.availableMemory;
      this._environmentVariables = value.environmentVariables;
      this._ingressSettings = value.ingressSettings;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._service = value.service;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._timeoutSeconds = value.timeoutSeconds;
      this._vpcConnector = value.vpcConnector;
      this._vpcConnectorEgressSettings = value.vpcConnectorEgressSettings;
    }
  }

  // all_traffic_on_latest_revision - computed: false, optional: true, required: false
  private _allTrafficOnLatestRevision?: boolean | cdktf.IResolvable; 
  public get allTrafficOnLatestRevision() {
    return this.getBooleanAttribute('all_traffic_on_latest_revision');
  }
  public set allTrafficOnLatestRevision(value: boolean | cdktf.IResolvable) {
    this._allTrafficOnLatestRevision = value;
  }
  public resetAllTrafficOnLatestRevision() {
    this._allTrafficOnLatestRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTrafficOnLatestRevisionInput() {
    return this._allTrafficOnLatestRevision;
  }

  // available_memory - computed: false, optional: true, required: false
  private _availableMemory?: string; 
  public get availableMemory() {
    return this.getStringAttribute('available_memory');
  }
  public set availableMemory(value: string) {
    this._availableMemory = value;
  }
  public resetAvailableMemory() {
    this._availableMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryInput() {
    return this._availableMemory;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // gcf_uri - computed: true, optional: false, required: false
  public get gcfUri() {
    return this.getStringAttribute('gcf_uri');
  }

  // ingress_settings - computed: false, optional: true, required: false
  private _ingressSettings?: string; 
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }
  public set ingressSettings(value: string) {
    this._ingressSettings = value;
  }
  public resetIngressSettings() {
    this._ingressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSettingsInput() {
    return this._ingressSettings;
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_account_email - computed: true, optional: true, required: false
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

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // vpc_connector - computed: false, optional: true, required: false
  private _vpcConnector?: string; 
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }
  public set vpcConnector(value: string) {
    this._vpcConnector = value;
  }
  public resetVpcConnector() {
    this._vpcConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorInput() {
    return this._vpcConnector;
  }

  // vpc_connector_egress_settings - computed: false, optional: true, required: false
  private _vpcConnectorEgressSettings?: string; 
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
  }
  public set vpcConnectorEgressSettings(value: string) {
    this._vpcConnectorEgressSettings = value;
  }
  public resetVpcConnectorEgressSettings() {
    this._vpcConnectorEgressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorEgressSettingsInput() {
    return this._vpcConnectorEgressSettings;
  }
}
export interface GoogleCloudfunctions2FunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#create GoogleCloudfunctions2Function#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#delete GoogleCloudfunctions2Function#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function#update GoogleCloudfunctions2Function#update}
  */
  readonly update?: string;
}

export function googleCloudfunctions2FunctionTimeoutsToTerraform(struct?: GoogleCloudfunctions2FunctionTimeoutsOutputReference | GoogleCloudfunctions2FunctionTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudfunctions2FunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctions2FunctionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudfunctions2FunctionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function google_cloudfunctions2_function}
*/
export class GoogleCloudfunctions2Function extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudfunctions2_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_cloudfunctions2_function google_cloudfunctions2_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudfunctions2FunctionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudfunctions2FunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions2_function',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.30.0',
        providerVersionConstraint: '~> 4.17'
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._buildConfig.internalValue = config.buildConfig;
    this._eventTrigger.internalValue = config.eventTrigger;
    this._serviceConfig.internalValue = config.serviceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // build_config - computed: false, optional: true, required: false
  private _buildConfig = new GoogleCloudfunctions2FunctionBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: GoogleCloudfunctions2FunctionBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger = new GoogleCloudfunctions2FunctionEventTriggerOutputReference(this, "event_trigger");
  public get eventTrigger() {
    return this._eventTrigger;
  }
  public putEventTrigger(value: GoogleCloudfunctions2FunctionEventTrigger) {
    this._eventTrigger.internalValue = value;
  }
  public resetEventTrigger() {
    this._eventTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger.internalValue;
  }

  // service_config - computed: false, optional: true, required: false
  private _serviceConfig = new GoogleCloudfunctions2FunctionServiceConfigOutputReference(this, "service_config");
  public get serviceConfig() {
    return this._serviceConfig;
  }
  public putServiceConfig(value: GoogleCloudfunctions2FunctionServiceConfig) {
    this._serviceConfig.internalValue = value;
  }
  public resetServiceConfig() {
    this._serviceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConfigInput() {
    return this._serviceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudfunctions2FunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudfunctions2FunctionTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      build_config: googleCloudfunctions2FunctionBuildConfigToTerraform(this._buildConfig.internalValue),
      event_trigger: googleCloudfunctions2FunctionEventTriggerToTerraform(this._eventTrigger.internalValue),
      service_config: googleCloudfunctions2FunctionServiceConfigToTerraform(this._serviceConfig.internalValue),
      timeouts: googleCloudfunctions2FunctionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
