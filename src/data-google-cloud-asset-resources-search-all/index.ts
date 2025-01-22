// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudAssetResourcesSearchAllConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all#asset_types DataGoogleCloudAssetResourcesSearchAll#asset_types}
  */
  readonly assetTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all#id DataGoogleCloudAssetResourcesSearchAll#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all#query DataGoogleCloudAssetResourcesSearchAll#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all#scope DataGoogleCloudAssetResourcesSearchAll#scope}
  */
  readonly scope: string;
}
export interface DataGoogleCloudAssetResourcesSearchAllResults {
}

export function dataGoogleCloudAssetResourcesSearchAllResultsToTerraform(struct?: DataGoogleCloudAssetResourcesSearchAllResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudAssetResourcesSearchAllResultsToHclTerraform(struct?: DataGoogleCloudAssetResourcesSearchAllResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudAssetResourcesSearchAllResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleCloudAssetResourcesSearchAllResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudAssetResourcesSearchAllResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_attributes - computed: true, optional: false, required: false
  public get additionalAttributes() {
    return this.getListAttribute('additional_attributes');
  }

  // asset_type - computed: true, optional: false, required: false
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_tags - computed: true, optional: false, required: false
  public get networkTags() {
    return this.getListAttribute('network_tags');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataGoogleCloudAssetResourcesSearchAllResultsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudAssetResourcesSearchAllResultsOutputReference {
    return new DataGoogleCloudAssetResourcesSearchAllResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all google_cloud_asset_resources_search_all}
*/
export class DataGoogleCloudAssetResourcesSearchAll extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_asset_resources_search_all";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleCloudAssetResourcesSearchAll resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleCloudAssetResourcesSearchAll to import
  * @param importFromId The id of the existing DataGoogleCloudAssetResourcesSearchAll that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleCloudAssetResourcesSearchAll to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_asset_resources_search_all", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_cloud_asset_resources_search_all google_cloud_asset_resources_search_all} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudAssetResourcesSearchAllConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudAssetResourcesSearchAllConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_asset_resources_search_all',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.17.0',
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
    this._assetTypes = config.assetTypes;
    this._id = config.id;
    this._query = config.query;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_types - computed: false, optional: true, required: false
  private _assetTypes?: string[]; 
  public get assetTypes() {
    return this.getListAttribute('asset_types');
  }
  public set assetTypes(value: string[]) {
    this._assetTypes = value;
  }
  public resetAssetTypes() {
    this._assetTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypesInput() {
    return this._assetTypes;
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

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataGoogleCloudAssetResourcesSearchAllResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asset_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assetTypes),
      id: cdktf.stringToTerraform(this._id),
      query: cdktf.stringToTerraform(this._query),
      scope: cdktf.stringToTerraform(this._scope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assetTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
