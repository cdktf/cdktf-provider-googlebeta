// https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A textual description field. Defaults to 'Managed by Terraform'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#description GoogleDnsPolicy#description}
  */
  readonly description?: string;
  /**
  * Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#enable_inbound_forwarding GoogleDnsPolicy#enable_inbound_forwarding}
  */
  readonly enableInboundForwarding?: boolean | cdktf.IResolvable;
  /**
  * Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#enable_logging GoogleDnsPolicy#enable_logging}
  */
  readonly enableLogging?: boolean | cdktf.IResolvable;
  /**
  * User assigned name for this policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#name GoogleDnsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#project GoogleDnsPolicy#project}
  */
  readonly project?: string;
  /**
  * alternative_name_server_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#alternative_name_server_config GoogleDnsPolicy#alternative_name_server_config}
  */
  readonly alternativeNameServerConfig?: GoogleDnsPolicyAlternativeNameServerConfig;
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#networks GoogleDnsPolicy#networks}
  */
  readonly networks?: GoogleDnsPolicyNetworks[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#timeouts GoogleDnsPolicy#timeouts}
  */
  readonly timeouts?: GoogleDnsPolicyTimeouts;
}
export interface GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers {
  /**
  * Forwarding path for this TargetNameServer. If unset or 'default' Cloud DNS will make forwarding
decision based on address ranges, i.e. RFC1918 addresses go to the VPC, Non-RFC1918 addresses go
to the Internet. When set to 'private', Cloud DNS will always send queries through VPC for this target Possible values: ["default", "private"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#forwarding_path GoogleDnsPolicy#forwarding_path}
  */
  readonly forwardingPath?: string;
  /**
  * IPv4 address to forward to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#ipv4_address GoogleDnsPolicy#ipv4_address}
  */
  readonly ipv4Address: string;
}

export function googleDnsPolicyAlternativeNameServerConfigTargetNameServersToTerraform(struct?: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forwarding_path: cdktf.stringToTerraform(struct!.forwardingPath),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
  }
}

export interface GoogleDnsPolicyAlternativeNameServerConfig {
  /**
  * target_name_servers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#target_name_servers GoogleDnsPolicy#target_name_servers}
  */
  readonly targetNameServers: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers[] | cdktf.IResolvable;
}

export function googleDnsPolicyAlternativeNameServerConfigToTerraform(struct?: GoogleDnsPolicyAlternativeNameServerConfigOutputReference | GoogleDnsPolicyAlternativeNameServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_name_servers: cdktf.listMapper(googleDnsPolicyAlternativeNameServerConfigTargetNameServersToTerraform)(struct!.targetNameServers),
  }
}

export class GoogleDnsPolicyAlternativeNameServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsPolicyAlternativeNameServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetNameServers = this._targetNameServers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsPolicyAlternativeNameServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetNameServers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetNameServers = value.targetNameServers;
    }
  }

  // target_name_servers - computed: false, optional: false, required: true
  private _targetNameServers?: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers[] | cdktf.IResolvable; 
  public get targetNameServers() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('target_name_servers')));
  }
  public set targetNameServers(value: GoogleDnsPolicyAlternativeNameServerConfigTargetNameServers[] | cdktf.IResolvable) {
    this._targetNameServers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameServersInput() {
    return this._targetNameServers;
  }
}
export interface GoogleDnsPolicyNetworks {
  /**
  * The id or fully qualified URL of the VPC network to forward queries to.
This should be formatted like 'projects/{project}/global/networks/{network}' or
'https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#network_url GoogleDnsPolicy#network_url}
  */
  readonly networkUrl: string;
}

export function googleDnsPolicyNetworksToTerraform(struct?: GoogleDnsPolicyNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_url: cdktf.stringToTerraform(struct!.networkUrl),
  }
}

export interface GoogleDnsPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#create GoogleDnsPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#delete GoogleDnsPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy#update GoogleDnsPolicy#update}
  */
  readonly update?: string;
}

export function googleDnsPolicyTimeoutsToTerraform(struct?: GoogleDnsPolicyTimeoutsOutputReference | GoogleDnsPolicyTimeouts | cdktf.IResolvable): any {
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

export class GoogleDnsPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsPolicyTimeouts | undefined {
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

  public set internalValue(value: GoogleDnsPolicyTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy google_dns_policy}
*/
export class GoogleDnsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_policy google_dns_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_policy',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.22.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enableInboundForwarding = config.enableInboundForwarding;
    this._enableLogging = config.enableLogging;
    this._name = config.name;
    this._project = config.project;
    this._alternativeNameServerConfig.internalValue = config.alternativeNameServerConfig;
    this._networks = config.networks;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_inbound_forwarding - computed: false, optional: true, required: false
  private _enableInboundForwarding?: boolean | cdktf.IResolvable; 
  public get enableInboundForwarding() {
    return this.getBooleanAttribute('enable_inbound_forwarding');
  }
  public set enableInboundForwarding(value: boolean | cdktf.IResolvable) {
    this._enableInboundForwarding = value;
  }
  public resetEnableInboundForwarding() {
    this._enableInboundForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInboundForwardingInput() {
    return this._enableInboundForwarding;
  }

  // enable_logging - computed: false, optional: true, required: false
  private _enableLogging?: boolean | cdktf.IResolvable; 
  public get enableLogging() {
    return this.getBooleanAttribute('enable_logging');
  }
  public set enableLogging(value: boolean | cdktf.IResolvable) {
    this._enableLogging = value;
  }
  public resetEnableLogging() {
    this._enableLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLoggingInput() {
    return this._enableLogging;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // alternative_name_server_config - computed: false, optional: true, required: false
  private _alternativeNameServerConfig = new GoogleDnsPolicyAlternativeNameServerConfigOutputReference(this, "alternative_name_server_config");
  public get alternativeNameServerConfig() {
    return this._alternativeNameServerConfig;
  }
  public putAlternativeNameServerConfig(value: GoogleDnsPolicyAlternativeNameServerConfig) {
    this._alternativeNameServerConfig.internalValue = value;
  }
  public resetAlternativeNameServerConfig() {
    this._alternativeNameServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeNameServerConfigInput() {
    return this._alternativeNameServerConfig.internalValue;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: GoogleDnsPolicyNetworks[] | cdktf.IResolvable; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('networks')));
  }
  public set networks(value: GoogleDnsPolicyNetworks[] | cdktf.IResolvable) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleDnsPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleDnsPolicyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      enable_inbound_forwarding: cdktf.booleanToTerraform(this._enableInboundForwarding),
      enable_logging: cdktf.booleanToTerraform(this._enableLogging),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      alternative_name_server_config: googleDnsPolicyAlternativeNameServerConfigToTerraform(this._alternativeNameServerConfig.internalValue),
      networks: cdktf.listMapper(googleDnsPolicyNetworksToTerraform)(this._networks),
      timeouts: googleDnsPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
