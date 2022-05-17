// https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBigqueryDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique ID for this dataset, without the project name. The ID
must contain only letters (a-z, A-Z), numbers (0-9), or
underscores (_). The maximum length is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The default partition expiration for all partitioned tables in
the dataset, in milliseconds.


Once this property is set, all newly-created partitioned tables in
the dataset will have an 'expirationMs' property in the 'timePartitioning'
settings set to this value, and changing the value will only
affect new tables, not existing ones. The storage in a partition will
have an expiration time of its partition time plus this value.
Setting this property overrides the use of 'defaultTableExpirationMs'
for partitioned tables: only one of 'defaultTableExpirationMs' and
'defaultPartitionExpirationMs' will be used for any new partitioned
table. If you provide an explicit 'timePartitioning.expirationMs' when
creating or updating a partitioned table, that value takes precedence
over the default partition expiration time indicated by this property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#default_partition_expiration_ms GoogleBigqueryDataset#default_partition_expiration_ms}
  */
  readonly defaultPartitionExpirationMs?: number;
  /**
  * The default lifetime of all tables in the dataset, in milliseconds.
The minimum value is 3600000 milliseconds (one hour).


Once this property is set, all newly-created tables in the dataset
will have an 'expirationTime' property set to the creation time plus
the value in this property, and changing the value will only affect
new tables, not existing ones. When the 'expirationTime' for a given
table is reached, that table will be deleted automatically.
If a table's 'expirationTime' is modified or removed before the
table expires, or if you provide an explicit 'expirationTime' when
creating a table, that value takes precedence over the default
expiration time indicated by this property.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#default_table_expiration_ms GoogleBigqueryDataset#default_table_expiration_ms}
  */
  readonly defaultTableExpirationMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#delete_contents_on_destroy GoogleBigqueryDataset#delete_contents_on_destroy}
  */
  readonly deleteContentsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * A user-friendly description of the dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#description GoogleBigqueryDataset#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the dataset
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#friendly_name GoogleBigqueryDataset#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The labels associated with this dataset. You can use these to
organize and group your datasets
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#labels GoogleBigqueryDataset#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The geographic location where the dataset should reside.
See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).


There are two types of locations, regional or multi-regional. A regional
location is a specific geographic place, such as Tokyo, and a multi-regional
location is a large geographic area, such as the United States, that
contains at least two geographic places.


The default value is multi-regional location 'US'.
Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#location GoogleBigqueryDataset#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#project GoogleBigqueryDataset#project}
  */
  readonly project?: string;
  /**
  * access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#access GoogleBigqueryDataset#access}
  */
  readonly access?: GoogleBigqueryDatasetAccess[] | cdktf.IResolvable;
  /**
  * default_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#default_encryption_configuration GoogleBigqueryDataset#default_encryption_configuration}
  */
  readonly defaultEncryptionConfiguration?: GoogleBigqueryDatasetDefaultEncryptionConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#timeouts GoogleBigqueryDataset#timeouts}
  */
  readonly timeouts?: GoogleBigqueryDatasetTimeouts;
}
export interface GoogleBigqueryDatasetAccessDatasetDataset {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}
  */
  readonly projectId: string;
}

export function googleBigqueryDatasetAccessDatasetDatasetToTerraform(struct?: GoogleBigqueryDatasetAccessDatasetDatasetOutputReference | GoogleBigqueryDatasetAccessDatasetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class GoogleBigqueryDatasetAccessDatasetDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessDatasetDataset | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatasetAccessDatasetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
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
}
export interface GoogleBigqueryDatasetAccessDataset {
  /**
  * Which resources in the dataset this entry applies to. Currently, only views are supported,
but additional target types may be added in the future. Possible values: VIEWS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#target_types GoogleBigqueryDataset#target_types}
  */
  readonly targetTypes: string[];
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}
  */
  readonly dataset: GoogleBigqueryDatasetAccessDatasetDataset;
}

