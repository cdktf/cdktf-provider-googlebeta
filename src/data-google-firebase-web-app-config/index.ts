// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_firebase_web_app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFirebaseWebAppConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The project id of the Firebase web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_firebase_web_app_config#project DataGoogleFirebaseWebAppConfigA#project}
  */
  readonly project?: string;
  /**
  * The id of the Firebase web App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_firebase_web_app_config#web_app_id DataGoogleFirebaseWebAppConfigA#web_app_id}
  */
  readonly webAppId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_firebase_web_app_config google_firebase_web_app_config}
*/
export class DataGoogleFirebaseWebAppConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_web_app_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleFirebaseWebAppConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleFirebaseWebAppConfigA to import
  * @param importFromId The id of the existing DataGoogleFirebaseWebAppConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_firebase_web_app_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleFirebaseWebAppConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_web_app_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/data-sources/google_firebase_web_app_config google_firebase_web_app_config} Data Source
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      project: cdktf.stringToTerraform(this._project),
      web_app_id: cdktf.stringToTerraform(this._webAppId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_app_id: {
        value: cdktf.stringToHclTerraform(this._webAppId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
