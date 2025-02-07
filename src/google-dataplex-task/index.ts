// https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataplexTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-provided description of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#description GoogleDataplexTask#description}
  */
  readonly description?: string;
  /**
  * User friendly display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#display_name GoogleDataplexTask#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#id GoogleDataplexTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the task.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#labels GoogleDataplexTask#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The lake in which the task will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#lake GoogleDataplexTask#lake}
  */
  readonly lake?: string;
  /**
  * The location in which the task will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#location GoogleDataplexTask#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}
  */
  readonly project?: string;
  /**
  * The task Id of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#task_id GoogleDataplexTask#task_id}
  */
  readonly taskId?: string;
  /**
  * execution_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#execution_spec GoogleDataplexTask#execution_spec}
  */
  readonly executionSpec: GoogleDataplexTaskExecutionSpec;
  /**
  * notebook block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}
  */
  readonly notebook?: GoogleDataplexTaskNotebook;
  /**
  * spark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#spark GoogleDataplexTask#spark}
  */
  readonly spark?: GoogleDataplexTaskSpark;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#timeouts GoogleDataplexTask#timeouts}
  */
  readonly timeouts?: GoogleDataplexTaskTimeouts;
  /**
  * trigger_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#trigger_spec GoogleDataplexTask#trigger_spec}
  */
  readonly triggerSpec: GoogleDataplexTaskTriggerSpec;
}
export interface GoogleDataplexTaskExecutionStatusLatestJob {
}

