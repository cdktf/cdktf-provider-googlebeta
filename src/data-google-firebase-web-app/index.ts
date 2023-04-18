// https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFirebaseWebAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The globally unique, Firebase-assigned identifier of the App.
This identifier should be treated as an opaque token, as the data format is not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app#app_id DataGoogleFirebaseWebApp#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app#id DataGoogleFirebaseWebApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app#project DataGoogleFirebaseWebApp#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app google_firebase_web_app}
*/
export class DataGoogleFirebaseWebApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_web_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app google_firebase_web_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFirebaseWebAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseWebAppConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_web_app',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.62.0',
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
    this._appId = config.appId;
    this._id = config.id;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // app_urls - computed: true, optional: false, required: false
  public get appUrls() {
    return this.getListAttribute('app_urls');
  }

  // deletion_policy - computed: true, optional: false, required: false
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // project - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
