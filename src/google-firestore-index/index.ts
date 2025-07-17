/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleFirestoreIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API scope at which a query is run. Default value: "ANY_API" Possible values: ["ANY_API", "DATASTORE_MODE_API", "MONGODB_COMPATIBLE_API"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#api_scope GoogleFirestoreIndex#api_scope}
  */
  readonly apiScope?: string;
  /**
  * The collection being indexed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#collection GoogleFirestoreIndex#collection}
  */
  readonly collection: string;
  /**
  * The Firestore database id. Defaults to '"(default)"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#database GoogleFirestoreIndex#database}
  */
  readonly database?: string;
  /**
  * The density configuration for this index. Possible values: ["SPARSE_ALL", "SPARSE_ANY", "DENSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#density GoogleFirestoreIndex#density}
  */
  readonly density?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#id GoogleFirestoreIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Whether the index is multikey. By default, the index is not multikey. For non-multikey indexes, none of the paths in the index definition reach or traverse an array, except via an explicit array index. For multikey indexes, at most one of the paths in the index definition reach or traverse an array, except via an explicit array index. Violations will result in errors. Note this field only applies to indexes with MONGODB_COMPATIBLE_API ApiScope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#multikey GoogleFirestoreIndex#multikey}
  */
  readonly multikey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#project GoogleFirestoreIndex#project}
  */
  readonly project?: string;
  /**
  * The scope at which a query is run. Default value: "COLLECTION" Possible values: ["COLLECTION", "COLLECTION_GROUP", "COLLECTION_RECURSIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#query_scope GoogleFirestoreIndex#query_scope}
  */
  readonly queryScope?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#fields GoogleFirestoreIndex#fields}
  */
  readonly fields: GoogleFirestoreIndexFields[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#timeouts GoogleFirestoreIndex#timeouts}
  */
  readonly timeouts?: GoogleFirestoreIndexTimeouts;
}
export interface GoogleFirestoreIndexFieldsVectorConfigFlat {
}

export function googleFirestoreIndexFieldsVectorConfigFlatToTerraform(struct?: GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference | GoogleFirestoreIndexFieldsVectorConfigFlat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleFirestoreIndexFieldsVectorConfigFlatToHclTerraform(struct?: GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference | GoogleFirestoreIndexFieldsVectorConfigFlat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirestoreIndexFieldsVectorConfigFlat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirestoreIndexFieldsVectorConfigFlat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface GoogleFirestoreIndexFieldsVectorConfig {
  /**
  * The resulting index will only include vectors of this dimension, and can be used for vector search
  * with the same dimension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#dimension GoogleFirestoreIndex#dimension}
  */
  readonly dimension?: number;
  /**
  * flat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#flat GoogleFirestoreIndex#flat}
  */
  readonly flat?: GoogleFirestoreIndexFieldsVectorConfigFlat;
}

export function googleFirestoreIndexFieldsVectorConfigToTerraform(struct?: GoogleFirestoreIndexFieldsVectorConfigOutputReference | GoogleFirestoreIndexFieldsVectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimension: cdktf.numberToTerraform(struct!.dimension),
    flat: googleFirestoreIndexFieldsVectorConfigFlatToTerraform(struct!.flat),
  }
}


export function googleFirestoreIndexFieldsVectorConfigToHclTerraform(struct?: GoogleFirestoreIndexFieldsVectorConfigOutputReference | GoogleFirestoreIndexFieldsVectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimension: {
      value: cdktf.numberToHclTerraform(struct!.dimension),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flat: {
      value: googleFirestoreIndexFieldsVectorConfigFlatToHclTerraform(struct!.flat),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirestoreIndexFieldsVectorConfigFlatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirestoreIndexFieldsVectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleFirestoreIndexFieldsVectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimension !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimension = this._dimension;
    }
    if (this._flat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flat = this._flat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirestoreIndexFieldsVectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dimension = undefined;
      this._flat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dimension = value.dimension;
      this._flat.internalValue = value.flat;
    }
  }

  // dimension - computed: false, optional: true, required: false
  private _dimension?: number; 
  public get dimension() {
    return this.getNumberAttribute('dimension');
  }
  public set dimension(value: number) {
    this._dimension = value;
  }
  public resetDimension() {
    this._dimension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionInput() {
    return this._dimension;
  }

  // flat - computed: false, optional: true, required: false
  private _flat = new GoogleFirestoreIndexFieldsVectorConfigFlatOutputReference(this, "flat");
  public get flat() {
    return this._flat;
  }
  public putFlat(value: GoogleFirestoreIndexFieldsVectorConfigFlat) {
    this._flat.internalValue = value;
  }
  public resetFlat() {
    this._flat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatInput() {
    return this._flat.internalValue;
  }
}
export interface GoogleFirestoreIndexFields {
  /**
  * Indicates that this field supports operations on arrayValues. Only one of 'order', 'arrayConfig', and
  * 'vectorConfig' can be specified. Possible values: ["CONTAINS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#array_config GoogleFirestoreIndex#array_config}
  */
  readonly arrayConfig?: string;
  /**
  * Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#field_path GoogleFirestoreIndex#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Indicates that this field supports ordering by the specified order or comparing using =, <, <=, >, >=.
  * Only one of 'order', 'arrayConfig', and 'vectorConfig' can be specified. Possible values: ["ASCENDING", "DESCENDING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#order GoogleFirestoreIndex#order}
  */
  readonly order?: string;
  /**
  * vector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#vector_config GoogleFirestoreIndex#vector_config}
  */
  readonly vectorConfig?: GoogleFirestoreIndexFieldsVectorConfig;
}

export function googleFirestoreIndexFieldsToTerraform(struct?: GoogleFirestoreIndexFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array_config: cdktf.stringToTerraform(struct!.arrayConfig),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    order: cdktf.stringToTerraform(struct!.order),
    vector_config: googleFirestoreIndexFieldsVectorConfigToTerraform(struct!.vectorConfig),
  }
}


export function googleFirestoreIndexFieldsToHclTerraform(struct?: GoogleFirestoreIndexFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array_config: {
      value: cdktf.stringToHclTerraform(struct!.arrayConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.stringToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vector_config: {
      value: googleFirestoreIndexFieldsVectorConfigToHclTerraform(struct!.vectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleFirestoreIndexFieldsVectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirestoreIndexFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GoogleFirestoreIndexFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arrayConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayConfig = this._arrayConfig;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._vectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vectorConfig = this._vectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirestoreIndexFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arrayConfig = undefined;
      this._fieldPath = undefined;
      this._order = undefined;
      this._vectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arrayConfig = value.arrayConfig;
      this._fieldPath = value.fieldPath;
      this._order = value.order;
      this._vectorConfig.internalValue = value.vectorConfig;
    }
  }

  // array_config - computed: false, optional: true, required: false
  private _arrayConfig?: string; 
  public get arrayConfig() {
    return this.getStringAttribute('array_config');
  }
  public set arrayConfig(value: string) {
    this._arrayConfig = value;
  }
  public resetArrayConfig() {
    this._arrayConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayConfigInput() {
    return this._arrayConfig;
  }

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // vector_config - computed: false, optional: true, required: false
  private _vectorConfig = new GoogleFirestoreIndexFieldsVectorConfigOutputReference(this, "vector_config");
  public get vectorConfig() {
    return this._vectorConfig;
  }
  public putVectorConfig(value: GoogleFirestoreIndexFieldsVectorConfig) {
    this._vectorConfig.internalValue = value;
  }
  public resetVectorConfig() {
    this._vectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorConfigInput() {
    return this._vectorConfig.internalValue;
  }
}

export class GoogleFirestoreIndexFieldsList extends cdktf.ComplexList {
  public internalValue? : GoogleFirestoreIndexFields[] | cdktf.IResolvable

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
  public get(index: number): GoogleFirestoreIndexFieldsOutputReference {
    return new GoogleFirestoreIndexFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleFirestoreIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#create GoogleFirestoreIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#delete GoogleFirestoreIndex#delete}
  */
  readonly delete?: string;
}

export function googleFirestoreIndexTimeoutsToTerraform(struct?: GoogleFirestoreIndexTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleFirestoreIndexTimeoutsToHclTerraform(struct?: GoogleFirestoreIndexTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleFirestoreIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleFirestoreIndexTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleFirestoreIndexTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index google_firestore_index}
*/
export class GoogleFirestoreIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firestore_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleFirestoreIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleFirestoreIndex to import
  * @param importFromId The id of the existing GoogleFirestoreIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleFirestoreIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firestore_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.44.0/docs/resources/google_firestore_index google_firestore_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleFirestoreIndexConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleFirestoreIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firestore_index',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.44.0',
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
    this._apiScope = config.apiScope;
    this._collection = config.collection;
    this._database = config.database;
    this._density = config.density;
    this._id = config.id;
    this._multikey = config.multikey;
    this._project = config.project;
    this._queryScope = config.queryScope;
    this._fields.internalValue = config.fields;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_scope - computed: false, optional: true, required: false
  private _apiScope?: string; 
  public get apiScope() {
    return this.getStringAttribute('api_scope');
  }
  public set apiScope(value: string) {
    this._apiScope = value;
  }
  public resetApiScope() {
    this._apiScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiScopeInput() {
    return this._apiScope;
  }

  // collection - computed: false, optional: false, required: true
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // density - computed: true, optional: true, required: false
  private _density?: string; 
  public get density() {
    return this.getStringAttribute('density');
  }
  public set density(value: string) {
    this._density = value;
  }
  public resetDensity() {
    this._density = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get densityInput() {
    return this._density;
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

  // multikey - computed: false, optional: true, required: false
  private _multikey?: boolean | cdktf.IResolvable; 
  public get multikey() {
    return this.getBooleanAttribute('multikey');
  }
  public set multikey(value: boolean | cdktf.IResolvable) {
    this._multikey = value;
  }
  public resetMultikey() {
    this._multikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multikeyInput() {
    return this._multikey;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // query_scope - computed: false, optional: true, required: false
  private _queryScope?: string; 
  public get queryScope() {
    return this.getStringAttribute('query_scope');
  }
  public set queryScope(value: string) {
    this._queryScope = value;
  }
  public resetQueryScope() {
    this._queryScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryScopeInput() {
    return this._queryScope;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new GoogleFirestoreIndexFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: GoogleFirestoreIndexFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleFirestoreIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleFirestoreIndexTimeouts) {
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
      api_scope: cdktf.stringToTerraform(this._apiScope),
      collection: cdktf.stringToTerraform(this._collection),
      database: cdktf.stringToTerraform(this._database),
      density: cdktf.stringToTerraform(this._density),
      id: cdktf.stringToTerraform(this._id),
      multikey: cdktf.booleanToTerraform(this._multikey),
      project: cdktf.stringToTerraform(this._project),
      query_scope: cdktf.stringToTerraform(this._queryScope),
      fields: cdktf.listMapper(googleFirestoreIndexFieldsToTerraform, true)(this._fields.internalValue),
      timeouts: googleFirestoreIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_scope: {
        value: cdktf.stringToHclTerraform(this._apiScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection: {
        value: cdktf.stringToHclTerraform(this._collection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      density: {
        value: cdktf.stringToHclTerraform(this._density),
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
      multikey: {
        value: cdktf.booleanToHclTerraform(this._multikey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_scope: {
        value: cdktf.stringToHclTerraform(this._queryScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(googleFirestoreIndexFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleFirestoreIndexFieldsList",
      },
      timeouts: {
        value: googleFirestoreIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleFirestoreIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
