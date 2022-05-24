// https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleHealthcareFhirStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifies the dataset addressed by this request. Must be in the format
'projects/{project}/locations/{location}/datasets/{dataset}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#dataset GoogleHealthcareFhirStore#dataset}
  */
  readonly dataset: string;
  /**
  * Whether to disable referential integrity in this FHIR store. This field is immutable after FHIR store
creation. The default value is false, meaning that the API will enforce referential integrity and fail the
requests that will result in inconsistent state in the FHIR store. When this field is set to true, the API
will skip referential integrity check. Consequently, operations that rely on references, such as
Patient.get$everything, will not return all the results if broken references exist.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#disable_referential_integrity GoogleHealthcareFhirStore#disable_referential_integrity}
  */
  readonly disableReferentialIntegrity?: boolean | cdktf.IResolvable;
  /**
  * Whether to disable resource versioning for this FHIR store. This field can not be changed after the creation
of FHIR store. If set to false, which is the default behavior, all write operations will cause historical
versions to be recorded automatically. The historical versions can be fetched through the history APIs, but
cannot be updated. If set to true, no historical versions will be kept. The server will send back errors for
attempts to read the historical versions.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#disable_resource_versioning GoogleHealthcareFhirStore#disable_resource_versioning}
  */
  readonly disableResourceVersioning?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow the bulk import API to accept history bundles and directly insert historical resource
versions into the FHIR store. Importing resource histories creates resource interactions that appear to have
occurred in the past, which clients may not want to allow. If set to false, history bundles within an import
will fail with an error.

** Changing this property may recreate the FHIR store (removing all data) **

** This property can be changed manually in the Google Cloud Healthcare admin console without recreating the FHIR store **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#enable_history_import GoogleHealthcareFhirStore#enable_history_import}
  */
  readonly enableHistoryImport?: boolean | cdktf.IResolvable;
  /**
  * Whether this FHIR store has the updateCreate capability. This determines if the client can use an Update
operation to create a new resource with a client-specified ID. If false, all IDs are server-assigned through
the Create operation and attempts to Update a non-existent resource will return errors. Please treat the audit
logs with appropriate levels of care if client-specified resource IDs contain sensitive data such as patient
identifiers, those IDs will be part of the FHIR resource path recorded in Cloud audit logs and Cloud Pub/Sub
notifications.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#enable_update_create GoogleHealthcareFhirStore#enable_update_create}
  */
  readonly enableUpdateCreate?: boolean | cdktf.IResolvable;
  /**
  * User-supplied key-value pairs used to organize FHIR stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#labels GoogleHealthcareFhirStore#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name for the FhirStore.

** Changing this property may recreate the FHIR store (removing all data) **
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#name GoogleHealthcareFhirStore#name}
  */
  readonly name: string;
  /**
  * The FHIR specification version. Default value: "STU3" Possible values: ["DSTU2", "STU3", "R4"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#version GoogleHealthcareFhirStore#version}
  */
  readonly version?: string;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#notification_config GoogleHealthcareFhirStore#notification_config}
  */
  readonly notificationConfig?: GoogleHealthcareFhirStoreNotificationConfig;
  /**
  * stream_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#stream_configs GoogleHealthcareFhirStore#stream_configs}
  */
  readonly streamConfigs?: GoogleHealthcareFhirStoreStreamConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#timeouts GoogleHealthcareFhirStore#timeouts}
  */
  readonly timeouts?: GoogleHealthcareFhirStoreTimeouts;
}
export interface GoogleHealthcareFhirStoreNotificationConfig {
  /**
  * The Cloud Pub/Sub topic that notifications of changes are published on. Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#pubsub_topic GoogleHealthcareFhirStore#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function googleHealthcareFhirStoreNotificationConfigToTerraform(struct?: GoogleHealthcareFhirStoreNotificationConfigOutputReference | GoogleHealthcareFhirStoreNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}

export class GoogleHealthcareFhirStoreNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcareFhirStoreNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcareFhirStoreNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubTopic = value.pubsubTopic;
    }
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }
}
export interface GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig {
  /**
  * The depth for all recursive structures in the output analytics schema. For example, concept in the CodeSystem
resource is a recursive structure; when the depth is 2, the CodeSystem table will have a column called
concept.concept but not concept.concept.concept. If not specified or set to 0, the server will use the default
value 2. The maximum depth allowed is 5.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#recursive_structure_depth GoogleHealthcareFhirStore#recursive_structure_depth}
  */
  readonly recursiveStructureDepth: number;
  /**
  * Specifies the output schema type.
 * ANALYTICS: Analytics schema defined by the FHIR community.
  See https://github.com/FHIR/sql-on-fhir/blob/master/sql-on-fhir.md.
 * ANALYTICS_V2: Analytics V2, similar to schema defined by the FHIR community, with added support for extensions with one or more occurrences and contained resources in stringified JSON.
 * LOSSLESS: A data-driven schema generated from the fields present in the FHIR data being exported, with no additional simplification. Default value: "ANALYTICS" Possible values: ["ANALYTICS", "ANALYTICS_V2", "LOSSLESS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#schema_type GoogleHealthcareFhirStore#schema_type}
  */
  readonly schemaType?: string;
}

