/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataprocSessionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#id GoogleDataprocSessionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels to associate with this session template.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#labels GoogleDataprocSessionTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location in which the session template will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#location GoogleDataprocSessionTemplate#location}
  */
  readonly location?: string;
  /**
  * The resource name of the session template in the following format:
  * projects/{project}/locations/{location}/sessionTemplates/{template_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#name GoogleDataprocSessionTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#project GoogleDataprocSessionTemplate#project}
  */
  readonly project?: string;
  /**
  * environment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#environment_config GoogleDataprocSessionTemplate#environment_config}
  */
  readonly environmentConfig?: GoogleDataprocSessionTemplateEnvironmentConfig;
  /**
  * jupyter_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#jupyter_session GoogleDataprocSessionTemplate#jupyter_session}
  */
  readonly jupyterSession?: GoogleDataprocSessionTemplateJupyterSession;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#runtime_config GoogleDataprocSessionTemplate#runtime_config}
  */
  readonly runtimeConfig?: GoogleDataprocSessionTemplateRuntimeConfig;
  /**
  * spark_connect_session block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#spark_connect_session GoogleDataprocSessionTemplate#spark_connect_session}
  */
  readonly sparkConnectSession?: GoogleDataprocSessionTemplateSparkConnectSession;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#timeouts GoogleDataprocSessionTemplate#timeouts}
  */
  readonly timeouts?: GoogleDataprocSessionTemplateTimeouts;
}
export interface GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig {
  /**
  * Authentication type for the user workload running in containers. Possible values: ["SERVICE_ACCOUNT", "END_USER_CREDENTIALS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#user_workload_authentication_type GoogleDataprocSessionTemplate#user_workload_authentication_type}
  */
  readonly userWorkloadAuthenticationType?: string;
}

export function googleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigToTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_workload_authentication_type: cdktf.stringToTerraform(struct!.userWorkloadAuthenticationType),
  }
}


export function googleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigToHclTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_workload_authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.userWorkloadAuthenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userWorkloadAuthenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.userWorkloadAuthenticationType = this._userWorkloadAuthenticationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userWorkloadAuthenticationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userWorkloadAuthenticationType = value.userWorkloadAuthenticationType;
    }
  }

  // user_workload_authentication_type - computed: false, optional: true, required: false
  private _userWorkloadAuthenticationType?: string; 
  public get userWorkloadAuthenticationType() {
    return this.getStringAttribute('user_workload_authentication_type');
  }
  public set userWorkloadAuthenticationType(value: string) {
    this._userWorkloadAuthenticationType = value;
  }
  public resetUserWorkloadAuthenticationType() {
    this._userWorkloadAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userWorkloadAuthenticationTypeInput() {
    return this._userWorkloadAuthenticationType;
  }
}
export interface GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig {
  /**
  * The duration to keep the session alive while it's idling.
  * Exceeding this threshold causes the session to terminate. Minimum value is 10 minutes; maximum value is 14 day.
  * Defaults to 1 hour if not set. If both ttl and idleTtl are specified for an interactive session, the conditions
  * are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or when ttl has
  * been exceeded, whichever occurs first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#idle_ttl GoogleDataprocSessionTemplate#idle_ttl}
  */
  readonly idleTtl?: string;
  /**
  * The Cloud KMS key to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#kms_key GoogleDataprocSessionTemplate#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Tags used for network traffic control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#network_tags GoogleDataprocSessionTemplate#network_tags}
  */
  readonly networkTags?: string[];
  /**
  * Service account that used to execute workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#service_account GoogleDataprocSessionTemplate#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * A Cloud Storage bucket used to stage workload dependencies, config files, and store
  * workload output and other ephemeral data, such as Spark history files. If you do not specify a staging bucket,
  * Cloud Dataproc will determine a Cloud Storage location according to the region where your workload is running,
  * and then create and manage project-level, per-location staging and temporary buckets.
  * This field requires a Cloud Storage bucket name, not a gs://... URI to a Cloud Storage bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#staging_bucket GoogleDataprocSessionTemplate#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * Subnetwork configuration for workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#subnetwork_uri GoogleDataprocSessionTemplate#subnetwork_uri}
  */
  readonly subnetworkUri?: string;
  /**
  * The duration after which the workload will be terminated.
  * When the workload exceeds this duration, it will be unconditionally terminated without waiting for ongoing
  * work to finish. If ttl is not specified for a session workload, the workload will be allowed to run until it
  * exits naturally (or run forever without exiting). If ttl is not specified for an interactive session,
  * it defaults to 24 hours. If ttl is not specified for a batch that uses 2.1+ runtime version, it defaults to 4 hours.
  * Minimum value is 10 minutes; maximum value is 14 days. If both ttl and idleTtl are specified (for an interactive session),
  * the conditions are treated as OR conditions: the workload will be terminated when it has been idle for idleTtl or
  * when ttl has been exceeded, whichever occurs first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#ttl GoogleDataprocSessionTemplate#ttl}
  */
  readonly ttl?: string;
  /**
  * authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#authentication_config GoogleDataprocSessionTemplate#authentication_config}
  */
  readonly authenticationConfig?: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig;
}

