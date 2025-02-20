/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleVertexAiFeatureGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the FeatureGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#description GoogleVertexAiFeatureGroup#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#id GoogleVertexAiFeatureGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels with user-defined metadata to organize your FeatureGroup.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#labels GoogleVertexAiFeatureGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name of the Feature Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#name GoogleVertexAiFeatureGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#project GoogleVertexAiFeatureGroup#project}
  */
  readonly project?: string;
  /**
  * The region of feature group. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#region GoogleVertexAiFeatureGroup#region}
  */
  readonly region?: string;
  /**
  * big_query block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#big_query GoogleVertexAiFeatureGroup#big_query}
  */
  readonly bigQuery?: GoogleVertexAiFeatureGroupBigQuery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#timeouts GoogleVertexAiFeatureGroup#timeouts}
  */
  readonly timeouts?: GoogleVertexAiFeatureGroupTimeouts;
}
export interface GoogleVertexAiFeatureGroupBigQueryBigQuerySource {
  /**
  * BigQuery URI to a table, up to 2000 characters long. For example: 'bq://projectId.bqDatasetId.bqTableId.'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#input_uri GoogleVertexAiFeatureGroup#input_uri}
  */
  readonly inputUri: string;
}

export function googleVertexAiFeatureGroupBigQueryBigQuerySourceToTerraform(struct?: GoogleVertexAiFeatureGroupBigQueryBigQuerySourceOutputReference | GoogleVertexAiFeatureGroupBigQueryBigQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_uri: cdktf.stringToTerraform(struct!.inputUri),
  }
}


export function googleVertexAiFeatureGroupBigQueryBigQuerySourceToHclTerraform(struct?: GoogleVertexAiFeatureGroupBigQueryBigQuerySourceOutputReference | GoogleVertexAiFeatureGroupBigQueryBigQuerySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    input_uri: {
      value: cdktf.stringToHclTerraform(struct!.inputUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureGroupBigQueryBigQuerySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureGroupBigQueryBigQuerySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputUri = this._inputUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureGroupBigQueryBigQuerySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputUri = value.inputUri;
    }
  }

  // input_uri - computed: false, optional: false, required: true
  private _inputUri?: string; 
  public get inputUri() {
    return this.getStringAttribute('input_uri');
  }
  public set inputUri(value: string) {
    this._inputUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputUriInput() {
    return this._inputUri;
  }
}
export interface GoogleVertexAiFeatureGroupBigQuery {
  /**
  * Columns to construct entityId / row keys. If not provided defaults to entityId.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#entity_id_columns GoogleVertexAiFeatureGroup#entity_id_columns}
  */
  readonly entityIdColumns?: string[];
  /**
  * big_query_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#big_query_source GoogleVertexAiFeatureGroup#big_query_source}
  */
  readonly bigQuerySource: GoogleVertexAiFeatureGroupBigQueryBigQuerySource;
}

export function googleVertexAiFeatureGroupBigQueryToTerraform(struct?: GoogleVertexAiFeatureGroupBigQueryOutputReference | GoogleVertexAiFeatureGroupBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entity_id_columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entityIdColumns),
    big_query_source: googleVertexAiFeatureGroupBigQueryBigQuerySourceToTerraform(struct!.bigQuerySource),
  }
}


export function googleVertexAiFeatureGroupBigQueryToHclTerraform(struct?: GoogleVertexAiFeatureGroupBigQueryOutputReference | GoogleVertexAiFeatureGroupBigQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entity_id_columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entityIdColumns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    big_query_source: {
      value: googleVertexAiFeatureGroupBigQueryBigQuerySourceToHclTerraform(struct!.bigQuerySource),
      isBlock: true,
      type: "list",
      storageClassType: "GoogleVertexAiFeatureGroupBigQueryBigQuerySourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleVertexAiFeatureGroupBigQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleVertexAiFeatureGroupBigQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityIdColumns !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdColumns = this._entityIdColumns;
    }
    if (this._bigQuerySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQuerySource = this._bigQuerySource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleVertexAiFeatureGroupBigQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entityIdColumns = undefined;
      this._bigQuerySource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entityIdColumns = value.entityIdColumns;
      this._bigQuerySource.internalValue = value.bigQuerySource;
    }
  }

  // entity_id_columns - computed: false, optional: true, required: false
  private _entityIdColumns?: string[]; 
  public get entityIdColumns() {
    return this.getListAttribute('entity_id_columns');
  }
  public set entityIdColumns(value: string[]) {
    this._entityIdColumns = value;
  }
  public resetEntityIdColumns() {
    this._entityIdColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdColumnsInput() {
    return this._entityIdColumns;
  }

  // big_query_source - computed: false, optional: false, required: true
  private _bigQuerySource = new GoogleVertexAiFeatureGroupBigQueryBigQuerySourceOutputReference(this, "big_query_source");
  public get bigQuerySource() {
    return this._bigQuerySource;
  }
  public putBigQuerySource(value: GoogleVertexAiFeatureGroupBigQueryBigQuerySource) {
    this._bigQuerySource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQuerySourceInput() {
    return this._bigQuerySource.internalValue;
  }
}
export interface GoogleVertexAiFeatureGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#create GoogleVertexAiFeatureGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#delete GoogleVertexAiFeatureGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#update GoogleVertexAiFeatureGroup#update}
  */
  readonly update?: string;
}

export function googleVertexAiFeatureGroupTimeoutsToTerraform(struct?: GoogleVertexAiFeatureGroupTimeouts | cdktf.IResolvable): any {
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


export function googleVertexAiFeatureGroupTimeoutsToHclTerraform(struct?: GoogleVertexAiFeatureGroupTimeouts | cdktf.IResolvable): any {
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

export class GoogleVertexAiFeatureGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleVertexAiFeatureGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleVertexAiFeatureGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group google_vertex_ai_feature_group}
*/
export class GoogleVertexAiFeatureGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_feature_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleVertexAiFeatureGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleVertexAiFeatureGroup to import
  * @param importFromId The id of the existing GoogleVertexAiFeatureGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleVertexAiFeatureGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_feature_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_vertex_ai_feature_group google_vertex_ai_feature_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleVertexAiFeatureGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GoogleVertexAiFeatureGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_feature_group',
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
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._bigQuery.internalValue = config.bigQuery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // region - computed: false, optional: true, required: false
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // big_query - computed: false, optional: true, required: false
  private _bigQuery = new GoogleVertexAiFeatureGroupBigQueryOutputReference(this, "big_query");
  public get bigQuery() {
    return this._bigQuery;
  }
  public putBigQuery(value: GoogleVertexAiFeatureGroupBigQuery) {
    this._bigQuery.internalValue = value;
  }
  public resetBigQuery() {
    this._bigQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryInput() {
    return this._bigQuery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleVertexAiFeatureGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleVertexAiFeatureGroupTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      big_query: googleVertexAiFeatureGroupBigQueryToTerraform(this._bigQuery.internalValue),
      timeouts: googleVertexAiFeatureGroupTimeoutsToTerraform(this._timeouts.internalValue),
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
      big_query: {
        value: googleVertexAiFeatureGroupBigQueryToHclTerraform(this._bigQuery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleVertexAiFeatureGroupBigQueryList",
      },
      timeouts: {
        value: googleVertexAiFeatureGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleVertexAiFeatureGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
