/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleWorkstationsWorkstationIamPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#id GoogleWorkstationsWorkstationIamPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#location GoogleWorkstationsWorkstationIamPolicy#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#policy_data GoogleWorkstationsWorkstationIamPolicy#policy_data}
  */
  readonly policyData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#project GoogleWorkstationsWorkstationIamPolicy#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#workstation_cluster_id GoogleWorkstationsWorkstationIamPolicy#workstation_cluster_id}
  */
  readonly workstationClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#workstation_config_id GoogleWorkstationsWorkstationIamPolicy#workstation_config_id}
  */
  readonly workstationConfigId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#workstation_id GoogleWorkstationsWorkstationIamPolicy#workstation_id}
  */
  readonly workstationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy google_workstations_workstation_iam_policy}
*/
export class GoogleWorkstationsWorkstationIamPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_workstations_workstation_iam_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleWorkstationsWorkstationIamPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleWorkstationsWorkstationIamPolicy to import
  * @param importFromId The id of the existing GoogleWorkstationsWorkstationIamPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleWorkstationsWorkstationIamPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_workstations_workstation_iam_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_workstations_workstation_iam_policy google_workstations_workstation_iam_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleWorkstationsWorkstationIamPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleWorkstationsWorkstationIamPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_workstations_workstation_iam_policy',
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
    this._id = config.id;
    this._location = config.location;
    this._policyData = config.policyData;
    this._project = config.project;
    this._workstationClusterId = config.workstationClusterId;
    this._workstationConfigId = config.workstationConfigId;
    this._workstationId = config.workstationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // location - computed: true, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // policy_data - computed: false, optional: false, required: true
  private _policyData?: string; 
  public get policyData() {
    return this.getStringAttribute('policy_data');
  }
  public set policyData(value: string) {
    this._policyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDataInput() {
    return this._policyData;
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

  // workstation_cluster_id - computed: false, optional: false, required: true
  private _workstationClusterId?: string; 
  public get workstationClusterId() {
    return this.getStringAttribute('workstation_cluster_id');
  }
  public set workstationClusterId(value: string) {
    this._workstationClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationClusterIdInput() {
    return this._workstationClusterId;
  }

  // workstation_config_id - computed: false, optional: false, required: true
  private _workstationConfigId?: string; 
  public get workstationConfigId() {
    return this.getStringAttribute('workstation_config_id');
  }
  public set workstationConfigId(value: string) {
    this._workstationConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationConfigIdInput() {
    return this._workstationConfigId;
  }

  // workstation_id - computed: false, optional: false, required: true
  private _workstationId?: string; 
  public get workstationId() {
    return this.getStringAttribute('workstation_id');
  }
  public set workstationId(value: string) {
    this._workstationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workstationIdInput() {
    return this._workstationId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      policy_data: cdktf.stringToTerraform(this._policyData),
      project: cdktf.stringToTerraform(this._project),
      workstation_cluster_id: cdktf.stringToTerraform(this._workstationClusterId),
      workstation_config_id: cdktf.stringToTerraform(this._workstationConfigId),
      workstation_id: cdktf.stringToTerraform(this._workstationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_data: {
        value: cdktf.stringToHclTerraform(this._policyData),
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
      workstation_cluster_id: {
        value: cdktf.stringToHclTerraform(this._workstationClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workstation_config_id: {
        value: cdktf.stringToHclTerraform(this._workstationConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workstation_id: {
        value: cdktf.stringToHclTerraform(this._workstationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