export function googleDataprocSessionTemplateEnvironmentConfigExecutionConfigToTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_ttl: cdktf.stringToTerraform(struct!.idleTtl),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    network_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    subnetwork_uri: cdktf.stringToTerraform(struct!.subnetworkUri),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    authentication_config: googleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigToTerraform(struct!.authenticationConfig),
  }
}


export function googleDataprocSessionTemplateEnvironmentConfigExecutionConfigToHclTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_ttl: {
      value: cdktf.stringToHclTerraform(struct!.idleTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
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
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    staging_bucket: {
      value: cdktf.stringToHclTerraform(struct!.stagingBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork_uri: {
      value: cdktf.stringToHclTerraform(struct!.subnetworkUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_config: {
      value: googleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigToHclTerraform(struct!.authenticationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTtl = this._idleTtl;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._networkTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._stagingBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingBucket = this._stagingBucket;
    }
    if (this._subnetworkUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetworkUri = this._subnetworkUri;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._authenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfig = this._authenticationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTtl = undefined;
      this._kmsKey = undefined;
      this._networkTags = undefined;
      this._serviceAccount = undefined;
      this._stagingBucket = undefined;
      this._subnetworkUri = undefined;
      this._ttl = undefined;
      this._authenticationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTtl = value.idleTtl;
      this._kmsKey = value.kmsKey;
      this._networkTags = value.networkTags;
      this._serviceAccount = value.serviceAccount;
      this._stagingBucket = value.stagingBucket;
      this._subnetworkUri = value.subnetworkUri;
      this._ttl = value.ttl;
      this._authenticationConfig.internalValue = value.authenticationConfig;
    }
  }

  // idle_ttl - computed: false, optional: true, required: false
  private _idleTtl?: string; 
  public get idleTtl() {
    return this.getStringAttribute('idle_ttl');
  }
  public set idleTtl(value: string) {
    this._idleTtl = value;
  }
  public resetIdleTtl() {
    this._idleTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTtlInput() {
    return this._idleTtl;
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

  // staging_bucket - computed: false, optional: true, required: false
  private _stagingBucket?: string; 
  public get stagingBucket() {
    return this.getStringAttribute('staging_bucket');
  }
  public set stagingBucket(value: string) {
    this._stagingBucket = value;
  }
  public resetStagingBucket() {
    this._stagingBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingBucketInput() {
    return this._stagingBucket;
  }

  // subnetwork_uri - computed: false, optional: true, required: false
  private _subnetworkUri?: string; 
  public get subnetworkUri() {
    return this.getStringAttribute('subnetwork_uri');
  }
  public set subnetworkUri(value: string) {
    this._subnetworkUri = value;
  }
  public resetSubnetworkUri() {
    this._subnetworkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkUriInput() {
    return this._subnetworkUri;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // authentication_config - computed: false, optional: true, required: false
  private _authenticationConfig = new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfigOutputReference(this, "authentication_config");
  public get authenticationConfig() {
    return this._authenticationConfig;
  }
  public putAuthenticationConfig(value: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigAuthenticationConfig) {
    this._authenticationConfig.internalValue = value;
  }
  public resetAuthenticationConfig() {
    this._authenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigInput() {
    return this._authenticationConfig.internalValue;
  }
}
export interface GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#dataproc_cluster GoogleDataprocSessionTemplate#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_cluster: cdktf.stringToTerraform(struct!.dataprocCluster),
  }
}


export function googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToHclTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataproc_cluster: {
      value: cdktf.stringToHclTerraform(struct!.dataprocCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocCluster = value.dataprocCluster;
    }
  }

  // dataproc_cluster - computed: false, optional: true, required: false
  private _dataprocCluster?: string; 
  public get dataprocCluster() {
    return this.getStringAttribute('dataproc_cluster');
  }
  public set dataprocCluster(value: string) {
    this._dataprocCluster = value;
  }
  public resetDataprocCluster() {
    this._dataprocCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterInput() {
    return this._dataprocCluster;
  }
}
export interface GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig {
  /**
  * Resource name of an existing Dataproc Metastore service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#metastore_service GoogleDataprocSessionTemplate#metastore_service}
  */
  readonly metastoreService?: string;
  /**
  * spark_history_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#spark_history_server_config GoogleDataprocSessionTemplate#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig;
}

export function googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigToTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service: cdktf.stringToTerraform(struct!.metastoreService),
    spark_history_server_config: googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}


export function googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigToHclTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metastore_service: {
      value: cdktf.stringToHclTerraform(struct!.metastoreService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spark_history_server_config: {
      value: googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigToHclTerraform(struct!.sparkHistoryServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreService = this._metastoreService;
    }
    if (this._sparkHistoryServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkHistoryServerConfig = this._sparkHistoryServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreService = undefined;
      this._sparkHistoryServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreService = value.metastoreService;
      this._sparkHistoryServerConfig.internalValue = value.sparkHistoryServerConfig;
    }
  }

  // metastore_service - computed: false, optional: true, required: false
  private _metastoreService?: string; 
  public get metastoreService() {
    return this.getStringAttribute('metastore_service');
  }
  public set metastoreService(value: string) {
    this._metastoreService = value;
  }
  public resetMetastoreService() {
    this._metastoreService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreServiceInput() {
    return this._metastoreService;
  }

  // spark_history_server_config - computed: false, optional: true, required: false
  private _sparkHistoryServerConfig = new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigSparkHistoryServerConfig) {
    this._sparkHistoryServerConfig.internalValue = value;
  }
  public resetSparkHistoryServerConfig() {
    this._sparkHistoryServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkHistoryServerConfigInput() {
    return this._sparkHistoryServerConfig.internalValue;
  }
}
export interface GoogleDataprocSessionTemplateEnvironmentConfig {
  /**
  * execution_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#execution_config GoogleDataprocSessionTemplate#execution_config}
  */
  readonly executionConfig?: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig;
  /**
  * peripherals_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#peripherals_config GoogleDataprocSessionTemplate#peripherals_config}
  */
  readonly peripheralsConfig?: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig;
}

export function googleDataprocSessionTemplateEnvironmentConfigToTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execution_config: googleDataprocSessionTemplateEnvironmentConfigExecutionConfigToTerraform(struct!.executionConfig),
    peripherals_config: googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigToTerraform(struct!.peripheralsConfig),
  }
}


export function googleDataprocSessionTemplateEnvironmentConfigToHclTerraform(struct?: GoogleDataprocSessionTemplateEnvironmentConfigOutputReference | GoogleDataprocSessionTemplateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    execution_config: {
      value: googleDataprocSessionTemplateEnvironmentConfigExecutionConfigToHclTerraform(struct!.executionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigList",
    },
    peripherals_config: {
      value: googleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigToHclTerraform(struct!.peripheralsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocSessionTemplateEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionConfig = this._executionConfig?.internalValue;
    }
    if (this._peripheralsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peripheralsConfig = this._peripheralsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executionConfig.internalValue = undefined;
      this._peripheralsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executionConfig.internalValue = value.executionConfig;
      this._peripheralsConfig.internalValue = value.peripheralsConfig;
    }
  }

  // execution_config - computed: false, optional: true, required: false
  private _executionConfig = new GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfigOutputReference(this, "execution_config");
  public get executionConfig() {
    return this._executionConfig;
  }
  public putExecutionConfig(value: GoogleDataprocSessionTemplateEnvironmentConfigExecutionConfig) {
    this._executionConfig.internalValue = value;
  }
  public resetExecutionConfig() {
    this._executionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionConfigInput() {
    return this._executionConfig.internalValue;
  }

  // peripherals_config - computed: false, optional: true, required: false
  private _peripheralsConfig = new GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfigOutputReference(this, "peripherals_config");
  public get peripheralsConfig() {
    return this._peripheralsConfig;
  }
  public putPeripheralsConfig(value: GoogleDataprocSessionTemplateEnvironmentConfigPeripheralsConfig) {
    this._peripheralsConfig.internalValue = value;
  }
  public resetPeripheralsConfig() {
    this._peripheralsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peripheralsConfigInput() {
    return this._peripheralsConfig.internalValue;
  }
}
export interface GoogleDataprocSessionTemplateJupyterSession {
  /**
  * Display name, shown in the Jupyter kernelspec card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#display_name GoogleDataprocSessionTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Kernel to be used with Jupyter interactive session. Possible values: ["PYTHON", "SCALA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#kernel GoogleDataprocSessionTemplate#kernel}
  */
  readonly kernel?: string;
}

export function googleDataprocSessionTemplateJupyterSessionToTerraform(struct?: GoogleDataprocSessionTemplateJupyterSessionOutputReference | GoogleDataprocSessionTemplateJupyterSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    kernel: cdktf.stringToTerraform(struct!.kernel),
  }
}


export function googleDataprocSessionTemplateJupyterSessionToHclTerraform(struct?: GoogleDataprocSessionTemplateJupyterSessionOutputReference | GoogleDataprocSessionTemplateJupyterSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.stringToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataprocSessionTemplateJupyterSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateJupyterSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateJupyterSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayName = undefined;
      this._kernel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayName = value.displayName;
      this._kernel = value.kernel;
    }
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

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }
}
export interface GoogleDataprocSessionTemplateRuntimeConfig {
  /**
  * Optional custom container image for the job runtime environment. If not specified, a default container image will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#container_image GoogleDataprocSessionTemplate#container_image}
  */
  readonly containerImage?: string;
  /**
  * A mapping of property names to values, which are used to configure workload execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#properties GoogleDataprocSessionTemplate#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Version of the session runtime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#version GoogleDataprocSessionTemplate#version}
  */
  readonly version?: string;
}

export function googleDataprocSessionTemplateRuntimeConfigToTerraform(struct?: GoogleDataprocSessionTemplateRuntimeConfigOutputReference | GoogleDataprocSessionTemplateRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_image: cdktf.stringToTerraform(struct!.containerImage),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function googleDataprocSessionTemplateRuntimeConfigToHclTerraform(struct?: GoogleDataprocSessionTemplateRuntimeConfigOutputReference | GoogleDataprocSessionTemplateRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_image: {
      value: cdktf.stringToHclTerraform(struct!.containerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class GoogleDataprocSessionTemplateRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImage = this._containerImage;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerImage = undefined;
      this._properties = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerImage = value.containerImage;
      this._properties = value.properties;
      this._version = value.version;
    }
  }

  // container_image - computed: false, optional: true, required: false
  private _containerImage?: string; 
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }
  public set containerImage(value: string) {
    this._containerImage = value;
  }
  public resetContainerImage() {
    this._containerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageInput() {
    return this._containerImage;
  }

  // effective_properties - computed: true, optional: false, required: false
  private _effectiveProperties = new cdktf.StringMap(this, "effective_properties");
  public get effectiveProperties() {
    return this._effectiveProperties;
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
export interface GoogleDataprocSessionTemplateSparkConnectSession {
}

export function googleDataprocSessionTemplateSparkConnectSessionToTerraform(struct?: GoogleDataprocSessionTemplateSparkConnectSessionOutputReference | GoogleDataprocSessionTemplateSparkConnectSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleDataprocSessionTemplateSparkConnectSessionToHclTerraform(struct?: GoogleDataprocSessionTemplateSparkConnectSessionOutputReference | GoogleDataprocSessionTemplateSparkConnectSession): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleDataprocSessionTemplateSparkConnectSessionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataprocSessionTemplateSparkConnectSession | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataprocSessionTemplateSparkConnectSession | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleDataprocSessionTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#create GoogleDataprocSessionTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#delete GoogleDataprocSessionTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#update GoogleDataprocSessionTemplate#update}
  */
  readonly update?: string;
}

export function googleDataprocSessionTemplateTimeoutsToTerraform(struct?: GoogleDataprocSessionTemplateTimeouts | cdktf.IResolvable): any {
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


export function googleDataprocSessionTemplateTimeoutsToHclTerraform(struct?: GoogleDataprocSessionTemplateTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataprocSessionTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataprocSessionTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataprocSessionTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template google_dataproc_session_template}
*/
export class GoogleDataprocSessionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_session_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataprocSessionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataprocSessionTemplate to import
  * @param importFromId The id of the existing GoogleDataprocSessionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataprocSessionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dataproc_session_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_dataproc_session_template google_dataproc_session_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataprocSessionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataprocSessionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_session_template',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.47.0',
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
    this._environmentConfig.internalValue = config.environmentConfig;
    this._jupyterSession.internalValue = config.jupyterSession;
    this._runtimeConfig.internalValue = config.runtimeConfig;
    this._sparkConnectSession.internalValue = config.sparkConnectSession;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // environment_config - computed: false, optional: true, required: false
  private _environmentConfig = new GoogleDataprocSessionTemplateEnvironmentConfigOutputReference(this, "environment_config");
  public get environmentConfig() {
    return this._environmentConfig;
  }
  public putEnvironmentConfig(value: GoogleDataprocSessionTemplateEnvironmentConfig) {
    this._environmentConfig.internalValue = value;
  }
  public resetEnvironmentConfig() {
    this._environmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentConfigInput() {
    return this._environmentConfig.internalValue;
  }

  // jupyter_session - computed: false, optional: true, required: false
  private _jupyterSession = new GoogleDataprocSessionTemplateJupyterSessionOutputReference(this, "jupyter_session");
  public get jupyterSession() {
    return this._jupyterSession;
  }
  public putJupyterSession(value: GoogleDataprocSessionTemplateJupyterSession) {
    this._jupyterSession.internalValue = value;
  }
  public resetJupyterSession() {
    this._jupyterSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jupyterSessionInput() {
    return this._jupyterSession.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new GoogleDataprocSessionTemplateRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: GoogleDataprocSessionTemplateRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }

  // spark_connect_session - computed: false, optional: true, required: false
  private _sparkConnectSession = new GoogleDataprocSessionTemplateSparkConnectSessionOutputReference(this, "spark_connect_session");
  public get sparkConnectSession() {
    return this._sparkConnectSession;
  }
  public putSparkConnectSession(value: GoogleDataprocSessionTemplateSparkConnectSession) {
    this._sparkConnectSession.internalValue = value;
  }
  public resetSparkConnectSession() {
    this._sparkConnectSession.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkConnectSessionInput() {
    return this._sparkConnectSession.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataprocSessionTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataprocSessionTemplateTimeouts) {
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
      environment_config: googleDataprocSessionTemplateEnvironmentConfigToTerraform(this._environmentConfig.internalValue),
      jupyter_session: googleDataprocSessionTemplateJupyterSessionToTerraform(this._jupyterSession.internalValue),
      runtime_config: googleDataprocSessionTemplateRuntimeConfigToTerraform(this._runtimeConfig.internalValue),
      spark_connect_session: googleDataprocSessionTemplateSparkConnectSessionToTerraform(this._sparkConnectSession.internalValue),
      timeouts: googleDataprocSessionTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      environment_config: {
        value: googleDataprocSessionTemplateEnvironmentConfigToHclTerraform(this._environmentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocSessionTemplateEnvironmentConfigList",
      },
      jupyter_session: {
        value: googleDataprocSessionTemplateJupyterSessionToHclTerraform(this._jupyterSession.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocSessionTemplateJupyterSessionList",
      },
      runtime_config: {
        value: googleDataprocSessionTemplateRuntimeConfigToHclTerraform(this._runtimeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocSessionTemplateRuntimeConfigList",
      },
      spark_connect_session: {
        value: googleDataprocSessionTemplateSparkConnectSessionToHclTerraform(this._sparkConnectSession.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataprocSessionTemplateSparkConnectSessionList",
      },
      timeouts: {
        value: googleDataprocSessionTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataprocSessionTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
