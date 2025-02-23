// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDataLossPreventionStoredInfoTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the info type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#description GoogleDataLossPreventionStoredInfoType#description}
  */
  readonly description?: string;
  /**
  * User set display name of the info type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#display_name GoogleDataLossPreventionStoredInfoType#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#id GoogleDataLossPreventionStoredInfoType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the info type in any of the following formats:
  * 
  * * 'projects/{{project}}'
  * * 'projects/{{project}}/locations/{{location}}'
  * * 'organizations/{{organization_id}}'
  * * 'organizations/{{organization_id}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#parent GoogleDataLossPreventionStoredInfoType#parent}
  */
  readonly parent: string;
  /**
  * The storedInfoType ID can contain uppercase and lowercase letters, numbers, and hyphens;
  * that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is 100
  * characters. Can be empty to allow the system to generate one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#stored_info_type_id GoogleDataLossPreventionStoredInfoType#stored_info_type_id}
  */
  readonly storedInfoTypeId?: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#dictionary GoogleDataLossPreventionStoredInfoType#dictionary}
  */
  readonly dictionary?: GoogleDataLossPreventionStoredInfoTypeDictionary;
  /**
  * large_custom_dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#large_custom_dictionary GoogleDataLossPreventionStoredInfoType#large_custom_dictionary}
  */
  readonly largeCustomDictionary?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#regex GoogleDataLossPreventionStoredInfoType#regex}
  */
  readonly regex?: GoogleDataLossPreventionStoredInfoTypeRegex;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#timeouts GoogleDataLossPreventionStoredInfoType#timeouts}
  */
  readonly timeouts?: GoogleDataLossPreventionStoredInfoTypeTimeouts;
}
export interface GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#path GoogleDataLossPreventionStoredInfoType#path}
  */
  readonly path: string;
}

export function googleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference | GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function googleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference | GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
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
}
export interface GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#words GoogleDataLossPreventionStoredInfoType#words}
  */
  readonly words: string[];
}

export function googleDataLossPreventionStoredInfoTypeDictionaryWordListStructToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference | GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function googleDataLossPreventionStoredInfoTypeDictionaryWordListStructToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference | GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface GoogleDataLossPreventionStoredInfoTypeDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#cloud_storage_path GoogleDataLossPreventionStoredInfoType#cloud_storage_path}
  */
  readonly cloudStoragePath?: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#word_list GoogleDataLossPreventionStoredInfoType#word_list}
  */
  readonly wordList?: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct;
}

export function googleDataLossPreventionStoredInfoTypeDictionaryToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference | GoogleDataLossPreventionStoredInfoTypeDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: googleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: googleDataLossPreventionStoredInfoTypeDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function googleDataLossPreventionStoredInfoTypeDictionaryToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference | GoogleDataLossPreventionStoredInfoTypeDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: googleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathList",
    },
    word_list: {
      value: googleDataLossPreventionStoredInfoTypeDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: GoogleDataLossPreventionStoredInfoTypeDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: GoogleDataLossPreventionStoredInfoTypeDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#name GoogleDataLossPreventionStoredInfoType#name}
  */
  readonly name: string;
}

export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable {
  /**
  * The dataset ID of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#dataset_id GoogleDataLossPreventionStoredInfoType#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#project_id GoogleDataLossPreventionStoredInfoType#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#table_id GoogleDataLossPreventionStoredInfoType#table_id}
  */
  readonly tableId: string;
}

export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable): any {
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


export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable): any {
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

export class GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable | undefined) {
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
export interface GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField {
  /**
  * field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#field GoogleDataLossPreventionStoredInfoType#field}
  */
  readonly field: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#table GoogleDataLossPreventionStoredInfoType#table}
  */
  readonly table: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable;
}

export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToTerraform(struct!.field),
    table: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToTerraform(struct!.table),
  }
}