export function googleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct?: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference | GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recursive_structure_depth: cdktf.numberToTerraform(struct!.recursiveStructureDepth),
    schema_type: cdktf.stringToTerraform(struct!.schemaType),
  }
}

export class GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recursiveStructureDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveStructureDepth = this._recursiveStructureDepth;
    }
    if (this._schemaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaType = this._schemaType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recursiveStructureDepth = undefined;
      this._schemaType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recursiveStructureDepth = value.recursiveStructureDepth;
      this._schemaType = value.schemaType;
    }
  }

  // recursive_structure_depth - computed: false, optional: false, required: true
  private _recursiveStructureDepth?: number; 
  public get recursiveStructureDepth() {
    return this.getNumberAttribute('recursive_structure_depth');
  }
  public set recursiveStructureDepth(value: number) {
    this._recursiveStructureDepth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveStructureDepthInput() {
    return this._recursiveStructureDepth;
  }

  // schema_type - computed: false, optional: true, required: false
  private _schemaType?: string; 
  public get schemaType() {
    return this.getStringAttribute('schema_type');
  }
  public set schemaType(value: string) {
    this._schemaType = value;
  }
  public resetSchemaType() {
    this._schemaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaTypeInput() {
    return this._schemaType;
  }
}
export interface GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination {
  /**
  * BigQuery URI to a dataset, up to 2000 characters long, in the format bq://projectId.bqDatasetId
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#dataset_uri GoogleHealthcareFhirStore#dataset_uri}
  */
  readonly datasetUri: string;
  /**
  * schema_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#schema_config GoogleHealthcareFhirStore#schema_config}
  */
  readonly schemaConfig: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig;
}

export function googleHealthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct?: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference | GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_uri: cdktf.stringToTerraform(struct!.datasetUri),
    schema_config: googleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigToTerraform(struct!.schemaConfig),
  }
}

export class GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUri = this._datasetUri;
    }
    if (this._schemaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaConfig = this._schemaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetUri = undefined;
      this._schemaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetUri = value.datasetUri;
      this._schemaConfig.internalValue = value.schemaConfig;
    }
  }

  // dataset_uri - computed: false, optional: false, required: true
  private _datasetUri?: string; 
  public get datasetUri() {
    return this.getStringAttribute('dataset_uri');
  }
  public set datasetUri(value: string) {
    this._datasetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUriInput() {
    return this._datasetUri;
  }

  // schema_config - computed: false, optional: false, required: true
  private _schemaConfig = new GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfigOutputReference(this, "schema_config");
  public get schemaConfig() {
    return this._schemaConfig;
  }
  public putSchemaConfig(value: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestinationSchemaConfig) {
    this._schemaConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaConfigInput() {
    return this._schemaConfig.internalValue;
  }
}
export interface GoogleHealthcareFhirStoreStreamConfigs {
  /**
  * Supply a FHIR resource type (such as "Patient" or "Observation"). See
https://www.hl7.org/fhir/valueset-resource-types.html for a list of all FHIR resource types. The server treats
an empty list as an intent to stream all the supported resource types in this FHIR store.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#resource_types GoogleHealthcareFhirStore#resource_types}
  */
  readonly resourceTypes?: string[];
  /**
  * bigquery_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#bigquery_destination GoogleHealthcareFhirStore#bigquery_destination}
  */
  readonly bigqueryDestination: GoogleHealthcareFhirStoreStreamConfigsBigqueryDestination;
}

export function googleHealthcareFhirStoreStreamConfigsToTerraform(struct?: GoogleHealthcareFhirStoreStreamConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.resourceTypes),
    bigquery_destination: googleHealthcareFhirStoreStreamConfigsBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}

export interface GoogleHealthcareFhirStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#create GoogleHealthcareFhirStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#delete GoogleHealthcareFhirStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store#update GoogleHealthcareFhirStore#update}
  */
  readonly update?: string;
}

