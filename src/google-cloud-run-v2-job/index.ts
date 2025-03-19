/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudRunV2JobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
  * 
  * Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected on new resources.
  * All system annotations in v1 now have a corresponding field in v2 Job.
  * 
  * This field follows Kubernetes annotations' namespacing, limits, and rules.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#annotations GoogleCloudRunV2Job#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Arbitrary identifier for the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#client GoogleCloudRunV2Job#client}
  */
  readonly client?: string;
  /**
  * Arbitrary version identifier for the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#client_version GoogleCloudRunV2Job#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Whether Terraform will be prevented from destroying the job. Defaults to true.
  * When a'terraform destroy' or 'terraform apply' would delete the job,
  * the command will fail if this field is not set to false in Terraform state.
  * When the field is set to true or unset in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the job will fail.
  * When the field is set to false, deleting the job is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#deletion_protection GoogleCloudRunV2Job#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#id GoogleCloudRunV2Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
  * environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
  * 
  * Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
  * All system labels in v1 now have a corresponding field in v2 Job.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#labels GoogleCloudRunV2Job#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
  * If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
  * 
  * For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#launch_stage GoogleCloudRunV2Job#launch_stage}
  */
  readonly launchStage?: string;
  /**
  * The location of the cloud run job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#location GoogleCloudRunV2Job#location}
  */
  readonly location: string;
  /**
  * Name of the Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#project GoogleCloudRunV2Job#project}
  */
  readonly project?: string;
  /**
  * A unique string used as a suffix creating a new execution upon job create or update. The Job will become ready when the execution is successfully completed.
  * The sum of job name and token length must be fewer than 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#run_execution_token GoogleCloudRunV2Job#run_execution_token}
  */
  readonly runExecutionToken?: string;
  /**
  * A unique string used as a suffix creating a new execution upon job create or update. The Job will become ready when the execution is successfully started.
  * The sum of job name and token length must be fewer than 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#start_execution_token GoogleCloudRunV2Job#start_execution_token}
  */
  readonly startExecutionToken?: string;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#binary_authorization GoogleCloudRunV2Job#binary_authorization}
  */
  readonly binaryAuthorization?: GoogleCloudRunV2JobBinaryAuthorization;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#template GoogleCloudRunV2Job#template}
  */
  readonly template: GoogleCloudRunV2JobTemplate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#timeouts GoogleCloudRunV2Job#timeouts}
  */
  readonly timeouts?: GoogleCloudRunV2JobTimeouts;
}
export interface GoogleCloudRunV2JobConditions {
}

