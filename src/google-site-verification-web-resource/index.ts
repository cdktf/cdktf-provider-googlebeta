/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GoogleSiteVerificationWebResourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#id GoogleSiteVerificationWebResource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The verification method for the Site Verification system to use to verify
  * this site or domain. Possible values: ["ANALYTICS", "DNS_CNAME", "DNS_TXT", "FILE", "META", "TAG_MANAGER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#verification_method GoogleSiteVerificationWebResource#verification_method}
  */
  readonly verificationMethod: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#site GoogleSiteVerificationWebResource#site}
  */
  readonly site: GoogleSiteVerificationWebResourceSite;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#timeouts GoogleSiteVerificationWebResource#timeouts}
  */
  readonly timeouts?: GoogleSiteVerificationWebResourceTimeouts;
}
export interface GoogleSiteVerificationWebResourceSite {
  /**
  * The site identifier. If the type is set to SITE, the identifier is a URL. If the type is
  * set to INET_DOMAIN, the identifier is a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#identifier GoogleSiteVerificationWebResource#identifier}
  */
  readonly identifier: string;
  /**
  * The type of resource to be verified. Possible values: ["INET_DOMAIN", "SITE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#type GoogleSiteVerificationWebResource#type}
  */
  readonly type: string;
}

export function googleSiteVerificationWebResourceSiteToTerraform(struct?: GoogleSiteVerificationWebResourceSiteOutputReference | GoogleSiteVerificationWebResourceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier: cdktf.stringToTerraform(struct!.identifier),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function googleSiteVerificationWebResourceSiteToHclTerraform(struct?: GoogleSiteVerificationWebResourceSiteOutputReference | GoogleSiteVerificationWebResourceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSiteVerificationWebResourceSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GoogleSiteVerificationWebResourceSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSiteVerificationWebResourceSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifier = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifier = value.identifier;
      this._type = value.type;
    }
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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
}
export interface GoogleSiteVerificationWebResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#create GoogleSiteVerificationWebResource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#delete GoogleSiteVerificationWebResource#delete}
  */
  readonly delete?: string;
}

export function googleSiteVerificationWebResourceTimeoutsToTerraform(struct?: GoogleSiteVerificationWebResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function googleSiteVerificationWebResourceTimeoutsToHclTerraform(struct?: GoogleSiteVerificationWebResourceTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GoogleSiteVerificationWebResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GoogleSiteVerificationWebResourceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GoogleSiteVerificationWebResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource google_site_verification_web_resource}
*/
export class GoogleSiteVerificationWebResource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_site_verification_web_resource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GoogleSiteVerificationWebResource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GoogleSiteVerificationWebResource to import
  * @param importFromId The id of the existing GoogleSiteVerificationWebResource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GoogleSiteVerificationWebResource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_site_verification_web_resource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.12.0/docs/resources/google_site_verification_web_resource google_site_verification_web_resource} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GoogleSiteVerificationWebResourceConfig
  */
  public constructor(scope: Construct, id: string, config: GoogleSiteVerificationWebResourceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_site_verification_web_resource',
      terraformGeneratorMetadata: {
        providerName: 'google-beta',
        providerVersion: '6.12.0',
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
    this._verificationMethod = config.verificationMethod;
    this._site.internalValue = config.site;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // owners - computed: true, optional: false, required: false
  public get owners() {
    return this.getListAttribute('owners');
  }

  // verification_method - computed: false, optional: false, required: true
  private _verificationMethod?: string; 
  public get verificationMethod() {
    return this.getStringAttribute('verification_method');
  }
  public set verificationMethod(value: string) {
    this._verificationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationMethodInput() {
    return this._verificationMethod;
  }

  // web_resource_id - computed: true, optional: false, required: false
  public get webResourceId() {
    return this.getStringAttribute('web_resource_id');
  }

  // site - computed: false, optional: false, required: true
  private _site = new GoogleSiteVerificationWebResourceSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: GoogleSiteVerificationWebResourceSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GoogleSiteVerificationWebResourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GoogleSiteVerificationWebResourceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      verification_method: cdktf.stringToTerraform(this._verificationMethod),
      site: googleSiteVerificationWebResourceSiteToTerraform(this._site.internalValue),
      timeouts: googleSiteVerificationWebResourceTimeoutsToTerraform(this._timeouts.internalValue),
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
      verification_method: {
        value: cdktf.stringToHclTerraform(this._verificationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site: {
        value: googleSiteVerificationWebResourceSiteToHclTerraform(this._site.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GoogleSiteVerificationWebResourceSiteList",
      },
      timeouts: {
        value: googleSiteVerificationWebResourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GoogleSiteVerificationWebResourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
