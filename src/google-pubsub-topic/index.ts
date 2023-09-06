/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GooglePubsubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#id GooglePubsubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the Cloud KMS CryptoKey to be used to protect access
to messages published on this topic. Your project's PubSub service account
('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#kms_key_name GooglePubsubTopic#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * A set of key/value label pairs to assign to this Topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#labels GooglePubsubTopic#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Indicates the minimum duration to retain a message after it is published
to the topic. If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
Cannot be more than 31 days or less than 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#message_retention_duration GooglePubsubTopic#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#name GooglePubsubTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#project GooglePubsubTopic#project}
  */
  readonly project?: string;
  /**
  * message_storage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#message_storage_policy GooglePubsubTopic#message_storage_policy}
  */
  readonly messageStoragePolicy?: GooglePubsubTopicMessageStoragePolicy;
  /**
  * schema_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#schema_settings GooglePubsubTopic#schema_settings}
  */
  readonly schemaSettings?: GooglePubsubTopicSchemaSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#timeouts GooglePubsubTopic#timeouts}
  */
  readonly timeouts?: GooglePubsubTopicTimeouts;
}
export interface GooglePubsubTopicMessageStoragePolicy {
  /**
  * A list of IDs of GCP regions where messages that are published to
the topic may be persisted in storage. Messages published by
publishers running in non-allowed GCP regions (or running outside
of GCP altogether) will be routed for storage in one of the
allowed regions. An empty list means that no regions are allowed,
and is not a valid configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#allowed_persistence_regions GooglePubsubTopic#allowed_persistence_regions}
  */
  readonly allowedPersistenceRegions: string[];
}

export function googlePubsubTopicMessageStoragePolicyToTerraform(struct?: GooglePubsubTopicMessageStoragePolicyOutputReference | GooglePubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_persistence_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPersistenceRegions),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GooglePubsubTopicMessageStoragePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedPersistenceRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedPersistenceRegions = value.allowedPersistenceRegions;
    }
  }

  // allowed_persistence_regions - computed: false, optional: false, required: true
  private _allowedPersistenceRegions?: string[]; 
  public get allowedPersistenceRegions() {
    return this.getListAttribute('allowed_persistence_regions');
  }
  public set allowedPersistenceRegions(value: string[]) {
    this._allowedPersistenceRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPersistenceRegionsInput() {
    return this._allowedPersistenceRegions;
  }
}
export interface GooglePubsubTopicSchemaSettings {
  /**
  * The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#encoding GooglePubsubTopic#encoding}
  */
  readonly encoding?: string;
  /**
  * The name of the schema that messages published should be
validated against. Format is projects/{project}/schemas/{schema}.
The value of this field will be _deleted-schema_
if the schema has been deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#schema GooglePubsubTopic#schema}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#create GooglePubsubTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#delete GooglePubsubTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic#update GooglePubsubTopic#update}
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic google_pubsub_topic}
*/
export class GooglePubsubTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/resources/google_pubsub_topic google_pubsub_topic} Resource
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
        providerVersion: '4.81.0',
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
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._messageStoragePolicy.internalValue = config.messageStoragePolicy;
    this._schemaSettings.internalValue = config.schemaSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      message_storage_policy: googlePubsubTopicMessageStoragePolicyToTerraform(this._messageStoragePolicy.internalValue),
      schema_settings: googlePubsubTopicSchemaSettingsToTerraform(this._schemaSettings.internalValue),
      timeouts: googlePubsubTopicTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