export function googleBigqueryDatasetAccessDatasetToTerraform(struct?: GoogleBigqueryDatasetAccessDatasetOutputReference | GoogleBigqueryDatasetAccessDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.targetTypes),
    dataset: googleBigqueryDatasetAccessDatasetDatasetToTerraform(struct!.dataset),
  }
}

export class GoogleBigqueryDatasetAccessDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatasetAccessDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetTypes = undefined;
      this._dataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetTypes = value.targetTypes;
      this._dataset.internalValue = value.dataset;
    }
  }

  // target_types - computed: false, optional: false, required: true
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset = new GoogleBigqueryDatasetAccessDatasetDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: GoogleBigqueryDatasetAccessDatasetDataset) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}
export interface GoogleBigqueryDatasetAccessView {
  /**
  * The ID of the dataset containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#dataset_id GoogleBigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#project_id GoogleBigqueryDataset#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#table_id GoogleBigqueryDataset#table_id}
  */
  readonly tableId: string;
}

export function googleBigqueryDatasetAccessViewToTerraform(struct?: GoogleBigqueryDatasetAccessViewOutputReference | GoogleBigqueryDatasetAccessView): any {
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

export class GoogleBigqueryDatasetAccessViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetAccessView | undefined {
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

  public set internalValue(value: GoogleBigqueryDatasetAccessView | undefined) {
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
export interface GoogleBigqueryDatasetAccess {
  /**
  * A domain to grant access to. Any users signed in with the
domain specified will be granted the specified access
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#domain GoogleBigqueryDataset#domain}
  */
  readonly domain?: string;
  /**
  * An email address of a Google Group to grant access to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#group_by_email GoogleBigqueryDataset#group_by_email}
  */
  readonly groupByEmail?: string;
  /**
  * Describes the rights granted to the user specified by the other
member of the access object. Basic, predefined, and custom roles
are supported. Predefined roles that have equivalent basic roles
are swapped by the API to their basic counterparts. See
[official docs](https://cloud.google.com/bigquery/docs/access-control).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#role GoogleBigqueryDataset#role}
  */
  readonly role?: string;
  /**
  * A special group to grant access to. Possible values include:


* 'projectOwners': Owners of the enclosing project.


* 'projectReaders': Readers of the enclosing project.


* 'projectWriters': Writers of the enclosing project.


* 'allAuthenticatedUsers': All authenticated BigQuery users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#special_group GoogleBigqueryDataset#special_group}
  */
  readonly specialGroup?: string;
  /**
  * An email address of a user to grant access to. For example:
fred@example.com
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#user_by_email GoogleBigqueryDataset#user_by_email}
  */
  readonly userByEmail?: string;
  /**
  * dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#dataset GoogleBigqueryDataset#dataset}
  */
  readonly dataset?: GoogleBigqueryDatasetAccessDataset;
  /**
  * view block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#view GoogleBigqueryDataset#view}
  */
  readonly view?: GoogleBigqueryDatasetAccessView;
}

export function googleBigqueryDatasetAccessToTerraform(struct?: GoogleBigqueryDatasetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    group_by_email: cdktf.stringToTerraform(struct!.groupByEmail),
    role: cdktf.stringToTerraform(struct!.role),
    special_group: cdktf.stringToTerraform(struct!.specialGroup),
    user_by_email: cdktf.stringToTerraform(struct!.userByEmail),
    dataset: googleBigqueryDatasetAccessDatasetToTerraform(struct!.dataset),
    view: googleBigqueryDatasetAccessViewToTerraform(struct!.view),
  }
}

export interface GoogleBigqueryDatasetDefaultEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination
BigQuery table. The BigQuery Service Account associated with your project requires
access to this encryption key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#kms_key_name GoogleBigqueryDataset#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function googleBigqueryDatasetDefaultEncryptionConfigurationToTerraform(struct?: GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference | GoogleBigqueryDatasetDefaultEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetDefaultEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBigqueryDatasetDefaultEncryptionConfiguration | undefined) {
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
}
export interface GoogleBigqueryDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#create GoogleBigqueryDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#delete GoogleBigqueryDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset#update GoogleBigqueryDataset#update}
  */
  readonly update?: string;
}

