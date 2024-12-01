/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleCloudfunctionsFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#available_memory_mb GoogleCloudfunctionsFunction#available_memory_mb}
  */
  readonly availableMemoryMb?: number;
  /**
  *  A set of key/value environment variable pairs available during build time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#build_environment_variables GoogleCloudfunctionsFunction#build_environment_variables}
  */
  readonly buildEnvironmentVariables?: { [key: string]: string };
  /**
  * The fully-qualified name of the service account to be used for the build step of deploying this function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#build_service_account GoogleCloudfunctionsFunction#build_service_account}
  */
  readonly buildServiceAccount?: string;
  /**
  * Name of the Cloud Build Custom Worker Pool that should be used to build the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#build_worker_pool GoogleCloudfunctionsFunction#build_worker_pool}
  */
  readonly buildWorkerPool?: string;
  /**
  * Description of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#description GoogleCloudfunctionsFunction#description}
  */
  readonly description?: string;
  /**
  * Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#docker_registry GoogleCloudfunctionsFunction#docker_registry}
  */
  readonly dockerRegistry?: string;
  /**
  * User managed repository created in Artifact Registry optionally with a customer managed encryption key. If specified, deployments will use Artifact Registry for storing images built with Cloud Build.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#docker_repository GoogleCloudfunctionsFunction#docker_repository}
  */
  readonly dockerRepository?: string;
  /**
  * Name of the function that will be executed when the Google Cloud Function is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#entry_point GoogleCloudfunctionsFunction#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * A set of key/value environment variable pairs to assign to the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#environment_variables GoogleCloudfunctionsFunction#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#https_trigger_security_level GoogleCloudfunctionsFunction#https_trigger_security_level}
  */
  readonly httpsTriggerSecurityLevel?: string;
  /**
  * URL which triggers function execution. Returned only if trigger_http is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#https_trigger_url GoogleCloudfunctionsFunction#https_trigger_url}
  */
  readonly httpsTriggerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * String value that controls what traffic can reach the function. Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#ingress_settings GoogleCloudfunctionsFunction#ingress_settings}
  */
  readonly ingressSettings?: string;
  /**
  * Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#kms_key_name GoogleCloudfunctionsFunction#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#labels GoogleCloudfunctionsFunction#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The limit on the maximum number of function instances that may coexist at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#max_instances GoogleCloudfunctionsFunction#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * The limit on the minimum number of function instances that may coexist at a given time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#min_instances GoogleCloudfunctionsFunction#min_instances}
  */
  readonly minInstances?: number;
  /**
  * A user-defined name of the function. Function names must be unique globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#name GoogleCloudfunctionsFunction#name}
  */
  readonly name: string;
  /**
  * Project of the function. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#project GoogleCloudfunctionsFunction#project}
  */
  readonly project?: string;
  /**
  * Region of function. If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#region GoogleCloudfunctionsFunction#region}
  */
  readonly region?: string;
  /**
  * The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#runtime GoogleCloudfunctionsFunction#runtime}
  */
  readonly runtime: string;
  /**
  *  If provided, the self-provided service account to run the function with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#service_account_email GoogleCloudfunctionsFunction#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The GCS bucket containing the zip archive which contains the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#source_archive_bucket GoogleCloudfunctionsFunction#source_archive_bucket}
  */
  readonly sourceArchiveBucket?: string;
  /**
  * The source archive object (file) in archive bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#source_archive_object GoogleCloudfunctionsFunction#source_archive_object}
  */
  readonly sourceArchiveObject?: string;
  /**
  * Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#timeout GoogleCloudfunctionsFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#trigger_http GoogleCloudfunctionsFunction#trigger_http}
  */
  readonly triggerHttp?: boolean | cdktf.IResolvable;
  /**
  * The VPC Network Connector that this cloud function can connect to. It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#vpc_connector GoogleCloudfunctionsFunction#vpc_connector}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly vpcConnector?: string;
  /**
  * The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#vpc_connector_egress_settings GoogleCloudfunctionsFunction#vpc_connector_egress_settings}
  */
  readonly vpcConnectorEgressSettings?: string;
  /**
  * event_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#event_trigger GoogleCloudfunctionsFunction#event_trigger}
  */
  readonly eventTrigger?: GoogleCloudfunctionsFunctionEventTrigger;
  /**
  * secret_environment_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#secret_environment_variables GoogleCloudfunctionsFunction#secret_environment_variables}
  */
  readonly secretEnvironmentVariables?: GoogleCloudfunctionsFunctionSecretEnvironmentVariables[] | cdktf.IResolvable;
  /**
  * secret_volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#secret_volumes GoogleCloudfunctionsFunction#secret_volumes}
  */
  readonly secretVolumes?: GoogleCloudfunctionsFunctionSecretVolumes[] | cdktf.IResolvable;
  /**
  * source_repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#source_repository GoogleCloudfunctionsFunction#source_repository}
  */
  readonly sourceRepository?: GoogleCloudfunctionsFunctionSourceRepository;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#timeouts GoogleCloudfunctionsFunction#timeouts}
  */
  readonly timeouts?: GoogleCloudfunctionsFunctionTimeouts;
}
export interface GoogleCloudfunctionsFunctionEventTriggerFailurePolicy {
  /**
  * Whether the function should be retried on failure. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#retry GoogleCloudfunctionsFunction#retry}
  */
  readonly retry: boolean | cdktf.IResolvable;
}

