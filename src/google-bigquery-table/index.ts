// https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#clustering GoogleBigqueryTable#clustering}
  */
  readonly clustering?: string[];
  /**
  * The dataset ID to create the table in. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. When the field is set to true or unset in Terraform state, a terraform apply or terraform destroy that would delete the table will fail. When the field is set to false, deleting the table is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#deletion_protection GoogleBigqueryTable#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The field description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#description GoogleBigqueryTable#description}
  */
  readonly description?: string;
  /**
  * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#expiration_time GoogleBigqueryTable#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * A descriptive name for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#friendly_name GoogleBigqueryTable#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#id GoogleBigqueryTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A mapping of labels to assign to the resource.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#labels GoogleBigqueryTable#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#max_staleness GoogleBigqueryTable#max_staleness}
  */
  readonly maxStaleness?: string;
  /**
  * The ID of the project in which the resource belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#project GoogleBigqueryTable#project}
  */
  readonly project?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * The tags attached to this table. Tag keys are globally unique. Tag key is expected to be in the namespaced format, for example "123456789012/environment" where 123456789012 is the ID of the parent organization or project resource for this tag key. Tag value is expected to be the short name, for example "Production".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#resource_tags GoogleBigqueryTable#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * A JSON schema for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * A unique ID for the resource. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}
  */
  readonly tableId: string;
  /**
  * View sets the optional parameter "view": Specifies the view that determines which table information is returned. By default, basic table information and storage statistics (STORAGE_STATS) are returned. Possible values: TABLE_METADATA_VIEW_UNSPECIFIED, BASIC, STORAGE_STATS, FULL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#table_metadata_view GoogleBigqueryTable#table_metadata_view}
  */
  readonly tableMetadataView?: string;
  /**
  * biglake_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#biglake_configuration GoogleBigqueryTable#biglake_configuration}
  */
  readonly biglakeConfiguration?: GoogleBigqueryTableBiglakeConfiguration;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#encryption_configuration GoogleBigqueryTable#encryption_configuration}
  */
  readonly encryptionConfiguration?: GoogleBigqueryTableEncryptionConfiguration;
  /**
  * external_catalog_table_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#external_catalog_table_options GoogleBigqueryTable#external_catalog_table_options}
  */
  readonly externalCatalogTableOptions?: GoogleBigqueryTableExternalCatalogTableOptions;
  /**
  * external_data_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#external_data_configuration GoogleBigqueryTable#external_data_configuration}
  */
  readonly externalDataConfiguration?: GoogleBigqueryTableExternalDataConfiguration;
  /**
  * materialized_view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#materialized_view GoogleBigqueryTable#materialized_view}
  */
  readonly materializedView?: GoogleBigqueryTableMaterializedView;
  /**
  * range_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#range_partitioning GoogleBigqueryTable#range_partitioning}
  */
  readonly rangePartitioning?: GoogleBigqueryTableRangePartitioning;
  /**
  * schema_foreign_type_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#schema_foreign_type_info GoogleBigqueryTable#schema_foreign_type_info}
  */
  readonly schemaForeignTypeInfo?: GoogleBigqueryTableSchemaForeignTypeInfo;
  /**
  * table_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#table_constraints GoogleBigqueryTable#table_constraints}
  */
  readonly tableConstraints?: GoogleBigqueryTableTableConstraints;
  /**
  * table_replication_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#table_replication_info GoogleBigqueryTable#table_replication_info}
  */
  readonly tableReplicationInfo?: GoogleBigqueryTableTableReplicationInfo;
  /**
  * time_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#time_partitioning GoogleBigqueryTable#time_partitioning}
  */
  readonly timePartitioning?: GoogleBigqueryTableTimePartitioning;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#view GoogleBigqueryTable#view}
  */
  readonly view?: GoogleBigqueryTableView;
}
export interface GoogleBigqueryTableBiglakeConfiguration {
  /**
  * The connection specifying the credentials to be used to read and write to external storage, such as Cloud Storage. The connection_id can have the form "&lt;project\_id&gt;.&lt;location\_id&gt;.&lt;connection\_id&gt;" or "projects/&lt;project\_id&gt;/locations/&lt;location\_id&gt;/connections/&lt;connection\_id&gt;".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}
  */
  readonly connectionId: string;
  /**
  * The file format the data is stored in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#file_format GoogleBigqueryTable#file_format}
  */
  readonly fileFormat: string;
  /**
  * The fully qualified location prefix of the external folder where table data is stored. The '*' wildcard character is not allowed. The URI should be in the format "gs://bucket/path_to_table/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#storage_uri GoogleBigqueryTable#storage_uri}
  */
  readonly storageUri: string;
  /**
  * The table format the metadata only snapshots are stored in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#table_format GoogleBigqueryTable#table_format}
  */
  readonly tableFormat: string;
}

export function googleBigqueryTableBiglakeConfigurationToTerraform(struct?: GoogleBigqueryTableBiglakeConfigurationOutputReference | GoogleBigqueryTableBiglakeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    file_format: cdktf.stringToTerraform(struct!.fileFormat),
    storage_uri: cdktf.stringToTerraform(struct!.storageUri),
    table_format: cdktf.stringToTerraform(struct!.tableFormat),
  }
}


