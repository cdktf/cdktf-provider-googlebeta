// https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePubsubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#id GooglePubsubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the Cloud KMS CryptoKey to be used to protect access
  * to messages published on this topic. Your project's PubSub service account
  * ('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#kms_key_name GooglePubsubTopic#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * A set of key/value label pairs to assign to this Topic.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#labels GooglePubsubTopic#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Indicates the minimum duration to retain a message after it is published
  * to the topic. If this field is set, messages published to the topic in
  * the last messageRetentionDuration are always available to subscribers.
  * For instance, it allows any attached subscription to seek to a timestamp
  * that is up to messageRetentionDuration in the past. If this field is not
  * set, message retention is controlled by settings on individual subscriptions.
  * The rotation period has the format of a decimal number, followed by the
  * letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#message_retention_duration GooglePubsubTopic#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#name GooglePubsubTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#project GooglePubsubTopic#project}
  */
  readonly project?: string;
  /**
  * ingestion_data_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#ingestion_data_source_settings GooglePubsubTopic#ingestion_data_source_settings}
  */
  readonly ingestionDataSourceSettings?: GooglePubsubTopicIngestionDataSourceSettings;
  /**
  * message_storage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#message_storage_policy GooglePubsubTopic#message_storage_policy}
  */
  readonly messageStoragePolicy?: GooglePubsubTopicMessageStoragePolicy;
  /**
  * schema_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#schema_settings GooglePubsubTopic#schema_settings}
  */
  readonly schemaSettings?: GooglePubsubTopicSchemaSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#timeouts GooglePubsubTopic#timeouts}
  */
  readonly timeouts?: GooglePubsubTopicTimeouts;
}
export interface GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis {
  /**
  * AWS role ARN to be used for Federated Identity authentication with
  * Kinesis. Check the Pub/Sub docs for how to set up this role and the
  * required permissions that need to be attached to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#aws_role_arn GooglePubsubTopic#aws_role_arn}
  */
  readonly awsRoleArn: string;
  /**
  * The Kinesis consumer ARN to used for ingestion in
  * Enhanced Fan-Out mode. The consumer must be already
  * created and ready to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#consumer_arn GooglePubsubTopic#consumer_arn}
  */
  readonly consumerArn: string;
  /**
  * The GCP service account to be used for Federated Identity authentication
  * with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided
  * role). The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
  * equals to this service account number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#gcp_service_account GooglePubsubTopic#gcp_service_account}
  */
  readonly gcpServiceAccount: string;
  /**
  * The Kinesis stream ARN to ingest data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#stream_arn GooglePubsubTopic#stream_arn}
  */
  readonly streamArn: string;
}

