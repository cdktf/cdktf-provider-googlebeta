// https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleDnsRecordSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the zone in which this record set will reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#managed_zone GoogleDnsRecordSet#managed_zone}
  */
  readonly managedZone: string;
  /**
  * The DNS name this record set will apply to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#name GoogleDnsRecordSet#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#project GoogleDnsRecordSet#project}
  */
  readonly project?: string;
  /**
  * The string data for the records in this record set whose meaning depends on the DNS type. For TXT record, if the string data contains spaces, add surrounding \" if you don't want your string to get split on spaces. To specify a single record value longer than 255 characters such as a TXT record for DKIM, add \"\" inside the Terraform configuration string (e.g. "first255characters\"\"morecharacters").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas?: string[];
  /**
  * The time-to-live of this record set (seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#ttl GoogleDnsRecordSet#ttl}
  */
  readonly ttl?: number;
  /**
  * The DNS record set type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#type GoogleDnsRecordSet#type}
  */
  readonly type: string;
  /**
  * routing_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#routing_policy GoogleDnsRecordSet#routing_policy}
  */
  readonly routingPolicy?: GoogleDnsRecordSetRoutingPolicy;
}
export interface GoogleDnsRecordSetRoutingPolicyGeo {
  /**
  * The location name defined in Google Cloud.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#location GoogleDnsRecordSet#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas: string[];
}

export function googleDnsRecordSetRoutingPolicyGeoToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyGeo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform)(struct!.rrdatas),
  }
}

export interface GoogleDnsRecordSetRoutingPolicyWrr {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#rrdatas GoogleDnsRecordSet#rrdatas}
  */
  readonly rrdatas: string[];
  /**
  * The ratio of traffic routed to the target.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#weight GoogleDnsRecordSet#weight}
  */
  readonly weight: number;
}

export function googleDnsRecordSetRoutingPolicyWrrToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyWrr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rrdatas: cdktf.listMapper(cdktf.stringToTerraform)(struct!.rrdatas),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface GoogleDnsRecordSetRoutingPolicy {
  /**
  * geo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#geo GoogleDnsRecordSet#geo}
  */
  readonly geo?: GoogleDnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable;
  /**
  * wrr block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set#wrr GoogleDnsRecordSet#wrr}
  */
  readonly wrr?: GoogleDnsRecordSetRoutingPolicyWrr[] | cdktf.IResolvable;
}

export function googleDnsRecordSetRoutingPolicyToTerraform(struct?: GoogleDnsRecordSetRoutingPolicyOutputReference | GoogleDnsRecordSetRoutingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo: cdktf.listMapper(googleDnsRecordSetRoutingPolicyGeoToTerraform)(struct!.geo),
    wrr: cdktf.listMapper(googleDnsRecordSetRoutingPolicyWrrToTerraform)(struct!.wrr),
  }
}

export class GoogleDnsRecordSetRoutingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleDnsRecordSetRoutingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geo !== undefined) {
      hasAnyValues = true;
      internalValueResult.geo = this._geo;
    }
    if (this._wrr !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrr = this._wrr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleDnsRecordSetRoutingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geo = undefined;
      this._wrr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geo = value.geo;
      this._wrr = value.wrr;
    }
  }

  // geo - computed: false, optional: true, required: false
  private _geo?: GoogleDnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable; 
  public get geo() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('geo');
  }
  public set geo(value: GoogleDnsRecordSetRoutingPolicyGeo[] | cdktf.IResolvable) {
    this._geo = value;
  }
  public resetGeo() {
    this._geo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoInput() {
    return this._geo;
  }

  // wrr - computed: false, optional: true, required: false
  private _wrr?: GoogleDnsRecordSetRoutingPolicyWrr[] | cdktf.IResolvable; 
  public get wrr() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('wrr');
  }
  public set wrr(value: GoogleDnsRecordSetRoutingPolicyWrr[] | cdktf.IResolvable) {
    this._wrr = value;
  }
  public resetWrr() {
    this._wrr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrrInput() {
    return this._wrr;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set google_dns_record_set}
*/
export class GoogleDnsRecordSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_record_set";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google-beta/r/google_dns_record_set google_dns_record_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleDnsRecordSetConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleDnsRecordSetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_record_set',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '4.21.0',
        providerVersionConstraint: '~> 4.17'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedZone = config.managedZone;
    this._name = config.name;
    this._project = config.project;
    this._rrdatas = config.rrdatas;
    this._ttl = config.ttl;
    this._type = config.type;
    this._routingPolicy.internalValue = config.routingPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_zone - computed: false, optional: false, required: true
  private _managedZone?: string; 
  public get managedZone() {
    return this.getStringAttribute('managed_zone');
  }
  public set managedZone(value: string) {
    this._managedZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedZoneInput() {
    return this._managedZone;
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

  // rrdatas - computed: false, optional: true, required: false
  private _rrdatas?: string[]; 
  public get rrdatas() {
    return this.getListAttribute('rrdatas');
  }
  public set rrdatas(value: string[]) {
    this._rrdatas = value;
  }
  public resetRrdatas() {
    this._rrdatas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrdatasInput() {
    return this._rrdatas;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // routing_policy - computed: false, optional: true, required: false
  private _routingPolicy = new GoogleDnsRecordSetRoutingPolicyOutputReference(this, "routing_policy");
  public get routingPolicy() {
    return this._routingPolicy;
  }
  public putRoutingPolicy(value: GoogleDnsRecordSetRoutingPolicy) {
    this._routingPolicy.internalValue = value;
  }
  public resetRoutingPolicy() {
    this._routingPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingPolicyInput() {
    return this._routingPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_zone: cdktf.stringToTerraform(this._managedZone),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      rrdatas: cdktf.listMapper(cdktf.stringToTerraform)(this._rrdatas),
      ttl: cdktf.numberToTerraform(this._ttl),
      type: cdktf.stringToTerraform(this._type),
      routing_policy: googleDnsRecordSetRoutingPolicyToTerraform(this._routingPolicy.internalValue),
    };
  }
}