export function googleBigqueryTableBiglakeConfigurationToHclTerraform(struct?: GoogleBigqueryTableBiglakeConfigurationOutputReference | GoogleBigqueryTableBiglakeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_format: {
      value: cdktf.stringToHclTerraform(struct!.fileFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_uri: {
      value: cdktf.stringToHclTerraform(struct!.storageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_format: {
      value: cdktf.stringToHclTerraform(struct!.tableFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableBiglakeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableBiglakeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._fileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFormat = this._fileFormat;
    }
    if (this._storageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageUri = this._storageUri;
    }
    if (this._tableFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableFormat = this._tableFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableBiglakeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
      this._fileFormat = undefined;
      this._storageUri = undefined;
      this._tableFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
      this._fileFormat = value.fileFormat;
      this._storageUri = value.storageUri;
      this._tableFormat = value.tableFormat;
    }
  }

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // file_format - computed: false, optional: false, required: true
  private _fileFormat?: string; 
  public get fileFormat() {
    return this.getStringAttribute('file_format');
  }
  public set fileFormat(value: string) {
    this._fileFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFormatInput() {
    return this._fileFormat;
  }

  // storage_uri - computed: false, optional: false, required: true
  private _storageUri?: string; 
  public get storageUri() {
    return this.getStringAttribute('storage_uri');
  }
  public set storageUri(value: string) {
    this._storageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUriInput() {
    return this._storageUri;
  }

  // table_format - computed: false, optional: false, required: true
  private _tableFormat?: string; 
  public get tableFormat() {
    return this.getStringAttribute('table_format');
  }
  public set tableFormat(value: string) {
    this._tableFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableFormatInput() {
    return this._tableFormat;
  }
}
export interface GoogleBigqueryTableEncryptionConfiguration {
  /**
  * The self link or full name of a key which should be used to encrypt this table. Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#kms_key_name GoogleBigqueryTable#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleBigqueryTableEncryptionConfigurationToTerraform(struct?: GoogleBigqueryTableEncryptionConfigurationOutputReference | GoogleBigqueryTableEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function googleBigqueryTableEncryptionConfigurationToHclTerraform(struct?: GoogleBigqueryTableEncryptionConfigurationOutputReference | GoogleBigqueryTableEncryptionConfiguration): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
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

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }
}
export interface GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo {
  /**
  * Name of the SerDe. The maximum length is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}
  */
  readonly name?: string;
  /**
  * Key-value pairs that define the initialization parameters for the serialization library. Maximum size 10 Kib.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Specifies a fully-qualified class name of the serialization library that is responsible for the translation of data between table representation and the underlying low-level input and output format structures. The maximum length is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#serialization_library GoogleBigqueryTable#serialization_library}
  */
  readonly serializationLibrary: string;
}

export function googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoToTerraform(struct?: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference | GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    serialization_library: cdktf.stringToTerraform(struct!.serializationLibrary),
  }
}


export function googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoToHclTerraform(struct?: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference | GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo): any {
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    serialization_library: {
      value: cdktf.stringToHclTerraform(struct!.serializationLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._serializationLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializationLibrary = this._serializationLibrary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._parameters = undefined;
      this._serializationLibrary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._parameters = value.parameters;
      this._serializationLibrary = value.serializationLibrary;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // serialization_library - computed: false, optional: false, required: true
  private _serializationLibrary?: string; 
  public get serializationLibrary() {
    return this.getStringAttribute('serialization_library');
  }
  public set serializationLibrary(value: string) {
    this._serializationLibrary = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationLibraryInput() {
    return this._serializationLibrary;
  }
}
export interface GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor {
  /**
  * Specifies the fully qualified class name of the InputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcInputFormat"). The maximum length is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#input_format GoogleBigqueryTable#input_format}
  */
  readonly inputFormat?: string;
  /**
  * The physical location of the table (e.g. 'gs://spark-dataproc-data/pangea-data/case_sensitive/' or 'gs://spark-dataproc-data/pangea-data/*'). The maximum length is 2056 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#location_uri GoogleBigqueryTable#location_uri}
  */
  readonly locationUri?: string;
  /**
  * Specifies the fully qualified class name of the OutputFormat (e.g. "org.apache.hadoop.hive.ql.io.orc.OrcOutputFormat"). The maximum length is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#output_format GoogleBigqueryTable#output_format}
  */
  readonly outputFormat?: string;
  /**
  * serde_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#serde_info GoogleBigqueryTable#serde_info}
  */
  readonly serdeInfo?: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo;
}

export function googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorToTerraform(struct?: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference | GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    location_uri: cdktf.stringToTerraform(struct!.locationUri),
    output_format: cdktf.stringToTerraform(struct!.outputFormat),
    serde_info: googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoToTerraform(struct!.serdeInfo),
  }
}


export function googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorToHclTerraform(struct?: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference | GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_format: {
      value: cdktf.stringToHclTerraform(struct!.inputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_uri: {
      value: cdktf.stringToHclTerraform(struct!.locationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_format: {
      value: cdktf.stringToHclTerraform(struct!.outputFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serde_info: {
      value: googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoToHclTerraform(struct!.serdeInfo),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._locationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationUri = this._locationUri;
    }
    if (this._outputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFormat = this._outputFormat;
    }
    if (this._serdeInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serdeInfo = this._serdeInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputFormat = undefined;
      this._locationUri = undefined;
      this._outputFormat = undefined;
      this._serdeInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputFormat = value.inputFormat;
      this._locationUri = value.locationUri;
      this._outputFormat = value.outputFormat;
      this._serdeInfo.internalValue = value.serdeInfo;
    }
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
  }

  // location_uri - computed: false, optional: true, required: false
  private _locationUri?: string; 
  public get locationUri() {
    return this.getStringAttribute('location_uri');
  }
  public set locationUri(value: string) {
    this._locationUri = value;
  }
  public resetLocationUri() {
    this._locationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationUriInput() {
    return this._locationUri;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // serde_info - computed: false, optional: true, required: false
  private _serdeInfo = new GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfoOutputReference(this, "serde_info");
  public get serdeInfo() {
    return this._serdeInfo;
  }
  public putSerdeInfo(value: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorSerdeInfo) {
    this._serdeInfo.internalValue = value;
  }
  public resetSerdeInfo() {
    this._serdeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serdeInfoInput() {
    return this._serdeInfo.internalValue;
  }
}
export interface GoogleBigqueryTableExternalCatalogTableOptions {
  /**
  * The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connection is needed to read the open source table from BigQuery Engine. The connection_id can have the form <project_id>.<location_id>.<connection_id> or projects/<project_id>/locations/<location_id>/connections/<connection_id>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}
  */
  readonly connectionId?: string;
  /**
  * A map of key value pairs defining the parameters and properties of the open source table. Corresponds with hive meta store table parameters. Maximum size of 4Mib.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#parameters GoogleBigqueryTable#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * storage_descriptor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#storage_descriptor GoogleBigqueryTable#storage_descriptor}
  */
  readonly storageDescriptor?: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor;
}

export function googleBigqueryTableExternalCatalogTableOptionsToTerraform(struct?: GoogleBigqueryTableExternalCatalogTableOptionsOutputReference | GoogleBigqueryTableExternalCatalogTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    storage_descriptor: googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorToTerraform(struct!.storageDescriptor),
  }
}


export function googleBigqueryTableExternalCatalogTableOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalCatalogTableOptionsOutputReference | GoogleBigqueryTableExternalCatalogTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    storage_descriptor: {
      value: googleBigqueryTableExternalCatalogTableOptionsStorageDescriptorToHclTerraform(struct!.storageDescriptor),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalCatalogTableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalCatalogTableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._storageDescriptor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageDescriptor = this._storageDescriptor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalCatalogTableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionId = undefined;
      this._parameters = undefined;
      this._storageDescriptor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionId = value.connectionId;
      this._parameters = value.parameters;
      this._storageDescriptor.internalValue = value.storageDescriptor;
    }
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // storage_descriptor - computed: false, optional: true, required: false
  private _storageDescriptor = new GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptorOutputReference(this, "storage_descriptor");
  public get storageDescriptor() {
    return this._storageDescriptor;
  }
  public putStorageDescriptor(value: GoogleBigqueryTableExternalCatalogTableOptionsStorageDescriptor) {
    this._storageDescriptor.internalValue = value;
  }
  public resetStorageDescriptor() {
    this._storageDescriptor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDescriptorInput() {
    return this._storageDescriptor.internalValue;
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationAvroOptions {
  /**
  * If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#use_avro_logical_types GoogleBigqueryTable#use_avro_logical_types}
  */
  readonly useAvroLogicalTypes: boolean | cdktf.IResolvable;
}

export function googleBigqueryTableExternalDataConfigurationAvroOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationAvroOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_avro_logical_types: cdktf.booleanToTerraform(struct!.useAvroLogicalTypes),
  }
}


export function googleBigqueryTableExternalDataConfigurationAvroOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationAvroOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_avro_logical_types: {
      value: cdktf.booleanToHclTerraform(struct!.useAvroLogicalTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationAvroOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useAvroLogicalTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAvroLogicalTypes = this._useAvroLogicalTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationAvroOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useAvroLogicalTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useAvroLogicalTypes = value.useAvroLogicalTypes;
    }
  }

  // use_avro_logical_types - computed: false, optional: false, required: true
  private _useAvroLogicalTypes?: boolean | cdktf.IResolvable; 
  public get useAvroLogicalTypes() {
    return this.getBooleanAttribute('use_avro_logical_types');
  }
  public set useAvroLogicalTypes(value: boolean | cdktf.IResolvable) {
    this._useAvroLogicalTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAvroLogicalTypesInput() {
    return this._useAvroLogicalTypes;
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn {
  /**
  * The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. 'encoding' can also be set at the column family level. However, the setting at this level takes precedence if 'encoding' is set at both levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}
  */
  readonly encoding?: string;
  /**
  * If the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as the column field name and is used as field name in queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#field_name GoogleBigqueryTable#field_name}
  */
  readonly fieldName?: string;
  /**
  * If this is set, only the latest version of value in this column are exposed. 'onlyReadLatest' can also be set at the column family level. However, the setting at this level takes precedence if 'onlyReadLatest' is set at both levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#only_read_latest GoogleBigqueryTable#only_read_latest}
  */
  readonly onlyReadLatest?: boolean | cdktf.IResolvable;
  /**
  * Qualifier of the column. Columns in the parent column family that has this exact qualifier are exposed as . field. If the qualifier is valid UTF-8 string, it can be specified in the qualifierString field. Otherwise, a base-64 encoded value must be set to qualifierEncoded. The column field name is the same as the column qualifier. However, if the qualifier is not a valid BigQuery field identifier i.e. does not match [a-zA-Z][a-zA-Z0-9_]*, a valid identifier must be provided as fieldName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#qualifier_encoded GoogleBigqueryTable#qualifier_encoded}
  */
  readonly qualifierEncoded?: string;
  /**
  * Qualifier string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#qualifier_string GoogleBigqueryTable#qualifier_string}
  */
  readonly qualifierString?: string;
  /**
  * The type to convert the value in cells of this column. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON", Default type is "BYTES". 'type' can also be set at the column family level. However, the setting at this level takes precedence if 'type' is set at both levels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}
  */
  readonly type?: string;
}

export function googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    only_read_latest: cdktf.booleanToTerraform(struct!.onlyReadLatest),
    qualifier_encoded: cdktf.stringToTerraform(struct!.qualifierEncoded),
    qualifier_string: cdktf.stringToTerraform(struct!.qualifierString),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn | cdktf.IResolvable): any {
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
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    only_read_latest: {
      value: cdktf.booleanToHclTerraform(struct!.onlyReadLatest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    qualifier_encoded: {
      value: cdktf.stringToHclTerraform(struct!.qualifierEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier_string: {
      value: cdktf.stringToHclTerraform(struct!.qualifierString),
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

export class GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._onlyReadLatest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyReadLatest = this._onlyReadLatest;
    }
    if (this._qualifierEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifierEncoded = this._qualifierEncoded;
    }
    if (this._qualifierString !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifierString = this._qualifierString;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._fieldName = undefined;
      this._onlyReadLatest = undefined;
      this._qualifierEncoded = undefined;
      this._qualifierString = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._fieldName = value.fieldName;
      this._onlyReadLatest = value.onlyReadLatest;
      this._qualifierEncoded = value.qualifierEncoded;
      this._qualifierString = value.qualifierString;
      this._type = value.type;
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

  // field_name - computed: false, optional: true, required: false
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  public resetFieldName() {
    this._fieldName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // only_read_latest - computed: false, optional: true, required: false
  private _onlyReadLatest?: boolean | cdktf.IResolvable; 
  public get onlyReadLatest() {
    return this.getBooleanAttribute('only_read_latest');
  }
  public set onlyReadLatest(value: boolean | cdktf.IResolvable) {
    this._onlyReadLatest = value;
  }
  public resetOnlyReadLatest() {
    this._onlyReadLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyReadLatestInput() {
    return this._onlyReadLatest;
  }

  // qualifier_encoded - computed: false, optional: true, required: false
  private _qualifierEncoded?: string; 
  public get qualifierEncoded() {
    return this.getStringAttribute('qualifier_encoded');
  }
  public set qualifierEncoded(value: string) {
    this._qualifierEncoded = value;
  }
  public resetQualifierEncoded() {
    this._qualifierEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierEncodedInput() {
    return this._qualifierEncoded;
  }

  // qualifier_string - computed: false, optional: true, required: false
  private _qualifierString?: string; 
  public get qualifierString() {
    return this.getStringAttribute('qualifier_string');
  }
  public set qualifierString(value: string) {
    this._qualifierString = value;
  }
  public resetQualifierString() {
    this._qualifierString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierStringInput() {
    return this._qualifierString;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList extends cdktf.ComplexList {
  public internalValue? : GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn[] | cdktf.IResolvable

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
  public get(index: number): GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference {
    return new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily {
  /**
  * The encoding of the values when the type is not STRING. Acceptable encoding values are: TEXT - indicates values are alphanumeric text strings. BINARY - indicates values are encoded using HBase Bytes.toBytes family of functions. This can be overridden for a specific column by listing that column in 'columns' and specifying an encoding for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}
  */
  readonly encoding?: string;
  /**
  * Identifier of the column family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#family_id GoogleBigqueryTable#family_id}
  */
  readonly familyId?: string;
  /**
  * If this is set only the latest version of value are exposed for all columns in this column family. This can be overridden for a specific column by listing that column in 'columns' and specifying a different setting for that column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#only_read_latest GoogleBigqueryTable#only_read_latest}
  */
  readonly onlyReadLatest?: boolean | cdktf.IResolvable;
  /**
  * The type to convert the value in cells of this column family. The values are expected to be encoded using HBase Bytes.toBytes function when using the BINARY encoding value. Following BigQuery types are allowed (case-sensitive): "BYTES", "STRING", "INTEGER", "FLOAT", "BOOLEAN", "JSON". Default type is BYTES. This can be overridden for a specific column by listing that column in 'columns' and specifying a type for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}
  */
  readonly type?: string;
  /**
  * column block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#column GoogleBigqueryTable#column}
  */
  readonly column?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn[] | cdktf.IResolvable;
}

export function googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    family_id: cdktf.stringToTerraform(struct!.familyId),
    only_read_latest: cdktf.booleanToTerraform(struct!.onlyReadLatest),
    type: cdktf.stringToTerraform(struct!.type),
    column: cdktf.listMapper(googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnToTerraform, true)(struct!.column),
  }
}


export function googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily | cdktf.IResolvable): any {
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
    family_id: {
      value: cdktf.stringToHclTerraform(struct!.familyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    only_read_latest: {
      value: cdktf.booleanToHclTerraform(struct!.onlyReadLatest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column: {
      value: cdktf.listMapperHcl(googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnToHclTerraform, true)(struct!.column),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._familyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyId = this._familyId;
    }
    if (this._onlyReadLatest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyReadLatest = this._onlyReadLatest;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._column?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encoding = undefined;
      this._familyId = undefined;
      this._onlyReadLatest = undefined;
      this._type = undefined;
      this._column.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encoding = value.encoding;
      this._familyId = value.familyId;
      this._onlyReadLatest = value.onlyReadLatest;
      this._type = value.type;
      this._column.internalValue = value.column;
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

  // family_id - computed: false, optional: true, required: false
  private _familyId?: string; 
  public get familyId() {
    return this.getStringAttribute('family_id');
  }
  public set familyId(value: string) {
    this._familyId = value;
  }
  public resetFamilyId() {
    this._familyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyIdInput() {
    return this._familyId;
  }

  // only_read_latest - computed: false, optional: true, required: false
  private _onlyReadLatest?: boolean | cdktf.IResolvable; 
  public get onlyReadLatest() {
    return this.getBooleanAttribute('only_read_latest');
  }
  public set onlyReadLatest(value: boolean | cdktf.IResolvable) {
    this._onlyReadLatest = value;
  }
  public resetOnlyReadLatest() {
    this._onlyReadLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyReadLatestInput() {
    return this._onlyReadLatest;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // column - computed: false, optional: true, required: false
  private _column = new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumnList(this, "column", false);
  public get column() {
    return this._column;
  }
  public putColumn(value: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyColumn[] | cdktf.IResolvable) {
    this._column.internalValue = value;
  }
  public resetColumn() {
    this._column.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column.internalValue;
  }
}

export class GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList extends cdktf.ComplexList {
  public internalValue? : GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily[] | cdktf.IResolvable

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
  public get(index: number): GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference {
    return new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationBigtableOptions {
  /**
  * If field is true, then the column families that are not specified in columnFamilies list are not exposed in the table schema. Otherwise, they are read with BYTES type values. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#ignore_unspecified_column_families GoogleBigqueryTable#ignore_unspecified_column_families}
  */
  readonly ignoreUnspecifiedColumnFamilies?: boolean | cdktf.IResolvable;
  /**
  * If field is true, then each column family will be read as a single JSON column. Otherwise they are read as a repeated cell structure containing timestamp/value tuples. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#output_column_families_as_json GoogleBigqueryTable#output_column_families_as_json}
  */
  readonly outputColumnFamiliesAsJson?: boolean | cdktf.IResolvable;
  /**
  * If field is true, then the rowkey column families will be read and converted to string. Otherwise they are read with BYTES type values and users need to manually cast them with CAST if necessary. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#read_rowkey_as_string GoogleBigqueryTable#read_rowkey_as_string}
  */
  readonly readRowkeyAsString?: boolean | cdktf.IResolvable;
  /**
  * column_family block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#column_family GoogleBigqueryTable#column_family}
  */
  readonly columnFamily?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily[] | cdktf.IResolvable;
}

export function googleBigqueryTableExternalDataConfigurationBigtableOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationBigtableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_unspecified_column_families: cdktf.booleanToTerraform(struct!.ignoreUnspecifiedColumnFamilies),
    output_column_families_as_json: cdktf.booleanToTerraform(struct!.outputColumnFamiliesAsJson),
    read_rowkey_as_string: cdktf.booleanToTerraform(struct!.readRowkeyAsString),
    column_family: cdktf.listMapper(googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyToTerraform, true)(struct!.columnFamily),
  }
}


export function googleBigqueryTableExternalDataConfigurationBigtableOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationBigtableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_unspecified_column_families: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnspecifiedColumnFamilies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    output_column_families_as_json: {
      value: cdktf.booleanToHclTerraform(struct!.outputColumnFamiliesAsJson),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_rowkey_as_string: {
      value: cdktf.booleanToHclTerraform(struct!.readRowkeyAsString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    column_family: {
      value: cdktf.listMapperHcl(googleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyToHclTerraform, true)(struct!.columnFamily),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationBigtableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreUnspecifiedColumnFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnspecifiedColumnFamilies = this._ignoreUnspecifiedColumnFamilies;
    }
    if (this._outputColumnFamiliesAsJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputColumnFamiliesAsJson = this._outputColumnFamiliesAsJson;
    }
    if (this._readRowkeyAsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRowkeyAsString = this._readRowkeyAsString;
    }
    if (this._columnFamily?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnFamily = this._columnFamily?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationBigtableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreUnspecifiedColumnFamilies = undefined;
      this._outputColumnFamiliesAsJson = undefined;
      this._readRowkeyAsString = undefined;
      this._columnFamily.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreUnspecifiedColumnFamilies = value.ignoreUnspecifiedColumnFamilies;
      this._outputColumnFamiliesAsJson = value.outputColumnFamiliesAsJson;
      this._readRowkeyAsString = value.readRowkeyAsString;
      this._columnFamily.internalValue = value.columnFamily;
    }
  }

  // ignore_unspecified_column_families - computed: false, optional: true, required: false
  private _ignoreUnspecifiedColumnFamilies?: boolean | cdktf.IResolvable; 
  public get ignoreUnspecifiedColumnFamilies() {
    return this.getBooleanAttribute('ignore_unspecified_column_families');
  }
  public set ignoreUnspecifiedColumnFamilies(value: boolean | cdktf.IResolvable) {
    this._ignoreUnspecifiedColumnFamilies = value;
  }
  public resetIgnoreUnspecifiedColumnFamilies() {
    this._ignoreUnspecifiedColumnFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnspecifiedColumnFamiliesInput() {
    return this._ignoreUnspecifiedColumnFamilies;
  }

  // output_column_families_as_json - computed: false, optional: true, required: false
  private _outputColumnFamiliesAsJson?: boolean | cdktf.IResolvable; 
  public get outputColumnFamiliesAsJson() {
    return this.getBooleanAttribute('output_column_families_as_json');
  }
  public set outputColumnFamiliesAsJson(value: boolean | cdktf.IResolvable) {
    this._outputColumnFamiliesAsJson = value;
  }
  public resetOutputColumnFamiliesAsJson() {
    this._outputColumnFamiliesAsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputColumnFamiliesAsJsonInput() {
    return this._outputColumnFamiliesAsJson;
  }

  // read_rowkey_as_string - computed: false, optional: true, required: false
  private _readRowkeyAsString?: boolean | cdktf.IResolvable; 
  public get readRowkeyAsString() {
    return this.getBooleanAttribute('read_rowkey_as_string');
  }
  public set readRowkeyAsString(value: boolean | cdktf.IResolvable) {
    this._readRowkeyAsString = value;
  }
  public resetReadRowkeyAsString() {
    this._readRowkeyAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRowkeyAsStringInput() {
    return this._readRowkeyAsString;
  }

  // column_family - computed: false, optional: true, required: false
  private _columnFamily = new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamilyList(this, "column_family", false);
  public get columnFamily() {
    return this._columnFamily;
  }
  public putColumnFamily(value: GoogleBigqueryTableExternalDataConfigurationBigtableOptionsColumnFamily[] | cdktf.IResolvable) {
    this._columnFamily.internalValue = value;
  }
  public resetColumnFamily() {
    this._columnFamily.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnFamilyInput() {
    return this._columnFamily.internalValue;
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationCsvOptions {
  /**
  * Indicates if BigQuery should accept rows that are missing trailing optional columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#allow_jagged_rows GoogleBigqueryTable#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean | cdktf.IResolvable;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#allow_quoted_newlines GoogleBigqueryTable#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}
  */
  readonly encoding?: string;
  /**
  * The separator for fields in a CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#field_delimiter GoogleBigqueryTable#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * The value that is used to quote data sections in a CSV file. If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as \". Due to limitations with Terraform default values, this value is required to be explicitly set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#quote GoogleBigqueryTable#quote}
  */
  readonly quote: string;
  /**
  * The number of rows at the top of a CSV file that BigQuery will skip when reading the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

export function googleBigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_jagged_rows: cdktf.booleanToTerraform(struct!.allowJaggedRows),
    allow_quoted_newlines: cdktf.booleanToTerraform(struct!.allowQuotedNewlines),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    quote: cdktf.stringToTerraform(struct!.quote),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}


export function googleBigqueryTableExternalDataConfigurationCsvOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_jagged_rows: {
      value: cdktf.booleanToHclTerraform(struct!.allowJaggedRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_quoted_newlines: {
      value: cdktf.booleanToHclTerraform(struct!.allowQuotedNewlines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote: {
      value: cdktf.stringToHclTerraform(struct!.quote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_leading_rows: {
      value: cdktf.numberToHclTerraform(struct!.skipLeadingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowJaggedRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowJaggedRows = this._allowJaggedRows;
    }
    if (this._allowQuotedNewlines !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQuotedNewlines = this._allowQuotedNewlines;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._quote !== undefined) {
      hasAnyValues = true;
      internalValueResult.quote = this._quote;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowJaggedRows = undefined;
      this._allowQuotedNewlines = undefined;
      this._encoding = undefined;
      this._fieldDelimiter = undefined;
      this._quote = undefined;
      this._skipLeadingRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowJaggedRows = value.allowJaggedRows;
      this._allowQuotedNewlines = value.allowQuotedNewlines;
      this._encoding = value.encoding;
      this._fieldDelimiter = value.fieldDelimiter;
      this._quote = value.quote;
      this._skipLeadingRows = value.skipLeadingRows;
    }
  }

  // allow_jagged_rows - computed: false, optional: true, required: false
  private _allowJaggedRows?: boolean | cdktf.IResolvable; 
  public get allowJaggedRows() {
    return this.getBooleanAttribute('allow_jagged_rows');
  }
  public set allowJaggedRows(value: boolean | cdktf.IResolvable) {
    this._allowJaggedRows = value;
  }
  public resetAllowJaggedRows() {
    this._allowJaggedRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJaggedRowsInput() {
    return this._allowJaggedRows;
  }

  // allow_quoted_newlines - computed: false, optional: true, required: false
  private _allowQuotedNewlines?: boolean | cdktf.IResolvable; 
  public get allowQuotedNewlines() {
    return this.getBooleanAttribute('allow_quoted_newlines');
  }
  public set allowQuotedNewlines(value: boolean | cdktf.IResolvable) {
    this._allowQuotedNewlines = value;
  }
  public resetAllowQuotedNewlines() {
    this._allowQuotedNewlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQuotedNewlinesInput() {
    return this._allowQuotedNewlines;
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

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // quote - computed: false, optional: false, required: true
  private _quote?: string; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string) {
    this._quote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions {
  /**
  * Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}
  */
  readonly range?: string;
  /**
  * The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#skip_leading_rows GoogleBigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

export function googleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}


export function googleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_leading_rows: {
      value: cdktf.numberToHclTerraform(struct!.skipLeadingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._range = undefined;
      this._skipLeadingRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._range = value.range;
      this._skipLeadingRows = value.skipLeadingRows;
    }
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions {
  /**
  * When set, what mode of hive partitioning to use when reading data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#mode GoogleBigqueryTable#mode}
  */
  readonly mode?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#source_uri_prefix GoogleBigqueryTable#source_uri_prefix}
  */
  readonly sourceUriPrefix?: string;
}

export function googleBigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    source_uri_prefix: cdktf.stringToTerraform(struct!.sourceUriPrefix),
  }
}


export function googleBigqueryTableExternalDataConfigurationHivePartitioningOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_partition_filter: {
      value: cdktf.booleanToHclTerraform(struct!.requirePartitionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_uri_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._sourceUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriPrefix = this._sourceUriPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._requirePartitionFilter = undefined;
      this._sourceUriPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._sourceUriPrefix = value.sourceUriPrefix;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // source_uri_prefix - computed: false, optional: true, required: false
  private _sourceUriPrefix?: string; 
  public get sourceUriPrefix() {
    return this.getStringAttribute('source_uri_prefix');
  }
  public set sourceUriPrefix(value: string) {
    this._sourceUriPrefix = value;
  }
  public resetSourceUriPrefix() {
    this._sourceUriPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriPrefixInput() {
    return this._sourceUriPrefix;
  }
}
export interface GoogleBigqueryTableExternalDataConfigurationJsonOptions {
  /**
  * The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#encoding GoogleBigqueryTable#encoding}
  */
  readonly encoding?: string;
}

export function googleBigqueryTableExternalDataConfigurationJsonOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
  }
}


export function googleBigqueryTableExternalDataConfigurationJsonOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationJsonOptions): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationJsonOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationJsonOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
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
}
export interface GoogleBigqueryTableExternalDataConfigurationParquetOptions {
  /**
  * Indicates whether to use schema inference specifically for Parquet LIST logical type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#enable_list_inference GoogleBigqueryTable#enable_list_inference}
  */
  readonly enableListInference?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#enum_as_string GoogleBigqueryTable#enum_as_string}
  */
  readonly enumAsString?: boolean | cdktf.IResolvable;
}

export function googleBigqueryTableExternalDataConfigurationParquetOptionsToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationParquetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_list_inference: cdktf.booleanToTerraform(struct!.enableListInference),
    enum_as_string: cdktf.booleanToTerraform(struct!.enumAsString),
  }
}


export function googleBigqueryTableExternalDataConfigurationParquetOptionsToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference | GoogleBigqueryTableExternalDataConfigurationParquetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_list_inference: {
      value: cdktf.booleanToHclTerraform(struct!.enableListInference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enum_as_string: {
      value: cdktf.booleanToHclTerraform(struct!.enumAsString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfigurationParquetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableListInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableListInference = this._enableListInference;
    }
    if (this._enumAsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumAsString = this._enumAsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfigurationParquetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableListInference = undefined;
      this._enumAsString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableListInference = value.enableListInference;
      this._enumAsString = value.enumAsString;
    }
  }

  // enable_list_inference - computed: false, optional: true, required: false
  private _enableListInference?: boolean | cdktf.IResolvable; 
  public get enableListInference() {
    return this.getBooleanAttribute('enable_list_inference');
  }
  public set enableListInference(value: boolean | cdktf.IResolvable) {
    this._enableListInference = value;
  }
  public resetEnableListInference() {
    this._enableListInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableListInferenceInput() {
    return this._enableListInference;
  }

  // enum_as_string - computed: false, optional: true, required: false
  private _enumAsString?: boolean | cdktf.IResolvable; 
  public get enumAsString() {
    return this.getBooleanAttribute('enum_as_string');
  }
  public set enumAsString(value: boolean | cdktf.IResolvable) {
    this._enumAsString = value;
  }
  public resetEnumAsString() {
    this._enumAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumAsStringInput() {
    return this._enumAsString;
  }
}
export interface GoogleBigqueryTableExternalDataConfiguration {
  /**
  * Let BigQuery try to autodetect the schema and format of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#autodetect GoogleBigqueryTable#autodetect}
  */
  readonly autodetect: boolean | cdktf.IResolvable;
  /**
  * The compression type of the data source. Valid values are "NONE" or "GZIP".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#compression GoogleBigqueryTable#compression}
  */
  readonly compression?: string;
  /**
  * The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connectionId can have the form "<project>.<location>.<connection_id>" or "projects/<project>/locations/<location>/connections/<connection_id>".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#connection_id GoogleBigqueryTable#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Specifies how source URIs are interpreted for constructing the file set to load.  By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#file_set_spec_type GoogleBigqueryTable#file_set_spec_type}
  */
  readonly fileSetSpecType?: string;
  /**
  * Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#ignore_unknown_values GoogleBigqueryTable#ignore_unknown_values}
  */
  readonly ignoreUnknownValues?: boolean | cdktf.IResolvable;
  /**
  * Load option to be used together with sourceFormat newline-delimited JSON to indicate that a variant of JSON is being loaded. To load newline-delimited GeoJSON, specify GEOJSON (and sourceFormat must be set to NEWLINE_DELIMITED_JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#json_extension GoogleBigqueryTable#json_extension}
  */
  readonly jsonExtension?: string;
  /**
  * The maximum number of bad records that BigQuery can ignore when reading data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#max_bad_records GoogleBigqueryTable#max_bad_records}
  */
  readonly maxBadRecords?: number;
  /**
  * Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#metadata_cache_mode GoogleBigqueryTable#metadata_cache_mode}
  */
  readonly metadataCacheMode?: string;
  /**
  * Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#object_metadata GoogleBigqueryTable#object_metadata}
  */
  readonly objectMetadata?: string;
  /**
  * When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#reference_file_schema_uri GoogleBigqueryTable#reference_file_schema_uri}
  */
  readonly referenceFileSchemaUri?: string;
  /**
  * A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#schema GoogleBigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#source_format GoogleBigqueryTable#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * A list of the fully-qualified URIs that point to your data in Google Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#source_uris GoogleBigqueryTable#source_uris}
  */
  readonly sourceUris: string[];
  /**
  * avro_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#avro_options GoogleBigqueryTable#avro_options}
  */
  readonly avroOptions?: GoogleBigqueryTableExternalDataConfigurationAvroOptions;
  /**
  * bigtable_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#bigtable_options GoogleBigqueryTable#bigtable_options}
  */
  readonly bigtableOptions?: GoogleBigqueryTableExternalDataConfigurationBigtableOptions;
  /**
  * csv_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#csv_options GoogleBigqueryTable#csv_options}
  */
  readonly csvOptions?: GoogleBigqueryTableExternalDataConfigurationCsvOptions;
  /**
  * google_sheets_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#google_sheets_options GoogleBigqueryTable#google_sheets_options}
  */
  readonly googleSheetsOptions?: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions;
  /**
  * hive_partitioning_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#hive_partitioning_options GoogleBigqueryTable#hive_partitioning_options}
  */
  readonly hivePartitioningOptions?: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions;
  /**
  * json_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#json_options GoogleBigqueryTable#json_options}
  */
  readonly jsonOptions?: GoogleBigqueryTableExternalDataConfigurationJsonOptions;
  /**
  * parquet_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#parquet_options GoogleBigqueryTable#parquet_options}
  */
  readonly parquetOptions?: GoogleBigqueryTableExternalDataConfigurationParquetOptions;
}

export function googleBigqueryTableExternalDataConfigurationToTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationOutputReference | GoogleBigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    compression: cdktf.stringToTerraform(struct!.compression),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    file_set_spec_type: cdktf.stringToTerraform(struct!.fileSetSpecType),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    json_extension: cdktf.stringToTerraform(struct!.jsonExtension),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    metadata_cache_mode: cdktf.stringToTerraform(struct!.metadataCacheMode),
    object_metadata: cdktf.stringToTerraform(struct!.objectMetadata),
    reference_file_schema_uri: cdktf.stringToTerraform(struct!.referenceFileSchemaUri),
    schema: cdktf.stringToTerraform(struct!.schema),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUris),
    avro_options: googleBigqueryTableExternalDataConfigurationAvroOptionsToTerraform(struct!.avroOptions),
    bigtable_options: googleBigqueryTableExternalDataConfigurationBigtableOptionsToTerraform(struct!.bigtableOptions),
    csv_options: googleBigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct!.csvOptions),
    google_sheets_options: googleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct!.googleSheetsOptions),
    hive_partitioning_options: googleBigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct!.hivePartitioningOptions),
    json_options: googleBigqueryTableExternalDataConfigurationJsonOptionsToTerraform(struct!.jsonOptions),
    parquet_options: googleBigqueryTableExternalDataConfigurationParquetOptionsToTerraform(struct!.parquetOptions),
  }
}


export function googleBigqueryTableExternalDataConfigurationToHclTerraform(struct?: GoogleBigqueryTableExternalDataConfigurationOutputReference | GoogleBigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodetect: {
      value: cdktf.booleanToHclTerraform(struct!.autodetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_set_spec_type: {
      value: cdktf.stringToHclTerraform(struct!.fileSetSpecType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_unknown_values: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnknownValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    json_extension: {
      value: cdktf.stringToHclTerraform(struct!.jsonExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bad_records: {
      value: cdktf.numberToHclTerraform(struct!.maxBadRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_cache_mode: {
      value: cdktf.stringToHclTerraform(struct!.metadataCacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_metadata: {
      value: cdktf.stringToHclTerraform(struct!.objectMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_file_schema_uri: {
      value: cdktf.stringToHclTerraform(struct!.referenceFileSchemaUri),
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
    source_format: {
      value: cdktf.stringToHclTerraform(struct!.sourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    avro_options: {
      value: googleBigqueryTableExternalDataConfigurationAvroOptionsToHclTerraform(struct!.avroOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationAvroOptionsList",
    },
    bigtable_options: {
      value: googleBigqueryTableExternalDataConfigurationBigtableOptionsToHclTerraform(struct!.bigtableOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationBigtableOptionsList",
    },
    csv_options: {
      value: googleBigqueryTableExternalDataConfigurationCsvOptionsToHclTerraform(struct!.csvOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationCsvOptionsList",
    },
    google_sheets_options: {
      value: googleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsToHclTerraform(struct!.googleSheetsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsList",
    },
    hive_partitioning_options: {
      value: googleBigqueryTableExternalDataConfigurationHivePartitioningOptionsToHclTerraform(struct!.hivePartitioningOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsList",
    },
    json_options: {
      value: googleBigqueryTableExternalDataConfigurationJsonOptionsToHclTerraform(struct!.jsonOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationJsonOptionsList",
    },
    parquet_options: {
      value: googleBigqueryTableExternalDataConfigurationParquetOptionsToHclTerraform(struct!.parquetOptions),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableExternalDataConfigurationParquetOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableExternalDataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableExternalDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodetect = this._autodetect;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._fileSetSpecType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSetSpecType = this._fileSetSpecType;
    }
    if (this._ignoreUnknownValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownValues = this._ignoreUnknownValues;
    }
    if (this._jsonExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonExtension = this._jsonExtension;
    }
    if (this._maxBadRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRecords = this._maxBadRecords;
    }
    if (this._metadataCacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCacheMode = this._metadataCacheMode;
    }
    if (this._objectMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectMetadata = this._objectMetadata;
    }
    if (this._referenceFileSchemaUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceFileSchemaUri = this._referenceFileSchemaUri;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._sourceUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUris = this._sourceUris;
    }
    if (this._avroOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroOptions = this._avroOptions?.internalValue;
    }
    if (this._bigtableOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigtableOptions = this._bigtableOptions?.internalValue;
    }
    if (this._csvOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvOptions = this._csvOptions?.internalValue;
    }
    if (this._googleSheetsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleSheetsOptions = this._googleSheetsOptions?.internalValue;
    }
    if (this._hivePartitioningOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hivePartitioningOptions = this._hivePartitioningOptions?.internalValue;
    }
    if (this._jsonOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonOptions = this._jsonOptions?.internalValue;
    }
    if (this._parquetOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetOptions = this._parquetOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableExternalDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autodetect = undefined;
      this._compression = undefined;
      this._connectionId = undefined;
      this._fileSetSpecType = undefined;
      this._ignoreUnknownValues = undefined;
      this._jsonExtension = undefined;
      this._maxBadRecords = undefined;
      this._metadataCacheMode = undefined;
      this._objectMetadata = undefined;
      this._referenceFileSchemaUri = undefined;
      this._schema = undefined;
      this._sourceFormat = undefined;
      this._sourceUris = undefined;
      this._avroOptions.internalValue = undefined;
      this._bigtableOptions.internalValue = undefined;
      this._csvOptions.internalValue = undefined;
      this._googleSheetsOptions.internalValue = undefined;
      this._hivePartitioningOptions.internalValue = undefined;
      this._jsonOptions.internalValue = undefined;
      this._parquetOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autodetect = value.autodetect;
      this._compression = value.compression;
      this._connectionId = value.connectionId;
      this._fileSetSpecType = value.fileSetSpecType;
      this._ignoreUnknownValues = value.ignoreUnknownValues;
      this._jsonExtension = value.jsonExtension;
      this._maxBadRecords = value.maxBadRecords;
      this._metadataCacheMode = value.metadataCacheMode;
      this._objectMetadata = value.objectMetadata;
      this._referenceFileSchemaUri = value.referenceFileSchemaUri;
      this._schema = value.schema;
      this._sourceFormat = value.sourceFormat;
      this._sourceUris = value.sourceUris;
      this._avroOptions.internalValue = value.avroOptions;
      this._bigtableOptions.internalValue = value.bigtableOptions;
      this._csvOptions.internalValue = value.csvOptions;
      this._googleSheetsOptions.internalValue = value.googleSheetsOptions;
      this._hivePartitioningOptions.internalValue = value.hivePartitioningOptions;
      this._jsonOptions.internalValue = value.jsonOptions;
      this._parquetOptions.internalValue = value.parquetOptions;
    }
  }

  // autodetect - computed: false, optional: false, required: true
  private _autodetect?: boolean | cdktf.IResolvable; 
  public get autodetect() {
    return this.getBooleanAttribute('autodetect');
  }
  public set autodetect(value: boolean | cdktf.IResolvable) {
    this._autodetect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectInput() {
    return this._autodetect;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // file_set_spec_type - computed: false, optional: true, required: false
  private _fileSetSpecType?: string; 
  public get fileSetSpecType() {
    return this.getStringAttribute('file_set_spec_type');
  }
  public set fileSetSpecType(value: string) {
    this._fileSetSpecType = value;
  }
  public resetFileSetSpecType() {
    this._fileSetSpecType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSetSpecTypeInput() {
    return this._fileSetSpecType;
  }

  // ignore_unknown_values - computed: false, optional: true, required: false
  private _ignoreUnknownValues?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownValues() {
    return this.getBooleanAttribute('ignore_unknown_values');
  }
  public set ignoreUnknownValues(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownValues = value;
  }
  public resetIgnoreUnknownValues() {
    this._ignoreUnknownValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownValuesInput() {
    return this._ignoreUnknownValues;
  }

  // json_extension - computed: false, optional: true, required: false
  private _jsonExtension?: string; 
  public get jsonExtension() {
    return this.getStringAttribute('json_extension');
  }
  public set jsonExtension(value: string) {
    this._jsonExtension = value;
  }
  public resetJsonExtension() {
    this._jsonExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonExtensionInput() {
    return this._jsonExtension;
  }

  // max_bad_records - computed: false, optional: true, required: false
  private _maxBadRecords?: number; 
  public get maxBadRecords() {
    return this.getNumberAttribute('max_bad_records');
  }
  public set maxBadRecords(value: number) {
    this._maxBadRecords = value;
  }
  public resetMaxBadRecords() {
    this._maxBadRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRecordsInput() {
    return this._maxBadRecords;
  }

  // metadata_cache_mode - computed: false, optional: true, required: false
  private _metadataCacheMode?: string; 
  public get metadataCacheMode() {
    return this.getStringAttribute('metadata_cache_mode');
  }
  public set metadataCacheMode(value: string) {
    this._metadataCacheMode = value;
  }
  public resetMetadataCacheMode() {
    this._metadataCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCacheModeInput() {
    return this._metadataCacheMode;
  }

  // object_metadata - computed: false, optional: true, required: false
  private _objectMetadata?: string; 
  public get objectMetadata() {
    return this.getStringAttribute('object_metadata');
  }
  public set objectMetadata(value: string) {
    this._objectMetadata = value;
  }
  public resetObjectMetadata() {
    this._objectMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectMetadataInput() {
    return this._objectMetadata;
  }

  // reference_file_schema_uri - computed: false, optional: true, required: false
  private _referenceFileSchemaUri?: string; 
  public get referenceFileSchemaUri() {
    return this.getStringAttribute('reference_file_schema_uri');
  }
  public set referenceFileSchemaUri(value: string) {
    this._referenceFileSchemaUri = value;
  }
  public resetReferenceFileSchemaUri() {
    this._referenceFileSchemaUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceFileSchemaUriInput() {
    return this._referenceFileSchemaUri;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // source_uris - computed: false, optional: false, required: true
  private _sourceUris?: string[]; 
  public get sourceUris() {
    return this.getListAttribute('source_uris');
  }
  public set sourceUris(value: string[]) {
    this._sourceUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrisInput() {
    return this._sourceUris;
  }

  // avro_options - computed: false, optional: true, required: false
  private _avroOptions = new GoogleBigqueryTableExternalDataConfigurationAvroOptionsOutputReference(this, "avro_options");
  public get avroOptions() {
    return this._avroOptions;
  }
  public putAvroOptions(value: GoogleBigqueryTableExternalDataConfigurationAvroOptions) {
    this._avroOptions.internalValue = value;
  }
  public resetAvroOptions() {
    this._avroOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroOptionsInput() {
    return this._avroOptions.internalValue;
  }

  // bigtable_options - computed: false, optional: true, required: false
  private _bigtableOptions = new GoogleBigqueryTableExternalDataConfigurationBigtableOptionsOutputReference(this, "bigtable_options");
  public get bigtableOptions() {
    return this._bigtableOptions;
  }
  public putBigtableOptions(value: GoogleBigqueryTableExternalDataConfigurationBigtableOptions) {
    this._bigtableOptions.internalValue = value;
  }
  public resetBigtableOptions() {
    this._bigtableOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigtableOptionsInput() {
    return this._bigtableOptions.internalValue;
  }

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new GoogleBigqueryTableExternalDataConfigurationCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: GoogleBigqueryTableExternalDataConfigurationCsvOptions) {
    this._csvOptions.internalValue = value;
  }
  public resetCsvOptions() {
    this._csvOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions.internalValue;
  }

  // google_sheets_options - computed: false, optional: true, required: false
  private _googleSheetsOptions = new GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(this, "google_sheets_options");
  public get googleSheetsOptions() {
    return this._googleSheetsOptions;
  }
  public putGoogleSheetsOptions(value: GoogleBigqueryTableExternalDataConfigurationGoogleSheetsOptions) {
    this._googleSheetsOptions.internalValue = value;
  }
  public resetGoogleSheetsOptions() {
    this._googleSheetsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSheetsOptionsInput() {
    return this._googleSheetsOptions.internalValue;
  }

  // hive_partitioning_options - computed: false, optional: true, required: false
  private _hivePartitioningOptions = new GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(this, "hive_partitioning_options");
  public get hivePartitioningOptions() {
    return this._hivePartitioningOptions;
  }
  public putHivePartitioningOptions(value: GoogleBigqueryTableExternalDataConfigurationHivePartitioningOptions) {
    this._hivePartitioningOptions.internalValue = value;
  }
  public resetHivePartitioningOptions() {
    this._hivePartitioningOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hivePartitioningOptionsInput() {
    return this._hivePartitioningOptions.internalValue;
  }

  // json_options - computed: false, optional: true, required: false
  private _jsonOptions = new GoogleBigqueryTableExternalDataConfigurationJsonOptionsOutputReference(this, "json_options");
  public get jsonOptions() {
    return this._jsonOptions;
  }
  public putJsonOptions(value: GoogleBigqueryTableExternalDataConfigurationJsonOptions) {
    this._jsonOptions.internalValue = value;
  }
  public resetJsonOptions() {
    this._jsonOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonOptionsInput() {
    return this._jsonOptions.internalValue;
  }

  // parquet_options - computed: false, optional: true, required: false
  private _parquetOptions = new GoogleBigqueryTableExternalDataConfigurationParquetOptionsOutputReference(this, "parquet_options");
  public get parquetOptions() {
    return this._parquetOptions;
  }
  public putParquetOptions(value: GoogleBigqueryTableExternalDataConfigurationParquetOptions) {
    this._parquetOptions.internalValue = value;
  }
  public resetParquetOptions() {
    this._parquetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetOptionsInput() {
    return this._parquetOptions.internalValue;
  }
}
export interface GoogleBigqueryTableMaterializedView {
  /**
  * Allow non incremental materialized view definition. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#allow_non_incremental_definition GoogleBigqueryTable#allow_non_incremental_definition}
  */
  readonly allowNonIncrementalDefinition?: boolean | cdktf.IResolvable;
  /**
  * Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#enable_refresh GoogleBigqueryTable#enable_refresh}
  */
  readonly enableRefresh?: boolean | cdktf.IResolvable;
  /**
  * A query whose result is persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#refresh_interval_ms GoogleBigqueryTable#refresh_interval_ms}
  */
  readonly refreshIntervalMs?: number;
}

export function googleBigqueryTableMaterializedViewToTerraform(struct?: GoogleBigqueryTableMaterializedViewOutputReference | GoogleBigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_non_incremental_definition: cdktf.booleanToTerraform(struct!.allowNonIncrementalDefinition),
    enable_refresh: cdktf.booleanToTerraform(struct!.enableRefresh),
    query: cdktf.stringToTerraform(struct!.query),
    refresh_interval_ms: cdktf.numberToTerraform(struct!.refreshIntervalMs),
  }
}


export function googleBigqueryTableMaterializedViewToHclTerraform(struct?: GoogleBigqueryTableMaterializedViewOutputReference | GoogleBigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_non_incremental_definition: {
      value: cdktf.booleanToHclTerraform(struct!.allowNonIncrementalDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.enableRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.refreshIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableMaterializedViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableMaterializedView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNonIncrementalDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNonIncrementalDefinition = this._allowNonIncrementalDefinition;
    }
    if (this._enableRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRefresh = this._enableRefresh;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._refreshIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervalMs = this._refreshIntervalMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableMaterializedView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowNonIncrementalDefinition = undefined;
      this._enableRefresh = undefined;
      this._query = undefined;
      this._refreshIntervalMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowNonIncrementalDefinition = value.allowNonIncrementalDefinition;
      this._enableRefresh = value.enableRefresh;
      this._query = value.query;
      this._refreshIntervalMs = value.refreshIntervalMs;
    }
  }

  // allow_non_incremental_definition - computed: false, optional: true, required: false
  private _allowNonIncrementalDefinition?: boolean | cdktf.IResolvable; 
  public get allowNonIncrementalDefinition() {
    return this.getBooleanAttribute('allow_non_incremental_definition');
  }
  public set allowNonIncrementalDefinition(value: boolean | cdktf.IResolvable) {
    this._allowNonIncrementalDefinition = value;
  }
  public resetAllowNonIncrementalDefinition() {
    this._allowNonIncrementalDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonIncrementalDefinitionInput() {
    return this._allowNonIncrementalDefinition;
  }

  // enable_refresh - computed: false, optional: true, required: false
  private _enableRefresh?: boolean | cdktf.IResolvable; 
  public get enableRefresh() {
    return this.getBooleanAttribute('enable_refresh');
  }
  public set enableRefresh(value: boolean | cdktf.IResolvable) {
    this._enableRefresh = value;
  }
  public resetEnableRefresh() {
    this._enableRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRefreshInput() {
    return this._enableRefresh;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // refresh_interval_ms - computed: false, optional: true, required: false
  private _refreshIntervalMs?: number; 
  public get refreshIntervalMs() {
    return this.getNumberAttribute('refresh_interval_ms');
  }
  public set refreshIntervalMs(value: number) {
    this._refreshIntervalMs = value;
  }
  public resetRefreshIntervalMs() {
    this._refreshIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalMsInput() {
    return this._refreshIntervalMs;
  }
}
export interface GoogleBigqueryTableRangePartitioningRange {
  /**
  * End of the range partitioning, exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#end GoogleBigqueryTable#end}
  */
  readonly end: number;
  /**
  * The width of each range within the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#interval GoogleBigqueryTable#interval}
  */
  readonly interval: number;
  /**
  * Start of the range partitioning, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#start GoogleBigqueryTable#start}
  */
  readonly start: number;
}

export function googleBigqueryTableRangePartitioningRangeToTerraform(struct?: GoogleBigqueryTableRangePartitioningRangeOutputReference | GoogleBigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    interval: cdktf.numberToTerraform(struct!.interval),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function googleBigqueryTableRangePartitioningRangeToHclTerraform(struct?: GoogleBigqueryTableRangePartitioningRangeOutputReference | GoogleBigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableRangePartitioningRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableRangePartitioningRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableRangePartitioningRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._interval = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._interval = value.interval;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface GoogleBigqueryTableRangePartitioning {
  /**
  * The field used to determine how to create a range-based partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}
  */
  readonly field: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#range GoogleBigqueryTable#range}
  */
  readonly range: GoogleBigqueryTableRangePartitioningRange;
}

export function googleBigqueryTableRangePartitioningToTerraform(struct?: GoogleBigqueryTableRangePartitioningOutputReference | GoogleBigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    range: googleBigqueryTableRangePartitioningRangeToTerraform(struct!.range),
  }
}


export function googleBigqueryTableRangePartitioningToHclTerraform(struct?: GoogleBigqueryTableRangePartitioningOutputReference | GoogleBigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: googleBigqueryTableRangePartitioningRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableRangePartitioningRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableRangePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableRangePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableRangePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._range.internalValue = value.range;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // range - computed: false, optional: false, required: true
  private _range = new GoogleBigqueryTableRangePartitioningRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: GoogleBigqueryTableRangePartitioningRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface GoogleBigqueryTableSchemaForeignTypeInfo {
  /**
  * Specifies the system which defines the foreign data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#type_system GoogleBigqueryTable#type_system}
  */
  readonly typeSystem: string;
}

export function googleBigqueryTableSchemaForeignTypeInfoToTerraform(struct?: GoogleBigqueryTableSchemaForeignTypeInfoOutputReference | GoogleBigqueryTableSchemaForeignTypeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type_system: cdktf.stringToTerraform(struct!.typeSystem),
  }
}


export function googleBigqueryTableSchemaForeignTypeInfoToHclTerraform(struct?: GoogleBigqueryTableSchemaForeignTypeInfoOutputReference | GoogleBigqueryTableSchemaForeignTypeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type_system: {
      value: cdktf.stringToHclTerraform(struct!.typeSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableSchemaForeignTypeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableSchemaForeignTypeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._typeSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeSystem = this._typeSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableSchemaForeignTypeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._typeSystem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._typeSystem = value.typeSystem;
    }
  }

  // type_system - computed: false, optional: false, required: true
  private _typeSystem?: string; 
  public get typeSystem() {
    return this.getStringAttribute('type_system');
  }
  public set typeSystem(value: string) {
    this._typeSystem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeSystemInput() {
    return this._typeSystem;
  }
}
export interface GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences {
  /**
  * The column in the primary key that are referenced by the referencingColumn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#referenced_column GoogleBigqueryTable#referenced_column}
  */
  readonly referencedColumn: string;
  /**
  * The column that composes the foreign key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#referencing_column GoogleBigqueryTable#referencing_column}
  */
  readonly referencingColumn: string;
}

export function googleBigqueryTableTableConstraintsForeignKeysColumnReferencesToTerraform(struct?: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference | GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referenced_column: cdktf.stringToTerraform(struct!.referencedColumn),
    referencing_column: cdktf.stringToTerraform(struct!.referencingColumn),
  }
}


export function googleBigqueryTableTableConstraintsForeignKeysColumnReferencesToHclTerraform(struct?: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference | GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referenced_column: {
      value: cdktf.stringToHclTerraform(struct!.referencedColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referencing_column: {
      value: cdktf.stringToHclTerraform(struct!.referencingColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referencedColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedColumn = this._referencedColumn;
    }
    if (this._referencingColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencingColumn = this._referencingColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._referencedColumn = undefined;
      this._referencingColumn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._referencedColumn = value.referencedColumn;
      this._referencingColumn = value.referencingColumn;
    }
  }

  // referenced_column - computed: false, optional: false, required: true
  private _referencedColumn?: string; 
  public get referencedColumn() {
    return this.getStringAttribute('referenced_column');
  }
  public set referencedColumn(value: string) {
    this._referencedColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedColumnInput() {
    return this._referencedColumn;
  }

  // referencing_column - computed: false, optional: false, required: true
  private _referencingColumn?: string; 
  public get referencingColumn() {
    return this.getStringAttribute('referencing_column');
  }
  public set referencingColumn(value: string) {
    this._referencingColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencingColumnInput() {
    return this._referencingColumn;
  }
}
export interface GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#dataset_id GoogleBigqueryTable#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#project_id GoogleBigqueryTable#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#table_id GoogleBigqueryTable#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryTableTableConstraintsForeignKeysReferencedTableToTerraform(struct?: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference | GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function googleBigqueryTableTableConstraintsForeignKeysReferencedTableToHclTerraform(struct?: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference | GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
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
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface GoogleBigqueryTableTableConstraintsForeignKeys {
  /**
  * Set only if the foreign key constraint is named.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#name GoogleBigqueryTable#name}
  */
  readonly name?: string;
  /**
  * column_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#column_references GoogleBigqueryTable#column_references}
  */
  readonly columnReferences: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences;
  /**
  * referenced_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#referenced_table GoogleBigqueryTable#referenced_table}
  */
  readonly referencedTable: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable;
}

export function googleBigqueryTableTableConstraintsForeignKeysToTerraform(struct?: GoogleBigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    column_references: googleBigqueryTableTableConstraintsForeignKeysColumnReferencesToTerraform(struct!.columnReferences),
    referenced_table: googleBigqueryTableTableConstraintsForeignKeysReferencedTableToTerraform(struct!.referencedTable),
  }
}


export function googleBigqueryTableTableConstraintsForeignKeysToHclTerraform(struct?: GoogleBigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable): any {
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
    column_references: {
      value: googleBigqueryTableTableConstraintsForeignKeysColumnReferencesToHclTerraform(struct!.columnReferences),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesList",
    },
    referenced_table: {
      value: googleBigqueryTableTableConstraintsForeignKeysReferencedTableToHclTerraform(struct!.referencedTable),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableTableConstraintsForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleBigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columnReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnReferences = this._columnReferences?.internalValue;
    }
    if (this._referencedTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedTable = this._referencedTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._columnReferences.internalValue = undefined;
      this._referencedTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._columnReferences.internalValue = value.columnReferences;
      this._referencedTable.internalValue = value.referencedTable;
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

  // column_references - computed: false, optional: false, required: true
  private _columnReferences = new GoogleBigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(this, "column_references");
  public get columnReferences() {
    return this._columnReferences;
  }
  public putColumnReferences(value: GoogleBigqueryTableTableConstraintsForeignKeysColumnReferences) {
    this._columnReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnReferencesInput() {
    return this._columnReferences.internalValue;
  }

  // referenced_table - computed: false, optional: false, required: true
  private _referencedTable = new GoogleBigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(this, "referenced_table");
  public get referencedTable() {
    return this._referencedTable;
  }
  public putReferencedTable(value: GoogleBigqueryTableTableConstraintsForeignKeysReferencedTable) {
    this._referencedTable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedTableInput() {
    return this._referencedTable.internalValue;
  }
}

export class GoogleBigqueryTableTableConstraintsForeignKeysList extends cdktf.ComplexList {
  public internalValue? : GoogleBigqueryTableTableConstraintsForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): GoogleBigqueryTableTableConstraintsForeignKeysOutputReference {
    return new GoogleBigqueryTableTableConstraintsForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleBigqueryTableTableConstraintsPrimaryKey {
  /**
  * The columns that are composed of the primary key constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#columns GoogleBigqueryTable#columns}
  */
  readonly columns: string[];
}

export function googleBigqueryTableTableConstraintsPrimaryKeyToTerraform(struct?: GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference | GoogleBigqueryTableTableConstraintsPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
  }
}


export function googleBigqueryTableTableConstraintsPrimaryKeyToHclTerraform(struct?: GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference | GoogleBigqueryTableTableConstraintsPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableTableConstraintsPrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTableConstraintsPrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }
}
export interface GoogleBigqueryTableTableConstraints {
  /**
  * foreign_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#foreign_keys GoogleBigqueryTable#foreign_keys}
  */
  readonly foreignKeys?: GoogleBigqueryTableTableConstraintsForeignKeys[] | cdktf.IResolvable;
  /**
  * primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#primary_key GoogleBigqueryTable#primary_key}
  */
  readonly primaryKey?: GoogleBigqueryTableTableConstraintsPrimaryKey;
}

export function googleBigqueryTableTableConstraintsToTerraform(struct?: GoogleBigqueryTableTableConstraintsOutputReference | GoogleBigqueryTableTableConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    foreign_keys: cdktf.listMapper(googleBigqueryTableTableConstraintsForeignKeysToTerraform, true)(struct!.foreignKeys),
    primary_key: googleBigqueryTableTableConstraintsPrimaryKeyToTerraform(struct!.primaryKey),
  }
}


export function googleBigqueryTableTableConstraintsToHclTerraform(struct?: GoogleBigqueryTableTableConstraintsOutputReference | GoogleBigqueryTableTableConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    foreign_keys: {
      value: cdktf.listMapperHcl(googleBigqueryTableTableConstraintsForeignKeysToHclTerraform, true)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableTableConstraintsForeignKeysList",
    },
    primary_key: {
      value: googleBigqueryTableTableConstraintsPrimaryKeyToHclTerraform(struct!.primaryKey),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleBigqueryTableTableConstraintsPrimaryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableTableConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableTableConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._primaryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTableConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._foreignKeys.internalValue = undefined;
      this._primaryKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._primaryKey.internalValue = value.primaryKey;
    }
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new GoogleBigqueryTableTableConstraintsForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: GoogleBigqueryTableTableConstraintsForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey = new GoogleBigqueryTableTableConstraintsPrimaryKeyOutputReference(this, "primary_key");
  public get primaryKey() {
    return this._primaryKey;
  }
  public putPrimaryKey(value: GoogleBigqueryTableTableConstraintsPrimaryKey) {
    this._primaryKey.internalValue = value;
  }
  public resetPrimaryKey() {
    this._primaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey.internalValue;
  }
}
export interface GoogleBigqueryTableTableReplicationInfo {
  /**
  * The interval at which the source materialized view is polled for updates. The default is 300000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#replication_interval_ms GoogleBigqueryTable#replication_interval_ms}
  */
  readonly replicationIntervalMs?: number;
  /**
  * The ID of the source dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#source_dataset_id GoogleBigqueryTable#source_dataset_id}
  */
  readonly sourceDatasetId: string;
  /**
  * The ID of the source project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#source_project_id GoogleBigqueryTable#source_project_id}
  */
  readonly sourceProjectId: string;
  /**
  * The ID of the source materialized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#source_table_id GoogleBigqueryTable#source_table_id}
  */
  readonly sourceTableId: string;
}

export function googleBigqueryTableTableReplicationInfoToTerraform(struct?: GoogleBigqueryTableTableReplicationInfoOutputReference | GoogleBigqueryTableTableReplicationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_interval_ms: cdktf.numberToTerraform(struct!.replicationIntervalMs),
    source_dataset_id: cdktf.stringToTerraform(struct!.sourceDatasetId),
    source_project_id: cdktf.stringToTerraform(struct!.sourceProjectId),
    source_table_id: cdktf.stringToTerraform(struct!.sourceTableId),
  }
}


export function googleBigqueryTableTableReplicationInfoToHclTerraform(struct?: GoogleBigqueryTableTableReplicationInfoOutputReference | GoogleBigqueryTableTableReplicationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.replicationIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDatasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_project_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableTableReplicationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableTableReplicationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationIntervalMs = this._replicationIntervalMs;
    }
    if (this._sourceDatasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDatasetId = this._sourceDatasetId;
    }
    if (this._sourceProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProjectId = this._sourceProjectId;
    }
    if (this._sourceTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTableId = this._sourceTableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTableReplicationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replicationIntervalMs = undefined;
      this._sourceDatasetId = undefined;
      this._sourceProjectId = undefined;
      this._sourceTableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replicationIntervalMs = value.replicationIntervalMs;
      this._sourceDatasetId = value.sourceDatasetId;
      this._sourceProjectId = value.sourceProjectId;
      this._sourceTableId = value.sourceTableId;
    }
  }

  // replication_interval_ms - computed: false, optional: true, required: false
  private _replicationIntervalMs?: number; 
  public get replicationIntervalMs() {
    return this.getNumberAttribute('replication_interval_ms');
  }
  public set replicationIntervalMs(value: number) {
    this._replicationIntervalMs = value;
  }
  public resetReplicationIntervalMs() {
    this._replicationIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationIntervalMsInput() {
    return this._replicationIntervalMs;
  }

  // source_dataset_id - computed: false, optional: false, required: true
  private _sourceDatasetId?: string; 
  public get sourceDatasetId() {
    return this.getStringAttribute('source_dataset_id');
  }
  public set sourceDatasetId(value: string) {
    this._sourceDatasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatasetIdInput() {
    return this._sourceDatasetId;
  }

  // source_project_id - computed: false, optional: false, required: true
  private _sourceProjectId?: string; 
  public get sourceProjectId() {
    return this.getStringAttribute('source_project_id');
  }
  public set sourceProjectId(value: string) {
    this._sourceProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProjectIdInput() {
    return this._sourceProjectId;
  }

  // source_table_id - computed: false, optional: false, required: true
  private _sourceTableId?: string; 
  public get sourceTableId() {
    return this.getStringAttribute('source_table_id');
  }
  public set sourceTableId(value: string) {
    this._sourceTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableIdInput() {
    return this._sourceTableId;
  }
}
export interface GoogleBigqueryTableTimePartitioning {
  /**
  * Number of milliseconds for which to keep the storage for a partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#expiration_ms GoogleBigqueryTable#expiration_ms}
  */
  readonly expirationMs?: number;
  /**
  * The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#field GoogleBigqueryTable#field}
  */
  readonly field?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#require_partition_filter GoogleBigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#type GoogleBigqueryTable#type}
  */
  readonly type: string;
}

export function googleBigqueryTableTimePartitioningToTerraform(struct?: GoogleBigqueryTableTimePartitioningOutputReference | GoogleBigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_ms: cdktf.numberToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleBigqueryTableTimePartitioningToHclTerraform(struct?: GoogleBigqueryTableTimePartitioningOutputReference | GoogleBigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_ms: {
      value: cdktf.numberToHclTerraform(struct!.expirationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_partition_filter: {
      value: cdktf.booleanToHclTerraform(struct!.requirePartitionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GoogleBigqueryTableTimePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableTimePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationMs = this._expirationMs;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableTimePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationMs = undefined;
      this._field = undefined;
      this._requirePartitionFilter = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationMs = value.expirationMs;
      this._field = value.field;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._type = value.type;
    }
  }

  // expiration_ms - computed: true, optional: true, required: false
  private _expirationMs?: number; 
  public get expirationMs() {
    return this.getNumberAttribute('expiration_ms');
  }
  public set expirationMs(value: number) {
    this._expirationMs = value;
  }
  public resetExpirationMs() {
    this._expirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationMsInput() {
    return this._expirationMs;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
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
export interface GoogleBigqueryTableView {
  /**
  * A query that BigQuery executes when the view is referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#query GoogleBigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#use_legacy_sql GoogleBigqueryTable#use_legacy_sql}
  */
  readonly useLegacySql?: boolean | cdktf.IResolvable;
}

export function googleBigqueryTableViewToTerraform(struct?: GoogleBigqueryTableViewOutputReference | GoogleBigqueryTableView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
  }
}


export function googleBigqueryTableViewToHclTerraform(struct?: GoogleBigqueryTableViewOutputReference | GoogleBigqueryTableView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_legacy_sql: {
      value: cdktf.booleanToHclTerraform(struct!.useLegacySql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleBigqueryTableViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryTableView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._useLegacySql !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLegacySql = this._useLegacySql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryTableView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._useLegacySql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._useLegacySql = value.useLegacySql;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // use_legacy_sql - computed: false, optional: true, required: false
  private _useLegacySql?: boolean | cdktf.IResolvable; 
  public get useLegacySql() {
    return this.getBooleanAttribute('use_legacy_sql');
  }
  public set useLegacySql(value: boolean | cdktf.IResolvable) {
    this._useLegacySql = value;
  }
  public resetUseLegacySql() {
    this._useLegacySql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacySqlInput() {
    return this._useLegacySql;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table google_bigquery_table}
*/
export class GoogleBigqueryTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleBigqueryTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleBigqueryTable to import
  * @param importFromId The id of the existing GoogleBigqueryTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleBigqueryTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_bigquery_table google_bigquery_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryTableConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_table',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.26.0',
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
    this._clustering = config.clustering;
    this._datasetId = config.datasetId;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._expirationTime = config.expirationTime;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._labels = config.labels;
    this._maxStaleness = config.maxStaleness;
    this._project = config.project;
    this._requirePartitionFilter = config.requirePartitionFilter;
    this._resourceTags = config.resourceTags;
    this._schema = config.schema;
    this._tableId = config.tableId;
    this._tableMetadataView = config.tableMetadataView;
    this._biglakeConfiguration.internalValue = config.biglakeConfiguration;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._externalCatalogTableOptions.internalValue = config.externalCatalogTableOptions;
    this._externalDataConfiguration.internalValue = config.externalDataConfiguration;
    this._materializedView.internalValue = config.materializedView;
    this._rangePartitioning.internalValue = config.rangePartitioning;
    this._schemaForeignTypeInfo.internalValue = config.schemaForeignTypeInfo;
    this._tableConstraints.internalValue = config.tableConstraints;
    this._tableReplicationInfo.internalValue = config.tableReplicationInfo;
    this._timePartitioning.internalValue = config.timePartitioning;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clustering - computed: false, optional: true, required: false
  private _clustering?: string[]; 
  public get clustering() {
    return this.getListAttribute('clustering');
  }
  public set clustering(value: string[]) {
    this._clustering = value;
  }
  public resetClustering() {
    this._clustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringInput() {
    return this._clustering;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: number; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // max_staleness - computed: true, optional: true, required: false
  private _maxStaleness?: string; 
  public get maxStaleness() {
    return this.getStringAttribute('max_staleness');
  }
  public set maxStaleness(value: string) {
    this._maxStaleness = value;
  }
  public resetMaxStaleness() {
    this._maxStaleness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStalenessInput() {
    return this._maxStaleness;
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_long_term_bytes - computed: true, optional: false, required: false
  public get numLongTermBytes() {
    return this.getNumberAttribute('num_long_term_bytes');
  }

  // num_rows - computed: true, optional: false, required: false
  public get numRows() {
    return this.getNumberAttribute('num_rows');
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

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }

  // table_metadata_view - computed: false, optional: true, required: false
  private _tableMetadataView?: string; 
  public get tableMetadataView() {
    return this.getStringAttribute('table_metadata_view');
  }
  public set tableMetadataView(value: string) {
    this._tableMetadataView = value;
  }
  public resetTableMetadataView() {
    this._tableMetadataView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMetadataViewInput() {
    return this._tableMetadataView;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // biglake_configuration - computed: false, optional: true, required: false
  private _biglakeConfiguration = new GoogleBigqueryTableBiglakeConfigurationOutputReference(this, "biglake_configuration");
  public get biglakeConfiguration() {
    return this._biglakeConfiguration;
  }
  public putBiglakeConfiguration(value: GoogleBigqueryTableBiglakeConfiguration) {
    this._biglakeConfiguration.internalValue = value;
  }
  public resetBiglakeConfiguration() {
    this._biglakeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get biglakeConfigurationInput() {
    return this._biglakeConfiguration.internalValue;
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new GoogleBigqueryTableEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: GoogleBigqueryTableEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // external_catalog_table_options - computed: false, optional: true, required: false
  private _externalCatalogTableOptions = new GoogleBigqueryTableExternalCatalogTableOptionsOutputReference(this, "external_catalog_table_options");
  public get externalCatalogTableOptions() {
    return this._externalCatalogTableOptions;
  }
  public putExternalCatalogTableOptions(value: GoogleBigqueryTableExternalCatalogTableOptions) {
    this._externalCatalogTableOptions.internalValue = value;
  }
  public resetExternalCatalogTableOptions() {
    this._externalCatalogTableOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCatalogTableOptionsInput() {
    return this._externalCatalogTableOptions.internalValue;
  }

  // external_data_configuration - computed: false, optional: true, required: false
  private _externalDataConfiguration = new GoogleBigqueryTableExternalDataConfigurationOutputReference(this, "external_data_configuration");
  public get externalDataConfiguration() {
    return this._externalDataConfiguration;
  }
  public putExternalDataConfiguration(value: GoogleBigqueryTableExternalDataConfiguration) {
    this._externalDataConfiguration.internalValue = value;
  }
  public resetExternalDataConfiguration() {
    this._externalDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataConfigurationInput() {
    return this._externalDataConfiguration.internalValue;
  }

  // materialized_view - computed: false, optional: true, required: false
  private _materializedView = new GoogleBigqueryTableMaterializedViewOutputReference(this, "materialized_view");
  public get materializedView() {
    return this._materializedView;
  }
  public putMaterializedView(value: GoogleBigqueryTableMaterializedView) {
    this._materializedView.internalValue = value;
  }
  public resetMaterializedView() {
    this._materializedView.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView.internalValue;
  }

  // range_partitioning - computed: false, optional: true, required: false
  private _rangePartitioning = new GoogleBigqueryTableRangePartitioningOutputReference(this, "range_partitioning");
  public get rangePartitioning() {
    return this._rangePartitioning;
  }
  public putRangePartitioning(value: GoogleBigqueryTableRangePartitioning) {
    this._rangePartitioning.internalValue = value;
  }
  public resetRangePartitioning() {
    this._rangePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangePartitioningInput() {
    return this._rangePartitioning.internalValue;
  }

  // schema_foreign_type_info - computed: false, optional: true, required: false
  private _schemaForeignTypeInfo = new GoogleBigqueryTableSchemaForeignTypeInfoOutputReference(this, "schema_foreign_type_info");
  public get schemaForeignTypeInfo() {
    return this._schemaForeignTypeInfo;
  }
  public putSchemaForeignTypeInfo(value: GoogleBigqueryTableSchemaForeignTypeInfo) {
    this._schemaForeignTypeInfo.internalValue = value;
  }
  public resetSchemaForeignTypeInfo() {
    this._schemaForeignTypeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaForeignTypeInfoInput() {
    return this._schemaForeignTypeInfo.internalValue;
  }

  // table_constraints - computed: false, optional: true, required: false
  private _tableConstraints = new GoogleBigqueryTableTableConstraintsOutputReference(this, "table_constraints");
  public get tableConstraints() {
    return this._tableConstraints;
  }
  public putTableConstraints(value: GoogleBigqueryTableTableConstraints) {
    this._tableConstraints.internalValue = value;
  }
  public resetTableConstraints() {
    this._tableConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConstraintsInput() {
    return this._tableConstraints.internalValue;
  }

  // table_replication_info - computed: false, optional: true, required: false
  private _tableReplicationInfo = new GoogleBigqueryTableTableReplicationInfoOutputReference(this, "table_replication_info");
  public get tableReplicationInfo() {
    return this._tableReplicationInfo;
  }
  public putTableReplicationInfo(value: GoogleBigqueryTableTableReplicationInfo) {
    this._tableReplicationInfo.internalValue = value;
  }
  public resetTableReplicationInfo() {
    this._tableReplicationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReplicationInfoInput() {
    return this._tableReplicationInfo.internalValue;
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning = new GoogleBigqueryTableTimePartitioningOutputReference(this, "time_partitioning");
  public get timePartitioning() {
    return this._timePartitioning;
  }
  public putTimePartitioning(value: GoogleBigqueryTableTimePartitioning) {
    this._timePartitioning.internalValue = value;
  }
  public resetTimePartitioning() {
    this._timePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningInput() {
    return this._timePartitioning.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new GoogleBigqueryTableViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: GoogleBigqueryTableView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clustering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clustering),
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_staleness: cdktf.stringToTerraform(this._maxStaleness),
      project: cdktf.stringToTerraform(this._project),
      require_partition_filter: cdktf.booleanToTerraform(this._requirePartitionFilter),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      schema: cdktf.stringToTerraform(this._schema),
      table_id: cdktf.stringToTerraform(this._tableId),
      table_metadata_view: cdktf.stringToTerraform(this._tableMetadataView),
      biglake_configuration: googleBigqueryTableBiglakeConfigurationToTerraform(this._biglakeConfiguration.internalValue),
      encryption_configuration: googleBigqueryTableEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      external_catalog_table_options: googleBigqueryTableExternalCatalogTableOptionsToTerraform(this._externalCatalogTableOptions.internalValue),
      external_data_configuration: googleBigqueryTableExternalDataConfigurationToTerraform(this._externalDataConfiguration.internalValue),
      materialized_view: googleBigqueryTableMaterializedViewToTerraform(this._materializedView.internalValue),
      range_partitioning: googleBigqueryTableRangePartitioningToTerraform(this._rangePartitioning.internalValue),
      schema_foreign_type_info: googleBigqueryTableSchemaForeignTypeInfoToTerraform(this._schemaForeignTypeInfo.internalValue),
      table_constraints: googleBigqueryTableTableConstraintsToTerraform(this._tableConstraints.internalValue),
      table_replication_info: googleBigqueryTableTableReplicationInfoToTerraform(this._tableReplicationInfo.internalValue),
      time_partitioning: googleBigqueryTableTimePartitioningToTerraform(this._timePartitioning.internalValue),
      view: googleBigqueryTableViewToTerraform(this._view.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clustering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clustering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration_time: {
        value: cdktf.numberToHclTerraform(this._expirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      max_staleness: {
        value: cdktf.stringToHclTerraform(this._maxStaleness),
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
      require_partition_filter: {
        value: cdktf.booleanToHclTerraform(this._requirePartitionFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_id: {
        value: cdktf.stringToHclTerraform(this._tableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_metadata_view: {
        value: cdktf.stringToHclTerraform(this._tableMetadataView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      biglake_configuration: {
        value: googleBigqueryTableBiglakeConfigurationToHclTerraform(this._biglakeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableBiglakeConfigurationList",
      },
      encryption_configuration: {
        value: googleBigqueryTableEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableEncryptionConfigurationList",
      },
      external_catalog_table_options: {
        value: googleBigqueryTableExternalCatalogTableOptionsToHclTerraform(this._externalCatalogTableOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableExternalCatalogTableOptionsList",
      },
      external_data_configuration: {
        value: googleBigqueryTableExternalDataConfigurationToHclTerraform(this._externalDataConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableExternalDataConfigurationList",
      },
      materialized_view: {
        value: googleBigqueryTableMaterializedViewToHclTerraform(this._materializedView.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableMaterializedViewList",
      },
      range_partitioning: {
        value: googleBigqueryTableRangePartitioningToHclTerraform(this._rangePartitioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableRangePartitioningList",
      },
      schema_foreign_type_info: {
        value: googleBigqueryTableSchemaForeignTypeInfoToHclTerraform(this._schemaForeignTypeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableSchemaForeignTypeInfoList",
      },
      table_constraints: {
        value: googleBigqueryTableTableConstraintsToHclTerraform(this._tableConstraints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableTableConstraintsList",
      },
      table_replication_info: {
        value: googleBigqueryTableTableReplicationInfoToHclTerraform(this._tableReplicationInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableTableReplicationInfoList",
      },
      time_partitioning: {
        value: googleBigqueryTableTimePartitioningToHclTerraform(this._timePartitioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableTimePartitioningList",
      },
      view: {
        value: googleBigqueryTableViewToHclTerraform(this._view.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleBigqueryTableViewList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
