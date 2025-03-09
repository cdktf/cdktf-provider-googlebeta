// https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleAppEngineDomainMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Relative name of the domain serving the application. Example: example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#domain_name GoogleAppEngineDomainMapping#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#id GoogleAppEngineDomainMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the domain creation should override any existing mappings for this domain.
  * By default, overrides are rejected. Default value: "STRICT" Possible values: ["STRICT", "OVERRIDE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#override_strategy GoogleAppEngineDomainMapping#override_strategy}
  */
  readonly overrideStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#project GoogleAppEngineDomainMapping#project}
  */
  readonly project?: string;
  /**
  * ssl_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#ssl_settings GoogleAppEngineDomainMapping#ssl_settings}
  */
  readonly sslSettings?: GoogleAppEngineDomainMappingSslSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#timeouts GoogleAppEngineDomainMapping#timeouts}
  */
  readonly timeouts?: GoogleAppEngineDomainMappingTimeouts;
}
export interface GoogleAppEngineDomainMappingResourceRecords {
}

export function googleAppEngineDomainMappingResourceRecordsToTerraform(struct?: GoogleAppEngineDomainMappingResourceRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function googleAppEngineDomainMappingResourceRecordsToHclTerraform(struct?: GoogleAppEngineDomainMappingResourceRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GoogleAppEngineDomainMappingResourceRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GoogleAppEngineDomainMappingResourceRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineDomainMappingResourceRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rrdata - computed: true, optional: false, required: false
  public get rrdata() {
    return this.getStringAttribute('rrdata');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GoogleAppEngineDomainMappingResourceRecordsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GoogleAppEngineDomainMappingResourceRecordsOutputReference {
    return new GoogleAppEngineDomainMappingResourceRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GoogleAppEngineDomainMappingSslSettings {
  /**
  * ID of the AuthorizedCertificate resource configuring SSL for the application. Clearing this field will
  * remove SSL support.
  * By default, a managed certificate is automatically created for every domain mapping. To omit SSL support
  * or to configure SSL manually, specify 'SslManagementType.MANUAL' on a 'CREATE' or 'UPDATE' request. You must be
  * authorized to administer the 'AuthorizedCertificate' resource to manually map it to a DomainMapping resource.
  * Example: 12345.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#certificate_id GoogleAppEngineDomainMapping#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * SSL management type for this domain. If 'AUTOMATIC', a managed certificate is automatically provisioned.
  * If 'MANUAL', 'certificateId' must be manually specified in order to configure SSL for this domain. Possible values: ["AUTOMATIC", "MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#ssl_management_type GoogleAppEngineDomainMapping#ssl_management_type}
  */
  readonly sslManagementType: string;
}

export function googleAppEngineDomainMappingSslSettingsToTerraform(struct?: GoogleAppEngineDomainMappingSslSettingsOutputReference | GoogleAppEngineDomainMappingSslSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    ssl_management_type: cdktf.stringToTerraform(struct!.sslManagementType),
  }
}


export function googleAppEngineDomainMappingSslSettingsToHclTerraform(struct?: GoogleAppEngineDomainMappingSslSettingsOutputReference | GoogleAppEngineDomainMappingSslSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_management_type: {
      value: cdktf.stringToHclTerraform(struct!.sslManagementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleAppEngineDomainMappingSslSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleAppEngineDomainMappingSslSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._sslManagementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslManagementType = this._sslManagementType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleAppEngineDomainMappingSslSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateId = undefined;
      this._sslManagementType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateId = value.certificateId;
      this._sslManagementType = value.sslManagementType;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // pending_managed_certificate_id - computed: true, optional: false, required: false
  public get pendingManagedCertificateId() {
    return this.getStringAttribute('pending_managed_certificate_id');
  }

  // ssl_management_type - computed: false, optional: false, required: true
  private _sslManagementType?: string; 
  public get sslManagementType() {
    return this.getStringAttribute('ssl_management_type');
  }
  public set sslManagementType(value: string) {
    this._sslManagementType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslManagementTypeInput() {
    return this._sslManagementType;
  }
}
export interface GoogleAppEngineDomainMappingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#create GoogleAppEngineDomainMapping#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#delete GoogleAppEngineDomainMapping#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#update GoogleAppEngineDomainMapping#update}
  */
  readonly update?: string;
}

export function googleAppEngineDomainMappingTimeoutsToTerraform(struct?: GoogleAppEngineDomainMappingTimeouts | cdktf.IResolvable): any {
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


export function googleAppEngineDomainMappingTimeoutsToHclTerraform(struct?: GoogleAppEngineDomainMappingTimeouts | cdktf.IResolvable): any {
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

export class GoogleAppEngineDomainMappingTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleAppEngineDomainMappingTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleAppEngineDomainMappingTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping google_app_engine_domain_mapping}
*/
export class GoogleAppEngineDomainMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_app_engine_domain_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleAppEngineDomainMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleAppEngineDomainMapping to import
  * @param importFromId The id of the existing GoogleAppEngineDomainMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleAppEngineDomainMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_app_engine_domain_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_domain_mapping google_app_engine_domain_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleAppEngineDomainMappingConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleAppEngineDomainMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_domain_mapping',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.24.0',
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
    this._domainName = config.domainName;
    this._id = config.id;
    this._overrideStrategy = config.overrideStrategy;
    this._project = config.project;
    this._sslSettings.internalValue = config.sslSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // override_strategy - computed: false, optional: true, required: false
  private _overrideStrategy?: string; 
  public get overrideStrategy() {
    return this.getStringAttribute('override_strategy');
  }
  public set overrideStrategy(value: string) {
    this._overrideStrategy = value;
  }
  public resetOverrideStrategy() {
    this._overrideStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideStrategyInput() {
    return this._overrideStrategy;
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

  // resource_records - computed: true, optional: false, required: false
  private _resourceRecords = new GoogleAppEngineDomainMappingResourceRecordsList(this, "resource_records", false);
  public get resourceRecords() {
    return this._resourceRecords;
  }

  // ssl_settings - computed: false, optional: true, required: false
  private _sslSettings = new GoogleAppEngineDomainMappingSslSettingsOutputReference(this, "ssl_settings");
  public get sslSettings() {
    return this._sslSettings;
  }
  public putSslSettings(value: GoogleAppEngineDomainMappingSslSettings) {
    this._sslSettings.internalValue = value;
  }
  public resetSslSettings() {
    this._sslSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSettingsInput() {
    return this._sslSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleAppEngineDomainMappingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleAppEngineDomainMappingTimeouts) {
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
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      override_strategy: cdktf.stringToTerraform(this._overrideStrategy),
      project: cdktf.stringToTerraform(this._project),
      ssl_settings: googleAppEngineDomainMappingSslSettingsToTerraform(this._sslSettings.internalValue),
      timeouts: googleAppEngineDomainMappingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      override_strategy: {
        value: cdktf.stringToHclTerraform(this._overrideStrategy),
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
      ssl_settings: {
        value: googleAppEngineDomainMappingSslSettingsToHclTerraform(this._sslSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleAppEngineDomainMappingSslSettingsList",
      },
      timeouts: {
        value: googleAppEngineDomainMappingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleAppEngineDomainMappingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