export function googlePubsubTopicIngestionDataSourceSettingsAwsKinesisToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference | GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_role_arn: cdktf.stringToTerraform(struct!.awsRoleArn),
    consumer_arn: cdktf.stringToTerraform(struct!.consumerArn),
    gcp_service_account: cdktf.stringToTerraform(struct!.gcpServiceAccount),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsAwsKinesisToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference | GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_arn: {
      value: cdktf.stringToHclTerraform(struct!.consumerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_account: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArn = this._awsRoleArn;
    }
    if (this._consumerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerArn = this._consumerArn;
    }
    if (this._gcpServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccount = this._gcpServiceAccount;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRoleArn = undefined;
      this._consumerArn = undefined;
      this._gcpServiceAccount = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRoleArn = value.awsRoleArn;
      this._consumerArn = value.consumerArn;
      this._gcpServiceAccount = value.gcpServiceAccount;
      this._streamArn = value.streamArn;
    }
  }

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // consumer_arn - computed: false, optional: false, required: true
  private _consumerArn?: string; 
  public get consumerArn() {
    return this.getStringAttribute('consumer_arn');
  }
  public set consumerArn(value: string) {
    this._consumerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerArnInput() {
    return this._consumerArn;
  }

  // gcp_service_account - computed: false, optional: false, required: true
  private _gcpServiceAccount?: string; 
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }
  public set gcpServiceAccount(value: string) {
    this._gcpServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettingsAwsMsk {
  /**
  * AWS role ARN to be used for Federated Identity authentication with
  * MSK. Check the Pub/Sub docs for how to set up this role and the
  * required permissions that need to be attached to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#aws_role_arn GooglePubsubTopic#aws_role_arn}
  */
  readonly awsRoleArn: string;
  /**
  * ARN that uniquely identifies the MSK cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#cluster_arn GooglePubsubTopic#cluster_arn}
  */
  readonly clusterArn: string;
  /**
  * The GCP service account to be used for Federated Identity authentication
  * with MSK (via a 'AssumeRoleWithWebIdentity' call for the provided
  * role). The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
  * equals to this service account number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#gcp_service_account GooglePubsubTopic#gcp_service_account}
  */
  readonly gcpServiceAccount: string;
  /**
  * The name of the MSK topic that Pub/Sub will import from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#topic GooglePubsubTopic#topic}
  */
  readonly topic: string;
}

export function googlePubsubTopicIngestionDataSourceSettingsAwsMskToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference | GooglePubsubTopicIngestionDataSourceSettingsAwsMsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_role_arn: cdktf.stringToTerraform(struct!.awsRoleArn),
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    gcp_service_account: cdktf.stringToTerraform(struct!.gcpServiceAccount),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsAwsMskToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference | GooglePubsubTopicIngestionDataSourceSettingsAwsMsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_account: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccount),
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

