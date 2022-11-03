// https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFirebaseWebAppConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app_config#id DataGoogleFirebaseWebAppConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The project id of the Firebase web App.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app_config#project DataGoogleFirebaseWebAppConfigA#project}
  */
  readonly project?: string;
  /**
  * The id of the Firebase web App.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app_config#web_app_id DataGoogleFirebaseWebAppConfigA#web_app_id}
  */
  readonly webAppId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app_config google_firebase_web_app_config}
*/
export class DataGoogleFirebaseWebAppConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_web_app_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_web_app_config google_firebase_web_app_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFirebaseWebAppConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseWebAppConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_web_app_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.42.1',
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
    this._id = config.id;
    this._project = config.project;
    this._webAppId = config.webAppId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // auth_domain - computed: true, optional: false, required: false
  public get authDomain() {
    return this.getStringAttribute('auth_domain');
  }

  // database_url - computed: true, optional: false, required: false
  public get databaseUrl() {
    return this.getStringAttribute('database_url');
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

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // measurement_id - computed: true, optional: false, required: false
  public get measurementId() {
    return this.getStringAttribute('measurement_id');
  }

  // messaging_sender_id - computed: true, optional: false, required: false
  public get messagingSenderId() {
    return this.getStringAttribute('messaging_sender_id');
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

  // storage_bucket - computed: true, optional: false, required: false
  public get storageBucket() {
    return this.getStringAttribute('storage_bucket');
  }

  // web_app_id - computed: false, optional: false, required: true
  private _webAppId?: string; 
  public get webAppId() {
    return this.getStringAttribute('web_app_id');
  }
  public set webAppId(value: string) {
    this._webAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppIdInput() {
    return this._webAppId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      web_app_id: cdktf.stringToTerraform(this._webAppId),
    };
  }
}
