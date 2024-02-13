/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDiscoveryEngineDataStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * The content config of the data store. Possible values: ["NO_CONTENT", "CONTENT_REQUIRED", "PUBLIC_WEBSITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#content_config GoogleDiscoveryEngineDataStore#content_config}
  */
  readonly contentConfig: string;
  /**
  * If true, an advanced data store for site search will be created. If the
  * data store is not configured as site search (GENERIC vertical and
  * PUBLIC_WEBSITE contentConfig), this flag will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#create_advanced_site_search GoogleDiscoveryEngineDataStore#create_advanced_site_search}
  */
  readonly createAdvancedSiteSearch?: boolean | cdktf.IResolvable;
  /**
  * The unique id of the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#data_store_id GoogleDiscoveryEngineDataStore#data_store_id}
  */
  readonly dataStoreId: string;
  /**
  * The display name of the data store. This field must be a UTF-8 encoded
  * string with a length limit of 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#display_name GoogleDiscoveryEngineDataStore#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#id GoogleDiscoveryEngineDataStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The industry vertical that the data store registers. Possible values: ["GENERIC", "MEDIA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#industry_vertical GoogleDiscoveryEngineDataStore#industry_vertical}
  */
  readonly industryVertical: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#location GoogleDiscoveryEngineDataStore#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#project GoogleDiscoveryEngineDataStore#project}
  */
  readonly project?: string;
  /**
  * The solutions that the data store enrolls. Possible values: ["SOLUTION_TYPE_RECOMMENDATION", "SOLUTION_TYPE_SEARCH", "SOLUTION_TYPE_CHAT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#solution_types GoogleDiscoveryEngineDataStore#solution_types}
  */
  readonly solutionTypes?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#timeouts GoogleDiscoveryEngineDataStore#timeouts}
  */
  readonly timeouts?: GoogleDiscoveryEngineDataStoreTimeouts;
}
export interface GoogleDiscoveryEngineDataStoreTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#create GoogleDiscoveryEngineDataStore#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#delete GoogleDiscoveryEngineDataStore#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#update GoogleDiscoveryEngineDataStore#update}
  */
  readonly update?: string;
}

export function googleDiscoveryEngineDataStoreTimeoutsToTerraform(struct?: GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function googleDiscoveryEngineDataStoreTimeoutsToHclTerraform(struct?: GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleDiscoveryEngineDataStoreTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDiscoveryEngineDataStoreTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store google_discovery_engine_data_store}
*/
export class GoogleDiscoveryEngineDataStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_data_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleDiscoveryEngineDataStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleDiscoveryEngineDataStore to import
  * @param importFromId The id of the existing GoogleDiscoveryEngineDataStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleDiscoveryEngineDataStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_data_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.16.0/docs/resources/google_discovery_engine_data_store google_discovery_engine_data_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDiscoveryEngineDataStoreConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDiscoveryEngineDataStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_data_store',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '5.16.0',
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
    this._contentConfig = config.contentConfig;
    this._createAdvancedSiteSearch = config.createAdvancedSiteSearch;
    this._dataStoreId = config.dataStoreId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._industryVertical = config.industryVertical;
    this._location = config.location;
    this._project = config.project;
    this._solutionTypes = config.solutionTypes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_config - computed: false, optional: false, required: true
  private _contentConfig?: string; 
  public get contentConfig() {
    return this.getStringAttribute('content_config');
  }
  public set contentConfig(value: string) {
    this._contentConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentConfigInput() {
    return this._contentConfig;
  }

  // create_advanced_site_search - computed: false, optional: true, required: false
  private _createAdvancedSiteSearch?: boolean | cdktf.IResolvable; 
  public get createAdvancedSiteSearch() {
    return this.getBooleanAttribute('create_advanced_site_search');
  }
  public set createAdvancedSiteSearch(value: boolean | cdktf.IResolvable) {
    this._createAdvancedSiteSearch = value;
  }
  public resetCreateAdvancedSiteSearch() {
    this._createAdvancedSiteSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createAdvancedSiteSearchInput() {
    return this._createAdvancedSiteSearch;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_store_id - computed: false, optional: false, required: true
  private _dataStoreId?: string; 
  public get dataStoreId() {
    return this.getStringAttribute('data_store_id');
  }
  public set dataStoreId(value: string) {
    this._dataStoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreIdInput() {
    return this._dataStoreId;
  }

  // default_schema_id - computed: true, optional: false, required: false
  public get defaultSchemaId() {
    return this.getStringAttribute('default_schema_id');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // industry_vertical - computed: false, optional: false, required: true
  private _industryVertical?: string; 
  public get industryVertical() {
    return this.getStringAttribute('industry_vertical');
  }
  public set industryVertical(value: string) {
    this._industryVertical = value;
  }
  // Temporarily expose input value. Use with caution.
  public get industryVerticalInput() {
    return this._industryVertical;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // solution_types - computed: false, optional: true, required: false
  private _solutionTypes?: string[]; 
  public get solutionTypes() {
    return this.getListAttribute('solution_types');
  }
  public set solutionTypes(value: string[]) {
    this._solutionTypes = value;
  }
  public resetSolutionTypes() {
    this._solutionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solutionTypesInput() {
    return this._solutionTypes;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDiscoveryEngineDataStoreTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDiscoveryEngineDataStoreTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content_config: cdktf.stringToTerraform(this._contentConfig),
      create_advanced_site_search: cdktf.booleanToTerraform(this._createAdvancedSiteSearch),
      data_store_id: cdktf.stringToTerraform(this._dataStoreId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      industry_vertical: cdktf.stringToTerraform(this._industryVertical),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      solution_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._solutionTypes),
      timeouts: googleDiscoveryEngineDataStoreTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content_config: {
        value: cdktf.stringToHclTerraform(this._contentConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_advanced_site_search: {
        value: cdktf.booleanToHclTerraform(this._createAdvancedSiteSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      data_store_id: {
        value: cdktf.stringToHclTerraform(this._dataStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      industry_vertical: {
        value: cdktf.stringToHclTerraform(this._industryVertical),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      solution_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._solutionTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: googleDiscoveryEngineDataStoreTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleDiscoveryEngineDataStoreTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