export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldToHclTerraform(struct!.field),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldList",
    },
    table: {
      value: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field?.internalValue;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field.internalValue = undefined;
      this._table.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field.internalValue = value.field;
      this._table.internalValue = value.table;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field = new GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldFieldOutputReference(this, "field");
  public get field() {
    return this._field;
  }
  public putField(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldField) {
    this._field.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field.internalValue;
  }

  // table - computed: false, optional: false, required: true
  private _table = new GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldTable) {
    this._table.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}
export interface GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet {
  /**
  * The url, in the format 'gs://<bucket>/<path>'. Trailing wildcard in the path is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#url GoogleDataLossPreventionStoredInfoType#url}
  */
  readonly url: string;
}

export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet): any {
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

export class GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
    }
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
export interface GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#path GoogleDataLossPreventionStoredInfoType#path}
  */
  readonly path: string;
}

export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
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
}
export interface GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary {
  /**
  * big_query_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#big_query_field GoogleDataLossPreventionStoredInfoType#big_query_field}
  */
  readonly bigQueryField?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField;
  /**
  * cloud_storage_file_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#cloud_storage_file_set GoogleDataLossPreventionStoredInfoType#cloud_storage_file_set}
  */
  readonly cloudStorageFileSet?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet;
  /**
  * output_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#output_path GoogleDataLossPreventionStoredInfoType#output_path}
  */
  readonly outputPath: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath;
}

export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_field: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToTerraform(struct!.bigQueryField),
    cloud_storage_file_set: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToTerraform(struct!.cloudStorageFileSet),
    output_path: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToTerraform(struct!.outputPath),
  }
}


export function googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference | GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    big_query_field: {
      value: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldToHclTerraform(struct!.bigQueryField),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldList",
    },
    cloud_storage_file_set: {
      value: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetToHclTerraform(struct!.cloudStorageFileSet),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetList",
    },
    output_path: {
      value: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathToHclTerraform(struct!.outputPath),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryField = this._bigQueryField?.internalValue;
    }
    if (this._cloudStorageFileSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageFileSet = this._cloudStorageFileSet?.internalValue;
    }
    if (this._outputPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPath = this._outputPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryField.internalValue = undefined;
      this._cloudStorageFileSet.internalValue = undefined;
      this._outputPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryField.internalValue = value.bigQueryField;
      this._cloudStorageFileSet.internalValue = value.cloudStorageFileSet;
      this._outputPath.internalValue = value.outputPath;
    }
  }

  // big_query_field - computed: false, optional: true, required: false
  private _bigQueryField = new GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryFieldOutputReference(this, "big_query_field");
  public get bigQueryField() {
    return this._bigQueryField;
  }
  public putBigQueryField(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryBigQueryField) {
    this._bigQueryField.internalValue = value;
  }
  public resetBigQueryField() {
    this._bigQueryField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryFieldInput() {
    return this._bigQueryField.internalValue;
  }

  // cloud_storage_file_set - computed: false, optional: true, required: false
  private _cloudStorageFileSet = new GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSetOutputReference(this, "cloud_storage_file_set");
  public get cloudStorageFileSet() {
    return this._cloudStorageFileSet;
  }
  public putCloudStorageFileSet(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryCloudStorageFileSet) {
    this._cloudStorageFileSet.internalValue = value;
  }
  public resetCloudStorageFileSet() {
    this._cloudStorageFileSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageFileSetInput() {
    return this._cloudStorageFileSet.internalValue;
  }

  // output_path - computed: false, optional: false, required: true
  private _outputPath = new GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPathOutputReference(this, "output_path");
  public get outputPath() {
    return this._outputPath;
  }
  public putOutputPath(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputPath) {
    this._outputPath.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPathInput() {
    return this._outputPath.internalValue;
  }
}
export interface GoogleDataLossPreventionStoredInfoTypeRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#group_indexes GoogleDataLossPreventionStoredInfoType#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#pattern GoogleDataLossPreventionStoredInfoType#pattern}
  */
  readonly pattern: string;
}

export function googleDataLossPreventionStoredInfoTypeRegexToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeRegexOutputReference | GoogleDataLossPreventionStoredInfoTypeRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function googleDataLossPreventionStoredInfoTypeRegexToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeRegexOutputReference | GoogleDataLossPreventionStoredInfoTypeRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDataLossPreventionStoredInfoTypeRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface GoogleDataLossPreventionStoredInfoTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#create GoogleDataLossPreventionStoredInfoType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#delete GoogleDataLossPreventionStoredInfoType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#update GoogleDataLossPreventionStoredInfoType#update}
  */
  readonly update?: string;
}

