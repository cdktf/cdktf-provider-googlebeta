// https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_firebase_apple_app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFirebaseAppleAppConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Firebase iOS App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_firebase_apple_app_config#app_id DataGoogleFirebaseAppleAppConfigA#app_id}
  */
  readonly appId: string;
  /**
  * The project id of the Firebase iOS App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_firebase_apple_app_config#project DataGoogleFirebaseAppleAppConfigA#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_firebase_apple_app_config google_firebase_apple_app_config}
*/
export class DataGoogleFirebaseAppleAppConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_apple_app_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.2.0/docs/data-sources/google_firebase_apple_app_config google_firebase_apple_app_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFirebaseAppleAppConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseAppleAppConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_apple_app_config',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '5.2.0',
        providerVersionConstraint: '~> 5.0'
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

  // config_file_contents - computed: true, optional: false, required: false
  public get configFileContents() {
    return this.getStringAttribute('config_file_contents');
  }

  // config_filename - computed: true, optional: false, required: false
  public get configFilename() {
    return this.getStringAttribute('config_filename');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