export function googleDataplexTaskExecutionStatusLatestJobToTerraform(struct?: GoogleDataplexTaskExecutionStatusLatestJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexTaskExecutionStatusLatestJobToHclTerraform(struct?: GoogleDataplexTaskExecutionStatusLatestJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexTaskExecutionStatusLatestJobOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexTaskExecutionStatusLatestJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskExecutionStatusLatestJob | undefined) {
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

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // service_job - computed: true, optional: false, required: false
  public get serviceJob() {
    return this.getStringAttribute('service_job');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class GoogleDataplexTaskExecutionStatusLatestJobList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataplexTaskExecutionStatusLatestJobOutputReference {
    return new GoogleDataplexTaskExecutionStatusLatestJobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexTaskExecutionStatus {
}

export function googleDataplexTaskExecutionStatusToTerraform(struct?: GoogleDataplexTaskExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataplexTaskExecutionStatusToHclTerraform(struct?: GoogleDataplexTaskExecutionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataplexTaskExecutionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleDataplexTaskExecutionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskExecutionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latest_job - computed: true, optional: false, required: false
  private _latestJob = new GoogleDataplexTaskExecutionStatusLatestJobList(this, "latest_job", false);
  public get latestJob() {
    return this._latestJob;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class GoogleDataplexTaskExecutionStatusList extends cdktf.ComplexList {

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
  public get(index: number): GoogleDataplexTaskExecutionStatusOutputReference {
    return new GoogleDataplexTaskExecutionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleDataplexTaskExecutionSpec {
  /**
  * The arguments to pass to the task. The args can use placeholders of the format ${placeholder} as part of key/value string. These will be interpolated before passing the args to the driver. Currently supported placeholders: - ${taskId} - ${job_time} To pass positional args, set the key as TASK_ARGS. The value should be a comma-separated string of all the positional arguments. To use a delimiter other than comma, refer to https://cloud.google.com/sdk/gcloud/reference/topic/escaping. In case of other keys being present in the args, then TASK_ARGS will be passed as the last argument. An object containing a list of 'key': value pairs. Example: { 'name': 'wrench', 'mass': '1.3kg', 'count': '3' }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#args GoogleDataplexTask#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * The Cloud KMS key to use for encryption, of the form: projects/{project_number}/locations/{locationId}/keyRings/{key-ring-name}/cryptoKeys/{key-name}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#kms_key GoogleDataplexTask#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * The maximum duration after which the job execution is expired. A duration in seconds with up to nine fractional digits, ending with 's'. Example: '3.5s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#max_job_execution_lifetime GoogleDataplexTask#max_job_execution_lifetime}
  */
  readonly maxJobExecutionLifetime?: string;
  /**
  * The project in which jobs are run. By default, the project containing the Lake is used. If a project is provided, the ExecutionSpec.service_account must belong to this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#project GoogleDataplexTask#project}
  */
  readonly project?: string;
  /**
  * Service account to use to execute a task. If not provided, the default Compute service account for the project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#service_account GoogleDataplexTask#service_account}
  */
  readonly serviceAccount: string;
}

export function googleDataplexTaskExecutionSpecToTerraform(struct?: GoogleDataplexTaskExecutionSpecOutputReference | GoogleDataplexTaskExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    max_job_execution_lifetime: cdktf.stringToTerraform(struct!.maxJobExecutionLifetime),
    project: cdktf.stringToTerraform(struct!.project),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function googleDataplexTaskExecutionSpecToHclTerraform(struct?: GoogleDataplexTaskExecutionSpecOutputReference | GoogleDataplexTaskExecutionSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_job_execution_lifetime: {
      value: cdktf.stringToHclTerraform(struct!.maxJobExecutionLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskExecutionSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskExecutionSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._maxJobExecutionLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxJobExecutionLifetime = this._maxJobExecutionLifetime;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskExecutionSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._kmsKey = undefined;
      this._maxJobExecutionLifetime = undefined;
      this._project = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._kmsKey = value.kmsKey;
      this._maxJobExecutionLifetime = value.maxJobExecutionLifetime;
      this._project = value.project;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
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

  // max_job_execution_lifetime - computed: false, optional: true, required: false
  private _maxJobExecutionLifetime?: string; 
  public get maxJobExecutionLifetime() {
    return this.getStringAttribute('max_job_execution_lifetime');
  }
  public set maxJobExecutionLifetime(value: string) {
    this._maxJobExecutionLifetime = value;
  }
  public resetMaxJobExecutionLifetime() {
    this._maxJobExecutionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxJobExecutionLifetimeInput() {
    return this._maxJobExecutionLifetime;
  }

  // project - computed: false, optional: true, required: false
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

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface GoogleDataplexTaskNotebookInfrastructureSpecBatch {
  /**
  * Total number of job executors. Executor Count should be between 2 and 100. [Default=2]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}
  */
  readonly executorsCount?: number;
  /**
  * Max configurable executors. If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}
  */
  readonly maxExecutorsCount?: number;
}

export function googleDataplexTaskNotebookInfrastructureSpecBatchToTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference | GoogleDataplexTaskNotebookInfrastructureSpecBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    executors_count: cdktf.numberToTerraform(struct!.executorsCount),
    max_executors_count: cdktf.numberToTerraform(struct!.maxExecutorsCount),
  }
}


export function googleDataplexTaskNotebookInfrastructureSpecBatchToHclTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference | GoogleDataplexTaskNotebookInfrastructureSpecBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    executors_count: {
      value: cdktf.numberToHclTerraform(struct!.executorsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_executors_count: {
      value: cdktf.numberToHclTerraform(struct!.maxExecutorsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskNotebookInfrastructureSpecBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executorsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorsCount = this._executorsCount;
    }
    if (this._maxExecutorsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutorsCount = this._maxExecutorsCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskNotebookInfrastructureSpecBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executorsCount = undefined;
      this._maxExecutorsCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executorsCount = value.executorsCount;
      this._maxExecutorsCount = value.maxExecutorsCount;
    }
  }

  // executors_count - computed: false, optional: true, required: false
  private _executorsCount?: number; 
  public get executorsCount() {
    return this.getNumberAttribute('executors_count');
  }
  public set executorsCount(value: number) {
    this._executorsCount = value;
  }
  public resetExecutorsCount() {
    this._executorsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorsCountInput() {
    return this._executorsCount;
  }

  // max_executors_count - computed: false, optional: true, required: false
  private _maxExecutorsCount?: number; 
  public get maxExecutorsCount() {
    return this.getNumberAttribute('max_executors_count');
  }
  public set maxExecutorsCount(value: number) {
    this._maxExecutorsCount = value;
  }
  public resetMaxExecutorsCount() {
    this._maxExecutorsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutorsCountInput() {
    return this._maxExecutorsCount;
  }
}
export interface GoogleDataplexTaskNotebookInfrastructureSpecContainerImage {
  /**
  * Container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}
  */
  readonly image?: string;
  /**
  * A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}
  */
  readonly javaJars?: string[];
  /**
  * Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}
  */
  readonly pythonPackages?: string[];
}

export function googleDataplexTaskNotebookInfrastructureSpecContainerImageToTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference | GoogleDataplexTaskNotebookInfrastructureSpecContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    java_jars: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.javaJars),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    python_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonPackages),
  }
}


export function googleDataplexTaskNotebookInfrastructureSpecContainerImageToHclTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference | GoogleDataplexTaskNotebookInfrastructureSpecContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_jars: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.javaJars),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pythonPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskNotebookInfrastructureSpecContainerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._javaJars !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaJars = this._javaJars;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._pythonPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonPackages = this._pythonPackages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._javaJars = undefined;
      this._properties = undefined;
      this._pythonPackages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._javaJars = value.javaJars;
      this._properties = value.properties;
      this._pythonPackages = value.pythonPackages;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // java_jars - computed: false, optional: true, required: false
  private _javaJars?: string[]; 
  public get javaJars() {
    return this.getListAttribute('java_jars');
  }
  public set javaJars(value: string[]) {
    this._javaJars = value;
  }
  public resetJavaJars() {
    this._javaJars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaJarsInput() {
    return this._javaJars;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // python_packages - computed: false, optional: true, required: false
  private _pythonPackages?: string[]; 
  public get pythonPackages() {
    return this.getListAttribute('python_packages');
  }
  public set pythonPackages(value: string[]) {
    this._pythonPackages = value;
  }
  public resetPythonPackages() {
    this._pythonPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonPackagesInput() {
    return this._pythonPackages;
  }
}
export interface GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork {
  /**
  * The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}
  */
  readonly network?: string;
  /**
  * List of network tags to apply to the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * The Cloud VPC sub-network in which the job is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}
  */
  readonly subNetwork?: string;
}

export function googleDataplexTaskNotebookInfrastructureSpecVpcNetworkToTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference | GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    sub_network: cdktf.stringToTerraform(struct!.subNetwork),
  }
}


export function googleDataplexTaskNotebookInfrastructureSpecVpcNetworkToHclTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference | GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sub_network: {
      value: cdktf.stringToHclTerraform(struct!.subNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._subNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subNetwork = this._subNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._networkTags = undefined;
      this._subNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._networkTags = value.networkTags;
      this._subNetwork = value.subNetwork;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
  }

  // sub_network - computed: false, optional: true, required: false
  private _subNetwork?: string; 
  public get subNetwork() {
    return this.getStringAttribute('sub_network');
  }
  public set subNetwork(value: string) {
    this._subNetwork = value;
  }
  public resetSubNetwork() {
    this._subNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkInput() {
    return this._subNetwork;
  }
}
export interface GoogleDataplexTaskNotebookInfrastructureSpec {
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}
  */
  readonly batch?: GoogleDataplexTaskNotebookInfrastructureSpecBatch;
  /**
  * container_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}
  */
  readonly containerImage?: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage;
  /**
  * vpc_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}
  */
  readonly vpcNetwork?: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork;
}

export function googleDataplexTaskNotebookInfrastructureSpecToTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecOutputReference | GoogleDataplexTaskNotebookInfrastructureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch: googleDataplexTaskNotebookInfrastructureSpecBatchToTerraform(struct!.batch),
    container_image: googleDataplexTaskNotebookInfrastructureSpecContainerImageToTerraform(struct!.containerImage),
    vpc_network: googleDataplexTaskNotebookInfrastructureSpecVpcNetworkToTerraform(struct!.vpcNetwork),
  }
}


export function googleDataplexTaskNotebookInfrastructureSpecToHclTerraform(struct?: GoogleDataplexTaskNotebookInfrastructureSpecOutputReference | GoogleDataplexTaskNotebookInfrastructureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch: {
      value: googleDataplexTaskNotebookInfrastructureSpecBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskNotebookInfrastructureSpecBatchList",
    },
    container_image: {
      value: googleDataplexTaskNotebookInfrastructureSpecContainerImageToHclTerraform(struct!.containerImage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskNotebookInfrastructureSpecContainerImageList",
    },
    vpc_network: {
      value: googleDataplexTaskNotebookInfrastructureSpecVpcNetworkToHclTerraform(struct!.vpcNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskNotebookInfrastructureSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskNotebookInfrastructureSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._containerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage?.internalValue;
    }
    if (this._vpcNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetwork = this._vpcNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskNotebookInfrastructureSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batch.internalValue = undefined;
      this._containerImage.internalValue = undefined;
      this._vpcNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batch.internalValue = value.batch;
      this._containerImage.internalValue = value.containerImage;
      this._vpcNetwork.internalValue = value.vpcNetwork;
    }
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GoogleDataplexTaskNotebookInfrastructureSpecBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GoogleDataplexTaskNotebookInfrastructureSpecBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage = new GoogleDataplexTaskNotebookInfrastructureSpecContainerImageOutputReference(this, "container_image");
  public get containerImage() {
    return this._containerImage;
  }
  public putContainerImage(value: GoogleDataplexTaskNotebookInfrastructureSpecContainerImage) {
    this._containerImage.internalValue = value;
  }
  public resetContainerImage() {
    this._containerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage.internalValue;
  }

  // vpc_network - computed: false, optional: true, required: false
  private _vpcNetwork = new GoogleDataplexTaskNotebookInfrastructureSpecVpcNetworkOutputReference(this, "vpc_network");
  public get vpcNetwork() {
    return this._vpcNetwork;
  }
  public putVpcNetwork(value: GoogleDataplexTaskNotebookInfrastructureSpecVpcNetwork) {
    this._vpcNetwork.internalValue = value;
  }
  public resetVpcNetwork() {
    this._vpcNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkInput() {
    return this._vpcNetwork.internalValue;
  }
}
export interface GoogleDataplexTaskNotebook {
  /**
  * Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Cloud Storage URIs of files to be placed in the working directory of each executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * Path to input notebook. This can be the Cloud Storage URI of the notebook file or the path to a Notebook Content. The execution args are accessible as environment variables (TASK_key=value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#notebook GoogleDataplexTask#notebook}
  */
  readonly notebook: string;
  /**
  * infrastructure_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}
  */
  readonly infrastructureSpec?: GoogleDataplexTaskNotebookInfrastructureSpec;
}

export function googleDataplexTaskNotebookToTerraform(struct?: GoogleDataplexTaskNotebookOutputReference | GoogleDataplexTaskNotebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    notebook: cdktf.stringToTerraform(struct!.notebook),
    infrastructure_spec: googleDataplexTaskNotebookInfrastructureSpecToTerraform(struct!.infrastructureSpec),
  }
}


export function googleDataplexTaskNotebookToHclTerraform(struct?: GoogleDataplexTaskNotebookOutputReference | GoogleDataplexTaskNotebook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notebook: {
      value: cdktf.stringToHclTerraform(struct!.notebook),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_spec: {
      value: googleDataplexTaskNotebookInfrastructureSpecToHclTerraform(struct!.infrastructureSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskNotebookInfrastructureSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskNotebookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskNotebook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._notebook !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebook = this._notebook;
    }
    if (this._infrastructureSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureSpec = this._infrastructureSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskNotebook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._fileUris = undefined;
      this._notebook = undefined;
      this._infrastructureSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._fileUris = value.fileUris;
      this._notebook = value.notebook;
      this._infrastructureSpec.internalValue = value.infrastructureSpec;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // notebook - computed: false, optional: false, required: true
  private _notebook?: string; 
  public get notebook() {
    return this.getStringAttribute('notebook');
  }
  public set notebook(value: string) {
    this._notebook = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook;
  }

  // infrastructure_spec - computed: false, optional: true, required: false
  private _infrastructureSpec = new GoogleDataplexTaskNotebookInfrastructureSpecOutputReference(this, "infrastructure_spec");
  public get infrastructureSpec() {
    return this._infrastructureSpec;
  }
  public putInfrastructureSpec(value: GoogleDataplexTaskNotebookInfrastructureSpec) {
    this._infrastructureSpec.internalValue = value;
  }
  public resetInfrastructureSpec() {
    this._infrastructureSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureSpecInput() {
    return this._infrastructureSpec.internalValue;
  }
}
export interface GoogleDataplexTaskSparkInfrastructureSpecBatch {
  /**
  * Total number of job executors. Executor Count should be between 2 and 100. [Default=2]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#executors_count GoogleDataplexTask#executors_count}
  */
  readonly executorsCount?: number;
  /**
  * Max configurable executors. If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#max_executors_count GoogleDataplexTask#max_executors_count}
  */
  readonly maxExecutorsCount?: number;
}

export function googleDataplexTaskSparkInfrastructureSpecBatchToTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference | GoogleDataplexTaskSparkInfrastructureSpecBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    executors_count: cdktf.numberToTerraform(struct!.executorsCount),
    max_executors_count: cdktf.numberToTerraform(struct!.maxExecutorsCount),
  }
}


export function googleDataplexTaskSparkInfrastructureSpecBatchToHclTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference | GoogleDataplexTaskSparkInfrastructureSpecBatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    executors_count: {
      value: cdktf.numberToHclTerraform(struct!.executorsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_executors_count: {
      value: cdktf.numberToHclTerraform(struct!.maxExecutorsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskSparkInfrastructureSpecBatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executorsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorsCount = this._executorsCount;
    }
    if (this._maxExecutorsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutorsCount = this._maxExecutorsCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskSparkInfrastructureSpecBatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executorsCount = undefined;
      this._maxExecutorsCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executorsCount = value.executorsCount;
      this._maxExecutorsCount = value.maxExecutorsCount;
    }
  }

  // executors_count - computed: false, optional: true, required: false
  private _executorsCount?: number; 
  public get executorsCount() {
    return this.getNumberAttribute('executors_count');
  }
  public set executorsCount(value: number) {
    this._executorsCount = value;
  }
  public resetExecutorsCount() {
    this._executorsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorsCountInput() {
    return this._executorsCount;
  }

  // max_executors_count - computed: false, optional: true, required: false
  private _maxExecutorsCount?: number; 
  public get maxExecutorsCount() {
    return this.getNumberAttribute('max_executors_count');
  }
  public set maxExecutorsCount(value: number) {
    this._maxExecutorsCount = value;
  }
  public resetMaxExecutorsCount() {
    this._maxExecutorsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutorsCountInput() {
    return this._maxExecutorsCount;
  }
}
export interface GoogleDataplexTaskSparkInfrastructureSpecContainerImage {
  /**
  * Container image to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#image GoogleDataplexTask#image}
  */
  readonly image?: string;
  /**
  * A list of Java JARS to add to the classpath. Valid input includes Cloud Storage URIs to Jar binaries. For example, gs://bucket-name/my/path/to/file.jar
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#java_jars GoogleDataplexTask#java_jars}
  */
  readonly javaJars?: string[];
  /**
  * Override to common configuration of open source components installed on the Dataproc cluster. The properties to set on daemon config files. Property keys are specified in prefix:property format, for example core:hadoop.tmp.dir. For more information, see Cluster properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#properties GoogleDataplexTask#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * A list of python packages to be installed. Valid formats include Cloud Storage URI to a PIP installable library. For example, gs://bucket-name/my/path/to/lib.tar.gz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#python_packages GoogleDataplexTask#python_packages}
  */
  readonly pythonPackages?: string[];
}

export function googleDataplexTaskSparkInfrastructureSpecContainerImageToTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference | GoogleDataplexTaskSparkInfrastructureSpecContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    java_jars: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.javaJars),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    python_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pythonPackages),
  }
}


export function googleDataplexTaskSparkInfrastructureSpecContainerImageToHclTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference | GoogleDataplexTaskSparkInfrastructureSpecContainerImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_jars: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.javaJars),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    python_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pythonPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskSparkInfrastructureSpecContainerImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._javaJars !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaJars = this._javaJars;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._pythonPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonPackages = this._pythonPackages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskSparkInfrastructureSpecContainerImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._image = undefined;
      this._javaJars = undefined;
      this._properties = undefined;
      this._pythonPackages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._image = value.image;
      this._javaJars = value.javaJars;
      this._properties = value.properties;
      this._pythonPackages = value.pythonPackages;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // java_jars - computed: false, optional: true, required: false
  private _javaJars?: string[]; 
  public get javaJars() {
    return this.getListAttribute('java_jars');
  }
  public set javaJars(value: string[]) {
    this._javaJars = value;
  }
  public resetJavaJars() {
    this._javaJars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaJarsInput() {
    return this._javaJars;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // python_packages - computed: false, optional: true, required: false
  private _pythonPackages?: string[]; 
  public get pythonPackages() {
    return this.getListAttribute('python_packages');
  }
  public set pythonPackages(value: string[]) {
    this._pythonPackages = value;
  }
  public resetPythonPackages() {
    this._pythonPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonPackagesInput() {
    return this._pythonPackages;
  }
}
export interface GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork {
  /**
  * The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#network GoogleDataplexTask#network}
  */
  readonly network?: string;
  /**
  * List of network tags to apply to the job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#network_tags GoogleDataplexTask#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * The Cloud VPC sub-network in which the job is run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#sub_network GoogleDataplexTask#sub_network}
  */
  readonly subNetwork?: string;
}

export function googleDataplexTaskSparkInfrastructureSpecVpcNetworkToTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference | GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    sub_network: cdktf.stringToTerraform(struct!.subNetwork),
  }
}


export function googleDataplexTaskSparkInfrastructureSpecVpcNetworkToHclTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference | GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sub_network: {
      value: cdktf.stringToHclTerraform(struct!.subNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._subNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subNetwork = this._subNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._networkTags = undefined;
      this._subNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._networkTags = value.networkTags;
      this._subNetwork = value.subNetwork;
    }
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags?: string[]; 
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }
  public set networkTags(value: string[]) {
    this._networkTags = value;
  }
  public resetNetworkTags() {
    this._networkTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags;
  }

  // sub_network - computed: false, optional: true, required: false
  private _subNetwork?: string; 
  public get subNetwork() {
    return this.getStringAttribute('sub_network');
  }
  public set subNetwork(value: string) {
    this._subNetwork = value;
  }
  public resetSubNetwork() {
    this._subNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkInput() {
    return this._subNetwork;
  }
}
export interface GoogleDataplexTaskSparkInfrastructureSpec {
  /**
  * batch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#batch GoogleDataplexTask#batch}
  */
  readonly batch?: GoogleDataplexTaskSparkInfrastructureSpecBatch;
  /**
  * container_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#container_image GoogleDataplexTask#container_image}
  */
  readonly containerImage?: GoogleDataplexTaskSparkInfrastructureSpecContainerImage;
  /**
  * vpc_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#vpc_network GoogleDataplexTask#vpc_network}
  */
  readonly vpcNetwork?: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork;
}

export function googleDataplexTaskSparkInfrastructureSpecToTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecOutputReference | GoogleDataplexTaskSparkInfrastructureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch: googleDataplexTaskSparkInfrastructureSpecBatchToTerraform(struct!.batch),
    container_image: googleDataplexTaskSparkInfrastructureSpecContainerImageToTerraform(struct!.containerImage),
    vpc_network: googleDataplexTaskSparkInfrastructureSpecVpcNetworkToTerraform(struct!.vpcNetwork),
  }
}


export function googleDataplexTaskSparkInfrastructureSpecToHclTerraform(struct?: GoogleDataplexTaskSparkInfrastructureSpecOutputReference | GoogleDataplexTaskSparkInfrastructureSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch: {
      value: googleDataplexTaskSparkInfrastructureSpecBatchToHclTerraform(struct!.batch),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskSparkInfrastructureSpecBatchList",
    },
    container_image: {
      value: googleDataplexTaskSparkInfrastructureSpecContainerImageToHclTerraform(struct!.containerImage),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskSparkInfrastructureSpecContainerImageList",
    },
    vpc_network: {
      value: googleDataplexTaskSparkInfrastructureSpecVpcNetworkToHclTerraform(struct!.vpcNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskSparkInfrastructureSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskSparkInfrastructureSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch?.internalValue;
    }
    if (this._containerImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage?.internalValue;
    }
    if (this._vpcNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetwork = this._vpcNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskSparkInfrastructureSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batch.internalValue = undefined;
      this._containerImage.internalValue = undefined;
      this._vpcNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batch.internalValue = value.batch;
      this._containerImage.internalValue = value.containerImage;
      this._vpcNetwork.internalValue = value.vpcNetwork;
    }
  }

  // batch - computed: false, optional: true, required: false
  private _batch = new GoogleDataplexTaskSparkInfrastructureSpecBatchOutputReference(this, "batch");
  public get batch() {
    return this._batch;
  }
  public putBatch(value: GoogleDataplexTaskSparkInfrastructureSpecBatch) {
    this._batch.internalValue = value;
  }
  public resetBatch() {
    this._batch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch.internalValue;
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage = new GoogleDataplexTaskSparkInfrastructureSpecContainerImageOutputReference(this, "container_image");
  public get containerImage() {
    return this._containerImage;
  }
  public putContainerImage(value: GoogleDataplexTaskSparkInfrastructureSpecContainerImage) {
    this._containerImage.internalValue = value;
  }
  public resetContainerImage() {
    this._containerImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage.internalValue;
  }

  // vpc_network - computed: false, optional: true, required: false
  private _vpcNetwork = new GoogleDataplexTaskSparkInfrastructureSpecVpcNetworkOutputReference(this, "vpc_network");
  public get vpcNetwork() {
    return this._vpcNetwork;
  }
  public putVpcNetwork(value: GoogleDataplexTaskSparkInfrastructureSpecVpcNetwork) {
    this._vpcNetwork.internalValue = value;
  }
  public resetVpcNetwork() {
    this._vpcNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkInput() {
    return this._vpcNetwork.internalValue;
  }
}
export interface GoogleDataplexTaskSpark {
  /**
  * Cloud Storage URIs of archives to be extracted into the working directory of each executor. Supported file types: .jar, .tar, .tar.gz, .tgz, and .zip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#archive_uris GoogleDataplexTask#archive_uris}
  */
  readonly archiveUris?: string[];
  /**
  * Cloud Storage URIs of files to be placed in the working directory of each executor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#file_uris GoogleDataplexTask#file_uris}
  */
  readonly fileUris?: string[];
  /**
  * The name of the driver's main class. The jar file that contains the class must be in the default CLASSPATH or specified in jar_file_uris. The execution args are passed in as a sequence of named process arguments (--key=value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#main_class GoogleDataplexTask#main_class}
  */
  readonly mainClass?: string;
  /**
  * The Cloud Storage URI of the jar file that contains the main class. The execution args are passed in as a sequence of named process arguments (--key=value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#main_jar_file_uri GoogleDataplexTask#main_jar_file_uri}
  */
  readonly mainJarFileUri?: string;
  /**
  * The Gcloud Storage URI of the main Python file to use as the driver. Must be a .py file. The execution args are passed in as a sequence of named process arguments (--key=value).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#python_script_file GoogleDataplexTask#python_script_file}
  */
  readonly pythonScriptFile?: string;
  /**
  * The query text. The execution args are used to declare a set of script variables (set key='value';).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#sql_script GoogleDataplexTask#sql_script}
  */
  readonly sqlScript?: string;
  /**
  * A reference to a query file. This can be the Cloud Storage URI of the query file or it can the path to a SqlScript Content. The execution args are used to declare a set of script variables (set key='value';).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#sql_script_file GoogleDataplexTask#sql_script_file}
  */
  readonly sqlScriptFile?: string;
  /**
  * infrastructure_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#infrastructure_spec GoogleDataplexTask#infrastructure_spec}
  */
  readonly infrastructureSpec?: GoogleDataplexTaskSparkInfrastructureSpec;
}

export function googleDataplexTaskSparkToTerraform(struct?: GoogleDataplexTaskSparkOutputReference | GoogleDataplexTaskSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.archiveUris),
    file_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileUris),
    main_class: cdktf.stringToTerraform(struct!.mainClass),
    main_jar_file_uri: cdktf.stringToTerraform(struct!.mainJarFileUri),
    python_script_file: cdktf.stringToTerraform(struct!.pythonScriptFile),
    sql_script: cdktf.stringToTerraform(struct!.sqlScript),
    sql_script_file: cdktf.stringToTerraform(struct!.sqlScriptFile),
    infrastructure_spec: googleDataplexTaskSparkInfrastructureSpecToTerraform(struct!.infrastructureSpec),
  }
}


export function googleDataplexTaskSparkToHclTerraform(struct?: GoogleDataplexTaskSparkOutputReference | GoogleDataplexTaskSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.archiveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    file_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    main_class: {
      value: cdktf.stringToHclTerraform(struct!.mainClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    main_jar_file_uri: {
      value: cdktf.stringToHclTerraform(struct!.mainJarFileUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    python_script_file: {
      value: cdktf.stringToHclTerraform(struct!.pythonScriptFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_script: {
      value: cdktf.stringToHclTerraform(struct!.sqlScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_script_file: {
      value: cdktf.stringToHclTerraform(struct!.sqlScriptFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    infrastructure_spec: {
      value: googleDataplexTaskSparkInfrastructureSpecToHclTerraform(struct!.infrastructureSpec),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataplexTaskSparkInfrastructureSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskSpark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveUris = this._archiveUris;
    }
    if (this._fileUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUris = this._fileUris;
    }
    if (this._mainClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainClass = this._mainClass;
    }
    if (this._mainJarFileUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainJarFileUri = this._mainJarFileUri;
    }
    if (this._pythonScriptFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonScriptFile = this._pythonScriptFile;
    }
    if (this._sqlScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlScript = this._sqlScript;
    }
    if (this._sqlScriptFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlScriptFile = this._sqlScriptFile;
    }
    if (this._infrastructureSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureSpec = this._infrastructureSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskSpark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveUris = undefined;
      this._fileUris = undefined;
      this._mainClass = undefined;
      this._mainJarFileUri = undefined;
      this._pythonScriptFile = undefined;
      this._sqlScript = undefined;
      this._sqlScriptFile = undefined;
      this._infrastructureSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveUris = value.archiveUris;
      this._fileUris = value.fileUris;
      this._mainClass = value.mainClass;
      this._mainJarFileUri = value.mainJarFileUri;
      this._pythonScriptFile = value.pythonScriptFile;
      this._sqlScript = value.sqlScript;
      this._sqlScriptFile = value.sqlScriptFile;
      this._infrastructureSpec.internalValue = value.infrastructureSpec;
    }
  }

  // archive_uris - computed: false, optional: true, required: false
  private _archiveUris?: string[]; 
  public get archiveUris() {
    return this.getListAttribute('archive_uris');
  }
  public set archiveUris(value: string[]) {
    this._archiveUris = value;
  }
  public resetArchiveUris() {
    this._archiveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveUrisInput() {
    return this._archiveUris;
  }

  // file_uris - computed: false, optional: true, required: false
  private _fileUris?: string[]; 
  public get fileUris() {
    return this.getListAttribute('file_uris');
  }
  public set fileUris(value: string[]) {
    this._fileUris = value;
  }
  public resetFileUris() {
    this._fileUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrisInput() {
    return this._fileUris;
  }

  // main_class - computed: false, optional: true, required: false
  private _mainClass?: string; 
  public get mainClass() {
    return this.getStringAttribute('main_class');
  }
  public set mainClass(value: string) {
    this._mainClass = value;
  }
  public resetMainClass() {
    this._mainClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainClassInput() {
    return this._mainClass;
  }

  // main_jar_file_uri - computed: false, optional: true, required: false
  private _mainJarFileUri?: string; 
  public get mainJarFileUri() {
    return this.getStringAttribute('main_jar_file_uri');
  }
  public set mainJarFileUri(value: string) {
    this._mainJarFileUri = value;
  }
  public resetMainJarFileUri() {
    this._mainJarFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainJarFileUriInput() {
    return this._mainJarFileUri;
  }

  // python_script_file - computed: false, optional: true, required: false
  private _pythonScriptFile?: string; 
  public get pythonScriptFile() {
    return this.getStringAttribute('python_script_file');
  }
  public set pythonScriptFile(value: string) {
    this._pythonScriptFile = value;
  }
  public resetPythonScriptFile() {
    this._pythonScriptFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonScriptFileInput() {
    return this._pythonScriptFile;
  }

  // sql_script - computed: false, optional: true, required: false
  private _sqlScript?: string; 
  public get sqlScript() {
    return this.getStringAttribute('sql_script');
  }
  public set sqlScript(value: string) {
    this._sqlScript = value;
  }
  public resetSqlScript() {
    this._sqlScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlScriptInput() {
    return this._sqlScript;
  }

  // sql_script_file - computed: false, optional: true, required: false
  private _sqlScriptFile?: string; 
  public get sqlScriptFile() {
    return this.getStringAttribute('sql_script_file');
  }
  public set sqlScriptFile(value: string) {
    this._sqlScriptFile = value;
  }
  public resetSqlScriptFile() {
    this._sqlScriptFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlScriptFileInput() {
    return this._sqlScriptFile;
  }

  // infrastructure_spec - computed: false, optional: true, required: false
  private _infrastructureSpec = new GoogleDataplexTaskSparkInfrastructureSpecOutputReference(this, "infrastructure_spec");
  public get infrastructureSpec() {
    return this._infrastructureSpec;
  }
  public putInfrastructureSpec(value: GoogleDataplexTaskSparkInfrastructureSpec) {
    this._infrastructureSpec.internalValue = value;
  }
  public resetInfrastructureSpec() {
    this._infrastructureSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureSpecInput() {
    return this._infrastructureSpec.internalValue;
  }
}
export interface GoogleDataplexTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#create GoogleDataplexTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#delete GoogleDataplexTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#update GoogleDataplexTask#update}
  */
  readonly update?: string;
}

export function googleDataplexTaskTimeoutsToTerraform(struct?: GoogleDataplexTaskTimeouts | cdktf.IResolvable): any {
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


export function googleDataplexTaskTimeoutsToHclTerraform(struct?: GoogleDataplexTaskTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataplexTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataplexTaskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataplexTaskTimeouts | cdktf.IResolvable | undefined) {
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
export interface GoogleDataplexTaskTriggerSpec {
  /**
  * Prevent the task from executing. This does not cancel already running tasks. It is intended to temporarily disable RECURRING tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#disabled GoogleDataplexTask#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Number of retry attempts before aborting. Set to zero to never attempt to retry a failed task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#max_retries GoogleDataplexTask#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Cron schedule (https://en.wikipedia.org/wiki/Cron) for running tasks periodically. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: 'CRON_TZ=${IANA_TIME_ZONE}' or 'TZ=${IANA_TIME_ZONE}'. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ=America/New_York 1 * * * *, or TZ=America/New_York 1 * * * *. This field is required for RECURRING tasks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#schedule GoogleDataplexTask#schedule}
  */
  readonly schedule?: string;
  /**
  * The first run of the task will be after this time. If not specified, the task will run shortly after being submitted if ON_DEMAND and based on the schedule if RECURRING.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#start_time GoogleDataplexTask#start_time}
  */
  readonly startTime?: string;
  /**
  * Trigger type of the user-specified Task Possible values: ["ON_DEMAND", "RECURRING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#type GoogleDataplexTask#type}
  */
  readonly type: string;
}

export function googleDataplexTaskTriggerSpecToTerraform(struct?: GoogleDataplexTaskTriggerSpecOutputReference | GoogleDataplexTaskTriggerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleDataplexTaskTriggerSpecToHclTerraform(struct?: GoogleDataplexTaskTriggerSpecOutputReference | GoogleDataplexTaskTriggerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataplexTaskTriggerSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataplexTaskTriggerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataplexTaskTriggerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._maxRetries = undefined;
      this._schedule = undefined;
      this._startTime = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._maxRetries = value.maxRetries;
      this._schedule = value.schedule;
      this._startTime = value.startTime;
      this._type = value.type;
    }
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

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task google_dataplex_task}
*/
export class GoogleDataplexTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataplex_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataplexTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataplexTask to import
  * @param importFromId The id of the existing GoogleDataplexTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataplexTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataplex_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_dataplex_task google_dataplex_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataplexTaskConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataplexTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataplex_task',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.19.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._lake = config.lake;
    this._location = config.location;
    this._project = config.project;
    this._taskId = config.taskId;
    this._executionSpec.internalValue = config.executionSpec;
    this._notebook.internalValue = config.notebook;
    this._spark.internalValue = config.spark;
    this._timeouts.internalValue = config.timeouts;
    this._triggerSpec.internalValue = config.triggerSpec;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // execution_status - computed: true, optional: false, required: false
  private _executionStatus = new GoogleDataplexTaskExecutionStatusList(this, "execution_status", false);
  public get executionStatus() {
    return this._executionStatus;
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

  // lake - computed: false, optional: true, required: false
  private _lake?: string; 
  public get lake() {
    return this.getStringAttribute('lake');
  }
  public set lake(value: string) {
    this._lake = value;
  }
  public resetLake() {
    this._lake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeInput() {
    return this._lake;
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

  // task_id - computed: false, optional: true, required: false
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
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

  // execution_spec - computed: false, optional: false, required: true
  private _executionSpec = new GoogleDataplexTaskExecutionSpecOutputReference(this, "execution_spec");
  public get executionSpec() {
    return this._executionSpec;
  }
  public putExecutionSpec(value: GoogleDataplexTaskExecutionSpec) {
    this._executionSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionSpecInput() {
    return this._executionSpec.internalValue;
  }

  // notebook - computed: false, optional: true, required: false
  private _notebook = new GoogleDataplexTaskNotebookOutputReference(this, "notebook");
  public get notebook() {
    return this._notebook;
  }
  public putNotebook(value: GoogleDataplexTaskNotebook) {
    this._notebook.internalValue = value;
  }
  public resetNotebook() {
    this._notebook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookInput() {
    return this._notebook.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new GoogleDataplexTaskSparkOutputReference(this, "spark");
  public get spark() {
    return this._spark;
  }
  public putSpark(value: GoogleDataplexTaskSpark) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataplexTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataplexTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trigger_spec - computed: false, optional: false, required: true
  private _triggerSpec = new GoogleDataplexTaskTriggerSpecOutputReference(this, "trigger_spec");
  public get triggerSpec() {
    return this._triggerSpec;
  }
  public putTriggerSpec(value: GoogleDataplexTaskTriggerSpec) {
    this._triggerSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSpecInput() {
    return this._triggerSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      lake: cdktf.stringToTerraform(this._lake),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      task_id: cdktf.stringToTerraform(this._taskId),
      execution_spec: googleDataplexTaskExecutionSpecToTerraform(this._executionSpec.internalValue),
      notebook: googleDataplexTaskNotebookToTerraform(this._notebook.internalValue),
      spark: googleDataplexTaskSparkToTerraform(this._spark.internalValue),
      timeouts: googleDataplexTaskTimeoutsToTerraform(this._timeouts.internalValue),
      trigger_spec: googleDataplexTaskTriggerSpecToTerraform(this._triggerSpec.internalValue),
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
      lake: {
        value: cdktf.stringToHclTerraform(this._lake),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_id: {
        value: cdktf.stringToHclTerraform(this._taskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      execution_spec: {
        value: googleDataplexTaskExecutionSpecToHclTerraform(this._executionSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexTaskExecutionSpecList",
      },
      notebook: {
        value: googleDataplexTaskNotebookToHclTerraform(this._notebook.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexTaskNotebookList",
      },
      spark: {
        value: googleDataplexTaskSparkToHclTerraform(this._spark.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexTaskSparkList",
      },
      timeouts: {
        value: googleDataplexTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataplexTaskTimeouts",
      },
      trigger_spec: {
        value: googleDataplexTaskTriggerSpecToHclTerraform(this._triggerSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataplexTaskTriggerSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