export function googleCloudfunctionsFunctionEventTriggerFailurePolicyToTerraform(struct?: GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference | GoogleCloudfunctionsFunctionEventTriggerFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry: cdktf.booleanToTerraform(struct!.retry),
  }
}


export function googleCloudfunctionsFunctionEventTriggerFailurePolicyToHclTerraform(struct?: GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference | GoogleCloudfunctionsFunctionEventTriggerFailurePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retry: {
      value: cdktf.booleanToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctionsFunctionEventTriggerFailurePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retry = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retry = value.retry;
    }
  }

  // retry - computed: false, optional: false, required: true
  private _retry?: boolean | cdktf.IResolvable; 
  public get retry() {
    return this.getBooleanAttribute('retry');
  }
  public set retry(value: boolean | cdktf.IResolvable) {
    this._retry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }
}
export interface GoogleCloudfunctionsFunctionEventTrigger {
  /**
  * The type of event to observe. For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#event_type GoogleCloudfunctionsFunction#event_type}
  */
  readonly eventType: string;
  /**
  * The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#resource GoogleCloudfunctionsFunction#resource}
  */
  readonly resource: string;
  /**
  * failure_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#failure_policy GoogleCloudfunctionsFunction#failure_policy}
  */
  readonly failurePolicy?: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy;
}

export function googleCloudfunctionsFunctionEventTriggerToTerraform(struct?: GoogleCloudfunctionsFunctionEventTriggerOutputReference | GoogleCloudfunctionsFunctionEventTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    resource: cdktf.stringToTerraform(struct!.resource),
    failure_policy: googleCloudfunctionsFunctionEventTriggerFailurePolicyToTerraform(struct!.failurePolicy),
  }
}


