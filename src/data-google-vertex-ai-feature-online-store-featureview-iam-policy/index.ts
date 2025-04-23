// https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_online_store DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_online_store}
  */
  readonly featureOnlineStore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy#feature_view DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#feature_view}
  */
  readonly featureView: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy#id DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy#project DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy#region DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy google_vertex_ai_feature_online_store_featureview_iam_policy}
*/
export class DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_feature_online_store_featureview_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy to import
  * @param importFromId The id of the existing DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_feature_online_store_featureview_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.31.0/docs/data-sources/google_vertex_ai_feature_online_store_featureview_iam_policy google_vertex_ai_feature_online_store_featureview_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleVertexAiFeatureOnlineStoreFeatureviewIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_feature_online_store_featureview_iam_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.31.0',
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
    this._featureOnlineStore = config.featureOnlineStore;
    this._featureView = config.featureView;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // feature_online_store - computed: false, optional: false, required: true
  private _featureOnlineStore?: string; 
  public get featureOnlineStore() {
    return this.getStringAttribute('feature_online_store');
  }
  public set featureOnlineStore(value: string) {
    this._featureOnlineStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureOnlineStoreInput() {
    return this._featureOnlineStore;
  }

  // feature_view - computed: false, optional: false, required: true
  private _featureView?: string; 
  public get featureView() {
    return this.getStringAttribute('feature_view');
  }
  public set featureView(value: string) {
    this._featureView = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureViewInput() {
    return this._featureView;
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

  // policy_data - computed: true, optional: false, required: false
  public get policyData() {
    return this.getStringAttribute('policy_data');
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

  // region - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_online_store: cdktf.stringToTerraform(this._featureOnlineStore),
      feature_view: cdktf.stringToTerraform(this._featureView),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_online_store: {
        value: cdktf.stringToHclTerraform(this._featureOnlineStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_view: {
        value: cdktf.stringToHclTerraform(this._featureView),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
