/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleFirebaseAndroidAppConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Firebase Android App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#app_id DataGoogleFirebaseAndroidAppConfigA#app_id}
  */
  readonly appId: string;
  /**
  * The project id of the Firebase Android App.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#project DataGoogleFirebaseAndroidAppConfigA#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config google_firebase_android_app_config}
*/
export class DataGoogleFirebaseAndroidAppConfigA extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_firebase_android_app_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleFirebaseAndroidAppConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleFirebaseAndroidAppConfigA to import
  * @param importFromId The id of the existing DataGoogleFirebaseAndroidAppConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleFirebaseAndroidAppConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_firebase_android_app_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_firebase_android_app_config google_firebase_android_app_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleFirebaseAndroidAppConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleFirebaseAndroidAppConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'google_firebase_android_app_config',
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

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktf.stringToHclTerraform(this._appId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
