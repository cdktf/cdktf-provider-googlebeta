// https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePubsubSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * This value is the maximum time after a subscriber receives a message
  * before the subscriber should acknowledge the message. After message
  * delivery but before the ack deadline expires and before the message is
  * acknowledged, it is an outstanding message and will not be delivered
  * again during that time (on a best-effort basis).
  * 
  * For pull subscriptions, this value is used as the initial value for
  * the ack deadline. To override this value for a given message, call
  * subscriptions.modifyAckDeadline with the corresponding ackId if using
  * pull. The minimum custom deadline you can specify is 10 seconds. The
  * maximum custom deadline you can specify is 600 seconds (10 minutes).
  * If this parameter is 0, a default value of 10 seconds is used.
  * 
  * For push delivery, this value is also used to set the request timeout
  * for the call to the push endpoint.
  * 
  * If the subscriber never acknowledges the message, the Pub/Sub system
  * will eventually redeliver the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#ack_deadline_seconds GooglePubsubSubscription#ack_deadline_seconds}
  */
  readonly ackDeadlineSeconds?: number;
  /**
  * If 'true', Pub/Sub provides the following guarantees for the delivery
  * of a message with a given value of messageId on this Subscriptions':
  * 
  * - The message sent to a subscriber is guaranteed not to be resent before the message's acknowledgement deadline expires.
  * 
  * - An acknowledged message will not be resent to a subscriber.
  * 
  * Note that subscribers may still receive multiple copies of a message when 'enable_exactly_once_delivery'
  * is true if the message was published multiple times by a publisher client. These copies are considered distinct by Pub/Sub and have distinct messageId values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#enable_exactly_once_delivery GooglePubsubSubscription#enable_exactly_once_delivery}
  */
  readonly enableExactlyOnceDelivery?: boolean | cdktf.IResolvable;
  /**
  * If 'true', messages published with the same orderingKey in PubsubMessage will be delivered to
  * the subscribers in the order in which they are received by the Pub/Sub system. Otherwise, they
  * may be delivered in any order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#enable_message_ordering GooglePubsubSubscription#enable_message_ordering}
  */
  readonly enableMessageOrdering?: boolean | cdktf.IResolvable;
  /**
  * The subscription only delivers the messages that match the filter.
  * Pub/Sub automatically acknowledges the messages that don't match the filter. You can filter messages
  * by their attributes. The maximum length of a filter is 256 bytes. After creating the subscription,
  * you can't modify the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#filter GooglePubsubSubscription#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#id GooglePubsubSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs to assign to this Subscription.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#labels GooglePubsubSubscription#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * How long to retain unacknowledged messages in the subscription's
  * backlog, from the moment a message is published. If
  * retain_acked_messages is true, then this also configures the retention
  * of acknowledged messages, and thus configures how far back in time a
  * subscriptions.seek can be done. Defaults to 7 days. Cannot be more
  * than 31 days ('"2678400s"') or less than 10 minutes ('"600s"').
  * 
  * A duration in seconds with up to nine fractional digits, terminated
  * by 's'. Example: '"600.5s"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#message_retention_duration GooglePubsubSubscription#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#name GooglePubsubSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#project GooglePubsubSubscription#project}
  */
  readonly project?: string;
  /**
  * Indicates whether to retain acknowledged messages. If 'true', then
  * messages are not expunged from the subscription's backlog, even if
  * they are acknowledged, until they fall out of the
  * messageRetentionDuration window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#retain_acked_messages GooglePubsubSubscription#retain_acked_messages}
  */
  readonly retainAckedMessages?: boolean | cdktf.IResolvable;
  /**
  * A reference to a Topic resource, of the form projects/{project}/topics/{{name}}
  * (as in the id property of a google_pubsub_topic), or just a topic name if
  * the topic is in the same project as the subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#topic GooglePubsubSubscription#topic}
  */
  readonly topic: string;
  /**
  * bigquery_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#bigquery_config GooglePubsubSubscription#bigquery_config}
  */
  readonly bigqueryConfig?: GooglePubsubSubscriptionBigqueryConfig;
  /**
  * cloud_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#cloud_storage_config GooglePubsubSubscription#cloud_storage_config}
  */
  readonly cloudStorageConfig?: GooglePubsubSubscriptionCloudStorageConfig;
  /**
  * dead_letter_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#dead_letter_policy GooglePubsubSubscription#dead_letter_policy}
  */
  readonly deadLetterPolicy?: GooglePubsubSubscriptionDeadLetterPolicy;
  /**
  * expiration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#expiration_policy GooglePubsubSubscription#expiration_policy}
  */
  readonly expirationPolicy?: GooglePubsubSubscriptionExpirationPolicy;
  /**
  * push_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#push_config GooglePubsubSubscription#push_config}
  */
  readonly pushConfig?: GooglePubsubSubscriptionPushConfig;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#retry_policy GooglePubsubSubscription#retry_policy}
  */
  readonly retryPolicy?: GooglePubsubSubscriptionRetryPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#timeouts GooglePubsubSubscription#timeouts}
  */
  readonly timeouts?: GooglePubsubSubscriptionTimeouts;
}
export interface GooglePubsubSubscriptionBigqueryConfig {
  /**
  * When true and use_topic_schema or use_table_schema is true, any fields that are a part of the topic schema or message schema that
  * are not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas must be kept in sync
  * and any messages with extra fields are not written and remain in the subscription's backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#drop_unknown_fields GooglePubsubSubscription#drop_unknown_fields}
  */
  readonly dropUnknownFields?: boolean | cdktf.IResolvable;
  /**
  * The service account to use to write to BigQuery. If not specified, the Pub/Sub
  * [service agent](https://cloud.google.com/iam/docs/service-agents),
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The name of the table to which to write data, of the form {projectId}.{datasetId}.{tableId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#table GooglePubsubSubscription#table}
  */
  readonly table: string;
  /**
  * When true, use the BigQuery table's schema as the columns to write to in BigQuery. Messages
  * must be published in JSON format. Only one of use_topic_schema and use_table_schema can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#use_table_schema GooglePubsubSubscription#use_table_schema}
  */
  readonly useTableSchema?: boolean | cdktf.IResolvable;
  /**
  * When true, use the topic's schema as the columns to write to in BigQuery, if it exists.
  * Only one of use_topic_schema and use_table_schema can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktf.IResolvable;
  /**
  * When true, write the subscription name, messageId, publishTime, attributes, and orderingKey to additional columns in the table.
  * The subscription name, messageId, and publishTime fields are put in their own columns while all other message properties (other than data) are written to a JSON object in the attributes column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktf.IResolvable;
}

export function googlePubsubSubscriptionBigqueryConfigToTerraform(struct?: GooglePubsubSubscriptionBigqueryConfigOutputReference | GooglePubsubSubscriptionBigqueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop_unknown_fields: cdktf.booleanToTerraform(struct!.dropUnknownFields),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    table: cdktf.stringToTerraform(struct!.table),
    use_table_schema: cdktf.booleanToTerraform(struct!.useTableSchema),
    use_topic_schema: cdktf.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktf.booleanToTerraform(struct!.writeMetadata),
  }
}


export function googlePubsubSubscriptionBigqueryConfigToHclTerraform(struct?: GooglePubsubSubscriptionBigqueryConfigOutputReference | GooglePubsubSubscriptionBigqueryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop_unknown_fields: {
      value: cdktf.booleanToHclTerraform(struct!.dropUnknownFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_table_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_topic_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useTopicSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionBigqueryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionBigqueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnknownFields = this._dropUnknownFields;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._useTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTableSchema = this._useTableSchema;
    }
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionBigqueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropUnknownFields = undefined;
      this._serviceAccountEmail = undefined;
      this._table = undefined;
      this._useTableSchema = undefined;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropUnknownFields = value.dropUnknownFields;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._table = value.table;
      this._useTableSchema = value.useTableSchema;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // drop_unknown_fields - computed: false, optional: true, required: false
  private _dropUnknownFields?: boolean | cdktf.IResolvable; 
  public get dropUnknownFields() {
    return this.getBooleanAttribute('drop_unknown_fields');
  }
  public set dropUnknownFields(value: boolean | cdktf.IResolvable) {
    this._dropUnknownFields = value;
  }
  public resetDropUnknownFields() {
    this._dropUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnknownFieldsInput() {
    return this._dropUnknownFields;
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

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // use_table_schema - computed: false, optional: true, required: false
  private _useTableSchema?: boolean | cdktf.IResolvable; 
  public get useTableSchema() {
    return this.getBooleanAttribute('use_table_schema');
  }
  public set useTableSchema(value: boolean | cdktf.IResolvable) {
    this._useTableSchema = value;
  }
  public resetUseTableSchema() {
    this._useTableSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTableSchemaInput() {
    return this._useTableSchema;
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktf.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktf.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktf.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktf.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface GooglePubsubSubscriptionCloudStorageConfigAvroConfig {
  /**
  * When true, the output Cloud Storage file will be serialized using the topic schema, if it exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#use_topic_schema GooglePubsubSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktf.IResolvable;
  /**
  * When true, write the subscription name, messageId, publishTime, attributes, and orderingKey as additional fields in the output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktf.IResolvable;
}

export function googlePubsubSubscriptionCloudStorageConfigAvroConfigToTerraform(struct?: GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference | GooglePubsubSubscriptionCloudStorageConfigAvroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_topic_schema: cdktf.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktf.booleanToTerraform(struct!.writeMetadata),
  }
}


export function googlePubsubSubscriptionCloudStorageConfigAvroConfigToHclTerraform(struct?: GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference | GooglePubsubSubscriptionCloudStorageConfigAvroConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_topic_schema: {
      value: cdktf.booleanToHclTerraform(struct!.useTopicSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionCloudStorageConfigAvroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionCloudStorageConfigAvroConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktf.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktf.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktf.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktf.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface GooglePubsubSubscriptionCloudStorageConfig {
  /**
  * User-provided name for the Cloud Storage bucket. The bucket must be created by the user. The bucket name must be without any prefix like "gs://".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#bucket GooglePubsubSubscription#bucket}
  */
  readonly bucket: string;
  /**
  * User-provided format string specifying how to represent datetimes in Cloud Storage filenames.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#filename_datetime_format GooglePubsubSubscription#filename_datetime_format}
  */
  readonly filenameDatetimeFormat?: string;
  /**
  * User-provided prefix for Cloud Storage filename.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#filename_prefix GooglePubsubSubscription#filename_prefix}
  */
  readonly filenamePrefix?: string;
  /**
  * User-provided suffix for Cloud Storage filename. Must not end in "/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#filename_suffix GooglePubsubSubscription#filename_suffix}
  */
  readonly filenameSuffix?: string;
  /**
  * The maximum bytes that can be written to a Cloud Storage file before a new file is created. Min 1 KB, max 10 GiB.
  * The maxBytes limit may be exceeded in cases where messages are larger than the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#max_bytes GooglePubsubSubscription#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * The maximum duration that can elapse before a new Cloud Storage file is created. Min 1 minute, max 10 minutes, default 5 minutes.
  * May not exceed the subscription's acknowledgement deadline.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#max_duration GooglePubsubSubscription#max_duration}
  */
  readonly maxDuration?: string;
  /**
  * The maximum messages that can be written to a Cloud Storage file before a new file is created. Min 1000 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#max_messages GooglePubsubSubscription#max_messages}
  */
  readonly maxMessages?: number;
  /**
  * The service account to use to write to Cloud Storage. If not specified, the Pub/Sub
  * [service agent](https://cloud.google.com/iam/docs/service-agents),
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * avro_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#avro_config GooglePubsubSubscription#avro_config}
  */
  readonly avroConfig?: GooglePubsubSubscriptionCloudStorageConfigAvroConfig;
}