export function googleCloudfunctionsFunctionEventTriggerToHclTerraform(struct?: GoogleCloudfunctionsFunctionEventTriggerOutputReference | GoogleCloudfunctionsFunctionEventTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_policy: {
      value: googleCloudfunctionsFunctionEventTriggerFailurePolicyToHclTerraform(struct!.failurePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudfunctionsFunctionEventTriggerFailurePolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudfunctionsFunctionEventTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctionsFunctionEventTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._failurePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failurePolicy = this._failurePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctionsFunctionEventTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
      this._resource = undefined;
      this._failurePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
      this._resource = value.resource;
      this._failurePolicy.internalValue = value.failurePolicy;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy = new GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(this, "failure_policy");
  public get failurePolicy() {
    return this._failurePolicy;
  }
  public putFailurePolicy(value: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy) {
    this._failurePolicy.internalValue = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy.internalValue;
  }
}
export interface GoogleCloudfunctionsFunctionSecretEnvironmentVariables {
  /**
  * Name of the environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#key GoogleCloudfunctionsFunction#key}
  */
  readonly key: string;
  /**
  * Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}
  */
  readonly projectId?: string;
  /**
  * ID of the secret in secret manager (not the full resource name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}
  */
  readonly secret: string;
  /**
  * Version of the secret (version number or the string "latest"). It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}
  */
  readonly version: string;
}

export function googleCloudfunctionsFunctionSecretEnvironmentVariablesToTerraform(struct?: GoogleCloudfunctionsFunctionSecretEnvironmentVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret: cdktf.stringToTerraform(struct!.secret),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleCloudfunctionsFunctionSecretEnvironmentVariablesToHclTerraform(struct?: GoogleCloudfunctionsFunctionSecretEnvironmentVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudfunctionsFunctionSecretEnvironmentVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
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

  public set internalValue(value: GoogleCloudfunctionsFunctionSecretEnvironmentVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._projectId = undefined;
      this._secret = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._projectId = value.projectId;
      this._secret = value.secret;
      this._version = value.version;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudfunctionsFunctionSecretEnvironmentVariables[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference {
    return new GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudfunctionsFunctionSecretVolumesVersions {
  /**
  * Relative path of the file under the mount path where the secret value for this version will be fetched and made available. For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#path GoogleCloudfunctionsFunction#path}
  */
  readonly path: string;
  /**
  * Version of the secret (version number or the string "latest"). It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}
  */
  readonly version: string;
}

export function googleCloudfunctionsFunctionSecretVolumesVersionsToTerraform(struct?: GoogleCloudfunctionsFunctionSecretVolumesVersions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleCloudfunctionsFunctionSecretVolumesVersionsToHclTerraform(struct?: GoogleCloudfunctionsFunctionSecretVolumesVersions | cdktf.IResolvable): any {
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

export class GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudfunctionsFunctionSecretVolumesVersions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: GoogleCloudfunctionsFunctionSecretVolumesVersions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._path = value.path;
      this._version = value.version;
    }
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

export class GoogleCloudfunctionsFunctionSecretVolumesVersionsList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudfunctionsFunctionSecretVolumesVersions[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference {
    return new GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudfunctionsFunctionSecretVolumes {
  /**
  * The path within the container to mount the secret volume. For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#mount_path GoogleCloudfunctionsFunction#mount_path}
  */
  readonly mountPath: string;
  /**
  * Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}
  */
  readonly projectId?: string;
  /**
  * ID of the secret in secret manager (not the full resource name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}
  */
  readonly secret: string;
  /**
  * versions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#versions GoogleCloudfunctionsFunction#versions}
  */
  readonly versions?: GoogleCloudfunctionsFunctionSecretVolumesVersions[] | cdktf.IResolvable;
}

export function googleCloudfunctionsFunctionSecretVolumesToTerraform(struct?: GoogleCloudfunctionsFunctionSecretVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    secret: cdktf.stringToTerraform(struct!.secret),
    versions: cdktf.listMapper(googleCloudfunctionsFunctionSecretVolumesVersionsToTerraform, true)(struct!.versions),
  }
}


export function googleCloudfunctionsFunctionSecretVolumesToHclTerraform(struct?: GoogleCloudfunctionsFunctionSecretVolumes | cdktf.IResolvable): any {
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    versions: {
      value: cdktf.listMapperHcl(googleCloudfunctionsFunctionSecretVolumesVersionsToHclTerraform, true)(struct!.versions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleCloudfunctionsFunctionSecretVolumesVersionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudfunctionsFunctionSecretVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleCloudfunctionsFunctionSecretVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._versions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.versions = this._versions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctionsFunctionSecretVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._projectId = undefined;
      this._secret = undefined;
      this._versions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._projectId = value.projectId;
      this._secret = value.secret;
      this._versions.internalValue = value.versions;
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

  // versions - computed: false, optional: true, required: false
  private _versions = new GoogleCloudfunctionsFunctionSecretVolumesVersionsList(this, "versions", false);
  public get versions() {
    return this._versions;
  }
  public putVersions(value: GoogleCloudfunctionsFunctionSecretVolumesVersions[] | cdktf.IResolvable) {
    this._versions.internalValue = value;
  }
  public resetVersions() {
    this._versions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionsInput() {
    return this._versions.internalValue;
  }
}

export class GoogleCloudfunctionsFunctionSecretVolumesList extends cdktf.ComplexList {
  public internalValue? : GoogleCloudfunctionsFunctionSecretVolumes[] | cdktf.IResolvable

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
  public get(index: number): GoogleCloudfunctionsFunctionSecretVolumesOutputReference {
    return new GoogleCloudfunctionsFunctionSecretVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleCloudfunctionsFunctionSourceRepository {
  /**
  * The URL pointing to the hosted repository where the function is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#url GoogleCloudfunctionsFunction#url}
  */
  readonly url: string;
}

export function googleCloudfunctionsFunctionSourceRepositoryToTerraform(struct?: GoogleCloudfunctionsFunctionSourceRepositoryOutputReference | GoogleCloudfunctionsFunctionSourceRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function googleCloudfunctionsFunctionSourceRepositoryToHclTerraform(struct?: GoogleCloudfunctionsFunctionSourceRepositoryOutputReference | GoogleCloudfunctionsFunctionSourceRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleCloudfunctionsFunctionSourceRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleCloudfunctionsFunctionSourceRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctionsFunctionSourceRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
  }

  // deployed_url - computed: true, optional: false, required: false
  public get deployedUrl() {
    return this.getStringAttribute('deployed_url');
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface GoogleCloudfunctionsFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}
  */
  readonly update?: string;
}

export function googleCloudfunctionsFunctionTimeoutsToTerraform(struct?: GoogleCloudfunctionsFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleCloudfunctionsFunctionTimeoutsToHclTerraform(struct?: GoogleCloudfunctionsFunctionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class GoogleCloudfunctionsFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleCloudfunctionsFunctionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleCloudfunctionsFunctionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function google_cloudfunctions_function}
*/
export class GoogleCloudfunctionsFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudfunctions_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleCloudfunctionsFunction to import
  * @param importFromId The id of the existing GoogleCloudfunctionsFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleCloudfunctionsFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloudfunctions_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_cloudfunctions_function google_cloudfunctions_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleCloudfunctionsFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleCloudfunctionsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions_function',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.12.0',
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
    this._availableMemoryMb = config.availableMemoryMb;
    this._buildEnvironmentVariables = config.buildEnvironmentVariables;
    this._buildServiceAccount = config.buildServiceAccount;
    this._buildWorkerPool = config.buildWorkerPool;
    this._description = config.description;
    this._dockerRegistry = config.dockerRegistry;
    this._dockerRepository = config.dockerRepository;
    this._entryPoint = config.entryPoint;
    this._environmentVariables = config.environmentVariables;
    this._httpsTriggerSecurityLevel = config.httpsTriggerSecurityLevel;
    this._httpsTriggerUrl = config.httpsTriggerUrl;
    this._id = config.id;
    this._ingressSettings = config.ingressSettings;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._maxInstances = config.maxInstances;
    this._minInstances = config.minInstances;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._runtime = config.runtime;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._sourceArchiveBucket = config.sourceArchiveBucket;
    this._sourceArchiveObject = config.sourceArchiveObject;
    this._timeout = config.timeout;
    this._triggerHttp = config.triggerHttp;
    this._vpcConnector = config.vpcConnector;
    this._vpcConnectorEgressSettings = config.vpcConnectorEgressSettings;
    this._eventTrigger.internalValue = config.eventTrigger;
    this._secretEnvironmentVariables.internalValue = config.secretEnvironmentVariables;
    this._secretVolumes.internalValue = config.secretVolumes;
    this._sourceRepository.internalValue = config.sourceRepository;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_memory_mb - computed: false, optional: true, required: false
  private _availableMemoryMb?: number; 
  public get availableMemoryMb() {
    return this.getNumberAttribute('available_memory_mb');
  }
  public set availableMemoryMb(value: number) {
    this._availableMemoryMb = value;
  }
  public resetAvailableMemoryMb() {
    this._availableMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryMbInput() {
    return this._availableMemoryMb;
  }

  // build_environment_variables - computed: false, optional: true, required: false
  private _buildEnvironmentVariables?: { [key: string]: string }; 
  public get buildEnvironmentVariables() {
    return this.getStringMapAttribute('build_environment_variables');
  }
  public set buildEnvironmentVariables(value: { [key: string]: string }) {
    this._buildEnvironmentVariables = value;
  }
  public resetBuildEnvironmentVariables() {
    this._buildEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildEnvironmentVariablesInput() {
    return this._buildEnvironmentVariables;
  }

  // build_service_account - computed: true, optional: true, required: false
  private _buildServiceAccount?: string; 
  public get buildServiceAccount() {
    return this.getStringAttribute('build_service_account');
  }
  public set buildServiceAccount(value: string) {
    this._buildServiceAccount = value;
  }
  public resetBuildServiceAccount() {
    this._buildServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildServiceAccountInput() {
    return this._buildServiceAccount;
  }

  // build_worker_pool - computed: false, optional: true, required: false
  private _buildWorkerPool?: string; 
  public get buildWorkerPool() {
    return this.getStringAttribute('build_worker_pool');
  }
  public set buildWorkerPool(value: string) {
    this._buildWorkerPool = value;
  }
  public resetBuildWorkerPool() {
    this._buildWorkerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildWorkerPoolInput() {
    return this._buildWorkerPool;
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

  // docker_registry - computed: true, optional: true, required: false
  private _dockerRegistry?: string; 
  public get dockerRegistry() {
    return this.getStringAttribute('docker_registry');
  }
  public set dockerRegistry(value: string) {
    this._dockerRegistry = value;
  }
  public resetDockerRegistry() {
    this._dockerRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerRegistryInput() {
    return this._dockerRegistry;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // https_trigger_security_level - computed: true, optional: true, required: false
  private _httpsTriggerSecurityLevel?: string; 
  public get httpsTriggerSecurityLevel() {
    return this.getStringAttribute('https_trigger_security_level');
  }
  public set httpsTriggerSecurityLevel(value: string) {
    this._httpsTriggerSecurityLevel = value;
  }
  public resetHttpsTriggerSecurityLevel() {
    this._httpsTriggerSecurityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTriggerSecurityLevelInput() {
    return this._httpsTriggerSecurityLevel;
  }

  // https_trigger_url - computed: true, optional: true, required: false
  private _httpsTriggerUrl?: string; 
  public get httpsTriggerUrl() {
    return this.getStringAttribute('https_trigger_url');
  }
  public set httpsTriggerUrl(value: string) {
    this._httpsTriggerUrl = value;
  }
  public resetHttpsTriggerUrl() {
    this._httpsTriggerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTriggerUrlInput() {
    return this._httpsTriggerUrl;
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

  // max_instances - computed: true, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
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

  // source_archive_bucket - computed: false, optional: true, required: false
  private _sourceArchiveBucket?: string; 
  public get sourceArchiveBucket() {
    return this.getStringAttribute('source_archive_bucket');
  }
  public set sourceArchiveBucket(value: string) {
    this._sourceArchiveBucket = value;
  }
  public resetSourceArchiveBucket() {
    this._sourceArchiveBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveBucketInput() {
    return this._sourceArchiveBucket;
  }

  // source_archive_object - computed: false, optional: true, required: false
  private _sourceArchiveObject?: string; 
  public get sourceArchiveObject() {
    return this.getStringAttribute('source_archive_object');
  }
  public set sourceArchiveObject(value: string) {
    this._sourceArchiveObject = value;
  }
  public resetSourceArchiveObject() {
    this._sourceArchiveObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveObjectInput() {
    return this._sourceArchiveObject;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // trigger_http - computed: false, optional: true, required: false
  private _triggerHttp?: boolean | cdktf.IResolvable; 
  public get triggerHttp() {
    return this.getBooleanAttribute('trigger_http');
  }
  public set triggerHttp(value: boolean | cdktf.IResolvable) {
    this._triggerHttp = value;
  }
  public resetTriggerHttp() {
    this._triggerHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerHttpInput() {
    return this._triggerHttp;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
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

  // vpc_connector_egress_settings - computed: true, optional: true, required: false
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

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger = new GoogleCloudfunctionsFunctionEventTriggerOutputReference(this, "event_trigger");
  public get eventTrigger() {
    return this._eventTrigger;
  }
  public putEventTrigger(value: GoogleCloudfunctionsFunctionEventTrigger) {
    this._eventTrigger.internalValue = value;
  }
  public resetEventTrigger() {
    this._eventTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger.internalValue;
  }

  // secret_environment_variables - computed: false, optional: true, required: false
  private _secretEnvironmentVariables = new GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(this, "secret_environment_variables", false);
  public get secretEnvironmentVariables() {
    return this._secretEnvironmentVariables;
  }
  public putSecretEnvironmentVariables(value: GoogleCloudfunctionsFunctionSecretEnvironmentVariables[] | cdktf.IResolvable) {
    this._secretEnvironmentVariables.internalValue = value;
  }
  public resetSecretEnvironmentVariables() {
    this._secretEnvironmentVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretEnvironmentVariablesInput() {
    return this._secretEnvironmentVariables.internalValue;
  }

  // secret_volumes - computed: false, optional: true, required: false
  private _secretVolumes = new GoogleCloudfunctionsFunctionSecretVolumesList(this, "secret_volumes", false);
  public get secretVolumes() {
    return this._secretVolumes;
  }
  public putSecretVolumes(value: GoogleCloudfunctionsFunctionSecretVolumes[] | cdktf.IResolvable) {
    this._secretVolumes.internalValue = value;
  }
  public resetSecretVolumes() {
    this._secretVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVolumesInput() {
    return this._secretVolumes.internalValue;
  }

  // source_repository - computed: false, optional: true, required: false
  private _sourceRepository = new GoogleCloudfunctionsFunctionSourceRepositoryOutputReference(this, "source_repository");
  public get sourceRepository() {
    return this._sourceRepository;
  }
  public putSourceRepository(value: GoogleCloudfunctionsFunctionSourceRepository) {
    this._sourceRepository.internalValue = value;
  }
  public resetSourceRepository() {
    this._sourceRepository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepositoryInput() {
    return this._sourceRepository.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleCloudfunctionsFunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleCloudfunctionsFunctionTimeouts) {
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
      available_memory_mb: cdktf.numberToTerraform(this._availableMemoryMb),
      build_environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._buildEnvironmentVariables),
      build_service_account: cdktf.stringToTerraform(this._buildServiceAccount),
      build_worker_pool: cdktf.stringToTerraform(this._buildWorkerPool),
      description: cdktf.stringToTerraform(this._description),
      docker_registry: cdktf.stringToTerraform(this._dockerRegistry),
      docker_repository: cdktf.stringToTerraform(this._dockerRepository),
      entry_point: cdktf.stringToTerraform(this._entryPoint),
      environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(this._environmentVariables),
      https_trigger_security_level: cdktf.stringToTerraform(this._httpsTriggerSecurityLevel),
      https_trigger_url: cdktf.stringToTerraform(this._httpsTriggerUrl),
      id: cdktf.stringToTerraform(this._id),
      ingress_settings: cdktf.stringToTerraform(this._ingressSettings),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      min_instances: cdktf.numberToTerraform(this._minInstances),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      runtime: cdktf.stringToTerraform(this._runtime),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      source_archive_bucket: cdktf.stringToTerraform(this._sourceArchiveBucket),
      source_archive_object: cdktf.stringToTerraform(this._sourceArchiveObject),
      timeout: cdktf.numberToTerraform(this._timeout),
      trigger_http: cdktf.booleanToTerraform(this._triggerHttp),
      vpc_connector: cdktf.stringToTerraform(this._vpcConnector),
      vpc_connector_egress_settings: cdktf.stringToTerraform(this._vpcConnectorEgressSettings),
      event_trigger: googleCloudfunctionsFunctionEventTriggerToTerraform(this._eventTrigger.internalValue),
      secret_environment_variables: cdktf.listMapper(googleCloudfunctionsFunctionSecretEnvironmentVariablesToTerraform, true)(this._secretEnvironmentVariables.internalValue),
      secret_volumes: cdktf.listMapper(googleCloudfunctionsFunctionSecretVolumesToTerraform, true)(this._secretVolumes.internalValue),
      source_repository: googleCloudfunctionsFunctionSourceRepositoryToTerraform(this._sourceRepository.internalValue),
      timeouts: googleCloudfunctionsFunctionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      available_memory_mb: {
        value: cdktf.numberToHclTerraform(this._availableMemoryMb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      build_environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._buildEnvironmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      build_service_account: {
        value: cdktf.stringToHclTerraform(this._buildServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build_worker_pool: {
        value: cdktf.stringToHclTerraform(this._buildWorkerPool),
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
      docker_registry: {
        value: cdktf.stringToHclTerraform(this._dockerRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_repository: {
        value: cdktf.stringToHclTerraform(this._dockerRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_point: {
        value: cdktf.stringToHclTerraform(this._entryPoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_variables: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._environmentVariables),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      https_trigger_security_level: {
        value: cdktf.stringToHclTerraform(this._httpsTriggerSecurityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_trigger_url: {
        value: cdktf.stringToHclTerraform(this._httpsTriggerUrl),
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
      ingress_settings: {
        value: cdktf.stringToHclTerraform(this._ingressSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      max_instances: {
        value: cdktf.numberToHclTerraform(this._maxInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instances: {
        value: cdktf.numberToHclTerraform(this._minInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_archive_bucket: {
        value: cdktf.stringToHclTerraform(this._sourceArchiveBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_archive_object: {
        value: cdktf.stringToHclTerraform(this._sourceArchiveObject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_http: {
        value: cdktf.booleanToHclTerraform(this._triggerHttp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpc_connector: {
        value: cdktf.stringToHclTerraform(this._vpcConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_connector_egress_settings: {
        value: cdktf.stringToHclTerraform(this._vpcConnectorEgressSettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_trigger: {
        value: googleCloudfunctionsFunctionEventTriggerToHclTerraform(this._eventTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudfunctionsFunctionEventTriggerList",
      },
      secret_environment_variables: {
        value: cdktf.listMapperHcl(googleCloudfunctionsFunctionSecretEnvironmentVariablesToHclTerraform, true)(this._secretEnvironmentVariables.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList",
      },
      secret_volumes: {
        value: cdktf.listMapperHcl(googleCloudfunctionsFunctionSecretVolumesToHclTerraform, true)(this._secretVolumes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudfunctionsFunctionSecretVolumesList",
      },
      source_repository: {
        value: googleCloudfunctionsFunctionSourceRepositoryToHclTerraform(this._sourceRepository.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleCloudfunctionsFunctionSourceRepositoryList",
      },
      timeouts: {
        value: googleCloudfunctionsFunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleCloudfunctionsFunctionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
