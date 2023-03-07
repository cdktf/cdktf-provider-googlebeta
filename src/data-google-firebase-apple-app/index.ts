// https://www.terraform.io/docs/providers/google-beta/d/google_firebase_apple_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFirebaseAppleAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * The globally unique, Firebase-assigned identifier of the App.
This identifier should be treated as an opaque token, as the data format is not specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_apple_app#app_id DataGoogleFirebaseAppleApp#app_id}
  */
  readonly appId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_apple_app#id DataGoogleFirebaseAppleApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_apple_app google_firebase_apple_app}
*/
export class DataGoogleFirebaseAppleApp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_apple_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/d/google_firebase_apple_app google_firebase_apple_app} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFirebaseAppleAppConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseAppleAppConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_apple_app',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.56.0',
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

  // app_store_id - computed: true, optional: false, required: false
  public get appStoreId() {
    return this.getStringAttribute('app_store_id');
  }

  // bundle_id - computed: true, optional: false, required: false
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
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

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // team_id - computed: true, optional: false, required: false
  public get teamId() {
    return this.getStringAttribute('team_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktf.stringToTerraform(this._appId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