export class GooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsAwsMsk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArn = this._awsRoleArn;
    }
    if (this._clusterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterArn = this._clusterArn;
    }
    if (this._gcpServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccount = this._gcpServiceAccount;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsAwsMsk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRoleArn = undefined;
      this._clusterArn = undefined;
      this._gcpServiceAccount = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRoleArn = value.awsRoleArn;
      this._clusterArn = value.clusterArn;
      this._gcpServiceAccount = value.gcpServiceAccount;
      this._topic = value.topic;
    }
  }

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // cluster_arn - computed: false, optional: false, required: true
  private _clusterArn?: string; 
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }
  public set clusterArn(value: string) {
    this._clusterArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterArnInput() {
    return this._clusterArn;
  }

  // gcp_service_account - computed: false, optional: false, required: true
  private _gcpServiceAccount?: string; 
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }
  public set gcpServiceAccount(value: string) {
    this._gcpServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount;
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
export interface GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs {
  /**
  * The Azure event hub client ID to use for ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#client_id GooglePubsubTopic#client_id}
  */
  readonly clientId?: string;
  /**
  * The Azure event hub to ingest data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#event_hub GooglePubsubTopic#event_hub}
  */
  readonly eventHub?: string;
  /**
  * The GCP service account to be used for Federated Identity authentication
  * with Azure (via a 'AssumeRoleWithWebIdentity' call for the provided
  * role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#gcp_service_account GooglePubsubTopic#gcp_service_account}
  */
  readonly gcpServiceAccount?: string;
  /**
  * The Azure event hub namespace to ingest data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#namespace GooglePubsubTopic#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the resource group within an Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#resource_group GooglePubsubTopic#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * The Azure event hub subscription ID to use for ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#subscription_id GooglePubsubTopic#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * The Azure event hub tenant ID to use for ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#tenant_id GooglePubsubTopic#tenant_id}
  */
  readonly tenantId?: string;
}

export function googlePubsubTopicIngestionDataSourceSettingsAzureEventHubsToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference | GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    event_hub: cdktf.stringToTerraform(struct!.eventHub),
    gcp_service_account: cdktf.stringToTerraform(struct!.gcpServiceAccount),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsAzureEventHubsToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference | GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_hub: {
      value: cdktf.stringToHclTerraform(struct!.eventHub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_account: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._eventHub !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventHub = this._eventHub;
    }
    if (this._gcpServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccount = this._gcpServiceAccount;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._eventHub = undefined;
      this._gcpServiceAccount = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._tenantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._eventHub = value.eventHub;
      this._gcpServiceAccount = value.gcpServiceAccount;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._tenantId = value.tenantId;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // event_hub - computed: false, optional: true, required: false
  private _eventHub?: string; 
  public get eventHub() {
    return this.getStringAttribute('event_hub');
  }
  public set eventHub(value: string) {
    this._eventHub = value;
  }
  public resetEventHub() {
    this._eventHub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventHubInput() {
    return this._eventHub;
  }

  // gcp_service_account - computed: false, optional: true, required: false
  private _gcpServiceAccount?: string; 
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }
  public set gcpServiceAccount(value: string) {
    this._gcpServiceAccount = value;
  }
  public resetGcpServiceAccount() {
    this._gcpServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat {
}

export function googlePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat {
}

export function googlePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat {
  /**
  * The delimiter to use when using the 'text' format. Each line of text as
  * specified by the delimiter will be set to the 'data' field of a Pub/Sub
  * message. When unset, '\n' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#delimiter GooglePubsubTopic#delimiter}
  */
  readonly delimiter?: string;
}

export function googlePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettingsCloudStorage {
  /**
  * Cloud Storage bucket. The bucket name must be without any
  * prefix like "gs://". See the bucket naming requirements:
  * https://cloud.google.com/storage/docs/buckets#naming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#bucket GooglePubsubTopic#bucket}
  */
  readonly bucket: string;
  /**
  * Glob pattern used to match objects that will be ingested. If unset, all
  * objects will be ingested. See the supported patterns:
  * https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#match_glob GooglePubsubTopic#match_glob}
  */
  readonly matchGlob?: string;
  /**
  * The timestamp set in RFC3339 text format. If set, only objects with a
  * larger or equal timestamp will be ingested. Unset by default, meaning
  * all objects will be ingested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#minimum_object_create_time GooglePubsubTopic#minimum_object_create_time}
  */
  readonly minimumObjectCreateTime?: string;
  /**
  * avro_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#avro_format GooglePubsubTopic#avro_format}
  */
  readonly avroFormat?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
  /**
  * pubsub_avro_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#pubsub_avro_format GooglePubsubTopic#pubsub_avro_format}
  */
  readonly pubsubAvroFormat?: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
  /**
  * text_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#text_format GooglePubsubTopic#text_format}
  */
  readonly textFormat?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
}

export function googlePubsubTopicIngestionDataSourceSettingsCloudStorageToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    match_glob: cdktf.stringToTerraform(struct!.matchGlob),
    minimum_object_create_time: cdktf.stringToTerraform(struct!.minimumObjectCreateTime),
    avro_format: googlePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToTerraform(struct!.avroFormat),
    pubsub_avro_format: googlePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToTerraform(struct!.pubsubAvroFormat),
    text_format: googlePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToTerraform(struct!.textFormat),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsCloudStorageToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference | GooglePubsubTopicIngestionDataSourceSettingsCloudStorage): any {
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
    match_glob: {
      value: cdktf.stringToHclTerraform(struct!.matchGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_object_create_time: {
      value: cdktf.stringToHclTerraform(struct!.minimumObjectCreateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_format: {
      value: googlePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList",
    },
    pubsub_avro_format: {
      value: googlePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToHclTerraform(struct!.pubsubAvroFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList",
    },
    text_format: {
      value: googlePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToHclTerraform(struct!.textFormat),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._matchGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchGlob = this._matchGlob;
    }
    if (this._minimumObjectCreateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumObjectCreateTime = this._minimumObjectCreateTime;
    }
    if (this._avroFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFormat = this._avroFormat?.internalValue;
    }
    if (this._pubsubAvroFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubAvroFormat = this._pubsubAvroFormat?.internalValue;
    }
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._matchGlob = undefined;
      this._minimumObjectCreateTime = undefined;
      this._avroFormat.internalValue = undefined;
      this._pubsubAvroFormat.internalValue = undefined;
      this._textFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._matchGlob = value.matchGlob;
      this._minimumObjectCreateTime = value.minimumObjectCreateTime;
      this._avroFormat.internalValue = value.avroFormat;
      this._pubsubAvroFormat.internalValue = value.pubsubAvroFormat;
      this._textFormat.internalValue = value.textFormat;
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

  // match_glob - computed: false, optional: true, required: false
  private _matchGlob?: string; 
  public get matchGlob() {
    return this.getStringAttribute('match_glob');
  }
  public set matchGlob(value: string) {
    this._matchGlob = value;
  }
  public resetMatchGlob() {
    this._matchGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchGlobInput() {
    return this._matchGlob;
  }

  // minimum_object_create_time - computed: false, optional: true, required: false
  private _minimumObjectCreateTime?: string; 
  public get minimumObjectCreateTime() {
    return this.getStringAttribute('minimum_object_create_time');
  }
  public set minimumObjectCreateTime(value: string) {
    this._minimumObjectCreateTime = value;
  }
  public resetMinimumObjectCreateTime() {
    this._minimumObjectCreateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumObjectCreateTimeInput() {
    return this._minimumObjectCreateTime;
  }

  // avro_format - computed: false, optional: true, required: false
  private _avroFormat = new GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat) {
    this._avroFormat.internalValue = value;
  }
  public resetAvroFormat() {
    this._avroFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFormatInput() {
    return this._avroFormat.internalValue;
  }

  // pubsub_avro_format - computed: false, optional: true, required: false
  private _pubsubAvroFormat = new GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(this, "pubsub_avro_format");
  public get pubsubAvroFormat() {
    return this._pubsubAvroFormat;
  }
  public putPubsubAvroFormat(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat) {
    this._pubsubAvroFormat.internalValue = value;
  }
  public resetPubsubAvroFormat() {
    this._pubsubAvroFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubAvroFormatInput() {
    return this._pubsubAvroFormat.internalValue;
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat = new GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(this, "text_format");
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud {
  /**
  * The Confluent Cloud bootstrap server. The format is url:port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#bootstrap_server GooglePubsubTopic#bootstrap_server}
  */
  readonly bootstrapServer: string;
  /**
  * The Confluent Cloud cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#cluster_id GooglePubsubTopic#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * The GCP service account to be used for Federated Identity authentication
  * with Confluent Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#gcp_service_account GooglePubsubTopic#gcp_service_account}
  */
  readonly gcpServiceAccount: string;
  /**
  * Identity pool ID to be used for Federated Identity authentication with Confluent Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#identity_pool_id GooglePubsubTopic#identity_pool_id}
  */
  readonly identityPoolId: string;
  /**
  * Name of the Confluent Cloud topic that Pub/Sub will import from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#topic GooglePubsubTopic#topic}
  */
  readonly topic: string;
}

export function googlePubsubTopicIngestionDataSourceSettingsConfluentCloudToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference | GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_server: cdktf.stringToTerraform(struct!.bootstrapServer),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    gcp_service_account: cdktf.stringToTerraform(struct!.gcpServiceAccount),
    identity_pool_id: cdktf.stringToTerraform(struct!.identityPoolId),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsConfluentCloudToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference | GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_server: {
      value: cdktf.stringToHclTerraform(struct!.bootstrapServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_account: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.identityPoolId),
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

export class GooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServer = this._bootstrapServer;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._gcpServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccount = this._gcpServiceAccount;
    }
    if (this._identityPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityPoolId = this._identityPoolId;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootstrapServer = undefined;
      this._clusterId = undefined;
      this._gcpServiceAccount = undefined;
      this._identityPoolId = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootstrapServer = value.bootstrapServer;
      this._clusterId = value.clusterId;
      this._gcpServiceAccount = value.gcpServiceAccount;
      this._identityPoolId = value.identityPoolId;
      this._topic = value.topic;
    }
  }

  // bootstrap_server - computed: false, optional: false, required: true
  private _bootstrapServer?: string; 
  public get bootstrapServer() {
    return this.getStringAttribute('bootstrap_server');
  }
  public set bootstrapServer(value: string) {
    this._bootstrapServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServerInput() {
    return this._bootstrapServer;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // gcp_service_account - computed: false, optional: false, required: true
  private _gcpServiceAccount?: string; 
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }
  public set gcpServiceAccount(value: string) {
    this._gcpServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount;
  }

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId?: string; 
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityPoolIdInput() {
    return this._identityPoolId;
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
export interface GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings {
  /**
  * The minimum severity level of Platform Logs that will be written. If unspecified,
  * no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#severity GooglePubsubTopic#severity}
  */
  readonly severity?: string;
}

export function googlePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference | GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference | GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severity = value.severity;
    }
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface GooglePubsubTopicIngestionDataSourceSettings {
  /**
  * aws_kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#aws_kinesis GooglePubsubTopic#aws_kinesis}
  */
  readonly awsKinesis?: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis;
  /**
  * aws_msk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#aws_msk GooglePubsubTopic#aws_msk}
  */
  readonly awsMsk?: GooglePubsubTopicIngestionDataSourceSettingsAwsMsk;
  /**
  * azure_event_hubs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#azure_event_hubs GooglePubsubTopic#azure_event_hubs}
  */
  readonly azureEventHubs?: GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs;
  /**
  * cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#cloud_storage GooglePubsubTopic#cloud_storage}
  */
  readonly cloudStorage?: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage;
  /**
  * confluent_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#confluent_cloud GooglePubsubTopic#confluent_cloud}
  */
  readonly confluentCloud?: GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud;
  /**
  * platform_logs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#platform_logs_settings GooglePubsubTopic#platform_logs_settings}
  */
  readonly platformLogsSettings?: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
}

export function googlePubsubTopicIngestionDataSourceSettingsToTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsOutputReference | GooglePubsubTopicIngestionDataSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_kinesis: googlePubsubTopicIngestionDataSourceSettingsAwsKinesisToTerraform(struct!.awsKinesis),
    aws_msk: googlePubsubTopicIngestionDataSourceSettingsAwsMskToTerraform(struct!.awsMsk),
    azure_event_hubs: googlePubsubTopicIngestionDataSourceSettingsAzureEventHubsToTerraform(struct!.azureEventHubs),
    cloud_storage: googlePubsubTopicIngestionDataSourceSettingsCloudStorageToTerraform(struct!.cloudStorage),
    confluent_cloud: googlePubsubTopicIngestionDataSourceSettingsConfluentCloudToTerraform(struct!.confluentCloud),
    platform_logs_settings: googlePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToTerraform(struct!.platformLogsSettings),
  }
}


export function googlePubsubTopicIngestionDataSourceSettingsToHclTerraform(struct?: GooglePubsubTopicIngestionDataSourceSettingsOutputReference | GooglePubsubTopicIngestionDataSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_kinesis: {
      value: googlePubsubTopicIngestionDataSourceSettingsAwsKinesisToHclTerraform(struct!.awsKinesis),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList",
    },
    aws_msk: {
      value: googlePubsubTopicIngestionDataSourceSettingsAwsMskToHclTerraform(struct!.awsMsk),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsAwsMskList",
    },
    azure_event_hubs: {
      value: googlePubsubTopicIngestionDataSourceSettingsAzureEventHubsToHclTerraform(struct!.azureEventHubs),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList",
    },
    cloud_storage: {
      value: googlePubsubTopicIngestionDataSourceSettingsCloudStorageToHclTerraform(struct!.cloudStorage),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsCloudStorageList",
    },
    confluent_cloud: {
      value: googlePubsubTopicIngestionDataSourceSettingsConfluentCloudToHclTerraform(struct!.confluentCloud),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList",
    },
    platform_logs_settings: {
      value: googlePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToHclTerraform(struct!.platformLogsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicIngestionDataSourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicIngestionDataSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKinesis = this._awsKinesis?.internalValue;
    }
    if (this._awsMsk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsMsk = this._awsMsk?.internalValue;
    }
    if (this._azureEventHubs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEventHubs = this._azureEventHubs?.internalValue;
    }
    if (this._cloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorage = this._cloudStorage?.internalValue;
    }
    if (this._confluentCloud?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluentCloud = this._confluentCloud?.internalValue;
    }
    if (this._platformLogsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformLogsSettings = this._platformLogsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicIngestionDataSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsKinesis.internalValue = undefined;
      this._awsMsk.internalValue = undefined;
      this._azureEventHubs.internalValue = undefined;
      this._cloudStorage.internalValue = undefined;
      this._confluentCloud.internalValue = undefined;
      this._platformLogsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsKinesis.internalValue = value.awsKinesis;
      this._awsMsk.internalValue = value.awsMsk;
      this._azureEventHubs.internalValue = value.azureEventHubs;
      this._cloudStorage.internalValue = value.cloudStorage;
      this._confluentCloud.internalValue = value.confluentCloud;
      this._platformLogsSettings.internalValue = value.platformLogsSettings;
    }
  }

  // aws_kinesis - computed: false, optional: true, required: false
  private _awsKinesis = new GooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(this, "aws_kinesis");
  public get awsKinesis() {
    return this._awsKinesis;
  }
  public putAwsKinesis(value: GooglePubsubTopicIngestionDataSourceSettingsAwsKinesis) {
    this._awsKinesis.internalValue = value;
  }
  public resetAwsKinesis() {
    this._awsKinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKinesisInput() {
    return this._awsKinesis.internalValue;
  }

  // aws_msk - computed: false, optional: true, required: false
  private _awsMsk = new GooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(this, "aws_msk");
  public get awsMsk() {
    return this._awsMsk;
  }
  public putAwsMsk(value: GooglePubsubTopicIngestionDataSourceSettingsAwsMsk) {
    this._awsMsk.internalValue = value;
  }
  public resetAwsMsk() {
    this._awsMsk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsMskInput() {
    return this._awsMsk.internalValue;
  }

  // azure_event_hubs - computed: false, optional: true, required: false
  private _azureEventHubs = new GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(this, "azure_event_hubs");
  public get azureEventHubs() {
    return this._azureEventHubs;
  }
  public putAzureEventHubs(value: GooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs) {
    this._azureEventHubs.internalValue = value;
  }
  public resetAzureEventHubs() {
    this._azureEventHubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEventHubsInput() {
    return this._azureEventHubs.internalValue;
  }

  // cloud_storage - computed: false, optional: true, required: false
  private _cloudStorage = new GooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: GooglePubsubTopicIngestionDataSourceSettingsCloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // confluent_cloud - computed: false, optional: true, required: false
  private _confluentCloud = new GooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(this, "confluent_cloud");
  public get confluentCloud() {
    return this._confluentCloud;
  }
  public putConfluentCloud(value: GooglePubsubTopicIngestionDataSourceSettingsConfluentCloud) {
    this._confluentCloud.internalValue = value;
  }
  public resetConfluentCloud() {
    this._confluentCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentCloudInput() {
    return this._confluentCloud.internalValue;
  }

  // platform_logs_settings - computed: false, optional: true, required: false
  private _platformLogsSettings = new GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(this, "platform_logs_settings");
  public get platformLogsSettings() {
    return this._platformLogsSettings;
  }
  public putPlatformLogsSettings(value: GooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings) {
    this._platformLogsSettings.internalValue = value;
  }
  public resetPlatformLogsSettings() {
    this._platformLogsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformLogsSettingsInput() {
    return this._platformLogsSettings.internalValue;
  }
}
export interface GooglePubsubTopicMessageStoragePolicy {
  /**
  * A list of IDs of GCP regions where messages that are published to
  * the topic may be persisted in storage. Messages published by
  * publishers running in non-allowed GCP regions (or running outside
  * of GCP altogether) will be routed for storage in one of the
  * allowed regions. An empty list means that no regions are allowed,
  * and is not a valid configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#allowed_persistence_regions GooglePubsubTopic#allowed_persistence_regions}
  */
  readonly allowedPersistenceRegions: string[];
  /**
  * If true, 'allowedPersistenceRegions' is also used to enforce in-transit
  * guarantees for messages. That is, Pub/Sub will fail topics.publish
  * operations on this topic and subscribe operations on any subscription
  * attached to this topic in any region that is not in 'allowedPersistenceRegions'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#enforce_in_transit GooglePubsubTopic#enforce_in_transit}
  */
  readonly enforceInTransit?: boolean | cdktf.IResolvable;
}

export function googlePubsubTopicMessageStoragePolicyToTerraform(struct?: GooglePubsubTopicMessageStoragePolicyOutputReference | GooglePubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_persistence_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPersistenceRegions),
    enforce_in_transit: cdktf.booleanToTerraform(struct!.enforceInTransit),
  }
}


export function googlePubsubTopicMessageStoragePolicyToHclTerraform(struct?: GooglePubsubTopicMessageStoragePolicyOutputReference | GooglePubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_persistence_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPersistenceRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enforce_in_transit: {
      value: cdktf.booleanToHclTerraform(struct!.enforceInTransit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicMessageStoragePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicMessageStoragePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPersistenceRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPersistenceRegions = this._allowedPersistenceRegions;
    }
    if (this._enforceInTransit !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceInTransit = this._enforceInTransit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicMessageStoragePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedPersistenceRegions = undefined;
      this._enforceInTransit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedPersistenceRegions = value.allowedPersistenceRegions;
      this._enforceInTransit = value.enforceInTransit;
    }
  }

  // allowed_persistence_regions - computed: false, optional: false, required: true
  private _allowedPersistenceRegions?: string[]; 
  public get allowedPersistenceRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_persistence_regions'));
  }
  public set allowedPersistenceRegions(value: string[]) {
    this._allowedPersistenceRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPersistenceRegionsInput() {
    return this._allowedPersistenceRegions;
  }

  // enforce_in_transit - computed: false, optional: true, required: false
  private _enforceInTransit?: boolean | cdktf.IResolvable; 
  public get enforceInTransit() {
    return this.getBooleanAttribute('enforce_in_transit');
  }
  public set enforceInTransit(value: boolean | cdktf.IResolvable) {
    this._enforceInTransit = value;
  }
  public resetEnforceInTransit() {
    this._enforceInTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInTransitInput() {
    return this._enforceInTransit;
  }
}
export interface GooglePubsubTopicSchemaSettings {
  /**
  * The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#encoding GooglePubsubTopic#encoding}
  */
  readonly encoding?: string;
  /**
  * The name of the schema that messages published should be
  * validated against. Format is projects/{project}/schemas/{schema}.
  * The value of this field will be _deleted-schema_
  * if the schema has been deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#schema GooglePubsubTopic#schema}
  */
  readonly schema: string;
}

export function googlePubsubTopicSchemaSettingsToTerraform(struct?: GooglePubsubTopicSchemaSettingsOutputReference | GooglePubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function googlePubsubTopicSchemaSettingsToHclTerraform(struct?: GooglePubsubTopicSchemaSettingsOutputReference | GooglePubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubTopicSchemaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubTopicSchemaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicSchemaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
      this._schema = value.schema;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface GooglePubsubTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#create GooglePubsubTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#delete GooglePubsubTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#update GooglePubsubTopic#update}
  */
  readonly update?: string;
}

export function googlePubsubTopicTimeoutsToTerraform(struct?: GooglePubsubTopicTimeouts | cdktf.IResolvable): any {
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


export function googlePubsubTopicTimeoutsToHclTerraform(struct?: GooglePubsubTopicTimeouts | cdktf.IResolvable): any {
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

export class GooglePubsubTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GooglePubsubTopicTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GooglePubsubTopicTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic google_pubsub_topic}
*/
export class GooglePubsubTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GooglePubsubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GooglePubsubTopic to import
  * @param importFromId The id of the existing GooglePubsubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GooglePubsubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_pubsub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.33.0/docs/resources/google_pubsub_topic google_pubsub_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePubsubTopicConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePubsubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_topic',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.33.0',
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
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._ingestionDataSourceSettings.internalValue = config.ingestionDataSourceSettings;
    this._messageStoragePolicy.internalValue = config.messageStoragePolicy;
    this._schemaSettings.internalValue = config.schemaSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string; 
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }
  public set messageRetentionDuration(value: string) {
    this._messageRetentionDuration = value;
  }
  public resetMessageRetentionDuration() {
    this._messageRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionDurationInput() {
    return this._messageRetentionDuration;
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

  // ingestion_data_source_settings - computed: false, optional: true, required: false
  private _ingestionDataSourceSettings = new GooglePubsubTopicIngestionDataSourceSettingsOutputReference(this, "ingestion_data_source_settings");
  public get ingestionDataSourceSettings() {
    return this._ingestionDataSourceSettings;
  }
  public putIngestionDataSourceSettings(value: GooglePubsubTopicIngestionDataSourceSettings) {
    this._ingestionDataSourceSettings.internalValue = value;
  }
  public resetIngestionDataSourceSettings() {
    this._ingestionDataSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionDataSourceSettingsInput() {
    return this._ingestionDataSourceSettings.internalValue;
  }

  // message_storage_policy - computed: false, optional: true, required: false
  private _messageStoragePolicy = new GooglePubsubTopicMessageStoragePolicyOutputReference(this, "message_storage_policy");
  public get messageStoragePolicy() {
    return this._messageStoragePolicy;
  }
  public putMessageStoragePolicy(value: GooglePubsubTopicMessageStoragePolicy) {
    this._messageStoragePolicy.internalValue = value;
  }
  public resetMessageStoragePolicy() {
    this._messageStoragePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageStoragePolicyInput() {
    return this._messageStoragePolicy.internalValue;
  }

  // schema_settings - computed: false, optional: true, required: false
  private _schemaSettings = new GooglePubsubTopicSchemaSettingsOutputReference(this, "schema_settings");
  public get schemaSettings() {
    return this._schemaSettings;
  }
  public putSchemaSettings(value: GooglePubsubTopicSchemaSettings) {
    this._schemaSettings.internalValue = value;
  }
  public resetSchemaSettings() {
    this._schemaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSettingsInput() {
    return this._schemaSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePubsubTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePubsubTopicTimeouts) {
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
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      message_retention_duration: cdktf.stringToTerraform(this._messageRetentionDuration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      ingestion_data_source_settings: googlePubsubTopicIngestionDataSourceSettingsToTerraform(this._ingestionDataSourceSettings.internalValue),
      message_storage_policy: googlePubsubTopicMessageStoragePolicyToTerraform(this._messageStoragePolicy.internalValue),
      schema_settings: googlePubsubTopicSchemaSettingsToTerraform(this._schemaSettings.internalValue),
      timeouts: googlePubsubTopicTimeoutsToTerraform(this._timeouts.internalValue),
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
      message_retention_duration: {
        value: cdktf.stringToHclTerraform(this._messageRetentionDuration),
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
      ingestion_data_source_settings: {
        value: googlePubsubTopicIngestionDataSourceSettingsToHclTerraform(this._ingestionDataSourceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubTopicIngestionDataSourceSettingsList",
      },
      message_storage_policy: {
        value: googlePubsubTopicMessageStoragePolicyToHclTerraform(this._messageStoragePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubTopicMessageStoragePolicyList",
      },
      schema_settings: {
        value: googlePubsubTopicSchemaSettingsToHclTerraform(this._schemaSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubTopicSchemaSettingsList",
      },
      timeouts: {
        value: googlePubsubTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GooglePubsubTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