export function googleBigqueryDatasetTimeoutsToTerraform(struct?: GoogleBigqueryDatasetTimeoutsOutputReference | GoogleBigqueryDatasetTimeouts | cdktf.IResolvable): any {
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

export class GoogleBigqueryDatasetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBigqueryDatasetTimeouts | undefined {
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

  public set internalValue(value: GoogleBigqueryDatasetTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset google_bigquery_dataset}
*/
export class GoogleBigqueryDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_dataset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_bigquery_dataset google_bigquery_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBigqueryDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBigqueryDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._datasetId = config.datasetId;
    this._defaultPartitionExpirationMs = config.defaultPartitionExpirationMs;
    this._defaultTableExpirationMs = config.defaultTableExpirationMs;
    this._deleteContentsOnDestroy = config.deleteContentsOnDestroy;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._access = config.access;
    this._defaultEncryptionConfiguration.internalValue = config.defaultEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // default_partition_expiration_ms - computed: false, optional: true, required: false
  private _defaultPartitionExpirationMs?: number; 
  public get defaultPartitionExpirationMs() {
    return this.getNumberAttribute('default_partition_expiration_ms');
  }
  public set defaultPartitionExpirationMs(value: number) {
    this._defaultPartitionExpirationMs = value;
  }
  public resetDefaultPartitionExpirationMs() {
    this._defaultPartitionExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionExpirationMsInput() {
    return this._defaultPartitionExpirationMs;
  }

  // default_table_expiration_ms - computed: false, optional: true, required: false
  private _defaultTableExpirationMs?: number; 
  public get defaultTableExpirationMs() {
    return this.getNumberAttribute('default_table_expiration_ms');
  }
  public set defaultTableExpirationMs(value: number) {
    this._defaultTableExpirationMs = value;
  }
  public resetDefaultTableExpirationMs() {
    this._defaultTableExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTableExpirationMsInput() {
    return this._defaultTableExpirationMs;
  }

  // delete_contents_on_destroy - computed: false, optional: true, required: false
  private _deleteContentsOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteContentsOnDestroy() {
    return this.getBooleanAttribute('delete_contents_on_destroy');
  }
  public set deleteContentsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteContentsOnDestroy = value;
  }
  public resetDeleteContentsOnDestroy() {
    this._deleteContentsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteContentsOnDestroyInput() {
    return this._deleteContentsOnDestroy;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // access - computed: false, optional: true, required: false
  private _access?: GoogleBigqueryDatasetAccess[] | cdktf.IResolvable; 
  public get access() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('access')));
  }
  public set access(value: GoogleBigqueryDatasetAccess[] | cdktf.IResolvable) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // default_encryption_configuration - computed: false, optional: true, required: false
  private _defaultEncryptionConfiguration = new GoogleBigqueryDatasetDefaultEncryptionConfigurationOutputReference(this, "default_encryption_configuration");
  public get defaultEncryptionConfiguration() {
    return this._defaultEncryptionConfiguration;
  }
  public putDefaultEncryptionConfiguration(value: GoogleBigqueryDatasetDefaultEncryptionConfiguration) {
    this._defaultEncryptionConfiguration.internalValue = value;
  }
  public resetDefaultEncryptionConfiguration() {
    this._defaultEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionConfigurationInput() {
    return this._defaultEncryptionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBigqueryDatasetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBigqueryDatasetTimeouts) {
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
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      default_partition_expiration_ms: cdktf.numberToTerraform(this._defaultPartitionExpirationMs),
      default_table_expiration_ms: cdktf.numberToTerraform(this._defaultTableExpirationMs),
      delete_contents_on_destroy: cdktf.booleanToTerraform(this._deleteContentsOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      access: cdktf.listMapper(googleBigqueryDatasetAccessToTerraform)(this._access),
      default_encryption_configuration: googleBigqueryDatasetDefaultEncryptionConfigurationToTerraform(this._defaultEncryptionConfiguration.internalValue),
      timeouts: googleBigqueryDatasetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