export function googleHealthcareFhirStoreTimeoutsToTerraform(struct?: GoogleHealthcareFhirStoreTimeoutsOutputReference | GoogleHealthcareFhirStoreTimeouts | cdktf.IResolvable): any {
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

export class GoogleHealthcareFhirStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleHealthcareFhirStoreTimeouts | undefined {
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

  public set internalValue(value: GoogleHealthcareFhirStoreTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store google_healthcare_fhir_store}
*/
export class GoogleHealthcareFhirStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_healthcare_fhir_store";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_healthcare_fhir_store google_healthcare_fhir_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleHealthcareFhirStoreConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleHealthcareFhirStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_healthcare_fhir_store',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataset = config.dataset;
    this._disableReferentialIntegrity = config.disableReferentialIntegrity;
    this._disableResourceVersioning = config.disableResourceVersioning;
    this._enableHistoryImport = config.enableHistoryImport;
    this._enableUpdateCreate = config.enableUpdateCreate;
    this._labels = config.labels;
    this._name = config.name;
    this._version = config.version;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._streamConfigs = config.streamConfigs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // disable_referential_integrity - computed: false, optional: true, required: false
  private _disableReferentialIntegrity?: boolean | cdktf.IResolvable; 
  public get disableReferentialIntegrity() {
    return this.getBooleanAttribute('disable_referential_integrity');
  }
  public set disableReferentialIntegrity(value: boolean | cdktf.IResolvable) {
    this._disableReferentialIntegrity = value;
  }
  public resetDisableReferentialIntegrity() {
    this._disableReferentialIntegrity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableReferentialIntegrityInput() {
    return this._disableReferentialIntegrity;
  }

  // disable_resource_versioning - computed: false, optional: true, required: false
  private _disableResourceVersioning?: boolean | cdktf.IResolvable; 
  public get disableResourceVersioning() {
    return this.getBooleanAttribute('disable_resource_versioning');
  }
  public set disableResourceVersioning(value: boolean | cdktf.IResolvable) {
    this._disableResourceVersioning = value;
  }
  public resetDisableResourceVersioning() {
    this._disableResourceVersioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableResourceVersioningInput() {
    return this._disableResourceVersioning;
  }

  // enable_history_import - computed: false, optional: true, required: false
  private _enableHistoryImport?: boolean | cdktf.IResolvable; 
  public get enableHistoryImport() {
    return this.getBooleanAttribute('enable_history_import');
  }
  public set enableHistoryImport(value: boolean | cdktf.IResolvable) {
    this._enableHistoryImport = value;
  }
  public resetEnableHistoryImport() {
    this._enableHistoryImport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHistoryImportInput() {
    return this._enableHistoryImport;
  }

  // enable_update_create - computed: false, optional: true, required: false
  private _enableUpdateCreate?: boolean | cdktf.IResolvable; 
  public get enableUpdateCreate() {
    return this.getBooleanAttribute('enable_update_create');
  }
  public set enableUpdateCreate(value: boolean | cdktf.IResolvable) {
    this._enableUpdateCreate = value;
  }
  public resetEnableUpdateCreate() {
    this._enableUpdateCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUpdateCreateInput() {
    return this._enableUpdateCreate;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new GoogleHealthcareFhirStoreNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: GoogleHealthcareFhirStoreNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // stream_configs - computed: false, optional: true, required: false
  private _streamConfigs?: GoogleHealthcareFhirStoreStreamConfigs[] | cdktf.IResolvable; 
  public get streamConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('stream_configs');
  }
  public set streamConfigs(value: GoogleHealthcareFhirStoreStreamConfigs[] | cdktf.IResolvable) {
    this._streamConfigs = value;
  }
  public resetStreamConfigs() {
    this._streamConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamConfigsInput() {
    return this._streamConfigs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleHealthcareFhirStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleHealthcareFhirStoreTimeouts) {
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
      dataset: cdktf.stringToTerraform(this._dataset),
      disable_referential_integrity: cdktf.booleanToTerraform(this._disableReferentialIntegrity),
      disable_resource_versioning: cdktf.booleanToTerraform(this._disableResourceVersioning),
      enable_history_import: cdktf.booleanToTerraform(this._enableHistoryImport),
      enable_update_create: cdktf.booleanToTerraform(this._enableUpdateCreate),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
      notification_config: googleHealthcareFhirStoreNotificationConfigToTerraform(this._notificationConfig.internalValue),
      stream_configs: cdktf.listMapper(googleHealthcareFhirStoreStreamConfigsToTerraform)(this._streamConfigs),
      timeouts: googleHealthcareFhirStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
