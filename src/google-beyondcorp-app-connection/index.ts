// https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleBeyondcorpAppConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of AppConnectors that are authorised to be associated with this AppConnection
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#connectors GoogleBeyondcorpAppConnection#connectors}
  */
  readonly connectors?: string[];
  /**
  * An arbitrary user-provided name for the AppConnection.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#display_name GoogleBeyondcorpAppConnection#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#id GoogleBeyondcorpAppConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#labels GoogleBeyondcorpAppConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * ID of the AppConnection.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#name GoogleBeyondcorpAppConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#project GoogleBeyondcorpAppConnection#project}
  */
  readonly project?: string;
  /**
  * The region of the AppConnection.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#region GoogleBeyondcorpAppConnection#region}
  */
  readonly region?: string;
  /**
  * The type of network connectivity used by the AppConnection. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#type
for a list of possible values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#type GoogleBeyondcorpAppConnection#type}
  */
  readonly type?: string;
  /**
  * application_endpoint block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#application_endpoint GoogleBeyondcorpAppConnection#application_endpoint}
  */
  readonly applicationEndpoint: GoogleBeyondcorpAppConnectionApplicationEndpoint;
  /**
  * gateway block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#gateway GoogleBeyondcorpAppConnection#gateway}
  */
  readonly gateway?: GoogleBeyondcorpAppConnectionGateway;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#timeouts GoogleBeyondcorpAppConnection#timeouts}
  */
  readonly timeouts?: GoogleBeyondcorpAppConnectionTimeouts;
}
export interface GoogleBeyondcorpAppConnectionApplicationEndpoint {
  /**
  * Hostname or IP address of the remote application endpoint.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#host GoogleBeyondcorpAppConnection#host}
  */
  readonly host: string;
  /**
  * Port of the remote application endpoint.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#port GoogleBeyondcorpAppConnection#port}
  */
  readonly port: number;
}

export function googleBeyondcorpAppConnectionApplicationEndpointToTerraform(struct?: GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference | GoogleBeyondcorpAppConnectionApplicationEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpAppConnectionApplicationEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpAppConnectionApplicationEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface GoogleBeyondcorpAppConnectionGateway {
  /**
  * AppGateway name in following format: projects/{project_id}/locations/{locationId}/appgateways/{gateway_id}.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#app_gateway GoogleBeyondcorpAppConnection#app_gateway}
  */
  readonly appGateway: string;
  /**
  * The type of hosting used by the gateway. Refer to
https://cloud.google.com/beyondcorp/docs/reference/rest/v1/projects.locations.appConnections#Type_1
for a list of possible values.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#type GoogleBeyondcorpAppConnection#type}
  */
  readonly type?: string;
}

export function googleBeyondcorpAppConnectionGatewayToTerraform(struct?: GoogleBeyondcorpAppConnectionGatewayOutputReference | GoogleBeyondcorpAppConnectionGateway): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_gateway: cdktf.stringToTerraform(struct!.appGateway),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class GoogleBeyondcorpAppConnectionGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleBeyondcorpAppConnectionGateway | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.appGateway = this._appGateway;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleBeyondcorpAppConnectionGateway | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appGateway = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appGateway = value.appGateway;
      this._type = value.type;
    }
  }

  // app_gateway - computed: false, optional: false, required: true
  private _appGateway?: string; 
  public get appGateway() {
    return this.getStringAttribute('app_gateway');
  }
  public set appGateway(value: string) {
    this._appGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appGatewayInput() {
    return this._appGateway;
  }

  // ingress_port - computed: true, optional: false, required: false
  public get ingressPort() {
    return this.getNumberAttribute('ingress_port');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}
export interface GoogleBeyondcorpAppConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#create GoogleBeyondcorpAppConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#delete GoogleBeyondcorpAppConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection#update GoogleBeyondcorpAppConnection#update}
  */
  readonly update?: string;
}

export function googleBeyondcorpAppConnectionTimeoutsToTerraform(struct?: GoogleBeyondcorpAppConnectionTimeouts | cdktf.IResolvable): any {
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

export class GoogleBeyondcorpAppConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleBeyondcorpAppConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GoogleBeyondcorpAppConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection google_beyondcorp_app_connection}
*/
export class GoogleBeyondcorpAppConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_beyondcorp_app_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.69.1/docs/resources/google_beyondcorp_app_connection google_beyondcorp_app_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleBeyondcorpAppConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleBeyondcorpAppConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_beyondcorp_app_connection',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.69.1',
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
    this._connectors = config.connectors;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._type = config.type;
    this._applicationEndpoint.internalValue = config.applicationEndpoint;
    this._gateway.internalValue = config.gateway;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connectors - computed: false, optional: true, required: false
  private _connectors?: string[]; 
  public get connectors() {
    return this.getListAttribute('connectors');
  }
  public set connectors(value: string[]) {
    this._connectors = value;
  }
  public resetConnectors() {
    this._connectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorsInput() {
    return this._connectors;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // application_endpoint - computed: false, optional: false, required: true
  private _applicationEndpoint = new GoogleBeyondcorpAppConnectionApplicationEndpointOutputReference(this, "application_endpoint");
  public get applicationEndpoint() {
    return this._applicationEndpoint;
  }
  public putApplicationEndpoint(value: GoogleBeyondcorpAppConnectionApplicationEndpoint) {
    this._applicationEndpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationEndpointInput() {
    return this._applicationEndpoint.internalValue;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new GoogleBeyondcorpAppConnectionGatewayOutputReference(this, "gateway");
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: GoogleBeyondcorpAppConnectionGateway) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleBeyondcorpAppConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleBeyondcorpAppConnectionTimeouts) {
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
      connectors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectors),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      type: cdktf.stringToTerraform(this._type),
      application_endpoint: googleBeyondcorpAppConnectionApplicationEndpointToTerraform(this._applicationEndpoint.internalValue),
      gateway: googleBeyondcorpAppConnectionGatewayToTerraform(this._gateway.internalValue),
      timeouts: googleBeyondcorpAppConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