export function googleDataLossPreventionStoredInfoTypeTimeoutsToTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable): any {
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


export function googleDataLossPreventionStoredInfoTypeTimeoutsToHclTerraform(struct?: GoogleDataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable): any {
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

export class GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleDataLossPreventionStoredInfoTypeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type}
*/
export class GoogleDataLossPreventionStoredInfoType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_stored_info_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDataLossPreventionStoredInfoType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDataLossPreventionStoredInfoType to import
  * @param importFromId The id of the existing GoogleDataLossPreventionStoredInfoType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDataLossPreventionStoredInfoType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_stored_info_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_data_loss_prevention_stored_info_type google_data_loss_prevention_stored_info_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDataLossPreventionStoredInfoTypeConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDataLossPreventionStoredInfoTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_stored_info_type',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.21.0',
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
    this._parent = config.parent;
    this._storedInfoTypeId = config.storedInfoTypeId;
    this._dictionary.internalValue = config.dictionary;
    this._largeCustomDictionary.internalValue = config.largeCustomDictionary;
    this._regex.internalValue = config.regex;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // stored_info_type_id - computed: true, optional: true, required: false
  private _storedInfoTypeId?: string; 
  public get storedInfoTypeId() {
    return this.getStringAttribute('stored_info_type_id');
  }
  public set storedInfoTypeId(value: string) {
    this._storedInfoTypeId = value;
  }
  public resetStoredInfoTypeId() {
    this._storedInfoTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedInfoTypeIdInput() {
    return this._storedInfoTypeId;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new GoogleDataLossPreventionStoredInfoTypeDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: GoogleDataLossPreventionStoredInfoTypeDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // large_custom_dictionary - computed: false, optional: true, required: false
  private _largeCustomDictionary = new GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryOutputReference(this, "large_custom_dictionary");
  public get largeCustomDictionary() {
    return this._largeCustomDictionary;
  }
  public putLargeCustomDictionary(value: GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionary) {
    this._largeCustomDictionary.internalValue = value;
  }
  public resetLargeCustomDictionary() {
    this._largeCustomDictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCustomDictionaryInput() {
    return this._largeCustomDictionary.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new GoogleDataLossPreventionStoredInfoTypeRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: GoogleDataLossPreventionStoredInfoTypeRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDataLossPreventionStoredInfoTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDataLossPreventionStoredInfoTypeTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      stored_info_type_id: cdktf.stringToTerraform(this._storedInfoTypeId),
      dictionary: googleDataLossPreventionStoredInfoTypeDictionaryToTerraform(this._dictionary.internalValue),
      large_custom_dictionary: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryToTerraform(this._largeCustomDictionary.internalValue),
      regex: googleDataLossPreventionStoredInfoTypeRegexToTerraform(this._regex.internalValue),
      timeouts: googleDataLossPreventionStoredInfoTypeTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stored_info_type_id: {
        value: cdktf.stringToHclTerraform(this._storedInfoTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dictionary: {
        value: googleDataLossPreventionStoredInfoTypeDictionaryToHclTerraform(this._dictionary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionStoredInfoTypeDictionaryList",
      },
      large_custom_dictionary: {
        value: googleDataLossPreventionStoredInfoTypeLargeCustomDictionaryToHclTerraform(this._largeCustomDictionary.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionStoredInfoTypeLargeCustomDictionaryList",
      },
      regex: {
        value: googleDataLossPreventionStoredInfoTypeRegexToHclTerraform(this._regex.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleDataLossPreventionStoredInfoTypeRegexList",
      },
      timeouts: {
        value: googleDataLossPreventionStoredInfoTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDataLossPreventionStoredInfoTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