export function googlePubsubSubscriptionCloudStorageConfigToTerraform(struct?: GooglePubsubSubscriptionCloudStorageConfigOutputReference | GooglePubsubSubscriptionCloudStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    filename_datetime_format: cdktf.stringToTerraform(struct!.filenameDatetimeFormat),
    filename_prefix: cdktf.stringToTerraform(struct!.filenamePrefix),
    filename_suffix: cdktf.stringToTerraform(struct!.filenameSuffix),
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
    max_messages: cdktf.numberToTerraform(struct!.maxMessages),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
    avro_config: googlePubsubSubscriptionCloudStorageConfigAvroConfigToTerraform(struct!.avroConfig),
  }
}


export function googlePubsubSubscriptionCloudStorageConfigToHclTerraform(struct?: GooglePubsubSubscriptionCloudStorageConfigOutputReference | GooglePubsubSubscriptionCloudStorageConfig): any {
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
    filename_datetime_format: {
      value: cdktf.stringToHclTerraform(struct!.filenameDatetimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_prefix: {
      value: cdktf.stringToHclTerraform(struct!.filenamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_suffix: {
      value: cdktf.stringToHclTerraform(struct!.filenameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_messages: {
      value: cdktf.numberToHclTerraform(struct!.maxMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_config: {
      value: googlePubsubSubscriptionCloudStorageConfigAvroConfigToHclTerraform(struct!.avroConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubSubscriptionCloudStorageConfigAvroConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionCloudStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionCloudStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._filenameDatetimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameDatetimeFormat = this._filenameDatetimeFormat;
    }
    if (this._filenamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePrefix = this._filenamePrefix;
    }
    if (this._filenameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameSuffix = this._filenameSuffix;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._maxMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessages = this._maxMessages;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._avroConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroConfig = this._avroConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionCloudStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._filenameDatetimeFormat = undefined;
      this._filenamePrefix = undefined;
      this._filenameSuffix = undefined;
      this._maxBytes = undefined;
      this._maxDuration = undefined;
      this._maxMessages = undefined;
      this._serviceAccountEmail = undefined;
      this._avroConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._filenameDatetimeFormat = value.filenameDatetimeFormat;
      this._filenamePrefix = value.filenamePrefix;
      this._filenameSuffix = value.filenameSuffix;
      this._maxBytes = value.maxBytes;
      this._maxDuration = value.maxDuration;
      this._maxMessages = value.maxMessages;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._avroConfig.internalValue = value.avroConfig;
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

  // filename_datetime_format - computed: false, optional: true, required: false
  private _filenameDatetimeFormat?: string; 
  public get filenameDatetimeFormat() {
    return this.getStringAttribute('filename_datetime_format');
  }
  public set filenameDatetimeFormat(value: string) {
    this._filenameDatetimeFormat = value;
  }
  public resetFilenameDatetimeFormat() {
    this._filenameDatetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameDatetimeFormatInput() {
    return this._filenameDatetimeFormat;
  }

  // filename_prefix - computed: false, optional: true, required: false
  private _filenamePrefix?: string; 
  public get filenamePrefix() {
    return this.getStringAttribute('filename_prefix');
  }
  public set filenamePrefix(value: string) {
    this._filenamePrefix = value;
  }
  public resetFilenamePrefix() {
    this._filenamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePrefixInput() {
    return this._filenamePrefix;
  }

  // filename_suffix - computed: false, optional: true, required: false
  private _filenameSuffix?: string; 
  public get filenameSuffix() {
    return this.getStringAttribute('filename_suffix');
  }
  public set filenameSuffix(value: string) {
    this._filenameSuffix = value;
  }
  public resetFilenameSuffix() {
    this._filenameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameSuffixInput() {
    return this._filenameSuffix;
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // max_messages - computed: false, optional: true, required: false
  private _maxMessages?: number; 
  public get maxMessages() {
    return this.getNumberAttribute('max_messages');
  }
  public set maxMessages(value: number) {
    this._maxMessages = value;
  }
  public resetMaxMessages() {
    this._maxMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessagesInput() {
    return this._maxMessages;
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

  // avro_config - computed: false, optional: true, required: false
  private _avroConfig = new GooglePubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(this, "avro_config");
  public get avroConfig() {
    return this._avroConfig;
  }
  public putAvroConfig(value: GooglePubsubSubscriptionCloudStorageConfigAvroConfig) {
    this._avroConfig.internalValue = value;
  }
  public resetAvroConfig() {
    this._avroConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroConfigInput() {
    return this._avroConfig.internalValue;
  }
}
export interface GooglePubsubSubscriptionDeadLetterPolicy {
  /**
  * The name of the topic to which dead letter messages should be published.
  * Format is 'projects/{project}/topics/{topic}'.
  * 
  * The Cloud Pub/Sub service account associated with the enclosing subscription's
  * parent project (i.e.,
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com) must have
  * permission to Publish() to this topic.
  * 
  * The operation will fail if the topic does not exist.
  * Users should ensure that there is a subscription attached to this topic
  * since messages published to a topic with no subscriptions are lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#dead_letter_topic GooglePubsubSubscription#dead_letter_topic}
  */
  readonly deadLetterTopic?: string;
  /**
  * The maximum number of delivery attempts for any message. The value must be
  * between 5 and 100.
  * 
  * The number of delivery attempts is defined as 1 + (the sum of number of
  * NACKs and number of times the acknowledgement deadline has been exceeded for the message).
  * 
  * A NACK is any call to ModifyAckDeadline with a 0 deadline. Note that
  * client libraries may automatically extend ack_deadlines.
  * 
  * This field will be honored on a best effort basis.
  * 
  * If this parameter is 0, a default value of 5 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#max_delivery_attempts GooglePubsubSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts?: number;
}

export function googlePubsubSubscriptionDeadLetterPolicyToTerraform(struct?: GooglePubsubSubscriptionDeadLetterPolicyOutputReference | GooglePubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dead_letter_topic: cdktf.stringToTerraform(struct!.deadLetterTopic),
    max_delivery_attempts: cdktf.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}


export function googlePubsubSubscriptionDeadLetterPolicyToHclTerraform(struct?: GooglePubsubSubscriptionDeadLetterPolicyOutputReference | GooglePubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dead_letter_topic: {
      value: cdktf.stringToHclTerraform(struct!.deadLetterTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_delivery_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxDeliveryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionDeadLetterPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionDeadLetterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterTopic = this._deadLetterTopic;
    }
    if (this._maxDeliveryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryAttempts = this._maxDeliveryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionDeadLetterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTopic = undefined;
      this._maxDeliveryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTopic = value.deadLetterTopic;
      this._maxDeliveryAttempts = value.maxDeliveryAttempts;
    }
  }

  // dead_letter_topic - computed: false, optional: true, required: false
  private _deadLetterTopic?: string; 
  public get deadLetterTopic() {
    return this.getStringAttribute('dead_letter_topic');
  }
  public set deadLetterTopic(value: string) {
    this._deadLetterTopic = value;
  }
  public resetDeadLetterTopic() {
    this._deadLetterTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterTopicInput() {
    return this._deadLetterTopic;
  }

  // max_delivery_attempts - computed: false, optional: true, required: false
  private _maxDeliveryAttempts?: number; 
  public get maxDeliveryAttempts() {
    return this.getNumberAttribute('max_delivery_attempts');
  }
  public set maxDeliveryAttempts(value: number) {
    this._maxDeliveryAttempts = value;
  }
  public resetMaxDeliveryAttempts() {
    this._maxDeliveryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryAttemptsInput() {
    return this._maxDeliveryAttempts;
  }
}
export interface GooglePubsubSubscriptionExpirationPolicy {
  /**
  * Specifies the "time-to-live" duration for an associated resource. The
  * resource expires if it is not active for a period of ttl.
  * If ttl is set to "", the associated resource never expires.
  * A duration in seconds with up to nine fractional digits, terminated by 's'.
  * Example - "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#ttl GooglePubsubSubscription#ttl}
  */
  readonly ttl: string;
}

export function googlePubsubSubscriptionExpirationPolicyToTerraform(struct?: GooglePubsubSubscriptionExpirationPolicyOutputReference | GooglePubsubSubscriptionExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function googlePubsubSubscriptionExpirationPolicyToHclTerraform(struct?: GooglePubsubSubscriptionExpirationPolicyOutputReference | GooglePubsubSubscriptionExpirationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionExpirationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface GooglePubsubSubscriptionPushConfigNoWrapper {
  /**
  * When true, writes the Pub/Sub message metadata to
  * 'x-goog-pubsub-<KEY>:<VAL>' headers of the HTTP request. Writes the
  * Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#write_metadata GooglePubsubSubscription#write_metadata}
  */
  readonly writeMetadata: boolean | cdktf.IResolvable;
}

export function googlePubsubSubscriptionPushConfigNoWrapperToTerraform(struct?: GooglePubsubSubscriptionPushConfigNoWrapperOutputReference | GooglePubsubSubscriptionPushConfigNoWrapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    write_metadata: cdktf.booleanToTerraform(struct!.writeMetadata),
  }
}


export function googlePubsubSubscriptionPushConfigNoWrapperToHclTerraform(struct?: GooglePubsubSubscriptionPushConfigNoWrapperOutputReference | GooglePubsubSubscriptionPushConfigNoWrapper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    write_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionPushConfigNoWrapperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionPushConfigNoWrapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionPushConfigNoWrapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // write_metadata - computed: false, optional: false, required: true
  private _writeMetadata?: boolean | cdktf.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktf.IResolvable) {
    this._writeMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface GooglePubsubSubscriptionPushConfigOidcToken {
  /**
  * Audience to be used when generating OIDC token. The audience claim
  * identifies the recipients that the JWT is intended for. The audience
  * value is a single case-sensitive string. Having multiple values (array)
  * for the audience field is not supported. More info about the OIDC JWT
  * token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3
  * Note: if not specified, the Push endpoint URL will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#audience GooglePubsubSubscription#audience}
  */
  readonly audience?: string;
  /**
  * Service account email to be used for generating the OIDC token.
  * The caller (for subscriptions.create, subscriptions.patch, and
  * subscriptions.modifyPushConfig RPCs) must have the
  * iam.serviceAccounts.actAs permission for the service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#service_account_email GooglePubsubSubscription#service_account_email}
  */
  readonly serviceAccountEmail: string;
}

export function googlePubsubSubscriptionPushConfigOidcTokenToTerraform(struct?: GooglePubsubSubscriptionPushConfigOidcTokenOutputReference | GooglePubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account_email: cdktf.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function googlePubsubSubscriptionPushConfigOidcTokenToHclTerraform(struct?: GooglePubsubSubscriptionPushConfigOidcTokenOutputReference | GooglePubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionPushConfigOidcTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionPushConfigOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionPushConfigOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface GooglePubsubSubscriptionPushConfig {
  /**
  * Endpoint configuration attributes.
  * 
  * Every endpoint has a set of API supported attributes that can
  * be used to control different aspects of the message delivery.
  * 
  * The currently supported attribute is x-goog-version, which you
  * can use to change the format of the pushed message. This
  * attribute indicates the version of the data expected by
  * the endpoint. This controls the shape of the pushed message
  * (i.e., its fields and metadata). The endpoint version is
  * based on the version of the Pub/Sub API.
  * 
  * If not present during the subscriptions.create call,
  * it will default to the version of the API used to make
  * such call. If not present during a subscriptions.modifyPushConfig
  * call, its value will not be changed. subscriptions.get
  * calls will always return a valid version, even if the
  * subscription was created without this attribute.
  * 
  * The possible values for this attribute are:
  * 
  * - v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
  * - v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#attributes GooglePubsubSubscription#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A URL locating the endpoint to which messages should be pushed.
  * For example, a Webhook endpoint might use
  * "https://example.com/push".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#push_endpoint GooglePubsubSubscription#push_endpoint}
  */
  readonly pushEndpoint: string;
  /**
  * no_wrapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#no_wrapper GooglePubsubSubscription#no_wrapper}
  */
  readonly noWrapper?: GooglePubsubSubscriptionPushConfigNoWrapper;
  /**
  * oidc_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#oidc_token GooglePubsubSubscription#oidc_token}
  */
  readonly oidcToken?: GooglePubsubSubscriptionPushConfigOidcToken;
}

export function googlePubsubSubscriptionPushConfigToTerraform(struct?: GooglePubsubSubscriptionPushConfigOutputReference | GooglePubsubSubscriptionPushConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    push_endpoint: cdktf.stringToTerraform(struct!.pushEndpoint),
    no_wrapper: googlePubsubSubscriptionPushConfigNoWrapperToTerraform(struct!.noWrapper),
    oidc_token: googlePubsubSubscriptionPushConfigOidcTokenToTerraform(struct!.oidcToken),
  }
}


export function googlePubsubSubscriptionPushConfigToHclTerraform(struct?: GooglePubsubSubscriptionPushConfigOutputReference | GooglePubsubSubscriptionPushConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    push_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.pushEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_wrapper: {
      value: googlePubsubSubscriptionPushConfigNoWrapperToHclTerraform(struct!.noWrapper),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubSubscriptionPushConfigNoWrapperList",
    },
    oidc_token: {
      value: googlePubsubSubscriptionPushConfigOidcTokenToHclTerraform(struct!.oidcToken),
      isBlock: true,
      type: "list",
      storageClassType: "GooglePubsubSubscriptionPushConfigOidcTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionPushConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionPushConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._pushEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushEndpoint = this._pushEndpoint;
    }
    if (this._noWrapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWrapper = this._noWrapper?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionPushConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._pushEndpoint = undefined;
      this._noWrapper.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._pushEndpoint = value.pushEndpoint;
      this._noWrapper.internalValue = value.noWrapper;
      this._oidcToken.internalValue = value.oidcToken;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // push_endpoint - computed: false, optional: false, required: true
  private _pushEndpoint?: string; 
  public get pushEndpoint() {
    return this.getStringAttribute('push_endpoint');
  }
  public set pushEndpoint(value: string) {
    this._pushEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEndpointInput() {
    return this._pushEndpoint;
  }

  // no_wrapper - computed: false, optional: true, required: false
  private _noWrapper = new GooglePubsubSubscriptionPushConfigNoWrapperOutputReference(this, "no_wrapper");
  public get noWrapper() {
    return this._noWrapper;
  }
  public putNoWrapper(value: GooglePubsubSubscriptionPushConfigNoWrapper) {
    this._noWrapper.internalValue = value;
  }
  public resetNoWrapper() {
    this._noWrapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWrapperInput() {
    return this._noWrapper.internalValue;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new GooglePubsubSubscriptionPushConfigOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: GooglePubsubSubscriptionPushConfigOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }
}
export interface GooglePubsubSubscriptionRetryPolicy {
  /**
  * The maximum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 600 seconds.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#maximum_backoff GooglePubsubSubscription#maximum_backoff}
  */
  readonly maximumBackoff?: string;
  /**
  * The minimum delay between consecutive deliveries of a given message. Value should be between 0 and 600 seconds. Defaults to 10 seconds.
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#minimum_backoff GooglePubsubSubscription#minimum_backoff}
  */
  readonly minimumBackoff?: string;
}

export function googlePubsubSubscriptionRetryPolicyToTerraform(struct?: GooglePubsubSubscriptionRetryPolicyOutputReference | GooglePubsubSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_backoff: cdktf.stringToTerraform(struct!.maximumBackoff),
    minimum_backoff: cdktf.stringToTerraform(struct!.minimumBackoff),
  }
}


export function googlePubsubSubscriptionRetryPolicyToHclTerraform(struct?: GooglePubsubSubscriptionRetryPolicyOutputReference | GooglePubsubSubscriptionRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum_backoff: {
      value: cdktf.stringToHclTerraform(struct!.maximumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_backoff: {
      value: cdktf.stringToHclTerraform(struct!.minimumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GooglePubsubSubscriptionRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GooglePubsubSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBackoff = this._maximumBackoff;
    }
    if (this._minimumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBackoff = this._minimumBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubSubscriptionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBackoff = undefined;
      this._minimumBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBackoff = value.maximumBackoff;
      this._minimumBackoff = value.minimumBackoff;
    }
  }

  // maximum_backoff - computed: true, optional: true, required: false
  private _maximumBackoff?: string; 
  public get maximumBackoff() {
    return this.getStringAttribute('maximum_backoff');
  }
  public set maximumBackoff(value: string) {
    this._maximumBackoff = value;
  }
  public resetMaximumBackoff() {
    this._maximumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBackoffInput() {
    return this._maximumBackoff;
  }

  // minimum_backoff - computed: true, optional: true, required: false
  private _minimumBackoff?: string; 
  public get minimumBackoff() {
    return this.getStringAttribute('minimum_backoff');
  }
  public set minimumBackoff(value: string) {
    this._minimumBackoff = value;
  }
  public resetMinimumBackoff() {
    this._minimumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBackoffInput() {
    return this._minimumBackoff;
  }
}
export interface GooglePubsubSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#create GooglePubsubSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#delete GooglePubsubSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#update GooglePubsubSubscription#update}
  */
  readonly update?: string;
}

export function googlePubsubSubscriptionTimeoutsToTerraform(struct?: GooglePubsubSubscriptionTimeouts | cdktf.IResolvable): any {
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


export function googlePubsubSubscriptionTimeoutsToHclTerraform(struct?: GooglePubsubSubscriptionTimeouts | cdktf.IResolvable): any {
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

export class GooglePubsubSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GooglePubsubSubscriptionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GooglePubsubSubscriptionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription google_pubsub_subscription}
*/
export class GooglePubsubSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GooglePubsubSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GooglePubsubSubscription to import
  * @param importFromId The id of the existing GooglePubsubSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GooglePubsubSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_pubsub_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.27.0/docs/resources/google_pubsub_subscription google_pubsub_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GooglePubsubSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: GooglePubsubSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_subscription',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.27.0',
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
    this._ackDeadlineSeconds = config.ackDeadlineSeconds;
    this._enableExactlyOnceDelivery = config.enableExactlyOnceDelivery;
    this._enableMessageOrdering = config.enableMessageOrdering;
    this._filter = config.filter;
    this._id = config.id;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._retainAckedMessages = config.retainAckedMessages;
    this._topic = config.topic;
    this._bigqueryConfig.internalValue = config.bigqueryConfig;
    this._cloudStorageConfig.internalValue = config.cloudStorageConfig;
    this._deadLetterPolicy.internalValue = config.deadLetterPolicy;
    this._expirationPolicy.internalValue = config.expirationPolicy;
    this._pushConfig.internalValue = config.pushConfig;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_deadline_seconds - computed: true, optional: true, required: false
  private _ackDeadlineSeconds?: number; 
  public get ackDeadlineSeconds() {
    return this.getNumberAttribute('ack_deadline_seconds');
  }
  public set ackDeadlineSeconds(value: number) {
    this._ackDeadlineSeconds = value;
  }
  public resetAckDeadlineSeconds() {
    this._ackDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDeadlineSecondsInput() {
    return this._ackDeadlineSeconds;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_exactly_once_delivery - computed: false, optional: true, required: false
  private _enableExactlyOnceDelivery?: boolean | cdktf.IResolvable; 
  public get enableExactlyOnceDelivery() {
    return this.getBooleanAttribute('enable_exactly_once_delivery');
  }
  public set enableExactlyOnceDelivery(value: boolean | cdktf.IResolvable) {
    this._enableExactlyOnceDelivery = value;
  }
  public resetEnableExactlyOnceDelivery() {
    this._enableExactlyOnceDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExactlyOnceDeliveryInput() {
    return this._enableExactlyOnceDelivery;
  }

  // enable_message_ordering - computed: false, optional: true, required: false
  private _enableMessageOrdering?: boolean | cdktf.IResolvable; 
  public get enableMessageOrdering() {
    return this.getBooleanAttribute('enable_message_ordering');
  }
  public set enableMessageOrdering(value: boolean | cdktf.IResolvable) {
    this._enableMessageOrdering = value;
  }
  public resetEnableMessageOrdering() {
    this._enableMessageOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMessageOrderingInput() {
    return this._enableMessageOrdering;
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

  // retain_acked_messages - computed: false, optional: true, required: false
  private _retainAckedMessages?: boolean | cdktf.IResolvable; 
  public get retainAckedMessages() {
    return this.getBooleanAttribute('retain_acked_messages');
  }
  public set retainAckedMessages(value: boolean | cdktf.IResolvable) {
    this._retainAckedMessages = value;
  }
  public resetRetainAckedMessages() {
    this._retainAckedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAckedMessagesInput() {
    return this._retainAckedMessages;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
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

  // bigquery_config - computed: false, optional: true, required: false
  private _bigqueryConfig = new GooglePubsubSubscriptionBigqueryConfigOutputReference(this, "bigquery_config");
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }
  public putBigqueryConfig(value: GooglePubsubSubscriptionBigqueryConfig) {
    this._bigqueryConfig.internalValue = value;
  }
  public resetBigqueryConfig() {
    this._bigqueryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConfigInput() {
    return this._bigqueryConfig.internalValue;
  }

  // cloud_storage_config - computed: false, optional: true, required: false
  private _cloudStorageConfig = new GooglePubsubSubscriptionCloudStorageConfigOutputReference(this, "cloud_storage_config");
  public get cloudStorageConfig() {
    return this._cloudStorageConfig;
  }
  public putCloudStorageConfig(value: GooglePubsubSubscriptionCloudStorageConfig) {
    this._cloudStorageConfig.internalValue = value;
  }
  public resetCloudStorageConfig() {
    this._cloudStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageConfigInput() {
    return this._cloudStorageConfig.internalValue;
  }

  // dead_letter_policy - computed: false, optional: true, required: false
  private _deadLetterPolicy = new GooglePubsubSubscriptionDeadLetterPolicyOutputReference(this, "dead_letter_policy");
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }
  public putDeadLetterPolicy(value: GooglePubsubSubscriptionDeadLetterPolicy) {
    this._deadLetterPolicy.internalValue = value;
  }
  public resetDeadLetterPolicy() {
    this._deadLetterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterPolicyInput() {
    return this._deadLetterPolicy.internalValue;
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy = new GooglePubsubSubscriptionExpirationPolicyOutputReference(this, "expiration_policy");
  public get expirationPolicy() {
    return this._expirationPolicy;
  }
  public putExpirationPolicy(value: GooglePubsubSubscriptionExpirationPolicy) {
    this._expirationPolicy.internalValue = value;
  }
  public resetExpirationPolicy() {
    this._expirationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyInput() {
    return this._expirationPolicy.internalValue;
  }

  // push_config - computed: false, optional: true, required: false
  private _pushConfig = new GooglePubsubSubscriptionPushConfigOutputReference(this, "push_config");
  public get pushConfig() {
    return this._pushConfig;
  }
  public putPushConfig(value: GooglePubsubSubscriptionPushConfig) {
    this._pushConfig.internalValue = value;
  }
  public resetPushConfig() {
    this._pushConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushConfigInput() {
    return this._pushConfig.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new GooglePubsubSubscriptionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: GooglePubsubSubscriptionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GooglePubsubSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GooglePubsubSubscriptionTimeouts) {
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
      ack_deadline_seconds: cdktf.numberToTerraform(this._ackDeadlineSeconds),
      enable_exactly_once_delivery: cdktf.booleanToTerraform(this._enableExactlyOnceDelivery),
      enable_message_ordering: cdktf.booleanToTerraform(this._enableMessageOrdering),
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      message_retention_duration: cdktf.stringToTerraform(this._messageRetentionDuration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      retain_acked_messages: cdktf.booleanToTerraform(this._retainAckedMessages),
      topic: cdktf.stringToTerraform(this._topic),
      bigquery_config: googlePubsubSubscriptionBigqueryConfigToTerraform(this._bigqueryConfig.internalValue),
      cloud_storage_config: googlePubsubSubscriptionCloudStorageConfigToTerraform(this._cloudStorageConfig.internalValue),
      dead_letter_policy: googlePubsubSubscriptionDeadLetterPolicyToTerraform(this._deadLetterPolicy.internalValue),
      expiration_policy: googlePubsubSubscriptionExpirationPolicyToTerraform(this._expirationPolicy.internalValue),
      push_config: googlePubsubSubscriptionPushConfigToTerraform(this._pushConfig.internalValue),
      retry_policy: googlePubsubSubscriptionRetryPolicyToTerraform(this._retryPolicy.internalValue),
      timeouts: googlePubsubSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ack_deadline_seconds: {
        value: cdktf.numberToHclTerraform(this._ackDeadlineSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_exactly_once_delivery: {
        value: cdktf.booleanToHclTerraform(this._enableExactlyOnceDelivery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_message_ordering: {
        value: cdktf.booleanToHclTerraform(this._enableMessageOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      retain_acked_messages: {
        value: cdktf.booleanToHclTerraform(this._retainAckedMessages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      topic: {
        value: cdktf.stringToHclTerraform(this._topic),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_config: {
        value: googlePubsubSubscriptionBigqueryConfigToHclTerraform(this._bigqueryConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubSubscriptionBigqueryConfigList",
      },
      cloud_storage_config: {
        value: googlePubsubSubscriptionCloudStorageConfigToHclTerraform(this._cloudStorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubSubscriptionCloudStorageConfigList",
      },
      dead_letter_policy: {
        value: googlePubsubSubscriptionDeadLetterPolicyToHclTerraform(this._deadLetterPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubSubscriptionDeadLetterPolicyList",
      },
      expiration_policy: {
        value: googlePubsubSubscriptionExpirationPolicyToHclTerraform(this._expirationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubSubscriptionExpirationPolicyList",
      },
      push_config: {
        value: googlePubsubSubscriptionPushConfigToHclTerraform(this._pushConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubSubscriptionPushConfigList",
      },
      retry_policy: {
        value: googlePubsubSubscriptionRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GooglePubsubSubscriptionRetryPolicyList",
      },
      timeouts: {
        value: googlePubsubSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GooglePubsubSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