export function googleCloudRunV2JobConditionsToTerraform(struct?: GoogleCloudRunV2JobConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCloudRunV2JobConditionsToHclTerraform(struct?: GoogleCloudRunV2JobConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCloudRunV2JobConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_reason - computed: true, optional: false, required: false
  public get executionReason() {
    return this.getStringAttribute('execution_reason');
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

  // revision_reason - computed: true, optional: false, required: false
  public get revisionReason() {
    return this.getStringAttribute('revision_reason');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
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

export class GoogleCloudRunV2JobConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCloudRunV2JobConditionsOutputReference {
    return new GoogleCloudRunV2JobConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobLatestCreatedExecution {
}

export function googleCloudRunV2JobLatestCreatedExecutionToTerraform(struct?: GoogleCloudRunV2JobLatestCreatedExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCloudRunV2JobLatestCreatedExecutionToHclTerraform(struct?: GoogleCloudRunV2JobLatestCreatedExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCloudRunV2JobLatestCreatedExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobLatestCreatedExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobLatestCreatedExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completion_time - computed: true, optional: false, required: false
  public get completionTime() {
    return this.getStringAttribute('completion_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class GoogleCloudRunV2JobLatestCreatedExecutionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCloudRunV2JobLatestCreatedExecutionOutputReference {
    return new GoogleCloudRunV2JobLatestCreatedExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTerminalCondition {
}

export function googleCloudRunV2JobTerminalConditionToTerraform(struct?: GoogleCloudRunV2JobTerminalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleCloudRunV2JobTerminalConditionToHclTerraform(struct?: GoogleCloudRunV2JobTerminalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleCloudRunV2JobTerminalConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTerminalCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTerminalCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_reason - computed: true, optional: false, required: false
  public get executionReason() {
    return this.getStringAttribute('execution_reason');
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

  // revision_reason - computed: true, optional: false, required: false
  public get revisionReason() {
    return this.getStringAttribute('revision_reason');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
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

export class GoogleCloudRunV2JobTerminalConditionList extends cdktf.ComplexList {

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
  public get(index: number): GoogleCloudRunV2JobTerminalConditionOutputReference {
    return new GoogleCloudRunV2JobTerminalConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobBinaryAuthorization {
  /**
  * If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#breakglass_justification GoogleCloudRunV2Job#breakglass_justification}
  */
  readonly breakglassJustification?: string;
  /**
  * The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#policy GoogleCloudRunV2Job#policy}
  */
  readonly policy?: string;
  /**
  * If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#use_default GoogleCloudRunV2Job#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
}

export function googleCloudRunV2JobBinaryAuthorizationToTerraform(struct?: GoogleCloudRunV2JobBinaryAuthorizationOutputReference | GoogleCloudRunV2JobBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breakglass_justification: cdktf.stringToTerraform(struct!.breakglassJustification),
    policy: cdktf.stringToTerraform(struct!.policy),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
  }
}


export function googleCloudRunV2JobBinaryAuthorizationToHclTerraform(struct?: GoogleCloudRunV2JobBinaryAuthorizationOutputReference | GoogleCloudRunV2JobBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breakglass_justification: {
      value: cdktf.stringToHclTerraform(struct!.breakglassJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakglassJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakglassJustification = this._breakglassJustification;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._breakglassJustification = undefined;
      this._policy = undefined;
      this._useDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._breakglassJustification = value.breakglassJustification;
      this._policy = value.policy;
      this._useDefault = value.useDefault;
    }
  }

  // breakglass_justification - computed: false, optional: true, required: false
  private _breakglassJustification?: string; 
  public get breakglassJustification() {
    return this.getStringAttribute('breakglass_justification');
  }
  public set breakglassJustification(value: string) {
    this._breakglassJustification = value;
  }
  public resetBreakglassJustification() {
    this._breakglassJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakglassJustificationInput() {
    return this._breakglassJustification;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // use_default - computed: false, optional: true, required: false
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  public resetUseDefault() {
    this._useDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef {
  /**
  * The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}
  */
  readonly secret: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#version GoogleCloudRunV2Job#version}
  */
  readonly version: string;
}

export function googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference | GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference | GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef): any {
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

export class GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._version = value.version;
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
export interface GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource {
  /**
  * secret_key_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#secret_key_ref GoogleCloudRunV2Job#secret_key_ref}
  */
  readonly secretKeyRef?: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
}

export function googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference | GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference | GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretKeyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateContainersEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * Literal value of the environment variable. Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#value GoogleCloudRunV2Job#value}
  */
  readonly value?: string;
  /**
  * value_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#value_source GoogleCloudRunV2Job#value_source}
  */
  readonly valueSource?: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource;
}

export function googleCloudRunV2JobTemplateTemplateContainersEnvToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_source: googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceToTerraform(struct!.valueSource),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersEnvToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_source: {
      value: googleCloudRunV2JobTemplateTemplateContainersEnvValueSourceToHclTerraform(struct!.valueSource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSource = this._valueSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueSource.internalValue = value.valueSource;
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

  // value_source - computed: false, optional: true, required: false
  private _valueSource = new GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference(this, "value_source");
  public get valueSource() {
    return this._valueSource;
  }
  public putValueSource(value: GoogleCloudRunV2JobTemplateTemplateContainersEnvValueSource) {
    this._valueSource.internalValue = value;
  }
  public resetValueSource() {
    this._valueSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSourceInput() {
    return this._valueSource.internalValue;
  }
}

export class GoogleCloudRunV2JobTemplateTemplateContainersEnvList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateContainersPorts {
  /**
  * Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#container_port GoogleCloudRunV2Job#container_port}
  */
  readonly containerPort?: number;
  /**
  * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}
  */
  readonly name?: string;
}

export function googleCloudRunV2JobTemplateTemplateContainersPortsToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersPortsToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._name = value.name;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
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
}

export class GoogleCloudRunV2JobTemplateTemplateContainersPortsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateContainersResources {
  /**
  * Only memory and CPU are supported. Use key 'cpu' for CPU limit and 'memory' for memory limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#limits GoogleCloudRunV2Job#limits}
  */
  readonly limits?: { [key: string]: string };
}

export function googleCloudRunV2JobTemplateTemplateContainersResourcesToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference | GoogleCloudRunV2JobTemplateTemplateContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersResourcesToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference | GoogleCloudRunV2JobTemplateTemplateContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
    }
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#mount_path GoogleCloudRunV2Job#mount_path}
  */
  readonly mountPath: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}
  */
  readonly name: string;
}

export function googleCloudRunV2JobTemplateTemplateContainersVolumeMountsToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersVolumeMountsToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
}

export class GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateContainers {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#args GoogleCloudRunV2Job#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#command GoogleCloudRunV2Job#command}
  */
  readonly command?: string[];
  /**
  * URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#image GoogleCloudRunV2Job#image}
  */
  readonly image: string;
  /**
  * Name of the container specified as a DNS_LABEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}
  */
  readonly name?: string;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#working_dir GoogleCloudRunV2Job#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#env GoogleCloudRunV2Job#env}
  */
  readonly env?: GoogleCloudRunV2JobTemplateTemplateContainersEnv[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#ports GoogleCloudRunV2Job#ports}
  */
  readonly ports?: GoogleCloudRunV2JobTemplateTemplateContainersPorts[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#resources GoogleCloudRunV2Job#resources}
  */
  readonly resources?: GoogleCloudRunV2JobTemplateTemplateContainersResources;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#volume_mounts GoogleCloudRunV2Job#volume_mounts}
  */
  readonly volumeMounts?: GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[] | cdktf.IResolvable;
}

export function googleCloudRunV2JobTemplateTemplateContainersToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateContainersEnvToTerraform, true)(struct!.env),
    ports: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateContainersPortsToTerraform, true)(struct!.ports),
    resources: googleCloudRunV2JobTemplateTemplateContainersResourcesToTerraform(struct!.resources),
    volume_mounts: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateContainersVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function googleCloudRunV2JobTemplateTemplateContainersToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateContainersEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersEnvList",
    },
    ports: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateContainersPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersPortsList",
    },
    resources: {
      value: googleCloudRunV2JobTemplateTemplateContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersResourcesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateContainersVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._image = undefined;
      this._name = undefined;
      this._workingDir = undefined;
      this._env.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._image = value.image;
      this._name = value.name;
      this._workingDir = value.workingDir;
      this._env.internalValue = value.env;
      this._ports.internalValue = value.ports;
      this._resources.internalValue = value.resources;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
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

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // env - computed: false, optional: true, required: false
  private _env = new GoogleCloudRunV2JobTemplateTemplateContainersEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: GoogleCloudRunV2JobTemplateTemplateContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new GoogleCloudRunV2JobTemplateTemplateContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: GoogleCloudRunV2JobTemplateTemplateContainersPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new GoogleCloudRunV2JobTemplateTemplateContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: GoogleCloudRunV2JobTemplateTemplateContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new GoogleCloudRunV2JobTemplateTemplateContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: GoogleCloudRunV2JobTemplateTemplateContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class GoogleCloudRunV2JobTemplateTemplateContainersList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateContainers[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateContainersOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance {
  /**
  * The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#instances GoogleCloudRunV2Job#instances}
  */
  readonly instances?: string[];
}

export function googleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instances = value.instances;
    }
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir {
  /**
  * The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#medium GoogleCloudRunV2Job#medium}
  */
  readonly medium?: string;
  /**
  * Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#size_limit GoogleCloudRunV2Job#size_limit}
  */
  readonly sizeLimit?: string;
}

export function googleCloudRunV2JobTemplateTemplateVolumesEmptyDirToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesEmptyDirToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumesGcs {
  /**
  * Name of the cloud storage bucket to back the volume. The resource service account must have permission to access the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#bucket GoogleCloudRunV2Job#bucket}
  */
  readonly bucket: string;
  /**
  * A list of flags to pass to the gcsfuse command for configuring this volume.
  * Flags should be passed without leading dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#mount_options GoogleCloudRunV2Job#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * If true, mount this volume as read-only in all mounts. If false, mount this volume as read-write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#read_only GoogleCloudRunV2Job#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function googleCloudRunV2JobTemplateTemplateVolumesGcsToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountOptions),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesGcsToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesGcs): any {
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
    mount_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mountOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumesGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumesGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._mountOptions = undefined;
      this._readOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._mountOptions = value.mountOptions;
      this._readOnly = value.readOnly;
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

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumesNfs {
  /**
  * Path that is exported by the NFS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}
  */
  readonly path?: string;
  /**
  * If true, mount this volume as read-only in all mounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#read_only GoogleCloudRunV2Job#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Hostname or IP address of the NFS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#server GoogleCloudRunV2Job#server}
  */
  readonly server: string;
}

export function googleCloudRunV2JobTemplateTemplateVolumesNfsToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesNfsToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumesNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumesNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems {
  /**
  * Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#mode GoogleCloudRunV2Job#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the secret in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#path GoogleCloudRunV2Job#path}
  */
  readonly path: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#version GoogleCloudRunV2Job#version}
  */
  readonly version: string;
}

export function googleCloudRunV2JobTemplateTemplateVolumesSecretItemsToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesSecretItemsToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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

export class GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._path = value.path;
      this._version = value.version;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

export class GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumesSecret {
  /**
  * Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#default_mode GoogleCloudRunV2Job#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}
  */
  readonly secret: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#items GoogleCloudRunV2Job#items}
  */
  readonly items?: GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[] | cdktf.IResolvable;
}

export function googleCloudRunV2JobTemplateTemplateVolumesSecretToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    secret: cdktf.stringToTerraform(struct!.secret),
    items: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateVolumesSecretItemsToTerraform, true)(struct!.items),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesSecretToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference | GoogleCloudRunV2JobTemplateTemplateVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateVolumesSecretItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultMode = undefined;
      this._secret = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultMode = value.defaultMode;
      this._secret = value.secret;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
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

  // items - computed: false, optional: true, required: false
  private _items = new GoogleCloudRunV2JobTemplateTemplateVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: GoogleCloudRunV2JobTemplateTemplateVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVolumes {
  /**
  * Volume's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#name GoogleCloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * cloud_sql_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#cloud_sql_instance GoogleCloudRunV2Job#cloud_sql_instance}
  */
  readonly cloudSqlInstance?: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
  /**
  * empty_dir block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#empty_dir GoogleCloudRunV2Job#empty_dir}
  */
  readonly emptyDir?: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#gcs GoogleCloudRunV2Job#gcs}
  */
  readonly gcs?: GoogleCloudRunV2JobTemplateTemplateVolumesGcs;
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#nfs GoogleCloudRunV2Job#nfs}
  */
  readonly nfs?: GoogleCloudRunV2JobTemplateTemplateVolumesNfs;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#secret GoogleCloudRunV2Job#secret}
  */
  readonly secret?: GoogleCloudRunV2JobTemplateTemplateVolumesSecret;
}

export function googleCloudRunV2JobTemplateTemplateVolumesToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    cloud_sql_instance: googleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceToTerraform(struct!.cloudSqlInstance),
    empty_dir: googleCloudRunV2JobTemplateTemplateVolumesEmptyDirToTerraform(struct!.emptyDir),
    gcs: googleCloudRunV2JobTemplateTemplateVolumesGcsToTerraform(struct!.gcs),
    nfs: googleCloudRunV2JobTemplateTemplateVolumesNfsToTerraform(struct!.nfs),
    secret: googleCloudRunV2JobTemplateTemplateVolumesSecretToTerraform(struct!.secret),
  }
}


export function googleCloudRunV2JobTemplateTemplateVolumesToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable): any {
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
    cloud_sql_instance: {
      value: googleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceToHclTerraform(struct!.cloudSqlInstance),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceList",
    },
    empty_dir: {
      value: googleCloudRunV2JobTemplateTemplateVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirList",
    },
    gcs: {
      value: googleCloudRunV2JobTemplateTemplateVolumesGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesGcsList",
    },
    nfs: {
      value: googleCloudRunV2JobTemplateTemplateVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesNfsList",
    },
    secret: {
      value: googleCloudRunV2JobTemplateTemplateVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._cloudSqlInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlInstance = this._cloudSqlInstance?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._cloudSqlInstance.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._nfs.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._cloudSqlInstance.internalValue = value.cloudSqlInstance;
      this._emptyDir.internalValue = value.emptyDir;
      this._gcs.internalValue = value.gcs;
      this._nfs.internalValue = value.nfs;
      this._secret.internalValue = value.secret;
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

  // cloud_sql_instance - computed: false, optional: true, required: false
  private _cloudSqlInstance = new GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference(this, "cloud_sql_instance");
  public get cloudSqlInstance() {
    return this._cloudSqlInstance;
  }
  public putCloudSqlInstance(value: GoogleCloudRunV2JobTemplateTemplateVolumesCloudSqlInstance) {
    this._cloudSqlInstance.internalValue = value;
  }
  public resetCloudSqlInstance() {
    this._cloudSqlInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInstanceInput() {
    return this._cloudSqlInstance.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: GoogleCloudRunV2JobTemplateTemplateVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new GoogleCloudRunV2JobTemplateTemplateVolumesGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: GoogleCloudRunV2JobTemplateTemplateVolumesGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new GoogleCloudRunV2JobTemplateTemplateVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: GoogleCloudRunV2JobTemplateTemplateVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new GoogleCloudRunV2JobTemplateTemplateVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: GoogleCloudRunV2JobTemplateTemplateVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class GoogleCloudRunV2JobTemplateTemplateVolumesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateVolumes[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces {
  /**
  * The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both
  * network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
  * looked up from the subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#network GoogleCloudRunV2Job#network}
  */
  readonly network?: string;
  /**
  * The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both
  * network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
  * subnetwork with the same name with the network will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#subnetwork GoogleCloudRunV2Job#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * Network tags applied to this Cloud Run job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#tags GoogleCloudRunV2Job#tags}
  */
  readonly tags?: string[];
}

export function googleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function googleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable): any {
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
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
    }
  }

  // network - computed: true, optional: true, required: false
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

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
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
}

export class GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference {
    return new GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudRunV2JobTemplateTemplateVpcAccess {
  /**
  * VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#connector GoogleCloudRunV2Job#connector}
  */
  readonly connector?: string;
  /**
  * Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#egress GoogleCloudRunV2Job#egress}
  */
  readonly egress?: string;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#network_interfaces GoogleCloudRunV2Job#network_interfaces}
  */
  readonly networkInterfaces?: GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[] | cdktf.IResolvable;
}

export function googleCloudRunV2JobTemplateTemplateVpcAccessToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference | GoogleCloudRunV2JobTemplateTemplateVpcAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector: cdktf.stringToTerraform(struct!.connector),
    egress: cdktf.stringToTerraform(struct!.egress),
    network_interfaces: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesToTerraform, true)(struct!.networkInterfaces),
  }
}


export function googleCloudRunV2JobTemplateTemplateVpcAccessToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference | GoogleCloudRunV2JobTemplateTemplateVpcAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector: {
      value: cdktf.stringToHclTerraform(struct!.connector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress: {
      value: cdktf.stringToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interfaces: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesToHclTerraform, true)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplateVpcAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connector !== undefined) {
      hasAnyValues = true;
      internalValueResult.connector = this._connector;
    }
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplateVpcAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connector = undefined;
      this._egress = undefined;
      this._networkInterfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connector = value.connector;
      this._egress = value.egress;
      this._networkInterfaces.internalValue = value.networkInterfaces;
    }
  }

  // connector - computed: false, optional: true, required: false
  private _connector?: string; 
  public get connector() {
    return this.getStringAttribute('connector');
  }
  public set connector(value: string) {
    this._connector = value;
  }
  public resetConnector() {
    this._connector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector;
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: string; 
  public get egress() {
    return this.getStringAttribute('egress');
  }
  public set egress(value: string) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: GoogleCloudRunV2JobTemplateTemplateVpcAccessNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }
}
export interface GoogleCloudRunV2JobTemplateTemplate {
  /**
  * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#encryption_key GoogleCloudRunV2Job#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#execution_environment GoogleCloudRunV2Job#execution_environment}
  */
  readonly executionEnvironment?: string;
  /**
  * Number of retries allowed per Task, before marking this Task failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#max_retries GoogleCloudRunV2Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#service_account GoogleCloudRunV2Job#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.
  * 
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#timeout GoogleCloudRunV2Job#timeout}
  */
  readonly timeout?: string;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#containers GoogleCloudRunV2Job#containers}
  */
  readonly containers?: GoogleCloudRunV2JobTemplateTemplateContainers[] | cdktf.IResolvable;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#volumes GoogleCloudRunV2Job#volumes}
  */
  readonly volumes?: GoogleCloudRunV2JobTemplateTemplateVolumes[] | cdktf.IResolvable;
  /**
  * vpc_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#vpc_access GoogleCloudRunV2Job#vpc_access}
  */
  readonly vpcAccess?: GoogleCloudRunV2JobTemplateTemplateVpcAccess;
}

export function googleCloudRunV2JobTemplateTemplateToTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateOutputReference | GoogleCloudRunV2JobTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    execution_environment: cdktf.stringToTerraform(struct!.executionEnvironment),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    containers: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateContainersToTerraform, true)(struct!.containers),
    volumes: cdktf.listMapper(googleCloudRunV2JobTemplateTemplateVolumesToTerraform, true)(struct!.volumes),
    vpc_access: googleCloudRunV2JobTemplateTemplateVpcAccessToTerraform(struct!.vpcAccess),
  }
}


export function googleCloudRunV2JobTemplateTemplateToHclTerraform(struct?: GoogleCloudRunV2JobTemplateTemplateOutputReference | GoogleCloudRunV2JobTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_environment: {
      value: cdktf.stringToHclTerraform(struct!.executionEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateContainersToHclTerraform, true)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateContainersList",
    },
    volumes: {
      value: cdktf.listMapperHcl(googleCloudRunV2JobTemplateTemplateVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVolumesList",
    },
    vpc_access: {
      value: googleCloudRunV2JobTemplateTemplateVpcAccessToHclTerraform(struct!.vpcAccess),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateVpcAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplateTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._executionEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEnvironment = this._executionEnvironment;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._vpcAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccess = this._vpcAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplateTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKey = undefined;
      this._executionEnvironment = undefined;
      this._maxRetries = undefined;
      this._serviceAccount = undefined;
      this._timeout = undefined;
      this._containers.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._vpcAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKey = value.encryptionKey;
      this._executionEnvironment = value.executionEnvironment;
      this._maxRetries = value.maxRetries;
      this._serviceAccount = value.serviceAccount;
      this._timeout = value.timeout;
      this._containers.internalValue = value.containers;
      this._volumes.internalValue = value.volumes;
      this._vpcAccess.internalValue = value.vpcAccess;
    }
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // execution_environment - computed: true, optional: true, required: false
  private _executionEnvironment?: string; 
  public get executionEnvironment() {
    return this.getStringAttribute('execution_environment');
  }
  public set executionEnvironment(value: string) {
    this._executionEnvironment = value;
  }
  public resetExecutionEnvironment() {
    this._executionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEnvironmentInput() {
    return this._executionEnvironment;
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

  // timeout - computed: true, optional: true, required: false
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

  // containers - computed: false, optional: true, required: false
  private _containers = new GoogleCloudRunV2JobTemplateTemplateContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: GoogleCloudRunV2JobTemplateTemplateContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new GoogleCloudRunV2JobTemplateTemplateVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: GoogleCloudRunV2JobTemplateTemplateVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // vpc_access - computed: false, optional: true, required: false
  private _vpcAccess = new GoogleCloudRunV2JobTemplateTemplateVpcAccessOutputReference(this, "vpc_access");
  public get vpcAccess() {
    return this._vpcAccess;
  }
  public putVpcAccess(value: GoogleCloudRunV2JobTemplateTemplateVpcAccess) {
    this._vpcAccess.internalValue = value;
  }
  public resetVpcAccess() {
    this._vpcAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessInput() {
    return this._vpcAccess.internalValue;
  }
}
export interface GoogleCloudRunV2JobTemplate {
  /**
  * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
  * 
  * Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
  * All system annotations in v1 now have a corresponding field in v2 ExecutionTemplate.
  * 
  * This field follows Kubernetes annotations' namespacing, limits, and rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#annotations GoogleCloudRunV2Job#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter,
  * or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or
  * https://cloud.google.com/run/docs/configuring/labels.
  * 
  * Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
  * All system labels in v1 now have a corresponding field in v2 ExecutionTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#labels GoogleCloudRunV2Job#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the maximum desired number of tasks the execution should run at given time. Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#parallelism GoogleCloudRunV2Job#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#task_count GoogleCloudRunV2Job#task_count}
  */
  readonly taskCount?: number;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#template GoogleCloudRunV2Job#template}
  */
  readonly template: GoogleCloudRunV2JobTemplateTemplate;
}

export function googleCloudRunV2JobTemplateToTerraform(struct?: GoogleCloudRunV2JobTemplateOutputReference | GoogleCloudRunV2JobTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    template: googleCloudRunV2JobTemplateTemplateToTerraform(struct!.template),
  }
}


export function googleCloudRunV2JobTemplateToHclTerraform(struct?: GoogleCloudRunV2JobTemplateOutputReference | GoogleCloudRunV2JobTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parallelism: {
      value: cdktf.numberToHclTerraform(struct!.parallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_count: {
      value: cdktf.numberToHclTerraform(struct!.taskCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template: {
      value: googleCloudRunV2JobTemplateTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudRunV2JobTemplateTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudRunV2JobTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudRunV2JobTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudRunV2JobTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._labels = undefined;
      this._parallelism = undefined;
      this._taskCount = undefined;
      this._template.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._parallelism = value.parallelism;
      this._taskCount = value.taskCount;
      this._template.internalValue = value.template;
    }
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

  // parallelism - computed: true, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // task_count - computed: true, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // template - computed: false, optional: false, required: true
  private _template = new GoogleCloudRunV2JobTemplateTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: GoogleCloudRunV2JobTemplateTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface GoogleCloudRunV2JobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#create GoogleCloudRunV2Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#delete GoogleCloudRunV2Job#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#update GoogleCloudRunV2Job#update}
  */
  readonly update?: string;
}

export function googleCloudRunV2JobTimeoutsToTerraform(struct?: GoogleCloudRunV2JobTimeouts | cdktf.IResolvable): any {
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


export function googleCloudRunV2JobTimeoutsToHclTerraform(struct?: GoogleCloudRunV2JobTimeouts | cdktf.IResolvable): any {
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

export class GoogleCloudRunV2JobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudRunV2JobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleCloudRunV2JobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job google_cloud_run_v2_job}
*/
export class GoogleCloudRunV2Job extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_run_v2_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCloudRunV2Job resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudRunV2Job to import
  * @param importFromId The id of the existing GoogleCloudRunV2Job that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudRunV2Job to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_run_v2_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_cloud_run_v2_job google_cloud_run_v2_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudRunV2JobConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudRunV2JobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_v2_job',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.25.0',
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
    this._client = config.client;
    this._clientVersion = config.clientVersion;
    this._deletionProtection = config.deletionProtection;
    this._id = config.id;
    this._labels = config.labels;
    this._launchStage = config.launchStage;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._runExecutionToken = config.runExecutionToken;
    this._startExecutionToken = config.startExecutionToken;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._template.internalValue = config.template;
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

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // client_version - computed: false, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GoogleCloudRunV2JobConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // execution_count - computed: true, optional: false, required: false
  public get executionCount() {
    return this.getNumberAttribute('execution_count');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
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

  // last_modifier - computed: true, optional: false, required: false
  public get lastModifier() {
    return this.getStringAttribute('last_modifier');
  }

  // latest_created_execution - computed: true, optional: false, required: false
  private _latestCreatedExecution = new GoogleCloudRunV2JobLatestCreatedExecutionList(this, "latest_created_execution", false);
  public get latestCreatedExecution() {
    return this._latestCreatedExecution;
  }

  // launch_stage - computed: true, optional: true, required: false
  private _launchStage?: string; 
  public get launchStage() {
    return this.getStringAttribute('launch_stage');
  }
  public set launchStage(value: string) {
    this._launchStage = value;
  }
  public resetLaunchStage() {
    this._launchStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchStageInput() {
    return this._launchStage;
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

  // observed_generation - computed: true, optional: false, required: false
  public get observedGeneration() {
    return this.getStringAttribute('observed_generation');
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

  // run_execution_token - computed: false, optional: true, required: false
  private _runExecutionToken?: string; 
  public get runExecutionToken() {
    return this.getStringAttribute('run_execution_token');
  }
  public set runExecutionToken(value: string) {
    this._runExecutionToken = value;
  }
  public resetRunExecutionToken() {
    this._runExecutionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runExecutionTokenInput() {
    return this._runExecutionToken;
  }

  // start_execution_token - computed: false, optional: true, required: false
  private _startExecutionToken?: string; 
  public get startExecutionToken() {
    return this.getStringAttribute('start_execution_token');
  }
  public set startExecutionToken(value: string) {
    this._startExecutionToken = value;
  }
  public resetStartExecutionToken() {
    this._startExecutionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startExecutionTokenInput() {
    return this._startExecutionToken;
  }

  // terminal_condition - computed: true, optional: false, required: false
  private _terminalCondition = new GoogleCloudRunV2JobTerminalConditionList(this, "terminal_condition", false);
  public get terminalCondition() {
    return this._terminalCondition;
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

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new GoogleCloudRunV2JobBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: GoogleCloudRunV2JobBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new GoogleCloudRunV2JobTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: GoogleCloudRunV2JobTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudRunV2JobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudRunV2JobTimeouts) {
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
      client: cdktf.stringToTerraform(this._client),
      client_version: cdktf.stringToTerraform(this._clientVersion),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      launch_stage: cdktf.stringToTerraform(this._launchStage),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      run_execution_token: cdktf.stringToTerraform(this._runExecutionToken),
      start_execution_token: cdktf.stringToTerraform(this._startExecutionToken),
      binary_authorization: googleCloudRunV2JobBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      template: googleCloudRunV2JobTemplateToTerraform(this._template.internalValue),
      timeouts: googleCloudRunV2JobTimeoutsToTerraform(this._timeouts.internalValue),
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
      client: {
        value: cdktf.stringToHclTerraform(this._client),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_version: {
        value: cdktf.stringToHclTerraform(this._clientVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      launch_stage: {
        value: cdktf.stringToHclTerraform(this._launchStage),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_execution_token: {
        value: cdktf.stringToHclTerraform(this._runExecutionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_execution_token: {
        value: cdktf.stringToHclTerraform(this._startExecutionToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_authorization: {
        value: googleCloudRunV2JobBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudRunV2JobBinaryAuthorizationList",
      },
      template: {
        value: googleCloudRunV2JobTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudRunV2JobTemplateList",
      },
      timeouts: {
        value: googleCloudRunV2JobTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudRunV2JobTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
