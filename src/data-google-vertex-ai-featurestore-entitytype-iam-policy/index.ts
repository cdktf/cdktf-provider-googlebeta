// https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#entitytype DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#entitytype}
  */
  readonly entitytype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#featurestore DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#featurestore}
  */
  readonly featurestore: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy#id DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy google_vertex_ai_featurestore_entitytype_iam_policy}
*/
export class DataGoogleVertexAiFeaturestoreEntitytypeIamPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_featurestore_entitytype_iam_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.81.0/docs/data-sources/google_vertex_ai_featurestore_entitytype_iam_policy google_vertex_ai_featurestore_entitytype_iam_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleVertexAiFeaturestoreEntitytypeIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_featurestore_entitytype_iam_policy',
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
    this._entitytype = config.entitytype;
    this._featurestore = config.featurestore;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entitytype - computed: false, optional: false, required: true
  private _entitytype?: string; 
  public get entitytype() {
    return this.getStringAttribute('entitytype');
  }
  public set entitytype(value: string) {
    this._entitytype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entitytypeInput() {
    return this._entitytype;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // featurestore - computed: false, optional: false, required: true
  private _featurestore?: string; 
  public get featurestore() {
    return this.getStringAttribute('featurestore');
  }
  public set featurestore(value: string) {
    this._featurestore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featurestoreInput() {
    return this._featurestore;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entitytype: cdktf.stringToTerraform(this._entitytype),
      featurestore: cdktf.stringToTerraform(this._featurestore),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
